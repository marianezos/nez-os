# Teammate profiles

Used when the agent says the profile is for someone else: an assistant, a team member, a partner, a transaction coordinator, a referral partner they work with a lot. Profiles live in the **People** database, one row and one page per person.

## Say this once, the first time

"Profiles help you communicate and work together better. They're never for hiring, firing, pay or discipline, and never a reason to treat someone differently. The person can see, fix or remove theirs any time."

## Step 1: Look first

Search People for the person by name. If they already have a profile, say so and ask: update it, replace an estimate with their own answers, or leave it. If People is missing, follow the brain rules' safety net and create it with the layout in `../../nez-setup/templates/workspace-build.md`.

Ask for (if not already in People): name, role, email (optional), and who they report to.

## Step 2: Two ways to build it

**Way 1 (best): they answer themselves.** Say: "The best way is for them to answer a few questions themselves. It's more accurate than your guess. Send this however you usually message them, then paste their answers here." Give them the question set in `teammate-questions.md` in a code block. Offer to create their People row now with Status "Waiting for answers."

When the answers come back: score them with the scoring guide at the bottom of `teammate-questions.md` (questions 1 to 8 give the work style; 9 to 15 go straight into Communication Tips), and save with Profile Source "Own answers."

**Way 2: the agent answers from what they've seen.** Ask questions 1 to 15 from `teammate-questions.md` about the person ("When she has a big decision, she usually..."), one at a time, with the same letters. Skip the optional sections: energy and test results can only come from the person. Save with Profile Source "Estimated," and start the Personality field and the first line of their page with "Estimated by [agent's name]." Say once: "This is your read of them, so I'll use it lightly. If they answer the questions later, I'll swap it in."

## Human Design and other tests

Only with the person's OK. They generate their own chart or test and send just the result (for Human Design, the type and authority). Never save a birth date, time or place, and never guess someone's type from observation. If they haven't agreed, write "Not shared."

## Save to People

Show the row and wait for the agent's OK. Fill:

| Field | What goes in it |
| --- | --- |
| Name | their name |
| Role | from the existing options |
| Company, Phone, Email, Best Way to Reach | if the agent gives them |
| Reports To | the manager's name as it appears in People, or the agent's name |
| Personality | one line, for example "Steady-Planner, own answers" |
| Communication Tips | six short lines: length, format, lead with, directness, detail, updates. Only what their answers support |
| Profile Source | Own answers or Estimated |
| Profile Date | today |
| Status | Active, Waiting for answers, or Former |

Then write their page with `../templates/person-page.md`.

## Rules

- Keep to work style and communication. Never save health, family, religion, age or other personal details.
- Never stereotype. A style is a tendency, not a limit.
- Skills use Communication Tips to shape how a message is built, and never quote the profile in a message.
- No em dashes.
