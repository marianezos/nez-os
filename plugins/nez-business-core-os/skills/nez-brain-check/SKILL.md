---
name: nez-brain-check
description: A quick, optional weekly tune-up of a real estate agent's NEZ OS brain in Notion. Scans the brain read only, gives a brain health score with the reason behind it, then walks the agent through the fixes one area at a time, each one skippable: filing the Inbox, answering open questions, flagging anything out of date, finding conflicts and duplicates, catching facts and action items that never got saved, and spotting sensitive data that should not be there. Never deletes anything and changes nothing without the agent's OK. Saves the date and score so /nez-next knows when the next check is due, on the schedule the agent picks (weekly, every 2 weeks, monthly or off). Triggers when the user runs /nez-brain-check, or says "brain check", "check my brain", "clean up my brain", "tune up my brain", "is my brain up to date", or "file my inbox and open questions".
---

# NEZ OS Brain Check: Keep Your Brain Accurate

## Purpose

Every NEZ OS skill is only as good as the brain it reads. Brain check keeps that brain accurate in about 10 minutes: it finds what's out of date, missing, duplicated or contradicting itself, and fixes it with the agent's OK. It's about the brain, not the business numbers (that's /nez-review).

## What it covers

- **A read only scan first,** then a **brain health score** (checks passed out of checks that apply), with the top 3 fixes.
- **Two ways to run it:** Quick (the top 3 fixes, about 5 minutes) or Full (every area, about 10 to 15 minutes).
- **Areas, in order:** the Inbox, open questions, out of date info, conflicts and duplicates, things that never got saved, and a safety scan. Every area can be skipped.
- **Fixes with their OK:** shown first, one at a time or as a batch ("same fix for all 4?"). Never deletes: old items are marked Replaced, Retired or no longer active.
- **Its own schedule:** weekly, every 2 weeks, monthly, or off. /nez-next reminds them only on that schedule.

## Skipping it

Brain check is optional. The agent can:
- **Skip an area:** say "skip" and it moves to the next area.
- **Stop any time:** say "stop" or "that's enough." Whatever was fixed stays fixed, and the check still counts as done.
- **Snooze it:** "not now" (here or when /nez-next suggests it). Add `snoozed until` one period from today to `brain_check_schedule`, for example `weekly, snoozed until 2026-11-19`. The reminder comes back after that date.
- **Turn it off:** "stop reminding me." Set `brain_check_schedule` to `off`. /nez-next never suggests it again, and they can still run /nez-brain-check any time. Turning it back on is just "remind me weekly" (or every 2 weeks, or monthly).

Never make them feel behind for skipping. One line, then move on.

## Core rules

- **Read the brain rules first:** the plugin's `references/brain-rules.md` (two levels up from this skill). Follow it for finding the brain, the Inbox, saving and logging.
- **Scan first, change later.** The scan is read only. Nothing changes until the agent says OK to a specific fix.
- **Never delete or rename.** Mark old rows with the closest status each database has (Replaced, Retired, Former, Lost, Done or Dropped). Archive Inbox items instead of deleting them. The one exception is sensitive data (Step 6): with the agent's OK, clear that field's text.
- **Never guess a fix.** If you don't know which of two facts is right, ask. If the agent doesn't know either, add an Open Questions row.
- **One question at a time,** with short lettered choices. Any question can be skipped. Match their language (Spanish if they write in Spanish).
- **Plain language.** Say "your Market Areas," never IDs, property names or database jargon. Never show sensitive details in chat.
- **Fit it to them** (My personality): a **Driver** gets the score and the fixes first, short. A **Connector** gets what's going well first. A **Steady** gets a calm, step by step walk. A **Planner** gets the full list. If their biggest blocker is taking on too much, run Quick unless they ask for Full.
- **Write only where this skill writes:** the fixes they approve, Tasks for fixes they want to do later, Open Questions for things nobody knows yet, and two Setup Status lines. Never create a database; if one is missing, use the brain rules' safety net.
- **No em dashes,** anywhere: chat, Notion, tables, headings and lists.

## Step 1: Find the brain and read

Follow the brain rules to find the brain. Read the Master Profile's Setup Status (`industry_flow`, the stage lines, `last_brain_check`, `brain_check_schedule`) and Page IDs. If either Setup Status line is missing, add it (blank) under Setup Status before you finish.

If Stage 1 of /nez-setup isn't done, say: "Your brain is still mostly empty, so there's not much to check yet. Want to start /nez-setup instead?" and stop unless they want to go on.

## Step 2: Scan (read only)

Run every check in `references/checks.md` that applies to them. Read only what each check needs; use Notion's created and last edited times, never your own clock, to decide what's old. Keep a short list of what failed and what you'd change.

## Step 3: Show the score and pick a mode

In one short message:

> Your brain check: **[n] of [total] checks passed ([score]%)**. [One line on what's going well.]
> Top fixes: 1. [fix] 2. [fix] 3. [fix]
> A. Quick: just these 3 (about 5 minutes)
> B. Full: go through everything (about 10 to 15 minutes)
> C. Not now

The top 3 are the failed checks that matter most, in this order: sensitive data, conflicts, anything a skill reads before writing to clients (Compliance, Voice, Proof, Stories), then the rest by how many skills use it. On C, follow "Snooze it" above and stop. If everything passed, say so in one line, save (Step 8), and stop.

## Step 4: Inbox and open questions

1. **Inbox:** file it the way the brain rules' Inbox section says, one item at a time.
2. **Open questions:** show the 3 oldest Open rows, one at a time. Save each answer where its Where It Goes says, then set the row to Answered. "Skip" leaves it Open.
3. **Draft client FAQs older than 30 days:** ask for the agent's answer, one at a time. Never write the answer for them. With their answer, set the row to Approved.

## Step 5: Out of date

Go through each failed freshness check (`references/checks.md`, Freshness). For each, say what's old and offer the fix:
- **Info the agent knows** (a client's stage, a project's next step, a task that's done): ask, then update it.
- **Info that needs a source** (market numbers): never update it from memory. Offer a Task ("Refresh [area] numbers with a source and date") or the matching skill.
- **Things to finish later:** with their OK, add one Task each (Pillar, Priority, a due date they pick). Check Tasks first so you never add the same task twice.

## Step 6: Conflicts, duplicates and safety

1. **Sensitive data first:** for each hit, name only where it is ("a password in your Software Stack, in the Gmail row"), never the value. With their OK, clear that text and say what to use instead (their password manager). This is the one time text is removed.
2. **Conflicts:** show both sides in plain words with their dates ("Your Master Profile says your brokerage is X. A Decisions Log entry from October says you moved to Y. Which is right?"). Update the losing side: AI Memory rows go to Replaced, profile lines get the right value. Log a Decisions Log row only if a real decision came out of it.
3. **Duplicates:** show the pair and suggest which to keep (the one with more detail, or newer). Move anything missing from the other row into the one kept, then mark the other with the database's closest retired status (Retired, Former, Replaced or Lost). If the database has none, add "(duplicate)" to the end of its name instead, with their OK. Never merge two different clients or people on a name alone: ask.

## Step 7: Things that never got saved

1. **Meeting Notes action items** from the last 14 days with no matching Task: list them and offer to add them as Tasks.
2. **This conversation:** if the agent mentioned a lasting fact or decision while you talked (a new lead source, a new rule, a new teammate), offer to save each one where the brain rules say it goes.
3. **What's missing that would help most:** name at most 2 setup gaps (`references/checks.md`, Foundation) with the skill that fills each. Don't start it; offer it.

In Quick mode, skip any area that has none of the top 3 fixes.

## Step 8: Save and close

1. **Setup Status:** set `last_brain_check` to today plus the score, for example `2026-11-12 (score 84%, 15 of 18)`.
2. **Schedule:** the first time, ask once: "How often do you want a brain check? A. Weekly (recommended) B. Every 2 weeks C. Monthly D. Only when I ask." Save `weekly`, `every 2 weeks`, `monthly` or `off` in `brain_check_schedule`. Never ask again unless they bring it up.
3. **Close** in 3 lines at most: what got fixed, the new score if it changed (rescan only the checks you fixed), and the one thing worth doing before the next check.

## Rerunning it

Each run is fresh: scan, score, fix. On a rerun, start with one line comparing the score to last time ("84%, up from 71%"). Never repeat a fix the agent already said no to in the same week: if they declined it, leave it off the top 3 until the next check.
