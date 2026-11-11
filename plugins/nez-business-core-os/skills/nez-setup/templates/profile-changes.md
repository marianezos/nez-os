# Profile versions

Every brain has a `profile_version` line in the Master Profile's Setup Status. When /nez-setup runs on a brain that already exists, it compares that number with the current version below. If the brain is behind, setup offers to add only what's new (see PROFILE UPDATE in `SKILL.md`). Nothing the agent already saved is changed.

**Current profile_version: 2**
**Current template_version: 2026-11-10**

## Rules for adding a version (for Maria)

1. Only add things: new lines, new sections, new databases, new select options. Never rename or delete anything agents already have.
2. Add a new version section below listing each change, where it goes, and what fills it (a setup question, a skill, or automatic).
3. Raise the current version numbers above, and update the NEZ OS Brain template in Notion so new copies start at the current version.
4. Update `master-profile.md`, `workspace-build.md` and `../references/setup-status.md` to match.
5. Add one plain-language line to the NEZ OS changelog in the Vault so members know what's new.

## Version 1 (NEZ OS Brain template, 2026-11-09)

The first template. A brain with no `profile_version` line is version 1. You can spot it by the old Setup Status lines: `stage_1_you_and_market`, `stage_2_clients_and_difference`, `stage_3_brand_and_rules`, `stage_5_tools`, `stage_6_areas`.

## Version 2 (2026-11-10)

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
| My personality section (14 blank lines) and Setup Status lines `self_profile` and `projects_offered` | Master Profile, before My goals this year | Add the heading, callout and blank lines from `master-profile.md`. /nez-self fills them; setup never asks these |
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
| Where my business comes from (biggest first) | My clients | Stage 1 C9 |
| How I use my CRM | My tools | Stage 1 B3 |
| Calendar or scheduling | My tools | Stage 1 B4 |
| Where my branding stands | My brand | Stage 1 D1 |
| YouTube | My brand | Stage 1 B7 |
| My 12-month goal in my words | My goals this year | Stage 4 Q1 |

**Moved sections** (version 1 had these elsewhere; copy the values, never delete the old lines):
- "My ideal clients" → "My clients" (worries, what they need to hear).
- "What makes me different" → "My edge" (what I do better, niche, story).
- The CRM line under "How I work" → "My tools."
- "Required on all marketing" values → Compliance Guardrails, My details. Then leave the version 1 lines where they are.

Stage 2 (compliance), Stage 3 (voice and edge), Stage 5 (objection bank) and the self-test changed a lot in version 2. If those stages were done in version 1, don't redo them automatically: offer them once, as "new and improved," in the update summary.
