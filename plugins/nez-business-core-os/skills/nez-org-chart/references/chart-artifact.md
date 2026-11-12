# The org chart page

Used by `SKILL.md` Step 3. Build a clean, private page from the databases. If the Artifact tool has page rules (design guidance), load them before writing and follow them for the title, theming, layout and phone width.

## Data

Read People on the tree (Status Active or Waiting for answers; Former only if the agent asks) and AI Employees (Draft, Active or Paused; Retired only if asked). Build one list of nodes: id, name, role, type (person or AI), manager (Reports To or Human Manager), status, review date (AI only), where it runs (AI only), and flags (from `highlights.md`). Embed it in the page as data and render from it. Never put emails, phone numbers, profiles or private notes in the data.

## Layout

- A vertical tree as nested lists with CSS connector lines. One column with indented levels on a phone, spread out on a wide screen. No sideways page scroll.
- **Top level:** the people who report to no one (usually the agent). Under each person: the people who report to them, then an "AI team" group with their AI employees.
- **Each box:** the name, the role in smaller text, and a tag. People have a solid border and the tag "Person." AI employees have a dashed border, the tag "AI" and where it runs in small text (for example "GoHighLevel"). The difference is shape and text, never color alone.
- **"Needs attention" strip** at the top: a count and one short line per highlight kind, plus a small badge on each affected box ("No review date", "No manager", "No AI help yet", "Over [N] hrs").
- **"Jobs nobody owns"** box under the tree. A **"Partners"** box only if the agent asked for one.
- **Solo agent:** the agent's box with their AI team beneath, and the jobs nobody owns box. No empty placeholders for people they don't have.
- **Footer:** "As of [date]. Built from your People and AI Employees databases in your NEZ OS brain. Ask Claude to change it with /nez-org-chart."
- Colors as tokens for light and dark mode, an explicit page background, large tap targets. Use the agent's brand colors from the Master Profile if they're saved. No em dashes anywhere on the page.

## Publishing

- Publish as a private page with no extra capabilities and no connector access. It's a snapshot, so it shows its "As of" date.
- Tell the agent the page lists names and roles, so think before sharing it, and that you didn't share it.
- On every later change: write to the brain first, then republish to the same page so the link stays the same. With the agent's OK, save the link on their own People row under Notes ("Org chart: [link], last updated [date]").
- If pages can't be published here, give the tree as indented text with the same tags and flags, and offer to save it as a page in the brain under "Your team & how you work."
