---
name: nez-self
description: Builds a real estate agent's personality and work-style profile for NEZ OS, so every skill fits how they think, decide, communicate and stay motivated. Uses results they already have (DISC, Enneagram, 16 Personalities, CliftonStrengths, Kolbe, Human Design) or 31 short questions, then explains the result in plain words and saves it to the Master Profile. Also builds profiles for teammates in the People database, so messages fit how each person reads best. Triggers when the user runs /nez-self, or says "personality profile", "learn about me", "how do I work best", "how should I message my team", "profile my teammate", or "work style".
---

# NEZ OS Self: How You Work Best

## Purpose

Learn how the agent works, decides, communicates and stays motivated, and save it to their brain. Then every NEZ OS skill shapes its work to fit them: a fast decider gets short options and a clear pick, a planner gets the steps and the reasons, a people person gets plans built around conversations. It also profiles teammates so the agent's messages land with each person.

## Core rules

- **Read the brain rules first:** the plugin's `references/brain-rules.md` (two levels up from this skill). Follow it for finding the brain, saving and logging.
- **One question at a time,** always with lettered options. After each pick, add "Want to add anything?" the first few times, then only when an answer seems to need it. Match their language (Spanish if they write in Spanish).
- **Two answers is fine.** If they say "B and C," ask "Which one is more like you?" if they don't say. The first counts fully; the second only breaks ties. Note both.
- **Explain, don't label.** A style describes tendencies, not limits. Never box them in, and never use a profile to judge anyone.
- **Plain language.** No jargon, no field names, no IDs.
- **Stay in your lane.** This is a work-style tool, not a psychological or medical assessment. Never diagnose, and never save health, family, religion, age or other personal details.
- **No em dashes.**

## Step 1: Who is it for?

Find the brain per the brain rules. Read the Master Profile's **My personality** section and the **People** database (`people_ds_id`). Then ask: "Is this for you or for someone on your team?"

- **For them:** continue below. If My personality is already filled in, say so and ask: update it, redo it, or leave it.
- **For a teammate:** follow `references/teammates.md`. Never run the agent's questions on their behalf.

## Step 2: Opening

> "This is what makes NEZ OS fit you instead of giving you the same thing it gives every agent. I'll learn how you work, decide and communicate, and every plan, script and message after this gets shaped around you. About 10 minutes, mostly multiple choice, no wrong answers. Ready?"

Then ask:

> "Do you already have results from a personality or strengths test? Any of these work, and more than one is great:
> DISC · Enneagram · 16 Personalities (Myers-Briggs) · CliftonStrengths · Kolbe · Human Design · something else
>
> A) Yes, I'll paste my results
> B) Not yet, point me to a free one first
> C) No, let's just do your questions"

**B: free tests.** Share these, then wait:
- DISC style: 123test.com (search "DISC personality test"), about 10 minutes.
- 16 Personalities: 16personalities.com, about 12 minutes.
- Enneagram: truity.com (search "Enneagram test"), about 10 minutes.
- Human Design: mybodygraph.com, needs birth date, time and place. They only need to bring back their type and authority; you don't save birth details.

"Paste what you get back and I'll turn it into your profile. Or say 'questions' and we'll start now."

**A: results.** Name each result you recognize, summarize it in plain words, then ask only the questions their results don't clearly answer:

| Result | Usually answers |
| --- | --- |
| DISC | Sections 1 and 2 (it gives the work style directly) |
| Enneagram | Q17 to Q21, plus Q2 and Q8 |
| 16 Personalities / Myers-Briggs | Q1, Q5, Q25, Q26, Q28, Q29 |
| CliftonStrengths | Q7, Q20 |
| Kolbe | Q1, Q6 |
| Human Design | Section 4 |
| Anything else | Decide from what it measures; ask if unsure |

Always ask Q13 to Q16 (content and phrases), Q22 (success beyond the numbers) and Q23 (biggest thing holding them back). No test covers those. Then score (Step 3): a DISC result gives the work style directly; for other tests, estimate the closest style and say it's an estimate. Note which tests they gave under Other results I shared.

**C: questions.** Ask Q1 to Q31 in order.

---

## The questions

Letters map to four work styles: **A = Driver, B = Connector, C = Steady, D = Planner.** Sections 1 to 3 are scored. Section 4 is read directly.

### Section 1: How you work

**Q1.** "You have a big decision to make. You usually:
A) Decide fast and adjust later
B) Talk it out with someone until it clicks
C) Make sure the people it affects are on board first
D) Research everything before deciding"

**Q2.** "A deal starts falling apart. Your first move:
A) Jump in and fix it
B) Call someone and talk it through
C) Check on my client and calm things down
D) Figure out exactly what went wrong before acting"

**Q3.** "At a team meeting or office event, you're usually:
A) Pushing for a decision and next steps
B) Keeping the energy up
C) Making sure everyone's heard
D) Asking the questions nobody else thought of"

**Q4.** "Feedback works best for you when it's:
A) Blunt: just tell me
B) Upbeat and conversational
C) Kind and thoughtful
D) Specific, with examples"

**Q5.** "Your work energy looks like:
A) Big bursts, then I crash
B) High around people, lower alone
C) Steady all day
D) Long stretches of deep focus"

**Q6.** "Starting something new (a new lead source, a new system), you:
A) Jump in and learn as I go
B) Get excited, tell everyone, ride the momentum
C) Get support and a clear plan first
D) Map out every step before I start"

**Q7.** "Your biggest strength as an agent:
A) Getting deals done
B) Building relationships and making people feel good
C) Being someone clients trust completely
D) Knowing the market, the numbers and the contract inside out"

**Q8.** "When you're overwhelmed, you:
A) Push through harder
B) Talk to someone to get out of my head
C) Slow down and take care of myself and the people around me
D) Step back and make a plan"

### Section 2: How you communicate

**Q9.** "Explaining something to a client, you lead with:
A) The bottom line
B) A story or an example
C) Reassurance that I've got them
D) The facts and the numbers"

**Q10.** "Your content naturally sounds:
A) Bold and direct
B) Warm and fun
C) Supportive and helpful
D) Detailed and educational"

**Q11.** "A seller pushes back on your price. You:
A) Hold my ground with confidence
B) Find common ground and keep it positive
C) Listen until they feel heard, then guide
D) Walk them through the data"

**Q12.** "Your best clients would say you're:
A) Confident and gets results
B) Fun and genuinely cares
C) Patient and always there
D) Thorough and knows everything"

**Q13.** "Your biggest challenge with content:
A) Slowing down to explain the details
B) Sticking to one topic
C) Putting myself out there
D) Making it feel personal, not just informational"

**Q14.** "The content that feels most natural:
A) Opinions and bold takes
B) Stories, behind the scenes, my life
C) Tips and how-tos that help people
D) Market data and deep dives"

**Q15.** "Writing a caption or an email, you:
A) Write it fast and post it
B) It flows when I'm in the mood, but I get distracted
C) Rewrite it several times
D) Take a long time to get it exactly right"

**Q16.** *(Open.)* First check the Voice Library's "Words and phrases I use." If it has phrases, skip this and say "I already have your phrases from your voice setup." Otherwise: "What words or phrases do you say all the time, on calls or in your content?" Save them to the Voice Library's "Words and phrases I use" too, so they're only asked once.

### Section 3: What drives you

**Q17.** "What drives you most right now?
A) Winning: big goals, top producer
B) Impact: being known and inspiring people
C) Security: building something stable for my family and clients
D) Mastery: being the expert in my market"

**Q18.** "You feel most successful when:
A) You close a big deal or hit a big number
B) Someone says you helped or inspired them
C) Your clients and family are taken care of
D) You solve a problem nobody else could"

**Q19.** "What kills your motivation fastest?
A) Slow progress and too many rules
B) Working alone with no one to bounce ideas off
C) Conflict or feeling unsupported
D) Rushing without a plan or enough information"

**Q20.** "Your ideal workday:
A) Back-to-back calls, showings and decisions
B) A mix of people, creative work and flexibility
C) A predictable schedule with time for relationships
D) Long blocks of quiet time to think and build"

**Q21.** "When you set a goal, you:
A) Make it big, say it out loud, and go hard
B) Get excited about the vision and share it with everyone
C) Make sure it's realistic and I have support around it
D) Break it into a step-by-step plan first"

**Q22.** *(Open.)* "Beyond the money, what does success look like for you? More time with family, a team, being the name in your market, travel? Say it your way."

**Q23.** *(Open.)* "What's the biggest thing holding you back right now?"

### Section 4: Your energy and decisions

If they gave a Human Design type and authority, save them under Other results and skip any question they clearly answer. These are read as tendencies, not scored for work style.

**Q24.** "Opportunities in your business usually come from:
A) Me going after them
B) Me responding to what shows up
C) People asking for my help or advice
D) Trying different things until something fits"

**Q25.** "Your energy during the day:
A) Steady: I can go all day
B) Comes in waves
C) Depends on who I'm around
D) Not high, but very clear and focused"

**Q26.** "Your best decisions come from:
A) A gut feeling in the moment
B) Sleeping on it
C) Talking it through until it feels right
D) Waiting until it clearly feels right"

**Q27.** "In your business, you naturally:
A) Start things and hand them off
B) Do my best work responding to what's already moving
C) Guide and advise: I see what others miss
D) Explore different things before I find my lane"

**Q28.** "After a full day of showings and client calls, you feel:
A) Energized
B) Good, but ready to unwind
C) Drained: I need alone time
D) It depends on the people"

**Q29.** "When you learn something new, you:
A) Know right away if it's for you
B) Need time to process it
C) Need to talk it through
D) Research it before forming an opinion"

**Q30.** "Are you pretty much the same person everywhere, or do you shift with who you're around?
A) The same everywhere
B) I adapt, but my core stays the same
C) I really take on the energy of the people around me
D) It depends on the situation"

**Q31.** *(Open.)* "What time of day do you do your best thinking, and your best people work?"

---

## Step 3: Score it

1. Count A, B, C and D across Q1 to Q15 and Q17 to Q21 (20 scored questions). When they gave two answers, the stronger one counts fully and the other only breaks ties. Note every two-letter answer under Answer notes.
2. **Main style** = the highest count. **Second style** = the next highest. If two are within one point, call it a blend ("Driver-Planner").
3. If they gave a DISC result, use it for the main style (D = Driver, I = Connector, S = Steady, C = Planner) and say so. For other tests, estimate the closest style and say it's an estimate.

| Style | Tends to | Works best with |
| --- | --- | --- |
| **Driver** | Decides fast, wants results, hates slow progress | Short options, a clear recommendation, the bottom line first |
| **Connector** | Energized by people, leads with stories, loses steam alone | Plans built around conversations and visibility, encouragement, variety |
| **Steady** | Builds trust, protects stability, avoids conflict | A clear step-by-step plan, support, no surprises, time to adjust |
| **Planner** | Researches, wants accuracy, hates rushing | The details and the reasons, data, time to review before deciding |

**Energy tendency (approximate).** Count A to D across Q24, Q26, Q27 and Q29 (Q25, Q28 and Q30 add color):

| Mostly | Tendency | In plain words |
| --- | --- | --- |
| A | Starter | Creates their own opportunities, works in bursts, likes to start and hand off |
| B | Responder | Does best responding to what's in motion, steady when doing work they like |
| C | Guide | Sees what others miss, best when asked for advice, needs to protect their energy |
| D | Explorer | Tries things before committing, takes time to decide, reads the room |

Always say it's an approximation. If they want their official Human Design type, point them to a free chart at mybodygraph.com (it needs birth date, time and place, which you never save). If they already shared their type, use theirs and skip the approximation.

## Step 4: Explain it

In plain words, under 200 words, show:
- their main and second style, and what that means day to day as an agent,
- their top two strengths (from their answers),
- one or two blind spots to watch, framed kindly,
- how they like information,
- what drives them and what drains them,
- their energy pattern, approximate energy tendency and best hours (Section 4),
- **how this changes what you create for them:** one or two sentences, for example "Every plan, script and email I make for you will be built for a Connector: around conversations, with a story up front and room for variety. You'll see the difference right away."

Ask: "Does this sound like you? Want to go deeper on any of this before we move on?" Revise until they agree.

## Step 5: Save it

Fetch the Master Profile and fill the **My personality** lines (see `../nez-setup/templates/master-profile.md`) inside that section, never at the end of the page. Keep every label; replace only the values:

- **Work style:** main and second style, for example "Connector, then Steady"
- **How I decide:** from Q1, Q26, Q29 and their results
- **How I like information:** six short parts: length, format (bullets, story or table), what to lead with, directness, detail, updates
- **How I take feedback:** Q4
- **What drives me:** Q17, Q18 and how they set goals (Q21)
- **What drains me:** Q19
- **When I'm stressed:** Q2 and Q8
- **My energy:** Q5, Q25, Q28, Q30, best hours from Q31, and the approximate energy tendency (labeled approximate)
- **Content strengths and challenge:** Q10, Q13, Q14, Q15
- **Success beyond the numbers:** Q22, in their words
- **Biggest thing holding me back:** Q23, in their words
- **Other results I shared:** each test and its result in one line, or "none"
- **How my AI should work with me:** 3 to 5 short instructions drawn from the above (for example "Give me 2 options and your pick," "Show me the numbers before the plan," "Plan my week around people time in the morning")
- **Profile source and date:** "NEZ OS questions" or the tests used, and today's date
- **Answer notes:** any two-letter answers, with the stronger one marked, or "none"
- **My People page:** a link to their own People row (filled after step 2 below)

Then:
1. Add an **AI Memory** row: Memory "How to work with me", Type Preference, Area General, Applies To "All NEZ OS skills", Details = the "How my AI should work with me" lines, Saved By Claude, Status Active, Date today. If an Active row with that name exists, set it to Replaced first.
2. Create or update their own row in **People** per Step 5 of `references/teammates.md` (Role "Me", Human or AI "Human", Profile Source "Own answers", Status Active, Personality, Other Results and Communication Tips from the above), with its page per `templates/person-page.md`.
3. Set `self_profile` in Setup Status to today's date.

## Step 6: Next step

> "Now every NEZ OS skill knows how you work best. Next, let's turn your goals into a plan that fits you. Run /nez-next any time to see your best next step."

If they lead a team, add: "Want to do a quick profile for someone on your team? It helps every message you send them land better."

## How other skills use this

Every NEZ OS skill reads My personality before working and shapes the **structure** of what it gives (length, order, detail, how many options, when to recommend), never the facts or the rules. A skill never mentions the profile in a client-facing message.
