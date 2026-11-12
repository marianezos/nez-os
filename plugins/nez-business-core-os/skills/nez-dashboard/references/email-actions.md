# The email widget and its buttons

Used by `widgets.md` and `build.md`. Check the exact tool names and arguments in this session before building, and never guess.

## Hard rules

1. **Never link or redirect to Gmail or any mail app.** No "Open in Gmail" anywhere, and no task, card or message that points to the mail app. The thread opens inside the dashboard.
2. **Opening an email drafts a reply in their voice,** ready when the thread opens, for that one email.
3. **Context is read only:** the full thread, plus recent threads with the same sender. Facts come only from those. Anything missing is a [PLACEHOLDER] that says what's needed. Never invent a fact, price, date, promise or commitment.
4. **The reply box is editable, and Send is one click per message.** Nothing sends unless they click Send on that message. A mailbox action (mark read, label, archive, spam) happens only from a click, using the setting they chose.

## What the list shows

Emails that need a reply, newest need first: who, the subject, how long it has waited, and one line on why ("asked a question," "asked for a showing time"). No drafts for the list; a draft is made when one email is opened.

## What counts as needing a reply

The latest message is from someone else, asks something or needs an answer, and isn't answered yet. Filter out promotions and social updates, no-reply senders, newsletters and receipts, using the mailbox's own categories and sender patterns. Let them name senders to always show and always hide, saved on the Dashboards row. Never delete anything while filtering.

## Opening an email (inside the dashboard)

A reader view in the same page: sender, subject, and every message in the thread in order, each with its sender and time, as plain text, never a link to the mail app. A back button returns to the list. Read the thread read only; don't mark it read unless they chose that for No reply needed.

## The draft

When the thread opens:
1. Read the full thread.
2. Read recent threads with the same sender (read only): search for their address, take a few of the most recent other threads (for example up to 5 from the last 90 days), and read what you need. Skip anything unrelated. Never read other people's threads, never write to the mailbox.
3. Write the reply in their voice (the voice rule in `SKILL.md`), in the language the sender wrote in (a Spanish email gets a Spanish reply, using their Spanish voice if the Voice Library has one), short, answering what the latest message asks. A date, price, document or promise that isn't in those threads becomes a [PLACEHOLDER]. Add their disclosure line where email needs it (Compliance Guardrails). No advice on legal, tax or lending; no promises about price, rates or timing; Fair Housing always.
4. Show it in an editable box, with one line under it on what it used ("Used this thread and 2 earlier threads from this sender") and any placeholders to fill. If the draft can't be made, say so and leave the box empty, never a made-up draft. One draft per open; a "Redraft" button makes a new one on a click.

## The buttons

1. **Send.** Sends that one reply, in the same thread, after their edits. Show the exact text, recipient and subject next to the button. Send stays off while a [PLACEHOLDER] is in the text. One message at a time; never automatic, in bulk or on a retry. If a send fails, say so and don't send again until they click again (check the thread first, since a failed send can be an unknown outcome). After a send, remove the email from the list and close its task.
2. **Make a task.** One task in their task home (`tasks.md`) for an email the automatic job skipped or that they want to track differently, after showing it. Never a second task for a thread that already has one.
3. **No reply needed.** Always removes the email from the dashboard and closes its task. At setup, ask once what else it should do in the mailbox: nothing (the default), add a label (which name), mark as read, or archive. Save the choice; they can change it later.
4. **Spam.** Removes the email and marks it as spam in the mailbox. Confirm the first time ("This also marks it as spam in your mailbox. OK?"), save that the confirm was given, and don't ask again.

## Undo for No reply needed and Spam

Hold the mailbox action for a few seconds (for example 8) with an Undo button and a countdown. Undo cancels it and puts the email back. When the countdown ends, run the action.

## Dismissals and settings

Dismissed thread IDs live in the dashboard's own data store, not the brain (they're display state). The email settings (No reply needed action, label, spam confirm, always-show and always-hide senders, email to task choice) are saved on the Dashboards row.

## Texting from the dashboard

Any text (from the CRM, Follow-Up Queue or Clients widgets) passes the same check every time, before a text is drafted or sent:
1. **Consent and A2P:** their texting consent rule from Compliance Guardrails, the contact's record (a form, a tag or a field showing consent), and approved A2P registration for their GoHighLevel number. Unknown means no text.
2. Not do-not-disturb, not unsubscribed, not marked STOP.
3. Between 8am and 9pm in the person's own time zone.

If it fails, no text option: offer an email or a call, with the reason in one line.

## Never

Never send, label, archive or mark spam without their click. Never link to the mail app. Never read mail they didn't connect the dashboard to see. Never keep message text in the brain or a task beyond the one reason line. No em dashes.
