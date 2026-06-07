"use client";

import { motion } from "framer-motion";
import { Heart, Users, PenLine, type LucideIcon } from "lucide-react";

type Pillar = {
  Icon: LucideIcon;
  filled: boolean;
  eyebrow: string;
  body: string;
  bg: string;
  fg: string;
};

const PILLARS: Pillar[] = [
  {
    Icon: Heart,
    filled: true,
    eyebrow: "Purpose",
    body: "I write to encourage, uplift, and remind readers that their story matters.",
    bg: "bg-peach-100",
    fg: "text-coral-500",
  },
  {
    Icon: Users,
    filled: false,
    eyebrow: "Audiences",
    body: "From children to teens to adults — my stories are for every season of life.",
    bg: "bg-olive-100",
    fg: "text-olive-500",
  },
  {
    Icon: PenLine,
    filled: false,
    eyebrow: "The Journey",
    body: "This is just the beginning. There are so many more stories to come.",
    bg: "bg-terracotta-400",
    fg: "text-cream",
  },
];

export function HeartBehindWriter() {
  return (
    <section className="relative panel-cream-warm">
      <div className="section-container py-section">
        {/* Centered intro */}
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="eyebrow mb-4">Beyond the Books</p>
          <h2 className="font-display text-display-md text-terracotta md:text-display-lg">
            The Heart Behind the Writer
          </h2>
          {/* Decorative underline accent */}
          <svg
            aria-hidden
            viewBox="0 0 120 12"
            className="mx-auto mt-4 h-3 w-28 text-coral"
            fill="none"
          >
            <path
              d="M2 8 C 30 2, 60 2, 90 8 C 100 10, 110 8, 118 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>

        {/* Three pillars */}
        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {PILLARS.map(({ Icon, filled, eyebrow, body, bg, fg }, i) => (
            <motion.div
              key={eyebrow}
              className="flex flex-col items-center text-center md:items-start md:text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: 0.1 + i * 0.1,
                ease: "easeOut",
              }}
            >
              <div
                className={`flex h-16 w-16 items-center justify-center rounded-full ${bg}`}
              >
                <Icon
                  size={26}
                  className={fg}
                  fill={filled ? "currentColor" : "none"}
                />
              </div>
              <p className="eyebrow mt-5">{eyebrow}</p>
              <p className="mt-3 max-w-xs text-base leading-relaxed text-terracotta/80">
                {body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-14 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <a href="/about" className="btn-primary">
            More about Ms. G
            <Heart size={14} fill="currentColor" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
