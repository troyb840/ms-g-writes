import type { StaticImageData } from "next/image";
import debutCover from "@/public/books/a-home-to-call-their-own-cover.jpg";

export type BookStatus = "coming-soon" | "preorder" | "available";

export type Book = {
  _id: string;
  title: string;
  subtitle?: string;
  slug: string;
  audience: string;
  status: BookStatus;
  cover?: StaticImageData;
  shortDescription?: string;
  illustrator?: string;
  // Lulu "buy-button-id" from the Lulu buy button embed code
  luluBuyButtonId?: string;
};

// Plain .ts (no "use client") so both server pages and client components can import it.
export const DEBUT_BOOK: Book = {
  _id: "a-home-to-call-their-own",
  title: "A Home to Call Their Own",
  subtitle: "A Tale of Trusting God",
  slug: "a-home-to-call-their-own",
  audience: "children-6-8",
  status: "available",
  cover: debutCover,
  illustrator: "Lauren Elise Reeves",
  shortDescription:
    "When a storm sweeps away Benny Bear and Hannah Hare's home, the two friends set off on a brave adventure. As they explore new cities, they learn that even when the path is uncertain, God can be trusted to lead the way.",
  luluBuyButtonId: "9efa1996-b765-491f-81c3-e8d3f5fe41c8",
};

export const BOOKS: Book[] = [DEBUT_BOOK];
