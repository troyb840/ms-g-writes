"use client";

import { useState } from "react";
import Link from "next/link";
import { Heart } from "lucide-react";
import { SocialIcons } from "./SocialIcons";

type Socials = {
  instagram?: string;
  facebook?: string;
  tiktok?: string;
  youtube?: string;
  pinterest?: string;
  linkedin?: string;
};

type FooterProps = {
  socials?: Socials;
  footerScripture?: string;
};

const EXPLORE = [
  { href: "/", label: "Home" },
  { href: "/books", label: "Books" },
  { href: "/resources", label: "Resources" },
  { href: "/events", label: "Events" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Footer({ socials, footerScripture }: FooterProps) {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) setSubmitted(true);
    } catch {
      setSubmitted(true); // silent fail — small footer form
    }
  }

  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-terracotta-400 text-cream">
      <div className="section-container py-16">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-script text-4xl leading-none text-cream"
            >
              Ms. G.
              <Heart
                aria-hidden
                size={14}
                fill="currentColor"
                className="text-coral-300"
              />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream/70">
              Stories that point little hearts to Jesus.
            </p>
            <div className="mt-6">
              <SocialIcons socials={socials} variant="light" size={20} />
            </div>
          </div>

          {/* Quick links — 2-column grid so the 7 items stack at ~half the height */}
          <div className="md:col-span-4">
            <p className="eyebrow mb-4 text-cream/60">Explore</p>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5">
              {EXPLORE.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-cream/75 transition-colors hover:text-coral-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mini newsletter */}
          <div className="md:col-span-4">
            <p className="eyebrow mb-4 text-cream/60">Newsletter</p>
            <p className="text-sm leading-relaxed text-cream/75">
              Notes from the journey.
            </p>

            {submitted ? (
              <p className="mt-4 text-sm text-coral-200">
                Thank you for reaching out. You will hear from me soon!
              </p>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="mt-4 flex flex-col gap-2 sm:flex-row"
              >
                <label htmlFor="footer-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="footer-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  className="flex-1 rounded-pill border border-cream/20 bg-terracotta-500/50 px-4 py-2.5 text-sm text-cream placeholder:text-cream/50 focus:border-coral focus:outline-none focus:ring-2 focus:ring-coral/30"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-pill bg-coral px-5 py-2.5 text-sm font-semibold tracking-wide text-cream transition-all hover:bg-coral-400 hover:shadow-warm-lg"
                >
                  Join
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Optional scripture / tagline */}
        {footerScripture && (
          <div className="mt-16 border-t border-cream/15 pt-10 text-center">
            <p className="accent-script text-2xl text-coral-200 md:text-3xl">
              {footerScripture}
            </p>
          </div>
        )}

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-cream/15 pt-6 text-xs text-cream/60 sm:flex-row">
          <p>© {year} Genicia Corney / MsGwrites.com. All Rights Reserved.</p>
          <div className="flex items-center gap-5">
            <Link
              href="/privacy"
              className="transition-colors hover:text-coral-200"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="transition-colors hover:text-coral-200"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
