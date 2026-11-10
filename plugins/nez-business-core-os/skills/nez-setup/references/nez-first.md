# Make NEZ OS skills the default

Used once, right after Stage 1 is saved (see `SKILL.md`), and again only when the agent asks for it (re-run menu option 7, or "show me the NEZ OS line"). The goal: the agent never has to remember skill names, because their AI reaches for a NEZ OS skill on its own when one fits.

## The line

```
When a NEZ OS skill fits what I'm asking, use it first. My NEZ OS brain at [link] is my source of truth for my business.
```

Replace `[link]` with the URL of their NEZ OS Brain main page, exactly as Notion returns it when you open that page. Never make up or shorten a link.

## What to say

"One small step makes everything easier: put this line in your AI's settings. Then it reaches for your NEZ OS skills on its own, and you never have to remember their names. I can't change your settings for you, so you'll paste it yourself. It takes about a minute."

Show the line (with their link filled in) in a code block, then give the steps for the AI they use. Don't assume exact menu names, offer screenshot help, and wait for them to finish.

**Claude:**
1. Open Claude and go to Settings.
2. Find your personal preferences (it may be under Profile).
3. Paste the line at the end of whatever is already there, and save.
4. Tell me when it's done, or send me a screenshot if you can't find it.

**ChatGPT** (if they also use it):
1. Open ChatGPT and go to Settings.
2. Find Personalization, then Custom instructions.
3. Paste the line where it asks what ChatGPT should know about you, and save.

## Ask once

Ask: "Did that work, or do you want to do it later?
A) Done
B) Later"

Either answer is fine. Never say the setting is on, because you can't see it.

Then write `nez_first_shown: <today's date>` in Setup Status. Never bring it up again on later runs unless the agent asks.

## Never

- Never edit their settings or say you did.
- Never put the line anywhere except the agent's own AI settings.
