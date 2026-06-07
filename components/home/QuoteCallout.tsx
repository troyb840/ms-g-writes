"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

type QuoteCalloutProps = {
  quote?: string;
  attribution?: string;
};

const DEFAULT_QUOTE = "Every story has the power to change a life.";

export function QuoteCallout({
  quote = DEFAULT_QUOTE,
  attribution = "Ms. G.",
}: QuoteCalloutProps) {
  return (
    <section className="relative">
      {/* Scattered decorative hearts */}
      <Heart
        aria-hidden
        size={16}
        fill="currentColor"
        className="absolute left-[14%] top-10 -rotate-12 text-coral-200"
      />
      <Heart
        aria-hidden
        size={20}
        fill="currentColor"
        className="absolute right-[16%] top-16 rotate-6 text-coral-300"
      />
      <Heart
        aria-hidden
        size={14}
        fill="currentColor"
        className="absolute bottom-12 left-[22%] rotate-12 text-coral-200"
      />
      <Heart
        aria-hidden
        size={18}
        fill="currentColor"
        className="absolute bottom-16 right-[24%] -rotate-6 text-coral-300"
      />

      <div className="section-narrow relative py-section-sm text-center">
        <motion.p
          className="font-script text-3xl leading-snug text-terracotta sm:text-4xl md:text-5xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          &ldquo;{quote}&rdquo;
        </motion.p>

        <motion.p
          className="mt-6 font-body text-sm font-semibold uppercase tracking-[0.2em] text-olive"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          — {attribution}
        </motion.p>
      </div>
    </section>
  );
}
