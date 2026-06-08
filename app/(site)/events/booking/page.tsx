import { BookingForm } from "@/components/events/BookingForm";
import { Heart, CalendarHeart, Download, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { assetPath } from "@/lib/assetPath";
import speakerPreviewImg from "@/public/ms-g-speaker-one-sheet-preview.jpg";

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
            <div className="mt-8 overflow-hidden rounded-card border border-coral/20 shadow-warm">
              {/* Preview image with download button overlaid top-right */}
              <div className="relative w-full">
                <a
                  href={assetPath("/ms-g-speaker-one-sheet.pdf")}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View speaker one-sheet PDF"
                >
                  <Image
                    src={speakerPreviewImg}
                    alt="Ms. G Speaker One-Sheet preview — bio, speaking topics, and engagement details"
                    width={800}
                    height={1035}
                    className="h-auto w-full"
                  />
                </a>

                {/* Download button — centered in the blank right half of the header band (~top 13% of image) */}
                <a
                  href={assetPath("/ms-g-speaker-one-sheet.pdf")}
                  download
                  className="absolute right-[5%] top-[3.5%] inline-flex items-center gap-2.5 rounded-pill border-2 border-cream/80 bg-coral px-7 py-3.5 font-body text-sm font-semibold uppercase tracking-[0.15em] text-cream shadow-warm-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-coral-400"
                >
                  <Download size={15} />
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
