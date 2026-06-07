"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

type Props = {
  author?: {
    publicName?: string;
    legalName?: string;
    tagline?: string;
    headline?: string;
  } | null;
};

export function AboutHero({ author }: Props) {
  const publicName = author?.publicName ?? "Ms. G";
  const legalName = author?.legalName ?? "Genicia Corney";
  const headline =
    author?.headline ?? "Stories That Point Little Hearts to Jesus";

  return (
    <section className="relative overflow-hidden panel-peach py-20 md:py-28">
      {/* Decorative hearts */}
      <Heart
        aria-hidden
        size={40}
        fill="currentColor"
        className="absolute left-8 top-10 -rotate-12 text-coral-300/30 md:left-16"
      />
      <Heart
        aria-hidden
        size={24}
        fill="currentColor"
        className="absolute right-12 top-16 rotate-6 text-coral-200/40"
      />
      <Heart
        aria-hidden
        size={32}
        fill="currentColor"
        className="absolute bottom-10 right-8 -rotate-6 text-coral-300/25 md:right-20"
      />

      <div className="section-narrow text-center">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-5 flex items-center justify-center gap-3"
        >
          <Heart size={12} fill="currentColor" className="text-coral" />
          <p className="eyebrow">About</p>
          <Heart size={12} fill="currentColor" className="text-coral" />
        </motion.div>

        <motion.p
          className="font-display text-4xl text-terracotta md:text-5xl"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Meet
        </motion.p>

        <motion.h1
          className="font-script text-6xl leading-none text-coral md:text-7xl lg:text-8xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          {publicName}
        </motion.h1>

        <motion.p
          className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-terracotta/70 md:text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          {headline}
        </motion.p>
      </div>
    </section>
  );
}
