import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";

import { schemaTypes } from "./sanity/schemas";

export default defineConfig({
  name: "msgwrites",
  title: "MsGwrites Studio",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  basePath: "/studio",

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            // Singletons at the top — one-off settings she edits occasionally
            S.listItem()
              .title("Author Profile")
              .id("author")
              .child(S.document().schemaType("author").documentId("author")),
            S.listItem()
              .title("Site Settings")
              .id("siteSettings")
              .child(
                S.document()
                  .schemaType("siteSettings")
                  .documentId("siteSettings"),
              ),
            S.divider(),
            // Collections — what she adds to regularly
            S.documentTypeListItem("book").title("Books"),
            S.documentTypeListItem("event").title("Events"),
            S.documentTypeListItem("resource").title("Resources"),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
});
