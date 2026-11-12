# Building the quick win

Used by `SKILL.md` Step 6. Build only what's safe, and only with the agent's OK. Show every piece before creating it.

## What you can build on the Claude side

- **Claude Project instructions:** text for them to paste, with steps, using `../templates/project-instructions.md`. Screens differ between apps and versions, so say "look for" and never claim exact menu names; ask for a screenshot if their screen doesn't match. Never say you created a Project, because you can't. Tell them where to paste it.
- **A skill:** a complete skill (a folder named in lowercase words joined by hyphens, with a SKILL.md that has plain frontmatter, a name matching the folder, and a description with no colons). Offer it through Claude's save skill card, plus a backup file with install steps (follow `../../nez-voice/references/install-steps.md`). Include the NEZ OS rules that apply (drafts first, one approved send at a time, texting consent, Fair Housing, the disclosure line, no em dashes, their voice for anything written to others).
- **A scheduled task:** show the schedule, the exact prompt, and what it reads and writes. Create it only with their OK, and only with a scheduling feature available in this session (say which). Never claim something was scheduled if it wasn't. A scheduled task only reads or drafts; it never sends, publishes, spends or changes records.
- **Notion pages and databases:** reuse an existing database first (Tasks, SOPs, Projects, Marketing Hub). Propose the fields and wait for their OK. If adding a select option errors, create a row that uses the new option and then trash it, and say what you did.
- **An SOP:** for rung a fixes (a checklist or a template), offer to save it to SOPs.

## After building

Say what was built, where it is, how to test it, and what to watch for. Ask them to note how long the task takes for two weeks, so the estimate can be checked on the next run. Set the Bottlenecks row to Fixing, with The Fix filled in.

## Never

Never send, publish, spend money, or change a record in their CRM or any platform from this skill. Never build a bulk or automatic sender. Never store passwords, API keys or full account numbers in a Project, a skill or Notion.
