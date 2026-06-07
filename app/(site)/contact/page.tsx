import { Heart, Instagram, Mail } from "lucide-react";
import Link from "next/link";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata = { title: "Contact · MsGwrites.com" };

export default function ContactPage() {
  return (
    <main>
      {/* Page hero */}
      <section className="panel-peach py-20 text-center md:py-24">
        <div className="section-narrow">
          <div className="mb-5 flex items-center justify-center gap-3">
            <Heart size={12} fill="currentColor" className="text-coral" />
            <p className="eyebrow">Get In Touch</p>
            <Heart size={12} fill="currentColor" className="text-coral" />
          </div>
          <h1 className="font-display text-4xl text-olive md:text-5xl">
            I&apos;d Love to Hear from You
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-terracotta/70">
            Whether you&apos;re reaching out about a book, a resource, a speaking
            opportunity, or simply want to say hello, you&apos;re always welcome here.
            Thank you for stopping by MsGwrites.com. It&apos;s a joy to connect with
            others who share a heart for stories that point people to Jesus.
          </p>
        </div>
      </section>

      {/* Two-column layout: form + sidebar */}
      <section className="py-section">
        <div className="section-container">
          <div className="grid grid-cols-1 gap-14 md:grid-cols-12 md:gap-16">
            {/* Form */}
            <div className="md:col-span-7">
              <ContactForm />
            </div>

            {/* Sidebar */}
            <aside className="md:col-span-5">
              <div className="space-y-8">
                {/* Quick links */}
                <div className="card-warm p-6">
                  <h2 className="mb-4 font-display text-lg text-olive">
                    Looking for something specific?
                  </h2>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <Link
                        href="/events/booking"
                        className="link-arrow text-terracotta/80"
                      >
                        Book Ms. G for an event
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/resources"
                        className="link-arrow text-terracotta/80"
                      >
                        Download free resources
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/books"
                        className="link-arrow text-terracotta/80"
                      >
                        Learn about the books
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/#newsletter"
                        className="link-arrow text-terracotta/80"
                      >
                        Join the newsletter
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Social */}
                <div className="card-warm p-6">
                  <h2 className="mb-2 font-display text-lg text-olive">
                    Find Ms. G Online
                  </h2>
                  <p className="mb-4 text-sm leading-relaxed text-terracotta/65">
                    The fastest way to connect is usually Instagram — she shares
                    behind-the-scenes moments and updates there first.
                  </p>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex text-sm"
                  >
                    <Heart size={13} fill="currentColor" />
                    Follow on Instagram
                  </a>
                </div>

                {/* Response note */}
                <p className="text-xs leading-relaxed text-terracotta/45">
                  Ms. G reads every message personally. Response time is
                  typically 3–5 business days. For urgent booking inquiries,
                  the{" "}
                  <Link
                    href="/events/booking"
                    className="text-coral underline underline-offset-2"
                  >
                    booking form
                  </Link>{" "}
                  is the fastest path.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
