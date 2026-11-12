# Profile versions

Every brain has a `profile_version` line in the Master Profile's Setup Status. When /nez-setup runs on a brain that already exists, it compares that number with the current version below. If the brain is behind, setup offers to add only what's new (see PROFILE UPDATE in `SKILL.md`). Nothing the agent already saved is changed.

**Current profile_version: 3**
**Current template_version: 2026-11-11**

## Rules for adding a version (for Maria)

1. Only add things: new lines, new sections, new databases, new select options. Never rename or delete anything agents already have.
2. Add a new version section below listing each change, where it goes, and what fills it (a setup question, a skill, or automatic).
3. Raise the current version numbers above, and update the NEZ OS Brain template in Notion so new copies start at the current version.
4. Update `master-profile.md`, `workspace-build.md` and `../references/setup-status.md` to match.
5. Add one plain-language line to the NEZ OS changelog in the Vault so members know what's new.

## Version 1 (NEZ OS Brain template, 2026-11-09)

The first template. A brain with no `profile_version` line is version 1. You can spot it by the old Setup Status lines: `stage_1_you_and_market`, `stage_2_clients_and_difference`, `stage_3_brand_and_rules`, `stage_5_tools`, `stage_6_areas`.

## Version 2 (2026-11-10, template updated 2026-11-11)

**Added automatically (no questions):**

| Change | Where | How |
| --- | --- | --- |
| Setup Status lines: `profile_version`, `template_version`, `industry_flow`, `stage_1_core_profile`, `stage_2_compliance`, `stage_3_voice_and_edge`, `stage_5_objection_bank`, `stage_6_market_areas`, `services_offer_asked`, `nez_first_shown`, `self_test_last_run` | Master Profile, Setup Status | Add any missing line. Keep the old version 1 lines and their values. Carry progress over: if `stage_1_you_and_market` has a date, write `in progress: group A done` on `stage_1_core_profile` (the other groups are new); if `stage_6_areas` has a date, copy it to `stage_6_market_areas`. Set `industry_flow: real-estate`. |
| Page IDs: `objection_bank_db_id`, `objection_bank_ds_id` | Master Profile, Page IDs | Workspace check fills them |
| Objection Bank database | Under 03 · Clients | Workspace check offers it |
| Objection Bank fields: What's Behind It, Text Version, Don't Say, Proof Used; 10 new Client Type options | Objection Bank | Workspace check adds them |
| Market Areas fields: Price Range, Last Updated | Market Areas | Workspace check adds them |
| Your workspace list | Dashboard | Workspace check adds it |
| My details section | Compliance Guardrails, at the top | Add the heading and blank lines from `compliance.md` |
| How I sound lines (Sentences, Length I like, Em dashes), Voice summary, Sample messages in my voice, Gaps to watch | Voice Library | Add any missing heading or line |
| My personality section (16 blank lines) and Setup Status lines `self_profile` and `projects_offered` | Master Profile, before My goals this year | Add the heading, callout and blank lines from `master-profile.md`. /nez-self fills them; setup never asks these |
| Voices database (inside the Voice Library page), Page IDs `voices_db_id` and `voices_ds_id`, and a "My voice skills" section with a Default voice line on the Voice Library page | Voice Library | Workspace check offers the database; add the section and lines |
| Inbox page (Start here), Stories (01 · Brain), Client FAQs (03 · Clients), Projects (05 · Growth, with a Project relation on Tasks), Open Questions (Memory), and their Page IDs | Main page | Workspace check offers each one |
| Voice Library: Language rules line, Before and after table, Paste-ready instructions section | Voice Library | Add any missing heading or line |
| People fields: Reports To, Personality, Communication Tips, Profile Source, Profile Date, Status, Human or AI, Other Results; Role option "Me" | People | Workspace check adds them |

**New lines that need an answer** (ask only the ones that are blank, one at a time):

| Line | Section | Question |
| --- | --- | --- |
| Business or brand name | About me | Stage 1 A2 |
| How I run my business, Team details | About me | Stage 1 A4 and follow-up |
| States I'm licensed in | About me | Stage 1 A6 |
| Surrounding areas I also serve | My market | Stage 1 A9 |
| What my market is doing right now | My market | Stage 1 C2 |
| Mostly buyers, sellers or both | My clients | Stage 1 C4 |
| Client types I work with | My clients | Stage 1 C5 |
| My specialty | My clients | Stage 1 C6 |
| Where my business comes from (biggest first) | My clients | Stage 1 C11 |
| How I use my CRM | My tools | Stage 1 B3 |
| Calendar or scheduling | My tools | Stage 1 B4 |
| Where my branding stands | My brand | Stage 1 D1 |
| YouTube | My brand | Stage 1 B7 |
| My 12-month goal in my words | My goals this year | Stage 4 Q1 |
| My top 3 goals for the next 90 days, and why | My goals this year | Stage 4 Q2 |
| What a good month looks like | My goals this year | Stage 4 Q3 |
| What makes them reach out for help | My clients | Stage 1 C7 |
| My boundaries (5 lines) | My boundaries, after How I work | Stage 1 B11 to B15 |
| Client FAQs (3 to 5 rows) | Client FAQs | Stage 1 C10 |
| Stories (origin, a client win, a lesson, a belief) | Stories | Stage 3 Part 1 Q5 to Q7 |

**Moved sections** (version 1 had these elsewhere; copy the values, never delete the old lines):
- "My ideal clients" → "My clients" (worries, what they need to hear).
- "What makes me different" → "My edge" (what I do better, niche, story).
- The CRM line under "How I work" → "My tools."
- "Required on all marketing" values → Compliance Guardrails, My details. Then leave the version 1 lines where they are.

Stage 2 (compliance), Stage 3 (voice and edge), Stage 5 (objection bank) and the self-test changed a lot in version 2. If those stages were done in version 1, don't redo them automatically: offer them once, as "new and improved," in the update summary.

## Version 3 (2026-11-11)

**Added automatically (no questions):**

| Change | Where | How |
| --- | --- | --- |
| My business numbers section (callout and 51 blank lines) | Master Profile, right after My goals this year | Add the heading, callout and blank lines from `master-profile.md`. /nez-bizplan fills them; setup never asks these |
| My business plan heading with a "Last updated" line | Business Plan & Goals, right after This quarter | Add the heading and a blank Last updated line. /nez-bizplan writes the plan under it |
| Latest review line in This quarter; source tally format in the Weekly check-ins note | Business Plan & Goals | Add the line and update the note. /nez-review fills the line |
| Dashboards database and Page IDs `dashboards_db_id`, `dashboards_ds_id` | Inside the Dashboard page, at the bottom | Workspace check offers it |
| Status option Reviewing, and fields Status Changed and Needs from Me | Content Planner | Workspace check adds them |
| Coach Library database and Page IDs `coach_library_db_id`, `coach_library_ds_id` | 04 · Content, after Content Planner | Workspace check offers it |
| Library Folders and Board Updates headings | Master Profile, after My business numbers | Add the empty headings |
| Setup Status lines `path_not_now`, `last_brain_check`, `brain_check_schedule` | Master Profile, Setup Status | Add the blank lines. /nez-next and /nez-brain-check fill them |
| AI Employees database and Page IDs `ai_employees_db_id`, `ai_employees_ds_id` | Your team & how you work, after Software Stack | Workspace check offers it |
| Owner, Hours per Week, Pain, Automatable, Fix Type, AI Employee, Estimated Hours Saved, Actual Hours Saved, Fix Cost, Check By fields; Status options Planned, Dropped, Kept human | Bottlenecks | Workspace check adds the fields and options |
| Quarterly Goals page and Page ID `quarterly_goals_page_id` | Inside Business Plan & Goals, at the bottom | Workspace check offers it |
| Business Reviews page and Page ID `business_reviews_page_id` | Inside Business Plan & Goals, at the bottom | Workspace check offers it |

**New lines that need an answer:** none. /nez-bizplan asks for them when the agent builds a plan.
