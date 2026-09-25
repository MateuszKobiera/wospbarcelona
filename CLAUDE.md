# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## About this project

Website for the WOŚP Barcelona fundraising chapter (Sztab WOŚP Barcelona) — a Polish charity volunteer group in Barcelona organizing annual WOŚP (Great Orchestra of Christmas Charity) finals and related events.

## Commands

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

No tests are configured in this project.

## Architecture

**Framework**: Next.js 16 App Router with TypeScript, Tailwind CSS v4, and `next-intl` for internationalization.

### Internationalization

All routes are locale-prefixed (`/pl`, `/en`, `/es`, `/ca`). Supported locales are defined in `src/i18n.ts`. The default locale is `pl` (Polish). Translation strings live in `messages/{locale}.json`. The routing middleware is in `src/proxy.ts` (note: used as Next.js middleware via the filename convention — it should be called `middleware.ts` at the root, but here it is exported from `src/proxy.ts` and Next.js picks it up).

- Server components use `getTranslations({ locale, namespace })` from `next-intl/server`
- Client components use `useTranslations(namespace)` from `next-intl`
- Every page under `src/app/[locale]/` receives `params: Promise<{ locale: string }>` and must await it

### Page structure

```
src/app/
  layout.tsx              # Root layout (minimal, no intl)
  [locale]/
    layout.tsx            # Locale layout: wraps all pages with NextIntlClientProvider, Header, Footer
    page.tsx              # Home page
    about/                # About page (server + client split)
    blog/
      page.tsx            # Blog listing
      [slug]/page.tsx     # Blog post detail
    contact/              # Contact page (server + client split)
    donate/               # Donate page
    events/
      page.tsx            # Events listing
      [id]/page.tsx       # Event detail (uses inline allEvents data array)
    sponsors/             # Sponsors page (server + client split)
```

Pages with complex client interactivity use a `*PageClient.tsx` companion file that is imported and rendered inside the server `page.tsx`.

### Content management

Content is stored as TypeScript/JSX data files — there is no CMS or database:

- **`src/content/blog.tsx`** — Polish-only blog posts (`BlogPost[]`). Each post has a `slug`, metadata, and an array of `sections` containing `React.ReactNode` bodies (inline JSX with Images, links, etc.).
- **`src/content/blog-i18n.tsx`** — Multilingual blog posts (`BlogPostI18n[]`). Each post has a `content` object with keys `pl | en | es | ca`, each containing `title`, `excerpt`, and `sections`. Use `getAllPostsForLocale(locale)` to get posts for a given locale.
- **Events data** — Defined inline in `src/app/[locale]/events/[id]/page.tsx` as an `allEvents` array. Adding events requires editing this file.
- **Sponsors data** — Defined inline in `src/app/[locale]/sponsors/SponsorsPageClient.tsx`. Each sponsor has a `key` (used to look up translations), optional `logoUrl`, and optional `links`. Sponsor names and descriptions come from `messages/{locale}.json` under the `sponsors` namespace.

### Translations and content keys

When adding a new sponsor or event, two things are always needed:
1. Add the data entry (in the relevant `*PageClient.tsx` or `[id]/page.tsx`)
2. Add corresponding translation keys in all four `messages/*.json` files

### UI components

`src/components/ui/` contains shadcn/ui-style primitives (Button, Card, Input, Label, Textarea, DropdownMenu). These use `class-variance-authority` and `tailwind-merge`. Import with `@/components/ui/...`.

Icons come from `lucide-react` and brand icons from `simple-icons` (accessed via `simple-icons/icons` named exports like `siFacebook`).

### Aliases

`@/` maps to `src/` (configured in `tsconfig.json`).

### Image handling

Images live in `public/images/`. Next.js `<Image>` is used throughout with `unoptimized: true` in `next.config.ts` (suitable for static hosting). Always provide `width`, `height`, and `sizes` props.