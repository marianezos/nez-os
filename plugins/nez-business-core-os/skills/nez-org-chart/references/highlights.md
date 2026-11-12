# Highlights

Used by `SKILL.md` Step 4. Highlights are prompts about gaps in the structure, never judgments of people. Show each on the chart and say it again in plain words in the chat. Show only the ones that apply, and a short "Nothing to flag right now" line when none do.

## 1. People with no AI help yet

A person on the tree with no AI employee under them. Say "[Name] has no AI employee yet." Only a prompt: many roles don't need one, so never say a person should have one. Offer /nez-bottleneck for that person only if the agent wants it.

## 2. Overloaded people

From Bottlenecks: add up Hours per Week of every bottleneck that's still open (Status Open, Planned or Fixing; not Fixed, Dropped or Kept human), for each Owner, matched to People by name. Show each person's total next to their name.

- There's no standard line. Ask the agent once: "How many hours a week of slow, repeating work is too much for one person on your team?" Save it on the agent's own People row under Notes ("Overload hours per week: N"). A person at or above it is flagged.
- No Bottlenecks rows with hours: say "Overload shows once /nez-bottleneck has found some bottlenecks" and flag nothing. Never estimate overload from anything else.
- Say that the hours are what people reported, not a measurement.

## 3. AI employees with no manager or no review date

- **No manager:** Human Manager is blank or doesn't match a person in People. An urgent flag: an AI employee with no manager shouldn't be Active.
- **No review date:** suggest one from its Review Cadence (Monthly, Quarterly or Twice a year). If it has no cadence, ask the agent which to use. Never pick one for them.
- **Review overdue:** a Review Date in the past.

## 4. Jobs nobody owns

The unowned roles from the agent's People row (Roles nobody owns), plus any open bottleneck with no Owner. List them in one box with where each came from. Offer /nez-bottleneck to decide who or what should take them.

## When to offer an AI Operations owner

Offer once, never push, when either is true: three or more AI employees, or eight or more people and at least one AI employee. These numbers are only a prompt; the agent decides. One line: a person whose job includes building, checking and managing the AI employees. If they decline, never offer again.
