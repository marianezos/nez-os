# Bizplan: real estate flow

Used by `SKILL.md`. Follow its core rules: ask only for what the brain doesn't have, use only the pay structure the agent gives you, show the math step by step, and skip questions that answer themselves. **Saves to** names a line in the Master Profile's **My business numbers** section unless it says otherwise.

## Opening

> "OK [name], let's build your business plan. I already know you work in [main market] as [how I run my business], mostly with [client types], and your goal is [12-month goal]. What I need now is your numbers, so the plan is real and not a guess. Ballpark is fine for anything you don't know exactly. About 15 minutes, one question at a time."

---

## A. Last year

1. "Let's start with last year. How many deals did you close?"
   **Saves to:** Last year: closings
2. "What was your total sales volume?"
   **Saves to:** Last year: sales volume
3. "And your gross commission income, before your brokerage took its share?"
   **Saves to:** Last year: GCI

## B. This year so far

4. "How many deals have you closed so far this year?"
   **Saves to:** This year so far: closings
5. "About how much GCI have those brought in?" *(Skippable.)*
   **Saves to:** This year so far: GCI

## C. Leads and conversions

Intro: "Now the part that tells us where to focus: how leads turn into clients. Rough numbers are fine."

6. "About how many leads did you get last year, from every source?"
   **Saves to:** Leads last year
7. "Of those, how many signed an agreement with you: buyer, listing, tenant or any other?"
   **Saves to:** Agreements signed last year
8. "And how many of those closed?" *(Skip if agreements equal deals closed, or they closed one deal. Use their number and say why.)*
   **Saves to:** Closed from those agreements

Calculate and save to the plan, not the profile:
- Lead to agreement = agreements ÷ leads × 100
- Agreement to close = closed ÷ agreements × 100

9. "You usually work around [typical price range]. What was your average sale price?" *(Skip if they closed one deal; use that price and say why.)*
   **Saves to:** Average sale price
10. "What's the mix of your business? For example 60% buyers and 40% sellers, or mostly investors with some rentals. I know you work with [client types]."
    **Saves to:** My business mix

## D. How you get paid

Intro: "Every brokerage pays differently, so I won't assume anything. I'll ask about each piece once and save it, so you never have to explain it again. 'None' and 'not sure' are both fine answers."

If these lines are already saved, show them and ask "Still right?" One question at a time.

P1. "What's your split, and do you have a cap? For example: 'I keep 80% until I've paid the company \$20,000 this year.'"
    **Saves to:** Split and cap
P2. *(Only if they have a cap.)* "When does your cap year start, and how much of your cap have you paid so far?"
    **Saves to:** Cap year starts, cap paid so far
P3. "Does your brokerage take any fees on each deal, like a transaction, admin, compliance or E&O fee? Give me each one with its amount. For each, tell me if it keeps going after you cap and if it counts toward your cap. 'None' or 'not sure' is fine."
    **Saves to:** Fees on each deal (one line per fee: name, amount, after cap yes/no/not sure, counts toward cap yes/no/not sure)
P4. *(Only if they have a cap.)* "After you cap, does anything change, like a different split or a fee? Say 'none' if you keep everything except the per-deal fees."
    **Saves to:** After the cap
P5. "Is there a franchise or royalty fee? If yes: what percent, a percent of what, does it have its own yearly cap, how much have you paid this year, and does it count toward your brokerage cap?"
    **Saves to:** Franchise or royalty fee
P6. "Any monthly or yearly fees to your brokerage, like a desk, tech or E&O fee? Each one with its amount and how often."
    **Saves to:** Monthly or yearly brokerage fees
P7. *(Only if How I run my business says team.)* "Do you pay a team split? How much, and does it come off the top or out of your share after the brokerage split?"
    **Saves to:** Team split
P8. "Do you pay referral fees regularly? What percent, and on about what share of your deals?"
    **Saves to:** Referral fees
P9. "Any costs outside your brokerage you want counted before take-home, like MLS or association dues, lockbox, or your CRM? Each with its amount and how often."
    **Saves to:** Costs outside my brokerage
P10. "What's your usual commission per side, as a percent or dollars? An average is fine." *(If they don't know: last year's GCI ÷ last year's closings, and say you calculated it.)*
    **Saves to:** My commission per side
P11. *(Only if they lead a team or own the brokerage.)* "Do your team's deals count toward your own goal?"
    **Saves to:** Team deals count toward my goal

### Walk one deal through

Take one typical deal at their average GCI per deal. Show a short table in the order you think applies: GCI, then referral fee, team split, brokerage split, royalty, per-deal fees. For each: what it's taken from and the amount. Once before the cap, once after. Then:

> "Is that the right order and the right amounts?"

Fix it until they say yes. Save the confirmed order in plain words.
**Saves to:** Deal walk-through (confirmed), and Take-home per deal (before cap / after cap)

Also write a one-line summary of their pay structure (for example "80/20 to a \$20,000 cap, \$395 per deal, 6% royalty capped at \$3,000") on the **My split / fees** line of Business Plan & Goals.

- "None" is zero. "Not sure" is not counted: write "not counted, you weren't sure" in the table and in the plan.
- Never guess how a fee relates to the cap or to another fee. Ask.

## E. Lead sources

12. If **Where my business comes from** is filled in: "Your biggest source is [first one]. Still true?" Otherwise ask:
    "What's your number one source of business right now?
    A) Past clients and people I know (sphere, referrals)
    B) Social media
    C) YouTube
    D) Paid ads
    E) Open houses
    F) Calling or door knocking
    G) Online lead sites (Zillow, Realtor.com and so on)
    H) Something else"
    **Saves to:** Top lead source
13. "Which lead source do you most want to add or grow this year?"
    **Saves to:** Lead source to add or grow

## F. Getting found online

14. "Where's your Google Business Profile at?
    A) Fully set up and getting reviews
    B) Set up, but I don't really manage it
    C) Barely started
    D) Don't have one yet"
    **Saves to:** Google Business Profile
15. "How often do you post on social media right now?
    A) Rarely or never
    B) A few times a month
    C) 1 to 3 times a week
    D) Every day"
    **Saves to:** How often I post
16. "Are you running paid ads?
    A) No
    B) Facebook or Instagram
    C) Google
    D) More than one"
    **Saves to:** Paid ads
17. "What marketing do you most want to add or improve this year? Pick all that fit.
    A) Grow YouTube
    B) Post on social more consistently
    C) Events, classes or webinars for clients
    D) Build an email list or newsletter
    E) Improve my Google Business Profile
    F) Start paid ads
    G) Door knocking or neighborhood campaigns
    H) Build my referral network"
    **Saves to:** Marketing I want to add

## G. The goal

18. "What period is this plan for: the next 12 months, the rest of this year, or something else, like your cap year or an award year?"
    **Saves to:** Plan period
19. "Your goal is [12-month goal]. Let's put a number on it. Is your target GCI, take-home pay, or a number of deals?" Then: "What's the number?"
    **Saves to:** Goal type, Goal number. If it's a dollar goal, also update Income goal on My goals this year.
20. "Is there an award, level or milestone you're going for, at your brokerage or anywhere else? Tell me what it's called and exactly what it takes, in your words." *(Skippable. Use only what they say; if it's unclear, ask.)*
    **Saves to:** Milestone or award

If there's no deal goal yet, calculate deals needed with the math below and ask them to confirm it.
**Saves to:** Closings needed, and Number of closings on My goals this year.

---

## The math (show every line)

1. Goal (your number). If the period is the rest of the year, minus what's done so far.
2. If the goal is take-home: take-home per deal from the confirmed walk-through, before and after the cap. Count how many deals reach the cap (using cap paid so far) and add the take-home deal by deal.
   If the goal is GCI: GCI ÷ GCI per deal.
3. Deals needed (round up). If team deals count, show their share separately.
4. Agreements needed = deals ÷ agreement to close rate.
5. Leads needed = agreements ÷ lead to agreement rate.
6. Conversations and appointments: use their numbers if they have them. If not, use the NEZ OS starting estimates and label them: 1 closing per 1.2 agreements, 1 agreement per 3 appointments, 1 appointment per 10 conversations, 1 conversation per 5 new leads.
7. Per month and per week (divide by the months and weeks in the plan period).

If a milestone or award was given, show its math the same way, labeled "as you told me."

---

## The plan sections for real estate

Write the 9 sections in `../references/plan-sections.md`, in order, tailored to their client types and the pay structure they confirmed:

1. **Agent snapshot:** who they are in 4 to 6 lines: name, brokerage, how they run their business (solo, team, team leader), years licensed, main market, client types, specialty, brand. Second person, specific to their brain.
2. **Where you stand:** an honest look at last year and this year so far (closings, volume, GCI), both funnel rates (lead to agreement, agreement to close) and the diagnosis in one plain sentence: lead problem, conversion problem or market problem. If it's the market, use **What my market is doing right now**. One line on what's working that they should keep doing. No fluff.
3. **Your target and the math:** the goal turned into weekly activity using their full pay structure (split, cap, per-deal fees, after-cap terms, royalty, monthly fees, team split, referral fees, outside costs). Show the deal walk-through table, take-home per deal before and after the cap, which deal reaches the cap, then deals, agreements, appointments, conversations and leads, per year, month and week. If they gave a milestone or award, show its math using only what they told you, labeled "as you told me." If the period is the rest of the year, subtract what's done. Every number labeled with where it came from. This also fills the math table on Business Plan & Goals.
4. **Your lead engine:** built from their top lead source and the one they want to grow, fit to their client types, time, budget and boundaries. Sphere and past clients first if they have them in their market; if they're new to their market or have no sphere there, say so and lean on open houses, a lead magnet, local content and a Google Business Profile. Never plan text campaigns to their database without documented texting consent.
5. **Your marketing plan:** from the marketing they picked, their Google Business Profile status, how often they post, paid ads and their YouTube line. Which platforms to focus on, how often to post, and 2 or 3 quick wins for the first 30 days. Fair Housing safe (homes and areas, never who belongs there), the disclosure line on everything public, and the Housing special ad category for Facebook and Instagram ads.
6. **Your conversion system:** from their funnel numbers and how they use their CRM. Specific fixes for lead to appointment (speed to lead, follow-up in their CRM), appointment to agreement (their consultation, buyer and listing agreements, answers marked Works in their Objection Bank, their Client FAQs) and agreement to close.
7. **Your 90-day roadmap:** Month 1, Month 2, Month 3, each with 3 to 5 specific actions (what, how many, by when), not general advice. What to do first, what to build next, what to improve last. A conversion problem goes first and holds paid ads to Month 3. Respect their biggest blocker (3 priorities if they take on too much) and their boundaries. Name the NEZ OS skill or Vault prompt that helps with each action.
8. **Your biggest opportunity:** one clear insight, a short paragraph, about the biggest thing they're not using yet, based on all their numbers and their brain. For example: a source that converts well but gets little time, past clients they never follow up with, a client type they serve well but don't market to, or an area they know better than anyone. Make it specific to them, never a generic tip.
9. **What success looks like:** their success beyond the numbers (from /nez-self), what a good month looks like and their 12-month goal, in their own words. Connect the closings per week to what they actually want. End on that, not on a number.

**Tone by work style** (from My personality): a Driver gets it direct and punchy, numbers and actions first. A Connector gets the vision and the people first, with energy and stories. A Steady gets it calm and reassuring, step by step, relationship first. A Planner gets the data, the detail and the reasons.
