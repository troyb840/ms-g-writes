"use client";

import { motion } from "framer-motion";
import { Heart, CalendarHeart, MapPin } from "lucide-react";
import Link from "next/link";

const ENGAGEMENT_TYPES = [
  "Author visits for schools",
  "Interactive read-aloud sessions",
  "Church & children's ministry",
  "Faith-based family events",
  "Speaking engagements",
  "Writing encouragement workshops",
];

export function EventsTeaser() {
  return (
    <section className="relative bg-peach-100">
      {/* Decorative hearts */}
      <Heart aria-hidden size={20} fill="currentColor"
        className="absolute left-10 top-8 -rotate-12 text-coral-200/60" />
      <Heart aria-hidden size={14} fill="currentColor"
        className="absolute right-16 bottom-10 rotate-6 text-coral-300/50" />

      <div className="section-container py-section">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="eyebrow mb-4">Events & Appearances</p>
          <h2 className="font-display text-display-md text-olive md:text-display-lg">
            Upcoming appearances are being scheduled now.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-terracotta/75">
            Whether you&apos;d like to invite Genicia to your school, church, library, or
            community event — she would love to hear from you.
          </p>
        </motion.div>

        {/* Engagement types */}
        <motion.div
          className="mx-auto mt-12 max-w-3xl"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
        >
          <div className="flex flex-wrap justify-center gap-3">
            {ENGAGEMENT_TYPES.map((type) => (
              <span
                key={type}
                className="inline-flex cursor-default items-center gap-2 rounded-pill bg-cream px-4 py-2 text-sm text-terracotta/70 shadow-warm ring-1 ring-terracotta/8 transition-all duration-200 hover:-translate-y-0.5 hover:bg-coral hover:text-cream hover:shadow-warm-lg hover:ring-coral"
              >
                <MapPin size={11} className="text-current opacity-70" />
                {type}
              </span>
            ))}
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link href="/events/booking" className="btn-primary">
            <CalendarHeart size={15} />
            Learn About Booking
          </Link>
          <Link href="/events" className="btn-secondary">
            View All Events
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
