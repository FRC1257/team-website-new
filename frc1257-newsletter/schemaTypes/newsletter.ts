
import { defineField, defineType } from "sanity";

export const newsletter = defineType({
  name: "newsletter",
  title: "Newsletter",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Newsletter Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "slug",
      title: "URL Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "publishedAt",
      title: "Publication Date",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "excerpt",
      title: "Short Description",
      type: "text",
      rows: 3,
    }),

    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: "body",
      title: "Newsletter Content",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          options: { hotspot: true },
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
  ],

  orderings: [
    {
      title: "Newest First",
      name: "publishedAtDesc",
      by: [
        {
          field: "publishedAt",
          direction: "desc",
        },
      ],
    },
  ],
});