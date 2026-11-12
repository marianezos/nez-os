# Real estate dashboard preset

Used by `SKILL.md` Step 5 for real estate agents. Suggestions only, offered after discovery, never forced. Drop anything they'd take no action on. Real estate rules apply: Fair Housing (no widget shows or filters by who someone is), texting consent, A2P and do-not-contact before any text, and dates only from the executed document or the source.

## How the menu uses this

The menu offers separate dashboards: the Command Center (Today, Email, Tasks, and a card for each other dashboard), CRM (CRM summary, Clients by stage, Potential earnings, Follow-Up Queue), Content, Money, and Transactions (the tracker below).

## Suggested widgets

- **Today:** appointments and showings from the calendar, with their protected hours (My boundaries) shown as blocked.
- **Brain to-dos:** inbox items, open questions, a late weekly check-in, fixes to check, board follow-ups (see `../references/widgets.md`).
- **Email:** emails that need a reply, with drafted replies in their voice.
- **CRM summary:** new leads, active leads and needs follow-up, one per GoHighLevel sub-account if they have more than one.
- **Listings:** active listings with the next action for each (a price conversation, showing feedback, a seller update due). From CRM opportunities, or the Clients & Deals rows with Type Seller. Never pull data from a listing site.
- **Follow-Up Queue:** new leads, active buyers and sellers, past clients and sphere, with their stale days and channel per group. Follows the ranking in /nez-daily and the touch rules in /nez-sphere when nez-real-estate-os is installed, drafts in their voice with the disclosure line on email, and runs the texting check for every text. Never ranks or filters by who someone is or where they live.
- **Clients by stage:** buyers, sellers, investors, renters and landlords per stage, with each client's last touch.
- **Potential earnings:** pipeline value by stage × their own commission per side × sides × the share they keep from their confirmed split, with the math shown, labeled "Potential, not guaranteed." Missing numbers: ask once and save them in My business numbers. Never a standard or typical rate, because commission is set by agreement and is negotiable.
- **Transaction tracker:** every file under contract with its stage, key dates, documents needed, what's missing and the next step (below).
- **Important dates:** from the Transactions tracker and the calendar.
- **Tasks:** from their one task home.
- **Money snapshot:** the quarter's closings and take-home against their /nez-goals plan, from their own numbers only.
- **Marketing snapshot:** Marketing Hub rows by Type and Status (listing marketing, ads, lead magnets).

## The Transactions tracker (a brain database, new only if there isn't one)

Propose these fields and get their OK first. Create it in **03 · Clients**, after Client FAQs (`transactions_db_id` / `transactions_ds_id`). The CRM keeps the opportunity and stage; Clients & Deals keeps the client; this tracker holds what neither does.

| Property | Type | Notes |
| --- | --- | --- |
| Property | title | The address |
| Client | text | First name or the name they use, no household details |
| Side | select | Buyer, Seller, Landlord, Tenant, Investor, Other |
| Stage | select | Under contract, Inspection, Appraisal and financing, Title, Final walkthrough, Closed, Fell through |
| Contract Date | date | |
| Inspection Deadline | date | As the executed contract states it |
| Attorney Review Ends | date | Where their state has attorney review |
| Appraisal Date | date | |
| Earnest Money Due | date | |
| Financing Deadline | date | |
| Closing Date | date | |
| Documents Needed | multi-select | Their own list for this kind of file |
| Documents Received | multi-select | The ones that are in |
| Next Step | text | One line |
| CRM Link | url | The opportunity |
| Client Link | relation | To Clients & Deals |

- **What's missing:** Documents Needed minus Documents Received, and any key date that's blank.
- **Dates come only from the executed contract.** To fill the tracker from a contract, point to /nez-transaction (nez-real-estate-os) once it's installed, and add dates only after their OK. Never compute a date on the dashboard.
- **Actions:** mark a document received, change the stage, add a next step, make a task. A CRM change is shown first and made only after their OK.

## The Important Dates tracker (only if they want one beyond the calendar)

| Property | Type |
| --- | --- |
| Item | title |
| Date | date |
| Related File | relation to Transactions, or text |
| What to Do | text (written by the agent) |
| Done | checkbox |

Dates already in the calendar or the CRM are read from there, not copied.

## Notes

- Every text runs the texting check: consent and A2P, not do-not-disturb or STOP, 8am to 9pm.
- Drafted replies use their voice and the disclosure line where required.
- Never show demographic or neighborhood-people information on any widget.
