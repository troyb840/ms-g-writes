"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Heart } from "lucide-react";
import portraitImg from "@/public/genicia.jpg";

type HeroProps = {
  publicName?: string;
  legalName?: string;
  tagline?: string;
  headline?: string;
  photo?: any; // Sanity image
  shortIntro?: string;
};

const DEFAULT_INTRO = [
  "Welcome, friend! I'm Genicia, or Ms. G to the little ones, and I believe with my whole heart that the right story at the right moment can change a child's life.",
  "I'm a first-time author on a faith-filled journey to put books in little hands that point them straight to Jesus. Every page I write is a prayer, and every reader is the reason.",
  "I'm so glad you're here early because this is just the beginning.",
];

export function Hero({
  publicName = "Ms. G!",
  legalName = "Genicia Corney",
  tagline = "Stories That Point Little Hearts to Jesus",
  photo,
  shortIntro,
}: HeroProps) {
  const photoUrl = portraitImg;

  const paragraphs = shortIntro
    ? shortIntro
        .split(/\n\s*\n/)
        .map((p) => p.trim())
        .filter(Boolean)
    : DEFAULT_INTRO;

  return (
    <section className="relative overflow-hidden bg-peach-50">
      {/* Decorative background blobs */}
      <div aria-hidden className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-peach-100/60 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute bottom-0 -left-16 h-64 w-64 rounded-full bg-coral-50/70 blur-3xl" />

      {/*
        Layout strategy:
          Mobile  → 1-col: [name block] → [photo] → [bio + CTA]
          Desktop → 2-col grid with named areas:
                    left col: name block (row 1) + bio+CTA (row 2)
                    right col: photo spanning both rows
      */}
      <div
        className="
          section-container relative
          grid grid-cols-1 gap-4 pt-8 pb-12 md:pt-12 md:pb-16
          md:grid-cols-[5fr_7fr] md:grid-rows-[auto_1fr] md:gap-x-16 md:gap-y-0
        "
      >
        {/* ── BLOCK 1: Eyebrow + "Hi, I'm Ms. G" ──────────────────────────
            Mobile: top  |  Desktop: top-left (row 1, col 1)              */}
        <div className="order-1 md:col-start-1 md:row-start-1 md:self-end md:pb-6">
          <motion.div
            className="mb-6 flex items-center gap-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Heart size={14} fill="currentColor" className="text-coral" />
            <p className="eyebrow">{tagline}</p>
          </motion.div>

          <motion.h1
            className="flex flex-wrap items-baseline gap-x-3"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          >
            <span className="font-display text-4xl text-terracotta md:text-5xl">
              Hi, I&apos;m
            </span>
            <span className="font-script text-6xl leading-none text-coral md:text-7xl lg:text-8xl">
              {publicName}
            </span>
          </motion.h1>
        </div>

        {/* ── BLOCK 2: Photo ───────────────────────────────────────────────
            Mobile: middle  |  Desktop: right col spanning both rows       */}
        <div className="order-2 mb-28 md:col-start-2 md:row-start-1 md:row-span-2 md:mb-0">
          <motion.div
            className="relative mx-auto aspect-[4/5] max-w-[280px] sm:max-w-sm md:max-w-xl"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          >
            <svg className="absolute h-0 w-0" aria-hidden>
              <defs>
                <clipPath id="hero-frame" clipPathUnits="objectBoundingBox">
                  <path d="M 0.50 0.04 C 0.59 -0.01 0.70 0.03 0.72 0.12 C 0.81 0.08 0.91 0.14 0.90 0.24 C 0.99 0.26 1.02 0.38 0.95 0.45 C 1.02 0.52 0.99 0.64 0.91 0.66 C 0.96 0.75 0.91 0.87 0.81 0.88 C 0.83 0.96 0.71 1.01 0.61 0.97 C 0.57 1.02 0.45 1.01 0.41 0.97 C 0.29 1.01 0.17 0.96 0.19 0.88 C 0.09 0.87 0.04 0.75 0.09 0.66 C 0.01 0.64 -0.02 0.52 0.05 0.45 C -0.02 0.38 0.01 0.26 0.10 0.24 C 0.09 0.14 0.19 0.08 0.28 0.12 C 0.30 0.03 0.41 -0.01 0.50 0.04 Z" />
                </clipPath>
              </defs>
            </svg>

            {/* Terracotta splash frame */}
            <div
              aria-hidden
              className="absolute inset-0 bg-terracotta-400"
              style={{ clipPath: "url(#hero-frame)" }}
            />

            {/* Photo clipped to same shape — thinner inset = thinner border */}
            <div
              className="absolute inset-[2%]"
              style={{ clipPath: "url(#hero-frame)" }}
            >
              <Image
                src={photoUrl}
                alt={legalName}
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>

            {/* Floating decorative hearts */}
            <Heart aria-hidden size={28} fill="currentColor" className="absolute -left-2 top-6 -rotate-12 text-coral-300" />
            <Heart aria-hidden size={36} fill="currentColor" className="absolute -right-2 bottom-12 rotate-12 text-coral-300" />
            <Heart aria-hidden size={20} fill="currentColor" className="absolute right-12 top-4 rotate-6 text-coral-200" />

            {/* Thought-bubble trail — two circles below the cloud */}
            <div aria-hidden className="absolute -bottom-7 left-[16%] h-6 w-6 rounded-full bg-terracotta-400" />
            <div aria-hidden className="absolute -bottom-14 left-[9%] h-3.5 w-3.5 rounded-full bg-terracotta-400" />
          </motion.div>
        </div>

        {/* ── BLOCK 3: Bio paragraphs + CTA ────────────────────────────────
            Mobile: bottom  |  Desktop: bottom-left (row 2, col 1)        */}
        <div className="order-3 -mt-6 md:col-start-1 md:row-start-2 md:mt-0 md:self-start md:pt-2">
          <motion.div
            className="max-w-md space-y-4 text-base leading-relaxed text-terracotta/85"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </motion.div>

          <motion.div
            className="mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <a href="/about" className="btn-primary">
              <Heart size={14} fill="currentColor" />
              Learn More About Me
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
