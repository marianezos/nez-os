# Voices entry: row and page template

One row in the **Voices** database (`voices_ds_id`, inside the Voice Library page) per voice. The row's page holds the guide. Never create a second row for the same Skill Name.

## Row fields

| Field | What goes in it |
| --- | --- |
| Name | the person's or brand's name, as the agent says it |
| Skill Name | the skill's folder name, for example `marias-voice` |
| For | Self, Teammate, or Client or brand |
| Status | Draft while building, Active when saved, Retired if they stop using it |
| Version | starts at 1; raise by 1 on every update |
| Date | the date of this version |
| Default | checked only for the agent's chosen default voice (only one at a time) |

## Page body (in this order, with these headings)

**First line:** "Voice guide for [Name], version [N], [date]. The skill [skill name] reads this page every time it runs."

## Guide
The full voice guide from `../references/voice-guide.md`, without the Samples used section.

## Learned
Dated bullets, one lesson each, added only with the agent's OK. Empty when the entry is created. Format: `- 2026-11-11: Never opens with "Hope you're well."`

## Paste-ready instructions
The full version and the short version from `../references/paste-ready.md`, each under its own small heading, ready to copy.

## Samples used
Descriptions only: kind (email, text, post, transcript), approximate date, where it came from. Never the raw text, and no private details.

## Version log
One line per version, for example: `Version 1, 2026-11-11, built from 8 samples.` On an update: `Version 2, 2027-01-15, folded in 10 lessons and added 3 samples.`
