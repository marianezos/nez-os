# Building each dashboard as a Claude artifact

Used by `SKILL.md` Step 6. Each dashboard is its own Claude artifact. Check what this session's Claude supports before you design it, use live connector data where it can, and otherwise build a snapshot with a clear refresh path. The agent must never be asked to confirm or re-approve connectors each time they open a dashboard.

## Before you build

1. **Brain first.** Create any approved brain databases (`notion-trackers.md`), record their IDs, then build.
2. **Load the artifact guidance.** If the Artifact tool has page and capability guidance (design rules, a capability list), load it first; it's the authority on the page contract, capability names and call shapes. If it isn't available, say so, build a snapshot, and tell the agent live data isn't available in their Claude.
3. **Read the capability list.** Only declare what's listed. If live connector access isn't listed, build the snapshot.
4. **Know the exact tools.** For every connector tool the page calls, read its input from this session's tool definition, or run one safe read call to learn the result shape. Never run a write to learn a shape, never guess an argument name, and never embed values from a real call as sample data. If you can't learn a tool's shape, say so to the agent in your reply, not inside the page.

## Live dashboard (when live connector access is available)

- **Declare once.** Publish with capabilities that name every connector the dashboard needs and the exact tools it calls, plus a data store (for dismissals, undo and settings) and model calls (to draft a reply when an email is opened) only when the widgets need them. Declare only what the dashboard uses. Decide the connector list during planning, so only a later change to the list asks again, and only for the new connector.
- **Show data with a watching read** (keeps current, with a modest refresh interval and a cache window) and **do actions with a call** (a send, a task, a label). After a write, refresh the matching read.
- **Ask once, up front.** After the first paint, request permissions once, for only the names the page uses, so the agent answers one batched dialog the first time. Never request in a loop or again on later opens. Read the permission state without prompting.
- **Contain failures in the widget.** Branch on the error code, never the message text:
  - Needs sign-in again, or not connected: that widget shows "Reconnect [app] in Settings, then Connectors," and the rest keeps working.
  - Needs approval on a button: show "Needs approval" with a button that makes the same call once.
  - Not declared or blocked by policy: show that connector's widgets as not allowed here, without asking again.
  - Several connectors with that name: ask the agent to choose.
  - A tool error: show the tool's message in that widget.
  - Retry only errors marked retryable, at most once per refresh, and only reads. Never retry a write by itself; check the state first and let the agent click again.
  - If every widget fails the same way, show one page-level message.
- **Keep last good data visible** with "last updated" from the result's own time, not the page clock.
- **Never ask on open or refresh.** Opening or refreshing only reads data.

## The Follow-Up Queue (freshness)

Pick the approach from `follow-up-queue.md` and say why in the plan. Prefer the daily scheduled task that writes drafts to a brain "Follow-Up Queue" database when their Claude can run scheduled tasks and they agree: live drafting for a whole list on every open is slow, asks consent, and is rate limited. The dashboard then reads that database live and shows "Last updated." Otherwise rank live from CRM reads and draft one message on a click. Send is a real connector call only from a click, followed by one CRM note they agreed to at setup.

## Snapshot (when live access isn't available)

- At build or refresh, read the data yourself through this session's connectors (read only) and embed it in the page.
- A banner at the top: "Snapshot from [date and time]. To refresh, run /nez-dashboard and choose Refresh." The time on every widget.
- Buttons can't send, label or write by themselves. Each copies the drafted text or the instruction ("Ask Claude: reply to [name] with this text") so the agent does it in the chat with one approval there. Never pretend an action happened.
- Refreshing means running the skill again, which republishes the same artifact.

## Separate dashboards, one artifact each

- **One dashboard, one artifact,** with its own link and its own Dashboards row.
- **Only the connectors it needs.** The Content dashboard declares Notion only. The CRM dashboard declares the CRM and Notion. The Command Center declares the email, calendar and task tools it uses, plus a small read-only subset of each other dashboard's data for its cards. Never declare a connector "just in case."
- **Build order.** Build and publish the picked dashboards first, one at a time, and record each link. Then the Command Center, whose cards link to them. Only the Command Center picked: build it alone, without cards. Updating one dashboard republishes that one artifact; the Command Center is rebuilt only when its cards or links change.
- **Links.** A card opens its dashboard. Each dashboard links back to the Command Center. Never link to a mail app.
- **Layout.** In-page views with hash links so the back button works. One column on a phone, large tap targets, no sideways scroll, readable in light and dark mode. Use the agent's brand colors from the Master Profile if saved.
- **Title and privacy.** Two to four words ("Command Center," "CRM," "Transactions") and a short description. Private by default. A dashboard that declares connectors can't be shared publicly; share only with their own team or assistant, and say so.
- **No em dashes, and no placeholder sample data.** An empty widget says what it needs.

## The two-open test (required, every artifact)

1. Open the dashboard, answer any one-time approval prompts, and confirm every widget loads.
2. Close and open it again. Confirm no connector prompt appears and the widgets load with no questions.
3. Trigger a refresh and confirm no prompt appears.
4. Report in one short list: what you tested, what you couldn't, and the result. If a prompt appears on the second open, say exactly what it is: a one-time consent for a connector (only again if they removed the permission or the connector list changed); the platform's reconnect prompt (fix by reconnecting the app); an approval for an action tool that the platform asks for (comes from Claude, can't be removed from the page; say which buttons); or a duplicate connector choice. Never claim a prompt is gone unless you tested it. If you can't open the page here, say so and give them the steps.

## An unpublished dashboard

If it can't be published yet, save its Dashboards row with Status Draft and an empty Artifact Link (never a placeholder), with "Not published yet" at the top of its page. On publish, set Status Active and fill the link.

## After publishing

Do one functional pass (read back what the page writes, check that what should be hidden is hidden) and say in one line what you checked and what you couldn't. Publish later changes to the same link, say what changed in one line, and if a change adds a connector, say it will ask once for that connector.
