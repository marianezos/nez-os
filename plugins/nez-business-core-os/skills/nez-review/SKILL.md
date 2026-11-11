---
name: nez-review
description: Reviews how a real estate agent's business is doing against their own NEZ OS plan, for this quarter so far, last quarter or the year to date. Reads the plan and numbers from /nez-bizplan, the weekly check-ins, and closed and pending deals in Clients & Deals, then compares plan with actual step by step, by client type and by lead source, works out take-home with their exact split and fees, names the one bottleneck, sorts activities into keep, fix or drop, and suggests up to three adjustments. Never assumes anyone's commission rules and never invents a benchmark. Saves the review to the Business Reviews page. Triggers when the user runs /nez-review, or says "business review", "how am I doing", "am I on track", "review my numbers", "how did this quarter go", or "what should I adjust".
---

# NEZ OS Review: How Your Business Is Doing

## Purpose

Give the agent an honest, clear look at how their business is doing against their own plan. Every number is shown step by step so they can check it. The review says what's working, what isn't, where the one bottleneck is, and the few changes worth making next.

## What it covers

- **Three timeframes:** this quarter so far, last quarter, or the year to date.
- **Reads, never re-asks:** the goal, plan period, pay structure and rates from My business numbers (/nez-bizplan), the plan's weekly numbers and this quarter's target from Business Plan & Goals, the weekly check-ins, and Closed and Under contract deals in Clients & Deals.
- **Plan vs actual, line by line:** conversations, appointments, agreements, closings and GCI, with a status for each: ahead, on track, behind, or not counted yet (still closing).
- **Timing built in:** uses the agent's own time from first contact to closing, so they aren't told they're behind when the money just isn't in yet.
- **By client type and by lead source:** which type and which source is ahead or behind, the rate from lead to close per source, and cost per closing when spend is known. Small samples are called "too few to tell."
- **Take-home:** the actual closings walked through their exact split, cap, fees and royalty, in the order they confirmed, next to the plan.
- **What the numbers say:** up to three things working, three not, one bottleneck, and a keep, fix or drop list.
- **Since your last review:** on every review after the first, it starts with the adjustments agreed last time: did they happen, and what did the number they were watching do? Follow-through gets credit, and anything that didn't happen gets a reason, not a repeat.
- **Up to three adjustments,** each with the number behind it and what to watch next week. It never changes goals; that's /nez-bizplan or /nez-goals.
- **Saves:** one section on the Business Reviews page (newest first, a rerun replaces its own section), a Latest review link on Business Plan & Goals, and the review date on the Master Profile.

## Core rules

- **Read the brain rules first:** the plugin's `references/brain-rules.md` (two levels up from this skill). Follow it for finding the brain, saving and logging.
- **Never ask what the brain already has.** One question at a time, with short lettered lists so answers are quick. Any question can be skipped. Match their language (Spanish if they write in Spanish).
- **Missing a number the review needs?** Ask once, using the matching /nez-bizplan question, save it in My business numbers, and go on. This happens most with plans made before these lines existed: Time from first contact to closing, Hours per week for finding business, Pending deals now, My business mix. If they skip it, say what the review can't show without it.
- **Never assume how they get paid.** Use only the pay structure saved by /nez-bizplan. If something is missing or unclear, ask once with the matching /nez-bizplan question, save it, and go on.
- **Their plan, their numbers.** Compare actuals with their own plan. There are no targets per lead source, so compare sources with their own overall rates and their own ranking, and label that "from your own numbers."
- **Label every number:** (your plan), (your check-ins), (Clients & Deals), (your estimate), (I asked you), or (I calculated this).
- **Never invent** a benchmark, an industry average, a market statistic or a result. If a number is missing, say so and what it would unlock.
- **No promises.** A review describes what happened, never what will happen. Tax and legal questions go to their CPA or attorney.
- **Fit it to them** (My personality): a **Driver** gets the numbers and the actions first, short. A **Connector** gets the wins first, with energy. A **Steady** gets steady progress first, calm and step by step. A **Planner** gets the data and the detail. If their biggest blocker is taking on too much, give one or two adjustments, never three.
- **Write only where this skill writes:** the Business Reviews page, one link line on Business Plan & Goals, and three lines on the Master Profile. Never change goals, targets, the plan or past check-ins. Never create a database.
- **Fair Housing safe:** a review is about numbers and activities, never about who lives where. Never rate an area.
- **Write in their voice** if a default voice exists in the Voice Library: plain, the way they talk. **No em dashes,** anywhere: tables, headings and lists included.

## Step 1: Find the brain and read

Find the brain per the brain rules. Read `industry_flow` from Setup Status and load `industries/<industry_flow>.md` from this skill (if blank: `real-estate` if the Master Profile mentions a brokerage, otherwise `generic`).

Read:
- **Master Profile:** My business numbers (every line), Client types I work with, Where my business comes from, My boundaries, My personality.
- **Business Plan & Goals** (`business_plan_page_id`): The big picture, The math table (per week and per month), Top lead sources, This quarter, My business plan (its date), and Weekly check-ins.
- **Clients & Deals** (`clients_deals_ds_id`): rows with Stage Closed or Under contract, with Type, Price, Key Date and Lead Source.
- **Quarterly Goals** (`quarterly_goals_page_id`, from /nez-goals): the quarter sections, each with its targets, weekly plan and check-in log.
- **Business Reviews** (`business_reviews_page_id`): earlier reviews, so a rerun of the same period replaces its own section.
- **Setup Status:** `last_check_in` and `last_review`.

If a quarter plan from /nez-goals exists (a section on Quarterly Goals for the timeframe), use its weekly plan and check-in log. Otherwise the plan comes from the business plan's weekly numbers, labeled (your plan, spread evenly by week).

**No plan yet** (My business numbers has no Last plan date and the math table is empty): say "I review your results against your plan, and you don't have one yet. Run /nez-bizplan first (about 15 minutes), then come back." Stop. Don't run a mini plan here.

## Step 2: Choose the timeframe

> "What would you like me to review?
> A) This quarter so far
> B) Last quarter
> C) The year to date"

If the timeframe has no check-ins and no Closed rows in Clients & Deals, say a review needs at least some actuals, ask once for rough totals (conversations, appointments, agreements, closings, GCI), label them (your estimate), and say the review will be early and rough. Never refuse, and never fill a gap with a guess.

## Step 3: Check the data

Follow `references/review-checks.md` sections 1 and 2. Count the check-ins in the timeframe, see which name a client type and which have a source tally, and match Closed deals in Clients & Deals to the timeframe. Tell the agent in one or two lines what the review can cover, what it can't, and why. Fewer than two check-ins: say it's early and avoid calling trends.

**Clients & Deals check:** show the closings you found ("I see 3 closings in this timeframe: [Type, month, price]. Is that all of them?"). Add any they name to the review only; never add or change rows in Clients & Deals from this skill.

## Step 3b: Since your last review

Skip this step on the first review. Otherwise open the most recent earlier review on the Business Reviews page (not the section this run is about to replace) and read its **Adjustments**.

1. Show them in one short list: "Last time ([review date]) we agreed on: 1) ... 2) ... 3) ..."
2. For each one, ask (one at a time, skippable):
   > "Did this happen?
   > A) Yes
   > B) Partly
   > C) Not yet"
3. For each, show the number it said to watch, then and now, from this review's data (label the source). Say plainly whether it moved.
4. **Done and the number moved:** call it a win and carry it into What's working.
   **Done but the number didn't move:** say so; it may need more time or a different fix. Look at it in Step 8.
   **Partly or not yet:** ask once, "What got in the way?" with short options: A) Ran out of time B) Wasn't sure how C) Changed my mind D) Something else. Use the answer: no time points to the time check, not sure how points to a skill or Vault prompt, changed my mind means offer to log it in the Decisions Log and drop it. Never repeat the same adjustment word for word without addressing why it didn't happen.
5. Keep it short: one or two lines per adjustment. No guilt, no lecture: it's information for this review.

## Step 4: Plan vs actual

Show each step on its own line with their numbers.

1. **Plan to date:** the weekly plan numbers times the weeks in the timeframe up to today (or the whole quarter for last quarter). Show the arithmetic.
2. **Actual to date:** the check-in lines added up, plus Closed deals from Clients & Deals, plus anything they give now.
3. For each number (the activity numbers in the industry file, agreements, closings, GCI or revenue): plan, actual, difference and status, using the words and the 10% line in `references/review-checks.md` section 3.
4. **Year to date:** compare with the yearly goal and plan period, using This year so far from My business numbers plus the check-ins. Say which months have no data and don't guess for them.
5. **Timing:** closings in this timeframe come from work started about **Time from first contact to closing** earlier. Count Under contract deals as "not counted yet" with their expected month, and say which activity from this timeframe will show up as closings later.

## Step 5: By client type or offer

Follow the industry file. Plan and actual for each client type (from My business mix and the plan), using check-in lines that name a type and the Type on Closed deals. Name one type ahead and one behind, with the numbers. A type with no data is a gap, never a zero.

## Step 6: By lead source

Follow `references/review-checks.md` section 4.

1. Build the source table from check-in source tallies and the Lead Source on Closed and Under contract deals. If there are none, ask once for rough counts for the timeframe, offering their own ranked sources plus "other," and let them skip. Label these (your estimate).
2. For each source: leads, agreements, closings, and the rate from lead to close. Compare with their overall rate and their ranking, labeled (from your own numbers).
3. **Spend:** if **Lead source spend** is blank and any source costs money (ads, portals, open house costs), ask once for the monthly spend per source (skippable), save it, and show cost per closing. "None" is zero, "not sure" isn't counted.
4. Name the source with the most closings and, if spend is known, the best return. Say plainly when the sample is too small.

## Step 7: Take-home

Follow the take-home steps in the industry file, using only the pay structure in My business numbers and the order on **Deal walk-through (confirmed)**. Show GCI or revenue next to take-home, before and after the cap, next to the plan. If a fee is missing, ask once with the matching /nez-bizplan question and save it. If nothing is saved, show GCI or revenue only and say: "Take-home needs your split and fees. Run /nez-bizplan to add them and I'll show both."

## Step 8: What the numbers say

1. **What's working:** up to three, each with its numbers.
2. **What isn't:** up to three, each with its numbers.
3. **The bottleneck:** one, using `references/review-checks.md` section 5: not enough activity, activity that isn't converting (name the step), or timing.
4. **Keep, fix or drop:** sort their main activities and lead sources with section 6. Never drop something on a sample too small to judge, and always say where the freed time or money should go.

## Step 9: Adjustments

Build on Step 3b: keep what worked, change the approach on what didn't move, and don't bring back an adjustment they decided to drop. Up to three (one or two if they tend to take on too much). Each one: what to change, why (the number behind it), and what to watch next week. Check each against **Hours per week for finding business** and My boundaries, and say plainly if one doesn't fit. Point to the NEZ OS skill or Vault prompt that helps where one exists (for example the Objection Bank for a conversion drop).

If the plan itself no longer fits (way behind with too little time left, or way ahead), say so and suggest /nez-bizplan to update the plan or /nez-goals to revise the quarter. Never change goals here.

## Step 10: Save

1. **Business Reviews page:** write the review with `templates/review-page.md` as one section at the top (newest first). A rerun of the same period replaces only that section. If the page is missing, search the brain once for "Business Reviews." If it truly doesn't exist, ask once: "Your Business Reviews page isn't in your brain yet. Want me to add it inside your Business Plan & Goals page?" Write nothing until they say yes, then create it per `../nez-setup/templates/workspace-build.md` and save its ID in Page IDs.
2. **Link it:** keep exactly one **Latest review:** line in This quarter on Business Plan & Goals, and, if the reviewed quarter has a section on Quarterly Goals, the same line in that section's Review part (for a year to date review, the current quarter's section). Each points to the new review with the date. Touch nothing else on those pages.
3. **Master Profile:** in My business numbers, update **Last review date** (today), **Review period** (for example 2026 Q4 so far) and **Lead source spend** if you asked. In Setup Status, set `last_review` to today.
4. Tell the agent in plain words what you saved and where.

If an adjustment is a decision they make ("stop paying for portal leads"), offer to log it in the Decisions Log per the brain rules.

## Next step

Recommend ONE:
- Two weeks or less left in the quarter, or the plan no longer fits: /nez-goals to set up or revise the quarter (if it isn't installed, /nez-bizplan to update the plan).
- Otherwise: the next weekly check-in (/nez-goals, or the Vault prompt "Friday Weekly Review" until it ships), and run /nez-review again at the end of the quarter or after four more check-ins.
- A take-home line was missing: mention /nez-bizplan.
- A big decision came up (drop a source, hire help, start ads): suggest bringing it to /nez-board.

End with: "You can run /nez-next any time and I'll tell you your best next step."
