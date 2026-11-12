# The brain as the dashboard's database

Used by `SKILL.md` Steps 5, 6 and 8. The brain stores anything the dashboards track that doesn't live in another app. The dashboard reads from it and writes to it.

## The rule

- **Data in an app stays in the app.** If it lives in GoHighLevel, the email or the calendar, read it there. Never copy it into the brain just to display it.
- **No app, use the brain.** A transaction checklist and documents, dates the CRM doesn't hold, goals and numbers, content status, and custom trackers go in a brain database.
- **Reuse before create.** Check for an existing database first and use it:
  - **Tasks:** the brain's Tasks (`tasks_ds_id`), when the brain is the task home (`tasks.md`).
  - **Clients and deals:** Clients & Deals.
  - **Content and marketing:** the Content Planner and the Marketing Hub.
  - **Goals and numbers:** My business numbers, Quarterly Goals, Business Reviews.
  - **Voices:** the Voice Library and its Voices database.
  Never create a duplicate of any of these.

## Creating a new tracker

1. Propose it: its name, why it exists (which widget and which action), and a field table (Property, Type, Options). Clear names, a Status select where there's a workflow, a Date for each date, a checkbox or status for each checklist item.
2. Wait for the agent's OK or changes.
3. Create ONE database in the brain section it belongs to (a Transactions tracker in 03 · Clients, a Follow-Up Queue inside the Dashboard page) with those fields and no others. Save its IDs on the Master Profile's Page IDs and on the Dashboards row.
4. If adding a select option errors, save a row that uses the new option, trash any extra row it created, and say what you did.

## Writing from the dashboard

Actions that create or update tracking (make a task, mark a document received, change a status, add a date) write to the matching brain database. Each write is one row or one field change from a button click, and the action says what it will do. Never write anything the agent didn't click.

## The Dashboards database

Inside the brain's **Dashboard** page. Page IDs: `dashboards_db_id` and `dashboards_ds_id`. One row per dashboard. If two exist, use the one in Page IDs, never create or delete one, and tell the agent in one line.

```sql
CREATE TABLE ("Name" TITLE, "Type" SELECT('Command Center':blue, 'CRM':green, 'Content':pink, 'Money':yellow, 'Transactions':orange, 'Industry':purple, 'Custom':gray), "Status" SELECT('Active':green, 'Draft':yellow, 'Retired':gray), "Version" NUMBER, "Date" DATE, "Industry" RICH_TEXT, "Artifact Link" URL)
```

Description: "Your live dashboards, one row each. Run /nez-dashboard to build or update one."

An unpublished dashboard has Status Draft, an empty Artifact Link (never a placeholder), and "Not published yet" at the top of its page. On publish: Status Active, fill the link, remove that line.

## Page body for each row, in this order

**Dashboard:** {{name}}, version {{N}}, {{date}}. Run /nez-dashboard again to update it.

- **Sections:** each with one line on its purpose. The Command Center also lists its cards, each with the dashboard it summarizes and that dashboard's link.
- **Widgets:** one line each: section, name, action buttons.
- **Data sources:** for each widget, the app, or the brain database and its ID.
- **Connected apps:** the connectors it uses (declared once at build), and any skipped (so a later update can offer them once).
- **Brain databases used:** each by name and ID, whether it existed or was created for this dashboard, and its fields.
- **Follow-Up Queue settings** (if it has one): stale days per group, pipelines and stages included and skipped, channel per group, list length, whether sends are logged as a CRM note (and that they were told), the freshness approach and why, the scheduled task (what and when, if approved), and the Follow-Up Queue database ID.
- **Email settings:** the No reply needed action (nothing, a label, mark read, archive), the label name, whether the spam confirm was given, the always-show and always-hide senders, and how email to task runs.
- **Task home:** where tasks go, what the scan found, and whether their own tool was skipped for lack of a connector.
- **Discovery answers:** first-look list, slips, weekly decisions, who uses it, dropped items with the reason, and the dashboards they passed on.
- **Version log:** one line per version ("Version 1, 2026-11-12, built with 6 widgets on 3 views"), plus what changed on each update.

## Updating

Re-running reads the row and updates it instead of starting over: add 1 to Version, set the Date, keep the log.
