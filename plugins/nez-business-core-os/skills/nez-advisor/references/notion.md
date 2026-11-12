# Advisory Board, Board Meetings and Coach Library: where everything lives in Notion

/nez-advisor, /nez-board and /nez-library all read this file. Keep them in step with it. Finding the brain, writing rules (dollar signs, no em dashes) and what never to store come from the plugin's `references/brain-rules.md`.

## IDs these skills use (Page IDs on the Master Profile)

Each database has two IDs, saved side by side: the `_db_id` opens the database, and the `_ds_id` (its collection:// data source ID) is the one to use for querying and adding rows.

- `advisory_board_db_id` and `advisory_board_ds_id`
- `board_meetings_db_id` and `board_meetings_ds_id`
- `coach_library_db_id` and `coach_library_ds_id`
- `compliance_page_id`: the Compliance Guardrails page. Read it wherever compliance matters (a board meeting about marketing or texting, the Local Market Expert, the Master Coach).

If a `_ds_id` is missing (a database made earlier), fetch the database once, read the data source ID, and write it back to Page IDs before going on.

## Writing rules for these three databases

- **Dates with time:** write Last Refreshed (Advisory Board) and Saved (Coach Library) as a date with a time, in the agent's time zone. Your own time is an estimate and can be a few minutes off.
- **Counting what's new:** never decide what's new from those estimated times. Use Notion's own timestamps: a Coach Library row's created time (the createdTime column in a query) against the last edited time of the advisor's page (for example the Master Coach). For a declined Master Coach refresh, use the post count saved with the decline.
- **New select options:** a row can't use an option the database doesn't have. To add one, update the column and list every option to keep plus the new one (anything left out is removed). If that errors, save a row that uses the new option, trash any extra row it made, and say what you did.
- **The Link column** is named Link. Only a column named exactly url or id needs the userDefined: prefix.

## Advisory Board

In the brain's **Advisory Board** section. One row per advisor; the row's page is the advisor's brain (`advisor-brain-spec.md`).

```sql
CREATE TABLE ("Advisor" TITLE, "Key" RICH_TEXT, "Kind" SELECT('Role':blue, 'Mentor':purple, 'Public figure':orange, 'Master Coach':green), "Seat" RICH_TEXT, "Status" SELECT('Active':green, 'Draft':yellow, 'Benched':gray), "Sources" NUMBER, "Version" NUMBER, "Last Refreshed" DATE)
```

Description: "Your personal board of advisors. Each row's page is that advisor's brain. Run /nez-board to bring them a decision."

- **Key:** lower case with hyphens, unique (listings-strategist, tom-ferry, master-coach).
- **Kind:** Role, Mentor (someone the agent knows personally), Public figure, Master Coach (only one, Key master-coach).
- **Status:** Active (sits at meetings, up to 7 by default), Draft (fewer sources than needed), Benched (kept, not seated). Never delete a row.

## Board Meetings

In the Advisory Board section, after the Advisory Board. One row per meeting; the page holds the full meeting notes (`../../nez-board/references/meeting.md`).

```sql
CREATE TABLE ("Decision" TITLE, "Date" DATE, "Call" SELECT('Go':green, 'No go':red, 'Go with changes':yellow, 'Need more info':gray), "Advisors" RICH_TEXT, "Pillar" SELECT('Brain':purple, 'Leads':blue, 'Clients':green, 'Content':pink, 'Growth':orange), "Follow-up" DATE, "Outcome" SELECT('Not reviewed':gray, 'Worked':green, 'Mixed':yellow, 'Didn''t work':red, 'Didn''t do it':default), "What Happened" RICH_TEXT)
```

## Coach Library (/nez-library)

In the brain's **04 · Content** section, after Content Planner. Page IDs on the Master Profile: `coach_library_db_id` and `coach_library_ds_id`. Use the data source ID for queries and new rows.

```sql
CREATE TABLE "Coach Library" (
  "Title" TITLE,
  "Creator" RICH_TEXT,
  "Platform" SELECT('Instagram':pink, 'TikTok':gray, 'Facebook':blue, 'YouTube':red, 'LinkedIn':blue, 'X':default, 'Podcast':purple, 'Web':green, 'Other':default),
  "Link" URL,
  "Posted" DATE,
  "Saved" DATE,
  "Use" MULTI_SELECT('Hook':yellow, 'Content idea':green, 'Business advice':blue, 'Sales pitch':orange, 'Story':purple),
  "Topics" MULTI_SELECT('Listings':blue, 'Buyers':green, 'Sellers':orange, 'First-time buyers':yellow, 'Investors':brown, 'Pricing':red, 'Open houses':pink, 'Lead generation':purple, 'Follow-up':gray, 'Social media':default, 'Mindset':green, 'Marketing':blue, 'Sales':green, 'Money':brown, 'Systems':gray, 'Hiring':orange, 'Recruiting':yellow, 'Leadership':red, 'Customer service':default, 'Offers':blue, 'Partnerships':green),
  "Folder" RICH_TEXT,
  "Hook" RICH_TEXT,
  "Main Point" RICH_TEXT,
  "Lesson" RICH_TEXT,
  "Pitch" RICH_TEXT,
  "Why I Liked It" RICH_TEXT,
  "Words Read" CHECKBOX,
  "Status" SELECT('New':blue, 'Used':green)
)
```

Description: "The posts and videos you learn from: hooks, lessons and pitches, logged by /nez-library. For inspiration only: anything made from them is written new, in your voice."

## New topics

To add a Topic that isn't an option yet, add it to the Topics field first (update the data source), then save the row. If adding the option errors, save a row that uses the new option, then trash any extra row it created, and say what you did.

## Master Profile sections these skills write

Both live inside their own heading on the Master Profile, right after My business numbers. Never add them at the end of the page. Create the heading the first time it's needed.

- **Library Folders:** one line per synced folder: `platform | folder name | folder link | last synced <date and time>`. Update the line in place on each sync.
- **Board Updates:** one line per finding from the monthly mentor check: `advisor key | what's new | found <date>`, with `| declined <date>` added if the agent says no. /nez-board and /nez-advisor read it; a refresh clears that advisor's lines. Also here: `- master_coach_refresh_declined: <date and time> | <n> posts`, saved when the agent declines a Master Coach refresh, where n is the number of Business advice, Sales pitch and Story rows at that moment.

## Safety net (all three databases)

Before the first read or save in a session, make sure the database you need exists.

1. If its ID is missing or won't open, search the brain once for a database with that exact title. Found: save its IDs in Page IDs and go on.
2. None: say "Your [Advisory Board / Board Meetings / Coach Library] isn't in your brain yet. I can add it now with the NEZ OS layout. OK?" On yes, create ONE database with that title in its section, using the exact layout above, save both IDs in Page IDs, and add it to the Brain Index and the Dashboard's Your workspace list. If adding it to the board section isn't possible, create it on the main brain page and say where it is.
3. On no, or if it can't be created, don't lose the work: give the result in the chat (and as a downloadable file for a batch of library rows), say "I couldn't save this to your Notion. Run me again once your brain is ready and I'll save it," and stop trying to save. Never create a second copy of any of these databases, and never create any other database.
