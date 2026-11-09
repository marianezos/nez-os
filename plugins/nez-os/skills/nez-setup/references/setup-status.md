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
