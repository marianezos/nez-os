# The Follow-Up Queue widget

Used by `SKILL.md` (Steps 4, 5, 6 and 8), `widgets.md` and `build.md`. It shows people in the CRM who need a follow-up or have gone stale, each with a short reason and a drafted text or email ready to send. The agent edits the message and sends it from the dashboard. Nothing ever sends automatically, and there's no "Send all."

## Settings to collect (in discovery)

Scan first, then ask only what's missing. Suggest starting points, and say plainly they're starting points to change, not a standard.

1. **Stale days per group:** new leads, active buyers and sellers, past clients and sphere (or their own group names). Starting points: new leads 3 days, active clients 7, past clients 90, sphere 180.
2. **Pipelines and stages:** read the CRM first and show what you found, then ask what to leave out (lost, closed, do-not-contact).
3. **Channel per group:** text or email. Texts are still checked per contact.
4. **List size:** a short list they can finish, for example 10 to 20, highest priority first.
5. **Logging:** tell them once at setup, "When you send from the dashboard, I log the touch as a note in GoHighLevel." Save that they were told. They can turn it off.
6. **Freshness:** offer the daily scheduled task (below) and ask the time of day.

Save all of it on the Dashboards row under "Follow-Up Queue settings."

## How the list is built

Read the CRM (read only): last contact date, stage, source, open tasks and the last message. Rank by behavior only:
- time since contact against the group's stale days,
- the stage,
- recent activity (a reply, a form, a showing request, an overdue open task),
- deal value if they set one.

**Never** rank, filter, group or describe contacts by a protected characteristic or a stand-in for one (race, color, religion, sex, disability, familial status, national origin, age, a neighborhood's makeup, or a guess at any of them). Never show those details. If a note includes one, leave it out.

- **Reuse, don't duplicate.** If nez-real-estate-os is installed, follow the ranking signals in /nez-daily and the touch rules in /nez-sphere instead of writing a second version. Otherwise use the rules here.
- **One line of reason** per contact, from the data: "Asked about a showing, no reply in 9 days," "Past client, no contact in 110 days." Never a reason the data doesn't show.
- **Groups** with counts. Within a group: oldest need first, then highest value.
- **Skipped:** never include do-not-disturb, unsubscribed or do-not-contact people, or skipped stages. Say how many were skipped and why, in one line.

## The drafted message

- In their voice and in the language of the last conversation (Spanish if it was in Spanish), from the last conversation and the stage. Short (a text under 40 words, an email under 90), personal, one clear next step. Never "just checking in." No em dashes.
- Only facts from the CRM and the last conversation, and only what helps the next step. No small talk riffs, no guessed context, never private notes. Never mention anything that points to a protected characteristic. Never invent a listing, price, date, promise or result; use a [PLACEHOLDER] and say what's missing.
- Their disclosure line on email where needed, and no claims about price, rates or results.
- **Channel and the check.** Before suggesting a text, run the texting check in `email-actions.md` (consent and A2P, not do-not-disturb or STOP, 8am to 9pm their time). Passes: suggest a text for groups that chose text. Otherwise an email. Neither allowed: "Call or skip" with the reason, and no draft. A call is the agent's own action and needs their own do-not-call check.

## Buttons on each contact

- **Send.** The exact text, channel and recipient next to the button, in an editable box. Check consent again with a fresh read before enabling Send. Clicking Send sends only that message. Then log the touch as a CRM note ("Follow-up sent from the dashboard: [summary], [date]"), mark the row Sent, and remove it. If the send fails, say so, don't send again, and check the conversation first. If the send worked but the note failed, say so and offer to retry only the note.
- **Snooze.** Hide for 3, 7 or 14 days (they pick), then bring it back.
- **Make a task.** A follow-up task in their task home (title, a due date they pick, a link to the contact), shown first. Mark the row "Task made."
- **Not now.** Remove from today only.
- Any other CRM change (a stage move, mark lost, change an owner) is shown first and made only after their OK. The logged note is the only CRM write agreed in advance.
- Never a Send all, a bulk, overnight, scheduled or automatic send, or a send on a retry.

## Freshness: which approach

Check the artifact capabilities and this session before choosing, and explain the choice in the plan.
- **Drafting live for the whole list on every open** is a poor fit: the page's model call is memoryless, asks consent on first use, is rate limited, and is meant for a click. Reading data live is cheap.
- **A daily scheduled task is the default** when their Claude can run scheduled tasks. It builds the queue, drafts, and writes to a brain "Follow-Up Queue" database. The dashboard reads it live and shows "Last updated." Offer it at setup, show the schedule and what it does, and create it only with their OK (say which scheduling feature). Never claim to have scheduled something you didn't.
- **Fallback:** the dashboard reads the CRM live (ranking and reasons) and drafts one message when they click "Draft message." "Refresh queue" means running /nez-dashboard again if the page can't read the CRM.
- **No live access** (snapshot): the queue is a snapshot with the banner from `build.md`, and Send copies the text for them to send in the chat.

## The daily scheduled task prompt

Fill in their settings from the Dashboards row. Read only on the CRM, never sends.

```
Build today's Follow-Up Queue. Read the Follow-Up Queue settings on the Dashboards row "[dashboard name]" in my NEZ OS brain (stale days per group, included and skipped pipelines and stages, channel per group, list length). Read GoHighLevel read only for contacts in the included stages: last contact date, stage, source, open tasks and the last message. Rank by behavior only (time since contact, stage, recent activity, deal value if set), never by a protected characteristic. For each of the top [N] contacts, write a one-line reason from the data. Run the texting check for any text (consent and approved A2P, not do-not-disturb or STOP, 8am to 9pm their time zone, unknown means no). Draft a short message in my default voice from the Voice Library with one next step, using only facts from the CRM, with no em dashes. If neither text nor email is allowed, set the channel to "Call or skip" with the reason and no draft. Write one row per contact to the Follow-Up Queue database: replace yesterday's rows that are still Open, keep Snoozed rows until their date, and keep rows marked Sent, Task made or Not now. Set Updated to now. Never send a message, never change the CRM, never delete a row, and never store phone numbers, emails or private notes.
```

## The brain "Follow-Up Queue" database (only with their OK on the fields)

Create it only if they chose the scheduled task, inside the Dashboard page, after showing these fields. It keeps only what the widget needs, never the CRM's contact details.

| Property | Type | Notes |
| --- | --- | --- |
| Contact | title | The name as they use it |
| CRM Link | url | The contact or opportunity |
| Group | select | Their groups (New leads, Active clients, Past clients, Sphere) |
| Pipeline | text | |
| Stage | text | |
| Reason | text | One line, from the data |
| Days Since Contact | number | |
| Last Message | text | A one-line summary, not the full text |
| Channel | select | Text, Email, Call or skip |
| Check Result | text | One line, for example "Consent found" or "No consent, email instead" |
| Draft | text | The drafted message |
| Status | select | Open, Sent, Snoozed, Not now, Task made, Archived |
| Snooze Until | date | |
| Priority | number | The rank order |
| Updated | date | When the task built it |

Resolved rows (Sent, Task made, Not now) become Archived after 14 days. Never delete a row. Record its IDs on the Dashboards row and in Page IDs (`follow_up_queue_db_id` / `follow_up_queue_ds_id`).

## The widget

A header with "Last updated [time]" from the data's own timestamp and the count waiting. Groups with counts. Each contact: name, group, reason, channel and check result in one short line, the editable draft, and Send, Snooze, Make a task, Not now. "Call or skip" shows the reason with Snooze, Make a task and Not now only. An empty queue says "Nothing is waiting." One failing connector shows one "Reconnect [app]" message here. One column on a phone, no em dashes.

## Never

Send without a click on that one message, send in bulk, rank or filter by a protected characteristic, change the CRM beyond the logged note without an OK, or show phone numbers, emails or private notes unless they asked.
