# MsGwrites.com — Setup Guide

Run these commands in order. Should take ~15 min total.

## 1. Initialize the Next.js project

```bash
npx create-next-app@latest msgwrites \
  --typescript \
  --tailwind \
  --app \
  --no-src-dir \
  --import-alias "@/*"

cd msgwrites
```

When prompted:
- ESLint: **Yes**
- Turbopack: **Yes** (faster dev)

## 2. Install dependencies

```bash
# Core: Sanity, Framer Motion, fonts, icons
npm install sanity next-sanity @sanity/vision @sanity/image-url \
  framer-motion lucide-react \
  @portabletext/react

# Dev: types
npm install -D @types/node
```

## 3. Create Sanity project

```bash
npx sanity@latest init --bare
```

When prompted:
- Login (Google/GitHub)
- Create new project: **MsGwrites**
- Dataset: **production**
- Output path: **just press enter** (we'll wire it manually)

Save the **Project ID** it gives you — you'll need it in `.env.local`.

## 4. Environment variables

Create `.env.local` in the project root:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-01-01

# Optional: for write operations (not needed for read-only site)
SANITY_API_TOKEN=

# Formspree (get from formspree.io after creating forms)
NEXT_PUBLIC_FORMSPREE_CONTACT=
NEXT_PUBLIC_FORMSPREE_BOOKING=

# ConvertKit (get from kit.com after creating a form)
NEXT_PUBLIC_CONVERTKIT_FORM_ID=
```

## 5. Drop in the files from this starter

Copy these files from `/msgwrites-starter/` into your project root:

- `tailwind.config.ts` → root
- `app/globals.css` → `app/globals.css` (replace)
- `app/layout.tsx` → `app/layout.tsx` (replace)
- `sanity.config.ts` → root
- `sanity/schemas/*` → `sanity/schemas/`
- `lib/sanity.ts` → `lib/sanity.ts`
- `app/studio/[[...tool]]/page.tsx` → create this path

## 6. Run it

```bash
npm run dev
```

- Site: http://localhost:3000
- Studio: http://localhost:3000/studio

## 7. First content to add (in Studio)

Once the studio loads:
1. Create the **Site Settings** singleton (tagline, socials)
2. Create the **Author** singleton (bio + photo)
3. Add the first **Book**: "A Home to Call Their Own"
4. Resource categories: Bible Verse Cards, Bookmarks, Coloring Pages, etc.

## 8. Deploy to Cloudflare Pages

Push to GitHub. Then in Cloudflare dashboard:

1. Pages → Create → Connect to Git
2. Select repo
3. Framework preset: **Next.js**
4. Build command: `npx @cloudflare/next-on-pages@1`
5. Build output: `.vercel/output/static`
6. Add env vars (same as `.env.local`)
7. Deploy

Custom domain: Cloudflare → Pages project → Custom domains → add `msgwrites.com`.
