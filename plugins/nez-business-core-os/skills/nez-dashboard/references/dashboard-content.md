# The Content dashboard

Used by `SKILL.md` Step 5 when the agent picks Content. It reads the Content Planner (`content_planner_ds_id`) and nothing else: never social platforms, editing apps or posting tools. Status comes from the brain. It's its own dashboard with only the Notion connector.

## Scan first

Read the Content Planner's fields and Status options. The NEZ OS layout has Status (Idea, Scripting, Recording, Editing, Reviewing, Scheduled, Published), Status Changed (date) and Needs from Me (text). If an older brain is missing Reviewing, Status Changed or Needs from Me, say so once, show what you can do with what's there, and offer to add them (/nez-setup's workspace check adds them too). If the Content Planner is empty, say what the dashboard will show once content is planned, and point to /nez-content (or the Vault prompt "Plan My Week of Content" until it ships).

## Sections (each passes "If you saw this, what would you do?")

1. **Posting today.** Rows with a Publish Date of today: title, platforms, status. Anything not yet Scheduled is flagged. Action: open the row.
2. **Scheduled this week.** Status Scheduled, Publish Date in the next 7 days, in date order. Action: open the row.
3. **Needs my review.** Status Reviewing, oldest first, with how long each has waited. Actions: open, approve, add a revision note.
4. **Waiting on me.** Rows where Needs from Me isn't empty, with that text. Action: open the row.
5. **Stuck.** Not Published or Scheduled, with a Status Changed date more than 3 days ago (so a row is stuck from the fourth day in the same status), unless the agent picked a different number. A row with no Status Changed uses its created time and is labeled "no status date." Never use the last edited time. Action: open the row.

Counts go on the Command Center card ("2 to review, 1 waiting on you").

## Actions (each from a click, each says what it will do)

- **Open the row:** opens the Notion page.
- **Approve:** shows "This sets it to Scheduled once it has a Publish Date, otherwise Editing," then sets Status, sets Status Changed to today, and adds one log line to the row's page ("[date and time] Approved from the dashboard"). Never edit past log lines.
- **Add a revision note:** an editable box. On click it adds one checkbox item with their note under a "Revisions" heading on the row's page, adds a log line, and sets Status to Editing (and Status Changed to today) only if they tick "send it back now."
- Nothing else writes. No scheduling, posting or publishing.

## Rules

- Dates come from the row; times use the agent's time zone.
- Titles and notes stay as they wrote them.
- An empty section says what it would show ("Nothing waiting on you.").
- Every content skill that moves a Status also sets Status Changed to today.
- Declare only the Notion connector and its query, fetch and update tools.
