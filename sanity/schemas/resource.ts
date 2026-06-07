import { defineField, defineType } from "sanity";

export const resource = defineType({
  name: "resource",
  title: "Resource",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "URL slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          // Printables
          { title: "Bible Verse Cards", value: "bible-verse-cards" },
          { title: "Bookmarks", value: "bookmarks" },
          { title: "Coloring Pages", value: "coloring-pages" },
          // Study & Discussion
          { title: "Bible Study Guides", value: "bible-study-guides" },
          { title: "Discussion Questions", value: "discussion-questions" },
          // Educators & Community Leaders
          { title: "Sunday School & Church Lesson Plans", value: "lesson-plans" },
          { title: "School Curriculum Tie-ins", value: "curriculum" },
          // For Kids
          { title: "For Kids", value: "kids-collection" },
        ],
        layout: "dropdown",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "group",
      title: "Group (for page organization)",
      type: "string",
      options: {
        list: [
          { title: "Printables", value: "printables" },
          { title: "Study & Discussion", value: "study" },
          { title: "For Educators & Community Leaders", value: "educators" },
          { title: "For Kids", value: "kids" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required().max(300),
    }),
    defineField({
      name: "thumbnail",
      title: "Thumbnail preview",
      type: "image",
      options: { hotspot: true },
      description:
        "Preview image shown on resource cards. Leave blank to show the 'Coming Soon' placeholder.",
    }),
    defineField({
      name: "downloadFile",
      title: "Download file (PDF)",
      type: "file",
      options: { accept: ".pdf" },
      description: "The actual file users will download. Leave blank for 'Coming Soon' state.",
    }),
    defineField({
      name: "ageRange",
      title: "Recommended age range",
      type: "string",
      placeholder: "e.g. Ages 6-8",
    }),
    defineField({
      name: "linkedBook",
      title: "Linked book (optional)",
      type: "reference",
      to: [{ type: "book" }],
      description: "If this resource pairs with a specific book",
    }),
    defineField({
      name: "featured",
      title: "Featured on homepage teaser?",
      type: "boolean",
      initialValue: false,
    }),
  ],
  orderings: [
    {
      title: "By group, then title",
      name: "groupTitle",
      by: [
        { field: "group", direction: "asc" },
        { field: "title", direction: "asc" },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
      category: "category",
      hasFile: "downloadFile",
      media: "thumbnail",
    },
    prepare({ title, category, hasFile }) {
      return {
        title,
        subtitle: `${category}${hasFile ? "" : " · ⏳ No file yet"}`,
      };
    },
  },
});
