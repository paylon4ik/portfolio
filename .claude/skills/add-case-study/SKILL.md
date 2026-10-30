---
name: add-case-study
description: Add a new case study to the portfolio. Use when the user asks to add, create or set up a case study or project page. Collects the details, adds the project to src/data/projects.ts (which generates the page and the Work card), optionally features it on Home, then starts the dev server and returns the URL.
---

# Add a case study

Case studies in this site are data-driven. One entry in `src/data/projects.ts` produces all three things:

- the case study page, via the shared template `src/pages/work/[slug].astro` (`getStaticPaths()`)
- the card on the Work grid (`src/pages/work/index.astro` renders every project)
- the card on Home under "Selected work" (`src/pages/index.astro` renders projects with `featured: true`)

So do **not** create a new `.astro` page, copy the template, or edit the Work/Home pages. Add the data entry only.

## 1. Ask for the details

Ask the user for these in a single message, and wait for the answers:

1. Title
2. Client
3. Year
4. Role
5. One-line summary
6. Should it appear in "Selected work" on the Home page? (yes/no, default no)

Optionally offer: team, duration, and where it should sit in the list (default: first, since the newest work usually leads). Don't block on these.

If an answer is missing, ask again for that one only. Don't invent titles, clients or summaries.

## 2. Add the project entry

Edit `src/data/projects.ts` and add an object to the `projects` array that matches the `Project` interface:

```ts
{
  slug: 'kebab-case-from-title',
  title: '…',
  client: '…',
  year: '2026',
  summary: '…',
  role: '…',
  team: 'Team placeholder',
  duration: 'Duration placeholder',
  featured: false,
},
```

- `slug`: derive from the title — lowercase, hyphens, no punctuation, short (3–5 words). Make sure it doesn't clash with an existing slug.
- `year` is a string.
- `team` / `duration`: use the user's values if given, otherwise the placeholders above.
- `featured`: `true` only if the user said yes to Home.
- Position: array order sets the order on the Work grid, on Home, and the previous/next links on case study pages. Insert where the user asked; default to the top.
- Title and summary use sentence case (per CLAUDE.md). If the user's title is in Title Case, convert it and mention that you did.
- Match the existing file style: single quotes, trailing commas, two-space indent.

## 3. Images

Use the existing gray placeholder boxes — nothing to add. The template already renders `Placeholder.astro` (styled by `.placeholder` with `--color-placeholder`) for the hero, figures and the card cover. Never add real image files, `<img>` tags, or hard-coded colors.

## 4. Start the dev server and share the URL

1. Check whether a dev server is already running (e.g. `lsof -i :4321`). If it is, reuse it.
2. Otherwise run `npm run dev` in the background.
3. Read the server output for the actual local URL (Astro uses `http://localhost:4321/` by default, but picks another port if that one is taken).
4. Give the user:
   - the case study page: `<base-url>work/<slug>`
   - the Work grid: `<base-url>work`
   - the Home page, if it was featured

## Rules

- Only change `src/data/projects.ts`.
- Don't commit, push or open a PR unless the user asks. Never merge PRs.
