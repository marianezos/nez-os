# Widget library

Used by `SKILL.md` Step 5. Offer a widget only when the discovery answers call for it, and every widget leads to an action. Data in an app is read from the app; data with no app lives in a brain database (`notion-trackers.md`). Every widget handles its own failure: if its connector fails, it shows one "Reconnect [app]" message and the rest of the page keeps working.

## CRM summary
- **Source:** GoHighLevel or another CRM. No CRM connector: Clients & Deals from the brain, labeled "from your brain, not your CRM." For GoHighLevel, list the sub-accounts first and show one summary per sub-account (a tab or card each).
- **Shows:** new leads (within the window they chose), active leads (in an open stage), and needs follow-up (no activity for the days they chose). Thresholds come from them, never a standard.
- **Actions:** open the record in the CRM; make a task (in their task home, shown first, created after their OK); a text only after the texting check (`email-actions.md`).
- **Never** show protected-class details or private notes. Source and stage only.

## Email
- **Source:** the email connector. Hard rules, filter, auto-draft and buttons in `email-actions.md`; the automatic task in `email-tasks.md`.
- **Shows:** emails that need a reply, newest need first, with who, subject, how long it has waited, and one line on why. Opening one shows the full thread in the dashboard (never a link to the mail app) with a drafted reply already in an editable box.

## Messages (optional)
- **Source:** Slack or Google Chat, only if they use it.
- **Shows:** unread direct messages and mentions that need a reply.
- **Actions:** reply (one message on click), make a task, No reply needed.

## Today
- **Source:** the calendar (and the GoHighLevel calendar if connected).
- **Shows:** today's appointments and showings in order, with time, who, where or the link, and the next free block.
- **Actions:** open the event; a prep note field; add a task.

## Important dates
- **Source:** the CRM, the calendar, or the Transactions tracker (`../industries/real-estate.md`). A date that lives in the CRM or calendar is read there.
- **Shows:** the next dates in order, how many days away, and the action for that kind of date (written by the agent: "call the lender," "confirm the inspector").
- **Actions:** mark done; snooze; make a task.
- **Dates** come only from the source (the CRM, the calendar, or the executed document). Never compute a date from a rule.

## Tasks
- **Source:** their one task home (`tasks.md`).
- **Shows:** due today, overdue, and the next 7 days, by priority, with the owner. Tasks made from email show the sender and open that thread in the dashboard. For GoHighLevel, use its task search when it exists (it normally does). Only if it doesn't, show the brain's Tasks plus the GoHighLevel tasks this skill made (their links are in the Notes), and say once: "Tasks made in GoHighLevel outside Claude don't show here yet."
- **Actions:** mark done; change the due date; add a task (written to the task home only, after showing it).

## Pipeline or deal tracker
- **Source:** the CRM for stage and value, and a brain tracker for what the CRM doesn't hold (checklist, documents, key dates).
- **Shows:** each open deal, its stage, what's missing, the next step.
- **Actions:** mark a document received; change a checklist status; add a note; make a task. A CRM change is shown first and made only after their OK.

## Money snapshot
- **Source:** My business numbers and Quarterly Goals (/nez-bizplan, /nez-goals), Clients & Deals for closings, a finance connector if connected.
- **Shows:** the quarter's targets against actual (only numbers that exist), take-home if the pay structure is saved, cash in this month if a finance tool is connected, and one headline they chose.
- **Never** show account numbers or full card numbers. Use only their own split, cap and fees. Never fill a number that isn't in the source.

## Marketing snapshot
- **Source:** the Marketing Hub and the Content Planner.
- **Shows:** counts by Type and Status, what's scheduled, what's waiting for approval.
- **Actions:** open the row; change a Status (written back to the Marketing Hub).

## Custom tracker
- **Source:** any brain database they ask for (existing, or new with their OK).
- **Shows:** a list, a board grouped by status, or counts.
- **Actions:** add a row, change a status, mark done, written back to that database.

## Follow-Up Queue
- **Source:** the CRM (read only) and, when they chose the daily scheduled task, a brain "Follow-Up Queue" database the task fills. Full spec in `follow-up-queue.md`.
- **Shows:** people who need a follow-up or have gone stale, in their groups, each with a one-line reason and a drafted text or email in their voice. Text only with consent and A2P and not do-not-contact, otherwise email, otherwise "Call or skip" with the reason.
- **Actions:** Send (that one message, then a CRM note is logged), Snooze (3, 7 or 14 days), Make a task, Not now.
- **Ranked by behavior only,** never by who someone is. No Send all.

## Potential earnings (pipeline value turned into the agent's own earnings)
- **Source:** CRM opportunities (read only): count and value per stage. Their numbers come from My business numbers: **My commission per side**, **Split and cap**, and **Deal walk-through (confirmed)** (or **Take-home per deal** if saved).
- **The math:** potential per deal = value × commission per side × sides × the share they keep (from their confirmed walk-through; before or after cap, whichever applies now). Sides is 1 unless the deal is marked as both sides or they say so.
- **Shows:** for each stage, the value, the math written out with the numbers, the potential, and the total. Labeled "Potential, not guaranteed." No weighting by chance of closing unless they give their own close rate.
- **Missing numbers:** ask once with the matching /nez-bizplan question, save it in My business numbers, and never use a standard or typical rate (commission is set by agreement and is negotiable). If an opportunity has no value, say how many were left out.
- **Actions:** open the stage in the CRM. Writes nothing.
- **Other industries:** their own margin or rate if they want profit shown, otherwise value only.

## Clients by stage
- **Source:** the CRM (read only), or Clients & Deals if they have no CRM connector.
- **Shows:** a count per stage, and each client's last touch (days since the last activity, from the CRM's own record). Stage and source only.
- **Actions:** open the contact; make a task; a text only after the texting check.

## Content dashboard
Its own dashboard: `dashboard-content.md`. Reads the Content Planner only.

## Brain to-dos (optional, Command Center)
- **Source:** the brain (read only): Inbox items not filed, Open Questions with Status Open, Bottlenecks past their Check By date, Board Meetings with an overdue Follow-up and Outcome Not reviewed, AI Employees with a past Review Date, and when the last weekly check-in was (Setup Status `last_check_in`).
- **Shows:** one line per kind that has something waiting, with the count ("3 inbox items to file," "Weekly check-in is 9 days late"). Nothing waiting: "Your brain is up to date."
- **Actions:** each line copies the matching ask for the chat ("file my inbox," "answer my open questions," "/nez-goals weekly check-in"), or opens the row. Writes nothing.

## Summary cards (Command Center)
- **Source:** a small read-only subset of each other dashboard's own data (one or two counts per card), so the card is live.
- **Shows:** one card per other dashboard they picked, with the one or two numbers that matter and a link to that dashboard. A card with something overdue or urgent says so in one line.
- **Actions:** the card opens its dashboard's link (saved on the Dashboards rows).

## Rules for every widget
- Freshness ("updated 4 minutes ago") from the data's own timestamp, never the page clock.
- An empty widget says what it would show and what's needed to fill it. Never made-up sample data.
- Every action says exactly what it will do before it does it. A write to the CRM or mailbox happens only from a click.
- No em dashes, and it works in one column on a phone.
