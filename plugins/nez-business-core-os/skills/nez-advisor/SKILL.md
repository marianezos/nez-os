---
name: nez-advisor
description: Builds and manages a real estate agent's personal advisory board in their NEZ OS brain. Seats the default board of starter real estate advisors, adds extras, builds an advisor from the public content of a mentor, coach or creator the agent follows (labeled a simulation), designs a custom role, builds the Master Coach from their Coach Library, refreshes an advisor with new content, and changes who sits on the board. Saves to the Advisory Board in Notion; /nez-board runs the meetings. Triggers when the user runs /nez-advisor, or says "add an advisor", "build my advisory board", "build an advisor from [name]'s content", "add [name] to my board", "create a custom advisor", "build my master coach", "refresh my advisor", or "change my board".
---

# NEZ OS Advisor: Build Your Advisory Board

## Purpose

Give the agent a board of advisors they trust: ready-made real estate roles, roles they design, and simulated mentors built from the public work of people they already learn from. Each advisor is a row in the Advisory Board with a brain page. /nez-board reads those pages when the board meets.

## What it covers

- **Builds the board:** seats the default seven advisors with one question (Listings Strategist, Lead & Marketing Builder, Conversion Coach, Profit Keeper, Systems Operator, Client Champion, The Skeptic).
- **Extras:** Content Builder, Team Growth Coach and Local Market Expert, plus custom advisors from five questions.
- **Mentors from real content:** builds a simulated advisor from a coach, author or creator the agent follows, using YouTube videos, podcasts, PDFs or posts (a fetch script pulls the transcripts), with a test of up to three rounds before seating them.
- **Each advisor has a brain page:** their question, who they are, how they think, what they believe, their tools, where they stand, how they talk, where they can be wrong, and sources (plus stories and short quotes for real people), personalized to the agent's business.
- **The Master Coach:** one advisor built from everything the agent saved in their Coach Library (/nez-library) plus the mentor advisors they choose. It speaks for the ideas, not for any creator, and says where the creators disagree.
- **Manages the board:** refresh an advisor with new sources (shown as a plan first), bench or bring back advisors, and change who sits on the board.
- **Safe by design:** simulated advisors are always labeled "(simulated)," quotes stay short and sourced, it's for the agent's own use, and nothing is ever deleted.

## Core rules

- **Read the brain rules first:** the plugin's `references/brain-rules.md` (in the `nez-business-core-os` plugin folder, two levels up from this skill). Follow it for finding the brain, writing to Notion (including `\$` for dollar signs), logging, and what never to store.
- **Look first, then ask.** Read the Advisory Board and the Master Profile before asking anything. Say in one or two lines what you found ("You have 7 advisors on your board: ..."). Never ask for something the brain already has.
- **One question at a time.** Wait for the answer before the next one.
- **Real people are simulations.** An advisor built from a real person has "(simulated)" in its name and says so at the top of its brain. It never claims to be the person and never says the person agreed with, endorsed or reviewed anything.
- **Never invent.** For a Mentor or Public figure, every belief, tool, position and story comes from a source you read or from their widely known public work, marked with where it came from. A quote is word for word from a source or it's left out.
- **Never save raw content** to Notion: no transcripts, articles or book text. Save the brain and the Sources table only.
- **Never change an advisor without the agent's OK.** Show what will change as a plan and wait for a yes.
- **Seven at the table, at most.** The agent can keep as many advisors as they want, but no more than seven are Active at once. More voices make a worse meeting. Whenever a save would make an eighth Active advisor, ask which one to bench first.
- **Never delete an advisor.** Bench it instead.
- **Dates with time.** Write Last Refreshed as a date with a time, so a refresh can tell what was saved since. To decide what's new in the Coach Library, use Notion's own timestamps (a row's created time against the advisor page's last edited time), never your own estimate of the time.
- **Match their language.** Reply in Spanish if they write in Spanish.
- **No em dashes** in anything you say or save.

Files this skill uses (all in this skill's `references/` and `scripts/` folders):
- `advisor-brain-spec.md`: the headings and rules for every advisor's brain page.
- `starter-advisors.md`: the default board and extras, and how to add and personalize a starter role.
- `notion.md`: where the Advisory Board, Board Meetings and Coach Library live, their exact layouts, the writing rules, and the safety net if one is missing.
- `gathering-sources.md`: how to find, read and log sources for a Mentor or Public figure, including access settings.
- `scripts/fetch.mjs`: turns links into text and transcripts, where commands run on the agent's computer.

---

## Step 1: Find the board and look

1. Find the brain per the brain rules. Open the **Advisory Board** (`advisory_board_ds_id` in Page IDs). If it's missing, follow the safety net in `references/notion.md`.
2. Read every row (Advisor, Kind, Seat, Status, Sources, Last Refreshed) and the Master Profile (market, clients, niche, team or solo, goals). If the Master Profile has a **Board Updates** section with lines that have no "declined," offer in one line: "There's new content from [names]. Want me to refresh those advisors?" A yes refreshes them (Step 6) and clears those lines; a no adds `| declined <date>` to them. If a Master Coach exists and the Coach Library has 10 or more Business advice, Sales pitch or Story rows created after the Master Coach page was last edited (and more than the count on any `master_coach_refresh_declined` line), offer once: "You've saved [n] new posts since your Master Coach was built. Want me to refresh it?" A yes runs Step 5B's refresh; a no saves `- master_coach_refresh_declined: <date and time> | <n> posts` in Board Updates.
3. **Empty board:** go straight to Step 2.
4. **Board has advisors:** say what you found in one or two lines, then ask:
   > 1. Add ready-made advisors
   > 2. Build an advisor from someone's content (a coach, mentor, author or creator you follow)
   > 3. Design a custom advisor
   > 4. Build or refresh my Master Coach (from my Coach Library)
   > 5. Refresh an advisor with new content
   > 6. Change who sits on your board

## Step 2: Seat the default board (empty board)

If `industry_flow` in Setup Status isn't `real-estate` (a lender, an insurance agent, a coach), swap the Listings Strategist for the **Industry Expert** in `starter-advisors.md`, built from the industry in their Master Profile, and never use real estate roles or language with them. Then say, in one message:

> "Let's set up your board. I'll start you with 7 advisors: [each name and their question, one line each]. Add them like this, or change anything?"

If the Advisory Board had to be created, fold that into the same question ("I'll also add your Advisory Board to your Notion"). If the Master Profile shows the agent leads a team or is a broker, mention the Team Growth Coach as an option in the same message; if their goals lean on social media or video, mention the Content Builder; if they have Market Areas or work a specific farm or town, mention the Local Market Expert.

On a yes, add each advisor following "How to add a starter role" in `starter-advisors.md`, personalized from the Master Profile. If they want a change (swap, drop or add one), make it and ask once more. Then say once that they can add mentors they follow or design their own advisor anytime with /nez-advisor.

## Step 3: Add ready-made advisors (board already has some)

List every role in `starter-advisors.md` by name and question, one line each, marking the ones already on the board. Ask which to add. For each one picked:

1. Build its brain from `starter-advisors.md`, personalized from the Master Profile.
2. Show its question and "How they think" in three or four lines and ask: "Add it like this, or change anything?"
3. Save the row: Kind Role, Status Active, Sources 0, Version 1, Last Refreshed now.

## Step 4: Build an advisor from someone's content

1. **Who and why.** Ask who they want to add. Then ask: "What do you want them to help you decide? For example listings, growing on social, pricing, or recruiting." Their answer shapes the advisor's question.
2. **Check for a match.** If a row with the same Key exists, offer to refresh it (Step 6) instead. Never make a second copy.
3. **Kind.** Someone known publicly with public content: Public figure. Someone the agent knows personally (their coach, broker, past mentor): Mentor. For a Mentor, say first: "Make sure you have their OK to build an advisor from their material."
4. **Gather sources** following `gathering-sources.md`: first any Coach Library rows from this creator (each counts as a source, with its link), then their favorites, then a proposed list they approve, then read each one. Every five or so sources, tell them in one line how many you've read.
5. **Build the brain** following `advisor-brain-spec.md`, every claim with where it came from. Name the row "[Name] (simulated)". Key: their name in lower case with hyphens.
6. **Test it.** Ask for a real decision they're facing, or offer one from their Master Profile or Board Meetings. Answer it as the advisor in 5 to 8 sentences, using only the brain. Ask: "Does that sound like how [Name] thinks? What's off?" Fix the brain from their notes and test again, up to three rounds, until they say it fits.
7. **Save** the row: Kind, Seat (their question), Status Active (or Draft if built from fewer than 5 sources), Sources (rows in the Sources table), Version 1, Last Refreshed now.
8. **Say once:** "This advisor is a simulation built from [Name]'s public work, for your own decisions. Don't use their name, face or words to market your business."
9. If you used a build folder, offer to delete it.

## Step 5: Design a custom advisor

Ask, one at a time:
1. What should we call this advisor?
2. What's the one question they should own at your table?
3. What kind of person are they, and what experience do they draw on?
4. What three to five things do they always check?
5. Anything they should never recommend?

Build the brain from `advisor-brain-spec.md` (no "Stories they tell" or "In their words"; Sources reads "Custom advisor designed by the agent. No outside sources."). Show their question and how they think, test it once like Step 4.6 if the agent wants, get a yes, then save as Kind Role, Version 1.

## Step 5B: Build or refresh the Master Coach

The Master Coach is one advisor that thinks the way the content the agent values teaches, across every creator they've saved. There's only one per agent (Key `master-coach`, Kind Master Coach).

1. **Read the library.** Open the Coach Library (`coach_library_ds_id`) and read the rows whose Use includes Business advice, Sales pitch or Story, with Words Read checked. Fewer than 20: say "Your Master Coach gets sharper with more saves. You have [n]. Want to build it now anyway, or save more first with /nez-library?"
2. **Ask which mentor advisors to blend in** (the Mentor and Public figure rows on the Advisory Board). Default to all of them.
3. **Build the brain** from `advisor-brain-spec.md`:
   - **Their question:** "What would the people I learn from tell me to do here, and do they agree?"
   - **Who they are:** "A coach built from the [n] posts [agent's first name] saved and the advisors they chose: [names]. It speaks for the ideas, not for any creator."
   - **How they think, What they believe, Their tools:** ideas that show up across several saves or creators come first. Cite each with its library ids (L01, L02...) or the mentor advisor and source id it came from (for example `tom-ferry S3`). Weigh the agent's own "Why I Liked It" notes most: they show what the agent values.
   - **Where they stand:** their stance on the topics the saves cover.
   - **Where creators disagree:** who is on each side, with the ids. If nothing is disagreed, say so in one line; never invent a conflict.
   - **How they talk:** plain and direct, in the agent's own language. It never imitates one creator.
   - **In their words:** only hooks or lines saved word for word in the library, each with the creator's name and library id.
   - **Real estate rules win:** anything from a saved post that breaks Fair Housing, promises results, or calls a commission standard is left out, and any row marked "Not Fair Housing safe as is" is never used as a quote.
4. **Show** the question, the top five beliefs, and where the creators disagree. Make the changes the agent asks for, then save the row: Advisor "Master Coach", Kind Master Coach, Seat (the question above), Status Active (or Draft if built from fewer than 20 posts), Sources (library rows plus blended advisors), Version 1, Last Refreshed with the date and time.
5. **Refresh:** read only the library rows created after the Master Coach page was last edited (Notion's created time against the page's last edited time) and the mentor advisors whose Last Refreshed is later than the Master Coach's. Show what changed as a short plan and update on a yes: add 1 to Version, update Sources, set Last Refreshed to now, continue the L numbers, and delete any `master_coach_refresh_declined` line in Board Updates.

## Step 6: Refresh an advisor

- **Mentor or Public figure:** ask for new links, or offer to search for their newest long-form content since Last Refreshed. Gather and read new sources the same way, continuing the source ids. Show what changed (new beliefs, changed positions, new tools) as a short plan. On a yes, update the brain, add 1 to Version, update Sources and Last Refreshed. If a Draft now has 5 or more sources, set it to Active.
- **Role:** ask what to change, show the plan, then update and add 1 to Version.

## Step 7: Change who sits on the board

Show every advisor with its Status. Ask who should be Active, Benched, or finished from Draft, keeping seven or fewer Active. Save after a yes. Never delete an advisor.

## Finish

Say where it's saved ("Saved to your Advisory Board"), then offer one next step: "Want to run a decision past your board? Run /nez-board." Mention they can run /nez-next anytime for their best next step.
