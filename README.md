# MsGwrites.com — Starter Kit

A complete foundation for building Genicia Corney's author website.

## What's here

```
msgwrites-starter/
├── docs/
│   └── SETUP.md                  # Step-by-step setup instructions
├── tailwind.config.ts            # Brand color tokens, fonts, spacing
├── app/
│   ├── globals.css               # Global styles + design system
│   ├── layout.tsx                # Root layout w/ fonts (Lora, Lato, Dancing Script)
│   └── studio/[[...tool]]/
│       └── page.tsx              # Sanity Studio mount
├── sanity.config.ts              # Studio configuration + structure
├── sanity/
│   └── schemas/
│       ├── index.ts              # Schema registry
│       ├── author.ts             # Singleton — author profile
│       ├── siteSettings.ts       # Singleton — site config
│       ├── book.ts               # Books with audience filter
│       ├── event.ts              # Events with auto upcoming/past
│       └── resource.ts           # Resources (printables, studies, etc.)
├── lib/
│   └── sanity.ts                 # Client + GROQ queries
└── components/
    └── home/
        └── Hero.tsx              # Reference hero component
```

## Stack

- **Framework:** Next.js 15 (App Router) + TypeScript
- **Styling:** Tailwind CSS + Framer Motion
- **CMS:** Sanity (free tier — 3 users, 10k docs)
- **Hosting:** Cloudflare Pages (free)
- **Forms:** Formspree (free tier)
- **Newsletter:** ConvertKit/Kit (free tier)

## Brand foundation (already locked in)

| Color | Hex | Use |
|---|---|---|
| Cream | `#FDF6EE` | Base canvas (layered, never flat) |
| Desert Coral | `#D99985` | Primary CTAs, emotional signature |
| Earthy Olive | `#6B703C` | Headings, structure |
| Dark Terracotta | `#5A3A33` | Body text, footer |
| Light Peachy Pink | `#E8C6B5` | Soft cards, transitions |

| Font | Use |
|---|---|
| Lora | Display / headings |
| Lato | Body (16px min for accessibility) |
| Dancing Script | Accent / taglines only |

## Build order

1. ✅ Foundation (this kit)
2. Header + Footer components
3. Home page (use the Hero component as reference)
4. About page (pulls from Sanity)
5. Books page (filter scaffolding works with 1 book)
6. Resources page (placeholder cards for "Coming Soon" state)
7. Events page (auto-sorts upcoming/past)
8. Booking + Contact forms (Formspree)
9. Newsletter integration (ConvertKit)
10. Deploy to Cloudflare Pages

## Genicia's self-service experience

Once deployed, she logs into `msgwrites.com/studio` and sees:
- **Author Profile** — edit bio, photo, tagline
- **Site Settings** — socials, newsletter, footer
- **Books** — add new books (audience filter auto-organizes)
- **Events** — add events (auto-sorts upcoming vs past by date)
- **Resources** — upload PDFs, organized by category

Zero developer involvement after handoff.

## Next step

Read `docs/SETUP.md` and run through it. Then point Cursor at the project and start building pages.
