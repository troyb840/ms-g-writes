import { BookingForm } from "@/components/events/BookingForm";
import { Heart, CalendarHeart, Download, CheckCircle2 } from "lucide-react";
import Link from "next/link";

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

            {/* Speaker one-sheet download */}
            <div className="mt-8 flex flex-col gap-4 rounded-card border border-coral/20 bg-peach-50 px-5 py-4 sm:flex-row sm:items-center">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-coral/10">
                <Download size={18} className="text-coral" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-terracotta">Ms. G — Speaker One-Sheet</p>
                <p className="text-xs text-terracotta/55">Bio, topics, and experience — all in one page.</p>
              </div>
              <a
                href="/ms-g-speaker-one-sheet.pdf"
                download
                className="btn-primary py-2 text-xs"
              >
                Download
              </a>
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
