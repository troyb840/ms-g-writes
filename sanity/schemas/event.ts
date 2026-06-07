import { defineField, defineType } from "sanity";

export const event = defineType({
  name: "event",
  title: "Event",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Event name",
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
      name: "startDateTime",
      title: "Start date & time",
      type: "datetime",
      validation: (Rule) => Rule.required(),
      description:
        "Used to auto-sort events and auto-move past events to the archive",
    }),
    defineField({
      name: "endDateTime",
      title: "End date & time (optional)",
      type: "datetime",
    }),
    defineField({
      name: "format",
      title: "Format",
      type: "string",
      options: {
        list: [
          { title: "In-person", value: "in-person" },
          { title: "Virtual", value: "virtual" },
          { title: "Hybrid", value: "hybrid" },
        ],
        layout: "radio",
      },
      initialValue: "in-person",
    }),
    defineField({
      name: "eventType",
      title: "Event type",
      type: "string",
      options: {
        list: [
          "Author visit",
          "Read-aloud session",
          "Church appearance",
          "Family event",
          "Speaking engagement",
          "Book reading",
          "Writing workshop",
          "Classroom literacy",
          "Panel / interview",
          "Conference",
          "Other",
        ],
      },
    }),
    defineField({
      name: "venueName",
      title: "Venue / host name",
      type: "string",
    }),
    defineField({
      name: "location",
      title: "Location (city, state)",
      type: "string",
    }),
    defineField({
      name: "address",
      title: "Full address (optional)",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "rsvpUrl",
      title: "RSVP / Registration URL",
      type: "url",
    }),
    defineField({
      name: "image",
      title: "Event image (optional)",
      type: "image",
      options: { hotspot: true },
    }),
  ],
  orderings: [
    {
      title: "Upcoming first",
      name: "startDateTimeAsc",
      by: [{ field: "startDateTime", direction: "asc" }],
    },
    {
      title: "Most recent first",
      name: "startDateTimeDesc",
      by: [{ field: "startDateTime", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      date: "startDateTime",
      location: "location",
      media: "image",
    },
    prepare({ title, date, location }) {
      const formatted = date
        ? new Date(date).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })
        : "No date";
      return {
        title,
        subtitle: location ? `${formatted} · ${location}` : formatted,
      };
    },
  },
});
