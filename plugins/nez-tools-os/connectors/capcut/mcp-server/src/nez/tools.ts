// NEZ OS tools added on top of capcut-mcp-server: list projects, transcripts on this computer,
// and moving a finished export into the agent's project folder.
import { spawn } from 'node:child_process';
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';
import { NEZ_MARKER, capcutDir, capcutProjectsDir, ensureDir, isInside, moveFromRoots } from './paths.js';

const ok = (data: unknown) => ({ content: [{ type: 'text' as const, text: JSON.stringify(data, null, 2) }] });
const fail = (error: unknown) => ({
  isError: true,
  content: [{ type: 'text' as const, text: error instanceof Error ? error.message : String(error) }],
});

const VIDEO_OR_AUDIO = /\.(mp4|mov|m4v|mkv|webm|avi|mp3|wav|m4a|aac|flac|ogg)$/i;
const jobsDir = () => ensureDir(path.join(capcutDir(), 'jobs'));

function freeName(folder: string, fileName: string): string {
  const ext = path.extname(fileName);
  const base = path.basename(fileName, ext);
  let candidate = path.join(folder, fileName);
  for (let n = 2; fs.existsSync(candidate); n++) candidate = path.join(folder, `${base} (${n})${ext}`);
  return candidate;
}

export function registerNezTools(server: McpServer): void {
  server.registerTool(
    'capcut_list_projects',
    {
      title: 'List CapCut Projects',
      description: 'List the projects in CapCut on this computer, newest first, and which ones this connector made. Read only.',
      inputSchema: { limit: z.number().int().min(1).max(200).default(30).describe('How many to list') },
      annotations: { readOnlyHint: true, destructiveHint: false, idempotentHint: true, openWorldHint: false },
    },
    async ({ limit }) => {
      try {
        const dir = capcutProjectsDir();
        if (!dir) throw new Error("CapCut's project folder isn't on this computer yet. Open CapCut once, then try again.");
        const projects = fs.readdirSync(dir, { withFileTypes: true })
          .filter(e => e.isDirectory() && !e.name.startsWith('.'))
          .map(e => {
            const p = path.join(dir, e.name);
            return { name: e.name, modified: fs.statSync(p).mtime.toISOString(), made_by_connector: fs.existsSync(path.join(p, NEZ_MARKER)) };
          })
          .sort((a, b) => b.modified.localeCompare(a.modified))
          .slice(0, limit);
        return ok({ projects });
      } catch (error) { return fail(error); }
    }
  );

  server.registerTool(
    'capcut_transcribe',
    {
      title: 'Transcribe a Video',
      description: `Start a transcript of a video or audio file on this computer. Free, and nothing is uploaded: the speech model runs on this computer.
Saves two files next to the video: "<name>.srt" (captions with timings) and "<name> transcript.txt" (timestamped text).
Long videos take a while: this returns a job_id right away. Check it with capcut_transcript_status every minute or so.`,
      inputSchema: {
        file_path: z.string().min(1).describe('Full path to the video or audio file on this computer'),
        language: z.string().default('auto').describe("'auto', or a language code such as 'en' or 'es'"),
      },
      annotations: { readOnlyHint: false, destructiveHint: false, idempotentHint: false, openWorldHint: false },
    },
    async ({ file_path, language }) => {
      try {
        const input = path.resolve(file_path);
        if (!fs.existsSync(input) || !fs.statSync(input).isFile()) throw new Error(`There's no file at ${input}. Check the path.`);
        if (!VIDEO_OR_AUDIO.test(input)) throw new Error('That file is not a video or audio file this tool can read.');
        const python = process.env.CAPCUT_PYTHON;
        const script = path.join(capcutDir(), 'transcribe.py');
        if (!python || !fs.existsSync(python) || !fs.existsSync(script)) {
          throw new Error('Transcripts are not set up on this computer. Run /nez-connector and install the CapCut connector again.');
        }
        const jobId = crypto.randomBytes(5).toString('hex');
        const statusFile = path.join(jobsDir(), `${jobId}.json`);
        fs.writeFileSync(statusFile, JSON.stringify({ state: 'starting', file: input }), 'utf8');
        const log = fs.openSync(path.join(jobsDir(), `${jobId}.log`), 'a');
        spawn(python, [script, '--input', input, '--language', language, '--status', statusFile,
          '--models', process.env.CAPCUT_MODELS || path.join(capcutDir(), 'models')],
          { detached: true, windowsHide: true, stdio: ['ignore', log, log] }).unref();
        return ok({ job_id: jobId, state: 'started', check_with: 'capcut_transcript_status' });
      } catch (error) { return fail(error); }
    }
  );

  server.registerTool(
    'capcut_transcript_status',
    {
      title: 'Transcript Status',
      description: 'Check a transcript started with capcut_transcribe: running (with percent done), done (with the file paths), or failed (with the reason).',
      inputSchema: { job_id: z.string().regex(/^[a-f0-9]{10}$/).describe('The job_id from capcut_transcribe') },
      annotations: { readOnlyHint: true, destructiveHint: false, idempotentHint: true, openWorldHint: false },
    },
    async ({ job_id }) => {
      try {
        const statusFile = path.join(jobsDir(), `${job_id}.json`);
        if (!fs.existsSync(statusFile)) throw new Error('No transcript with that job_id on this computer.');
        return ok(JSON.parse(fs.readFileSync(statusFile, 'utf8')));
      } catch (error) { return fail(error); }
    }
  );

  server.registerTool(
    'capcut_move_export',
    {
      title: 'Move a Finished Video',
      description: `Move a finished video that CapCut exported (usually to Videos, Downloads or the Desktop) into the agent's project folder.
Never replaces a file: if the name is taken, it adds (2), (3) and so on. Only moves files out of the export folders set up in /nez-connector.`,
      inputSchema: {
        file_path: z.string().min(1).describe('Full path to the exported video'),
        to_folder: z.string().min(1).describe('Full path to the project folder it belongs in (it must already exist)'),
      },
      annotations: { readOnlyHint: false, destructiveHint: false, idempotentHint: false, openWorldHint: false },
    },
    async ({ file_path, to_folder }) => {
      try {
        const source = path.resolve(file_path);
        const folder = path.resolve(to_folder);
        if (!fs.existsSync(source) || !fs.statSync(source).isFile()) throw new Error(`There's no file at ${source}.`);
        if (!fs.existsSync(folder) || !fs.statSync(folder).isDirectory()) throw new Error(`The folder ${folder} doesn't exist. Create it first or check the path.`);
        const roots = moveFromRoots();
        if (!roots.some(r => isInside(source, r))) {
          throw new Error(`For safety, this tool only moves files out of: ${roots.join(', ')}. Move this one yourself, or add its folder in /nez-connector.`);
        }
        const target = freeName(folder, path.basename(source));
        try {
          fs.renameSync(source, target);
        } catch {
          fs.copyFileSync(source, target, fs.constants.COPYFILE_EXCL);
          if (fs.statSync(target).size !== fs.statSync(source).size) throw new Error('The copy did not finish. The original is still where it was.');
          fs.unlinkSync(source);
        }
        return ok({ moved_to: target, note: 'If the folder syncs to Google Drive or Dropbox, leave the computer on until the upload finishes.' });
      } catch (error) { return fail(error); }
    }
  );
}
