# Objection Bank: how to build it (Stage 5)

The **Objection Bank** is a database in the brain (`objection_bank_ds_id`), under 03 · Clients. One row per objection. If it's missing, follow the brain rules' safety net and create it with the fields below.

## Fields (one row per objection)

| Field | What goes in it |
| --- | --- |
| Objection (title) | The pushback in the client's words, for example "We'll wait until spring." |
| Client Type | Seller, Buyer, Both, First-time buyer, Investor, Landlord, Renter, Luxury, New construction, Relocation, 55+ community, Commercial or Land |
| Category | Commission & fees, Price, Timing, Other agent, Trust & process, Market, or Money & readiness |
| What's Behind It | The real worry, in one line |
| Question to Ask | The question to ask before answering |
| My Answer | 3 to 5 sentences in the agent's voice: acknowledge, one specific proof point, a low-pressure next step |
| Text Version | One line they could text |
| Don't Say | What to avoid, and why in a few words |
| Proof Used | The proof point used, with "(private)" if it's not for public use, or [ADD PROOF] |
| Status | Starter (not rewritten yet), Testing (rewritten, not tried), Works (worked on a real call), Retired |
| Last Updated | Today's date |
| Notes | Anything else, like when it came up |

## Starter files

| Client type | File |
| --- | --- |
| Sellers | `objections/sellers.md` |
| Buyers | `objections/buyers.md` |
| First-time buyers | `objections/first-time-buyers.md` |
| Investors | `objections/investors.md` |
| Landlords | `objections/landlords.md` |
| Renters | `objections/renters.md` |
| Luxury | `objections/luxury.md` |
| New construction | `objections/new-construction.md` |
| Relocation | `objections/relocation.md` |
| 55+ communities | `objections/55-plus.md` |
| Commercial | `objections/commercial.md` |
| Land | `objections/land.md` |

For "Other" or any type without a file, build every row from what the agent tells you, with the same fields.

## Building a client type

1. **Read the starter file** for the type and follow the note at its top. Each starter gives the objection, what's behind it, a question, the idea of the answer and what not to say. They are ideas to rewrite, not scripts to paste.
2. **Check what's already there.** Query the Objection Bank for rows with this Client Type. The NEZ OS template comes with a few Status Starter rows. If a starter you're about to write matches an existing Starter row, update that row instead of adding a new one. Never create a second row for the same objection and client type.
3. **Write each answer in the agent's voice** (Voice Library), following its em dash and emoji settings. Swap [PROOF] for one specific proof point from their list. If none fits, write [ADD PROOF] in the answer and in Proof Used.
4. **Add their own objections** for this type, with every field filled the same way.
5. **Show and revise.** Show each objection's answer, question and text version. Change what they ask.
6. **Save.** One row per objection with Status Testing (or Works if they say it has already worked for them) and Last Updated today.

## Final check (before saving each type)

- Every answer has one specific proof point from the agent, or [ADD PROOF]. No invented numbers, reviews or results.
- No pressure, no fear, no false urgency, and no promises about price, rates, timing, approval, appraisal or returns.
- No steering and no descriptions of people (see Compliance Guardrails). Answers talk about the situation, the home and the plan.
- Tax, legal, lending and inspection questions point to their CPA, attorney, lender or inspector. Nothing reads as advice.
- Commission is talked about as value and a plan, never as "standard" or set by law.
- Each answer is 3 to 5 sentences, in their voice, and ends with a next step the client can say yes to easily.
