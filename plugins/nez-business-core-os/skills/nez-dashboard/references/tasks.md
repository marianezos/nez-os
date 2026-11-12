# Where tasks live

Used by `SKILL.md`, `widgets.md`, `email-actions.md`, `email-tasks.md` and `follow-up-queue.md`. Every task the dashboard makes goes to one place, the agent's task home. Never split tasks across two places.

## Ask once, in discovery

"Where do you keep your tasks? A) GoHighLevel B) Asana, ClickUp, Todoist or another app C) Your Tasks database in your brain." Skip it if the Dashboards row or the scan already answers it. Save the answer on the Dashboards row as "Task home."

## Scan that tool, then write there

Learn the tool before the plan with read-only calls, and say in one or two lines what you found:
- **GoHighLevel:** the sub-account's task operations (a task is tied to a contact), its fields (title, body, due date, assignee, contact, status), and who the assignees are.
- **Another app:** its projects or lists, its fields, and which list new tasks go in. Ask which list once, and save it.
- **The brain:** the Tasks database (`tasks_ds_id`): Task, Status, Priority, Pillar, Due Date, Owner, Notes, Project. Reuse it, never duplicate it. If the ID isn't saved, find the database titled "Tasks" in the brain, save its IDs in Page IDs, and say nothing technical. Anything that creates a Tasks database saves its IDs right away.

Check the exact tool names and arguments in this session before building (`build.md`). Never guess.

## No connector for their tool

Say once: "I can't reach [tool] from here, so I'll keep your dashboard tasks in your brain's Tasks." Use the Tasks database for every task, note on the Dashboards row that their tool was skipped (so a later update can offer it once), and don't ask again.

## GoHighLevel: finding the contact

A GoHighLevel task is tied to a contact, so find one first.
1. Search the sub-account by the sender's email, then phone. Exact matches only. A thread that comes "via" a group or list address shows only that address, so skip the email search and search by a phone number in the signature or the sender's name.
2. No contact: ask once, "[Name] isn't a contact in GoHighLevel. A) Create the contact (I'll show the name and email first and create it only on your OK) B) Attach the task to a contact you pick C) Make it a task in your brain instead."
3. In a scheduled or unattended run, choose C, make the brain task, and flag it in the run summary so they can move it. Never create a contact without an OK. This is the only exception to one task home, and they chose it.

## Listing tasks

Before the build, look for a real task search or list operation in their tool. GoHighLevel normally has one (a sub-account task search and a per-contact task list), so use it when it exists: the Tasks widget then shows every task, including ones made outside Claude. Only if none exists, the widget lists the tasks this skill made (the brain's Tasks plus the GoHighLevel tasks it created, with their links in Notes), and says once: "Tasks made in GoHighLevel outside Claude don't show here yet." Never claim a full list you can't get.

## Connected but not signed in

Say once: "[App] is connected but not signed in. Open Settings, then Connectors, and reconnect it. Want me to use your brain's Tasks for now?" Don't retry, and don't put tasks in a second place unless they say yes.

## What a task holds

- A title from the source (an email subject, a contact's name and stage, a deal), a due date they pick (or the tool's default, shown first), a link back, and the owner.
- **The link back:** an email task opens that thread inside the dashboard (the dashboard's address with the thread in the hash), never the mail app. A CRM task opens the contact. A content task opens the Content Planner row.
- **A hidden key** in the notes (`source: email thread <id>`) so the same item never makes a second task, and so it can be found and closed later.

## Rules

- A task is shown first and created only from a click, or by the automatic email to task job they approved.
- Never write a task to a second place "as a backup."
- Closing a task is a status change (Done) in the same tool, never a delete.
- If the write fails, say so in that widget, keep the rest working, and let them click again. Never retry a write by itself.
