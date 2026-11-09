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
2. Open the **Advisory Board** database (`advisory_board_db_id` in Page IDs).
   - **Missing:** create it inside the NEZ OS Brain page with these properties: Advisor (title), Key (text), Kind (select: Role, Mentor, Public figure), Seat (text), Status (select: Active, Benched), Sources (number), Last Refreshed (date). Add it to the Brain Index table and Page IDs.
3. **No advisors yet:** set up the five starter advisors from `references/starter-advisors.md`. Add each as a row (Kind Role, Status Active, Sources 0, Last Refreshed today) and write its brain into the row's page using the headings in `references/advisor-brain-spec.md`. Tell the agent in two or three lines who's on their board, then continue.

## Step 2: What does the agent want?

Work it out from their message. If unclear, ask once:

> "Do you want to (1) bring a decision to your board, (2) add an advisor, (3) refresh an advisor with new sources, or (4) see or change who's on your board?"

- **Bring a decision** → follow `references/meeting.md`.
- **Add an advisor** → follow `references/build-advisor.md` (add). For a Mentor or Public figure, gather sources with `references/gathering-sources.md` and, where commands run on the agent's computer, `scripts/fetch.mjs`.
- **Refresh an advisor** → follow `references/build-advisor.md` (refresh), gathering new sources the same way.
- **See or change the board** → list Active advisors (name, kind, their question) and Benched ones. Offer to bench, bring back, or add.

## Step 3: After the meeting

Follow the Save step in `references/meeting.md`. Offer once, keep it short.

## Writing style

- Each advisor sounds like themselves. The summary sounds like a calm, clear chief of staff.
- Short paragraphs, plain words, real numbers.
- No hype words.
