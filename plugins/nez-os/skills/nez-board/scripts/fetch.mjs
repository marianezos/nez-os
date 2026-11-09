#!/usr/bin/env node
// NEZ OS advisor source fetcher.
// Turns web pages into text, YouTube videos into transcripts (via yt-dlp when installed),
// adds local files, and keeps a numbered source list (manifest.json) in a build folder.
//
// Usage:
//   node fetch.mjs <buildDir> <url> [<url> ...]
//   node fetch.mjs <buildDir> --add <file> --title "..." [--url ...] [--date YYYY-MM-DD] [--kind ...]
//   node fetch.mjs <buildDir> --manifest
//
// Requires Node 20+. Optional: yt-dlp on PATH for YouTube transcripts.

import { mkdir, readFile, writeFile, readdir, rm } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join, basename } from "node:path";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { tmpdir } from "node:os";

const run = promisify(execFile);
const THIN_CHARS = 1500;

function usage(msg) {
  if (msg) console.error(`Error: ${msg}\n`);
  console.error(`Usage:
  node fetch.mjs <buildDir> <url> [<url> ...]
  node fetch.mjs <buildDir> --add <file> --title "..." [--url ...] [--date YYYY-MM-DD] [--kind ...]
  node fetch.mjs <buildDir> --manifest`);
  process.exit(1);
}

async function loadManifest(dir) {
  const p = join(dir, "manifest.json");
  if (!existsSync(p)) return { sources: [] };
  return JSON.parse(await readFile(p, "utf8"));
}

async function saveManifest(dir, m) {
  await writeFile(join(dir, "manifest.json"), JSON.stringify(m, null, 2));
}

function nextId(m) {
  const nums = m.sources.map((s) => parseInt(String(s.id).replace(/\D/g, ""), 10)).filter((n) => !isNaN(n));
  return `S${(nums.length ? Math.max(...nums) : 0) + 1}`;
}

function decodeEntities(s) {
  return s
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)));
}

function htmlToText(html) {
  let h = html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, " ")
    .replace(/<(nav|header|footer|aside|form)[\s\S]*?<\/\1>/gi, " ");
  const main = h.match(/<(article|main)[\s\S]*?<\/\1>/i);
  if (main && main[0].length > 2000) h = main[0];
  h = h
    .replace(/<(br|\/p|\/div|\/li|\/h[1-6]|\/tr)[^>]*>/gi, "\n")
    .replace(/<li[^>]*>/gi, "\n- ")
    .replace(/<[^>]+>/g, " ");
  return decodeEntities(h)
    .split("\n")
    .map((l) => l.replace(/\s+/g, " ").trim())
    .filter(Boolean)
    .join("\n");
}

function pageMeta(html) {
  const pick = (re) => {
    const m = html.match(re);
    return m ? decodeEntities(m[1]).trim() : "";
  };
  return {
    title:
      pick(/<meta[^>]+property=["']og:title["'][^>]+content=["']([^"']+)/i) ||
      pick(/<title[^>]*>([^<]+)<\/title>/i),
    date:
      pick(/<meta[^>]+property=["']article:published_time["'][^>]+content=["']([^"']+)/i) ||
      pick(/<meta[^>]+itemprop=["']datePublished["'][^>]+content=["']([^"']+)/i) ||
      pick(/"datePublished"\s*:\s*"([^"]+)"/i),
  };
}

function isYouTube(url) {
  return /(?:youtube\.com\/(?:watch|shorts|live)|youtu\.be\/)/i.test(url);
}

function vttToText(vtt) {
  const lines = vtt
    .split("\n")
    .filter((l) => l && !/^WEBVTT|^Kind:|^Language:|-->|^\d+$|^NOTE/.test(l))
    .map((l) => decodeEntities(l.replace(/<[^>]+>/g, "")).trim())
    .filter(Boolean);
  const out = [];
  for (const l of lines) if (out[out.length - 1] !== l) out.push(l);
  return out.join(" ").replace(/\s+/g, " ");
}

async function fetchYouTube(url) {
  const work = join(tmpdir(), `nez-yt-${Date.now()}`);
  await mkdir(work, { recursive: true });
  try {
    const { stdout } = await run(
      "yt-dlp",
      ["--skip-download", "--write-auto-subs", "--write-subs", "--sub-langs", "en.*,es.*", "--sub-format", "vtt",
       "--print", "%(title)s\t%(upload_date)s", "-o", join(work, "sub"), url],
      { timeout: 180000 }
    );
    const [title = "", d = ""] = stdout.trim().split("\n").pop().split("\t");
    const files = (await readdir(work)).filter((f) => f.endsWith(".vtt"));
    if (!files.length) return { title, date: fmtDate(d), text: "", note: "no captions found" };
    const text = vttToText(await readFile(join(work, files[0]), "utf8"));
    return { title, date: fmtDate(d), text };
  } catch (e) {
    const missing = e.code === "ENOENT";
    return { title: "", date: "", text: "", note: missing ? "yt-dlp not installed: paste the transcript instead" : `yt-dlp failed: ${e.message.split("\n")[0]}` };
  } finally {
    await rm(work, { recursive: true, force: true });
  }
}

function fmtDate(d) {
  if (/^\d{8}$/.test(d)) return `${d.slice(0, 4)}-${d.slice(4, 6)}-${d.slice(6, 8)}`;
  return d ? String(d).slice(0, 10) : "";
}

async function fetchPage(url) {
  const res = await fetch(url, {
    headers: { "User-Agent": "Mozilla/5.0 (NEZ OS advisor builder)", Accept: "text/html,application/xhtml+xml,text/plain" },
    redirect: "follow",
    signal: AbortSignal.timeout(60000),
  });
  if (!res.ok) return { title: "", date: "", text: "", note: `HTTP ${res.status}` };
  const type = res.headers.get("content-type") || "";
  if (type.includes("pdf")) return { title: "", date: "", text: "", note: "PDF: read it directly and use --add" };
  const body = await res.text();
  if (type.includes("text/plain")) return { title: basename(new URL(url).pathname), date: "", text: body.trim() };
  const meta = pageMeta(body);
  return { title: meta.title, date: fmtDate(meta.date), text: htmlToText(body) };
}

function kindFor(url) {
  if (isYouTube(url)) return "video";
  if (/podcast|episode|spotify\.com\/episode|apple\.com\/.*podcast/i.test(url)) return "podcast";
  if (/instagram|tiktok|facebook|linkedin|x\.com|twitter/i.test(url)) return "post";
  return "article";
}

async function store(dir, m, entry, text) {
  const id = nextId(m);
  const file = `${id}.txt`;
  await writeFile(join(dir, file), `${entry.title || "(untitled)"}\n${entry.url || ""}\n${entry.date || ""}\n\n${text}\n`);
  const words = text ? text.split(/\s+/).length : 0;
  const rec = { id, title: entry.title || "(untitled)", kind: entry.kind, date: entry.date || "", link: entry.url || "", file, words, thin: text.length < THIN_CHARS, note: entry.note || "" };
  m.sources.push(rec);
  await saveManifest(dir, m);
  return rec;
}

function report(r) {
  const flag = r.thin ? "  THIN" : "";
  console.log(`${r.id}\t${r.kind}\t${r.date || "-"}\t${r.words} words${flag}\t${r.title}${r.note ? `  (${r.note})` : ""}`);
}

async function main() {
  const args = process.argv.slice(2);
  if (args.length < 2) usage();
  const dir = args[0];
  await mkdir(dir, { recursive: true });
  const m = await loadManifest(dir);

  if (args[1] === "--manifest") {
    if (!m.sources.length) return console.log("No sources yet.");
    console.log("Id\tKind\tDate\tSize\tTitle");
    m.sources.forEach(report);
    return;
  }

  if (args[1] === "--add") {
    const file = args[2];
    if (!file || !existsSync(file)) usage("--add needs a file that exists");
    const opt = (name) => {
      const i = args.indexOf(name);
      return i > -1 ? args[i + 1] : "";
    };
    const text = (await readFile(file, "utf8")).trim();
    const rec = await store(dir, m, { title: opt("--title") || basename(file), url: opt("--url"), date: opt("--date"), kind: opt("--kind") || "notes" }, text);
    report(rec);
    return;
  }

  for (const url of args.slice(1)) {
    if (m.sources.some((s) => s.link === url)) {
      console.log(`skip\talready in list\t${url}`);
      continue;
    }
    let got;
    try {
      got = isYouTube(url) ? await fetchYouTube(url) : await fetchPage(url);
    } catch (e) {
      got = { title: "", date: "", text: "", note: `fetch failed: ${e.message}` };
    }
    const rec = await store(dir, m, { title: got.title, url, date: got.date, kind: kindFor(url), note: got.note }, got.text || "");
    report(rec);
  }
}

main().catch((e) => {
  console.error(e.message);
  process.exit(1);
});
