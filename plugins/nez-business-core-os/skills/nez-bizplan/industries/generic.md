# Bizplan: any business

Used by `SKILL.md` when `industry_flow` isn't `real-estate`: a lender, an insurance agent, a coach, a consultant, a service business. Follow its core rules: ask only for what the brain doesn't have, use only the pricing and costs the person gives you, show the math step by step, and skip questions that answer themselves.

**Use their words.** Whatever they call what they sell ("clients", "customers", "loans", "policies", "projects", "sales"), use that word in every question, every line you save and the whole plan. Below, "clients" stands for their word.

**Saves to** names a line in the Master Profile's **My business numbers** section. Lines marked *(any business)* are in the second table of that section in `../nez-setup/templates/master-profile.md`: add them inside the section, after the last line, the first time you need them. Never use a real estate line (split, cap, brokerage fees, GCI) for a business that doesn't have one.

## Opening

> "OK [name], let's build your business plan. I already know you run [business name] in [main market], you work with [client types], and your goal is [12-month goal]. What I need now is your numbers, so the plan is real and not a guess. Ballpark is fine for anything you don't know exactly. About 15 minutes, one question at a time."

---

## A. Last year

1. "Let's start with last year. What was your total revenue?"
   **Saves to:** Last year: revenue *(any business)*
2. "How many clients did that come from?"
   **Saves to:** Last year: clients *(any business)*
3. "What's your average revenue per client?" *(Skip if they had one client: use that revenue and say why. If they don't know: revenue ÷ clients, and say you calculated it.)*
   **Saves to:** Average value per client *(any business)*

## B. This year so far

4. "How many clients so far this year, and about how much revenue has that brought in?"
   **Saves to:** This year so far: clients *(any business)*, This year so far: revenue *(any business)*

## C. Leads and conversions

Intro: "Now let's walk through how people become clients. This tells us exactly where to focus. Rough numbers are fine."

5. "About how many leads, inquiries or prospects did you get last year?"
   **Saves to:** Leads last year
6. "Of those, how many got to a call, a proposal or a quote?"
   **Saves to:** Calls or proposals last year *(any business)*
7. "And how many of those became paying clients?" *(Skip if proposals equal the clients they gave in A2, or they had one client. Use their number and say why.)*
   **Saves to:** Became clients *(any business)*

Calculate for the plan:
- Lead to proposal = proposals ÷ leads × 100
- Proposal to client = clients ÷ proposals × 100
- Diagnose: lead problem, conversion problem or market problem (see `SKILL.md` Step 4).

8. "What's the mix of your business? For example 70% new clients and 30% repeat, or mostly one service with a few others."
   **Saves to:** My business mix

## D. Your model

Intro: "Every business keeps a different share of each sale, so I won't assume anything. I'll ask about each cost once and save it, so you never have to explain it again. 'None' and 'not sure' are both fine answers."

If these lines are already saved, show them and ask "Still right?" One question at a time.

P1. "What fees come out of each sale or payment before you get paid? A platform, marketplace, app store or booking fee, for example. Give me each one as a percent or an amount."
    **Saves to:** Fees on each sale *(any business)* (one line per fee: name, percent or amount)
P2. "What do you pay to process payments, as a percent or an amount per payment?"
    **Saves to:** Payment processing *(any business)*
P3. "Do you pay partners, affiliates or referral sources? What percent or amount, and on about what share of your sales?"
    **Saves to:** Partner and referral fees *(any business)*
P4. "What regular costs do you want counted: software, tools, insurance, memberships, licenses, a team? Each one with its amount and how often."
    **Saves to:** Monthly or yearly costs *(any business)* (one line per cost: name, amount, monthly or yearly)
P5. "Anything else you want counted before you see your take-home, like money you set aside for taxes or costs outside the business?"
    **Saves to:** Other costs *(any business)*
P6. "Putting it all together, about what percent of your revenue do you keep after your main costs? A rough guess is fine."
    **Saves to:** What I keep after costs *(any business)*

### Walk one sale through

Take one typical sale at their average value per client. Show a short table: the revenue, then each fee and cost in order, what each one is taken from, and the amount, down to take-home. Then ask:

> "Is that the right order and the right amounts?"

Fix it until they say yes. Save the confirmed order in plain words.
**Saves to:** Deal walk-through (confirmed), Take-home per client *(any business)*

- "None" is zero. "Not sure" is not counted: write "not counted, you weren't sure" in the table and in the plan.
- Compare the result with the percent they gave in P6 and point out any big gap: "Your walk-through says you keep about 62%, but you guessed 80%. Want to look at what's different?"
- Never guess how one fee relates to another. Ask.

P7. "How many clients or projects can you realistically handle at once, or in a month, before it's too much?"
    **Saves to:** My capacity *(any business)*

## E. Lead sources

9. If **Where my business comes from** is filled in: "Your biggest source of clients is [first one]. Still true?" Otherwise ask:
   "What's your number one source of clients right now?
   A) Referrals and people I know
   B) Past or repeat clients
   C) Social media
   D) YouTube or podcasts
   E) Paid ads
   F) Partners who send me clients
   G) Events, networking or speaking
   H) Something else"
   **Saves to:** Top lead source
10. "Which source of clients do you most want to add or grow this year?"
    **Saves to:** Lead source to add or grow

## F. Getting found online

11. *(Only if they serve a local or regional area. Skip for online-only businesses and say why.)*
    "Where's your Google Business Profile at?
    A) Fully set up and getting reviews
    B) Set up, but I don't really manage it
    C) Barely started
    D) Don't have one yet"
    **Saves to:** Google Business Profile
12. "How often do you post on social media right now?
    A) Rarely or never
    B) A few times a month
    C) 1 to 3 times a week
    D) Every day"
    **Saves to:** How often I post
13. "Are you running paid ads?
    A) No
    B) Facebook or Instagram
    C) Google
    D) More than one"
    **Saves to:** Paid ads
14. "What marketing do you most want to add or improve this year? Pick all that fit.
    A) Grow YouTube
    B) Post on social more consistently
    C) Workshops, webinars or events
    D) Build an email list or newsletter
    E) Improve my Google Business Profile
    F) Start paid ads
    G) Build a referral or partner network
    H) Improve my website"
    **Saves to:** Marketing I want to add

## G. The goal

15. "What period is this plan for: the next 12 months, the rest of this calendar year, or something else?"
    **Saves to:** Plan period
16. "Your goal is [12-month goal]. Let's put a number on it. Is your target revenue, take-home pay, or a number of clients?" Then: "What's the number?"
    **Saves to:** Goal type, Goal number. If it's a dollar goal, also update Income goal on My goals this year.
17. "Is there a milestone you're going for, like a revenue level, an award or a team size? Tell me what it is and exactly what it takes, in your own words." *(Skippable. Use only what they say; if it's unclear, ask.)*
    **Saves to:** Milestone or award

If there's no client goal yet, calculate it with the math below and ask them to confirm it.
**Saves to:** Clients needed *(any business)*, and Number of closings on My goals this year (written with their word, like "48 clients").

---

## The math (show every line)

1. Goal (your number). If the period is the rest of the year, minus what's done so far.
2. If the goal is take-home: take-home per client from the confirmed walk-through.
   If the goal is revenue: use average value per client.
3. Clients needed = goal ÷ take-home or value per client. Round up.
4. Calls or proposals needed = clients ÷ proposal to client rate.
5. Leads needed = proposals ÷ lead to proposal rate.
6. If they don't know their rates, say so, use a starting estimate they agree to (for example 1 client per 3 proposals, 1 proposal per 5 leads), and label it "starting estimate."
7. Per month and per week (divide by the months and weeks in the plan period).
8. **Capacity check:** compare clients per month with My capacity. If the target doesn't fit, say so plainly and offer options: raise prices, add help or a team member, a longer period, or a different target. Never quietly shrink the goal.

If a milestone was given, show its math the same way, labeled "as you told me."

---

## The plan sections for any business

Write the 9 sections in `../references/plan-sections.md`, in order, with these changes:

1. **Business snapshot:** who they are, what they sell and to whom, their market, how they work (solo, team), their brand. Second person, specific to their brain.
2. **Where you stand:** last year and this year so far, both funnel rates (lead to proposal, proposal to client) and the diagnosis in one plain sentence. No fluff.
3. **Your target and the math:** the walk-through table, take-home per client, the chain from goal to leads, per year, month and week, and the capacity check with options if it doesn't fit. Every number labeled with where it came from.
4. **Your lead engine:** built from their top source and the one they want to grow. Specific actions sized to their time, budget, boundaries and style.
5. **Your marketing plan:** from the marketing they picked, their posting, paid ads and (if local) Google Business Profile. Platforms to focus on, how often, and 2 or 3 quick wins. Follow the advertising rules their industry has (from Compliance Guardrails; if it doesn't have any, ask once and never assume).
6. **Your conversion system:** specific fixes for lead to call, call to proposal, and proposal to client, using their CRM and their Client FAQs and Objection Bank if they have them.
7. **Your 90-day roadmap:** Month 1, Month 2, Month 3, 3 to 5 specific actions each. A conversion problem goes first and holds paid ads to Month 3. Respect their biggest blocker and boundaries.
8. **Your biggest opportunity:** one clear insight from all their numbers.
9. **What success looks like:** their success beyond the numbers and their good month, connected to the numbers.
