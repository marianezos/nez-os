# AI employees

Used by `SKILL.md` Step 7. An AI employee is a role with several recurring duties, one human manager, a written job description and a review date. It isn't a magic worker: it's a Claude Project (or a platform AI like GoHighLevel Conversation AI) plus skills and scheduled tasks that do a defined job and hand off to a person when they should.

## Pick the right build

- **A Claude Project** is the role's home: its instructions (the job description in working form), its knowledge (files and pages it reads) and its connectors. Write the instructions as text to paste, with steps, using `../templates/project-instructions.md`.
- **Skills** for jobs it does on command, saved with the save skill card plus a backup file.
- **Scheduled tasks** for recurring jobs that only read or draft (a morning lead summary, a Friday file check). Offer the schedule and prompt; create only with the agent's OK.
- **A platform AI** (GoHighLevel Conversation AI or Content AI) when the job lives in that platform: give setup steps with `platform-instructions.md`, and use the short paste-ready voice from /nez-voice for its instructions.
- **Nothing else.** Never give an AI employee the ability to send, publish, spend or change records on its own, unless the agent sets up an approved platform AI themselves, with consent rules, after reading the risks.

## The job description (eleven parts)

Write it with `../templates/job-description.md` and show it before saving.

1. Name and role.
2. Human manager: exactly one person, as named in People.
3. Purpose: one sentence.
4. Duties: the recurring jobs, each with how often.
5. Inputs and outputs: what it reads, what it produces, where outputs go.
6. Tools and connectors: read only unless the agent approves more, one at a time.
7. What it may and may not do: always including the NEZ OS rules below.
8. When to hand off to its person: judgment, a relationship, a compliance decision, a complaint, a price, offer, contract, compensation, legal or money question, or anything it's unsure about.
9. NEZ OS rules: see below.
10. Success measures: how the manager knows it's working (hours saved, mistakes, response time), from their own numbers.
11. Review cadence: Monthly, Quarterly or Twice a year, chosen by the agent, with the first review date.

## NEZ OS rules for every AI employee

- Drafts first: it prepares work for its person to approve.
- It never sends, publishes, spends money or changes a record on its own. Anything going out is one approved action at a time, approved by its manager.
- Texting: only with documented consent and approved A2P, never to do-not-disturb or STOP. Email follows opt-out rules.
- Compliance: the disclosure line, the brokerage's advertising rules, and Fair Housing (never rank, filter or describe people by who they are, never describe who an area suits).
- Privacy: no passwords, full account numbers, or sensitive client details in its knowledge or outputs.
- No em dashes, and anything written to others uses the right voice.
- It says when it doesn't know, and hands off instead of guessing. It never gives legal, tax or lending advice.

## Save and add to the chart

1. Show the AI Employees row (Name, Role, Human Manager, Status, Where It Runs, What It Does in one line, Review Cadence, Review Date, Link, Created) and the job description (the row's page). Write them after the agent's OK. If /nez-org-chart already made a row for it, update that row; never a second one.
2. Status starts as Draft and becomes Active only when the agent says it's running, and only with a manager and a Review Date.
3. Check the manager is one person in People. If not, ask who.
4. It shows on the org chart under that manager (the chart is built from the database). Offer to run /nez-org-chart, or if the agent's People row has an org chart link, offer to republish it (follow `../../nez-org-chart/references/chart-artifact.md`).
5. Fill the AI Employee field on the matching Bottlenecks row with its name.
6. Suggest a calendar reminder for the review date.

## Project instructions always start with the NEZ OS line

Every AI employee's Project instructions start with the same line the agent put in their own preferences (`../../nez-setup/references/nez-first.md`), with their brain link filled in exactly as Notion gives it. Never leave it out, and never make up a link.
