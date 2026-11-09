---
name: nez-board
description: The agent's personal advisory board. Brings a business decision to a board of AI advisors (starter real estate roles, mentors, or public figures the agent learns from), each answering from their own brain page in Notion, then gives a summary and recommendation. Also adds, refreshes and benches advisors. Triggers when the user runs /nez-board, or says "ask my board", "board meeting", "what would my advisors say", "add an advisor", "add [name] to my board", "refresh my advisor", or "should I [business decision]?" and asks for advice from multiple angles.
---

# NEZ OS Board: Your Advisory Board

## Purpose

Give the agent a personal board of advisors to pressure-test decisions: spending on ads, hiring, joining a team, raising fees, new niches, going full time. Each advisor has a brain page in the agent's NEZ OS brain and answers through their own lens. The agent gets several sharp perspectives, a clear summary and one recommendation, then decides.

## Core rules

- **Read the brain rules first:** the plugin's `references/brain-rules.md` (in the `nez-os` plugin folder, two levels up from this skill). Follow it for finding the brain, reading order, saving and logging.
- **Each advisor speaks only from their own brain page** in the Advisory Board, plus the agent's situation from the brain. Read an advisor's page right before they speak.
- **Advisors stay distinct.** Use each one's question, lens and voice. Don't blend them into one generic answer.
- **Simulations, clearly labeled.** A Mentor or Public figure is a simulation of their public thinking, never the real person. If the agent asks, say so plainly.
- **The agent decides.** Give a clear recommendation, then leave the decision to them.
- **Use their real numbers.** Pull goals, price points, splits and lead sources from the brain so advice is specific, not generic.
- **Not legal, tax or financial advice.** For questions that hinge on law, taxes, contracts or licensing, the advisors can share business perspective, and the summary should tell the agent to confirm with their broker, attorney or CPA.
- **Match their language.** Run the meeting in Spanish if they write in Spanish.
- **No em dashes.**

## Step 1: Find the brain and the board

1. Find the brain per the brain rules (Page IDs first, then `nez-os-root` search).
2. Open the **Advisory Board** and **Board Meetings** databases (`advisory_board_ds_id` and `board_meetings_ds_id` in Page IDs). If either is missing, follow the safety net in the brain rules and create it with the exact layout below, then save both its IDs in Page IDs and add it to the Brain Index.

   **Advisory Board:**
   ```
   CREATE TABLE ("Advisor" TITLE, "Key" RICH_TEXT, "Kind" SELECT('Role':blue, 'Mentor':purple, 'Public figure':orange), "Seat" RICH_TEXT, "Status" SELECT('Active':green, 'Draft':yellow, 'Benched':gray), "Sources" NUMBER, "Version" NUMBER, "Last Refreshed" DATE)
   ```
   **Board Meetings:**
   ```
   CREATE TABLE ("Decision" TITLE, "Date" DATE, "Call" SELECT('Go':green, 'No go':red, 'Go with changes':yellow, 'Need more info':gray), "Advisors" RICH_TEXT, "Pillar" SELECT('Brain':purple, 'Leads':blue, 'Clients':green, 'Content':pink, 'Growth':orange), "Follow-up" DATE, "Outcome" SELECT('Not reviewed':gray, 'Worked':green, 'Mixed':yellow, 'Didn''t work':red, 'Didn''t do it':default), "What Happened" RICH_TEXT)
   ```
3. **No advisors yet:** seat the default board from `references/starter-advisors.md` (seven advisors), following its "How to add a starter role" steps, including personalizing each one from the Master Profile. If the Master Profile shows the agent leads a team or is a broker, offer the Team Growth Coach; if their goals lean on social media or video, offer the Content Builder. Tell the agent in two or three lines who's on their board, then continue.

## Step 2: What does the agent want?

Work it out from their message. If unclear, ask once:

"> "Do you want to (1) bring a decision to your board, (2) add an advisor, (3) refresh an advisor with new sources, (4) see or change who's on your board, or (5) check how a past decision turned out?"

- **Bring a decision** → follow `references/meeting.md`.
- **Add an advisor** → follow `references/build-advisor.md` (add). For a Mentor or Public figure, gather sources with `references/gathering-sources.md` and, where commands run on the agent's computer, `scripts/fetch.mjs`.
- **Refresh an advisor** → follow `references/build-advisor.md` (refresh), gathering new sources the same way.
- **See or change the board** → list Active advisors (name, kind, their question), then Draft and Benched ones, then any starter extras not yet added. Offer to bench, bring back, finish a draft, or add.
- **Check a past decision** → open Board Meetings rows whose Follow-up date has passed and Outcome is "Not reviewed". For each, ask what happened, then set Outcome (Worked, Mixed, Didn't work, Didn't do it) and a one-line What Happened. If it changes a belief worth keeping ("seller ads don't work in my market"), offer an AI Memory row. Also offer this check at the start of any meeting when follow-ups are overdue.

## Step 3: After the meeting

Follow the Save step in `references/meeting.md`. Offer once, keep it short.

## Writing style

- Each advisor sounds like themselves. The summary sounds like a calm, clear chief of staff.
- Short paragraphs, plain words, real numbers.
- No hype words.
