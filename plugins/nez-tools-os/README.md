# nez-tools-os

**Pillar:** All pillars

NEZ OS Tools: local connectors that run on the agent's own computer, set up by conversation with one installer. Windows and the Claude desktop app.

Install the core `nez-business-core-os` plugin first: every NEZ OS plugin reads the brain it builds.

| Skill | What it does | Status |
| --- | --- | --- |
| `/nez-connector` | Checks, installs and updates the NEZ OS connectors on the agent's computer | Live |

| Connector | What Claude can do with it | Status |
| --- | --- | --- |
| CapCut | Build CapCut projects (clips, photos, text, captions, music, effects), make free transcripts and captions files on the computer, and file finished videos | Live |
| GoHighLevel social posting | Schedule posts with photos and videos from the computer | Planned |
| YouTube | Upload, schedule and edit videos, and read analytics | Planned |

## How it's built

- `install/nez-connector.ps1`: the one installer. The skill runs it; nobody runs it by hand.
- `connectors/capcut/`: `launch.mjs` (what Claude starts), the MCP server (`mcp-server/`), `transcribe.py`, and `connector.json` (version, changelog and the pinned open-source projects).
- The CapCut connector is built on free open-source projects: VectCutAPI (Apache 2.0), capcut-mcp-server (MIT) and faster-whisper (MIT). Credits and our changes are in `connectors/capcut/NOTICE.md`.
- Everything installs into `.nez-connector` in the agent's user folder. Claude's own settings files are never edited.

**Releasing an update:** change the code, raise `version` in `connectors/capcut/connector.json`, add a changelog line (agents see it as "what's new"), and raise the plugin version.

`references/brain-rules.md` is an exact copy of the one in `nez-business-core-os`; keep them identical.
