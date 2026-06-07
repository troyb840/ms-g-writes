# MsGwrites.com — Project Context for Claude

## Who this is for

**Genicia Corney** (pen name: Ms. G) — a first-time Christian author launching her debut children's book *A Home to Call Their Own: A Tale of Trusting God*. Author + speaker + Kingdom builder. Growing into adult/YA titles, speaking engagements, curriculum, and merch over time.

## Vibe — read this before designing anything

The site should feel like **a warm hug** the moment a visitor lands. Polished and professional, but warm and welcoming. Spiritually grounded without being preachy. Editorial magazine aesthetic, NOT SaaS landing page.

Genicia's specific note: cream is the base canvas but **must never read as a flat empty cream screen**. Use layered tinted panels, soft overlapping shapes, decorative offset cards, intentional spacing, paper-like warmth. Think layered, dimensional, editorial.

## Brand system (non-negotiable)

### Colors
- `cream #FDF6EE` — base canvas, layered (never flat fills)
- `coral #D99985` — primary CTAs, emotional signature, used SPARINGLY for impact
- `olive #6B703C` — headings, structural emphasis, dividers
- `terracotta #5A3A33` — body text, footer, dark anchor (NOT black)
- `peach #E8C6B5` — soft cards, transitions, supporting surfaces

### Fonts
- **Josefin Slab** — display AND body (via `font-display` and `font-body` — both map to `--font-josefin`)
- **Dancing Script** — accent/taglines ONLY, never body (via `font-script`)
- ~~Lora~~ — replaced by Josefin Slab. ~~Lato~~ — removed.

### Reusable classes (defined in globals.css)
- `.btn-primary` — coral pill button
- `.btn-secondary` — olive outline pill
- `.link-arrow` — coral arrow link with hover slide
- `.card-warm` — peach card surface
- `.card-elevated` — featured card
- `.accent-script` — script font in coral
- `.eyebrow` — small caps section label in olive
- `.pull-quote` — display italic for quotes
- `.panel-peach`, `.panel-cream-warm`, `.panel-coral-soft` — section backgrounds
- `.section-container`, `.section-narrow` — horizontal rhythm

## Stack

- Next.js 15 App Router + TypeScript
- Tailwind CSS + Framer Motion
- Sanity CMS (mounted at `/studio` for Genicia's self-service)
- Cloudflare Pages hosting (static export with ISR)
- Formspree for contact/booking forms
- ConvertKit/Kit for newsletter

## Critical: she self-manages content

The whole point of using Sanity is that **Genicia adds her own content** — books, events, resources, bio updates — without calling the developer. Every page must read from Sanity, never from hardcoded MDX or static data.

Queries are pre-built in `lib/sanity.ts`. Use them. Don't write inline GROQ in components.

## Schemas already defined

- **author** (singleton) — bio, photo, tagline, headline, speaker PDF
- **siteSettings** (singleton) — socials, newsletter form ID, footer text
- **book** — audience filter (children 6-8 / 9-12 / YA / adult), status (coming-soon / preorder / available), buy links, linked resources
- **event** — auto-sorts upcoming vs past by `startDateTime`
- **resource** — grouped by Printables / Study / Educators / Kids, with "Coming Soon" state when `downloadFile` is empty

## "Coming Soon" states are first-class

Most content launches with placeholders:
- Book cover → styled card with "Cover Coming Soon" in brand colors
- Resource thumbnails → placeholder with "Download Coming Soon"
- Speaker one-sheet → button labeled "Speaker Bio — Coming Soon"
- Merch → "Coming Soon" cards with optional waitlist

These should look intentional and beautiful, not broken. They're a feature of the design, not a bug.

## Page inventory

| Path | Status | Notes |
|---|---|---|
| `/` | BUILT | Hero, BrandIntro, FeaturedBook, ResourcesTeaser, EventsTeaser, Newsletter all done |
| `/about` | BUILT | AboutHero, AboutBio (PortableText), AboutPillars, AboutSpeaker |
| `/books` | BUILT | BooksGrid with audience tab filter, BookCard with status badge |
| `/books/[slug]` | BUILT | Cover, buy links, RichText desc, sample pages, linked resources |
| `/resources` | BUILT | 4 group sections (Printables/Study/Educators/Kids), Coming Soon states |
| `/resources/[group]` | BUILT | Sub-pages via generateStaticParams from GROUPS array |
| `/events` | BUILT | Upcoming list + past archive, empty state, booking CTA band |
| `/events/booking` | BUILT | Full BookingForm with multi-select event types, Formspree |
| `/shop` | BUILT | Intentional Coming Soon with 4 preview cards |
| `/contact` | BUILT | ContactForm + sidebar, Formspree |
| `/privacy`, `/terms` | BUILT | Full content pages |
| `/studio` | BUILT | Sanity Studio mount |
| `sitemap.ts` | BUILT | All static + dynamic book pages + resource groups |
| `robots.ts` | BUILT | Allow all, disallow /studio/ /api/ |
| `opengraph-image.tsx` | BUILT | Edge-rendered 1200×630 OG image |

## Header / Footer

**Header:**
- Logo placeholder (typographic "MsGwrites" in Lora + terracotta until logo delivered)
- Nav: Home | Books | Resources | Events | Shop | About | Contact
- Newsletter CTA button (coral pill) in nav, prominent
- Social icons top-right
- Sticky on scroll
- Mobile hamburger

**Footer:**
- Terracotta background, cream text
- Quick links to all pages
- Social icons
- Secondary newsletter signup
- Optional scripture/tagline above copyright
- Privacy/Terms links
- © 2026 Genicia Corney / MsGwrites.com

## Forms — what each needs

**Newsletter** — ConvertKit embed. First name + email. Confirmation: "Thank you for reaching out. You will hear from me soon!" Do NOT gate resources behind it.

**Contact** — Formspree. Name, email, subject (dropdown: General / Book an Event / Media & Press / Other), message.

**Booking** — Formspree. Organization, contact name, email, phone, event type (multi-select from her brief list), date(s), location, audience size, format (in-person/virtual/hybrid), description/vision, budget range, additional notes.

## Don't do this

- Don't write inline content — pull from Sanity
- Don't use black for text — use terracotta
- Don't use full-bleed coral backgrounds — coral is for emphasis, not surface
- Don't gate the resources behind email signup
- Don't mix Josefin Slab with other serifs — Josefin Slab only for text
- Don't use harsh shadows — use `shadow-warm` / `shadow-warm-lg`
- Don't use sharp corners on cards — use `rounded-card`
- Don't add features she didn't ask for (no chatbot, no AI, no dark mode)

## When in doubt

Re-read her brief in `docs/website-framework.md` (paste it in when you have it). She wrote it with extraordinary clarity. Trust her vision; deviate only when it makes the product stronger AND stays cohesive with brand identity.

---

## Implementation details (added by Claude — DO NOT DELETE)

### Route structure
- All site pages live under `app/(site)/` route group — this isolates the site layout (Header/Footer) from `/studio`
- Sanity Studio is at `app/studio/[[...tool]]/page.tsx` — outside the (site) group
- `app/layout.tsx` is the root (no header/footer) — `app/(site)/layout.tsx` adds them

### Key files
- `lib/sanity.ts` — all GROQ queries, sanityClient config, imageBuilder
- `components/shared/RichText.tsx` — PortableText renderer with brand styles
- `components/resources/groups.ts` — PLAIN `.ts` file (NOT "use client"), exports GROUPS array + GroupConfig type. CRITICAL: must stay a plain .ts — server pages import from here
- `components/layout/Header.tsx` — sticky nav, mobile hamburger, newsletter CTA
- `components/layout/Footer.tsx` — terracotta bg, secondary newsletter signup
- `app/api/subscribe/route.ts` — ConvertKit subscribe handler (graceful mock when env vars absent)

### Next.js 15 gotchas
- Dynamic route `params` is a Promise: `params: Promise<{ slug: string }>` — must `await params`
- All dynamic pages: `books/[slug]`, `resources/[group]` use this pattern
- Server components cannot import from "use client" files that re-export data — extract data to plain `.ts` (see groups.ts fix above)

### Framer Motion
- All animation components use `"use client"` + `whileInView` with `once: true`
- Screenshot tools see blank sections because elements start at `opacity: 0` — this is correct behavior in browser

### Fonts loaded in
- `app/layout.tsx` via `next/font/google`: `josefin_slab` → `--font-josefin`, `dancing_script` → `--font-dancing`
- Lora + Lato removed; Josefin Slab is the sole text font

### Tailwind custom tokens (tailwind.config.ts)
- `font-display` and `font-body` BOTH map to `var(--font-josefin)` (condensed slab editorial)
- `font-script` → `var(--font-dancing)`
- `rounded-card` = `1rem`, `rounded-pill` = `9999px`
- `shadow-warm` / `shadow-warm-lg` — terracotta-tinted, never harsh black
- `spacing.section` / `spacing.section-sm` — clamp-based editorial breathing room

### Sanity queries (in lib/sanity.ts)
- `authorQuery` — singleton author doc
- `siteSettingsQuery` — singleton settings
- `allBooksQuery` — all books sorted by order
- `bookBySlugQuery` — single book by slug
- `upcomingEventsQuery` / `pastEventsQuery` — auto-filtered by startDateTime vs now
- `allResourcesQuery` — all resources
- `resourcesByGroupQuery` — resources filtered by group slug

### Forms
- Contact form: currently mocks success (TODO: wire Resend API at `/api/contact`)
- Booking form: currently mocks success (TODO: wire Resend API at `/api/booking`)
- Newsletter: `POST /api/subscribe` → ConvertKit v3 API
  - `NEXT_PUBLIC_CONVERTKIT_FORM_ID` + `CONVERTKIT_API_KEY` (server-only, no NEXT_PUBLIC_)
- **No Formspree** — forms will use custom Next.js API routes + Resend for email delivery when ready

### Cloudflare Pages deployment
- Uses `@cloudflare/next-on-pages` (NOT static export — preserves API routes + ISR)
- `wrangler.toml` at project root with `nodejs_compat` flag
- Build: `npm run build:cf` → deploy: `npm run deploy`
- Local CF preview: `npm run cf:preview`
- Secrets go in Cloudflare dashboard (not wrangler.toml): SANITY_API_TOKEN, CONVERTKIT_API_KEY, FORMSPREE IDs

### Environment variables (.env.local — gitignored)
```
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-01-01
SANITY_API_TOKEN=          ← READ-ONLY token only; site doesn't need write access
NEXT_PUBLIC_CONVERTKIT_FORM_ID=
CONVERTKIT_API_KEY=        ← server-only, no NEXT_PUBLIC_ prefix
RESEND_API_KEY=            ← server-only, added when forms are wired up
NEXT_PUBLIC_SITE_URL=https://msgwrites.com
```

### Pending tasks (as of last session)
- [x] Save `genicia.jpg` to `public/genicia.jpg` ✓
- [x] Formspree removed — forms mock success, will use Resend when ready ✓
- [ ] Create ConvertKit form → add form ID + API key to .env.local
- [ ] Add content in Sanity Studio: Author profile, Site Settings, debut Book entry
- [ ] Revoke exposed Sanity API token at https://www.sanity.io/manage (was leaked in chat)
- [ ] Wire real email sending: sign up at resend.com → add RESEND_API_KEY → build /api/contact + /api/booking routes
- [ ] Deploy to Cloudflare Pages: `wrangler login` → connect repo or `npm run deploy`

### Book placeholder slug
- `books/[slug]/page.tsx` has a hardcoded placeholder for slug `a-home-to-call-their-own` so the page renders beautifully even before Sanity has data. Remove once real book entry exists in Sanity.
