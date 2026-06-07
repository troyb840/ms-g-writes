"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Heart } from "lucide-react";
import { SocialIcons } from "./SocialIcons";

type Socials = {
  instagram?: string;
  facebook?: string;
  tiktok?: string;
  youtube?: string;
  pinterest?: string;
  linkedin?: string;
};

type HeaderProps = {
  socials?: Socials;
};

const NAV = [
  { href: "/", label: "Home" },
  { href: "/books", label: "Books" },
  { href: "/resources", label: "Resources" },
  { href: "/events", label: "Events" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header({ socials }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Sticky elevation on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll + Escape-to-close when the mobile menu is open
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname?.startsWith(href) ?? false;

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-cream/90 shadow-warm backdrop-blur-md"
            : "bg-cream/70 backdrop-blur-sm"
        }`}
      >
        <div className="section-container flex h-20 items-center justify-between gap-6">
          {/* Logo — script placeholder until real logo arrives */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-script text-3xl leading-none text-terracotta transition-colors hover:text-coral-500"
          >
            Ms. G.
            <Heart
              aria-hidden
              size={11}
              fill="currentColor"
              className="text-coral"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-7 lg:flex">
            {NAV.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative font-body text-xs font-semibold uppercase tracking-[0.15em] transition-colors ${
                    active
                      ? "text-terracotta"
                      : "text-terracotta/75 hover:text-coral-400"
                  }`}
                >
                  {item.label}
                  {active && (
                    <span
                      aria-hidden
                      className="absolute -bottom-1.5 left-0 right-0 h-[2px] rounded-pill bg-coral"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right cluster */}
          <div className="flex items-center gap-5">
            <div className="hidden md:flex">
              <SocialIcons socials={socials} variant="muted" />
            </div>

            <Link
              href="/#newsletter"
              className="hidden md:inline-flex items-center justify-center gap-2 rounded-pill bg-coral px-5 py-2.5 font-body text-xs font-semibold uppercase tracking-wide text-cream shadow-warm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-coral-400 hover:shadow-warm-lg"
            >
              Subscribe
            </Link>

            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              className="text-terracotta transition-colors hover:text-coral-400 lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      {open && (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 top-20 bottom-0 z-40 overflow-y-auto bg-cream lg:hidden"
        >
          <nav className="section-container flex flex-col gap-1 py-8">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-card px-4 py-3 font-display text-2xl transition-colors ${
                  isActive(item.href)
                    ? "bg-coral-50 text-coral-500"
                    : "text-terracotta hover:bg-peach-50"
                }`}
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/#newsletter"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-pill bg-coral px-7 py-3.5 font-body text-sm font-semibold tracking-wide text-cream shadow-warm transition-all hover:bg-coral-400"
            >
              Subscribe
            </Link>

            {socials && (
              <div className="mt-10 border-t border-peach-200 pt-8">
                <p className="eyebrow mb-4">Find Ms. G</p>
                <SocialIcons socials={socials} variant="muted" size={22} />
              </div>
            )}
          </nav>
        </div>
      )}
    </>
  );
}
