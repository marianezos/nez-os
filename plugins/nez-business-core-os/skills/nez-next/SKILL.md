---
name: nez-next
description: Tells a real estate agent their best next step in NEZ OS. Reads their progress from their NEZ OS brain in Notion, recommends ONE next step with a short reason plus two alternatives, and offers to start it. Never recommends a skill that isn't installed or hasn't shipped (it points to the matching Vault prompt instead). Read-only except for one note. Triggers when the user runs /nez-next, or says "what should I do next", "what's next", "where do I start", "what can I do", "I'm stuck", "show me everything", "what can NEZ OS do", or "help me pick a skill".
---

# NEZ OS Next: Your Best Next Step

## Purpose

Keep the agent moving. Read what they've finished, recommend the one most useful next step and why, give two short alternatives, and offer to start it. Agents can use NEZ OS in any order; this skill keeps them from guessing.

## What it covers

- **Reads progress** from the NEZ OS brain: setup stages, profile, plan, content, deals, tasks, bottlenecks, advisors. Never asks questions to figure it out.
- **One recommendation:** the first unfinished step on the NEZ OS path, with why it matters for them, two alternatives, and an offer to start.
- **Urgent first:** a contract deadline in the next 3 days or a pile of overdue tasks comes before the path.
- **Only what exists:** recommends installed skills; points to the plugin to install, or the matching Vault prompt when a skill hasn't shipped.
- **After the path:** upkeep checks like weekly and monthly reviews, board follow-ups, content gaps, newsletters, site checks, stale market data, and reconnecting with past clients.
- **Extras:** a weekly check-in reminder, a one-time tip on organizing work into Claude Projects, and a "show me everything" menu grouped by goal.
- **Fits the agent:** shapes the reply to their personality profile; Spanish if they write in Spanish.
- **Read-only:** never changes the brain, except one line noting the Projects tip was offered.

## Core rules

- **Read the brain rules first:** the plugin's `references/brain-rules.md` (in the `nez-business-core-os` plugin folder, two levels up from this skill). Use its "Finding the brain" and "Read before you work" sections. Skip the saving and logging sections, including filling Page IDs.
- **Read-only.** Never create, edit or delete anything in Notion. The one exception: write `projects_offered: <today's date>` in Setup Status when you offer the Claude Projects tip (Step 5).
- **One recommendation,** then up to two short alternatives. Never a menu of equal options.
- **Never ask questions to figure out progress.** If a sign is missing or unclear, treat that step as not done.
- **Only recommend what exists.** A skill must be in your list of available skills. A `vault` step points to its Vault prompt. Never describe a coming-soon skill as available.
- **Fit the agent.** If the Master Profile's My personality section is filled in, shape the reply to it (for example, a Driver gets it shorter with a clear pick; a Planner gets the reason first). Never mention the profile.
- **Plain language.** Never show page IDs, field names, line names or Notion jargon.
- **Match their language.** Reply in Spanish if they write in Spanish.
- **No em dashes.** Before sending, scan the whole reply (lists, tables, headings too) and replace each one with a comma, a colon or a new sentence.

---

## Step 1: Find the brain

1. If you already know the Master Profile (from Page IDs), use the IDs. Otherwise search Notion once for `nez-os-root` and for "NEZ OS Brain".
2. Keep only pages whose first line starts with `nez-os-root:`. Ignore pages from other systems, even ones with similar titles.
3. More than one: ask which to use. Never guess.
4. **None found:** make this the one recommendation and stop:
   > "Your first step is setting up your NEZ OS brain. Duplicate the NEZ OS Brain template from the Vault (Resources), connect Notion to Claude, then run /nez-setup. The first stage takes about 10 minutes, and your skills work right after it."
5. No Notion tools at all: say Notion needs to be connected first (Settings, then Connectors, then Notion) and stop.

## Step 2: Read progress

Read only what you need:
- **Master Profile:** Setup Status (every line; see `nez-setup/references/setup-status.md`), the My personality section, My tools (CRM), My brand (YouTube), and My goals this year.
- **Voice Library:** whether it has content beyond the template blanks.
- **Business Plan & Goals:** whether an income goal is filled in, the quarter in This quarter, and the newest Weekly check-in.
- **Market Areas:** how many rows, and their Data As Of dates.
- **Objection Bank:** how many rows are Testing or Works.
- **Content Planner:** rows with a Publish Date in the next 14 days, and their Status and Format.
- **Marketing Hub:** rows with their Type and Date (lead magnets, newsletters, SEO audits).
- **Clients & Deals:** rows with Stage "Under contract" and their Key Date.
- **Tasks:** rows not Done with a Due Date today or earlier.
- **Bottlenecks:** rows Open with High impact.
- **Inbox:** how many items are below the line.
- **Open Questions:** rows with Status Open.
- **Projects:** Active rows, their Due date and Next Step.
- **Advisory Board and Board Meetings:** Active advisors, and meetings with a passed Follow-up date and Outcome "Not reviewed."

## Step 3: Choose the next step

Open `references/path.md`.

1. **Urgent first.** Check its Urgent rules. If one applies, it's the recommendation.
2. **Walk the path** in order and use each step's "Done when" to find the **first step that is not done.**
3. **Check that step.** If a check rules it out, move to the next step:
   - **Skip rules:** apply every rule in the Skip rules section of `path.md`.
   - **In progress:** if a setup stage is partly done (for example the Objection Bank has some client types done), recommend finishing it.
   - **Installed:** a `live` step's skill must be in your available skills. If it isn't, its plugin isn't installed: name the plugin (the Plugin column) and say to install it from the NEZ OS marketplace, then make the next installed step an alternative.
   - **Vault:** a `vault` step recommends its Vault prompt (or the skill, if it's now in your available skills).
4. **Path done:** use the Upkeep rules in `path.md`, first match wins. If none apply, say they're on track and offer three things to do, picked from their goals.

## Step 4: Say it

Short, in this shape:

**Where you are:** one plain, encouraging sentence about what they've finished, specific to them ("Your profile and compliance are set, and your objection bank has 12 tested answers.").

**Your next step:** the skill or Vault prompt, then one or two sentences on why, using the step's "Why it matters" from `path.md` and tying it to something from their brain when you can. For a setup stage, say "run /nez-setup and choose Continue setup" and name the stage.

**If you'd rather do something else:**
- [alternative 1]: short reason
- [alternative 2]: short reason

**Want me to start [it] now?**

Alternatives:
- Take them from the next two path steps that pass the Step 3 checks.
- You may swap one for a skill that clearly fits their goals (My goals this year, or what they want more of).
- Never list /nez-next. Fewer than two real alternatives is fine: list fewer.

**The weekly check-in nudge.** Whatever the main recommendation, if `last_check_in` is more than 7 days ago (or there's a quarter in This quarter and no check-in after its first week), add one line after the alternatives: "Also, your weekly check-in is due." Name /nez-goals if it's available, otherwise the Vault prompt "Friday Weekly Review." It only becomes the main recommendation through the path or Upkeep.

## Step 5: The Claude Projects tip (once)

If the core profile, compliance, voice and edge, /nez-self and goals are all done (the Foundation steps with those names in `path.md`), and `projects_offered` in Setup Status is blank, add after the recommendation: "One more tip: a few separate Claude Projects, one per kind of work, keep everything organized. Want me to show you how?"

Whatever they answer, write `projects_offered: <today's date>` in Setup Status. If they say yes, follow `references/projects.md`. If they ask "how do I set up Projects?" any time, follow `references/projects.md` without checking the line.

## Step 6: If they say yes

- An available skill: start it now.
- A setup stage: start /nez-setup and choose Continue setup.
- A Vault prompt: "Open the NEZ OS Vault, then Prompt Library, and search for [name]."
- If you can't start skills in this session: "Type /[skill] to begin."

## "Show me everything"

If they ask what they can do, show the Goal menu from `references/path.md`: only skills in your available skills (plus Vault prompts, labeled as prompts), one short line each, grouped by goal. Then ask which goal they want to work on, and recommend the first step for it.

## Close every answer with

"You can run /nez-next any time and I'll tell you your best next step."
