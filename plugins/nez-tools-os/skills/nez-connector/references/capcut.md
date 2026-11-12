# CapCut connector: folders and fixes

## How the folders work (tell the agent once)

- **Your footage and finished videos** live in your project's folder (Google Drive, Dropbox, OneDrive or Documents).
- **The CapCut project itself** stays in CapCut's own folder on the computer. Never move CapCut's projects folder into Google Drive or Dropbox: syncing a project while CapCut has it open can damage it.
- **Transcripts** are saved next to the video: `<name>.srt` (captions you can import into CapCut or YouTube) and `<name> transcript.txt`. If that folder can't be written to, they go to `.nez-connector\capcut\transcripts`.
- **Exporting:** in CapCut, pick the project's folder as the export location. If a video lands in Videos, Downloads or the Desktop, Claude can move it with `capcut_move_export`. If the folder syncs to the cloud, leave the computer on for a few minutes after a big video so it finishes uploading.

## Fixes

| What happened | What to do |
| --- | --- |
| No CapCut tools in Claude after the restart | Make sure Claude was fully quit from the icon by the clock, not just closed. Start a new chat. Then run check. |
| "CapCut has not been opened yet" | Open CapCut once, close it, then install again. |
| "CapCut is not installed" | Install CapCut for Windows from capcut.com, open it once, then install again. |
| "not installed on this computer yet" in a tool error | Run the install. |
| A new project doesn't show in CapCut | Close CapCut and open it again. |
| "CapCut already has a project called ... that you made yourself" | Pick a different project name. The connector never replaces a project the agent made. |
| "CapCut has ... open" | Close CapCut, then save again. |
| A clip or photo is missing in the project | Check the file path is right and the file is on the computer (not online-only in Google Drive: right-click it and choose to keep it on this device). |
| Python, Node.js or FFmpeg "did not finish installing" | Restart the computer, then run the install again. |
| "Windows can't install programs automatically" | Install the named programs from their official sites (python.org, nodejs.org, and FFmpeg from gyan.dev), restart, then install again. |
| Download or package errors | Check the internet connection, then install again. Work networks sometimes block downloads: try from home. |
| "The bridge did not start" or the tools stopped working | Install again to repair it. The bridge's log is `bridge.log` and `bridge-errors.log` in `.nez-connector\capcut`. |
| A transcript says failed | Try again. If it keeps failing, install again (it repairs the speech model). |
| Anything else | Run check, then install again. If it still fails, read the reason to the agent and suggest asking in the NEZ OS community. |
