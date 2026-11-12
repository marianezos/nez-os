---
name: nez-connector
description: Sets up, checks and updates the NEZ OS local connectors on a real estate agent's Windows computer, by conversation. Right now that's the CapCut connector, so Claude can build CapCut projects from their clips, photos, text and music, make free transcripts and captions files of their videos on their own computer, and move finished videos into the right folder. Checks what's installed first, asks before installing any program, runs one installer that does all the work, and gives a test to try. Never installs anything by hand and never edits Claude's settings files. Triggers when the user runs /nez-connector, or says "connect CapCut", "set up CapCut", "edit my videos with Claude", "transcribe my video", "make captions for my video", "set up my connectors", "update my connectors", or "is my connector up to date".
---

# NEZ OS Connector: Set Up Tools on Your Computer

## Purpose

Some of what Claude does for an agent has to run on their own computer: building a CapCut project, or turning a video into a transcript without uploading it anywhere. This skill sets that up for someone who isn't technical, in plain words. One installer does the work; this skill checks, explains, asks, runs it and tests it.

## What it covers

- **A check first:** what's installed, whether an update is out (and what's new), and which free programs are missing.
- **The CapCut connector:** Claude can create a project, add clips, photos, text, captions, music, effects and keyframes, and save it straight into CapCut under the name the agent picks. It never replaces a project the agent made in CapCut themselves.
- **Free transcripts:** a timestamped transcript and a captions file (.srt) of any video on the computer, made on the computer. Nothing is uploaded.
- **Filing finished videos:** moves an export from Videos, Downloads or the Desktop into the agent's project folder, never replacing a file.
- **Updates and repairs:** running the install again updates or repairs it.

## Hard rules

- **Only the installer installs.** Run `nez-connector.ps1` exactly as shown below. Never run pip, npm, winget or git yourself, never copy files by hand, and never open or edit Claude's settings files. If the installer fails, read its reason to the agent in plain words and use the matching fix in `references/capcut.md`. Don't improvise another way.
- **Ask before installing any program.** Python, Node.js and FFmpeg are installed only after the agent says yes.
- **Windows only for now.** On a Mac, say: "The NEZ OS connectors work on Windows for now. Mac support is coming." Then stop.
- **Never ask for a password, key or token.** The CapCut connector doesn't need one. If the agent pastes one into the chat anyway, don't use it, and tell them to change it, since the chat keeps a copy.
- **Plain words.** No terminal talk. Say what's happening and what they'll see.
- **No em dashes,** anywhere.

## Running the installer

The installer is `install/nez-connector.ps1` in this plugin: from this skill's folder, `../../install/nez-connector.ps1`. Run it with PowerShell:

```
powershell -NoProfile -ExecutionPolicy Bypass -File "<plugin folder>\install\nez-connector.ps1" -Action <action> [options]
```

It prints JSON. `"result": "failed"` always comes with a `reason` written for the agent.

| Action | What it does |
| --- | --- |
| `-Action check` | Read only and quick. Shows each connector's state (not installed, up to date, update available, broken), what's new in an update, and whether Python, Node.js, FFmpeg and CapCut are ready. |
| `-Action install -Connector capcut` | Installs, updates or repairs the CapCut connector, then makes one test project in a private folder (not in CapCut) and removes it. Add `-InstallMissing` only after the agent said yes to installing missing programs. Add `-MoveFrom "<folder>"` if their finished videos land somewhere other than Videos, Downloads or the Desktop. |

If install answers `"result": "needs programs"`, it lists what's missing: ask the agent (Step 3), then run it again with `-InstallMissing`.

**Give it time.** The first install can take 10 to 20 minutes: it may install programs, downloads the bridge and a speech model (about 500 MB), and builds the tools. Run it with the longest timeout your tool allows, or in the background and wait. Never start a second run while one is going.

Everything goes into the `.nez-connector` folder in the agent's user folder.

## Step 1: Check first

Run `-Action check` before asking anything. Tell the agent in two or three lines what you found, for example: "CapCut connector: not installed. CapCut: installed and opened. Python and FFmpeg: missing." If it says **update available**, read the `whats_new` lines and ask: "Want me to update it now? It takes a few minutes." If it says **broken**, offer to install again to repair it.

## Step 2: The menu

Ask: **"Which connector would you like to set up?"**
1. **CapCut.** Claude builds your CapCut projects (clips, photos, text, captions and music), makes free transcripts of your videos on your computer, and files your finished videos.
2. **More coming:** GoHighLevel social posting with media from your computer, and YouTube uploads. (Say they're coming; don't offer to build them.)

Before starting, say once: "You'll need the Claude desktop app on Windows. It takes about 15 minutes, and at the end you'll fully quit Claude and open it again."

## Step 3: CapCut

1. **CapCut itself.** From the check: if CapCut isn't installed, say: "Install CapCut for Windows from capcut.com, open it once, close it, then tell me." If it's installed but never opened, say: "Open CapCut once and close it, then tell me." Wait for them, then run check again.
2. **Missing programs.** Name them in plain words ("two free programs the connector needs: Python and FFmpeg") and ask: "Can I install them for you? Windows may ask you to allow it." Only on a yes, add `-InstallMissing`. On a no, say they can install them themselves and run /nez-connector again.
3. **Where their finished videos land.** Ask once: "When you export from CapCut, where do your videos usually go? A. Videos, Downloads or Desktop B. Somewhere else (tell me the folder)." On B, add `-MoveFrom "<folder>"`.
4. **Run it.** Say what they may see: "A Windows box may ask you to allow an install: click Yes. This takes a while; I'll tell you when it's done." Then run the install.
5. On success, go to Step 4. On failure, read the reason and use `references/capcut.md`.

## Step 4: Restart and test

Say: "Last step. Fully quit Claude: right-click the Claude icon by the clock (it may be under the ^ arrow) and choose Quit. Then open Claude again and start a new chat." Then give them the test to paste into the new chat:

> Make a test CapCut project called NEZ Test, 9:16, with the word Hello in the middle for 3 seconds.

Then: "Open CapCut. If it was already open, close it and open it again. You should see NEZ Test in your projects." Tell them they can delete NEZ Test in CapCut afterwards.

With their OK, add or update one Software Stack row in their brain (Tool "CapCut connector (NEZ OS)", Category "Video / design", Used For "Claude builds CapCut projects, transcripts and captions", Connected to AI checked, Monthly Cost 0), following the plugin's `references/brain-rules.md`. No keys or passwords, ever.

Tell them once how the folders work (`references/capcut.md`, "How the folders work").

## Using the connector (any chat, after setup)

- **Saving:** always give `capcut_save_draft` a clear project name the agent chose ("Open House Reel 123 Main"). If CapCut was open, they close it and open it again to see the project.
- **Their files:** clips, photos and music can be a full path on their computer (for example `C:\Users\maria\Videos\walkthrough.mp4`) or a web link.
- **Transcripts:** `capcut_transcribe` returns a job number right away. Check it with `capcut_transcript_status` every minute or so, and say how far along it is. A 10-minute video can take several minutes on a laptop.
- **Finished videos:** `capcut_move_export` moves an export into their project folder. Never move or rename anything else without their OK.
- **Fair Housing and their voice:** text and captions that go on a video follow the brain's Compliance Guardrails and Voice Library, like any public content.

## NEXT STEP

Recommend ONE next step: edit their next video, or transcribe one they already have and turn it into a post (/nez-content once it's installed). End with: "You can run /nez-next any time and I'll tell you your best next step."
