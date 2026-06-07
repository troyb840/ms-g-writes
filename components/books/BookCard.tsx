"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingBag } from "lucide-react";
import { urlFor } from "@/lib/sanity";

export type BookCardData = {
  _id: string;
  title: string;
  subtitle?: string;
  slug: string;
  audience: string;
  status: "coming-soon" | "preorder" | "available";
  cover?: any;
  shortDescription?: string;
};

const AUDIENCE_LABELS: Record<string, string> = {
  "children-6-8": "Ages 6–8",
  "children-9-12": "Ages 9–12",
  "young-adult": "Young Adult",
  adult: "Adult",
};

const STATUS_CONFIG = {
  "coming-soon": {
    label: "Coming Soon",
    classes: "bg-peach-200 text-terracotta/70",
  },
  preorder: {
    label: "Pre-Order Now",
    classes: "bg-olive/15 text-olive",
  },
  available: {
    label: "Available",
    classes: "bg-coral/15 text-coral",
  },
};

// Placeholder book used when Sanity has no books yet
export const PLACEHOLDER_BOOKS: BookCardData[] = [
  {
    _id: "placeholder-1",
    title: "A Home to Call Their Own",
    subtitle: "A Tale of Trusting God",
    slug: "a-home-to-call-their-own",
    audience: "children-6-8",
    status: "coming-soon",
    shortDescription:
      "A picture book about a child finding shelter and trust in places that don't always look like home.",
  },
];

type Props = {
  book: BookCardData;
};

export function BookCard({ book }: Props) {
  const coverUrl = book.cover
    ? urlFor(book.cover).width(600).height(800).fit("crop").url()
    : null;

  const statusCfg = STATUS_CONFIG[book.status] ?? STATUS_CONFIG["coming-soon"];
  const audienceLabel = AUDIENCE_LABELS[book.audience] ?? book.audience;

  return (
    <article className="card-warm group flex flex-col overflow-hidden">
      {/* Cover */}
      <Link href={`/books/${book.slug}`} className="block">
        <div className="relative aspect-[3/4] w-full overflow-hidden bg-peach-200">
          {coverUrl ? (
            <Image
              src={coverUrl}
              alt={book.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 40vw, 80vw"
            />
          ) : (
            /* Cover Coming Soon placeholder */
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-peach-200 p-6 text-center">
              <Heart
                size={32}
                fill="currentColor"
                className="text-coral-300/60"
              />
              <p className="font-display text-sm italic text-terracotta/50">
                Cover Coming Soon
              </p>
            </div>
          )}

          {/* Status badge — overlaid on cover */}
          <div className="absolute left-3 top-3">
            <span
              className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold tracking-wide ${statusCfg.classes}`}
            >
              {statusCfg.label}
            </span>
          </div>
        </div>
      </Link>

      {/* Info */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <span className="eyebrow text-coral/70">{audienceLabel}</span>

        <Link href={`/books/${book.slug}`}>
          <h3 className="font-display text-lg leading-snug text-olive transition-colors group-hover:text-coral">
            {book.title}
          </h3>
        </Link>

        {book.subtitle && (
          <p className="text-xs italic text-terracotta/60">{book.subtitle}</p>
        )}

        {book.shortDescription && (
          <p className="flex-1 text-sm leading-relaxed text-terracotta/75">
            {book.shortDescription}
          </p>
        )}

        <Link
          href={`/books/${book.slug}`}
          className="link-arrow mt-auto text-sm"
        >
          {book.status === "available" ? (
            <>
              <ShoppingBag size={13} />
              Get your copy
            </>
          ) : (
            <>
              <Heart size={13} fill="currentColor" />
              Learn more
            </>
          )}
        </Link>
      </div>
    </article>
  );
}
