import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-01-01";

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

// ---------- Reusable GROQ queries ----------

export const authorQuery = `*[_type == "author"][0]{
  publicName, legalName, tagline, headline,
  photo, shortIntro, fullBio,
  "speakerBioPdfUrl": speakerBioPdf.asset->url
}`;

export const siteSettingsQuery = `*[_type == "siteSettings"][0]{
  siteTitle, footerScripture, newsletterIntro, convertKitFormId,
  socials, contactEmail
}`;

export const featuredBookQuery = `*[_type == "book" && featured == true][0]{
  _id, title, subtitle, slug, audience, status, cover,
  shortDescription, buyLinks
}`;

export const allBooksQuery = `*[_type == "book"] | order(publishDate desc){
  _id, title, subtitle, "slug": slug.current, audience, status, cover,
  shortDescription, publishDate
}`;

export const bookBySlugQuery = `*[_type == "book" && slug.current == $slug][0]{
  _id, title, subtitle, audience, status, cover,
  shortDescription, fullDescription, samplePages, buyLinks,
  "linkedResources": linkedResources[]->{
    _id, title, "slug": slug.current, category, group, description, thumbnail,
    "hasFile": defined(downloadFile)
  }
}`;

export const upcomingEventsQuery = `*[_type == "event" && startDateTime >= now()] | order(startDateTime asc){
  _id, title, "slug": slug.current,
  startDateTime, endDateTime, format, eventType,
  venueName, location, description, rsvpUrl, image
}`;

export const pastEventsQuery = `*[_type == "event" && startDateTime < now()] | order(startDateTime desc){
  _id, title, "slug": slug.current,
  startDateTime, format, venueName, location, image
}`;

export const allResourcesQuery = `*[_type == "resource"] | order(group asc, title asc){
  _id, title, "slug": slug.current,
  category, group, description, thumbnail, ageRange,
  "downloadUrl": downloadFile.asset->url,
  "hasFile": defined(downloadFile)
}`;

export const resourcesByGroupQuery = `*[_type == "resource" && group == $group] | order(title asc){
  _id, title, "slug": slug.current,
  category, description, thumbnail, ageRange,
  "downloadUrl": downloadFile.asset->url,
  "hasFile": defined(downloadFile)
}`;

// Lean fetch for the root layout (Header + Footer)
export const layoutSettingsQuery = `*[_type == "siteSettings"][0]{
  footerScripture, socials
}`;

// Single combined fetch for the homepage — one round trip
export const homePageQuery = `{
  "author": *[_type == "author"][0]{
    publicName, legalName, tagline, headline,
    photo, shortIntro
  },
  "featuredBook": *[_type == "book" && featured == true][0]{
    _id, title, subtitle, "slug": slug.current, audience, status, cover,
    shortDescription, buyLinks
  },
  "featuredResources": *[_type == "resource" && featured == true] | order(group asc, title asc) [0...3]{
    _id, title, "slug": slug.current, category, group, description, thumbnail,
    "hasFile": defined(downloadFile),
    "downloadUrl": downloadFile.asset->url
  },
  "upcomingEvents": *[_type == "event" && startDateTime >= now()] | order(startDateTime asc) [0...3]{
    _id, title, "slug": slug.current,
    startDateTime, format, eventType,
    venueName, location, rsvpUrl
  },
  "settings": *[_type == "siteSettings"][0]{
    newsletterIntro, convertKitFormId
  }
}`;
