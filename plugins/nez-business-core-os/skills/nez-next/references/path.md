# The NEZ OS path

The order /nez-next walks agents through. Walk top to bottom and recommend the first step that is not done.

**Status:** `live` = skill is in this plugin. `vault` = not a skill yet; recommend the Vault prompt named in the last column.

## Urgent (check before the path)

| Rule | Recommend |
| --- | --- |
| A Clients & Deals row is "Under contract" with a Key Date within the next 3 days | Review that deadline today. If /nez-transaction is available, use it; otherwise Vault prompt "Contract to Close Timeline" |
| 3 or more Tasks are not Done and due today or earlier | Clear overdue tasks first: list them and suggest the top 3 |

## The path

| # | Stage | Step | Skill | Status | Done when | Vault prompt if no skill |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Foundation | Core profile | /nez-setup | live | `stage_1_core_profile` has a date | Create My NEZ OS Master Profile |
| 2 | Foundation | Compliance | /nez-setup | live | `stage_2_compliance` has a date | Compliance Guardrails for Every Draft |
| 3 | Foundation | Voice and edge | /nez-setup | live | `stage_3_voice_and_edge` has a date, or Voice Library has real content | Teach AI How I Actually Talk |
| 4 | Foundation | Your personality and work style | /nez-self | live | `self_profile` has a date, or the Master Profile's Work style line is filled in | (none: run /nez-self) |
| 5 | Foundation | Goals | /nez-setup | live | `stage_4_goals` has a date | My One-Page Business Plan |
| 6 | Foundation | Objection bank | /nez-setup | live | `stage_5_objection_bank` has a date, or the Objection Bank has at least 3 rows with Status Testing or Works | (none: run /nez-setup) |
| 7 | Foundation | Market areas | /nez-setup | live | `stage_6_market_areas` has a date, or Market Areas has at least 1 row | (none: run /nez-setup) |
| 8 | Foundation | Setup self-test | /nez-setup | live | `self_test_last_run` has a date | (none: run /nez-setup and choose the self-test) |
| 9 | Plan | Weekly rhythm | /nez-goals | vault | `last_check_in` has a date | Friday Weekly Review |
| 10 | Clients | Texting approval | /nez-a2p | vault | Software Stack lists a CRM and the agent has said texting is approved (Decisions Log row mentioning A2P or texting approval) | (none yet: tell them A2P help is coming to NEZ OS and is covered live in the community) |
| 11 | Leads | Your lead magnet | /nez-lead-magnet | vault | Marketing Hub has a row with Type "Lead magnet" | Find My Best Lead Magnet |
| 12 | Growth | Set up your advisory board | /nez-advisor | live | Advisory Board has at least 1 Active row | (none: run /nez-advisor) |
| 13 | Growth | Meet your advisory board | /nez-board | live | Board Meetings has at least 1 row | (none: run /nez-board) |
| 14 | Content | Your first content week | /nez-content | vault | Content Planner has at least 3 rows with a Publish Date | Plan My Week of Content |

## Upkeep (when the path is done)

Recommend the first one that applies:

| Rule | Recommend | Vault prompt if no skill |
| --- | --- | --- |
| A Board Meetings row has a Follow-up date that has passed and Outcome "Not reviewed" | Check how that decision turned out (/nez-board) | (none) |
| `last_check_in` is more than 7 days ago | Weekly check-in (/nez-goals) | Friday Weekly Review |
| Content Planner has nothing with a Publish Date in the next 14 days | Plan content (/nez-content) | Plan My Week of Content |
| A Bottlenecks row is Open with High impact | Work on that bottleneck: name it and suggest one first fix | (none) |
| A Market Areas row has Data As Of older than 90 days, or no data at all | Refresh that area's numbers with a source and date | (none) |
| `last_review` is empty or more than 30 days ago | Monthly review (/nez-goals) | Friday Weekly Review |
| The agent mentions a big decision (hiring, ads, joining a team, going full time) | Bring it to the board (/nez-board) | (none) |
| The agent mentions a coach, author or creator they learn from | Add them as a simulated advisor (/nez-advisor) | (none) |
| Nothing else applies | Reconnect with past clients | Past Client Check-In That Isn't Awkward |

## Skip rules

- Skip step 9 (texting approval) if Software Stack shows no CRM at all; recommend adding a CRM to their plan instead only if they ask.
- Never recommend a skill that is not in your available skills list.
