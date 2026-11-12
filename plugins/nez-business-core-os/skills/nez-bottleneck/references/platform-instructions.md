# Platform automation instructions

Used by `SKILL.md` Step 6 and `fix-ladder.md` rung c. This skill never changes GoHighLevel or any other platform. It gives steps the agent follows.

## Format for every automation

Numbered steps they can follow. Screens and menu names differ between platforms and versions, so say "look for" and never claim exact names. Ask for a screenshot if their screen doesn't match. For each automation:

1. **Goal:** one sentence.
2. **Trigger:** what starts it (a form submitted, a pipeline stage change, a tag added, a date reached, an appointment booked).
3. **Filters:** who it applies to and who it must skip (no consent, do-not-disturb, replied STOP, already a client).
4. **Actions:** in order, with the exact wording for any message (in their voice, with the disclosure line where email needs it).
5. **Waits and branches:** any delay, and what happens if the person replies or books.
6. **Test:** on their own contact first, and what to check.
7. **Turn it off:** how to stop it.
8. **What to watch:** what could go wrong, and when to review it.

## Rules for any automation that sends a message

- Texts only to people with documented consent, and only once their texting (A2P) registration is approved. Never to anyone marked do-not-disturb or who replied STOP. Consent unknown: use email.
- Texts go out between 8am and 9pm in the person's time zone.
- Include the disclosure line and the opt-out wording where the channel needs it.
- Never an automation that sends in bulk to a list that hasn't consented. Never skip trace, never text a scrubbed number without consent, and follow Fair Housing: never filter or target by who someone is.
- Say that the agent owns turning it on, and should test it on themselves first.

## GoHighLevel

The first platform for most agents. Write the workflow as trigger, filters, actions, waits and test, in workflow language ("look for Automation, then Workflows"). If they had their GoHighLevel set up with a NEZ OS or Maria Nez AI setup, or use a snapshot, tell them to check whether a similar workflow already exists before building a second one. For AI that replies to leads (Conversation AI), the same consent and A2P rules apply, and it should hand off to a person for anything about price, offers, contracts or compensation.

## Other platforms

Same format, with their own words for triggers and actions (a transaction platform's task reminders, a calendar's booking rules, Gmail filters). If you're not sure how a platform works, say so and ask them to paste what they see. Never guess that a feature exists.
