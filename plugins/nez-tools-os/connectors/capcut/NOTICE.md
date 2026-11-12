# CapCut connector: credits and licenses

The NEZ OS CapCut connector is built on free, open-source projects. Thank you to their authors.

| Part | Project | License | How NEZ OS uses it |
| --- | --- | --- | --- |
| The bridge (builds CapCut drafts) | [VectCutAPI](https://github.com/sun-guannan/VectCutAPI) by sun-guannan, commit 133d232 | Apache License 2.0 | Downloaded from GitHub during install and used without changes. Its LICENSE file comes with it. |
| The MCP server (Claude's CapCut tools) | [capcut-mcp-server](https://github.com/Atx-Guy/capcut-mcp-server) by Atx-Guy, commit d154070 | MIT (as stated in its package.json) | Included in `mcp-server/`. NEZ OS changes are marked "NEZ OS change" in the code, and the files in `mcp-server/src/nez/` are new. |
| Transcripts | [faster-whisper](https://github.com/SYSTRAN/faster-whisper) by SYSTRAN, with OpenAI's Whisper "small" model | MIT | Installed with pip during install. The model is downloaded once (about 500 MB). |

## NEZ OS changes to capcut-mcp-server

- Media can be a web link or a full path to a file on this computer.
- `capcut_save_draft` takes a project name and saves into CapCut through `src/nez/deploy.ts`: it builds the draft in a staging folder, copies it into CapCut's project folder, points every file path at the new folder, gives the project its own name and ID, and never replaces a project the agent made in CapCut.
- VectCutAPI's `output` field is read as the tools' `result`.
- Errors are marked as errors and keep a plain-language reason.
- New tools in `src/nez/tools.ts`: `capcut_list_projects`, `capcut_transcribe`, `capcut_transcript_status`, `capcut_move_export`.
- The build script is plain `tsc` so it builds on Windows.

CapCut is a trademark of Bytedance Ltd. This connector is not made by or affiliated with CapCut.
