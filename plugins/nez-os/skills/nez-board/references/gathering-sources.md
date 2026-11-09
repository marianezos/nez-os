# Gathering sources for a Mentor or Public figure

Aim for **10 to 30 strong sources**: enough to see how the person really thinks. Depth beats volume, and long-form beats clips. Most creators repeat the same ideas in their short clips that they cover in their long videos and podcasts, so long-form carries most of the value.

## What makes a good source

- **Best:** long interviews and podcast episodes, keynotes, their own long videos, books they wrote, their essays and newsletters, courses the agent bought.
- **Good:** their blog posts, long social posts and captions, detailed show notes.
- **Skip:** short clips that say little, reaction videos, other people's summaries of them, quote sites, fan pages, AI-written content, and anything behind a login the agent doesn't own.

## How to read each kind of source

Try the routes in order and use the first one that works. Never guess what a video or episode says from its title.

| Source | Route 1 | Route 2 | Route 3 |
| --- | --- | --- | --- |
| YouTube video | The fetch script on the agent's computer (below) | Web fetch of the video page, if it returns a transcript | Agent pastes the transcript: open the video, click **...more** under the title, then **Show transcript**, and copy it |
| Podcast | Web fetch of the episode page or the show's transcript page | The fetch script on the YouTube version, if there is one | Agent pastes or uploads a transcript |
| Article, blog, newsletter | Web fetch | The fetch script | Agent pastes the text |
| PDF | Agent uploads it | The fetch script | |
| Book | The agent's own notes or highlights, plus the author's public talks about the book. Never reproduce the book itself. | | |
| Instagram, TikTok, Facebook | The agent's own browser (below) | Agent pastes captions or transcripts, or uploads the video | Skip if their short-form only repeats their long-form |
| LinkedIn or X posts | The agent's own browser, or the agent pastes the posts | | |

## The fetch script (`scripts/fetch.mjs`)

Turns web pages into text, YouTube videos into transcripts with `[mm:ss]` timestamps, and PDFs into text, and keeps a numbered source list. YouTube works with nothing extra installed (it reads YouTube's public captions); if `yt-dlp` is installed it's used first. PDFs need `pdftotext`; without it the PDF is saved so you can read it and `--add` the text. It needs **Node 20 or newer** and internet access, so it only works where commands run on the agent's own computer (for example the Claude desktop app with a shell on their computer, or Claude Code). A cloud workspace usually can't reach these sites: there, use web fetch and pasting, and don't keep retrying the script.

Use a build folder outside the agent's Notion and project files, for example `~/nez-advisor-build/<advisor-key>`:

- Fetch links: `node <skill folder>/scripts/fetch.mjs <build folder> <url> [<url> ...]`
- Fetch a list of links (one per line): `node <skill folder>/scripts/fetch.mjs <build folder> --list urls.txt`
- Add a file the agent gave you: `node <skill folder>/scripts/fetch.mjs <build folder> --add <file> --title "..." [--url ...] [--date YYYY-MM-DD] [--kind book|notes|course|podcast|video|article|post]`
- See what you have: `node <skill folder>/scripts/fetch.mjs <build folder> --manifest`
- Print the Sources table for the brain: `node <skill folder>/scripts/fetch.mjs <build folder> --sources-table --name "Full Name"`

Each source is saved as its own text file in `<build folder>/texts/`. Pages under 250 words are skipped as **thin** (usually a login wall, paywall or a page built by JavaScript): try another route, or add `--keep-short` to save them anyway. Links already in the list are skipped on re-runs. The timestamps make it easy to find and double-check a quote. After the advisor's brain is saved, offer to delete the build folder so no raw content stays on the computer.

## Instagram, TikTok and Facebook

These sites show very little without a login. Many creators share ideas there they never cover in long-form, so offer it:

> "Does [Name] post things on Instagram or TikTok that aren't in their long videos? I can read some in your browser, where you're logged in."

If yes, use the agent's browser (load that browser's skill first). If they're not logged in, ask them to log in and tell you when they're done; never type their password. Open the creator's profile and read the caption, on-screen text and spoken words (captions or transcript when shown) of 10 to 30 posts: pinned and most viewed first, then newest. Only read; never like, follow, comment or message. Go at a normal human pace. Log each post as a source (kind: post) with its link and date. No browser connected: ask the agent to paste captions or transcripts, upload videos, or skip.

## Steps

1. **Ask for their favorites first:** "Which videos, podcasts, books or posts of theirs have helped you most? Paste links or just name them." Their picks matter most.
2. **Find the rest:** search the web for the person's own channel, podcast, website and books, then their best-known long interviews. Prefer their official channels. Show the agent the list (title, kind, date, link) and wait for their OK before reading.
3. **Read each one** using the routes above.
4. **Log every source** as you go: next id (S1, S2, ...), title, kind, date, link. Keep source notes in the chat or the build folder. Never save raw transcripts or full articles to Notion.
5. **Stop when it repeats.** When new sources stop adding new beliefs, tools or positions, say so and stop, even under 10. With fewer than 5 sources, tell the agent the advisor will be thin; they can refresh it later.

## Building the brain from the sources

Work section by section through `advisor-brain-spec.md`. For every belief, tool, position, story and quote, note the source id it came from. Retell everything in your own words except the "In their words" section. When two sources disagree, use the newer one and note the change in "Where they stand." Mark anything seen in only one source as (one source).

## Rules that always apply

- **Quotes come from raw text only.** Web fetch can return a summary instead of the real page, so treat it as material to retell, not to quote. Take quotes only from text the agent pasted, the fetch script's files, or the page itself.
- **Always a simulation.** The brain, every meeting and every answer present the advisor as a simulation. It never claims to be the person and never says the person agreed with, endorsed or reviewed anything.
- **For the agent's own use.** Say once when the build is done: the advisor is for the agent's private thinking. Don't use the person's name, face or words to market their business or to suggest an endorsement.
- **No photos or likenesses** of real people. Advisors never download or create images of them.
