import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Heart, ChevronLeft, ShoppingBag } from "lucide-react";
import { BOOKS } from "@/lib/books";
import { LuluBuyButton } from "@/components/books/LuluBuyButton";

export function generateStaticParams() {
  return BOOKS.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const book = BOOKS.find((b) => b.slug === slug);
  if (!book) return {};
  return {
    title: `${book.title} · MsGwrites.com`,
    description: book.shortDescription,
  };
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
  available: { label: "Available Now", classes: "bg-coral text-cream shadow-warm" },
};

export default async function BookDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const book = BOOKS.find((b) => b.slug === slug);
  if (!book) notFound();

  const statusCfg = STATUS_CONFIG[book.status] ?? STATUS_CONFIG["coming-soon"];
  const canBuy = book.status !== "coming-soon" && !!book.luluBuyButtonId;

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
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-12 md:gap-16">
            {/* Cover */}
            <div className="md:col-span-6">
              <div className="relative mx-auto max-w-xl">
                {/* Offset shadow */}
                <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-card bg-peach-200" />
                <div className="relative overflow-hidden rounded-card bg-peach-100 shadow-warm-lg">
                  {book.cover ? (
                    <Image
                      src={book.cover}
                      alt={`${book.title} cover`}
                      priority
                      className="h-auto w-full"
                      sizes="(min-width: 768px) 45vw, 90vw"
                    />
                  ) : (
                    <div className="flex aspect-[3/4] flex-col items-center justify-center gap-4 p-8 text-center">
                      <Heart size={40} fill="currentColor" className="text-coral-300/50" />
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
            <div className="md:col-span-6">
              <p className="eyebrow mb-3 text-coral/70">
                {AUDIENCE_LABELS[book.audience] ?? book.audience}
              </p>

              <h1 className="font-display text-3xl text-olive md:text-4xl lg:text-5xl">
                {book.title}
              </h1>

              {book.subtitle && (
                <p className="mt-2 font-display text-lg italic text-terracotta/60">
                  {book.subtitle}
                </p>
              )}

              <p className="mt-4 text-sm text-terracotta/60">
                By Genicia Corney
                {book.illustrator && <> · Illustrated by {book.illustrator}</>}
              </p>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-terracotta/80">
                {book.shortDescription}
              </p>

              <div className="mt-8">
                {canBuy ? (
                  <a href="#buy" className="btn-primary">
                    <ShoppingBag size={14} />
                    Get Your Copy
                  </a>
                ) : (
                  <div className="inline-flex items-center gap-2 rounded-pill border border-terracotta/20 px-5 py-2.5 text-sm text-terracotta/40">
                    <Heart size={12} fill="currentColor" className="text-coral-200" />
                    Buy links coming soon
                  </div>
                )}
              </div>

              {/* Newsletter nudge */}
              <p className="mt-8 text-sm text-terracotta/55">
                Want to hear about new books and events first?{" "}
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

      {/* Purchase — Lulu buy button */}
      {canBuy && (
        <section id="buy" className="panel-cream-warm scroll-mt-24 py-section-sm">
          <div className="section-container">
            <div className="mb-8 text-center">
              <p className="font-script text-3xl text-coral">Bring it home</p>
              <h2 className="mt-1 font-display text-2xl text-olive md:text-3xl">
                Get Your Copy
              </h2>
            </div>
            <div className="mx-auto max-w-4xl">
              <LuluBuyButton buyButtonId={book.luluBuyButtonId!} />
            </div>
          </div>
        </section>
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
