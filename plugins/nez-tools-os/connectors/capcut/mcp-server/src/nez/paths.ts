// NEZ OS: where things live on the agent's computer.
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

export const NEZ_MARKER = '.nez_connector';

export function connectorHome(): string {
  return process.env.NEZ_CONNECTOR_HOME || path.join(os.homedir(), '.nez-connector');
}

export function capcutDir(): string {
  return path.join(connectorHome(), 'capcut');
}

// CapCut's own project folder. It only exists after CapCut has been opened once.
export function capcutProjectsDir(): string | null {
  const candidates = process.env.CAPCUT_PROJECTS_DIR
    ? [process.env.CAPCUT_PROJECTS_DIR]
    : process.platform === 'win32'
      ? [path.join(process.env.LOCALAPPDATA || path.join(os.homedir(), 'AppData', 'Local'),
          'CapCut', 'User Data', 'Projects', 'com.lveditor.draft')]
      : [path.join(os.homedir(), 'Movies', 'CapCut', 'User Data', 'Projects', 'com.lveditor.draft')];
  return candidates.find(p => fs.existsSync(p)) ?? null;
}

export function ensureDir(p: string): string {
  fs.mkdirSync(p, { recursive: true });
  return p;
}

// Folders a finished export may be moved out of. Set by the installer (settings.json, passed in by launch.mjs).
export function moveFromRoots(): string[] {
  const fromEnv = (process.env.CAPCUT_MOVE_FROM || '').split(';').map(s => s.trim()).filter(Boolean);
  if (fromEnv.length) return fromEnv;
  const home = os.homedir();
  return ['Videos', 'Downloads', 'Desktop', 'Movies'].map(f => path.join(home, f)).filter(p => fs.existsSync(p));
}

const norm = (p: string) => {
  const r = path.resolve(p);
  return process.platform === 'win32' ? r.toLowerCase() : r;
};

export function isInside(child: string, parent: string): boolean {
  const c = norm(child), p = norm(parent);
  return c === p || c.startsWith(p.endsWith(path.sep) ? p : p + path.sep);
}
