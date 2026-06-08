import { MetadataRoute } from "next";
import { sanityClient, allBooksQuery } from "@/lib/sanity";
import { GROUPS } from "@/components/resources/groups";

export const dynamic = "force-static";

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://msgwrites.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/books`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/events`, lastModified: new Date(), changeFrequency: "daily", priority: 0.8 },
    { url: `${BASE}/events/booking`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/resources`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/shop`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/privacy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.2 },
    { url: `${BASE}/terms`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.2 },
  ];

  // Resource group sub-pages
  const resourcePages: MetadataRoute.Sitemap = GROUPS.map((g) => ({
    url: `${BASE}/resources/${g.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // Dynamic book detail pages
  let bookPages: MetadataRoute.Sitemap = [];
  try {
    const books = await sanityClient.fetch(allBooksQuery);
    bookPages = (books ?? []).map((b: any) => ({
      url: `${BASE}/books/${b.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }));
  } catch {
    // Sitemap still works if Sanity is unreachable at build time
  }

  // Fallback for the debut book if nothing in Sanity yet
  if (bookPages.length === 0) {
    bookPages = [
      {
        url: `${BASE}/books/a-home-to-call-their-own`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      },
    ];
  }

  return [...staticPages, ...resourcePages, ...bookPages];
}
