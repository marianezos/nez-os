---
name: nez-goals
description: Turns a real estate agent's NEZ OS business plan into this quarter's targets and a 13-week plan, then keeps them on track with a short weekly check-in. Reads the numbers saved by /nez-bizplan, counts deals already under contract, splits targets by client type, works out take-home with their exact split and fees, shifts activity for the time it takes to close, and checks it against the hours they have. Never assumes anyone's commission rules. Saves each quarter to the Quarterly Goals page. Triggers when the user runs /nez-goals, or says "set my goals", "quarterly goals", "90-day plan", "13-week plan", "weekly check-in", "track my goals", or "am I hitting my goals".
---

# NEZ OS Goals: Your Quarter and Your Weekly Check-in

## Purpose

Turn the business plan into this quarter's targets and a week-by-week plan the agent can actually follow, then keep them on track with a 10-minute weekly check-in. Every calculation is shown step by step with the agent's own numbers, so they can check each line.

## What it covers

- **Three things in one skill:** set this quarter's goals, a weekly check-in, and set up next quarter (with a look back at how the last one went).
- **Reads, never re-asks:** the goal, plan period, funnel rates, pay structure, pending deals and hours from My business numbers (/nez-bizplan), the 90-day roadmap from the business plan, and deals under contract in Clients & Deals.
- **Asks only what's missing:** how they plan their quarters (calendar or their own cap year), whether their business is seasonal, how long from signed agreement to closing, and their client mix if it isn't saved.
- **The math, step by step:** yearly goal, minus what's done, minus what's already under contract, this quarter's share, take-home with their exact split, cap and fees, deals needed, split by client type, then agreements and conversations per week.
- **Timing built in:** shows which weeks agreements have to be signed for closings to land this quarter, and what this quarter's work sets up for next quarter.
- **A 13-week plan:** each week with its dates, activity targets by client type, and two or three actions from the business plan's roadmap. Checked against their hours and boundaries.
- **Weekly check-in:** this week's numbers, where new business came from, ahead, on track or behind, the bottleneck if behind, an adjustment to the next two weeks only, and one action for next week. Logged on the Quarterly Goals page.
- **Saves:** one section per quarter on the Quarterly Goals page (newest first, older quarters kept), This quarter on Business Plan & Goals, and the quarter's numbers on the Master Profile.

## Core rules

- **Read the brain rules first:** the plugin's `references/brain-rules.md` (two levels up from this skill). Follow it for finding the brain, saving and logging.
- **Never ask what the brain already has.** One question at a time, with short lettered lists for quick answers. Match their language (Spanish if they write in Spanish).
- **Never assume how they get paid.** Use only the pay structure saved by /nez-bizplan. Missing or unclear: ask once with the matching /nez-bizplan question, save it, and go on. "None" is zero; "not sure" isn't counted, and you say so.
- **Label every number:** (your number), (your estimate), (I asked you), (I calculated this), or (assumption: even split).
- **Check the target against reality.** If the weekly activity doesn't fit their **Hours per week for finding business**, their boundaries or their capacity, say so plainly and offer options (more help, a longer timeline, a different target, raising average price). Never quietly shrink the goal.
- **Write only where this skill writes:** the Quarterly Goals page, the This quarter section of Business Plan & Goals, and the quarter lines on the Master Profile (plus Tasks and Clients & Deals only with the agent's OK, as described below). Keep older quarters. Never touch a review link line or a past check-in.
- **Fit it to them** (My personality): a **Driver** gets the numbers and the actions first, short. A **Connector** gets the vision and the people first, with energy. A **Steady** gets steady progress, calm and step by step. A **Planner** gets the data and the detail. If their biggest blocker is taking on too much, the quarter has three priorities, no more.
- **No promises.** Targets are plans, not predictions. Tax questions go to their CPA.
- **Write in their voice** if a default voice exists. **No em dashes,** anywhere: tables, headings and lists included (write "Deal 3: reaches the cap").

## Step 1: Find the brain and read

Find the brain per the brain rules. Read `industry_flow` from Setup Status and load `industries/<industry_flow>.md` from this skill (if blank: `real-estate` if the Master Profile mentions a brokerage, otherwise `generic`).

Read:
- **Master Profile:** My business numbers (every line, including Current quarter, Quarter basis, Seasonality and Goals last set from earlier runs), Client types I work with, My boundaries, My personality.
- **Business Plan & Goals** (`business_plan_page_id`): My business plan (its 90-day roadmap and date), Top lead sources, This quarter.
- **Quarterly Goals** (`quarterly_goals_page_id`, inside Business Plan & Goals): which quarter sections exist, the current quarter's weekly plan and check-in log.
- **Clients & Deals** (`clients_deals_ds_id`): Under contract rows (Type, Price, Key Date) and recent Closed rows.
- **Tasks** (`tasks_ds_id`): open tasks that came from the business plan, so nothing is duplicated.
- **Setup Status:** `last_check_in`, `last_review`.

If the Quarterly Goals page is missing, search the brain once for "Quarterly Goals." If it truly doesn't exist, ask once: "Your Quarterly Goals page isn't in your brain yet. Want me to add it inside your Business Plan & Goals page?" Write nothing until they say yes, then create it per `../nez-setup/templates/workspace-build.md` and save its ID in Page IDs.

## Step 2: Choose what to do

1. **No plan numbers** (My business numbers has no Goal number or no funnel numbers): say "I build your quarter from your business plan numbers, and I don't have them yet. Run /nez-bizplan first (about 15 minutes), then I'll turn it into this quarter's plan." Stop. Don't run a mini plan here.
2. **The current quarter already has a section:**
   > "You already have goals for [quarter]. What would you like to do?
   > A) Weekly check-in
   > B) Revise this quarter
   > C) Set up next quarter"
3. **No section for the current quarter:** set goals. If more than ten weeks of the quarter are gone, ask whether to plan the rest of this quarter or start with the next one.

If they say "weekly check-in" or "check in," go straight to WEEKLY CHECK-IN.

## SETTING GOALS

### Ask only what's missing, once each

- **Quarter basis:** "Do you plan by calendar quarters, or by your own year, like your cap year or an award year?" Saves to **Quarter basis**. Their own year: ask when it starts (use Cap year starts if saved) and build the quarters from that date.
- **Seasonality:** "Are some months busier than others for you? For example, spring busy and December slow." Saves to **Seasonality**. No or not sure: split evenly and label it (assumption: even split).
- **Timing:** the timing question in the industry file. Saves to **Time from signed agreement to closing**.
- **Anything else the industry file lists** that My business numbers doesn't have yet (client mix, a missing fee). Ask once, save, go on.

### What's already in progress

Show the Under contract deals in Clients & Deals and the Pending deals now line: "I see [N] deals under contract, closing around [months]. Still right? Anything to add?" Deals that close inside this quarter count toward it. Never count a deal they call shaky. Never add rows to Clients & Deals here.

### The math

Follow the chain in the industry file. Every step on its own line with their numbers. No skipped steps, and say when you round. The order:

1. The yearly target, exactly as they stated it, and the plan period.
2. Minus what's done so far this year.
3. This quarter's share (even split unless they gave seasonality), minus pending deals closing this quarter.
4. Converted to the numbers that matter for their business, with take-home (industry file).
5. Worked backward through their own rates to weekly activity.
6. Shifted earlier by the time from agreement to closing: what closes this quarter was mostly signed earlier, and what's signed late this quarter closes next quarter.

### The 13-week plan

Build 13 weeks (or the weeks left, if planning the rest of a quarter). Each week: dates, activity targets by client type, and two or three actions taken from the business plan's 90-day roadmap and their marketing goals. Respect the blocker rule and their boundaries (no actions in protected hours or things they don't do).

**Time check:** turn the weekly activity into hours (about 10 minutes per conversation and 1.5 hours per appointment unless they gave their own, labeled as starting estimates) and compare with Hours per week for finding business. Say plainly whether it fits.

### Save

1. **Quarterly Goals page:** write the quarter's section with `templates/quarterly-goals-page.md`, newest quarter first. Revising: replace only that quarter's section, and keep its check-in log and Review line exactly as they are.
2. **Business Plan & Goals, This quarter:** update Quarter, Target closings, and Top 3 priorities. Leave the Latest review line alone.
3. **Master Profile, My business numbers:** update **Current quarter** (for example 2026 Q4), **Quarter basis**, **Seasonality**, **Time from signed agreement to closing**, **Goals last set** (today) and the quarter's headline numbers named in the industry file. Update a line in place; never add a second one.
4. **Tasks (only with their OK):** "Want me to add Weeks 1 and 2 to your Tasks?" On yes, add one row per action not already an open task (Status Not started, Pillar, Due Date that week, Notes "From my Q[n] goals"). Never more than 6 at once, and never duplicate a task from the business plan.
5. Tell them in plain words what you saved and where.

## WEEKLY CHECK-IN

Use this when they pick A or say "weekly check-in." About 10 minutes.

1. Read the current quarter's section: the plan to date and the check-in log.
2. Ask one at a time for this week's numbers, using the activity names in the industry file, and anything that went under contract or closed. Short lists so they can answer fast.
3. **Where it came from (optional):** ask once, "Where did this week's new agreements and closings come from?" Offer their own lead sources as short options plus "other," and let them skip. If they answer, keep it as a tally for the log line. If they skip, log nothing for sources. Never invent a source.
4. **Clients & Deals (only with their OK):** if something closed or went under contract and it isn't in Clients & Deals, offer once: "Want me to add that to Clients & Deals?" On yes, add or update the row (Stage, Type, Price if they gave it, Key Date, Lead Source). Never add client contact details or sensitive information.
5. Compare totals so far with the plan to date. Say plainly: ahead, on track or behind (within 10% is on track), with the numbers.
6. **If behind,** find the bottleneck from their own rates: not enough activity, or activity that isn't converting (name the step). Adjust only the next two weeks unless they ask to revise the quarter. Keep the blocker rule.
7. **Log it:** add one line to the quarter's check-in log: week, date, actuals against plan, status, any adjustment, and, if they gave sources, end with `Sources: Name count, Name count`. Set `last_check_in` in Setup Status to today.
8. End with **one clear action for next week.** Say once per quarter: "Any time you want a deeper look, /nez-review compares your results with your plan by client type and lead source and shows your take-home."

If it's been more than four check-ins since the last review, or two weeks or less are left in the quarter, recommend /nez-review as the next step.

## SET UP NEXT QUARTER

When they pick C, or a new quarter has started:

1. **Show how last quarter went:** the goal against what happened, from the check-in log, Clients & Deals and My business numbers. If there's a /nez-review for it, link it.
2. **Ask what changed:** a new split, a new average price, new conversion rates, a new goal. If Last plan date is more than 90 days ago, suggest updating with /nez-bizplan first.
3. Follow SETTING GOALS for the new quarter. Keep last quarter's section on the page.

## Next step

Recommend ONE:
- Setup Stage 5 (objection bank) not done: /nez-setup, Continue setup.
- Otherwise the next step on the NEZ OS path from /nez-next (for example your first content week or your lead magnet; use the Vault prompt if the skill isn't installed).

Always add: "Do your first weekly check-in in 7 days. Run /nez-goals and pick Weekly check-in, and /nez-next will remind you."

End with: "You can run /nez-next any time and I'll tell you your best next step."
