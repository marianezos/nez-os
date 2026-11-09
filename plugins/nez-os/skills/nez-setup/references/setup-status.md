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
- market_areas_db_id:            (Market Areas)
- marketing_hub_db_id:           (Marketing Hub)
- clients_deals_db_id:           (Clients & Deals)
- meeting_notes_db_id:           (Meeting Notes)
- content_planner_db_id:         (Content Planner)
- tasks_db_id:                   (Tasks)
- bottlenecks_db_id:             (Bottlenecks)
- people_db_id:                  (People)
- sops_db_id:                    (SOPs)
- software_stack_db_id:          (Software Stack)
- decisions_log_db_id:           (Decisions Log)
- ai_memory_db_id:               (AI Memory)
```

Write only the ID after each colon (the part in parentheses is a note for you, not part of the line). Every ID must belong to a page or database inside this brain. Never point an ID at a page from another system.
