"use client";

import { motion } from "framer-motion";
import { Heart, BookOpen, Bookmark, Palette, ScrollText } from "lucide-react";
import Link from "next/link";

const RESOURCE_PREVIEWS = [
  { icon: ScrollText, label: "Bible Verse Cards", group: "printables" },
  { icon: Bookmark,   label: "Bookmarks",         group: "printables" },
  { icon: Palette,    label: "Coloring Pages",    group: "printables" },
  { icon: BookOpen,   label: "Study Guides",      group: "study"      },
];

export function ResourcesTeaser() {
  return (
    <section className="relative panel-cream-warm">
      <div className="section-container py-section">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-12 md:gap-16">

          {/* LEFT — copy */}
          <motion.div
            className="md:col-span-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="eyebrow mb-4">Free Resources</p>
            <h2 className="font-display text-display-md text-olive md:text-display-lg">
              You don&apos;t have to wait for the book.
            </h2>

            {/* Decorative underline */}
            <svg aria-hidden viewBox="0 0 120 12" className="mt-4 h-3 w-28 text-coral" fill="none">
              <path d="M2 8 C 30 2, 60 2, 90 8 C 100 10, 110 8, 118 6"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-terracotta/80">
              <p>
                While the book is being finished, Genicia is already creating free,
                faith-centered resources for families, educators, community and ministry
                leaders — because the work of putting God&apos;s Word in front of children
                doesn&apos;t wait.
              </p>
              <p>
                Free printables, Bible verse cards, discussion guides, and more are coming
                soon — and they&apos;ll all be free.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#newsletter" className="btn-primary">
                <Heart size={14} fill="currentColor" />
                Join the List to Get Them First
              </a>
              <Link href="/resources" className="btn-secondary">
                Browse Resources
              </Link>
            </div>
          </motion.div>

          {/* RIGHT — preview grid */}
          <div className="md:col-span-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {RESOURCE_PREVIEWS.map(({ icon: Icon, label, group }, i) => (
                <motion.div
                  key={label}
                  className="card-warm flex flex-col items-center gap-3 p-6 text-center"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.08, ease: "easeOut" }}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-coral/10">
                    <Icon size={22} className="text-coral" />
                  </div>
                  <p className="font-display text-sm font-semibold text-terracotta">
                    {label}
                  </p>
                  <span className="inline-block rounded-pill bg-peach-200 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-terracotta/60">
                    Coming Soon
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
