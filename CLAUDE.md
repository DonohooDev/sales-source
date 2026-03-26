# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Sales Source LLC landing page — static SvelteKit site deployed to Netlify. Uses Svelte 4, TailwindCSS 3, Embla Carousel, and EmailJS for contact forms.

## Commands

- `pnpm dev` — dev server
- `pnpm build` — static build to `build/`
- `pnpm preview` — preview production build
- `pnpm check` — svelte-check + TypeScript
- `pnpm lint` — prettier + eslint
- `pnpm format` — prettier --write

Package manager is **pnpm** (>=9.1). Node >=22.2.

## Architecture

- **Static adapter** (`adapter-static`) — all pages prerendered (`+layout.ts` exports `prerender = true`), output to `build/`, 404 fallback
- **Routing** — SvelteKit file-based routing under `src/routes/`. Major sections: `/`, `/about-us`, `/how-we-help/*`, `/who-we-help/*`, `/blog/*`, `/contact-us`, `/resources`, `/privacy-policy`
- **Blog** — posts live under `src/routes/blog/(posts)/` using a route group with shared `+layout.svelte` and `BlogPostWrapper.svelte`
- **Page data files** — each route has a co-located `.ts` file (e.g. `services.ts`, `audits.ts`, `sdr-teams.ts`) holding page-specific content/data
- **Layout** — `+layout.svelte` composes Header, Footer, and `GridBackgroundWrapper` around page slot
- **Types** — `src/types/` for shared interfaces (`solution-card.ts`, `faq.ts`, `challenge.ts`, `context/header.ts`)
- **Components** — `src/lib/components/` for reusable components (Button, ButtonLink, Solutions, header nav components, home page sections)

## Styling

- TailwindCSS with custom color tokens (`primary`, `secondary`, `bg-primary`, `bg-soft`, `txt`, `txt-header`, etc.) defined in `tailwind.config.js`
- Custom responsive text classes (`text-h1`–`text-h6`, `text-subtitle`, `text-subtext`, `text-paragraph`) and content width classes (`content-xs`–`content-lg`) in both tailwind plugin and `app.css`
- Custom `hocus` variant (hover + focus) available
- Custom breakpoints: sm=480, md=768, lg=976, xl=1200, 2xl=1440
- Font: Lato, light weight default
- Dark mode configured (`selector` strategy) with theme store in `src/lib/theme.ts`

## Deployment

Netlify — two sites: production (`salessource`) and preview (`salessource-preview`).

## Standards

- In all interactions and commit messages, be extremely concise and sacrifice grammar for the sake of concision.
- At the end of each plan, give me a list of unresolved questions to answer, if any.
- Lean on LSP tools when available.
