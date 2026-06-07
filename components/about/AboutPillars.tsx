"use client";

import { motion } from "framer-motion";
import { BookOpen, Mic2, Heart } from "lucide-react";

const PILLARS = [
  {
    icon: BookOpen,
    eyebrow: "The Author",
    title: "Stories With Purpose",
    body: "Every book I write carries a message — that children are loved, seen, and held by a God who never lets go. My stories are warm, age-appropriate, and rooted in faith.",
  },
  {
    icon: Mic2,
    eyebrow: "The Speaker",
    title: "A Voice in the Room",
    body: "From classrooms to churches, I speak to young hearts (and the adults who love them) about belonging, identity, and the courage it takes to trust God with your whole story.",
  },
  {
    icon: Heart,
    eyebrow: "Kingdom Builder",
    title: "Building Something Bigger",
    body: "This isn't just a writing career — it's a calling. Every book, every event, every resource is a brick in something God laid on my heart long before I put a word on the page.",
  },
];

export function AboutPillars() {
  return (
    <section className="panel-cream-warm py-section">
      <div className="section-container">
        {/* Section header */}
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <Heart size={12} fill="currentColor" className="text-coral" />
            <p className="eyebrow">What I Do</p>
            <Heart size={12} fill="currentColor" className="text-coral" />
          </div>
          <h2 className="font-display text-3xl text-olive md:text-4xl">
            Author · Speaker · Kingdom Builder
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {PILLARS.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.eyebrow}
                className="card-warm flex flex-col gap-4 p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              >
                {/* Icon badge */}
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-coral/10">
                  <Icon size={20} className="text-coral" />
                </div>

                <p className="eyebrow text-coral/70">{pillar.eyebrow}</p>

                <h3 className="font-display text-xl text-olive">
                  {pillar.title}
                </h3>

                <p className="text-sm leading-relaxed text-terracotta/80">
                  {pillar.body}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
