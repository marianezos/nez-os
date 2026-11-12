# Edits by chat

Used by `SKILL.md` Step 5. The databases are the source of truth, so every edit is a change to a row. Never delete a row.

## For every edit

1. Say what you understood in one line.
2. Show a before and after for each row that changes (a small table: field, before, after).
3. Check the rules below. If one is broken, say which and offer the fix.
4. Wait for the agent's OK. Write only after a yes.
5. After writing, read the row back to confirm. Then republish the chart to the same page and say what changed.

## Add

- **A person:** a new People row (Name, Role Team member or Assistant, Reports To, Human or AI Human, Status Active, job in Notes as "Job: ..."). Mention /nez-self if they have no profile.
- **An AI employee:** a new AI Employees row (Name, Role, Human Manager, Where It Runs, What It Does if known, Status Draft, Created today). The manager must be one person in People. Say the full job description comes from /nez-bottleneck. If it texts or emails clients, add the texting consent and compliance note from Compliance Guardrails to What It Does.
- **A job nobody owns:** add it to "Roles nobody owns" on the agent's own People row under Notes.
- **Making an AI employee Active:** only with a manager and a Review Date. If either is missing, say so and ask for it first.

## Move

- **A person:** change Reports To. Check it doesn't make a loop (nobody reports, directly or through others, to themselves).
- **An AI employee:** change its Human Manager. Still exactly one.
- **Two managers asked for:** say each AI employee has exactly one human manager, and ask which one. The other person can be named as a user in What It Does.

## Rename

Change the Name or the Role. When a person's name changes, also update every Reports To and Human Manager that used the old name, shown in the same before and after.

## Retire

- **A person:** Status Former. Before saving, list everyone who reports to them and every AI employee they manage, and ask who takes each one. Don't save until every one has a new manager. Never record why someone left.
- **An AI employee:** Status Retired. Say that anything it ran (a Claude Project, a scheduled task, a GoHighLevel workflow or Conversation AI bot) is not turned off by this change, and list what to turn off by hand. Never claim it was turned off.
- Former and Retired rows stay in the database and are hidden on the chart unless the agent asks to see them.
