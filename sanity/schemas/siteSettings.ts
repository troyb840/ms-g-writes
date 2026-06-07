import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "siteTitle",
      title: "Site title",
      type: "string",
      initialValue: "MsGwrites",
    }),
    defineField({
      name: "footerScripture",
      title: "Footer scripture or brand tagline",
      type: "string",
      description: "Optional — shown above the copyright line",
    }),
    defineField({
      name: "newsletterIntro",
      title: "Newsletter section intro",
      type: "text",
      rows: 3,
      initialValue:
        "This is where the journey lives. Join the community and be the first to know about the book cover reveal, launch date, free resources, upcoming events, and the behind-the-scenes moments of bringing a debut book into the world.",
    }),
    defineField({
      name: "convertKitFormId",
      title: "ConvertKit form ID",
      type: "string",
      description: "From your Kit/ConvertKit dashboard — leave blank until ready",
    }),
    defineField({
      name: "socials",
      title: "Social media links",
      type: "object",
      fields: [
        { name: "instagram", type: "url", title: "Instagram URL" },
        { name: "facebook", type: "url", title: "Facebook URL" },
        { name: "tiktok", type: "url", title: "TikTok URL" },
        { name: "youtube", type: "url", title: "YouTube URL" },
        { name: "pinterest", type: "url", title: "Pinterest URL" },
        { name: "linkedin", type: "url", title: "LinkedIn URL" },
      ],
    }),
    defineField({
      name: "contactEmail",
      title: "Contact email",
      type: "string",
      description: "Where contact form submissions go (display purposes)",
    }),
  ],
  preview: {
    prepare: () => ({ title: "Site Settings" }),
  },
});
