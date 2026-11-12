# Connecting the apps they already use

Used by `SKILL.md` Step 3, only for the apps the picked dashboards need. Menus differ between Claude apps and versions, so every step is hedged ("look for"), and you ask for a screenshot if they get stuck. Never claim an exact menu name.

## 1. Ask what they use

Which of these they use day to day: email, calendar, CRM (which one: GoHighLevel, Follow Up Boss, Lofty, kvCORE, Sierra, CINC, BoomTown or another; with GoHighLevel, how many sub-accounts), tasks, chat (Slack or Google Chat), finance (accounting, payments). Skip anything they don't use. Never push an app they don't use.

## 2. Check what's connected

List the connectors you can see in this session. A connector counts as connected when you can see its tools. Say what you found in one line.

## 3. Recommend what's missing

For each app they use that isn't connected and has a Claude connector, one line on what it adds:
- **Email (Gmail or Outlook):** emails that need a reply, with a drafted reply, so nothing sits unanswered.
- **Calendar:** today's appointments and showings, and the dates that need action.
- **Their CRM, whatever it is:** new and active leads, who needs a follow-up, the pipeline, tasks. With more than one GoHighLevel sub-account, one summary each. How to connect it is in section 4b.
- **Notion:** the brain the dashboard reads and writes (already needed for NEZ OS).
- **Slack or Google Chat:** messages waiting for a reply.
- **Finance (for example Stripe or QuickBooks):** money in, as a snapshot, only if they want it.

If an app has no connector, say so and plan a brain tracker or a paste option instead. Never promise a connector exists: say "I'll check," then look.

## 4. Guide the connection

Short, numbered, hedged steps, one app at a time:
1. Open Claude's settings and look for Connectors (it may be called Integrations, Apps or Customize).
2. Find the app, or search for it, and choose to connect it.
3. Sign in to the app when the window opens, and allow access.
4. Come back and tell me when you're done.

If their screen doesn't match, ask for a screenshot and adapt. Never ask them to share a password, token or code in the chat.

## 4b. Connecting their CRM

Every agent's CRM is different, so offer the connection for theirs, whatever it is. Read My tools (CRM) in the Master Profile first, and if it's blank, ask once and save the answer there.

Check in this order, and stop at the first one that works:
1. **A connector in Claude's directory.** Look for their CRM by name in the connectors you can see or search. If it's there, guide the connection with the steps in section 4.
2. **An official connector from the CRM company.** Some CRMs offer their own link to connect AI tools (for example, Lofty offers one). Ask the agent to check their CRM's help center or settings for "AI," "MCP" or "Claude." If there is one, guide them to add it in Claude's settings as a custom connector (look for "Add custom connector"), using the link from their CRM. Any key or token goes into that settings window, never into the chat.
3. **Unofficial or paid options.** Some CRMs only have connectors built by other companies or the community (Follow Up Boss is one today). Name it plainly: these usually need an admin or broker-level key and get full access to every contact, can read and change records, and some cost money. Never set one up for them, never ask for the key, and suggest they check with their broker before using one. If they still want it, they set it up on their own.
4. **No connection.** Use the brain instead: the CRM widgets read Clients & Deals, and the agent can paste or export their follow-up list when they refresh. Say once what they'd gain by connecting later.

Whatever they connect, the rules stay the same: read first, and nothing sends or changes in the CRM unless they click. Save which CRM is connected, and how, on the Dashboards row and in Software Stack (no keys or passwords, ever).

## 5. Test with one read-only call

After they connect, run exactly one read-only call (today's calendar events, the first few email threads, the GoHighLevel sub-accounts or the CRM's first few contacts). Say what you saw in one line without showing sensitive details. If it fails, show the message and offer the screenshot or paste route. Never run a write to test.

**Connected but not signed in:** if a call fails because it isn't signed in, say once: "[App] is connected but not signed in. Open Settings, then Connectors, and reconnect it. Want me to use your brain for now?" Don't retry, and don't put the data in a second place without their OK.

## 6. If they skip it

Plan around it (a brain tracker, or a paste option they refresh by running the skill again), and say once what they'd gain by connecting later. Don't ask again in the same conversation, never repeatedly across runs, and note the skipped connector on the Dashboards row so a later update can offer it once.

## Declare connectors once

After this step you know every connector each dashboard needs. Declare them all at build time, once (`build.md`), so any approval is asked one time and never again when the dashboard is opened or refreshed.
