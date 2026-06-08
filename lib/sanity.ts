// Sanity CMS integration — pending setup.
// All fetches return null so every page falls back to its built-in
// placeholder content. Swap this file for the real client when ready.

export const projectId = "";
export const dataset = "production";
export const apiVersion = "2025-01-01";

export const sanityClient = {
  fetch: async () => null,
} as any;

export function urlFor(_source: any) {
  // No-op image builder — returns an empty string for every chain.
  const stub: any = new Proxy(
    {},
    {
      get: () => () => stub,
    }
  );
  stub.url = () => "";
  return stub;
}

// ── GROQ queries (kept for when Sanity is wired up) ──────────────────────────

export const authorQuery = `*[_type == "author"][0]{
  publicName, legalName, tagline, headline,
  photo, shortIntro, fullBio,
  "speakerBioPdfUrl": speakerBioPdf.asset->url
}`;

export const siteSettingsQuery = `*[_type == "siteSettings"][0]{
  siteTitle, footerScripture, newsletterIntro, convertKitFormId,
  socials, contactEmail
}`;

export const layoutSettingsQuery = `*[_type == "siteSettings"][0]{
  footerScripture, socials
}`;

export const featuredBookQuery = `*[_type == "book" && featured == true][0]{
  _id, title, subtitle, slug, audience, status, cover,
  shortDescription, buyLinks
}`;

export const allBooksQuery = `*[_type == "book"] | order(publishDate desc){
  _id, title, subtitle, "slug": slug.current, audience, status, cover,
  shortDescription, buyLinks, publishDate
}`;

export const bookBySlugQuery = `*[_type == "book" && slug.current == $slug][0]{
  _id, title, subtitle, "slug": slug.current, audience, status, cover,
  shortDescription, fullDescription, samplePages, buyLinks,
  "linkedResources": linkedResources[]->{
    _id, title, "slug": slug.current, group, description, thumbnail,
    ageRange, "downloadUrl": downloadFile.asset->url
  }
}`;

export const upcomingEventsQuery = `*[_type == "event" && startDateTime > now()] | order(startDateTime asc){
  _id, title, "slug": slug.current, startDateTime, endDateTime,
  format, eventType, venueName, location, description, rsvpUrl, image
}`;

export const pastEventsQuery = `*[_type == "event" && startDateTime <= now()] | order(startDateTime desc){
  _id, title, "slug": slug.current, startDateTime,
  format, eventType, venueName, location
}`;

export const allResourcesQuery = `*[_type == "resource"] | order(title asc){
  _id, title, "slug": slug.current, group, category, description,
  thumbnail, ageRange, "downloadUrl": downloadFile.asset->url, featured
}`;

export const resourcesByGroupQuery = `*[_type == "resource" && group == $group] | order(title asc){
  _id, title, "slug": slug.current, group, category, description,
  thumbnail, ageRange, "downloadUrl": downloadFile.asset->url
}`;

export const homePageQuery = `{
  "author": *[_type == "author"][0]{
    publicName, legalName, tagline, photo, shortIntro
  },
  "featuredBook": *[_type == "book" && featured == true][0]{
    _id, title, subtitle, "slug": slug.current, audience, status, cover,
    shortDescription, buyLinks
  },
  "settings": *[_type == "siteSettings"][0]{
    newsletterIntro, convertKitFormId, socials, footerScripture
  }
}`;
