"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

type ComingSoonPageProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function ComingSoonPage({
  eyebrow,
  title,
  description,
}: ComingSoonPageProps) {
  return (
    <section className="relative">
      {/* Soft floating shapes — keeps cream from reading flat */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-coral-50/60 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-1/4 h-72 w-72 rounded-full bg-peach-100/50 blur-3xl"
      />

      <div className="section-narrow relative py-section text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="eyebrow mb-5 inline-flex items-center justify-center gap-2">
            <Heart size={12} fill="currentColor" className="text-coral" />
            {eyebrow}
            <Heart size={12} fill="currentColor" className="text-coral" />
          </p>

          <h1 className="font-display text-display-lg text-terracotta">
            {title}
          </h1>

          <p className="accent-script mt-5 text-4xl md:text-5xl">
            Coming soon
          </p>

          <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-terracotta/85">
            {description}
          </p>

          <div className="mt-12">
            <Link href="/" className="link-arrow">
              Back home
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
