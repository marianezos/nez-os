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
| 5 | Foundation | Goals | /nez-setup | nez-business-core-os | live | `stage_4_goals` has a date | Turns your goal into weekly numbers you can track | My One-Page Business Plan |
| 6 | Foundation | Objection bank | /nez-setup | nez-business-core-os | live | `stage_5_objection_bank` has a date, or the Objection Bank has at least 3 rows with Status Testing or Works | Answers ready for the pushback you hear most | (none: run /nez-setup) |
| 7 | Foundation | Market areas | /nez-setup | nez-business-core-os | live | `stage_6_market_areas` has a date, or Market Areas has at least 1 row | Real local detail for listings and content | (none: run /nez-setup) |
| 8 | Foundation | Setup self-test | /nez-setup | nez-business-core-os | live | `self_test_last_run` has a date | Shows your AI using your brain and what's still missing | (none: run /nez-setup and choose the self-test) |
| 9 | Plan | Weekly rhythm | /nez-goals | nez-business-core-os | vault | `last_check_in` has a date | A 10-minute weekly check-in keeps the plan alive | Friday Weekly Review |
| 10 | Clients | Texting approval | /nez-a2p | nez-real-estate-os | vault | A Decisions Log row mentions A2P or texting approval | Texts to your database actually get delivered | (none yet: tell them A2P help is coming to NEZ OS and is covered live in the community) |
| 11 | Leads | Your lead magnet | /nez-lead-magnet | nez-marketing-os | vault | Marketing Hub has a row with Type "Lead magnet" | A reason for strangers to give you their contact info | Find My Best Lead Magnet |
| 12 | Growth | Set up your advisory board | /nez-advisor | nez-business-core-os | live | Advisory Board has at least 1 Active row | A board that reads your business for every big decision | (none: run /nez-advisor) |
| 13 | Growth | Meet your advisory board | /nez-board | nez-business-core-os | live | Board Meetings has at least 1 row | Pressure-test your next big decision before you spend on it | (none: run /nez-board) |
| 14 | Content | Your first content week | /nez-content | nez-studio-os | vault | Content Planner has at least 3 rows with a Publish Date | Consistent content in your voice brings leads to you | Plan My Week of Content |

## Skip rules

- **Texting approval:** skip if Software Stack and My tools show no CRM at all.
- **YouTube steps and YouTube upkeep:** skip if My brand's YouTube line is blank or says they don't plan to start one.
- **Plugin not installed:** never recommend a `live` skill that isn't in your available skills. Name its plugin and say to install it from the NEZ OS marketplace; use the next installed step as the recommendation.
- **Not real estate:** if `industry_flow` isn't `real-estate`, skip the objection bank, market areas and texting approval steps.

## Upkeep (when the path is done)

Recommend the first one that applies. A rule that names a skill applies only if that skill is in your available skills or has a Vault prompt.

| Rule | Recommend | Vault prompt if no skill |
| --- | --- | --- |
| A Board Meetings row has a Follow-up date that has passed and Outcome "Not reviewed" | Check how that decision turned out (/nez-board) | (none) |
| `last_check_in` is more than 7 days ago | Weekly check-in (/nez-goals) | Friday Weekly Review |
| The CRM is GoHighLevel and no Decisions Log or Marketing Hub row shows a CRM map | Map your CRM pipeline and automations (/nez-crm) | (none) |
| `last_review` is empty or more than 30 days ago, and there have been at least 2 weekly check-ins | Monthly review (/nez-review, or /nez-goals until it ships) | Friday Weekly Review |
| Content Planner has nothing with a Publish Date in the next 14 days | Plan content (/nez-content) | Plan My Week of Content |
| A video publishes in the next 7 days and its row has no Hook or script | Write the script (/nez-content) | Plan My Week of Content |
| The newest Marketing Hub newsletter (Type Email, name includes "newsletter") is more than 35 days old | Send a newsletter (/nez-newsletter) | (none) |
| The newest Marketing Hub "SEO audit" row is more than 90 days old, or the website changed | Run a site check (/nez-site-audit or /nez-seo) | (none) |
| A Bottlenecks row is Open with High impact | Work on that bottleneck: name it and suggest one first fix | (none) |
| A Market Areas row has Data As Of older than 90 days, or no data at all | Refresh that area's numbers with a source and date | (none) |
| Business Plan & Goals hasn't changed in 90 days, or a new quarter started | Update the plan (/nez-bizplan, or /nez-setup Stage 4 until it ships) | My One-Page Business Plan |
| The agent mentions a big decision (hiring, ads, joining a team, going full time) | Bring it to the board (/nez-board) | (none) |
| The agent mentions a coach, author or creator they learn from | Add them as a simulated advisor (/nez-advisor) | (none) |
| Nothing else applies | Reconnect with past clients (/nez-sphere) | Past Client Check-In That Isn't Awkward |

## Goal menu ("show me everything")

Show only skills in the agent's available skills, plus Vault prompts labeled "(Vault prompt)." One short line each.

| Goal | Skills and prompts |
| --- | --- |
| Set up my brain | /nez-setup (profile, compliance, voice, goals, objections, areas, self-test), /nez-self (how I work best) |
| Plan and hit my goals | /nez-bizplan, /nez-goals, /nez-review, /nez-dashboard, /nez-bottleneck · Vault: My One-Page Business Plan, Friday Weekly Review |
| Make big decisions | /nez-advisor (build my board), /nez-board (bring it a decision) |
| Get more leads | /nez-lead-magnet, /nez-funnel, /nez-dm-automation, /nez-ads, /nez-prospect · Vault: Find My Best Lead Magnet |
| Follow up and nurture | /nez-email, /nez-newsletter, /nez-sphere · Vault: Past Client Check-In That Isn't Awkward |
| Win and serve clients | /nez-listing-appt, /nez-buyer, /nez-transaction, /nez-seller-updates, /nez-roleplay, /nez-a2p, /nez-crm · Vault: Contract to Close Timeline |
| Create content | /nez-content, /nez-hooks, /nez-reels, /nez-market-carousel, /nez-social, /nez-youtube, /nez-walkthrough-video · Vault: Plan My Week of Content |
| Get found online | /nez-website, /nez-listing-page, /nez-seo, /nez-blog, /nez-site-audit |
| Build my team | /nez-self (teammate profiles), /nez-org-chart |
