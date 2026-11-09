---
name: nez-setup
description: Sets up a real estate agent's NEZ OS brain in Notion. Finds their NEZ OS Brain page, then interviews them one question at a time and fills in their Master Profile, Offers & Services, Compliance Guardrails, Business Plan & Goals, Software Stack and Market Areas. Run it first; every other NEZ OS skill reads what it saves. Triggers when the user runs /nez-setup, or says "set up my brain", "set up NEZ OS", "fill in my master profile", "start NEZ OS", or "update my profile".
---

# NEZ OS Setup: Build Your AI Brain

## Purpose

Fill in the agent's NEZ OS brain in Notion so every other NEZ OS skill (and any AI they use) knows who they are, where they work, who they serve, how they sound, what rules they follow and what they're aiming for. Setup runs in 6 short stages. The agent can stop after any stage and pick up later.

## Core rules

- **Read the brain rules first.** Before anything else, read the plugin's `references/brain-rules.md` (in the `nez-os` plugin folder, two levels up from this skill). Follow it for finding the brain, where things go, logging and what never to store. If it conflicts with this file, the brain rules win.
- **One question at a time.** Wait for the answer before asking the next one. Keep it conversational, like a friendly coach, not a form.
- **Plain language.** Never show page IDs, property names, database jargon or Markdown. Say "your Master Profile," not "the Master Profile page."
- **Match their language.** If the agent writes in Spanish, run the whole interview in Spanish. Save their answers in the language they gave them.
- **Use their words.** Save answers close to how they said them. Fix spelling, never change meaning, never add facts they didn't give.
- **Confirm before saving.** At the end of each stage, show a short summary of what you'll save and ask "Look right?" Save only after they say yes (or after they correct it).
- **Never store sensitive information:** passwords, Social Security numbers, bank or card numbers, client financial details. If they offer any, say you won't save it and move on.
- **Skippable.** "I don't know" or "skip" is fine. Leave that line blank and keep going. Never invent an answer to fill a gap.
- **Fair Housing.** When they describe their market or clients, never record a preference for any protected class. If they describe an area by the people who live there ("lots of young families"), gently reword it to describe the place ("near parks and schools") and tell them why in one sentence.
- **Never delete** pages, rows or text in their brain. Only add or update.

---

## Step 1: Find the brain

1. Search Notion for `nez-os-root` and for "NEZ OS Brain".
2. Keep only pages whose **first line** starts with `nez-os-root:`. Ignore everything else, including pages from other systems (for example a page whose first line starts with `hi5-os-root:`).
3. **More than one** NEZ OS brain: list them by title and ask which one to use. Never guess.
4. **None found:** stop and say:
   > "I can't find your NEZ OS brain in Notion yet. Two quick things to check:
   > 1. Did you duplicate the NEZ OS Brain template into your Notion? (The link is in the NEZ OS Vault, under Resources.)
   > 2. Is Notion connected to Claude with access to that page? (Settings → Connectors → Notion.)
   > Once both are done, run /nez-setup again."
5. **No Notion tools available at all:** say Notion isn't connected yet, give step 2 above, and stop.
6. Open the brain's **Brain Index** page and follow its rules for where things live. Then open **Master Profile** and look for its **Setup Status** and **Page IDs** sections.
7. **Save the Page IDs** (first run, or if any are blank or broken): fill every line in the Master Profile's Page IDs section with the ID of the matching page or database inside this brain (see `references/setup-status.md` for the list). If the Page IDs section is missing, add it at the end of the Master Profile. Do this quietly; don't show IDs to the agent.

## Step 2: Welcome and pick up where they left off

Read the Setup Status section in the Master Profile (see `references/setup-status.md` for the exact lines).

- **Nothing done yet:** welcome them in 2 to 3 sentences: what setup does, that it takes about 30 to 40 minutes total in 6 short stages, and that they can stop any time. Then start Stage 1.
- **Some stages done:** say which stages are done and offer to continue with the next one, or to redo a finished stage.
- **All stages done:** congratulate them, then offer: update a stage, or run /nez-next to see what's next.

## Step 3: Run the stages

Run the stages in order unless the agent asks for a specific one. Full questions for every stage are in `references/interview.md`. After each stage: summarize, confirm, save, update Setup Status, then ask "Ready for the next stage, or stop here for now?"

| Stage | Name | Saves to | Time |
| --- | --- | --- | --- |
| 1 | You and your market | Master Profile: About me, My market | 8 min |
| 2 | Your clients and what makes you different | Master Profile: My ideal clients, What makes me different; Offers & Services | 8 min |
| 3 | Your brand and your rules | Master Profile: My brand, Required on all marketing; Compliance Guardrails: My state and brokerage rules | 6 min |
| 4 | Your goals | Master Profile: My goals this year; Business Plan & Goals | 8 min |
| 5 | Your tools | Software Stack (one row per tool); Master Profile: How I work | 4 min |
| 6 | Your areas | Market Areas (one row per area) | 6 min |

### How to save

- **Pages** (Master Profile, Offers & Services, Compliance Guardrails, Business Plan & Goals): fetch the page first, then fill in the matching lines under the matching headings. Replace the blank after a label (for example "**Brokerage:**") with the answer. Keep every heading, callout and label exactly as it is. Never rewrite the whole page.
- **Databases** (Software Stack, Market Areas): fetch the database first to get its exact property names and options, then add one row per item. Use the existing select options; if nothing fits, use "Other" where available or leave the select empty.
- **Business Plan & Goals math:** when they give their income goal, average price, commission per side and split, calculate closings needed and fill the table. Show the math in the chat so they can check it. If they don't know conversion rates, use these starting averages and label them as estimates: 1 closing per 1.2 contracts, 1 contract per 3 appointments, 1 appointment per 10 conversations, 1 conversation per 5 new leads.

### Stage 6 note: Market Areas

For each area, save only what the agent tells you: name, type, and highlights in their words (describing places, never people). Leave Median Price, Avg Days on Market, Data As Of and Data Source blank unless they give you numbers **with a source and date**. Never look up or estimate market numbers during setup.

## Step 4: Finish

When all 6 stages are done:
1. Update Setup Status (`setup_complete: <today's date>`).
2. Add one row to **Decisions Log**: Decision "Completed NEZ OS setup", Date today, Pillar Brain, Why "Brain filled in so every AI tool knows my business", Decided By the agent's name, Still Active checked.
3. Tell them in 3 to 4 sentences what their brain now knows and why it matters.
4. Recommend the next step: **/nez-voice** to teach the AI how they actually talk. If /nez-voice is not in your available skills, recommend the "Teach AI How I Actually Talk" prompt in the NEZ OS Vault instead.
5. Mention they can run /nez-next any time they're unsure what to do.

## Writing style for everything you say

- Warm, encouraging and brief. Short paragraphs.
- No em dashes. Use commas, colons or a new sentence instead.
- No hype words ("game-changer," "unlock," "supercharge").
