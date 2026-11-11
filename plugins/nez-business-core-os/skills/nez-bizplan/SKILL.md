---
name: nez-bizplan
description: Builds a real estate agent's business plan from their NEZ OS brain. Reads what setup and /nez-self already know, asks only for the missing numbers (last year, this year so far, leads and conversions, how they get paid, lead sources, marketing, the goal), walks one deal through their exact split and fees, shows every calculation step by step, diagnoses lead, conversion or market problems, and writes a plan with a 90-day roadmap. Works for any brokerage or business model and never assumes fees. Saves the numbers to the Master Profile and the plan to Business Plan & Goals, with a text, Google Doc, Word or PDF copy. Triggers when the user runs /nez-bizplan, or says "write my business plan", "build my plan", "plan my year", "what are my numbers", "how many deals do I need", or "how much do I need to make".
---

# NEZ OS Bizplan: Your Business Plan

## Purpose

Turn the agent's goal into a plan they can actually work, built from their own numbers. The brain already knows who they are, their market, their clients and their goal. This skill fills in only the numbers that are missing, shows the math one line at a time so they can check it, tells them honestly what's holding them back, and lays out the next 90 days.

## What it covers

- **Reads first:** Master Profile (market, clients, lead sources, goals, boundaries, personality), Business Plan & Goals, and any numbers saved by an earlier run. It never asks for something the brain already has.
- **Asks only for numbers:** last year, this year so far, leads and conversions, average price, business mix, how they get paid, lead sources, online presence and marketing, the plan period and the goal. About 15 minutes the first time, a few minutes to update.
- **How you get paid, exactly:** split, cap, per-deal fees, after-cap terms, royalty, monthly fees, team split, referral fees and outside costs, asked once. Nothing is filled in from memory, even when the agent names their brokerage.
- **One deal, walked through:** a short table of one typical deal before and after the cap. The agent confirms the order and amounts before any math happens.
- **The math, step by step:** goal, take-home per deal, deals needed, appointments, conversations and leads, per month and per week, with every number labeled by where it came from.
- **An honest diagnosis:** lead problem, conversion problem or market problem, and what to fix first.
- **The plan:** 9 sections, from where they stand to a 90-day roadmap and what success looks like to them, shaped by their work style and their biggest blocker.
- **Saves:** the numbers to My business numbers on the Master Profile, and the plan to Business Plan & Goals (updated in place, never a second copy). Offers a copy as text, a Google Doc, a Word file or a PDF.
- **Any business:** a real estate flow and a flow for any other industry (lenders, coaches, insurance, services).

## Core rules

- **Read the brain rules first:** the plugin's `references/brain-rules.md` (two levels up from this skill). Follow it for finding the brain, saving and logging.
- **Never ask what the brain already has.** Setup owns market, client types, specialty, lead sources and the 12-month goal. This skill asks only for numbers, and confirms numbers already saved with "Still right?"
- **One question at a time,** with lettered options where the industry file has them. Match their language (Spanish if they write in Spanish).
- **Use their name and their details** throughout. A plan that could belong to any agent is a failed plan.
- **Never assume how they get paid.** Splits, caps, fees, royalties, awards and revenue share differ everywhere. Use only what the agent tells you. Never fill in a company's fees from memory, even if you think you know them. If a rule is unclear (does this fee count toward the cap?), ask.
- **"None" is zero, "not sure" is not counted.** Save both answers. Say "not counted, you weren't sure" in the math wherever it applies.
- **Show the math.** One step per line, with their numbers, so they can check every line. Label each number: "your number", "your estimate", "I calculated this", or "starting estimate" for a NEZ OS default.
- **Be honest.** If the numbers say conversion is the problem, say so plainly, even if they want to buy more leads.
- **Fit the plan to them** (from My personality): a **Driver** gets the numbers and the actions first, short. A **Connector** gets the vision and the people side first, with energy. A **Steady** gets a calm, step-by-step plan with no surprises. A **Planner** gets the details, the data and the reasons. Fit the structure to their **biggest thing holding them back** too: if it's taking on too much, the plan has 3 priorities, no more. Respect **My boundaries** (hours, things they don't do): never plan activity they said they won't do, and never schedule into protected time.
- **A plan, not a promise.** Never promise income, closings or results. Tax questions go to their CPA, lending questions to their lender. The plan is for their own use; nothing in it goes to clients.
- **Write in their voice** if a default voice exists in the Voice Library. **No em dashes**, anywhere: tables, headings and lists included (write "Deal 3: reaches the cap").

## Step 1: Find the brain and load the flow

Find the brain per the brain rules. Read the Master Profile and Business Plan & Goals (`business_plan_page_id`).

Read `industry_flow` from Setup Status and load `industries/<industry_flow>.md` from this skill. If it's blank, use `real-estate` if the Master Profile mentions a brokerage or real estate, otherwise `generic`.

**If Stage 1 of setup isn't done** (`stage_1_core_profile` blank and the About me section empty), say: "Your plan works best when I know your business first. Run /nez-setup (about 10 minutes for the core profile), then come back." Stop.

## Step 2: Opening

Read from the Master Profile: name, brokerage or business, main market, typical price range, client types, specialty, where my business comes from, My 12-month goal, top 3 goals for 90 days, what a good month looks like, income goal, My boundaries, and My personality (work style, success beyond the numbers, biggest thing holding me back). Read the **My business numbers** section if it exists.

**First time:** open with the opening line in the industry file.

**Numbers already saved:** say "Last time you gave me your numbers on [Last plan date]. Want to update all of them, or just what's changed?" Then go group by group: show what's saved and ask "Still right?" Ask again only for a value that changed. A saved number is something the agent confirms or edits, never something you assume.

**Setup Stage 4 numbers** (income goal, average price, commission per side, split and fees on My goals this year and Business Plan & Goals) are a starting point: show them and ask "Still right?" instead of asking again.

## Step 3: Ask for the numbers

Follow the question order in the industry file. Save each group of answers to **My business numbers** on the Master Profile as you finish it, so stopping halfway loses nothing.

**Year to date and the plan period.** Always ask how they're doing so far this year, not only last year, and what period the goal covers (next 12 months, rest of this year, a cap year, an award year). If it's the rest of a year, subtract what they've already done.

**Skip questions that answer themselves, and say why:**
- Agreements signed equals deals closed: skip "how many of those closed."
- Only one deal closed: skip the average price question and use that deal's price.
- "None yet" for a funnel step: skip the steps after it.

**How they get paid.** Ask the pay questions in the industry file once. Then walk one typical deal through them in a short table, before and after the cap, in the order you think applies. Ask: "Is that the right order and the right amounts?" Fix it until they confirm, then save the confirmed order in plain words on the **Deal walk-through (confirmed)** line. Never guess how one fee relates to another or to the cap. Ask.

## Step 4: Diagnose

Calculate their funnel rates (lead to agreement, agreement to close). Then name the problem in one sentence:

- **Lead problem:** good conversion, not enough leads.
- **Conversion problem:** plenty of leads, few agreements or closings. For example, 200 leads and 1 agreement. Say it plainly, recommend fixing conversion before buying more leads, and hold paid ads until Month 3 of the roadmap.
- **Market problem:** steady leads and conversion, but fewer closings than last year because of prices, rates or inventory in their area.
- **Not enough data:** say what's missing and use the NEZ OS starting estimates from the industry file, labeled.

If an agent's numbers don't add up to their goal at their capacity or within their boundaries, say so and offer options (raise average price, add help, change the period, change the target). Never quietly shrink the goal.

## Step 5: Save the numbers

Before writing the plan, make sure every answer is on the **My business numbers** section of the Master Profile, one line per item, using the line names in `../nez-setup/templates/master-profile.md`. Create the section if it's missing (right after My goals this year). Update a line in place; never add a second one. Set **Last plan date** to today. Also update **My goals this year** (Income goal, Number of closings) if the plan changed them. Other skills (/nez-goals, /nez-review, /nez-board) read these lines. Say nothing technical about it.

If the goal itself changed (a new income goal, a new period, a new top lead source), add one Decisions Log row per the brain rules.

## Step 6: Write the plan

Say: "Got everything I need. Give me a moment to put your plan together."

Write the plan with the 9 sections in `references/plan-sections.md`, using the details the industry file adds for each. Follow every core rule. Run a last check before showing it: every number traced to the agent's answers or labeled as an estimate, no fees from memory, no promises, no em dashes, boundaries respected.

## Step 7: Save and offer a copy

On **Business Plan & Goals**, update in place (never a second page):
- **The big picture:** income goal, average sale price, commission per side, split and fees summary, closings needed.
- **The math (work backward) table:** Closings, Contracts written, Appointments, Conversations, New leads, per year, month and week.
- **Top lead sources (focus here):** the 3 the plan focuses on.
- **This quarter:** quarter, target closings, top 3 priorities from the roadmap.
- **My business plan:** the full plan, under this heading with "Last updated [date]". Replace the old plan under it on a rerun. Create the heading right after This quarter if it's missing.

Then say:

> "Your business plan is ready, [name].
> ✅ Saved to your brain: Business Plan & Goals, with your math table and this quarter's priorities
> ✅ Your numbers are saved to your Master Profile, so your other skills use them too
> ✅ It's a living plan: run /nez-bizplan any time your numbers change
>
> Want a copy to save, print or share?
> A) The full plan here as text
> B) A Google Doc (if Google Drive is connected)
> C) A Word file
> D) A PDF"

- **A:** the full plan as clean text.
- **B:** create it with the Google Drive connector. If it isn't connected, say so and offer C or D.
- **C or D:** build the file and send it. If their brand fonts aren't available, say a similar font was used.

## Step 8: Next step

Recommend ONE next step:
- If /nez-goals is installed: "Next: run /nez-goals. It turns this plan into this quarter's targets and a 13-week plan, with a 10-minute weekly check-in."
- If not: point them to the Vault prompt "Friday Weekly Review" and say /nez-goals is coming to NEZ OS.

Say once: "After a few weekly check-ins, run /nez-review to compare your results with this plan." (If /nez-review isn't installed yet, skip this line.)

End with: "You can run /nez-next any time and I'll tell you your best next step."
