# Workspace build: every page and database in the NEZ OS Brain

The full list of what's in a NEZ OS brain, with every field and option. It matches the NEZ OS Brain template (template_version in `profile-changes.md`). /nez-setup uses it two ways:

- **Check mode** (every run on an existing brain): quietly compare the brain with this list and offer to add what's missing.
- **Build mode** (only if the agent can't duplicate the template): build the whole brain from this list.

If this file and the Notion template ever disagree, the template wins; tell Maria so she can update this file.

## Rules for both modes

- **Never** delete, rename or move anything the agent has, never touch existing rows, and never make a second copy. Find things by their saved ID first, then by exact title under the brain's main page.
- Ask before adding anything, with one question per run that lists everything missing ("Your brain is missing [list]. Want me to add them with the standard NEZ OS layout?"). If they say no, don't ask again this session.
- Keep every select option the agent added. Only add missing options.
- Save every new ID in Page IDs (both `_db_id` and `_ds_id` for databases), add every new database to the Brain Index table and the Dashboard's Your workspace list, and place it under its section on the main page.
- Write `$` as `\$` in Notion text.

---

## Pages

| Page | Icon | Section on main page | Page ID line | If missing, recreate with |
| --- | --- | --- | --- | --- |
| NEZ OS Brain (main page) | 🧠 | (root) | root_page_id | Build mode only. First line `nez-os-root: v1`, then the warning callout, the welcome callout, and the section headings below |
| Getting Started | 🚀 | Start here | (none) | Template only. Never recreate; point to the Vault |
| Brain Index | 🗂️ | Start here | brain_index_page_id | The "For AI" callout, the Where everything lives table (one row per page and database below), and the Rules for AI section from `../../../references/brain-rules.md` in short form |
| Dashboard | 📊 | Start here | dashboard_page_id | The "For AI" callout, This week at a glance, Goal tracker, Open bottlenecks, and Your workspace (every page and database by section) |
| Master Profile | 👤 | 01 · Brain | master_profile_page_id | `master-profile.md` |
| Voice Library | 🎙️ | 01 · Brain | voice_library_page_id | Headings in `voice.md` |
| Compliance Guardrails | 🛡️ | 01 · Brain | compliance_page_id | `compliance.md` |
| Offers & Services | 🎁 | 01 · Brain | offers_page_id | "For AI" callout (describe services in the agent's words, never promise results), then: For buyers (What's included, My buyer process, Special programs I know well), For sellers (My listing marketing plan, What's included, My seller process), Other clients I serve (Investors, Renters / landlords, Relocation), Free resources I offer (one bullet per resource with its link), Classes, events or workshops |
| Business Plan & Goals | 🎯 | 05 · Growth | business_plan_page_id | "For AI" callout, then: The big picture (income goal, average sale price, commission per side, split / fees, closings needed), The math (work backward) table with rows Closings, Contracts written, Appointments, Conversations, New leads and columns Per year, Per month, Per week, Top lead sources (focus here) as a numbered list of 3, This quarter (Quarter, Target closings, Top 3 priorities), My weekly rhythm, Weekly check-ins (newest first) |

**Main page sections, in order:** Start here · 01 · Brain: who you are · 02 · Leads: how people find you · 03 · Clients: who you're helping · 04 · Content: what you share · 05 · Growth: where you're going · Your team & how you work · Memory: what your AI remembers · Advisory Board: who you ask.

---

## Databases

Each block is ready for the Notion create-database tool. Title the database exactly as shown, put it under its section, and add the description.

### Proof (01 · Brain) · proof_db_id / proof_ds_id
Description: Real reviews, testimonials and results. Only use what clients approved, and never invent or edit a quote.
```sql
CREATE TABLE "Proof" (
  "Proof" TITLE,
  "Type" SELECT('Review':yellow, 'Testimonial':green, 'Result':blue, 'Video testimonial':pink),
  "Client" RICH_TEXT,
  "Quote / Details" RICH_TEXT,
  "Date" DATE,
  "Approved to Use" CHECKBOX,
  "Source Link" URL
)
```

### Market Areas (01 · Brain) · market_areas_db_id / market_areas_ds_id
Description: One fact file per city or neighborhood you serve. The row holds the quick facts; the page inside holds the full fact file. Describe places, never the people who live there.
```sql
CREATE TABLE "Market Areas" (
  "Area" TITLE,
  "Type" SELECT('City':blue, 'Neighborhood':green, 'Subdivision':purple, 'Zip code':gray),
  "Price Range" RICH_TEXT,
  "Highlights" RICH_TEXT,
  "Median Price" NUMBER FORMAT 'dollar',
  "Avg Days on Market" NUMBER,
  "Data Source" RICH_TEXT,
  "Data As Of" DATE,
  "Last Updated" DATE
)
```

### Marketing Hub (02 · Leads) · marketing_hub_db_id / marketing_hub_ds_id
Description: Emails, landing pages, funnels, lead magnets, ads and SEO audits your AI writes for you.
```sql
CREATE TABLE "Marketing Hub" (
  "Name" TITLE,
  "Type" SELECT('Email':orange, 'Email sequence':orange, 'Landing page':blue, 'Funnel':purple, 'Lead magnet':green, 'Ad':red, 'SEO audit':gray, 'Listing marketing':pink),
  "Status" STATUS('Draft':gray:to_do, 'In review':yellow:in_progress, 'Live':green:complete, 'Retired':red:complete),
  "Pillar" SELECT('Leads':blue, 'Clients':green, 'Content':pink, 'Growth':orange),
  "Date" DATE,
  "Link" URL,
  "Results" RICH_TEXT
)
```

### Clients & Deals (03 · Clients) · clients_deals_db_id / clients_deals_ds_id
Description: Active buyers, sellers and investors, from first conversation to closing. Your CRM stays the source of truth; this is what your AI needs to know.
```sql
CREATE TABLE "Clients & Deals" (
  "Client / Property" TITLE,
  "Type" SELECT('Buyer':blue, 'Seller':orange, 'Investor':purple, 'Renter':gray, 'Landlord':brown),
  "Stage" STATUS('Lead':gray:to_do, 'Active':blue:in_progress, 'Under contract':yellow:in_progress, 'Closed':green:complete, 'Lost':red:complete),
  "Area" RICH_TEXT,
  "Price" NUMBER FORMAT 'dollar',
  "Key Date" DATE,
  "Next Step" RICH_TEXT,
  "Lead Source" SELECT('Sphere':green, 'Referral':purple, 'Open house':orange, 'Social media':pink, 'Website':blue, 'Zillow / portal':gray, 'Paid ads':red, 'Sign call':yellow),
  "Notes" RICH_TEXT
)
```
Never store financial account numbers, SSNs or other sensitive client details here.

### Meeting Notes (03 · Clients) · meeting_notes_db_id / meeting_notes_ds_id
Description: Every client and internal meeting, with a summary and action items.
```sql
CREATE TABLE "Meeting Notes" (
  "Meeting" TITLE,
  "Type" SELECT('Buyer consult':blue, 'Listing appointment':orange, 'Client check-in':green, 'Team / internal':gray, 'Vendor / partner':purple),
  "Date" DATE,
  "With" RICH_TEXT,
  "Summary" RICH_TEXT,
  "Action Items" RICH_TEXT
)
```

### Objection Bank (03 · Clients) · objection_bank_db_id / objection_bank_ds_id
Description: The pushback you hear from each type of client and the answers that work for you: what's behind it, a question to ask first, your answer, a one-line text version and what not to say.
```sql
CREATE TABLE "Objection Bank" (
  "Objection" TITLE,
  "Client Type" SELECT('Seller':orange, 'Buyer':blue, 'Both':purple, 'First-time buyer':green, 'Investor':brown, 'Landlord':yellow, 'Renter':pink, 'Luxury':gray, 'New construction':red, 'Relocation':default, '55+ community':green, 'Commercial':brown, 'Land':yellow),
  "Category" SELECT('Commission & fees':red, 'Price':yellow, 'Timing':blue, 'Other agent':purple, 'Trust & process':green, 'Market':gray, 'Money & readiness':brown),
  "What's Behind It" RICH_TEXT,
  "Question to Ask" RICH_TEXT,
  "My Answer" RICH_TEXT,
  "Text Version" RICH_TEXT,
  "Don't Say" RICH_TEXT,
  "Proof Used" RICH_TEXT,
  "Status" SELECT('Starter':gray, 'Testing':yellow, 'Works':green, 'Retired':default),
  "Last Updated" DATE,
  "Notes" RICH_TEXT
)
```
In build mode, Stage 5 fills it; no starter rows are needed.

### Content Planner (04 · Content) · content_planner_db_id / content_planner_ds_id
Description: Every piece of content from idea to published: social, video, blog, newsletter and Google Business Profile.
```sql
CREATE TABLE "Content Planner" (
  "Title" TITLE,
  "Status" STATUS('Idea':gray:to_do, 'Scripting':purple:in_progress, 'Recording':blue:in_progress, 'Editing':yellow:in_progress, 'Scheduled':orange:in_progress, 'Published':green:complete),
  "Platform" MULTI_SELECT('Instagram':pink, 'Facebook':blue, 'TikTok':gray, 'YouTube':red, 'Google Business Profile':green, 'Newsletter':orange, 'Blog':brown, 'LinkedIn':blue),
  "Format" SELECT('Reel / Short':pink, 'Carousel':purple, 'Photo post':blue, 'Long video':red, 'Story':yellow, 'Email':orange, 'Blog post':brown),
  "Topic" SELECT('Market update':blue, 'Buyers':green, 'Sellers':orange, 'First-time buyers':purple, 'Listing':pink, 'Neighborhood':yellow, 'Personal / story':gray),
  "Language" SELECT('English':default, 'Español':red, 'Both':purple),
  "Publish Date" DATE,
  "Hook" RICH_TEXT,
  "Link" URL,
  "Views" NUMBER,
  "Leads" NUMBER
)
```

### Tasks (05 · Growth) · tasks_db_id / tasks_ds_id
Description: Your to-dos and your team's. Filter by priority or pillar to focus your day.
```sql
CREATE TABLE "Tasks" (
  "Task" TITLE,
  "Status" STATUS('Not started':gray:to_do, 'In progress':blue:in_progress, 'Waiting':yellow:in_progress, 'Done':green:complete),
  "Priority" SELECT('High':red, 'Medium':yellow, 'Low':gray),
  "Pillar" SELECT('Brain':purple, 'Leads':blue, 'Clients':green, 'Content':pink, 'Growth':orange),
  "Due Date" DATE,
  "Owner" PEOPLE,
  "Notes" RICH_TEXT
)
```

### Bottlenecks (05 · Growth) · bottlenecks_db_id / bottlenecks_ds_id
Description: What's slowing you down and how it got fixed.
```sql
CREATE TABLE "Bottlenecks" (
  "Bottleneck" TITLE,
  "Status" STATUS('Open':red:to_do, 'Fixing':yellow:in_progress, 'Fixed':green:complete),
  "Impact" SELECT('High':red, 'Medium':yellow, 'Low':gray),
  "Pillar" SELECT('Brain':purple, 'Leads':blue, 'Clients':green, 'Content':pink, 'Growth':orange),
  "Date Found" DATE,
  "The Fix" RICH_TEXT
)
```

### People (Your team & how you work) · people_db_id / people_ds_id
Description: You, your team and trusted partners: lenders, inspectors, title, attorneys and vendors. /nez-self adds each person's work style and how they like to be communicated with.
```sql
CREATE TABLE "People" (
  "Name" TITLE,
  "Role" SELECT('Me':red, 'Team member':purple, 'Assistant':purple, 'Lender':blue, 'Title / escrow':green, 'Attorney':gray, 'Inspector':orange, 'Contractor / vendor':brown, 'Stager / photographer':pink, 'Referral partner':yellow),
  "Company" RICH_TEXT,
  "Phone" PHONE_NUMBER,
  "Email" EMAIL,
  "Best Way to Reach" SELECT('Text':green, 'Call':blue, 'Email':gray),
  "Reports To" RICH_TEXT,
  "Personality" RICH_TEXT,
  "Communication Tips" RICH_TEXT COMMENT 'Length, format, lead with, directness, detail, updates',
  "Profile Source" SELECT('Own answers':green, 'Estimated':yellow),
  "Profile Date" DATE,
  "Status" SELECT('Active':green, 'Waiting for answers':yellow, 'Former':gray),
  "Human or AI" SELECT('Human':blue, 'AI':purple),
  "Other Results" RICH_TEXT COMMENT 'Test results the person chose to share, or Not shared. Never birth details',
  "Notes" RICH_TEXT
)
```

### SOPs (Your team & how you work) · sops_db_id / sops_ds_id
Description: How you do things, step by step. Ask your AI to "write an SOP for..." and it saves here.
```sql
CREATE TABLE "SOPs" (
  "SOP" TITLE,
  "Status" STATUS('Draft':gray:to_do, 'In use':green:complete),
  "Pillar" SELECT('Brain':purple, 'Leads':blue, 'Clients':green, 'Content':pink, 'Growth':orange),
  "Who Does It" RICH_TEXT,
  "Last Reviewed" DATE
)
```

### Software Stack (Your team & how you work) · software_stack_db_id / software_stack_ds_id
Description: Every tool you use and what it's for. NEVER store passwords here.
```sql
CREATE TABLE "Software Stack" (
  "Tool" TITLE,
  "Category" SELECT('CRM':blue, 'AI':purple, 'Social media':pink, 'Email':orange, 'Website':green, 'Video / design':red, 'Transaction':gray, 'Other':brown),
  "Used For" RICH_TEXT,
  "Connected to AI" CHECKBOX,
  "Monthly Cost" NUMBER FORMAT 'dollar',
  "Link" URL
)
```

### Decisions Log (Memory) · decisions_log_db_id / decisions_log_ds_id
Description: What changed, why, and who decided. Your AI checks this before suggesting something you already decided against.
```sql
CREATE TABLE "Decisions Log" (
  "Decision" TITLE,
  "Date" DATE,
  "Pillar" SELECT('Brain':purple, 'Leads':blue, 'Clients':green, 'Content':pink, 'Growth':orange),
  "Why" RICH_TEXT,
  "Changes" RICH_TEXT COMMENT 'Which pages or databases were updated because of this decision',
  "Decided By" RICH_TEXT,
  "Still Active" CHECKBOX
)
```

### AI Memory (Memory) · ai_memory_db_id / ai_memory_ds_id
Description: What your AI has learned working with you: preferences, corrections and lessons. Saved here so every AI tool remembers.
```sql
CREATE TABLE "AI Memory" (
  "Memory" TITLE,
  "Type" SELECT('Preference':purple, 'Correction':red, 'Lesson learned':green, 'Fact':blue),
  "Area" SELECT('Brain':purple, 'Leads':blue, 'Clients':green, 'Content':pink, 'Growth':orange, 'General':gray),
  "Applies To" RICH_TEXT,
  "Details" RICH_TEXT,
  "Saved By" SELECT('Claude':orange, 'ChatGPT':green, 'Me':gray),
  "Status" SELECT('Active':green, 'Replaced':gray),
  "Date" DATE
)
```

### Advisory Board (Advisory Board) · advisory_board_db_id / advisory_board_ds_id
Description: Your personal board of advisors. Each row's page is that advisor's brain. Run /nez-board to bring them a decision.
```sql
CREATE TABLE "Advisory Board" (
  "Advisor" TITLE,
  "Key" RICH_TEXT COMMENT 'Short id, like listings-strategist',
  "Kind" SELECT('Role':blue, 'Mentor':purple, 'Public figure':orange),
  "Seat" RICH_TEXT COMMENT 'The one question this advisor owns',
  "Status" SELECT('Active':green, 'Draft':yellow, 'Benched':gray),
  "Sources" NUMBER,
  "Version" NUMBER,
  "Last Refreshed" DATE
)
```

### Board Meetings (Advisory Board) · board_meetings_db_id / board_meetings_ds_id
Description: Every decision you brought to your advisory board, the call, and how it turned out. Your AI checks back on the Follow-up date.
```sql
CREATE TABLE "Board Meetings" (
  "Decision" TITLE,
  "Date" DATE,
  "Pillar" SELECT('Brain':purple, 'Leads':blue, 'Clients':green, 'Content':pink, 'Growth':orange),
  "Advisors" RICH_TEXT,
  "Call" SELECT('Go':green, 'No go':red, 'Go with changes':yellow, 'Need more info':gray),
  "Follow-up" DATE,
  "Outcome" SELECT('Not reviewed':gray, 'Worked':green, 'Mixed':yellow, 'Didn''t work':red, 'Didn''t do it':default),
  "What Happened" RICH_TEXT
)
```

---

## Check mode (every re-run)

Run quietly before the re-run menu. Say nothing if everything is there.

1. **Pages:** confirm each page in the Pages table opens (saved ID first, then exact title). Fix wrong IDs in Page IDs. Collect anything missing.
2. **Databases:** confirm each database above opens. Fix wrong IDs. Collect any missing database.
3. **Fields and options:** for each database that exists, compare its fields and select options with the block above. Collect missing fields and missing options. Never change a field's type, and never remove extra fields or options the agent added.
4. **Lists:** check that every database is in the Brain Index table and the Dashboard's Your workspace list.
5. **One question:** if anything was collected, ask once, listing it in plain words. On yes, add each item per the rules at the top. On no, skip it for this session.

## Build mode (only when duplicating the template fails twice)

Tell the agent: "No problem, I'll build your brain for you. It takes a few minutes." Then:

1. Create the main page "NEZ OS Brain" (🧠) where the agent chooses. Its first line must be `nez-os-root: v1`, followed by the warning callout "Keep the line above exactly as it is. It's how your AI finds your brain." and the section headings in order.
2. Create the pages in the Pages table under their sections (skip Getting Started), using the layouts named there.
3. Create every database above under its section, with its description.
4. Fill the Page IDs section, the Brain Index table and the Dashboard's Your workspace list.
5. Set `profile_version` and `template_version` in Setup Status to the current values in `profile-changes.md`, and add `workspace_source: built`.
6. Continue with Stage 1.
