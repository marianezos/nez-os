# Email to task, automatic

Used by `SKILL.md` (Steps 5 and 6), `email-actions.md` and `build.md`. Every email that needs a reply becomes one task in the agent's task home (`tasks.md`), linked to the thread, and closes when the thread is handled. This job only makes and closes tasks. It never sends, drafts into the mailbox, labels, archives or deletes anything.

## What becomes a task

The same filter as the email widget: the latest message is from someone else and needs an answer. Not promotions or social updates, no-reply senders, newsletters, receipts, or their always-hide senders. A thread that already has an open task (same thread key) is skipped.

## What the task holds

- **Title:** the subject, with the sender's name.
- **Due:** their default from setup (for example today, or the next business day), shown in the plan.
- **A link** that opens the thread inside the dashboard, never the mail app.
- The task home rules in `tasks.md` apply, including the GoHighLevel contact search. In a scheduled run, a sender who isn't a contact becomes a brain task, flagged in the one-line report. Never create a contact in a scheduled run.
- A note with the key `source: email thread <id>` and one line on why it needs a reply. No message body beyond that line.

## When the task closes

- They replied: the latest message in the thread is from them (from the dashboard or anywhere else). Read the thread to check.
- They clicked No reply needed.
- A newer message after a close opens a new task only if it needs a reply.

Closing sets the task to Done in the same tool, never a delete.

## How it runs (say which in the plan)

Ask once at setup, and show the plan before creating anything.
1. **A scheduled task they approve** (preferred, when this session can create scheduled tasks). Show the exact prompt and schedule first (for example every 30 minutes during their working hours from My boundaries), and create it only after their OK. Say which scheduling feature you used. The prompt reads recent inbox threads (read only), makes tasks for new ones that need a reply, closes tasks for handled threads, writes only to the task home, and reports one line.
2. **On open** (when scheduled tasks aren't available). The dashboard runs the same pass when it opens and on refresh. Say plainly that tasks update only when the dashboard is opened.

Record the choice on the Command Center's Dashboards row ("Email to task").

## Guard rails

- Read the inbox read only. The only writes are task creates and closes.
- A cap per pass (for example 20 new tasks) so a first run on a full inbox doesn't flood them. Say what was skipped.
- If the task tool fails, say so in one line on the widget and keep the rest working. Never retry a write by itself, and never fall back to a second task place.
- No em dashes in any task text.
