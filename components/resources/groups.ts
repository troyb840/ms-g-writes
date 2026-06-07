import type { ResourceCardData } from "./ResourceCard";

export type GroupConfig = {
  slug: string;
  label: string;
  description: string;
  placeholders: ResourceCardData[];
};

export const GROUPS: GroupConfig[] = [
  {
    slug: "printables",
    label: "Printables",
    description:
      "Bible verse cards, bookmarks, and coloring pages to print and enjoy at home.",
    placeholders: [
      {
        _id: "ph-p1",
        title: "Bible Verse Cards",
        slug: "bible-verse-cards",
        category: "bible-verse-cards",
        group: "printables",
        description:
          "Scripture memory cards designed for little hands — perfect for family devotionals or bulletin boards.",
        hasFile: false,
      },
      {
        _id: "ph-p2",
        title: "Bookmarks",
        slug: "bookmarks",
        category: "bookmarks",
        group: "printables",
        description:
          "Printable bookmarks featuring Ms. G's characters and encouraging scriptures.",
        hasFile: false,
      },
      {
        _id: "ph-p3",
        title: "Coloring Pages",
        slug: "coloring-pages",
        category: "coloring-pages",
        group: "printables",
        description:
          "Illustrated scenes from A Home to Call Their Own — print, color, and display.",
        hasFile: false,
      },
    ],
  },
  {
    slug: "study",
    label: "Study & Discussion",
    description:
      "Bible study guides and discussion questions for families, small groups, and classes.",
    placeholders: [
      {
        _id: "ph-s1",
        title: "Family Bible Study Guide",
        slug: "family-bible-study-guide",
        category: "bible-study-guides",
        group: "study",
        description:
          "A chapter-by-chapter study guide built around the themes of home, trust, and God's provision.",
        hasFile: false,
      },
      {
        _id: "ph-s2",
        title: "Discussion Questions",
        slug: "discussion-questions",
        category: "discussion-questions",
        group: "study",
        description:
          "Age-appropriate conversation starters to explore the story's themes with children.",
        hasFile: false,
      },
    ],
  },
  {
    slug: "educators",
    label: "For Educators & Community Leaders",
    description:
      "Lesson plans and curriculum tie-ins for Sunday school, classrooms, and community programs.",
    placeholders: [
      {
        _id: "ph-e1",
        title: "Sunday School Lesson Plan",
        slug: "sunday-school-lesson-plan",
        category: "lesson-plans",
        group: "educators",
        description:
          "A complete Sunday school lesson built around A Home to Call Their Own — scripture, activity, and discussion.",
        hasFile: false,
      },
      {
        _id: "ph-e2",
        title: "School Curriculum Tie-In",
        slug: "school-curriculum",
        category: "curriculum",
        group: "educators",
        description:
          "Common Core-aligned activities that pair with the book for K–3 classroom use.",
        hasFile: false,
      },
    ],
  },
  {
    slug: "kids",
    label: "For Kids",
    description: "Fun, interactive materials made just for young readers.",
    placeholders: [
      {
        _id: "ph-k1",
        title: "Kids Activity Pack",
        slug: "kids-activity-pack",
        category: "kids-collection",
        group: "kids",
        description:
          "A collection of games, puzzles, and creative activities inspired by the book — all free to download.",
        hasFile: false,
      },
      {
        _id: "ph-k2",
        title: "Read-Along Guide",
        slug: "read-along-guide",
        category: "kids-collection",
        group: "kids",
        description:
          "A simple guide with big-print questions to ask while reading — builds comprehension and faith talk.",
        hasFile: false,
      },
    ],
  },
];
