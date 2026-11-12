---
name: nez-library
description: Builds a real estate agent's Coach Library, a Notion swipe file of the social posts and videos they learn from. Logs one link, a batch of links, or a whole saved folder from Instagram, TikTok, Facebook or YouTube, read in the agent's own logged-in browser, and records the creator, the hook, the main point, the business lesson, the pitch if there is one, topics, and why the agent liked it. Syncing a folder again adds only the new saves. The library feeds content ideas and the mentor advisors on their board, and can be searched any time. Read only on every social account. Triggers when the user runs /nez-library, or says "save this reel", "log this post", "add these to my library", "pull my saved reels", "sync my saved folder", "swipe file", "find hooks about...", or "what have I saved about...".
---

# NEZ OS Library: Your Coach Library

## Purpose

Turn the posts the agent already saves into a searchable library of hooks, pitches and business lessons, and into the source material for their Master Coach and the mentor advisors on their board. The agent already did the curating by saving them; this skill does the logging.

## What it covers

- **Three ways to use it:** log a link or a batch of links, pull a saved folder (and sync it again later), or search the library.
- **Reads in their own browser,** where they're already logged in (the built-in browser or Claude in Chrome). No browser: they paste the caption and words, or upload the video.
- **Read only, always:** never likes, follows, comments, messages, shares, unsaves or posts anything, and never changes a setting.
- **Gentle on their account:** at most 30 posts per run, at a normal pace.
- **What each row saves:** title, creator, platform, link, dates, use (hook, content idea, business advice, sales pitch, story), topics, folder, the hook word for word, the main point, the lesson, the pitch, why they liked it, and whether the words were read. Never the full transcript, the video or images.
- **No duplicates:** a link already in the library is skipped and counted.
- **Synced folders:** saved on the Master Profile so "sync my folders" logs only new saves. Optional weekly sync and a monthly check for new content from their mentor advisors, only if they say yes.
- **Search:** by topic, use, creator or words, up to ten matches, plus a way to fix posts whose words weren't read.

## Core rules

- **Read the brain rules first:** the plugin's `references/brain-rules.md` (two levels up from this skill). Follow it for finding the brain, saving and logging.
- **Read only on every social account.** Open and read posts. Never like, follow, comment, message, share, unsave or post, and never change a setting.
- **Their own browser, with their OK.** Read social posts in the agent's own browser (the built-in browser or Claude in Chrome), where they're already logged in. Load that browser's skill before the first step in it. Never type a password. No browser available: ask them to paste the caption and the spoken words, or upload the video file, and log it that way.
- **Gentle on their account.** At most 30 posts in one run, at a normal pace. Bigger folder: do 30, save them, and say "I logged 30. Want me to keep going?"
- **Never invent.** Log only what the post says or shows.
  - No words at all (music only, no caption): log what's shown on screen and mark it "visual only."
  - Speech but no transcript available: mark it "words not read," ask them to paste the words, and log only the caption and what's shown until they do. Leave Words Read unchecked and start Main Point with "Words not read."
  - Check Words Read on every other row, including "visual only" posts (there are no words to read).
  - The hook is the first spoken line, word for word. If nobody speaks, it's the first line of the caption.
- **Save the summary, not the post.** The fields below and a short quote of the hook. Never the full transcript, the video or images.
- **No duplicates.** Before logging, check the Coach Library for the same link. Skip it and count it as "already saved."
- **Where everything is saved,** and the safety net if the database is missing: `../nez-advisor/references/notion.md`.
- **It's a swipe file, not a copy machine.** Hooks and lessons are for learning and inspiration. When a skill later uses them, it writes something new in the agent's own voice, never a copy of someone else's post.
- **Fair Housing:** if a saved post has a hook or pitch that describes who an area suits or targets people by who they are, log it as it is but add "Not Fair Housing safe as is" to Main Point, so nobody reuses it that way.
- **Plain words, no em dashes,** in anything you say or save.

## Step 1: Scan and choose

Find the brain and the Coach Library using `../nez-advisor/references/notion.md`. Say in one line what's there, for example "Your library has 84 posts from 12 creators. Your synced folders: Listing hooks (Instagram), Buyer tips (TikTok)." Then do what the agent asked, or ask:

> "What would you like to do?
> A) Log a link or a batch of links
> B) Pull a saved folder (or sync one I already pulled)
> C) Search my library"

## Step 2: Log links

Take every link the agent pasted. For each one:

1. Open it in their browser and read the caption, the on-screen text and the spoken words (the platform's own transcript or captions if it shows them; otherwise ask them to paste or upload, and say which posts).
2. Fill the row (see Fields).
3. Ask "Why did you like this one?" only when they logged a single link. For a batch, skip it and say they can add it any time.

## Step 3: Pull a saved folder

1. Ask which platform and which folder, for example "Instagram, saved collection Listing hooks," "TikTok, favorites Buyer tips," or a YouTube playlist. Ask for the folder's link, or copy the address from the browser once it's open.
2. Open the folder in their browser. Not logged in: ask them to log in there and say when they're done. Never type their password.
3. List the posts newest first, skip any already in the library, and log up to 30.
4. Save it as a synced folder: one line under **Library Folders** on the Master Profile, `platform | folder name | folder link | last synced <date and time>` (see `../nez-advisor/references/notion.md`). Next time, "sync my folders" opens each link and logs only new saves. A saved line with no link: ask for it once and add it.
5. **Optional schedules.** If this session can make scheduled tasks and reach their browser, offer once: "Want me to sync these folders every week? I can also check your mentor advisors for new content once a month." Set up only what they say yes to:
   - **Weekly sync:** each run syncs every folder under Library Folders and logs only new saves.
   - **Monthly mentor check:** each run looks for each Mentor and Public figure advisor's newest long-form content since their Last Refreshed date, and for new Coach Library rows from that creator. It never changes an advisor. It saves what it found under **Board Updates** on the Master Profile, one line per finding: `advisor key | what's new | found <date>`, skipping anything already listed. The next time the agent runs /nez-board or /nez-advisor, it offers in one line: "There's new content from [names]. Want me to refresh those advisors?" A yes refreshes them with /nez-advisor Step 6 and clears those lines. A no adds `| declined <date>` to those lines, and they aren't offered again until a newer finding.

## Fields

Each Coach Library row:

- **Title:** a short name for the post's idea.
- **Creator, Platform, Link, Posted** (date), **Saved** (now, with the time).
- **Use** (multi-select): Hook, Content idea, Business advice, Sales pitch, Story.
- **Topics** (multi-select): reuse the library's existing topics (for example Listings, Buyers, Sellers, First-time buyers, Investors, Pricing, Open houses, Lead generation, Follow-up, Social media, Mindset). If none fits, add the new topic to the database first, then save the row (see `../nez-advisor/references/notion.md`).
- **Folder:** the saved folder it came from, if any.
- **Hook:** the first spoken line, word for word (no speech: the first line of the caption).
- **Main Point:** one or two lines, in your words.
- **Lesson:** the business lesson in one line, if there is one.
- **Pitch:** how it sells, in one line (the offer, the call to action), if it sells.
- **Why I Liked It:** their words, or empty.
- **Words Read** (checkbox): checked when the words were read or pasted, or the post has none (visual only); unchecked when the row is marked "words not read."
- **Status:** New, Used.

## Step 4: Search

When they ask what they have ("hooks about listings," "advice on pricing," "what did [creator] say about follow-up"), query the Coach Library by Topics, Use, Creator and words in the fields. Show up to ten matches: the title, creator, the hook or lesson, and the link.

**Fix unread posts:** when they ask ("show me posts with words not read," "fix my unread posts"), list the rows with Words Read unchecked, ask for the pasted words one post at a time, fill in Hook, Main Point, Lesson and Pitch, and check Words Read.

Then offer ONE next step that fits: "Want three video ideas from these, in your own voice?" (/nez-content, or the Vault prompt "Plan My Week of Content" until it ships), or "Want to ask your board about this?" (/nez-board). When a hook is used in a piece of content, set that row's Status to Used.

## Finish

Say how many posts were logged, skipped as already saved, or need a paste, and where: "Saved to your Coach Library in your NEZ OS brain."

Once the library has 20 or more Business advice or Sales pitch posts and no Master Coach exists, offer once: "You've saved enough to build your Master Coach, one advisor built from everything you've saved. Want me to? Run /nez-advisor." If one creator has 10 or more of those posts and isn't on their board, you can also mention that /nez-advisor can build them as a mentor advisor (labeled a simulation).

End with: "You can run /nez-next any time and I'll tell you your best next step."
