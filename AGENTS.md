# Overview

Personal portfolio for **Emon Ahmed** — Full-Stack Software Engineer. A single marketing page (hero → projects → about → skills → experience → contact) rendered as static HTML at build time. The visual language is the Wise-inspired brand system specified in `DESIGN.md`: one lime-green CTA accent, sage canvas, heavy display face over Inter body, 24 px radius on every button and card.

# Tech Stack

| Layer       | Choice                                                                                        | Notes                                                                               |
| ----------- | --------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| Framework   | Next.js 16.3.2 — App Router, Turbopack                                                        | Server Components by default; `app/` only, no `pages/`                              |
| UI runtime  | React 19.2.8 / react-dom 19.2.8                                                               |                                                                                     |
| Language    | TypeScript 5, `strict: true`                                                                  | `@/*` alias resolves to the repo root                                               |
| Styling     | Tailwind CSS v4 via `@tailwindcss/postcss`                                                    | CSS-first config — **no `tailwind.config`**; every token lives in `app/globals.css` |
| Components  | shadcn 4 (`style: radix-nova`, `rsc: true`) over `radix-ui` primitives                        | `cn()` = `clsx` + `tailwind-merge`; variants via `class-variance-authority`         |
| Icons       | `lucide-react`                                                                                | shadcn `iconLibrary`                                                                |
| Fonts       | `next/font/google` — Inter (body), Manrope (display / Wise Sans stand-in), Geist + Geist Mono | Exposed as `--font-sans`, `--font-manrope`, `--font-geist-*`                        |
| Animation   | `tw-animate-css`                                                                              |                                                                                     |
| Images      | `next/image`                                                                                  | Remote host allow-list in `next.config.ts` (`images.unsplash.com`)                  |
| Package mgr | pnpm 11.9.0                                                                                   | `pnpm-workspace.yaml` disables `sharp` / `unrs-resolver` builds                     |
| Lint        | ESLint 9 flat config — `eslint-config-next` core-web-vitals + typescript                      | `pnpm lint`                                                                         |

**Commands:** `pnpm dev` · `pnpm build` · `pnpm start` · `pnpm lint` · `npx tsc --noEmit`

# Structure

- `app/` — App Router entry. `layout.tsx` loads fonts and sets `<html>` classes; `page.tsx` composes the page from section components; `globals.css` holds the whole design system (`@theme` token blocks, `:root` / `.dark` palettes, base layer).
- `components/home/` — one file per page band (`hero`, `navbar`, `nav-link`, `brand-mark`). Each exports a named component plus a default.
- `components/ui/` — reusable primitives and chrome (`button`, `dot-pattern-1`, `design-frame`).
- `lib/utils.ts` — `cn()`.
- `DESIGN.md` — the brand spec: design principles, colour / type / spacing tokens, component recipes, do's and don'ts.

# Conventions

- **Tokens, never raw values.** Style with the semantic utilities generated in `globals.css` (`bg-primary`, `text-body`, `text-display-xl`, `rounded-xl`, `border-border-soft`). No hex codes or ad-hoc `text-[13px]` in markup.
- **Server by default.** Add `"use client"` only when a component actually needs a hook or browser API.
- **Type scale carries hierarchy.** Use the `display-*` / `body-*` / `caption` / `button-md` tokens rather than `text-4xl font-bold`-style stacks.
- **Merge classes with `cn()`** so callers can override via a `className` prop.
- Read `DESIGN.md` before adding or restyling a surface; it is the source of truth over anything inferred from existing markup.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
