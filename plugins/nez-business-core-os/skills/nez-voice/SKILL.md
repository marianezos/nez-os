---
name: nez-voice
description: Builds a voice skill that writes like one specific person (the agent, a teammate, or a client or brand), called by name such as marias-voice. Reads the NEZ OS brain first, collects real writing and speaking samples, asks a few questions at a time, builds and tests a voice guide until the agent says "that's me," then saves it to the Voices database, creates an installable skill, and gives a backup file. Never invents stories or claims, and never changes a voice without the agent's OK. Triggers when the user runs /nez-voice, or says "create my voice", "make a voice skill", "write like me", "make it sound like me", "capture my writing style", "add a voice for my assistant", "add a voice for a client", or "update my voice".
---

# NEZ OS Voice: A Voice Skill for One Person

## Purpose

Turn real samples of how a person writes and talks into a skill that writes like them, on demand, by name. The result is three things:
- **A Voices entry** in the NEZ OS brain (the live guide, which keeps learning),
- **an installable skill** (for example `marias-voice`),
- **a backup file** with install steps.

Every NEZ OS writing skill can then use that voice. It works for the agent's own voice, a teammate's (an assistant who answers texts, a team member who posts), or a client or brand. An agent can have as many voices as they want.

## What it covers

- **Who:** the agent's own voice, a teammate's (an assistant who answers texts, a team member who posts), or a client or brand. As many voices as they want.
- **Looks first:** reads the Master Profile, the Voice Library page from setup Stage 3, the My personality section from /nez-self, and the Voices database, and never re-asks what's already there.
- **Real samples:** emails, texts, social posts and captions, listing descriptions, blogs and newsletters they wrote, plus video, podcast or voice memo transcripts. Pasted, uploaded, or read from their sent email (read only, with their OK).
- **Interview:** up to four questions at a time, only what the samples didn't answer, with what it noticed shown as statements they can correct.
- **Voice guide:** about 700 to 1,000 words: tone, rhythm, words, language rules, greetings and sign-offs, phrases, humor, emoji, formality by audience, stories, never-say list, do and don't, channel notes, before and after examples, and example lines with private details removed.
- **Test round:** an email, a text, a post and a nervous-client explanation (like earnest money), rated and edited until they say "that's me."
- **Saves:** a Voices entry in the NEZ OS brain (the live guide), an installable skill with a built-in snapshot, paste-ready instructions (a full version for ChatGPT, Gemini or a Claude Project, and a short one for GoHighLevel's Conversation AI and Content AI), and a downloadable backup file with install steps. The agent's own first voice can become their default.
- **Keeps learning:** saves lessons from their edits (with their OK), and later folds them into a new version of the voice.
- **Safe by design:** never invents stories, results or quotes, never keeps private details, never changes a voice without their OK, and never overrides compliance, Fair Housing or disclosure rules.

## Core rules

- **Read the brain rules first:** the plugin's `references/brain-rules.md` (two levels up from this skill). Follow it for finding the brain, where things go, never making a second copy, and logging.
- **Real samples only.** A voice is built only from things the person wrote or said themselves. If a sample looks AI-written (stock phrases, perfect structure, a neat list of three, em dashes they never use elsewhere), say so and ask before using it. Never write samples for them.
- **Look first, then ask.** Before asking anything, read the Master Profile (My edge, My brand, languages), the **Voice Library** page (the voice basics from setup Stage 3), the **My personality** section (/nez-self), and the **Voices** database. Say in one or two lines what you found. Ask only about what's missing, and never re-ask what's there.
- **Someone else's voice.** For a teammate or a client, say once: "Make sure you have their OK to use their writing." Then continue.
- **Style only.** A voice controls how things sound. It never overrides facts, the task, or any rule. NEZ OS rules always win: Compliance Guardrails, Fair Housing, disclosure lines, texting consent, drafts only, no em dashes.
- **Never invent.** No made-up personal stories, results, reviews, claims or quotes. Test pieces use only what the samples and answers gave you, plus `[PLACEHOLDER]` for any fact.
- **Private details stay out.** Remove phone numbers, addresses, email addresses, account numbers, and client or customer names from every example you keep (guide, Voices entry, skill, backup). Use placeholders like `[PHONE]` or `[CLIENT NAME]`. Save descriptions of the samples (kind, date, where from), never the raw sample text.
- **Email is optional and read-only.** Only with the agent's OK and only if an email tool is connected: search their sent mail, show the list you'd use, and read only the ones they approve. Never send, draft, label or change anything.
- **Never change a voice without the agent's OK.** Show every change as a plan and wait for a yes.
- **Pronouns:** use the person's name or "they." Never guess a pronoun from a name.
- **Match their language.** Run it in Spanish if they write in Spanish. A bilingual voice keeps both languages and notes how they mix them.
- **No em dashes** in anything you say or write, except a short quote of the person's own words when it's their habit (and say so). Scan every message before sending.

## Step 0: Find the brain and the Voices database

Find the brain per the brain rules. Open the Master Profile's Page IDs: `voices_db_id` / `voices_ds_id` and `voice_library_page_id`.

**Voices safety net.** If `voices_db_id` is missing or won't open:
1. Look inside the Voice Library page and under the brain's main page for a database titled "Voices." If found, save its IDs in Page IDs and continue.
2. If there's none, say: "Your Voices database isn't in your brain yet. I can add it now with the standard NEZ OS layout. OK?" On yes, create ONE database named "Voices" inside the Voice Library page, with the fields in `../nez-setup/templates/workspace-build.md`. Save both IDs in Page IDs, and add it to the Brain Index and the Dashboard's Your workspace list.
3. If they say no, or it can't be created, don't lose the work: give the guide and the skill file in the chat and as the backup file, and say "I couldn't save this to your Notion. Run /nez-setup and it will offer to add your Voices database, then ask me to save it." The voice skill still works from its built-in snapshot. Never create a second Voices database or any other database.

## Step 1: Look first

Read every Voices entry (Name, Skill Name, For, Status, Version), the Voice Library page, the Master Profile's My edge and My brand, and My personality. Say what you found in one or two lines, for example: "I found your voice basics from setup and your Connector profile, and one voice so far: marias-voice, version 2."

Then ask:
1. Create a new voice
2. Update a voice I already have (new samples, or fold in what it has learned)

If Voices is empty, go straight to creating one.

## Step 2: Who it's for, and the name

Ask: "Is this voice for you, a teammate, or a client or brand?"

- **Skill name:** lowercase with hyphens, ending in `-voice`: usually the first name plus `s-voice` (`marias-voice`); if the name already ends in s, just add `-voice` (`carlos-voice`); for a brand, the brand plus `-voice` (`foxriver-team-voice`). Only letters, numbers and hyphens. Agree on it with the agent.
- **Check Voices** for that Skill Name. If it exists, say so and offer to update it (Step 8) or pick another name. Never make a duplicate.
- **Teammate or client:** say the OK line from the core rules.

## Step 3: Collect samples

Follow `references/interview.md` (what counts, what doesn't). Ask for things the person wrote or said themselves: emails, texts, social posts, captions, blog posts, listing descriptions they wrote, video or podcast transcripts, voice memo transcripts. Aim for at least two kinds of writing plus one spoken transcript if they have one. Accept pasted text and uploaded files. If an email tool is connected, offer the read-only sent mail pass.

After each batch, say what you have (the kinds and a rough amount) and what would help most. If a sample looks AI-written, ask before using it.

## Step 4: Interview

Ask the questions in `references/interview.md`, up to four at a time, skipping anything the samples and Step 1 already answered. Show what you noticed as statements they can correct: "You open emails with just their first name and sign off 'Talk soon.' Right?"

## Step 5: Build the voice guide

Follow `references/voice-guide.md`. Show the guide and ask what's off. Don't save yet.

## Step 6: Test and refine

Write four short pieces in the voice, with placeholders for every fact:
- an email (for example confirming a showing),
- a text (for example following up after an open house),
- a social post (for example a quick market thought, no stats unless they gave them),
- an explanation for a nervous client, for example "Explain earnest money to a nervous first-time buyer" (or one of their Client FAQs). This shows whether the voice can teach without sounding like a textbook.

Let the agent pick other topics if they'd like. Ask them to rate each one (sounds like me / close / not me) and edit anything. For every edit, say in one line what you learned ("You cut the exclamation points and shortened the opening") and update the guide. Repeat with new pieces until they say "that's me."

## Step 7: Save and build the skill

Show the plan (the Voices entry, the skill name, the files) and wait for the OK. Then:

1. **Voices entry.** Create the row and page from `templates/voice-entry.md`: Name, Skill Name, For, Status Active, Version 1, Date today, and the page body (the guide, an empty Learned section, the samples list as descriptions only, and the version log). Never a second entry for the same Skill Name.
2. **Paste-ready instructions.** Write the voice two more ways, from `references/paste-ready.md`: a **full version** (for ChatGPT custom instructions or a Project, a Gemini Gem, a Claude Project) and a **short version** (under 1,000 characters, for tools with a small box, like GoHighLevel's Conversation AI bot and Content AI). Save both on the Voices entry page under Paste-ready instructions, and give them in the chat ready to copy. For the agent's own default voice, also save them on the Voice Library page.
3. **The skill.** Build it from `references/generated-skill.md`: a folder named for the Skill Name with one SKILL.md (trigger description, how to find the Voices entry, the rules, and a built-in snapshot of the guide). If this session can show a "save skill" card, use it. Otherwise say so and use item 3.
4. **The backup file.** Save the same SKILL.md as a file they can download (a zip of the folder if you can make one, otherwise the SKILL.md itself), named for the Skill Name, and give the steps in `references/install-steps.md`.
5. **Default voice.** If this is the agent's own first voice, offer to make it their default. With their OK, check Default on that Voices row (and uncheck it on any other row), and fill the "Default voice" line on the Voice Library page with the skill name. If they have several voices, say which one is the default.
6. **Setup Status:** set `voice_profile` to today's date when it's the agent's own voice.
7. **How to use it:** "Say 'write as Maria' or 'in Maria's voice,' or run any NEZ OS writing skill and pick the voice."
8. **Try these first.** Give 3 prompts to try right now, for example: "Write a text to a past client checking in, as Maria." "Write a 3-sentence intro for my listing presentation, as Maria." "Turn this voice memo into a caption, as Maria." Ask them to try one.

## Step 8: Update a voice

Read the entry (guide, Learned section, version, samples list). Offer:

- **New samples:** run Steps 3 to 6 for the new material only, and show what would change in the guide as Before and After.
- **Fold in what it learned:** show each lesson in Learned and ask which ones to fold into the guide. Rewrite the guide with them, and replace the folded lessons with one line: "Folded in at version N on [date]: [count] lessons."

After their OK: update the guide on the entry, raise Version by 1, set the Date, update the samples list and the version log, and build a fresh skill, fresh paste-ready versions and a fresh backup file with the new snapshot. Tell them to replace the installed copy with the new file (see the install steps). Add one Decisions Log row: "Updated [skill name] to version N."

## Keeping voices current (tell the agent this once)

- When they edit a draft or say "I'd never say that" or "too formal" to a voice skill (or to a NEZ OS writing skill using the voice), it offers to save the lesson to that voice's Learned section, one lesson at a time, only with their OK. The next draft uses it right away.
- After about 10 saved lessons, run /nez-voice again to fold them into the guide, raise the version, and get a fresh skill file.

## Next step

Recommend ONE next step:
- After their own voice: write something with it (a follow-up text, a listing description, a post).
- After a teammate's or client's voice: a writing task for that person.
- After an update: install the new file.
- If they have no personality profile, mention /nez-self as optional; never block on it.

End with: "You can run /nez-next any time and I'll tell you your best next step."
