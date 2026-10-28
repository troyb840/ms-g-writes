import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { DEBUT_BOOK } from "@/lib/books";

// Slim announcement band shown directly under the header on the homepage.
export function NewReleaseBanner() {
  return (
    <Link
      href="/books"
      className="group block border-b border-coral/20 bg-peach-200/70 transition-colors hover:bg-peach-200"
    >
      <div className="section-container flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 py-3 text-center">
        <span className="rounded-pill bg-coral px-3 py-1 font-body text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-cream shadow-warm">
          New Release
        </span>
        <span className="font-display text-sm text-terracotta md:text-base">
          <em>{DEBUT_BOOK.title}</em> is here!
        </span>
        <span className="inline-flex items-center gap-1.5 font-display text-sm font-semibold text-coral-500 underline-offset-4 group-hover:underline md:text-base">
          Shop the book
          <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}
