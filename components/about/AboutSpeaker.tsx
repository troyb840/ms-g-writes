"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Heart, Download, CalendarHeart } from "lucide-react";

type Props = {
  author?: {
    speakerBioPdfUrl?: string;
  } | null;
};

export function AboutSpeaker({ author }: Props) {
  // Fall back to the static file in /public when no Sanity URL is set
  const pdfUrl = author?.speakerBioPdfUrl ?? "/ms-g-speaker-one-sheet.pdf";

  return (
    <section className="relative overflow-hidden bg-terracotta-400 py-section-sm text-cream">
      {/* Decorative hearts */}
      <Heart
        aria-hidden
        size={44}
        fill="currentColor"
        className="absolute left-8 top-8 -rotate-12 text-coral-300/20 md:left-16"
      />
      <Heart
        aria-hidden
        size={28}
        fill="currentColor"
        className="absolute bottom-8 right-10 rotate-6 text-coral-200/25 md:right-20"
      />

      <div className="section-container relative">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-12">
          {/* Copy */}
          <motion.div
            className="md:col-span-7"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="mb-5 flex items-center gap-3">
              <Heart size={12} fill="currentColor" className="text-coral-200" />
              <p className="eyebrow text-cream/60">Speaking & Events</p>
            </div>

            <h2 className="font-display text-3xl text-cream md:text-4xl">
              Bring Ms. G to Your Community
            </h2>

            <p className="mt-4 max-w-lg text-base leading-relaxed text-cream/80">
              Genicia speaks at schools, churches, conferences, and community
              events — bringing warmth, story, and Kingdom purpose to every
              room she enters. If you'd love to have her join your next
              gathering, she'd be honored to say yes.
            </p>

            <ul className="mt-6 space-y-2.5 text-sm text-cream/75">
              {[
                "School & classroom visits",
                "Church youth programs & family events",
                "Author panels & literary events",
                "Community outreach & Kingdom-focused gatherings",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <Heart
                    size={11}
                    fill="currentColor"
                    className="mt-1 shrink-0 text-coral-200"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* CTAs */}
          <motion.div
            className="flex flex-col gap-4 md:col-span-5 md:items-start"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          >
            <Link
              href="/events/booking"
              className="inline-flex w-full items-center justify-center gap-2 rounded-pill bg-coral px-7 py-3.5 font-body text-sm font-semibold uppercase tracking-[0.15em] text-cream shadow-warm transition-all duration-300 hover:-translate-y-0.5 hover:bg-coral-400 hover:shadow-warm-lg md:w-auto"
            >
              <CalendarHeart size={15} />
              Book Ms. G
            </Link>

            {pdfUrl ? (
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex w-full items-center justify-center gap-2 border-cream/40 text-cream hover:border-cream md:w-auto"
              >
                <Download size={14} />
                Download Speaker One-Sheet
              </a>
            ) : (
              <div className="inline-flex w-full items-center justify-center gap-2 rounded-pill border border-cream/25 px-7 py-3.5 text-sm text-cream/50 md:w-auto">
                <Download size={14} />
                Speaker One-Sheet — Coming Soon
              </div>
            )}

            <p className="mt-1 text-xs leading-relaxed text-cream/45">
              Have a question first?{" "}
              <Link
                href="/contact"
                className="underline underline-offset-2 transition-colors hover:text-coral-200"
              >
                Send a message
              </Link>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
