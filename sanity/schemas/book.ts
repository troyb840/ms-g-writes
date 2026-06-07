import { defineField, defineType } from "sanity";

export const book = defineType({
  name: "book",
  title: "Book",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "URL slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "audience",
      title: "Audience",
      type: "string",
      options: {
        list: [
          { title: "Children (6-8)", value: "children-6-8" },
          { title: "Children (9-12)", value: "children-9-12" },
          { title: "Young Adult", value: "young-adult" },
          { title: "Adult", value: "adult" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
      initialValue: "children-6-8",
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Coming Soon (no cover yet)", value: "coming-soon" },
          { title: "Pre-order", value: "preorder" },
          { title: "Available", value: "available" },
        ],
        layout: "radio",
      },
      initialValue: "coming-soon",
    }),
    defineField({
      name: "cover",
      title: "Cover image",
      type: "image",
      options: { hotspot: true },
      description: "Leave blank to show the 'Cover Coming Soon' placeholder",
    }),
    defineField({
      name: "shortDescription",
      title: "Short description (cards & listings)",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required().max(220),
    }),
    defineField({
      name: "fullDescription",
      title: "Full description (book detail page)",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "samplePages",
      title: "Sample pages / excerpt",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    }),
    defineField({
      name: "buyLinks",
      title: "Where to buy",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "retailer",
              type: "string",
              title: "Retailer",
              options: {
                list: [
                  "Amazon",
                  "Barnes & Noble",
                  "Bookshop.org",
                  "Christian Book",
                  "Direct (Shop page)",
                  "Other",
                ],
              },
            },
            { name: "url", type: "url", title: "URL" },
          ],
          preview: {
            select: { title: "retailer", subtitle: "url" },
          },
        },
      ],
    }),
    defineField({
      name: "linkedResources",
      title: "Linked resources",
      type: "array",
      of: [{ type: "reference", to: [{ type: "resource" }] }],
      description: "Bible studies, discussion guides, etc. that pair with this book",
    }),
    defineField({
      name: "publishDate",
      title: "Publish date",
      type: "date",
    }),
    defineField({
      name: "featured",
      title: "Featured on homepage?",
      type: "boolean",
      initialValue: false,
    }),
  ],
  orderings: [
    {
      title: "Newest first",
      name: "publishDateDesc",
      by: [{ field: "publishDate", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "audience",
      media: "cover",
    },
  },
});
