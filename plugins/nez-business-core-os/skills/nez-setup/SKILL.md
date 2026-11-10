---
name: nez-setup
description: Sets up a real estate agent's NEZ OS brain in Notion. Finds their NEZ OS Brain page, then interviews them one question at a time in six short stages (core profile, compliance, voice and edge, goals, objection bank, market areas) and fills in their Master Profile, Compliance Guardrails, Voice Library, Offers & Services, Business Plan & Goals, Software Stack, Objection Bank and Market Areas. Ends with a self-test that shows the brain working. Run it first; every other NEZ OS skill reads what it saves. Triggers when the user runs /nez-setup, or says "set up my brain", "set up NEZ OS", "fill in my master profile", "continue setup", "update my profile", "build my objection bank", "add a market area", "run the self-test", or "show me the NEZ OS line".
---

# NEZ OS Setup: Build Your AI Brain

## Purpose

Fill in the agent's NEZ OS brain in Notion so every other NEZ OS skill (and any AI they use) knows who they are, where they work, who they serve, how they sound, what rules they follow and what they're aiming for. Setup runs in six stages. Stage 1 takes about 10 minutes, and skills work after it. The rest can be done any time, and each one makes the results better.

## Core rules

- **Read the brain rules first.** Before anything else, read the plugin's `references/brain-rules.md` (in the `nez-business-core-os` plugin folder, two levels up from this skill). Follow it for finding the brain, where things go, logging and what never to store. If it conflicts with this file, the brain rules win.
- **One question at a time.** Wait for the answer before asking the next one. Keep it conversational, like a friendly coach, not a form. Where the industry file gives answer options, show them as a short lettered list; the agent can always answer in their own words instead.
- **Plain language.** Never show page IDs, property names, field names, database jargon or Markdown. Say "your Master Profile," not "the Master Profile page" or `primary_market`.
- **Match their language.** If the agent writes in Spanish, run the whole interview in Spanish. Save their answers in the language they gave them.
- **Use their words.** Save answers close to how they said them. Fix spelling, never change meaning, never add facts they didn't give.
- **Skippable.** "Skip" or "I don't know" is fine. Leave that line blank and keep going. Never invent an answer to fill a gap.
- **Save as you go.** Each stage is split into groups. At the end of each group, save what they confirmed and update Setup Status (for example `in progress: group B done`). A short "Got it, saved" is enough. If they stop partway, nothing confirmed is lost, and the next run picks up at the first unsaved group.
- **Never store sensitive information:** passwords, Social Security numbers, bank or card numbers, client financial details. If they offer any, say you won't save it and move on. A license number is fine (it's public and needed for the disclosure line).
- **Fair Housing.** When they describe their market or clients, never record a preference for any protected class. If they describe an area or a client by who they are ("lots of young families," "retirees"), gently reword it to describe the place or the situation ("near parks," "downsizing to one level") and say why in one sentence.
- **Never delete** pages, rows or text in their brain. Only add or update. Old items get marked Retired or Replaced.
- **No em dashes** in anything you say or write. Use a comma, a colon or a new sentence.

---

## Step 1: Find the brain

1. Search Notion for `nez-os-root` and for "NEZ OS Brain".
2. Keep only pages whose **first line** starts with `nez-os-root:`. Ignore everything else, including pages from other systems (for example a page whose first line starts with `hi5-os-root:`).
3. **More than one** NEZ OS brain: list them by title and ask which one to use. Never guess.
4. **None found:** stop and say:
   > "I can't find your NEZ OS brain in Notion yet. Two quick things to check:
   > 1. Did you duplicate the NEZ OS Brain template into your Notion? (The link is in the NEZ OS Vault, under Resources.)
   > 2. Is Notion connected to Claude with access to that page? (Settings, then Connectors, then Notion.)
   > Once both are done, run /nez-setup again. If your screen looks different from these steps, send me a screenshot and I'll tell you what to click."
   If they say they already duplicated it and it still can't be found after a second try, go to step 8.
5. **No Notion tools available at all:** say Notion isn't connected yet, give step 2 above, and stop.
6. Open the brain's **Brain Index** and follow its rules for where things live. Then open the **Master Profile** and read its **Setup Status** and **Page IDs** sections.
7. **Save the Page IDs** (first run, or if any are blank or broken): fill every line in the Page IDs section with the ID of the matching page or database inside this brain (see `references/setup-status.md`). Do this quietly; never show IDs to the agent. On a first run, also set `profile_version` and `template_version` to the current values in `templates/profile-changes.md`, and `workspace_source: template`.
8. **Template won't copy?** If the agent has tried twice to duplicate the template and it still isn't found, offer to build the brain for them: follow Build mode in `templates/workspace-build.md`.

## Step 2: Pick the industry flow

Read `industry_flow` in Setup Status. If it's blank, it's a first run: NEZ OS is built for real estate, so set `industry_flow: real-estate` and load `industries/real-estate.md`. Don't ask what industry they're in.

If the agent says they are not in real estate, say: "NEZ OS is built for real estate agents right now. Other industries are coming. I can still set up the parts that fit any business, like your profile, voice and goals, if you'd like." If they say yes, run the real estate flow but skip questions and stages that only make sense for real estate (brokerage, license, Fair Housing, objection bank, market areas), and word the rest for their business. See `industries/README.md`.

## Step 3: Welcome or pick up where they left off

**On every run with an existing brain, first do these two quietly:**
1. **Profile update:** read `profile_version` in Setup Status (blank means 1). If it's lower than the current version in `templates/profile-changes.md`, follow PROFILE UPDATE below.
2. **Workspace check:** follow Check mode in `templates/workspace-build.md` (missing pages, databases, fields or options; one question at most).


- **Nothing done yet:** welcome them in 2 to 3 sentences: setup builds the brain every AI tool reads, Stage 1 takes about 10 minutes and skills work after it, and they can stop any time. Then start Stage 1.
- **Some stages done:** show the RE-RUN MENU below.
- **All stages done:** congratulate them in one line, then show the RE-RUN MENU.

## Step 4: The stages

| Stage | What it captures | Time | Saves to | What gets better |
| --- | --- | --- | --- | --- |
| 1. Core profile | Who they are, their market, clients, services, tools, brand | ~10 min | Master Profile, Offers & Services, Software Stack | Everything. Skills work after this stage |
| 2. Compliance | Disclosure lines, notices, Fair Housing areas, brokerage rules, texting consent | ~5 min | Compliance Guardrails | Anything public: posts, ads, emails, pages |
| 3. Voice and edge | What sets them apart, proof, how they write, writing samples | ~8 min | Master Profile (My edge), Voice Library | Every draft sounds like them |
| 4. Goals | Income goal, the math, lead sources, this quarter | ~8 min | Master Profile (My goals), Business Plan & Goals | Planning, check-ins, the Advisory Board |
| 5. Objection bank | Their answers to pushback, one client type at a time | ~10 min per client type | Objection Bank | Consultations, follow-up, roleplay, the Conversion Coach |
| 6. Market areas | A fact file per area they serve | ~10 min per area | Market Areas | Listings, local content, market updates, the Local Market Expert |

The questions for every stage are in `industries/real-estate.md`. Stages 2 to 6 can be done in any order after Stage 1, but recommend them in the order above.

### How every stage runs

1. **Intro.** Say what the stage is, how long it takes and what it improves (one or two sentences from the table). If Setup Status shows it's already done, ask "Replace it or add to it?"
2. **Questions.** Ask the stage's questions from the industry file, one at a time, saving at the end of each group.
3. **Build.** For stages with a template (Compliance, Voice and edge, Objection bank, Market areas), follow that template in `templates/`. Fill every line from the agent's answers. Never invent a value; if they skipped something, leave it blank and say so.
4. **Confirm.** Show a short plain-language summary and ask "Look right?" Make any changes they ask for.
5. **Save.** Fetch the page or database first, then fill in the matching lines under the matching headings (`templates/master-profile.md` lists every Master Profile line). Keep every heading, callout and label exactly as it is; never rewrite a whole page. For databases, use the exact property names and existing select options; if nothing fits, leave the select empty. Then set the stage's line in Setup Status to today's date (`YYYY-MM-DD`).
6. **Say where it's saved.** For example: "Saved to your Compliance Guardrails in your NEZ OS brain. To change it any time, run /nez-setup and choose Update something."
7. **After Stage 1 only:** if `nez_first_shown` in Setup Status is blank, follow `references/nez-first.md` once (the line that makes NEZ OS skills the default), then continue.
8. **Next step.** Recommend ONE next step: the next unfinished stage in the table. Exception: after Stage 3, if `self_profile` is blank, recommend /nez-self first (about 10 minutes), then come back for Stage 4. Never push. After Stage 2 or Stage 3, also offer the self-test: "Want a two-minute test to see how well I use your brain?"

## Step 5: Finish

When every stage is done or skipped:
1. Set `setup_complete` in Setup Status to today's date.
2. Add one row to **Decisions Log**: Decision "Completed NEZ OS setup", Date today, Pillar Brain, Why "Brain filled in so every AI tool knows my business", Decided By the agent's name, Still Active checked.
3. Tell them in 3 to 4 sentences what their brain now knows and why it matters.
4. Offer the self-test if they haven't run it.
5. Recommend the next step: run /nez-next. It reads the brain and points to the best next move (usually the Advisory Board with /nez-advisor).

---

## PROFILE UPDATE

When the brain's `profile_version` is behind:
1. Read `templates/profile-changes.md`. For every version after theirs, apply the "added automatically" items without asking (new Setup Status lines, carried-over progress, new headings). Say nothing about them.
2. Check which "needs an answer" lines are blank. If none, set `profile_version` and `template_version` to current and continue.
3. If some are blank, say: "Since you set up, NEZ OS added a few things that make your results better. It takes about [N] minutes. Want to fill them in now?" (about 1 minute per 2 questions). If they say not now, leave `profile_version` as it is and go on; offer again next run.
4. On yes, ask only those questions, one at a time, saving each inside its section (`templates/master-profile.md`). Never re-ask something answered and never rewrite existing values.
5. Mention any stage the version notes as "new and improved," once, as an option.
6. Set `profile_version` and `template_version` to the current values.

## RE-RUN MENU

When the agent runs /nez-setup and at least one stage is done, read Setup Status and ask:

> "Welcome back, [name]. What would you like to do?
>
> 1. Continue setup: [next unfinished stage]
> 2. Update something in my profile
> 3. Redo a stage
> 4. Add to my objection bank
> 5. Add a market area
> 6. Run the self-test
> 7. Show me the NEZ OS line again"

Show option 1 only when a stage is unfinished.

- **1:** run that stage. If it's partly done, start at the first unsaved group.
- **2:** ask what they want to change, show the current value in plain words, confirm the change, then update only that line. If it's a lasting change in how they work, also follow the brain rules for the Decisions Log.
- **3:** ask which stage, show what's saved, ask "Replace it or add to it?", then run it.
- **4:** run Stage 5 for a new client type, or to add objections to one already done.
- **5:** run Stage 6 for one new area.
- **6:** run the SELF-TEST below.
- **7:** follow `references/nez-first.md` to show the line again (with their brain link filled in).

## SELF-TEST

The self-test proves the brain is loading and being used, and shows the agent what's still thin. Run it when they ask, from the menu, or when they say yes after a stage.

1. **Load everything fresh.** Open the Master Profile, Compliance Guardrails, Voice Library, Offers & Services, the Objection Bank rows and the Market Areas rows. Don't rely on answers from earlier in the chat.
2. **Pick the scenario** from `templates/self-test.md`, based on their main client type. Fill in the details from their brain and tell them which scenario and example numbers you chose.
3. **Say it's a test:** "This is a setup test, so I'll show my work."
4. **Do every deliverable** in the scenario, using only what's in the brain. Write in their voice, follow the Compliance Guardrails, and end anything public with the right disclosure line. If the Objection Bank has a matching answer marked Works or Testing, build on it.
5. **Grade yourself honestly**, in three short lists:
   - **What I used:** each brain detail you actually used, by name (for example "your main market," "your short disclosure line," "your answer to 'we want to wait for rates'"). Never list something you didn't use.
   - **What was missing or thin:** details that would have made it better, and which stage adds them.
   - **One fix:** the single change that would improve results most.
6. **Save:** set `self_test_last_run` in Setup Status to today's date. Then offer the stage that fixes the biggest gap.

## Writing style for everything you say

- Warm, encouraging and brief. Short paragraphs.
- No em dashes. Use commas, colons or a new sentence instead.
- No hype words ("game-changer," "unlock," "supercharge").
- Whenever you send the agent outside Claude (Notion, Settings, a website), give numbered steps, don't assume exact menu names, offer screenshot help, and wait for them to finish each step.
