---
name: nez-next
description: Tells a real estate agent their best next step in NEZ OS. Reads their progress from their NEZ OS brain in Notion, recommends ONE next step with a short reason plus two alternatives, and offers to start it. Read-only. Triggers when the user runs /nez-next, or says "what should I do next", "what's next", "where do I start", "I'm stuck", "what can NEZ OS do", or "help me pick a skill".
---

# NEZ OS Next: Your Best Next Step

## Purpose

Keep the agent moving. Read what they've finished, recommend the one most useful next step and why, give two short alternatives, and offer to start it. Agents can use NEZ OS in any order; this skill keeps them from guessing.

## Core rules

- **Read the brain rules first:** the plugin's `references/brain-rules.md` (in the `nez-os` plugin folder, two levels up from this skill). Use its "Finding the brain" and "Read before you work" sections. This skill is read-only, so skip the saving and logging sections, including filling Page IDs.
- **Read-only.** Never create, edit or delete anything in Notion.
- **One recommendation.** Then two short alternatives. Never a long menu.
- **Never ask questions to figure out progress.** If something is missing or unclear, treat that step as not done.
- **Only recommend what exists.** Recommend a skill only if it appears in your list of available skills. If the right skill isn't installed or hasn't shipped yet, recommend the matching NEZ OS Vault prompt instead (named in `references/path.md`) and say where to find it.
- **Plain language.** Never mention page IDs, property names or database jargon.
- **Match their language.** Reply in Spanish if they write in Spanish.
- **No em dashes.** Use commas, colons or a new sentence.

---

## Step 1: Find the brain

1. If you already know the Master Profile (from Page IDs), use the IDs. Otherwise search Notion once for `nez-os-root` and for "NEZ OS Brain".
2. Keep only pages whose first line starts with `nez-os-root:`. Ignore pages from other systems.
3. More than one: ask which to use. Never guess.
4. **None found:** recommend this as the one next step and stop:
   > "Your first step is setting up your NEZ OS brain. Duplicate the NEZ OS Brain template from the Vault (Resources), connect Notion to Claude, then run /nez-setup. The first stage takes about 10 minutes, and your skills work right after it."
5. No Notion tools at all: say Notion needs to be connected first (Settings → Connectors → Notion) and stop.

## Step 2: Read progress

Read only what you need:
- **Master Profile:** the Setup Status section (see the `nez-setup` skill's `references/setup-status.md` for the lines). Also check whether the Voice Library has content beyond the template blanks.
- **Business Plan & Goals:** whether an income goal is filled in and whether a weekly check-in is logged.
- **Market Areas:** how many rows exist.
- **Content Planner:** rows with a Publish Date in the next 14 days.
- **Clients & Deals:** rows with Stage "Under contract" and their Key Date.
- **Tasks:** rows that are not Done with a Due Date today or earlier.
- **Bottlenecks:** rows with Status "Open" and Impact "High".

## Step 3: Choose the next step

Open `references/path.md`. Walk the path in order and take the **first step that is not done**, using each step's "Done when" column. Then apply these checks:

1. **Urgent first:** before the path, check the "Urgent" rules in `path.md` (overdue tasks, a contract deadline in the next 3 days). If one applies, recommend it first.
2. **Partly done:** if a setup stage is in progress, recommend finishing it.
3. **Available:** if the step's skill isn't in your available skills, recommend its Vault prompt instead.

If every path step is done, use the "Upkeep" rules in `path.md`.

## Step 4: Recommend

Reply in this shape, short:

1. **Where you are** (one sentence, encouraging, specific to what they've done).
2. **Your next step:** the skill or prompt name, and one sentence on why it matters now.
3. **Or, if you'd rather:** two alternatives, one line each.
4. **Offer to start:** "Want to start now?" If they say yes and it's an available skill, start that skill. If it's a Vault prompt, tell them to open the NEZ OS Vault → Prompt Library and search for its name.
