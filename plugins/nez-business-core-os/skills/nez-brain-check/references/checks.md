# Brain check: the checks

Run every check that applies. Each one passes or fails. **Score = checks passed / checks that apply x 100**, rounded. A check whose database or page doesn't exist yet doesn't apply (and goes on the Foundation list instead). Use Notion's created and last edited times for ages.

`RE only` checks apply only when `industry_flow` is `real-estate`.

## Inbox and questions

| # | Check | Passes when |
| --- | --- | --- |
| 1 | Inbox | The Inbox page has fewer than 3 items |
| 2 | Open questions | No Open Questions row has been Open for more than 14 days |
| 3 | Client FAQs | No Draft row is older than 30 days |

## Freshness

| # | Check | Passes when |
| --- | --- | --- |
| 4 | Market Areas (RE only) | Every row has a Data As Of date within the last 90 days |
| 5 | Clients & Deals | No row at Stage Lead, Active or Under contract has gone more than 30 days without an edit |
| 6 | Tasks | Fewer than 3 Tasks are not Done and past their Due Date |
| 7 | Projects | Every Active project has a Next Step and its Due date hasn't passed |
| 8 | Business plan | My business numbers has a Last plan date within 12 months, and the current quarter is set on Quarterly Goals (skip if /nez-bizplan or /nez-goals has never run) |
| 9 | Bottlenecks | No Fixing or Fixed row has a Check By date that passed with no Actual Hours Saved |
| 10 | AI Employees | No Active row has a Review Date that has passed |

## Proof and stories

| # | Check | Passes when |
| --- | --- | --- |
| 11 | Proof | At least 1 row is Approved to Use |
| 12 | Stories | At least 1 row has OK to Share set (Public or Conversations only) |

## Conflicts and duplicates

| # | Check | Passes when |
| --- | --- | --- |
| 13 | AI Memory | No two Active rows with the same Area and Applies To say opposite things |
| 14 | Decisions | No Still Active Decisions Log row is newer than, and contradicts, a Master Profile line (brokerage, niche, areas, lead sources, tools, goals) |
| 15 | Duplicates | No two rows share the same name in People, Clients & Deals, Market Areas, Objection Bank, Proof or Software Stack (ignore case and extra spaces). Same name, clearly different person or place: not a duplicate |
| 16 | Page IDs | Every ID in Page IDs opens the page or database it names |

## Safety

| # | Check | Passes when |
| --- | --- | --- |
| 17 | Sensitive data | No row or page holds a password, login, API key, token, Social Security number, card or bank account number, or a client's health, immigration or financial details. Look in Software Stack, People, Clients & Deals, Meeting Notes, AI Memory and the Inbox. Words like "password:" or "pw", a long random string next to "key" or "token", 9 digits shaped like an SSN, or 13 to 19 digit numbers are hits. A card named only by its last 4 digits is fine |

## Unsaved

| # | Check | Passes when |
| --- | --- | --- |
| 18 | Meeting action items | Every action item in Meeting Notes from the last 14 days has a matching Task (same meaning, not just the same words) |

## Foundation (listed, not scored)

The setup gaps to mention in Step 7, most useful first. Name at most 2, each with the skill that fills it:
1. A /nez-setup stage not done or skipped (`stage_1` to `stage_6` in Setup Status): /nez-setup.
2. Voice Library has no real samples: /nez-setup (Stage 3) or /nez-voice.
3. My personality is empty: /nez-self.
4. No business plan: /nez-bizplan.
5. A database from the NEZ OS layout is missing: /nez-setup (its workspace check adds it).
