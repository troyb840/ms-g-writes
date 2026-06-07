"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Heart, BookOpen } from "lucide-react";
import { urlFor } from "@/lib/sanity";

type BuyLink = { retailer?: string; url?: string };

type Book = {
  _id: string;
  title: string;
  subtitle?: string;
  slug?: string;
  audience?: string;
  status?: "coming-soon" | "preorder" | "available";
  cover?: any;
  shortDescription?: string;
  buyLinks?: BuyLink[];
};

type FeaturedBookProps = {
  book?: Book | null;
};

const STATUS_EYEBROW: Record<string, string> = {
  "coming-soon": "Coming Soon",
  preorder: "Pre-order",
  available: "Available Now",
};

// Placeholder when Sanity has no featured book yet — reads as honest
// "where the book is in its journey" rather than a generic empty state.
const PLACEHOLDER_BOOK: Book = {
  _id: "placeholder",
  title: "A Home to Call Their Own",
  subtitle: "A Tale of Trusting God",
  status: "coming-soon",
  shortDescription:
    "Something beautiful is being made. My debut children's book is currently in the making and it is being crafted with intention, love, and a whole lot of faith. When it's ready, I want you to be the first to know.",
};

export function FeaturedBook({ book }: FeaturedBookProps) {
  const effectiveBook = book ?? PLACEHOLDER_BOOK;
  const isPlaceholder = !book;

  const hasRealCover = !!effectiveBook.cover;
  const coverUrl = hasRealCover
    ? urlFor(effectiveBook.cover).width(800).height(1100).fit("crop").url()
    : null;

  const eyebrow = effectiveBook.status
    ? STATUS_EYEBROW[effectiveBook.status]
    : "The Book";

  return (
    <section className="relative bg-peach-100">
      <div className="section-container pt-section-sm pb-section">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-14">
          {/* Cover */}
          <div className="md:col-span-4">
            <motion.div
              className="relative mx-auto max-w-[260px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              {hasRealCover && coverUrl ? (
                <div className="overflow-hidden rounded-card shadow-warm-lg ring-1 ring-coral-100">
                  <Image
                    src={coverUrl}
                    alt={`${effectiveBook.title} cover`}
                    width={800}
                    height={1100}
                    className="h-auto w-full"
                  />
                </div>
              ) : (
                /* Branded "Cover Coming Soon" placeholder */
                <div className="flex aspect-[3/4] w-full flex-col items-center justify-center gap-5 rounded-card bg-peach-100 shadow-warm-lg ring-1 ring-coral-100 px-8 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-coral/10">
                    <BookOpen size={28} className="text-coral" />
                  </div>
                  <div>
                    <p className="font-script text-2xl leading-snug text-coral">
                      Cover Coming Soon
                    </p>
                    <p className="mt-3 font-display text-sm leading-snug text-terracotta/60">
                      {effectiveBook.title}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    {[0, 1, 2].map((i) => (
                      <Heart key={i} size={10} fill="currentColor" className="text-coral-200" />
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </div>

          {/* Details */}
          <div className="md:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            >
              <p className="eyebrow mb-4 inline-flex items-center gap-2 text-coral-500">
                {eyebrow}
                <Heart size={11} fill="currentColor" />
              </p>

              <h2 className="font-display text-display-lg text-terracotta">
                {effectiveBook.title}
              </h2>

              {effectiveBook.subtitle && (
                <p className="mt-3 font-body text-xs font-bold uppercase tracking-[0.2em] text-olive">
                  {isPlaceholder
                    ? "My Debut Children's Book"
                    : effectiveBook.subtitle}
                </p>
              )}

              {effectiveBook.shortDescription && (
                <p className="mt-5 max-w-xl text-base leading-relaxed text-terracotta/85">
                  {effectiveBook.shortDescription}
                </p>
              )}

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#newsletter" className="btn-primary">
                  <Heart size={14} fill="currentColor" />
                  {isPlaceholder ? "Be the First to Know" : "Learn More"}
                </a>
                {!isPlaceholder && effectiveBook.slug && (
                  <a href={`/books/${effectiveBook.slug}`} className="btn-secondary">
                    View Book Details
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
