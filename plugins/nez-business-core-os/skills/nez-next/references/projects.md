# Claude Projects for NEZ OS

Used by /nez-next once, when path steps 1 to 5 are done (core profile, compliance, voice and edge, /nez-self, goals), or any time the agent asks "how do I set up Projects?". Suggest a few Claude Projects, one per kind of work, so each conversation stays focused and easy to find. Every Project reads the same NEZ OS brain in Notion, so nothing gets entered twice.

## Why (say it in two or three sentences)

- One Project per kind of work keeps chats from getting mixed up, and makes old work easy to find.
- Your brain lives in Notion, so every Project already knows your business, your voice and your rules.
- You can run /nez-next inside any Project to see your best next step.

## Suggested Projects

Only suggest Projects the agent will actually use, and only ones with at least one skill they have installed (check your available skills). Skip a Project if all of its skills are still coming soon, and skip YouTube if they have no channel and don't want one. Two or three is plenty to start. Say which skills to run in each.

| Project name | What it's for | Skills to run there |
| --- | --- | --- |
| NEZ: Business & Goals | Your plan, weekly check-ins, reviews and big decisions | /nez-bizplan, /nez-goals, /nez-review, /nez-advisor, /nez-board |
| NEZ: Leads & Follow-up | Lead magnets, funnels, emails and nurture | /nez-lead-magnet, /nez-funnel, /nez-dm-automation, /nez-email, /nez-newsletter |
| NEZ: Clients & Deals | Listing appointments, buyers, transactions, seller updates, practice | /nez-listing-appt, /nez-buyer, /nez-transaction, /nez-seller-updates, /nez-roleplay |
| NEZ: Content & Social | Your content plan, Reels, carousels, captions and videos | /nez-content, /nez-hooks, /nez-reels, /nez-market-carousel, /nez-social, /nez-walkthrough-video |
| NEZ: YouTube | Plan, script and publish videos | /nez-youtube, /nez-video-edit |
| NEZ: Website & SEO | Get found on Google and turn visitors into leads | /nez-website, /nez-listing-page, /nez-seo, /nez-blog, /nez-site-audit |

## How to set one up

Give these steps for the first Project they pick, one step at a time, and wait for them to finish each. Never assume exact menu names, and offer screenshot help:

"Here's how to set up a Project. If your screen looks different, send me a screenshot and I'll tell you exactly what to click.

1. In Claude, find **Projects** (usually in the sidebar) and create a new one.
2. Name it, for example 'NEZ: Business & Goals,' and add a one-line description.
3. In the Project's instructions, add this line: 'This Project uses my NEZ OS skills for [what it's for]. My NEZ OS brain in Notion is my source of truth. If I'm not sure what to do, run /nez-next.'
4. Make sure the Notion connector is on for this Project, the same way you connected it during setup.
5. Start a new chat inside the Project and run its first skill."

Tell them Project instructions usually apply to new chats in that Project, not chats that were already open.

## Rules

- **Offer it once.** After offering, write `projects_offered: <today's date>` in the Master Profile's Setup Status. That is the only thing /nez-next ever writes.
- If they say no or "later," that's fine. Tell them they can ask any time ("how do I set up Projects?").
- If they ask again later, give the steps again without checking the line.
- Keep it simple. Don't assume they've used Projects before.
- Never put passwords, API keys or client details in Project instructions.
