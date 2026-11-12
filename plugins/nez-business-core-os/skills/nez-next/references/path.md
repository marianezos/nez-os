# The NEZ OS path

The order /nez-next walks agents through. Walk top to bottom and recommend the first step that is not done.

**Status:** `live` = a skill that has shipped (recommend it only if it's in the agent's available skills; otherwise tell them to install its plugin). `vault` = not a skill yet: recommend the Vault prompt in the last column, or the skill if it now appears in available skills. When a skill ships, change its status to `live`.

## Urgent (check before the path)

| Rule | Recommend |
| --- | --- |
| A Clients & Deals row is "Under contract" with a Key Date within the next 3 days | Review that deadline today. If /nez-transaction is available, use it; otherwise the Vault prompt "Contract to Close Timeline" |
| 3 or more Tasks are not Done and due today or earlier | Clear overdue tasks first: list them and suggest the top 3 |

## The path

| # | Stage | Step | Skill | Plugin | Status | Done when | Why it matters | Vault prompt if no skill |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Foundation | Core profile | /nez-setup | nez-business-core-os | live | `stage_1_core_profile` has a date | Every skill reads it. Without it, your AI writes like anyone | Create My NEZ OS Master Profile |
| 2 | Foundation | Compliance | /nez-setup | nez-business-core-os | live | `stage_2_compliance` has a date | Everything public comes out with your disclosure line and Fair Housing safe | Compliance Guardrails for Every Draft |
| 3 | Foundation | Voice and edge | /nez-setup | nez-business-core-os | live | `stage_3_voice_and_edge` has a date, or Voice Library has real content | Drafts sound like you and lead with what makes you different | Teach AI How I Actually Talk |
| 4 | Foundation | Your personality and work style | /nez-self | nez-business-core-os | live | `self_profile` has a date, or the Work style line is filled in | Plans and scripts fit how you actually work | (none: run /nez-self) |
| 5 | Foundation | Your voice skill | /nez-voice | nez-business-core-os | live | Voices has an Active row with For "Self" | Every draft sounds exactly like you, and gets better from your edits | Teach AI How I Actually Talk |
| 6 | Foundation | Goals | /nez-setup | nez-business-core-os | live | `stage_4_goals` has a date | Turns your goal into weekly numbers you can track | My One-Page Business Plan |
| 7 | Foundation | Objection bank | /nez-setup | nez-business-core-os | live | `stage_5_objection_bank` has a date, or the Objection Bank has at least 3 rows with Status Testing or Works | Answers ready for the pushback you hear most | (none: run /nez-setup) |
| 8 | Foundation | Market areas | /nez-setup | nez-business-core-os | live | `stage_6_market_areas` has a date, or Market Areas has at least 1 row | Real local detail for listings and content | (none: run /nez-setup) |
| 9 | Foundation | Setup self-test | /nez-setup | nez-business-core-os | live | `self_test_last_run` has a date | Shows your AI using your brain and what's still missing | (none: run /nez-setup and choose the self-test) |
| 10 | Plan | Your business plan | /nez-bizplan | nez-business-core-os | live | My business numbers has a Last plan date | Your exact split and fees, the real math, what's holding you back, and a 90-day roadmap | My One-Page Business Plan |
| 11 | Plan | Your quarter and weekly check-ins | /nez-goals | nez-business-core-os | live | Current quarter in My business numbers matches this quarter, and `last_check_in` has a date | Turns your plan into this quarter's targets, a 13-week plan, and a 10-minute weekly check-in | Friday Weekly Review |
| 12 | Plan | Your first business review | /nez-review | nez-business-core-os | live | `last_review` has a date | Shows what's working, what's not and what to change, from your real numbers, before small problems become a bad year | My One-Page Business Plan |
| 13 | Plan | Your dashboard (optional) | /nez-dashboard | nez-business-core-os | live | Dashboards has at least 1 Active row | Your numbers, tasks and follow-ups on one screen, so you start each day knowing what matters | (none) |
| 14 | Plan | Your biggest time drain (optional) | /nez-bottleneck | nez-business-core-os | live | Bottlenecks has at least 1 row | Finds the work eating your week and the cheapest way to fix it | (none) |
| 15 | Clients | Texting approval | /nez-a2p | nez-real-estate-os | vault | A Decisions Log row mentions A2P or texting approval | Texts to your database actually get delivered | (none yet: tell them A2P help is coming to NEZ OS and is covered live in the community) |
| 16 | Leads | Your lead magnet | /nez-lead-magnet | nez-marketing-os | vault | Marketing Hub has a row with Type "Lead magnet" | A reason for strangers to give you their contact info | Find My Best Lead Magnet |
| 17 | Growth | Set up your advisory board | /nez-advisor | nez-business-core-os | live | Advisory Board has at least 1 Active row | A board that reads your business for every big decision | (none: run /nez-advisor) |
| 18 | Growth | Meet your advisory board | /nez-board | nez-business-core-os | live | Board Meetings has at least 1 row | Pressure-test your next big decision before you spend on it | (none: run /nez-board) |
| 19 | Content | Your first content week | /nez-content | nez-studio-os | vault | Content Planner has at least 3 rows with a Publish Date | Consistent content in your voice brings leads to you | Plan My Week of Content |

## Skip rules

- **Texting approval:** skip if Software Stack and My tools show no CRM at all.
- **YouTube steps and YouTube upkeep:** skip if My brand's YouTube line is blank or says they don't plan to start one.
- **Plugin not installed:** never recommend a `live` skill that isn't in your available skills. Name its plugin and say to install it from the NEZ OS marketplace; use the next installed step as the recommendation.
- **Voice skill:** if they say they don't want a voice skill, treat that step as done for now (they can run /nez-voice any time).
- **Not real estate:** if `industry_flow` isn't `real-estate`, skip the objection bank, market areas and texting approval steps.
- **First review:** skip it until `last_check_in` has a date and Quarterly Goals shows at least 4 weekly check-ins, so there's real data to review. Move on to the next step meanwhile.
- **Brain check "not now":** set `brain_check_schedule` to the schedule plus `snoozed until` one period from today (for example `weekly, snoozed until 2026-11-19`). "Stop reminding me": set it to `off`. Either way, say one line and go on.
- **Optional steps (marked optional):** recommend each one once. If the agent says not now, add it to `path_not_now` in Setup Status (for example `nez-dashboard 2026-11-12`) and treat it as done. Never recommend it again on the path; it stays in the goal menu and the Anytime list.

## Upkeep (when the path is done)

Recommend the first one that applies. A rule that names a skill applies only if that skill is in your available skills or has a Vault prompt.

| Rule | Recommend | Vault prompt if no skill |
| --- | --- | --- |
| A Board Meetings row has a Follow-up date that has passed and Outcome "Not reviewed" | Check how that decision turned out (/nez-board) | (none) |
| `last_check_in` is more than 7 days ago | Weekly check-in (/nez-goals) | Friday Weekly Review |
| A Bottlenecks row is Fixing or Fixed with a Check By date of today or earlier and no Actual Hours Saved | Check your fix: did it save the time? (/nez-bottleneck) | none |
| A new quarter started and Quarterly Goals has no section for it | Set up next quarter (/nez-goals, option C) | Friday Weekly Review |
| The CRM is GoHighLevel and no Decisions Log or Marketing Hub row shows a CRM map | Map your CRM pipeline and automations (/nez-crm) | (none) |
| `last_review` is empty or more than 30 days ago and there have been at least 2 weekly check-ins, or the quarter ends within 14 days and there is no review this quarter | Business review against your plan (/nez-review) | Friday Weekly Review |
| Content Planner has nothing with a Publish Date in the next 14 days | Plan content (/nez-content) | Plan My Week of Content |
| A video publishes in the next 7 days and its row has no Hook or script | Write the script (/nez-content) | Plan My Week of Content |
| The newest Marketing Hub newsletter (Type Email, name includes "newsletter") is more than 35 days old | Send a newsletter (/nez-newsletter) | (none) |
| The newest Marketing Hub "SEO audit" row is more than 90 days old, or the website changed | Run a site check (/nez-site-audit or /nez-seo) | (none) |
| A brain check is due: `brain_check_schedule` isn't `off`, isn't snoozed past today, and `last_brain_check` is empty or older than the schedule (7 days if weekly or blank, 14 for every 2 weeks, 30 for monthly), and `stage_1_core_profile` has a date | Brain check: a 10-minute tune-up of your brain (/nez-brain-check). Not now? Say so and it waits one more period; "stop reminding me" turns it off | (none) |
| The Inbox has 3 or more items | File the inbox: say "file my inbox" (any NEZ OS skill can do it) | (none) |
| Open Questions has 3 or more Open rows | Answer the top 3 open questions (name them) | (none) |
| A Projects row is Active with a Due date that has passed, or no Next Step | Update that project: name it and ask for its next step | (none) |
| An AI Employees row is Active with a Review Date of today or earlier | Review that AI employee: is it still doing its job well? (/nez-org-chart) | (none) |
| A Master Coach exists and the Coach Library has 10 or more Business advice, Sales pitch or Story rows created since the Master Coach was last edited, and the agent hasn't declined that count (`master_coach_refresh_declined`) | Refresh your Master Coach (/nez-advisor, option 4) | (none) |
| A Bottlenecks row is Open with High impact | Work on that bottleneck: name it and suggest one first fix | (none) |
| A Market Areas row has Data As Of older than 90 days, or no data at all | Refresh that area's numbers with a source and date | (none) |
| Business Plan & Goals hasn't changed in 90 days, or a new quarter started | Update the plan (/nez-bizplan) | My One-Page Business Plan |
| The agent mentions a big decision (hiring, ads, joining a team, going full time) | Bring it to the board (/nez-board) | (none) |
| The agent mentions a coach, author or creator they learn from | Add them as a simulated advisor (/nez-advisor) | (none) |
| Nothing else applies | Reconnect with past clients (/nez-sphere) | Past Client Check-In That Isn't Awkward |

## Anytime skills

These aren't path steps. Suggest one only when its signal shows up, once, after the main recommendation.

| Skill | Suggest when |
| --- | --- |
| /nez-org-chart | AI Employees has at least 1 row, or the agent mentions hiring, a VA or a team |
| /nez-library | The agent mentions saved posts, a swipe file, or a creator whose content they like |
| /nez-advisor | The agent mentions a coach, author or creator they learn from, or wants a Master Coach |
| /nez-board | The agent mentions a big decision |
| /nez-bottleneck | The agent says they're too busy, behind, or doing everything themselves |
| /nez-brain-check | The agent says something in the brain is wrong or out of date, or asks to clean it up |
| /nez-next | Any time: "what should I do next?" |

## Goal menu ("show me everything")

Show only skills in the agent's available skills, plus Vault prompts labeled "(Vault prompt)." One short line each.

| Goal | Skills and prompts |
| --- | --- |
| Set up my brain | /nez-brain-check (weekly tune-up), "File my inbox," answer my open questions, /nez-setup (profile, compliance, voice, goals, objections, areas, self-test), /nez-self (how I work best), /nez-voice (a voice skill for me, a teammate or a client) |
| Plan and hit my goals | /nez-bizplan, /nez-goals, /nez-review, /nez-dashboard, /nez-bottleneck · Vault: My One-Page Business Plan, Friday Weekly Review |
| Make big decisions | /nez-advisor (build my board), /nez-board (bring it a decision) |
| Get more leads | /nez-lead-magnet, /nez-funnel, /nez-dm-automation, /nez-ads, /nez-prospect · Vault: Find My Best Lead Magnet |
| Follow up and nurture | /nez-email, /nez-newsletter, /nez-sphere · Vault: Past Client Check-In That Isn't Awkward |
| Win and serve clients | /nez-listing-appt, /nez-buyer, /nez-transaction, /nez-seller-updates, /nez-roleplay, /nez-a2p, /nez-crm · Vault: Contract to Close Timeline |
| Create content | /nez-connector (CapCut projects and free transcripts on your computer), /nez-library (your swipe file of saved posts), /nez-content, /nez-hooks, /nez-reels, /nez-market-carousel, /nez-social, /nez-youtube, /nez-walkthrough-video · Vault: Plan My Week of Content |
| Get found online | /nez-website, /nez-listing-page, /nez-seo, /nez-blog, /nez-site-audit |
| Build my team | /nez-self (teammate profiles), /nez-org-chart |
