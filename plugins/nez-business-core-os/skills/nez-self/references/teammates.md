# Teammate profiles

Used by `SKILL.md` when the agent says the profile is for someone else (an assistant, a team member, a partner, a transaction coordinator, a referral partner they work with a lot), and after the agent's own profile is saved. Profiles live in the **People** database, one row and one page per person. The Master Profile's My personality section stays the agent's own source of truth; their People row points to it.

## Step 1: Look first

Read the People database (`people_ds_id`) for the person's row (match by name **or** email), the Master Profile, and anything the agent pasted. Then:
- **They already have a profile:** say so and ask: update it, replace an estimate with their own answers, or leave it.
- **People is missing or won't open:** see "Missing People database" below.
- Ask only for what you couldn't find.

## Step 2: Who is it for?

- **The agent:** run SKILL.md as written. At the end, create or refresh their own People row (Step 5).
- **A teammate:** ask for their name, role, email (optional) and who they report to. Then offer the two ways below.

**Say this once, the first time a teammate profile is made:** "Profiles are for working together and communicating better. They're never for hiring, firing, pay, promotion or discipline, and never a reason to treat someone differently. The person can see, fix or remove theirs any time."

## Step 3: Two ways to build it

**Way 1 (best): they answer themselves.** Give the agent the question set in `teammate-questions.md` (inside a code block, names filled in) and say: "They answer these themselves, which is more accurate than your guess. Send it however you usually message them. When they reply, paste their answers here and I'll build their profile." Create their People row now with Status "Waiting for answers" only if the agent wants a placeholder, and say that you did.

When the answers come back:
1. Score them with the scoring guide at the bottom of `teammate-questions.md` (questions 1 to 8 give the work style; the stronger of two answers counts fully, the other only breaks ties).
2. Read questions 9 to 15 straight into Communication Tips and Best Way to Reach.
3. Save with Profile Source "Own answers" (Step 5).

**Way 2: the agent answers from what they've seen.** Ask questions 1 to 15 from `teammate-questions.md` about the person ("When she has a big decision, she usually..."), one at a time, with the same letters. Skip the optional sections: energy and test results can only come from the person.

Mark it **Estimated by [agent's name]** in three places: the Profile Source field (Estimated), the start of the Personality field, and the first line of their page. Say once: "This is your read of them, so I'll use it lightly. If they answer the questions themselves later, I'll swap it in. Want me to remind you to send them the questions?" If yes, add a Tasks row: "Send [name] the work-style questions," Pillar Growth, Priority Low. Never present an estimate as the person's own result.

## Step 4: Human Design and other tests

Only if the agent wants it **and** the person has agreed. Say why: "Human Design needs a birth date, time and place, so I only use it with the person's OK. It's for understanding their energy and how they decide, never for judging them."

- **Best way:** the person makes their own free chart and sends only their type and authority.
- **If birth details are sent anyway:** use them once to work out the type, say it's an approximation unless it came from a chart tool, and never save the birth date, time or place anywhere.
- **Other tests** (DISC, Enneagram and so on): save only the result they chose to share.
- **Not agreed or not shared:** write "Not shared" and move on.
- **Never** guess anyone's Human Design type, or any test result, from observation.

## Step 5: Save to People

One row and one page per person. Show the row in plain words and wait for the agent's OK before writing.

| Field | What goes in it |
| --- | --- |
| Name | their name |
| Role | from the existing options ("Me" for the agent) |
| Human or AI | Human (AI employees are added by /nez-org-chart later) |
| Company, Phone, Email | if the agent gives them |
| Best Way to Reach | question 15 (team chat goes in Notes) |
| Reports To | the manager's name exactly as it appears in People, or the agent's name. Blank on the agent's own row unless they report to someone |
| Personality | one line, for example "Steady-Planner, own answers" or "Estimated by Maria: Driver" |
| Other Results | test results they shared, one line each, or "Not shared" |
| Communication Tips | six short lines: length, format, lead with, directness, detail, updates. Only what their answers support; never a line the answers don't back up |
| Profile Source | Own answers or Estimated |
| Profile Date | today |
| Status | Active, Waiting for answers, or Former |

Then write their page with `../templates/person-page.md`.

**The agent's own row:** Role "Me," copy the summary from the Master Profile's My personality section, add a link to the Master Profile on the page, and leave Reports To blank unless they report to someone.

## Missing People database

If People isn't in their brain, say: "Your People database isn't in your brain yet. I can add it with the standard NEZ OS layout. OK?"
- **Yes:** create ONE database named People under the brain's "Your team & how you work" section, with the fields in `../../nez-setup/templates/workspace-build.md`. Save both IDs in Page IDs and add it to the Brain Index and the Dashboard's Your workspace list.
- **No:** save the profile on a page under the Master Profile instead, and say you'll move it into People whenever they add it.
- Never create a second People database.

## Rules

- Keep to work style and communication. Never save health, family, religion, age, birth details or other personal facts.
- A teammate can ask to see, correct or remove their profile any time. Do it with the agent's OK; to remove, set Status to Former and clear the profile fields (never delete the row).
- Never stereotype. A style is a tendency, not a limit.
- Skills use Communication Tips to shape how a message is built. Never write the profile into a message, and never mention it to a client.
- No em dashes.
