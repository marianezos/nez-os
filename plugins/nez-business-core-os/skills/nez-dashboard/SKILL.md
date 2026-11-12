---
name: nez-dashboard
description: Builds live dashboards for a real estate agent as separate Claude artifacts, a Command Center (today, email, tasks, and a card for each other dashboard) plus CRM, Content, Money and Transactions dashboards picked from a menu. Scans the NEZ OS brain, connected apps and the Dashboards database first, runs discovery only on the picks, and sends or changes nothing without a click. Email opens inside the dashboard with a drafted reply in the agent's voice, and every email that needs a reply becomes a task in their one task home. Real estate adds potential earnings from their own split, clients by stage, a follow-up queue and transactions. Works for other industries too. Triggers when the user runs /nez-dashboard, or says "build me a dashboard", "command center", "what should I see every morning", "dashboard for my business", "update my dashboard", or "add a CRM dashboard".
---

# NEZ OS Dashboard: See What Matters and Act On It

## Purpose

Build dashboards the agent opens many times a day, made from their real answers to "What do you check first, what slips through, and what would you do if you saw it?" Discovery comes first and widgets serve the answers. Built for real estate, with presets as suggestions only, and works for other businesses too.

## What it covers

- **A menu first:** after the scan it shows what's possible for their apps (Command Center, CRM, Content, Money, Transactions, or something custom) and runs discovery only on what they pick.
- **Separate dashboards:** each is its own Claude artifact with its own link and its own entry in the Dashboards database, built and updated on its own. The Command Center is the daily feed: today, email, tasks, and one summary card per other dashboard.
- **Email inside the dashboard:** a thread opens in the page (never a link to Gmail), with a reply already drafted in their voice from the thread and recent threads with that sender. Send is one click per message, never in bulk.
- **Email to task:** every email that needs a reply becomes one task in their task home, and closes when they reply or click No reply needed.
- **One task home:** GoHighLevel, another app, or the Tasks database in their brain. Never two places.
- **Real estate widgets:** CRM summary from whatever CRM they use (one per GoHighLevel sub-account), clients by stage, potential earnings from their own commission and split (labeled "Potential, not guaranteed"), a follow-up queue with drafted messages and the texting consent check, listings, and a transaction tracker with key dates and documents.
- **Live where possible:** live connector data when this Claude supports it, otherwise a dated snapshot with a clear refresh path. Connectors are approved once, never on every open.
- **Helps connect apps** they already use, step by step, and plans around any they skip.

## Core rules

- **Read the brain rules first:** the plugin's `references/brain-rules.md` (two levels up from this skill). Follow it for finding the brain, saving, logging and what never to store.
- **Discovery before widgets.** Never start from a list of widgets. Every item must pass one test: "If you saw this, what would you do?" Drop anything that leads to no action.
- **Menu first, then discovery on the picks.** Agents don't know what's possible, so suggest (`references/menu.md`), then interview only about what they pick.
- **Separate dashboards, not one big one.** Each dashboard is its own artifact and its own Dashboards entry, with only the connectors it needs (`references/build.md`).
- **Email hard rules.** Never link or redirect to Gmail or any mail app; a thread opens inside the dashboard. Opening an email drafts a reply in their voice from the full thread and recent threads with the same sender only (read only), with [PLACEHOLDERS] for anything missing. The reply box is editable and Send is one click per message (`references/email-actions.md`).
- **Email to task, automatic.** Every email that needs a reply (not promotions, newsletters, no-reply senders or receipts) becomes one task linked to the thread, closed when they reply or click No reply needed. It runs from a scheduled task they approve at setup, or on open if scheduled tasks aren't available, and the plan says which (`references/email-tasks.md`).
- **One task home.** Ask where they keep tasks, scan that tool, and write tasks there only. No connector for their tool: use the Tasks database in their brain and say so once. Never split tasks across two places (`references/tasks.md`).
- **Scan first, then ask.** Before asking anything, read the Master Profile (business, market, clients, tools, languages, My business numbers, My boundaries), My personality, the Dashboards database, the brain's databases, and which connectors you can see (email, calendar, GoHighLevel and how many sub-accounts, Notion, Slack, finance). Say in one or two lines what you found ("I can see Gmail, Google Calendar and GoHighLevel with 2 sub-accounts, and your Tasks database. Slack isn't connected."). Ask only what's missing. If a fact this skill needs isn't in the brain after the scan, ask once, save it in the matching section of the Master Profile (never at the end of the page), and go on.
- **Read from the app, store the rest in the brain.** Data that lives in an app (GoHighLevel, email, calendar) is read from that app, never copied into Notion just to display it. Anything with no app (a transaction checklist, dates the CRM doesn't hold, goals, content status, custom trackers) uses a brain database. Reuse an existing one (Tasks, Clients & Deals, Content Planner, Marketing Hub, Quarterly Goals) before creating one. A new database needs the agent's OK on its fields first (`references/notion-trackers.md`).
- **No Send all, ever.** No bulk, overnight, scheduled or automatic send. Every message goes out only when the agent clicks Send on that one message.
- **Nothing sends or changes unless they click.** Clicking Send on one message is the approval for that one message. Check texting consent, A2P and do-not-contact before any text. Never change a CRM record without showing the change and getting an OK. A mailbox action (label, mark read, archive, spam) happens only from their click, using the setting they chose.
- **Never ask about a connector again and again.** Declare every connector a dashboard needs once, at build time. Opening or refreshing only reads. If a connector fails, show one "Reconnect [app]" message on that widget and keep the rest working.
- **No sensitive data they didn't ask for.** No account numbers, full card numbers, health details, private notes, or client details beyond what the job needs.
- **Fair Housing.** No widget shows, ranks, filters or groups people by who they are or where they live. Behavior and stage only.
- **Voice.** Drafted replies use their default voice from the Voice Library (the Voices database row marked Default). If they name a voice, or the work is for a teammate or client brand, use that voice. Never mix voices. The voice controls style only; NEZ OS rules always win (compliance, consent, privacy, no em dashes, drafts only).
- **Reader.** If a drafted message is for a teammate (never a client or prospect) with a profile in People, shape the structure to how they like information (length, bullets, what to lead with) from their communication tips. Style only: never change a fact, date, number or request, and never mention their profile. An Estimated profile is used lightly.
- **No invented commitments.** Never promise an action, date, document or follow-up the agent didn't state or that isn't in the source data. Write a needed next step as a placeholder they must fill or delete, such as [confirm: send key dates by ___], and point it out.
- **Mobile friendly.** One column on a phone, large tap targets, no sideways scroll.
- **No em dashes** in anything you say, save or put on a dashboard.

## The Dashboards database

Each dashboard is saved as one row in **Dashboards** (`dashboards_db_id` / `dashboards_ds_id`, inside the brain's Dashboard page). Layout and page body: `references/notion-trackers.md`.

**Safety net:** if it's missing or won't open, search the brain once for a database titled "Dashboards" and save its IDs. None: ask "Your Dashboards database isn't in your brain yet. I can add it now inside your Dashboard page. OK?" On yes, create ONE with the layout in `references/notion-trackers.md` and save both IDs. On no, or if it can't be created, give the plan and the build in the chat, say "I couldn't save this to your brain. Run /nez-setup and it will offer to add your Dashboards database, then ask me to save it," and stop trying to save. Never create a second Dashboards database, and never any other database without their OK on its fields.

## Step 1: Scan

Read what's listed in the core rules. If the Dashboards database has rows, list them (name, type, version, link) and offer to update one instead of starting over (Step 9). Otherwise go to Step 2.

## Step 2: Menu

Follow `references/menu.md`: the picks for their apps, which apps each uses, and a recommendation to start with the Command Center. One question; they can pick several.

## Step 3: Connect the apps they use

Follow `references/connectors.md`, only for the apps the picked dashboards need. Recommend connecting an app they use that has a Claude connector, with one line on what it adds, guide them step by step ("look for Connectors in Settings"), and confirm with one read-only test. Never push an app they don't use. If they skip it, plan around it and offer it once more later, never repeatedly.

## Step 4: Discovery, on the picks

Follow `references/discovery.md`, for the picked dashboards only: a few questions at a time, skipping what the scan answered, with the filter on every item. Ask where they keep tasks (`references/tasks.md`) and, if the Command Center and email are picked, how email to task should run (`references/email-tasks.md`). If they want follow-ups, add the Follow-Up Queue questions (`references/follow-up-queue.md`). For the Content dashboard, there's nothing to ask unless they want a different "stuck" threshold (`references/dashboard-content.md`). For Potential earnings, read My commission per side, Split and cap and Deal walk-through (confirmed) from My business numbers, and ask once only for what's missing (`references/widgets.md`).

## Step 5: Plan

Show a plan and wait for their OK. One section per dashboard:
- Its widgets (from `references/widgets.md` and `industries/real-estate.md` or `industries/generic.md`, suggestions only), each with its data source (which app, or which brain database, existing or new).
- The connectors it needs, and only those. The Command Center's cards use a small read-only subset of each other dashboard's data.
- Flags: anything a missing connector can't support, with the brain tracker or paste alternative.
- New brain databases with their proposed fields, for their OK.
- Who uses it (just them, a team, an assistant) and what that changes.
- The email settings: the four hard rules, the No reply needed action, and how email to task runs (a scheduled task they approve, with the exact prompt and schedule, or on open).
- The task home and what the scan found, or that their tool has no connector and tasks go to the Tasks database.
- For a Follow-Up Queue: stale days per group, pipelines and stages included and skipped, the channel per group, the freshness approach and why, and the proposed database fields.
- The build order (picked dashboards first, then the Command Center with its cards), each saved as its own Dashboards row.

## Step 6: Build

Follow `references/build.md`: set up approved brain databases first, then build one dashboard at a time, each as its own artifact. Use live connector data where this Claude supports it; otherwise a snapshot with a clear Refresh path (run /nez-dashboard again). Declare only the connectors each dashboard needs, once. Publish each, record its link, then build the Command Center with cards that link to them. Run the two-open test on every artifact. If they approved the email to task scheduled task, create it now, show the prompt, and say which scheduling feature made it.

## Step 7: Review

Let them try each dashboard and ask for changes. Publish to the same link. Ask "What would you change?" and "What do you never look at?" Remove anything unused.

## Step 8: Save

Save or update one row per dashboard in Dashboards, with the page body from `references/notion-trackers.md`: sections, widgets, data sources, connected apps, brain databases used, email settings, task home, discovery answers, artifact link, version and date. The Command Center row also lists its cards and their links.

## Step 9: Update a dashboard

Read the rows (a Draft that was never published counts: update it in place, bump its Version, keep Status Draft until published). Ask which to change, or which to add from the menu (including any they passed on earlier). Show what it has, ask what changed, show a Before and After plan, wait for the OK, rebuild or republish that one artifact, add 1 to Version, and update its row. Rebuild the Command Center only if its cards or links change. Never start over unless they ask.

## Next step

Recommend ONE:
- After the first build: use it for a few days and come back with changes.
- After an update: the next widget they asked for.
- If an app that would help most isn't connected, mention it once, in one line.

End with: "You can run /nez-next any time and I'll tell you your best next step."
