# Setup Status lines

The Master Profile page ends with a section headed `## Setup Status`. NEZ OS skills read and write these exact lines. If the section is missing, add it at the very end of the Master Profile with every line below, values blank.

```
## Setup Status

- profile_version:
- template_version:
- workspace_source:
- industry_flow:
- stage_1_core_profile:
- stage_2_compliance:
- stage_3_voice_and_edge:
- stage_4_goals:
- stage_5_objection_bank:
- stage_6_market_areas:
- setup_complete:
- services_offer_asked:
- nez_first_shown:
- self_test_last_run:
- self_profile:
- projects_offered:
- voice_profile:
- last_check_in:
- last_review:
- path_not_now:
```

## How to write them

- `profile_version` and `template_version`: set on first run to the current values in `templates/profile-changes.md`, and raised by PROFILE UPDATE. Blank means version 1.
- `workspace_source`: `template` if they duplicated the NEZ OS Brain template, `built` if setup built it.
- `industry_flow`: set by /nez-setup on first run. `real-estate` for now (see `industries/README.md`).
- When a stage is saved, set its line to the date in `YYYY-MM-DD` format, for example `- stage_1_core_profile: 2026-11-09`.
- A stage in progress: `in progress: group B done` (Stage 1), or `in progress: sellers, buyers` (Stage 5, the client types done so far).
- `stage_6_market_areas`: the date plus the count, for example `2026-11-09 (3 areas)`.
- A stage the agent chose to skip entirely: `skipped YYYY-MM-DD`.
- `setup_complete`: the date only when all 6 stages are done or skipped.
- `services_offer_asked`: `yes` once the Stage 1 services offer has been asked, whatever the answer. Never ask it again.
- `nez_first_shown`: the date the NEZ OS line (`references/nez-first.md`) was shown. Never show it again unless the agent asks.
- `projects_offered`: the date /nez-next offered Claude Projects (`../../nez-next/references/projects.md`). Written once; never offered again unless the agent asks.
- `self_profile`: the date /nez-self last saved the agent's own profile.
- `self_test_last_run`: the date of the last self-test.
- `voice_profile`: the date an approved voice summary was saved (by Stage 3), or the agent's own voice skill was saved (by /nez-voice).
- `last_check_in`: written by /nez-goals (weekly check-ins, logged on the Quarterly Goals page).
- `last_review`: written by /nez-review (business review against the plan).
- `path_not_now`: written by /nez-next. Optional path steps the agent said not now to, with the date, for example `nez-dashboard 2026-11-12, nez-bottleneck 2026-11-12`. Never recommend those on the path again.
- Never remove a line. Only fill in or update values. If an older brain has the old stage lines (`stage_1_you_and_market` and so on), leave them and add the new lines below them.

---

# Page IDs lines

The Master Profile also has a section headed `## Page IDs`, right after Setup Status. /nez-setup fills it on first run so every other skill can open pages directly instead of searching. If the section is missing, add it with every line below.

```
## Page IDs

- root_page_id:                  (the NEZ OS Brain main page)
- brain_index_page_id:           (Brain Index)
- inbox_page_id:                (Inbox)
- master_profile_page_id:        (Master Profile)
- voice_library_page_id:         (Voice Library)
- compliance_page_id:            (Compliance Guardrails)
- offers_page_id:                (Offers & Services)
- business_plan_page_id:         (Business Plan & Goals)
- quarterly_goals_page_id:       (Quarterly Goals)
- business_reviews_page_id:      (Business Reviews)
- dashboard_page_id:             (Dashboard)
- dashboards_db_id:              (Dashboards, inside the Dashboard page)
- dashboards_ds_id:             (Dashboards data source)
- proof_db_id:                   (Proof)
- proof_ds_id:                  (Proof data source)
- market_areas_db_id:            (Market Areas)
- market_areas_ds_id:           (Market Areas data source)
- voices_db_id:                 (Voices, inside the Voice Library page)
- voices_ds_id:                 (Voices data source)
- stories_db_id:                (Stories)
- stories_ds_id:                (Stories data source)
- marketing_hub_db_id:           (Marketing Hub)
- marketing_hub_ds_id:          (Marketing Hub data source)
- clients_deals_db_id:           (Clients & Deals)
- clients_deals_ds_id:          (Clients & Deals data source)
- meeting_notes_db_id:           (Meeting Notes)
- meeting_notes_ds_id:          (Meeting Notes data source)
- objection_bank_db_id:          (Objection Bank)
- objection_bank_ds_id:         (Objection Bank data source)
- client_faqs_db_id:            (Client FAQs)
- client_faqs_ds_id:            (Client FAQs data source)
- content_planner_db_id:         (Content Planner)
- content_planner_ds_id:        (Content Planner data source)
- coach_library_db_id:           (Coach Library)
- coach_library_ds_id:          (Coach Library data source)
- projects_db_id:               (Projects)
- projects_ds_id:               (Projects data source)
- tasks_db_id:                   (Tasks)
- tasks_ds_id:                  (Tasks data source)
- bottlenecks_db_id:             (Bottlenecks)
- bottlenecks_ds_id:            (Bottlenecks data source)
- people_db_id:                  (People)
- people_ds_id:                 (People data source)
- sops_db_id:                    (SOPs)
- sops_ds_id:                   (SOPs data source)
- software_stack_db_id:          (Software Stack)
- software_stack_ds_id:         (Software Stack data source)
- ai_employees_db_id:            (AI Employees)
- ai_employees_ds_id:           (AI Employees data source)
- decisions_log_db_id:           (Decisions Log)
- decisions_log_ds_id:          (Decisions Log data source)
- ai_memory_db_id:               (AI Memory)
- ai_memory_ds_id:              (AI Memory data source)
- open_questions_db_id:         (Open Questions)
- open_questions_ds_id:         (Open Questions data source)
- advisory_board_db_id:          (Advisory Board)
- advisory_board_ds_id:         (Advisory Board data source)
- board_meetings_db_id:          (Board Meetings)
- board_meetings_ds_id:          (Board Meetings data source)
```

Each database has a `_db_id` (opens the database) and a `_ds_id` (its `collection://` data source ID, used to query and add rows). Save both.

Write only the ID after each colon (the part in parentheses is a note for you, not part of the line). Every ID must belong to a page or database inside this brain. Never point an ID at a page from another system.
