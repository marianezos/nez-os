# Bizplan: any business

Used by `SKILL.md` when `industry_flow` isn't `real-estate` (a lender, an insurance agent, a coach, a service business). Follow its core rules: ask only for what the brain doesn't have, use only the pricing and costs the person gives you, show the math step by step, and skip questions that answer themselves. Use their own words for what they sell ("clients", "customers", "loans", "policies", "projects"). **Saves to** names a line in the Master Profile's **My business numbers** section; lines marked *(any business)* are in that section's second table in `../nez-setup/templates/master-profile.md`.

## Opening

> "OK [name], let's build your business plan. I already know you run [business name] in [main market], you work with [client types], and your goal is [12-month goal]. What I need now is your numbers, so the plan is real and not a guess. Ballpark is fine. About 15 minutes, one question at a time."

---

## A. Last year

1. "Let's start with last year. What was your total revenue?"
   **Saves to:** Last year: revenue *(any business)*
2. "How many clients, customers or projects did that come from?"
   **Saves to:** Last year: closings (use their word in the value, like "42 clients")
3. "What's your average revenue per client or project?" *(Skip if they had one client: use that revenue and say why. If they don't know: revenue ÷ clients, and say you calculated it.)*
   **Saves to:** Average value per client *(any business)*

## B. This year so far

4. "How many clients or sales so far this year, and about how much revenue?"
   **Saves to:** This year so far: closings, This year so far: revenue *(any business)*

## C. Leads and conversions

Intro: "Now how people become clients. Rough numbers are fine."

5. "About how many leads, inquiries or prospects did you get last year?"
   **Saves to:** Leads last year
6. "Of those, how many got to a call, a proposal or a quote?"
   **Saves to:** Agreements signed last year (write "calls or proposals" in the value)
7. "And how many became paying clients?" *(Skip if proposals equal clients, or they had one client. Use their number and say why.)*
   **Saves to:** Closed from those agreements

Calculate the rates (lead to proposal, proposal to client) and diagnose: lead problem, conversion problem or market problem.

## D. Your model

Intro: "Every business keeps a different share of each sale, so I won't assume anything. I'll ask about each cost once and save it. 'None' and 'not sure' are both fine."

If these lines are already saved, show them and ask "Still right?"

P1. "What fees come out of each sale before you get paid? A platform, marketplace, app store or booking fee, for example. Each one as a percent or an amount."
    **Saves to:** Fees on each sale *(any business)*
P2. "What do you pay to process payments?"
    **Saves to:** Payment processing *(any business)*
P3. "Do you pay partners, affiliates or referral sources? How much, and on about what share of your sales?"
    **Saves to:** Referral fees
P4. "What regular costs do you want counted: software, insurance, memberships, a team? Each with its amount and how often."
    **Saves to:** Monthly or yearly costs *(any business)*
P5. "Anything else to count before take-home, like money you set aside for taxes or costs outside the business?"
    **Saves to:** Costs outside my brokerage (for any business this line holds outside costs)
P6. "Putting it together, about what percent of your revenue do you keep after your main costs? A guess is fine."
    **Saves to:** What I keep after costs *(any business)*

### Walk one sale through

Take one typical sale at their average value. Show a short table: revenue, then each fee and cost, what it's taken from, and the amount, down to take-home. Ask: "Is that the right order and the right amounts?" Fix it until they confirm.
**Saves to:** Deal walk-through (confirmed), Take-home per deal

- "None" is zero. "Not sure" is not counted, and you say so in the table and the plan.
- Compare the result with the percent they gave in P6 and point out any big gap.

P7. "How many clients or projects can you realistically handle at once, or in a month, before it's too much?"
    **Saves to:** My capacity *(any business)*

## E. Lead sources

8. If **Where my business comes from** is filled in: "Your biggest source of clients is [first one]. Still true?" Otherwise: "What's your number one source of clients right now?"
   **Saves to:** Top lead source
9. "Which source do you most want to add or grow this year?"
   **Saves to:** Lead source to add or grow

## F. Getting found online

10. *(Only if they serve a local or regional area.)* Google Business Profile, same options as the real estate flow.
    **Saves to:** Google Business Profile
11. How often they post, same options as the real estate flow.
    **Saves to:** How often I post
12. Paid ads, same options as the real estate flow.
    **Saves to:** Paid ads
13. "What marketing do you most want to add or improve this year? Pick all that fit.
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

14. "What period is this plan for: the next 12 months, the rest of this year, or something else?"
    **Saves to:** Plan period
15. "Your goal is [12-month goal]. Is your target revenue, take-home, or a number of clients?" Then: "What's the number?"
    **Saves to:** Goal type, Goal number
16. "Is there a milestone you're going for, like a revenue level, an award or a team size? Tell me exactly what it takes." *(Skippable. Use only what they say.)*
    **Saves to:** Milestone or award

If there's no client goal yet, calculate it (goal ÷ average value, adjusted to take-home if needed) and ask them to confirm.
**Saves to:** Closings needed (write "clients needed" in the value)

---

## The math (show every line)

1. Goal, minus what's done if the period is the rest of the year.
2. If the goal is take-home: take-home per sale from the confirmed walk-through.
3. Clients needed = goal ÷ value per client (or take-home per client). Round up.
4. Proposals or calls needed = clients ÷ proposal to client rate.
5. Leads needed = proposals ÷ lead to proposal rate.
6. Per month and per week.
7. **Capacity check:** compare clients per month with My capacity. If it doesn't fit, say so plainly and offer options: raise prices, add help, a longer period, or a different target.

---

## What each plan section adds for any business

- **Snapshot:** what they sell, to whom, where.
- **Your target and the math:** the walk-through table and the capacity check.
- **Your lead engine and marketing plan:** follow the rules their industry follows (ask for them if the Compliance Guardrails page doesn't have them; never assume).
- **Your conversion system:** lead to call, call to proposal, proposal to client.
- Everything else as in `../references/plan-sections.md`.
