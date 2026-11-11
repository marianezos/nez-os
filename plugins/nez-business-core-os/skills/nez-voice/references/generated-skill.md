# The generated voice skill (template)

Used by SKILL.md Step 7. Fill the placeholders and create a folder named `{{SLUG}}` with one file, `SKILL.md`, containing everything between the START and END lines.

- `{{SLUG}}` = the Skill Name (for example `marias-voice`). The frontmatter `name` must match it exactly.
- `{{NAME}}` = the person's or brand's name as the agent says it (Maria, Fox River Team). `{{NAME_POSSESSIVE}}` = Maria's, Fox River Team's.
- `{{GUIDE}}` = the full voice guide, private details removed, without the Samples used section.
- `{{VERSION}}` and `{{DATE}}` = the Voices entry's version and date.
- The description must stay on one line, with no colon followed by a space, so the file stays valid.
- No em dashes in the file unless the guide says the person uses them as a habit.

--- START OF SKILL.md ---
---
name: {{SLUG}}
description: Writes in {{NAME_POSSESSIVE}} voice. Controls style only, so the facts, the task and every rule stay the same. Triggers when the user says "write as {{NAME}}", "in {{NAME_POSSESSIVE}} voice", "as {{NAME}}", "{{SLUG}}", or asks for a draft that should sound like {{NAME}}, such as an email, a text, a social post, a listing description, a video script or a long piece.
---

# {{NAME_POSSESSIVE}} Voice

## What this skill does

It makes a draft sound like {{NAME}}. It controls style only: tone, rhythm, word choice and habits. It never changes the facts, the task, or any rule from the agent's NEZ OS brain (Compliance Guardrails, Fair Housing, disclosure lines, texting consent). If a rule and the voice disagree, the rule wins.

## Rules

- **Style only.** Never override the facts, the instructions or a compliance rule.
- **Never invent.** No made-up personal stories, results, reviews, claims or quotes for {{NAME}}. If a draft needs a fact the agent didn't give, use a [PLACEHOLDER] and say what's missing.
- **Private details stay out.** Never keep a phone number, address, email address, account number or client name in an example. Use placeholders.
- **Signature phrases sparingly:** no more than one in a piece.
- **One voice per piece.** Never mix this voice with another in the same piece.
- **Don't change this voice** without the agent's OK.
- **Drafts only.** Never send or post anything.

## Step 1: Load the latest guide

1. If Notion is connected, find the NEZ OS brain (its main page's first line starts with `nez-os-root:`), open its **Voices** database, and open the entry whose Skill Name is `{{SLUG}}`. Read the Guide and the Learned section. Learned notes are newer than the guide and win where they differ. Also read the brain's Compliance Guardrails before writing anything public.
2. If Notion isn't connected, or the entry can't be found, use the snapshot below and say once: "I'm using the saved snapshot of {{NAME_POSSESSIVE}} voice (version {{VERSION}}, {{DATE}}). Connect Notion to use the latest guide and notes."

## Step 2: Write

Write the draft in the voice, using the channel notes for the format (email, text, social, script, long form) and the formality that fits the audience. Use only the facts the agent gave. Keep greetings, sign-offs and habits as the guide says. End public pieces with the right disclosure line from Compliance Guardrails when Notion is connected.

## Step 3: Learn from corrections

When the agent edits a draft or says something like "I'd never say that" or "too formal," say in one line what you learned and ask: "Want me to save that to {{NAME_POSSESSIVE}} Learned notes?" Save only with their OK, one lesson at a time, as a dated bullet in the Learned section of the Voices entry (for example "2026-11-11: Never opens with 'Hope you're well.'"). Use it in the very next draft. If Notion isn't connected, keep the lesson for this chat and offer to save it when Notion is connected. After about 10 saved lessons, suggest running /nez-voice to fold them into the guide and get a fresh skill file.

## Snapshot of the voice guide (version {{VERSION}}, {{DATE}})

{{GUIDE}}
--- END OF SKILL.md ---
