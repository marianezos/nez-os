---
name: nez-board
description: Runs a meeting of the agent's personal advisory board. Brings a business decision (ads, hiring, joining a team, pricing, a new niche, going full time) to the advisors in their NEZ OS brain; each answers from its own brain page, then the agent gets a call, a summary and a recommendation, saved to Board Meetings with a follow-up date. Also checks how past decisions turned out. Triggers when the user runs /nez-board, or says "ask my board", "board meeting", "what would my advisors say", "should I [business decision]", or "how did that decision turn out". To add or change advisors, use /nez-advisor.
---

# NEZ OS Board: Meet Your Advisory Board

## Purpose

Pressure-test a decision with several sharp perspectives, then give the agent one clear recommendation. Each advisor answers through its own lens from its brain page in the Advisory Board. The meeting is saved to Board Meetings with a follow-up date, so the agent can check later whether the advice worked.

## What it covers

- **Bring a decision:** ads, hiring, joining a team, pricing, a new niche, going full time, or anything big.
- **The meeting:** up to 7 advisors from the agent's board each answer through their own lens (about 120 words each), using the agent's real numbers. The Local Market Expert reads Market Areas, the Conversion Coach reads the Objection Bank, and The Skeptic always goes last.
- **A clear call:** Go, No go, Go with changes, or Need more info, with the next steps. The agent decides.
- **Saves it:** a Board Meetings row with a follow-up date 30 days out.
- **Closes the loop:** checks back on past decisions, records how they turned out (Worked, Mixed, Didn't work, Didn't do it), and learns from it.
- **Empty board?** It sets up the default board first.
- **Safe by design:** advisors built from real people are labeled simulations, and anything that hinges on law, taxes, contracts or licensing goes to the agent's broker, attorney or CPA.

## Core rules

- **Read the brain rules first:** the plugin's `references/brain-rules.md` (in the `nez-business-core-os` plugin folder, two levels up from this skill).
- **Each advisor speaks only from its own brain page,** plus the agent's situation from the brain. Read an advisor's page right before it speaks.
- **Advisors stay distinct.** Use each one's question, lens and voice. Don't blend them into one generic answer.
- **Simulations, clearly labeled.** An advisor built from a real person is a simulation of their public thinking, never the real person. If the agent asks, say so plainly.
- **The agent decides.** Give a clear recommendation, then leave the decision to them.
- **Use their real numbers** from the brain so advice is specific.
- **Not legal, tax or financial advice.** For questions that hinge on law, taxes, contracts or licensing, the summary tells the agent to confirm with their broker, attorney or CPA.
- **Match their language.** Run the meeting in Spanish if they write in Spanish.
- **No em dashes.**

## Step 1: Find the board

1. Find the brain per the brain rules. Open the **Advisory Board** and **Board Meetings** (`advisory_board_ds_id` and `board_meetings_ds_id` in Page IDs).
2. **Board Meetings missing:** follow the safety net in `../nez-advisor/references/notion.md`, which has its exact layout.
3. **No advisors yet (or no Advisory Board):** say the board is empty and set it up first by following Step 2 ("Seat the default board") of the /nez-advisor skill (`../nez-advisor/SKILL.md`), including its one confirming question. Then continue with the meeting.

## Step 2: Check overdue follow-ups

If the Master Profile has a **Board Updates** section with lines that have no "declined," offer in one line: "There's new content from [names]. Want me to refresh those advisors first?" A yes refreshes them with /nez-advisor Step 6 and clears those lines; a no adds `| declined <date>` to them, and the meeting goes on.

If any Board Meetings row has a Follow-up date that has passed and Outcome "Not reviewed," mention it in one line and offer to check it now or after the meeting.

## Step 3: What does the agent want?

- **Bring a decision** → follow `references/meeting.md`.
- **Check a past decision** → for each Board Meetings row whose Follow-up has passed and Outcome is "Not reviewed": ask what happened, then set Outcome (Worked, Mixed, Didn't work, Didn't do it) and a one-line What Happened. If it changes a belief worth keeping ("seller ads don't work in my market"), offer an AI Memory row per the brain rules.
- **Add, change or refresh advisors** → tell them to run /nez-advisor (or start it if they say yes).

## Step 4: Save

Follow the Save step in `references/meeting.md`. Offer once, keep it short.

## Writing style

- Each advisor sounds like itself. The summary sounds like a calm, clear chief of staff.
- Short paragraphs, plain words, real numbers.
- No hype words.
