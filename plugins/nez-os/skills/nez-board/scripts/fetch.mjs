#!/usr/bin/env node
// NEZ OS advisor source fetcher (written for NEZ OS).
// Collects public sources for a new advisor into a build folder: one text file per source,
// plus a numbered source list (S1, S2, ...) that the advisor's brain cites.
//
//   node fetch.mjs <buildDir> <url> [<url> ...]          fetch links
//   node fetch.mjs <buildDir> --list urls.txt              fetch every link in a file (one per line, # = comment)
//   node fetch.mjs <buildDir> --add <file> [--title ".."] [--url ..] [--date YYYY-MM-DD] [--kind ..]
//   node fetch.mjs <buildDir> --manifest                   summary of what you have
//   node fetch.mjs <buildDir> --sources-table [--name "Full Name"]   print the Sources table for the brain
//
// Options: --keep-short (save thin pages instead of skipping them)
//
// Web pages become plain text. YouTube links become transcripts with [mm:ss] markers, using
// yt-dlp when installed, otherwise YouTube's public caption tracks. PDFs need pdftotext; without
// it the PDF is saved for you to read and --add. Re-runs skip links already in the list.
// Node 20+, nothing to install.

import { mkdir, readFile, writeFile, readdir, rm, mkdtemp } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join, basename, extname, resolve } from "node:path";
import { tmpdir } from "node:os";
import { execFile, spawnSync } from "node:child_process";
import { promisify } from "node:util";

// Node's built-in fetch ignores HTTP(S)_PROXY unless NODE_USE_ENV_PROXY=1 (Node 22.21+ / 24+).
// When a proxy is configured, re-launch this script once with that setting so downloads work.
const proxySet = ["HTTPS_PROXY", "https_proxy", "HTTP_PROXY", "http_proxy", "ALL_PROXY", "all_proxy"].some((k) => process.env[k]);
if (proxySet && !process.env.NODE_USE_ENV_PROXY) {
  const child = spawnSync(process.execPath, process.argv.slice(1), {
    stdio: "inherit",
    env: { ...process.env, NODE_USE_ENV_PROXY: "1", NODE_NO_WARNINGS: "1" },
  });
  process.exit(child.status ?? 1);
}

const run = promisify(execFile);
const MIN_WORDS = 250;          // fewer words than this = probably a login wall, paywall or script-built page
const SHORT_WORDS = 800;        // flagged as short in the summary
const PAUSE_MS = 500;           // pause between sites
const BROWSER_UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0 Safari/537.36";

const argv = process.argv.slice(2);
const flag = (name) => argv.includes(name);
const opt = (name) => {
  const i = argv.indexOf(name);
  return i > -1 && argv[i + 1] && !argv[i + 1].startsWith("--") ? argv[i + 1] : "";
};
const wordCount = (t) => (t.match(/\S+/g) || []).length;
const slug = (t) => (t || "source").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 50) || "source";
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const installed = (bin) => !spawnSync(bin, ["--version"], { stdio: "ignore" }).error;

function usage(msg) {
  if (msg) console.error(`Error: ${msg}\n`);
  console.error(`Usage:
  node fetch.mjs <buildDir> <url> [<url> ...]
  node fetch.mjs <buildDir> --list urls.txt
  node fetch.mjs <buildDir> --add <file> [--title "..."] [--url ...] [--date YYYY-MM-DD] [--kind ...]
  node fetch.mjs <buildDir> --manifest
  node fetch.mjs <buildDir> --sources-table [--name "Full Name"]`);
  process.exit(1);
}

// ---------------------------------------------------------------- source list
class SourceList {
  constructor(dir) {
    this.dir = dir;
    this.textDir = join(dir, "texts");
    this.file = join(dir, "manifest.json");
    this.items = [];
  }
  async load() {
    await mkdir(this.textDir, { recursive: true });
    if (existsSync(this.file)) this.items = JSON.parse(await readFile(this.file, "utf8")).sources || [];
    return this;
  }
  async save() {
    await writeFile(this.file, JSON.stringify({ sources: this.items }, null, 2) + "\n");
  }
  has(link) {
    return this.items.some((s) => s.link && s.link === link);
  }
  nextId() {
    const max = this.items.reduce((m, s) => Math.max(m, parseInt(String(s.id).replace(/\D/g, ""), 10) || 0), 0);
    return `S${max + 1}`;
  }
  async add(meta, text) {
    const id = this.nextId();
    const name = `${id}-${slug(meta.title)}.txt`;
    const header = [meta.title || "(untitled)", `Source ${id} | ${meta.link || "local file"} | ${meta.date || "undated"} | ${meta.kind}${meta.channel ? " | " + meta.channel : ""}`, ""].join("\n");
    await writeFile(join(this.textDir, name), `${header}\n${text.trim()}\n`);
    const rec = { id, title: meta.title || "(untitled)", kind: meta.kind, date: meta.date || "", link: meta.link || "", channel: meta.channel || "", minutes: meta.minutes || 0, file: `texts/${name}`, words: wordCount(text) };
    this.items.push(rec);
    await this.save();
    return rec;
  }
}

// ---------------------------------------------------------------- web pages
const NAMED = { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " ", ndash: "-", mdash: "-", hellip: "...", lsquo: "'", rsquo: "'", ldquo: '"', rdquo: '"' };
function decode(s) {
  return s
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(Number(d)))
    .replace(/&([a-z]+);/gi, (m, n) => NAMED[n.toLowerCase()] ?? m);
}

function pageToText(html) {
  let h = html.replace(/<!--[\s\S]*?-->/g, " ");
  for (const tag of ["script", "style", "noscript", "svg", "nav", "header", "footer", "aside", "form", "iframe", "button", "template"]) {
    h = h.replace(new RegExp(`<${tag}\\b[\\s\\S]*?<\\/${tag}>`, "gi"), " ");
  }
  const body = h.match(/<article\b[\s\S]*<\/article>/i) || h.match(/<main\b[\s\S]*<\/main>/i);
  if (body && wordCount(body[0].replace(/<[^>]+>/g, " ")) >= MIN_WORDS) h = body[0];
  else h = (h.match(/<body\b[\s\S]*<\/body>/i) || [h])[0];
  h = h
    .replace(/<h([1-6])\b[^>]*>/gi, (_, n) => `\n\n${"#".repeat(Number(n))} `)
    .replace(/<\/h[1-6]>/gi, "\n\n")
    .replace(/<li\b[^>]*>/gi, "\n- ")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/(p|div|section|blockquote|tr|ul|ol|table|pre|figure)>/gi, "\n\n")
    .replace(/<[^>]+>/g, " ");
  return decode(h).replace(/[ \t ]+/g, " ").replace(/ *\n */g, "\n").replace(/\n{3,}/g, "\n\n").trim();
}

const MONTHS = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
function pageInfo(html, url, text) {
  const grab = (re) => {
    const m = html.match(re);
    return m ? decode(m[1]).trim() : "";
  };
  const title = grab(/<meta[^>]+property=["']og:title["'][^>]+content=["']([^"']+)/i) || grab(/<title[^>]*>([^<]+)<\/title>/i) || url;
  let date =
    grab(/<meta[^>]+(?:property|name|itemprop)=["'](?:article:published_time|datePublished|date|pubdate|publish-date|dc\.date)["'][^>]+content=["']([^"']+)/i) ||
    grab(/"datePublished"\s*:\s*"([^"]+)"/) ||
    grab(/<time[^>]+datetime=["']([^"']+)/i);
  if (!date) {
    const u = url.match(/\/((?:19|20)\d\d)\/(\d\d)\//);
    if (u) date = `${u[1]}-${u[2]}`;
  }
  if (!date && text) {
    const t = text.slice(0, 800).match(/\b(January|February|March|April|May|June|July|August|September|October|November|December) (?:\d{1,2}, )?((?:19|20)\d\d)\b/);
    if (t) date = `${t[2]}-${String(MONTHS.indexOf(t[1].toLowerCase()) + 1).padStart(2, "0")}`;
  }
  return { title: title.replace(/\s+/g, " ").slice(0, 160), date: (date.match(/\d{4}(-\d\d){0,2}/) || [""])[0] };
}

async function getUrl(url, init = {}) {
  const res = await fetch(url, {
    redirect: "follow",
    signal: AbortSignal.timeout(45000),
    ...init,
    headers: { "user-agent": BROWSER_UA, "accept-language": "en-US,en;q=0.9", ...(init.headers || {}) },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res;
}

// ---------------------------------------------------------------- youtube
const youtubeId = (u) => (u.match(/(?:youtu\.be\/|[?&]v=|\/shorts\/|\/live\/|\/embed\/)([\w-]{11})/) || [])[1];
const mmss = (ms) => {
  const s = Math.floor((ms || 0) / 1000);
  return `[${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}]`;
};

// YouTube "json3" captions -> paragraphs of roughly 60 words, each starting with its timestamp
function captionsToText(data) {
  const paras = [];
  let words = [];
  let start = null;
  const flush = () => {
    if (words.length) paras.push(`${mmss(start)} ${words.join(" ")}`);
    words = [];
    start = null;
  };
  for (const ev of data.events || []) {
    if (!ev.segs) continue;
    const line = ev.segs.map((s) => s.utf8 || "").join("").replace(/\s+/g, " ").trim();
    if (!line) continue;
    if (start === null) start = ev.tStartMs || 0;
    words.push(line);
    if (wordCount(words.join(" ")) >= 60) flush();
  }
  flush();
  return decode(paras.join("\n\n")).replace(/\[(Music|Applause|Laughter)\]/gi, "").replace(/ {2,}/g, " ").trim();
}

async function youtubeWithYtDlp(id) {
  const work = await mkdtemp(join(tmpdir(), "nez-yt-"));
  const url = `https://www.youtube.com/watch?v=${id}`;
  try {
    const { stdout } = await run("yt-dlp", ["-J", "--no-warnings", url], { maxBuffer: 64 << 20, timeout: 120000 });
    const info = JSON.parse(stdout);
    await run("yt-dlp", ["--skip-download", "--write-subs", "--write-auto-subs", "--sub-langs", "en.*,en,es.*,es", "--sub-format", "json3", "--no-warnings", "-o", join(work, "v"), url], { timeout: 120000 });
    const files = (await readdir(work)).filter((f) => f.endsWith(".json3"));
    const pick = files.find((f) => /\.en\.json3$/.test(f)) || files.find((f) => /\.en/.test(f)) || files[0];
    if (!pick) throw new Error("no captions");
    const text = captionsToText(JSON.parse(await readFile(join(work, pick), "utf8")));
    const d = info.upload_date || "";
    return { title: info.title, date: d ? `${d.slice(0, 4)}-${d.slice(4, 6)}-${d.slice(6, 8)}` : "", text, channel: info.channel || "", seconds: info.duration || 0 };
  } finally {
    await rm(work, { recursive: true, force: true });
  }
}

async function youtubeWithCaptions(id) {
  const res = await getUrl("https://www.youtube.com/youtubei/v1/player?prettyPrint=false", {
    method: "POST",
    headers: { "content-type": "application/json", "user-agent": "com.google.android.youtube/20.10.38 (Linux; U; Android 11) gzip" },
    body: JSON.stringify({ videoId: id, context: { client: { clientName: "ANDROID", clientVersion: "20.10.38", androidSdkVersion: 30, hl: "en", gl: "US" } } }),
  });
  const player = await res.json();
  const tracks = player.captions?.playerCaptionsTracklistRenderer?.captionTracks || [];
  const english = tracks.filter((t) => /^en/.test(t.languageCode));
  const spanish = tracks.filter((t) => /^es/.test(t.languageCode));
  const pool = english.length ? english : spanish;
  const track = pool.find((t) => t.kind !== "asr") || pool[0];
  if (!track) throw new Error(player.playabilityStatus?.reason || "no captions");
  const raw = await (await getUrl(track.baseUrl.replace(/&fmt=[^&]*/, "") + "&fmt=json3")).text();
  if (!raw.trim()) throw new Error("caption track was empty");
  let date = "";
  try {
    const page = await (await getUrl(`https://www.youtube.com/watch?v=${id}`)).text();
    date = ((page.match(/"(?:publishDate|uploadDate)":"([^"]+)"/) || [])[1] || "").slice(0, 10);
  } catch {}
  return { title: player.videoDetails?.title || id, date, text: captionsToText(JSON.parse(raw)), channel: player.videoDetails?.author || "", seconds: Number(player.videoDetails?.lengthSeconds) || 0 };
}

async function youtube(id) {
  const problems = [];
  if (installed("yt-dlp")) {
    try {
      return await youtubeWithYtDlp(id);
    } catch (e) {
      problems.push(`yt-dlp: ${String(e.message).split("\n")[0]}`);
    }
  }
  try {
    return await youtubeWithCaptions(id);
  } catch (e) {
    problems.push(`captions: ${e.message}`);
  }
  throw new Error(`${problems.join("; ")}. Ask the agent to paste the transcript (video > ...more > Show transcript).`);
}

// ---------------------------------------------------------------- pdf
async function pdfToText(file) {
  if (!installed("pdftotext")) return null;
  const { stdout } = await run("pdftotext", ["-layout", "-enc", "UTF-8", file, "-"], { maxBuffer: 256 << 20 });
  return stdout;
}

// ---------------------------------------------------------------- one link
function kindFromUrl(url) {
  if (/podcast|episode|spotify\.com\/episode|podcasts\.apple\.com/i.test(url)) return "podcast";
  if (/instagram|tiktok|facebook|linkedin|x\.com|twitter/i.test(url)) return "post";
  return "article";
}

async function fetchLink(list, rawUrl) {
  const url = rawUrl.trim();
  if (!url || url.startsWith("#")) return;
  if (list.has(url)) return console.log(`skip   ${url} (already in list)`);
  try {
    const vid = youtubeId(url);
    if (vid) {
      const link = `https://www.youtube.com/watch?v=${vid}`;
      if (list.has(link)) return console.log(`skip   ${url} (already in list)`);
      const v = await youtube(vid);
      const rec = await list.add({ title: v.title, link, date: v.date, kind: "video", channel: v.channel, minutes: Math.round(v.seconds / 60) }, v.text);
      return console.log(`ok     ${rec.id}  ${rec.words.toLocaleString()} words  ${rec.title}`);
    }
    const res = await getUrl(url);
    const type = res.headers.get("content-type") || "";
    if (type.includes("pdf") || /\.pdf($|\?)/i.test(url)) {
      const saved = join(list.textDir, `pending-${slug(basename(new URL(url).pathname, ".pdf"))}.pdf`);
      await writeFile(saved, Buffer.from(await res.arrayBuffer()));
      const text = await pdfToText(saved);
      if (!text) return console.log(`pdf    saved to ${saved}. pdftotext isn't installed: read it, save the text as .txt, then --add it.`);
      await rm(saved);
      const rec = await list.add({ title: basename(saved, ".pdf").replace(/^pending-/, "").replace(/-/g, " "), link: url, date: (url.match(/(?:19|20)\d\d/) || [""])[0], kind: "pdf" }, text);
      return console.log(`ok     ${rec.id}  ${rec.words.toLocaleString()} words  ${rec.title}`);
    }
    const html = await res.text();
    const text = type.includes("text/plain") ? html : pageToText(html);
    const info = pageInfo(html, url, text);
    if (wordCount(text) < MIN_WORDS && !flag("--keep-short")) {
      return console.log(`thin   ${url} (${wordCount(text)} words: login wall, paywall or script-built page. Try another route, or add --keep-short)`);
    }
    const rec = await list.add({ title: info.title, link: url, date: info.date, kind: kindFromUrl(url) }, text);
    console.log(`ok     ${rec.id}  ${rec.words.toLocaleString()} words  ${rec.title}`);
  } catch (e) {
    console.log(`fail   ${url} (${e.message})`);
  }
}

// ---------------------------------------------------------------- local files
async function addFile(list, file) {
  if (!file || !existsSync(file)) usage("--add needs a file that exists");
  let text;
  if (extname(file).toLowerCase() === ".pdf") {
    text = await pdfToText(file);
    if (!text) usage("pdftotext isn't installed: read the PDF, save its text as .txt, then --add that file");
  } else {
    text = await readFile(file, "utf8");
  }
  const rec = await list.add(
    { title: opt("--title") || basename(file).replace(/\.[^.]+$/, ""), link: opt("--url"), date: opt("--date"), kind: opt("--kind") || "notes" },
    text
  );
  console.log(`ok     ${rec.id}  ${rec.words.toLocaleString()} words  ${rec.title}`);
}

// ---------------------------------------------------------------- summaries
function summary(list) {
  const items = list.items;
  if (!items.length) return console.log("No sources yet.");
  const total = items.reduce((n, s) => n + (s.words || 0), 0);
  const years = items.map((s) => s.date).filter(Boolean).sort();
  console.log(`${items.length} sources, ${total.toLocaleString()} words${years.length ? `, ${years[0].slice(0, 4)} to ${years.at(-1).slice(0, 4)}` : ""}`);
  const kinds = {};
  for (const s of items) {
    kinds[s.kind] = kinds[s.kind] || { n: 0, w: 0 };
    kinds[s.kind].n++;
    kinds[s.kind].w += s.words || 0;
  }
  for (const [k, v] of Object.entries(kinds)) console.log(`  ${k}: ${v.n} source${v.n === 1 ? "" : "s"}, ${v.w.toLocaleString()} words`);
  const short = items.filter((s) => (s.words || 0) < SHORT_WORDS).map((s) => s.id);
  if (short.length) console.log(`  short (under ${SHORT_WORDS} words): ${short.join(", ")}`);
  console.log("");
  for (const s of items) console.log(`${s.id}\t${s.kind}\t${s.date || "undated"}\t${(s.words || 0).toLocaleString()} words\t${s.title}`);
}

// The Sources table for the advisor's brain page (see advisor-brain-spec.md)
function sourcesTable(list, name) {
  const cell = (t) => String(t || "").replace(/\|/g, "/").replace(/\s*[—–]\s*/g, ": ");
  const kindName = { article: "article", video: "video", podcast: "podcast", post: "post", pdf: "article", notes: "notes", book: "book", course: "course" };
  const lines = [
    `Sources for ${name || "this advisor"}: ${list.items.length} sources, ${list.items.reduce((n, s) => n + (s.words || 0), 0).toLocaleString()} words. Video dates are upload dates.`,
    "",
    "| Id | Title | Kind | Date | Link |",
    "| --- | --- | --- | --- | --- |",
    ...list.items.map((s) => `| ${s.id} | ${cell(s.title)} | ${kindName[s.kind] || s.kind} | ${s.date || "undated"} | ${s.link || "agent's file"} |`),
  ];
  console.log(lines.join("\n"));
}

// ---------------------------------------------------------------- main
async function main() {
  const dirArg = argv[0];
  if (!dirArg || dirArg.startsWith("--")) usage();
  const list = await new SourceList(resolve(dirArg)).load();

  if (flag("--sources-table")) return sourcesTable(list, opt("--name"));
  if (flag("--manifest")) return summary(list);
  if (flag("--add")) return addFile(list, opt("--add"));

  let urls;
  if (flag("--list")) {
    const file = opt("--list");
    if (!file || !existsSync(file)) usage("--list needs a file of links");
    urls = (await readFile(file, "utf8")).split(/\r?\n/);
  } else {
    urls = argv.slice(1).filter((a) => !a.startsWith("--"));
  }
  if (!urls.length) usage("give at least one link");
  for (const u of urls) {
    await fetchLink(list, u);
    await sleep(PAUSE_MS);
  }
  console.log("");
  summary(list);
}

main().catch((e) => {
  console.error(e.message);
  process.exit(1);
});
