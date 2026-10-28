"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingBag } from "lucide-react";
import { DEBUT_BOOK, type Book } from "@/lib/books";

type FeaturedBookProps = {
  book?: Book;
};

const STATUS_EYEBROW: Record<string, string> = {
  "coming-soon": "Coming Soon",
  preorder: "Pre-order",
  available: "Available Now",
};

export function FeaturedBook({ book = DEBUT_BOOK }: FeaturedBookProps) {
  const isAvailable = book.status === "available";

  return (
    <section className="relative bg-peach-100">
      <div className="section-container pt-8 pb-section md:pt-12">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-14">
          {/* Cover */}
          <div className="md:col-span-6">
            <motion.div
              className="relative mx-auto max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              {/* Offset shadow card */}
              <div aria-hidden className="absolute inset-0 translate-x-4 translate-y-4 rounded-card bg-peach-200" />
              <Link
                href={`/books/${book.slug}`}
                className="relative block overflow-hidden rounded-card shadow-warm-lg ring-1 ring-coral-100"
              >
                {book.cover && (
                  <Image
                    src={book.cover}
                    alt={`${book.title} cover`}
                    className="h-auto w-full"
                    sizes="(min-width: 768px) 45vw, 90vw"
                  />
                )}
              </Link>
              <Heart
                aria-hidden
                size={28}
                fill="currentColor"
                className="absolute -right-3 -top-3 rotate-12 text-coral-300"
              />
            </motion.div>
          </div>

          {/* Details */}
          <div className="md:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            >
              <p className="eyebrow mb-4 inline-flex items-center gap-2 text-coral-500">
                {STATUS_EYEBROW[book.status] ?? "The Book"}
                <Heart size={11} fill="currentColor" />
              </p>

              <h2 className="font-display text-display-lg text-terracotta">
                {book.title}
              </h2>

              {book.subtitle && (
                <p className="mt-3 font-body text-xs font-bold uppercase tracking-[0.2em] text-olive">
                  {book.subtitle}
                </p>
              )}

              {book.shortDescription && (
                <p className="mt-5 max-w-xl text-base leading-relaxed text-terracotta/85">
                  {book.shortDescription}
                </p>
              )}

              <div className="mt-8 flex flex-wrap gap-3">
                {isAvailable ? (
                  <Link href={`/books/${book.slug}#buy`} className="btn-primary">
                    <ShoppingBag size={14} />
                    Get Your Copy
                  </Link>
                ) : (
                  <a href="#newsletter" className="btn-primary">
                    <Heart size={14} fill="currentColor" />
                    Be the First to Know
                  </a>
                )}
                <Link href={`/books/${book.slug}`} className="btn-secondary">
                  View Book Details
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
