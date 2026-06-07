"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Heart } from "lucide-react";

type NewsletterProps = {
  intro?: string;
  convertKitFormId?: string;
};

const DEFAULT_INTRO =
  "Be the first to hear about new books, behind-the-scenes moments, and special updates.";

export function Newsletter({ intro, convertKitFormId }: NewsletterProps) {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(false);
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, email }),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    }
  }

  const introCopy = intro && intro.trim().length > 0 ? intro : DEFAULT_INTRO;

  return (
    <section
      id="newsletter"
      className="relative scroll-mt-20 overflow-hidden bg-terracotta-400 text-cream"
    >
      {/* Decorative scattered hearts (coral substituting for the reference's gold) */}
      <Heart
        aria-hidden
        size={36}
        fill="currentColor"
        className="absolute left-6 top-10 -rotate-12 text-coral-300/50 md:left-12"
      />
      <Heart
        aria-hidden
        size={28}
        fill="currentColor"
        className="absolute left-20 bottom-8 rotate-6 text-coral-200/40"
      />
      <Heart
        aria-hidden
        size={32}
        fill="currentColor"
        className="absolute right-6 bottom-10 -rotate-6 text-coral-300/50 md:right-12"
      />
      <Heart
        aria-hidden
        size={22}
        fill="currentColor"
        className="absolute right-20 top-12 rotate-12 text-coral-200/40"
      />

      <div className="section-container relative py-section-sm">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-12">
          {/* Left: copy */}
          <div className="pr-16 md:col-span-5 md:pr-0">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h2 className="font-display text-3xl text-cream md:text-4xl">
                Let&apos;s Stay Connected
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-cream/80 md:text-base">
                {introCopy}
              </p>
            </motion.div>
          </div>

          {/* Right: form */}
          <div className="md:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            >
              {submitted ? (
                <div className="rounded-card bg-terracotta-500/40 px-6 py-5 text-center ring-1 ring-cream/15">
                  <p className="font-script text-3xl text-coral-200">
                    Thank you, friend!
                  </p>
                  <p className="mt-2 text-sm text-cream/80">
                    Thank you for reaching out. You will hear from me soon!
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-3 sm:flex-row sm:flex-wrap"
                >
                  <label htmlFor="nl-name" className="sr-only">
                    First name
                  </label>
                  <input
                    id="nl-name"
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                    className="flex-1 rounded-pill border border-cream/20 bg-terracotta-500/40 px-5 py-3 text-sm text-cream placeholder:text-cream/55 focus:border-coral focus:outline-none focus:ring-2 focus:ring-coral/40"
                  />
                  <label htmlFor="nl-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="nl-email"
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 rounded-pill border border-cream/20 bg-terracotta-500/40 px-5 py-3 text-sm text-cream placeholder:text-cream/55 focus:border-coral focus:outline-none focus:ring-2 focus:ring-coral/40"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-pill bg-coral px-6 py-3 font-body text-xs font-semibold uppercase tracking-[0.15em] text-cream shadow-warm transition-all duration-300 hover:-translate-y-0.5 hover:bg-coral-400 hover:shadow-warm-lg"
                  >
                    Join the Community
                    <Heart size={13} fill="currentColor" />
                  </button>
                </form>
              )}

              {error && (
                <p className="mt-3 text-xs text-coral-200">
                  Something went wrong — please try again in a moment.
                </p>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
