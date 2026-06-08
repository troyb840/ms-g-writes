import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Heart, ShoppingBag, ChevronLeft } from "lucide-react";
import { sanityClient, bookBySlugQuery, allBooksQuery, urlFor } from "@/lib/sanity";
import { RichText } from "@/components/shared/RichText";
import { BookBuyLinks } from "@/components/books/BookBuyLinks";
import { BookSamples } from "@/components/books/BookSamples";
import { LinkedResources } from "@/components/books/LinkedResources";

export const revalidate = 60;

export async function generateStaticParams() {
  try {
    const books = await sanityClient.fetch(allBooksQuery);
    return (books ?? []).map((b: any) => ({ slug: b.slug }));
  } catch {
    // Sanity not configured at build time (e.g. GitHub Pages preview).
    // Pre-render the debut book placeholder so the route still exists.
    return [{ slug: "a-home-to-call-their-own" }];
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  try {
    const book = await sanityClient.fetch(bookBySlugQuery, { slug });
    if (!book) return {};
    return {
      title: `${book.title} · MsGwrites.com`,
      description: book.shortDescription,
    };
  } catch {
    return {};
  }
}

const AUDIENCE_LABELS: Record<string, string> = {
  "children-6-8": "Children · Ages 6–8",
  "children-9-12": "Children · Ages 9–12",
  "young-adult": "Young Adult",
  adult: "Adult",
};

const STATUS_CONFIG = {
  "coming-soon": { label: "Coming Soon", classes: "bg-peach-200 text-terracotta/70" },
  preorder: { label: "Pre-Order Now", classes: "bg-olive/15 text-olive" },
  available: { label: "Available Now", classes: "bg-coral/15 text-coral" },
};

export default async function BookDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let book: any = null;
  try {
    book = await sanityClient.fetch(bookBySlugQuery, { slug });
  } catch {
    // Sanity not configured — fall through to placeholder logic below
  }

  // If not in Sanity yet, show placeholder for the known debut book
  const isPlaceholder = !book && slug === "a-home-to-call-their-own";
  if (!book && !isPlaceholder) notFound();

  const displayBook = book ?? {
    title: "A Home to Call Their Own",
    subtitle: "A Tale of Trusting God",
    audience: "children-6-8",
    status: "coming-soon",
    cover: null,
    shortDescription:
      "A picture book about a child finding shelter and trust in places that don't always look like home.",
    fullDescription: null,
    samplePages: null,
    buyLinks: null,
    linkedResources: null,
  };

  const coverUrl = displayBook.cover
    ? urlFor(displayBook.cover).width(800).height(1067).fit("crop").url()
    : null;

  const statusCfg =
    STATUS_CONFIG[displayBook.status as keyof typeof STATUS_CONFIG] ??
    STATUS_CONFIG["coming-soon"];

  return (
    <main>
      {/* Back nav */}
      <div className="panel-cream-warm py-4">
        <div className="section-container">
          <Link
            href="/books"
            className="inline-flex items-center gap-1.5 text-sm text-terracotta/60 transition-colors hover:text-coral"
          >
            <ChevronLeft size={14} />
            All books
          </Link>
        </div>
      </div>

      {/* Hero — cover + meta */}
      <section className="py-section">
        <div className="section-container">
          <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-12 md:gap-16">
            {/* Cover */}
            <div className="md:col-span-4 lg:col-span-4">
              <div className="relative mx-auto max-w-xs">
                {/* Offset shadow */}
                <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-card bg-peach-200" />
                <div className="relative aspect-[3/4] overflow-hidden rounded-card bg-peach-100">
                  {coverUrl ? (
                    <Image
                      src={coverUrl}
                      alt={displayBook.title}
                      fill
                      priority
                      className="object-cover"
                      sizes="(min-width: 768px) 33vw, 80vw"
                    />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8 text-center">
                      <Heart
                        size={40}
                        fill="currentColor"
                        className="text-coral-300/50"
                      />
                      <p className="font-display text-sm italic text-terracotta/50">
                        Cover Coming Soon
                      </p>
                    </div>
                  )}
                  {/* Status badge */}
                  <div className="absolute left-3 top-3">
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${statusCfg.classes}`}
                    >
                      {statusCfg.label}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="md:col-span-8 lg:col-span-8">
              <p className="eyebrow mb-3 text-coral/70">
                {AUDIENCE_LABELS[displayBook.audience] ?? displayBook.audience}
              </p>

              <h1 className="font-display text-3xl text-olive md:text-4xl lg:text-5xl">
                {displayBook.title}
              </h1>

              {displayBook.subtitle && (
                <p className="mt-2 font-display text-lg italic text-terracotta/60">
                  {displayBook.subtitle}
                </p>
              )}

              <p className="mt-6 max-w-xl text-base leading-relaxed text-terracotta/80">
                {displayBook.shortDescription}
              </p>

              {/* Buy links */}
              {displayBook.buyLinks && displayBook.buyLinks.length > 0 ? (
                <BookBuyLinks links={displayBook.buyLinks} />
              ) : (
                <div className="mt-8">
                  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-terracotta/50">
                    Where to Buy
                  </p>
                  <div className="inline-flex items-center gap-2 rounded-pill border border-terracotta/20 px-5 py-2.5 text-sm text-terracotta/40">
                    <Heart size={12} fill="currentColor" className="text-coral-200" />
                    Buy links coming soon
                  </div>
                </div>
              )}

              {/* Newsletter nudge */}
              <p className="mt-8 text-sm text-terracotta/55">
                Want to be first to know when it's available?{" "}
                <Link
                  href="/#newsletter"
                  className="text-coral underline underline-offset-2 hover:text-coral-400"
                >
                  Join the newsletter →
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Full description */}
      {displayBook.fullDescription && (
        <section className="panel-cream-warm py-section-sm">
          <div className="section-narrow">
            <div className="mb-8 flex items-center gap-3">
              <Heart size={12} fill="currentColor" className="text-coral" />
              <p className="eyebrow">About the Book</p>
            </div>
            <RichText value={displayBook.fullDescription} />
          </div>
        </section>
      )}

      {/* Sample pages */}
      {displayBook.samplePages && displayBook.samplePages.length > 0 && (
        <BookSamples pages={displayBook.samplePages} title={displayBook.title} />
      )}

      {/* Linked resources */}
      {displayBook.linkedResources && displayBook.linkedResources.length > 0 && (
        <LinkedResources resources={displayBook.linkedResources} />
      )}

      {/* Bottom CTA */}
      <section className="panel-peach py-16 text-center">
        <div className="section-narrow">
          <p className="font-script text-2xl text-coral">More stories await</p>
          <h2 className="mt-2 font-display text-2xl text-olive">
            Explore the full bookshelf
          </h2>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Link href="/books" className="btn-primary">
              <Heart size={14} fill="currentColor" />
              All Books
            </Link>
            <Link href="/resources" className="btn-secondary">
              Free Resources
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
