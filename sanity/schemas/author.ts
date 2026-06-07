import { defineField, defineType } from "sanity";

export const author = defineType({
  name: "author",
  title: "Author Profile",
  type: "document",
  // Singleton — only one author document ever
  fields: [
    defineField({
      name: "publicName",
      title: "Public-facing name (children's audience)",
      type: "string",
      description: 'Used with kids — e.g. "Ms. G"',
      initialValue: "Ms. G",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "legalName",
      title: "Legal/professional name (adults, press, speaker bios)",
      type: "string",
      initialValue: "Genicia Corney",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "tagline",
      title: "Tagline / motto",
      type: "string",
      description: "Shown on homepage hero in script font",
      placeholder: "Author · Speaker · Kingdom Builder",
    }),
    defineField({
      name: "headline",
      title: "Hero headline",
      type: "string",
      initialValue: "Stories That Point Little Hearts to Jesus",
    }),
    defineField({
      name: "photo",
      title: "Author photo",
      type: "image",
      options: { hotspot: true },
      description: "Used on homepage hero and About page",
    }),
    defineField({
      name: "shortIntro",
      title: "Homepage brand intro (short)",
      type: "text",
      rows: 5,
      description: "The warm welcome on the homepage — 2-3 paragraphs",
    }),
    defineField({
      name: "fullBio",
      title: "Full biography (About page)",
      type: "array",
      of: [{ type: "block" }],
      description: "Rich-text bio for the About page",
    }),
    defineField({
      name: "speakerBioPdf",
      title: "Speaker one-sheet PDF",
      type: "file",
      options: { accept: ".pdf" },
      description: "Optional — downloadable speaker bio for event organizers",
    }),
  ],
  preview: {
    select: { title: "legalName", media: "photo" },
  },
});
