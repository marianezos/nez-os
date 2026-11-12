// NEZ OS CapCut connector: the plugin's MCP entry points here, so Claude's own settings are never edited.
// Uses only Node built-ins. The real server and the bridge live in the agent's .nez-connector folder.
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawn } from 'node:child_process';
import { pathToFileURL } from 'node:url';

const HOME = process.env.NEZ_CONNECTOR_HOME || path.join(os.homedir(), '.nez-connector');
const DIR = path.join(HOME, 'capcut');
const SERVER = path.join(DIR, 'mcp-server', 'dist', 'index.js');
const stop = (msg) => { process.stderr.write(`NEZ OS CapCut connector: ${msg}\n`); process.exit(1); };

if (!fs.existsSync(SERVER)) stop('not installed on this computer yet. In Claude, run /nez-connector and pick CapCut.');

let settings = {};
try { settings = JSON.parse(fs.readFileSync(path.join(DIR, 'settings.json'), 'utf8')); } catch { /* use defaults */ }
const port = Number(settings.port) || 9001;
const python = process.platform === 'win32'
  ? path.join(DIR, 'bridge', 'venv', 'Scripts', 'python.exe')
  : path.join(DIR, 'bridge', 'venv', 'bin', 'python');

const bridgeUp = async () => {
  try { await fetch(`http://127.0.0.1:${port}/`, { signal: AbortSignal.timeout(1500) }); return true; } catch { return false; }
};

// Start the bridge (VectCutAPI) hidden in the background if it isn't running, and wait for it.
if (!(await bridgeUp())) {
  if (!fs.existsSync(python)) stop('the bridge is missing its Python setup. Run /nez-connector to repair it.');
  const log = fs.openSync(path.join(DIR, 'bridge.log'), 'a');
  spawn(python, ['capcut_server.py'], { cwd: path.join(DIR, 'bridge'), detached: true, windowsHide: true, stdio: ['ignore', log, log] }).unref();
  for (let i = 0; i < 30 && !(await bridgeUp()); i++) await new Promise(r => setTimeout(r, 500));
}

process.env.CAPCUT_API_URL ||= `http://127.0.0.1:${port}`;
process.env.CAPCUT_PYTHON ||= python;
process.env.CAPCUT_MODELS ||= path.join(DIR, 'models');
process.env.NEZ_CONNECTOR_HOME ||= HOME;
if (Array.isArray(settings.moveFrom) && settings.moveFrom.length) process.env.CAPCUT_MOVE_FROM = settings.moveFrom.join(';');
await import(pathToFileURL(SERVER).href);
