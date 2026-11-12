// NEZ OS: save a VectCutAPI draft as a project in CapCut, safely.
// The bridge builds the draft in our staging folder (auto deploy off). We copy it into CapCut's project
// folder under the agent's project name, point every file path inside the draft at the new folder,
// give it its own name and ID, and mark it as ours. A project the agent made in CapCut is never replaced.
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { apiClient } from '../services/api-client.js';
import { NEZ_MARKER, capcutDir, capcutProjectsDir, ensureDir } from './paths.js';

export interface SaveResult {
  project_name: string;
  project_folder: string;
  updated: boolean;
  next_step: string;
}

function jsonFiles(dir: string): string[] {
  const found: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== 'assets') found.push(...jsonFiles(p));
    } else if (entry.name.toLowerCase().endsWith('.json')) {
      found.push(p);
    }
  }
  return found;
}

const escapeRegExp = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const jsonInner = (s: string) => JSON.stringify(s).slice(1, -1);

// Point every path string that starts with the staging folder at the project's folder in CapCut.
// Works on the raw JSON text, so nothing else in the draft is reformatted or rounded.
function repointDraft(folder: string, stagedAt: string, finalDest: string): void {
  const pairs = [
    { from: stagedAt.replace(/\//g, '\\'), to: finalDest.replace(/\//g, '\\') },
    { from: stagedAt.replace(/\\/g, '/'), to: finalDest.replace(/\\/g, '/') },
  ];
  const flags = process.platform === 'win32' ? 'gi' : 'g';
  for (const file of jsonFiles(folder)) {
    let text = fs.readFileSync(file, 'utf8');
    for (const { from, to } of pairs) {
      const pattern = new RegExp('"' + escapeRegExp(jsonInner(from)), flags);
      const replacement = '"' + jsonInner(to);
      text = text.replace(pattern, () => replacement);
    }
    fs.writeFileSync(file, text, 'utf8');
  }
}

// Each project gets its own name, ID, folder paths and dates, so CapCut lists it as its own project.
function writeMeta(folder: string, finalDest: string, name: string): void {
  const metaPath = path.join(folder, 'draft_meta_info.json');
  if (!fs.existsSync(metaPath)) return;
  const meta = JSON.parse(fs.readFileSync(metaPath, 'utf8'));
  const nowMicros = Date.now() * 1000;
  Object.assign(meta, {
    draft_name: name,
    draft_id: crypto.randomUUID().toUpperCase(),
    draft_fold_path: finalDest,
    draft_root_path: path.dirname(finalDest),
    tm_draft_create: nowMicros,
    tm_draft_modified: nowMicros,
  });
  fs.writeFileSync(metaPath, JSON.stringify(meta), 'utf8');
}

export async function saveToCapCut(draftId: string, projectName: string): Promise<SaveResult> {
  const name = projectName.trim();
  const projects = capcutProjectsDir();
  if (!projects) {
    throw new Error("CapCut's project folder isn't on this computer yet. Open CapCut once, close it, then save again.");
  }
  const dest = path.join(projects, name);
  const exists = fs.existsSync(dest);
  if (exists && !fs.existsSync(path.join(dest, NEZ_MARKER))) {
    throw new Error(`CapCut already has a project called "${name}" that you made yourself. Pick a different name so it isn't replaced.`);
  }

  const staging = ensureDir(path.join(capcutDir(), 'staging'));
  const response = await apiClient.saveDraftToFolder(draftId, staging);
  const result: any = response.result;
  const stagedAt: string | undefined = typeof result === 'string' ? result : result?.draft_url;
  if (!response.success || result?.success === false || !stagedAt || !fs.existsSync(stagedAt)) {
    throw new Error(response.error || result?.error ||
      'The bridge could not save this draft. Check that the draft ID is right; if it keeps failing, run /nez-connector to repair the CapCut connector.');
  }

  const temp = path.join(projects, `.${name}.nez-${crypto.randomBytes(4).toString('hex')}`);
  try {
    fs.cpSync(stagedAt, temp, { recursive: true });
    repointDraft(temp, stagedAt, dest);
    writeMeta(temp, dest, name);
    fs.rmSync(path.join(temp, '.locked'), { force: true });
    fs.writeFileSync(path.join(temp, NEZ_MARKER), `Made by the NEZ OS CapCut connector. Draft ${draftId}.\n`, 'utf8');

    if (exists) {
      const old = `${temp}-old`;
      try {
        fs.renameSync(dest, old);
      } catch {
        throw new Error(`CapCut has "${name}" open. Close CapCut, then save again.`);
      }
      fs.renameSync(temp, dest);
      fs.rmSync(old, { recursive: true, force: true });
    } else {
      fs.renameSync(temp, dest);
    }
  } catch (error) {
    fs.rmSync(temp, { recursive: true, force: true });
    throw error;
  } finally {
    fs.rmSync(stagedAt, { recursive: true, force: true });
  }

  return {
    project_name: name,
    project_folder: dest,
    updated: exists,
    next_step: 'Open CapCut (or close it and open it again) to see the project in your list.',
  };
}
