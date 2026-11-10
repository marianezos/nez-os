# Industry flows

Each file here holds the setup questions for one industry. `/nez-setup` reads `industry_flow` from the Master Profile's Setup Status and loads the matching file.

| File | industry_flow | Status |
| --- | --- | --- |
| `real-estate.md` | `real-estate` | Live |

NEZ OS launches for real estate only. To add an industry later (for example lenders, insurance or coaches):

1. Copy `real-estate.md` to a new file named for the industry.
2. Keep the same six stage headings so the SKILL.md steps and Setup Status lines still work. Drop a stage the industry doesn't need, and tell the agent it isn't available for their industry yet.
3. Reword questions and answer options for that industry. Replace real estate rules (Fair Housing, MLS, brokerage) with the rules that industry follows, and ask for them instead of assuming.
4. Add matching starter objection files under `templates/objections/` if the industry has an objection bank stage, and a scenario in `templates/self-test.md`.
5. Add a row to the table above and a line to Step 2 of `SKILL.md`.

Until then, a non-real-estate user gets the real estate flow with the real-estate-only questions and stages skipped (see Step 2 of `SKILL.md`).
