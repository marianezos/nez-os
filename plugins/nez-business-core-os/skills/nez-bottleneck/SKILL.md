---
name: nez-bottleneck
description: Finds what's slowing a real estate agent or their team down and fixes it with the lightest tool that works, in this order, simplify the step, an existing NEZ OS skill, a GoHighLevel or other platform automation, AI help, an AI employee, or keep it human. Works on one task ("this takes me 5 hours a week") or the whole business, the agent only or the whole team. Scans the brain first, ranks what it finds by hours, pain and how much a tool can do, builds the safe Claude pieces with the agent's OK, gives exact steps for platforms it never touches, and writes AI employee job descriptions. Triggers when the user runs /nez-bottleneck, or says "bottleneck", "this takes too long", "automate this", "AI employee", "I'm stuck on", "I'm drowning", or "where do I start with AI".
---

# NEZ OS Bottleneck: Find What Slows You Down and Fix It

## Purpose

Help the agent find the few tasks that cost them the most time, and fix each with the lightest tool that works: drop the step, use a NEZ OS skill they already have, use their platform's own automation, use AI help, or build an AI employee. Fix one thing first, then plan the rest.

## What it covers

- **Scans first:** Master Profile, My personality, People, AI Employees, Bottlenecks, the org chart link, connected apps and the NEZ OS skills they have, then asks only what's missing.
- **Three modes:** one task, a full audit of the agent's own work, or a full audit of the whole team (with a copy-and-paste question set each teammate answers themselves).
- **Ranks honestly:** hours per week × pain × how much a tool can do, with the arithmetic shown, top 3 to 5 only. Work that needs judgment, a relationship or a compliance call is kept human, with the reason.
- **The fix ladder:** simplify first, then an existing NEZ OS skill, then platform automation (like a GoHighLevel workflow), then AI help, then an AI employee, or keep it human. Always the lightest rung that works.
- **Hours and money saved as a range,** built from the agent's own numbers (an hour's value is worked out from their GCI and hours), next to what the fix costs. Unknown costs can be skipped and come back later through Open Questions. Always labeled as an estimate, never a benchmark or a promise.
- **Where the time goes:** connects the hours saved to their weekly targets in /nez-goals.
- **Lighter fixes for new agents:** checklists and batching first, saved to SOPs if they want.
- **One quick win now:** builds the safe Claude pieces (Project instructions to paste, a skill, a draft-only scheduled task, a Notion page) with the agent's OK, or gives exact GoHighLevel steps they follow themselves.
- **AI employees:** a full 11-part job description, saved to AI Employees and placed on the org chart under its one human manager.
- **Re-runs:** what got fixed, the estimate against what it actually saved, what's next, and which AI employee reviews are due.
- **Saves:** Bottlenecks rows, AI Employees rows with their job description, and (with OK) Tasks and Projects for the plan.

## Core rules

- **Read the brain rules first:** the plugin's `references/brain-rules.md` (two levels up from this skill). Follow it for finding the brain, saving and logging.
- **Scan first, then ask.** Read what exists (Step 1), say in one or two lines what you found, and ask only about what's missing or unclear. Missing a fact after the scan: ask once, save it in the matching Master Profile section, go on. Match their language.
- **The lightest fix that works wins.** Follow `references/fix-ladder.md` in order. Never recommend an AI employee for something a skill or a platform setting already does.
- **Check NEZ OS first.** Before recommending anything new, check the live skills in `../nez-next/references/path.md`, what's installed, and the Dashboard widgets if /nez-dashboard is installed. If one already does the job, point to it and stop. If the matching skill isn't live yet, point to its Vault prompt. Never rebuild what exists.
- **Estimates are estimates.** Hours saved is a range built from their numbers, labeled "Estimate, not a promise." Never a standard percentage or a benchmark.
- **Keep the human parts human.** Work they love, work that needs judgment, and relationships stay with a person, with the reason. My personality is only a hint for better questions; the agent decides.
- **Build what's safe, guide the rest.** With the agent's OK, build the Claude pieces (Project instructions as text to paste, skills, draft-only scheduled tasks, Notion pages). For GoHighLevel and every other platform, give exact steps and never change their CRM or platform from this skill.
- **AI employees follow every NEZ OS rule.** Drafts first, one approved send at a time, texting consent and A2P, Fair Housing and the Compliance Guardrails always. An AI employee never sends, publishes, spends money or changes a record on its own. Exactly one human manager.
- **Nothing is saved without the agent's OK.** Show each row, page or file before writing it. Reuse existing databases.
- **Never invent** hours, tools or results. Don't know a number: ask, or leave it blank and say so.
- **Never about people's performance.** Team answers are for finding slow work, never for rating anyone or deciding about hiring, firing, pay, promotion or discipline.
- **Pronouns:** the person's name or "they." Never guess from a name.
- **Voice:** anything drafted for others follows their voice (Voice Library). Job descriptions and instructions are plain working language. **No em dashes,** anywhere.

## Starting from scratch

If the brain isn't found, or the Master Profile is nearly empty, say: "You'll get a much better result with a short setup first: /nez-setup for the basics (about 10 minutes), and /nez-self so I know how you work. Want to do those first? Or I can go on with what you tell me." If they go to setup, stop; when they come back, scan again and continue. If they decline, go on, save nothing to Notion, give results in the chat, and offer to save them once the brain exists.

## The databases this skill saves to

- **Bottlenecks** (`bottlenecks_ds_id`): Bottleneck, Owner, Hours per Week, Pain, Automatable, Fix Type, Status, AI Employee, Estimated Hours Saved, Actual Hours Saved, Fix Cost, Check By, The Fix, Impact, Pillar, Date Found.
- **AI Employees** (`ai_employees_ds_id`): Name, Role, Human Manager, Status, Where It Runs, What It Does, Review Cadence, Review Date, Link, Created. The job description is the row's page.

**Safety net:** if either is missing or won't open, search the brain once for that exact title and save its IDs. If there's none, ask: "Your [name] database isn't in your brain yet. I can add it now with the NEZ OS layout. OK?" On yes, create that ONE database per `../nez-setup/templates/workspace-build.md` and save its IDs. On no, or if it can't be created, keep results in the chat and as a downloadable file, and say "Run /nez-setup and it will offer to add it, then ask me to save these." Never create a second copy or any other database.

## Step 1: Scan

Read without asking:
- **Master Profile:** How I run my business, Team details, My tools, My goals this year, My boundaries, My personality (what drives and drains them, biggest thing holding them back), My business numbers (Hours per week for finding business).
- **People** (the team, by Role Me, Team member, Assistant) and the org chart link on the agent's People row (Notes).
- **AI Employees** and **Bottlenecks** (past findings).
- **Software Stack** and the connectors you can see this session.
- **The NEZ OS skills:** the live and vault rows in `../nez-next/references/path.md`, and which plugins are installed.
- **The Dashboard:** if /nez-dashboard is installed, which widgets the agent already has (an email widget, a follow-up queue, today's schedule, a deal tracker), so you never rebuild what a widget already does.

Say what you found in one or two lines ("I found your profile, you and Jess, one AI employee, GoHighLevel in your tools, and no bottlenecks saved yet"). If Bottlenecks already has rows from this skill, go to RE-RUNNING.

## Step 2: Mode

Unless they already said, ask:
> "What would you like to look at?
> A) One task that's eating my time
> B) Everything I do (my own work)
> C) Everything the team does"

## Step 3: Interview

Follow `references/interview.md`, a few questions at a time, skipping what the scan answered.

## Step 4: Rank

Follow `references/ranking.md`. Show the arithmetic, the top 3 to 5 with one sentence of reason each, and the Keep human list separately.

## Step 5: Recommend the lightest fix

Follow `references/fix-ladder.md`. For each top bottleneck: one rung, why the lighter rungs don't work, what it takes, the estimated hours saved as a range, and what could go wrong. Use `industries/<industry_flow>.md` for suggestions only (real-estate, otherwise generic).

## Step 6: One quick win

Pick the single fix that's easiest and saves the most (usually rung a to d) and build or guide it now, with `references/quick-win.md` and, for platforms, `references/platform-instructions.md`. Then show the plan for the rest, in order, as a short list. With their OK, add each step of the plan to Tasks, and offer bigger ones as Projects per the brain rules ("Want me to set this up as a project?"). Never duplicate an open task.

## Step 7: AI employees

When a bottleneck is really a role with several recurring duties, follow `references/ai-employees.md`: pick the build, write the job description, save it to AI Employees, and put it on the org chart under its human manager.

## Step 8: Save and track

Show the Bottlenecks rows you'd save (Bottleneck, Owner, Hours per Week, Pain, Automatable, Fix Type, Status, AI Employee, Estimated Hours Saved, Fix Cost, Check By, The Fix, Pillar, Date Found) and write them after the agent's OK. New rows start as Open; the quick win is Fixing; Keep human rows are Kept human. Set **Check By** on the quick win's row to 30 days from today, and fill **Fix Cost** where you have it. Ask them to note how long the fixed task takes for the next two weeks. /nez-next will remind them on the Check By date, so they don't have to remember.

## RE-RUNNING

Read Bottlenecks and AI Employees. Show a short table: what got fixed, what's in progress, what's next, and for each fixed one the estimate against what they say it actually saved (Actual Hours Saved), and whether the estimates held. Rows past their Check By date come first: ask "Did it save the time?", record Actual Hours Saved, set the row to Fixed if it worked, and clear Check By. Be honest if they didn't. Update rows after their OK, re-rank what's open, and start the next fix. Ask once if anything new is slowing them down. Say which AI employee reviews are due or overdue.

## Next step

Recommend ONE:
- After the first AI employee is saved: /nez-org-chart to see it on the chart.
- After a quick win: the next bottleneck in the plan (run /nez-bottleneck again in two weeks to check the estimate).
- No work style profile yet: /nez-self is optional and helps, but never block on it.

End with: "You can run /nez-next any time and I'll tell you your best next step."
