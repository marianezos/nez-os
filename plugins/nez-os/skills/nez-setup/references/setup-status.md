# Setup Status lines

The Master Profile page ends with a section headed `## Setup Status`. NEZ OS skills read and write these exact lines. If the section is missing, add it at the very end of the Master Profile with every line below, values blank.

```
## Setup Status

- stage_1_you_and_market:
- stage_2_clients_and_difference:
- stage_3_brand_and_rules:
- stage_4_goals:
- stage_5_tools:
- stage_6_areas:
- setup_complete:
- voice_profile:
- last_check_in:
- last_review:
```

## How to write them

- When a stage is saved, set its line to the date in `YYYY-MM-DD` format, for example `- stage_1_you_and_market: 2026-11-09`.
- A stage the agent chose to skip entirely: write `skipped YYYY-MM-DD`.
- `setup_complete`: write the date only when all 6 stages are done or skipped.
- `voice_profile`: written by /nez-voice (or by setup if the agent pastes a finished voice profile).
- `last_check_in`: written by /nez-goals (weekly check-ins).
- `last_review`: written by /nez-goals or a monthly review.
- Never remove a line. Only fill in or update values.

---

# Page IDs lines

The Master Profile also has a section headed `## Page IDs`, right after Setup Status. /nez-setup fills it on first run so every other skill can open pages directly instead of searching. If the section is missing, add it with every line below.

```
## Page IDs

- root_page_id:                  (the NEZ OS Brain main page)
- brain_index_page_id:           (Brain Index)
- master_profile_page_id:        (Master Profile)
- voice_library_page_id:         (Voice Library)
- compliance_page_id:            (Compliance Guardrails)
- offers_page_id:                (Offers & Services)
- business_plan_page_id:         (Business Plan & Goals)
- dashboard_page_id:             (Dashboard)
- proof_db_id:                   (Proof)
- proof_ds_id:                  (Proof data source)
- market_areas_db_id:            (Market Areas)
- market_areas_ds_id:           (Market Areas data source)
- marketing_hub_db_id:           (Marketing Hub)
- marketing_hub_ds_id:          (Marketing Hub data source)
- clients_deals_db_id:           (Clients & Deals)
- clients_deals_ds_id:          (Clients & Deals data source)
- meeting_notes_db_id:           (Meeting Notes)
- meeting_notes_ds_id:          (Meeting Notes data source)
- objection_bank_db_id:          (Objection Bank)
- objection_bank_ds_id:         (Objection Bank data source)
- content_planner_db_id:         (Content Planner)
- content_planner_ds_id:        (Content Planner data source)
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
- decisions_log_db_id:           (Decisions Log)
- decisions_log_ds_id:          (Decisions Log data source)
- ai_memory_db_id:               (AI Memory)
- ai_memory_ds_id:              (AI Memory data source)
- advisory_board_db_id:          (Advisory Board)
- advisory_board_ds_id:         (Advisory Board data source)
- board_meetings_db_id:          (Board Meetings)
- board_meetings_ds_id:          (Board Meetings data source)
```

Each database has a `_db_id` (opens the database) and a `_ds_id` (its `collection://` data source ID, used to query and add rows). Save both.

Write only the ID after each colon (the part in parentheses is a note for you, not part of the line). Every ID must belong to a page or database inside this brain. Never point an ID at a page from another system.
