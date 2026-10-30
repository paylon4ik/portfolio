# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start the Astro dev server
- `npm run build` — build the static site to `dist/`
- `npm run preview` — serve the production build locally

There is no linter or test suite.

## Architecture

A static portfolio site built with Astro (no UI framework, default config).

- **Layout:** `src/layouts/Base.astro` wraps every page. It imports the global stylesheet, sets the `<title>`/description, and renders the header nav (with `aria-current` for the active section) and footer. Nav items live in the `nav` array there.
- **Content:** case studies are plain data in `src/data/projects.ts` (`Project` interface + `projects` array). The order of the array sets the order on the work index and the previous/next links on case study pages; `featured: true` controls what appears on the home page.
- **Routing:** `src/pages/work/[slug].astro` generates one page per project via `getStaticPaths()`. Case study body copy and images are currently placeholders in that template, shared by all projects.
- **Images:** there are no real images yet; `Placeholder.astro` renders a labeled box at a given `aspect-ratio`.
- **Styles:** all styling lives in `src/styles/global.css`. Components do not use scoped `<style>` blocks. The file starts with design tokens in `:root` (colors, fonts, type scale, spacing, layout), followed by base, layout utilities (`.container`, `.section`, `.stack`, `.measure`), typography helpers, buttons, and per-component sections.

## Rules

- Use plain CSS only (no preprocessors, CSS-in-JS or utility frameworks).
- Always use the variables from `src/styles/global.css`. Never hard-code colors, font sizes or spacing. If a value is missing, add a token to `:root` instead.
- Use sentence case for headings and buttons.
- Button labels start with a verb.
- File names are lowercase with hyphens.
- Only change files the task requires.
- Never merge PRs.
