import { Heart, BookOpen } from "lucide-react";
import { BooksGrid } from "@/components/books/BooksGrid";

export const metadata = {
  title: "Books",
  description:
    "Faith-centered children's books by Ms. G — picture books, middle grade, and more. Each story points little hearts toward Jesus.",
  openGraph: {
    title: "Books by Ms. G · MsGwrites.com",
    description:
      "Browse Ms. G's bookshelf — faith-centered stories for children, families, and every season of life.",
  },
};

export default function BooksPage() {
  return (
    <main>
      {/* Page hero */}
      <section className="panel-peach py-20 text-center md:py-28">
        <div className="section-narrow">
          <div className="mb-5 flex items-center justify-center gap-3">
            <Heart size={12} fill="currentColor" className="text-coral" />
            <p className="eyebrow">The Bookshelf</p>
            <Heart size={12} fill="currentColor" className="text-coral" />
          </div>
          <h1 className="font-display text-4xl text-olive md:text-5xl">
            Stories for Every Season
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-terracotta/70 md:text-lg">
            Books for little hearts and growing minds — each one written to
            spark curiosity, build confidence, and point readers toward faith.
          </p>
        </div>
      </section>

      {/* Book grid — shows placeholder cards */}
      <section className="py-section">
        <div className="section-container">
          <BooksGrid books={[]} />
        </div>
      </section>

      {/* More stories coming soon */}
      <section className="panel-cream-warm py-section-sm">
        <div className="section-container">
          <div className="mx-auto max-w-xl rounded-card border border-coral/15 bg-cream px-8 py-10 text-center shadow-warm">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-coral/10">
              <BookOpen size={24} className="text-coral" />
            </div>
            <p className="font-script text-2xl text-coral">More stories coming soon</p>
            <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-terracotta/65">
              Genicia is working on new titles for children, young adults, and families.
              Join the newsletter to be the first to know when new books are announced.
            </p>
            <a href="/#newsletter" className="btn-primary mt-6 inline-flex">
              <Heart size={14} fill="currentColor" />
              Stay Tuned
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
