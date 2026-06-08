import { BookingForm } from "@/components/events/BookingForm";
import { Heart, CalendarHeart, Download, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { assetPath } from "@/lib/assetPath";

export const metadata = { title: "Book Ms. G · MsGwrites.com" };

export default function BookingPage() {
  return (
    <main>
      {/* Page hero */}
      <section className="panel-peach py-16 text-center md:py-20">
        <div className="section-narrow">
          <div className="mb-4 flex items-center justify-center gap-3">
            <Heart size={12} fill="currentColor" className="text-coral" />
            <p className="eyebrow">Speaking & Events</p>
            <Heart size={12} fill="currentColor" className="text-coral" />
          </div>
          <h1 className="font-display text-4xl text-olive md:text-5xl">
            Book Ms. G
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-terracotta/70">
            Fill out the form below and Genicia's team will be in touch within
            3–5 business days to discuss availability and details.
          </p>
        </div>
      </section>

      {/* A Few Things to Know */}
      <section className="panel-cream-warm py-12">
        <div className="section-container">
          <div className="mx-auto max-w-2xl">
            <p className="eyebrow mb-5">A Few Things to Know</p>
            <ul className="space-y-3">
              {[
                "She is available for both in-person and virtual engagements.",
                "All engagements reflect her core values of love, encouragement, and purpose.",
                "She works with schools, churches, libraries, community organizations, and more.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-terracotta/75">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-coral" />
                  {item}
                </li>
              ))}
            </ul>

            {/* Speaker one-sheet preview + download */}
            <div className="mt-8 overflow-hidden rounded-card border border-coral/20 bg-peach-50 shadow-warm">
              {/* Preview thumbnail */}
              <div className="relative w-full overflow-hidden border-b border-coral/10 bg-peach-100">
                <a
                  href={assetPath("/ms-g-speaker-one-sheet.pdf")}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Preview speaker one-sheet (opens PDF)"
                >
                  <Image
                    src="/ms-g-speaker-one-sheet-preview.jpg"
                    alt="Ms. G Speaker One-Sheet preview — bio, speaking topics, and engagement details"
                    width={800}
                    height={1035}
                    className="h-auto w-full transition-opacity duration-200 hover:opacity-90"
                  />
                </a>
              </div>

              {/* Label + download button */}
              <div className="flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center">
                <div className="flex items-center gap-3 flex-1">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-coral/10">
                    <Download size={16} className="text-coral" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-terracotta">Ms. G — Speaker One-Sheet</p>
                    <p className="text-xs text-terracotta/55">Bio, topics, and experience — all in one page.</p>
                  </div>
                </div>
                <a
                  href={assetPath("/ms-g-speaker-one-sheet.pdf")}
                  download
                  className="btn-primary shrink-0 py-2 text-xs"
                >
                  <Download size={13} />
                  Download PDF
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-section">
        <div className="section-container">
          <div className="mx-auto max-w-2xl">
            <BookingForm />
          </div>
        </div>
      </section>

      {/* Footer nudge */}
      <section className="panel-cream-warm py-12 text-center">
        <div className="section-narrow">
          <p className="text-sm text-terracotta/60">
            Have a general question instead?{" "}
            <Link href="/contact" className="text-coral underline underline-offset-2 hover:text-coral-400">
              Send a message
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
