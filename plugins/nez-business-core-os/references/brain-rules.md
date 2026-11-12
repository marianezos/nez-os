# NEZ OS Brain Rules

Every NEZ OS skill reads this file before it reads from or saves to an agent's brain. The brain is the agent's single source of truth: everything true about their real estate business, kept in one place so any AI, assistant or teammate can help without the agent explaining it again.

If a skill's own instructions conflict with these rules, these rules win.

---

## 1. Finding the brain

1. Open the Master Profile's **Page IDs** section and use those IDs to open pages and databases directly.
2. If there are no Page IDs yet, or an ID no longer opens: search Notion once for `nez-os-root`. Use only a page whose **first line** starts with `nez-os-root:`. Ignore pages from any other system.
3. More than one NEZ OS brain: ask the agent which one. Never guess.
4. After finding the brain by search, fill in or fix the Page IDs section so the next skill doesn't have to search.
5. Search by title at most once per conversation.

## 2. Read before you work

Read in this order, and only what the job needs:

1. **Brain Index:** the map of where everything lives.
2. **Master Profile:** who the agent is, their market, clients, brand and goals. Its **My personality** section tells you how they like to work: use it to shape the structure of what you give them (length, order, detail, how many options, whether to recommend one), never the facts or the rules, and never mention it in anything a client sees.
3. **Compliance Guardrails** and **Voice Library:** always, before writing anything a client or the public will see.
4. **The SOP for this job**, if one exists in SOPs.
5. **AI Memory:** rows with Status "Active" for the Area you're working in, plus "General".
6. **Decisions Log:** rows with "Still Active" checked that touch this job, so you never suggest something the agent already decided against.
7. **Stories, Client FAQs and the Objection Bank** when you write anything a client or the public will see: use the agent's real stories (only rows marked Public in anything public), their approved answers, and their proof. Never invent a story, a result or an answer.

## 3. Where a new thing goes

Decide in this order:

1. **It's one more of something that already has a database** (a task, a piece of content, a client, an area, a meeting, a person, a tool): add a row. Put the details in the row's page. This is almost always the answer.
2. **It updates something on an existing page** (a new income goal, a new brokerage, a new rule): update that line in its section. Keep the heading and label; change only the value.
3. **It's a new kind of thing that will keep coming up:** ask the agent first. If they agree, create ONE new database inside the NEZ OS Brain page with a clear title, an icon, a one-line description, a Status and a Date. Put it under the right section on the main page, add it to the Brain Index table, save both its IDs in Page IDs, and add it to the Dashboard's **Your workspace** list under the same section.
4. **It's a one-time document** (an email, a landing page, an audit, a plan): add it as a row in Marketing Hub, never as a loose page at the top of the brain.
5. **It's ongoing work with a goal and an end** (a website, a class, a new lead source, a listing launch) and it isn't in **Projects** yet: ask "Want me to set this up as a project?" On yes, add one Projects row (Status Active, Pillar, Goal, Next Step, Start) and link its Tasks to it. Never add a project without asking.
6. **You don't know where it goes, or you're missing a fact you need:** don't guess. Ask once; if the agent can't answer now, add an **Open Questions** row (Question, Area, Status Open, Where It Goes, Found By, Date). When they answer later, save it where it belongs and set the row to Answered. **Draft Client FAQs:** every Client FAQs row in Draft has a matching Open Questions row ("Confirm your answer: [question]", Area Clients, Where It Goes "Client FAQs: [question]"). When the agent confirms the answer, set the FAQ to Approved and the Open Question to Answered. Skills use only Approved FAQs.

## The Inbox

The **Inbox** page (`inbox_page_id`) is where the agent drops anything: notes, links, transcripts, reviews, scripts, files. When they say "file my inbox" (or during a weekly review):
1. Go through the items one at a time. For each, say where it belongs (which page or database, and which line) and what you'd add to the brain.
2. Wait for their OK, then file it there and remove it from the Inbox.
3. Something not needed? Ask whether to archive it (move it to a page called "Archive" under the Inbox). Never delete it.
4. A review goes to Proof only if the agent confirms the client approved it. A story goes to Stories with "OK to Share" set by the agent. Never file passwords, Social Security numbers, bank details or other sensitive client information: tell the agent and leave it out.

## 4. Writing to Notion

- **IDs:** each database has two IDs in Page IDs: the `_db_id` opens the database, and the `_ds_id` (its `collection://` data source ID) is the one to use for querying and adding rows. If a `_ds_id` is blank, fetch the database once, copy its data source ID into Page IDs, and go on.
- **Dollar signs:** write every `$` as `\$` in page content and text properties (for example `\$425,000`). An unescaped `$` can turn into a math formula in Notion.
- **Select options:** a row can only use an option the database already has. To add a new option, update that column and list every existing option plus the new one (any option left out gets removed).
- **Dates:** use `YYYY-MM-DD`. When a time matters (meetings, saves), include the time in the agent's time zone. Your time may be a few minutes off, so never use your own timestamp to decide what's new; use Notion's created or last-edited times instead.
- **Sections, not the bottom:** when adding a line to a page, put it inside the matching section, never tacked onto the end of the page.
- **Safety net:** if a database you need is missing, search the brain once for a database with that exact title. If there isn't one, ask: "Your [name] isn't in your brain yet. Want me to add it now?" On yes, create ONE database with the standard layout from the skill, add it to the Brain Index, Page IDs and the Dashboard's Your workspace list, and continue. If the agent says no or it can't be created, give them the result in the chat and say you couldn't save it to Notion. Never create a second copy.

## 5. Logging changes

**Decisions Log.** When the agent makes a business or process decision (a new niche, a new lead source, dropping a tool, a pricing rule), add one row: Decision, Date, Pillar, Why, Decided By, Still Active checked. Then update the page the decision affects and name it in **Changes**. If a decision replaces an older one, uncheck Still Active on the old row.

**AI Memory.** When the agent corrects you or states a lasting preference, add one row:
- **Memory:** one or two plain sentences.
- **Type:** Preference, Correction, Lesson learned or Fact.
- **Area:** Brain, Leads, Clients, Content, Growth or General.
- **Applies To:** what it affects (for example "Instagram captions" or "all client texts").
- **Saved By:** Claude, ChatGPT or Me.
- **Status:** Active.

Before adding, check for an Active row that says the same thing. If the new row replaces an old one, set the old row to **Replaced**. Facts that already have a home (their brokerage, their income goal) stay in that home; don't copy them into AI Memory.

One-time instructions ("make this one shorter") are not memories. Only save what should apply next time too.

## 6. Never

- Create a second copy of a page or database that already exists.
- Rename, move or delete anything the agent made. Mark things Retired, Lost, Replaced or no longer active instead.
- Leave placeholder text like [ADD HERE] in a saved page.
- Store passwords, logins, Social Security numbers, card or bank account numbers, ID numbers, or private client financial details.
- Save sensitive personal details about clients (health, family situation, immigration status, finances) anywhere in the brain.
- Invent reviews, quotes, statistics, market numbers or facts. Numbers need a source and a date.
- Write anything public that breaks the Compliance Guardrails. Flag the issue and suggest safer wording instead.
- Remove or change the `nez-os-root` line on the main page.

## 7. Talking to the agent

- Plain language. Never show page IDs, property names or database jargon.
- Match their language: reply in Spanish if they write in Spanish.
- Ask before big changes. Small saves that a skill is clearly meant to make don't need a separate yes.
- After saving, say in one short line what you saved and where ("Saved to your Content Planner").
- No em dashes, anywhere: chat replies, Notion pages, files, tables, headings and lists. Before you send or save anything, scan it for em dashes and replace each one with a comma, a colon or a new sentence.
