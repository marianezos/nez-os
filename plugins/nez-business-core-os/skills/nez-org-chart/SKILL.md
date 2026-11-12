---
name: nez-org-chart
description: Builds, shows and edits a real estate agent's org chart of their people and their AI employees, from the People and AI Employees databases in their NEZ OS brain. Scans first, then asks only what's missing: who's on the team, who reports to whom, and the AI already doing work (a Claude Project, GoHighLevel Conversation AI, a scheduled task). Every AI employee has exactly one human manager. Shows each person with their AI team beneath them as a clean, phone-friendly page, edits by chat after the agent's OK, and flags people with no AI help, overloaded people, AI employees with no manager or review date, and jobs nobody owns. Works for a solo agent too. Triggers when the user runs /nez-org-chart, or says "org chart", "who reports to whom", "my team structure", "show my team", "who does what", or "add an AI employee".
---

# NEZ OS Org Chart: Your People and Your AI Team in One Picture

## Purpose

Show who's on the team, who reports to whom, and which AI employees work for which person, so nobody and nothing is left without an owner. The People and AI Employees databases in the brain are the source of truth. The chart is a picture of them.

## What it covers

- **Scans first:** People, AI Employees, the Master Profile and Bottlenecks, then says in one or two lines what it found and asks only what's missing.
- **Three paths:** build my org chart (first time), show my org chart, or change it (add, move, rename, retire).
- **Your team only:** the agent, team members and assistants. Trusted partners in People (lenders, title, inspectors, vendors) stay off the tree, in a separate box only if the agent asks.
- **AI employees:** any AI that does a recurring job someone relies on, like a Claude Project that drafts listing descriptions, GoHighLevel Conversation AI answering leads, or a scheduled task that writes the weekly market update. Each has exactly one human manager and a review date.
- **Solo agents:** the chart is the agent with their AI team beneath them. Still useful: it shows what AI is working for them and what nobody owns yet.
- **The chart:** a clean, private, phone-friendly page. People have solid boxes, AI employees have dashed boxes, each with a text tag, never color alone.
- **Highlights:** people with no AI help yet, overloaded people (from Bottlenecks), AI employees with no manager or no review date, and jobs nobody owns. Prompts about gaps, never judgments of people.
- **Edits by chat:** every change shown as a before and after, saved to the brain only after the agent's OK, then the chart is republished at the same link.

## Core rules

- **Read the brain rules first:** the plugin's `references/brain-rules.md` (two levels up from this skill). Follow it for finding the brain, saving and logging.
- **Scan first, then ask.** Read People, AI Employees, the Master Profile (How I run my business, Team details) and Bottlenecks before asking anything. Say in one or two lines what you found. Ask only what's missing, a few questions at a time. Match their language.
- **Missing something after the scan?** If a fact this skill needs isn't in the brain (for example how they run their business), ask once, save it in the matching section of the Master Profile, and go on.
- **Every AI employee has exactly one human manager.** Never zero, never two. If a manager leaves, every AI employee under them gets a new manager before the change is saved.
- **The brain is the source of truth.** The chart is rebuilt from the databases. Never keep a fact only in the chart.
- **Nothing changes without the agent's OK.** Every add, move, rename or retire is shown as a before and after and written only after a yes. Never delete a row: a person becomes Former, an AI employee becomes Retired, so history is kept.
- **The chart shows work, not people's profiles.** Name, role, person or AI, status and flags only. Never put a personality profile, Human Design, an email, a phone number or private notes on the chart.
- **Highlights are prompts, not judgments.** They point at gaps in the structure. They never rate a person and never feed a decision about hiring, firing, pay, promotion or discipline.
- **Never invent** a person, a role, a manager or an AI employee. Only what the agent and the databases give you.
- **Profiles are separate.** If someone has no work style profile, mention /nez-self once. Never build profiles here.
- **Pronouns:** use the person's name or "they." Never guess a pronoun from a name.
- **No em dashes,** anywhere, the chart page included.

## The databases this skill needs

- **People** (`people_ds_id`): Name, Role, Reports To, Human or AI, Status, Notes.
- **AI Employees** (`ai_employees_ds_id`): Name, Role, Human Manager, Status, Where It Runs, What It Does, Review Cadence, Review Date, Link, Created.
- **Bottlenecks** (`bottlenecks_ds_id`), read only: Bottleneck, Status, Owner, Hours per Week.

**Safety net:** if People or AI Employees is missing or won't open, search the brain once for a database with that exact title and save its IDs in Page IDs. If there's none, say: "Your [name] database isn't in your brain yet. I can add it now with the NEZ OS layout. OK?" On yes, create that ONE database in the "Your team & how you work" section with the fields in `../nez-setup/templates/workspace-build.md`, and save its IDs. On no, or if it can't be created, give the chart as text and say "Run /nez-setup and it will offer to add it, then ask me to save your chart." Never create any other database or a second copy.

## Step 1: Scan

Read every row of People (Name, Role, Reports To, Human or AI, Status), AI Employees (Name, Role, Human Manager, Status, Review Date), the Master Profile, and Bottlenecks if it opens. Match Reports To and Human Manager to People names exactly.

**Who's on the tree:** People rows with Role Me, Team member or Assistant, plus anyone the agent says counts (a showing agent or ISA they pay). Partners (Lender, Title / escrow, Attorney, Inspector, Contractor / vendor, Stager / photographer, Referral partner) are not on the tree.

Say what you found in one or two lines ("I found you, 2 team members and 1 AI employee, and Jess has no manager listed"), then choose:

> "What would you like to do?
> A) Build my org chart
> B) Show my org chart
> C) Change it (add, move, rename or retire someone)"

Offer B first if the databases are filled in. Offer A first if they're empty or only have the agent.

## Step 2: First run (path A)

Follow `references/interview.md`. Show the rows you'd create or change as two tables (People, AI Employees) and wait for the agent's OK before writing anything.

## Step 3: Build the chart

Follow `references/chart-artifact.md`. A clean, phone-friendly private page built from the databases. If a page can't be published here, give the same tree as indented text and offer to save it as a page in the brain.

## Step 4: Highlights

Follow `references/highlights.md`. Show the highlights that apply on the chart and say them again in the chat in plain words. Then offer ONE next step, never a list.

## Step 5: Edits by chat (path C)

Follow `references/edits.md`. Add, move, rename or retire, each shown as a before and after, written after the agent's OK, then the chart is republished at the same link.

## AI Operations role (optional, never pushed)

When the team is big enough (see `references/highlights.md`), offer once: "Some teams give one person the job of building, checking and managing the AI employees, often called AI Operations. Want to see how that would look on your chart?" On no, never offer again (save "AI Operations offered: declined" on the agent's own People row under Notes). On yes, add it as a role on a person they choose, with their OK.

## Role examples

Never assume a role list. If the agent asks what roles other real estate teams have, give two or three as examples only, for instance a showing agent, a transaction coordinator, or an inside sales agent who calls new leads, and say they're only examples.

## Next step

Recommend ONE:
- An AI employee has no What It Does: /nez-bottleneck to write its job description and find what else to hand off (if it isn't installed, say it's coming and write a two-line What It Does with them now).
- A person on the team has no work style profile: /nez-self for them.
- Otherwise: /nez-bottleneck to find what's slowing the team down.

End with: "You can run /nez-next any time and I'll tell you your best next step."
