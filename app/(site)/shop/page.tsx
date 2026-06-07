import Link from "next/link";
import { Heart, Package, BookOpen, ShoppingBag } from "lucide-react";

export const metadata = { title: "Shop · MsGwrites.com" };

const COMING_SOON_ITEMS = [
  {
    icon: BookOpen,
    label: "Books",
    description: "Signed copies of Ms. G's debut title — straight from her hands to your home.",
  },
  {
    icon: Heart,
    label: "Scripture Cards",
    description: "Beautiful keepsake verse cards for little rooms, big walls, and hearts of all sizes.",
  },
  {
    icon: Package,
    label: "Reading Kits",
    description: "Curated bundles pairing the book with activities, bookmarks, and a family devotional.",
  },
  {
    icon: ShoppingBag,
    label: "Merch & More",
    description: "Tees, tote bags, and small gifts carrying the warmth of Ms. G's stories.",
  },
];

export default function ShopPage() {
  return (
    <main>
      {/* Hero */}
      <section className="panel-peach py-20 text-center md:py-28">
        <div className="section-narrow">
          <div className="mb-5 flex items-center justify-center gap-3">
            <Heart size={12} fill="currentColor" className="text-coral" />
            <p className="eyebrow">The Shop</p>
            <Heart size={12} fill="currentColor" className="text-coral" />
          </div>
          <h1 className="font-display text-4xl text-olive md:text-5xl">
            Books & Meaningful Things
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-terracotta/70 md:text-lg">
            A small, carefully curated shop is on its way — books, Scripture
            cards, and a few things made with intention.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-coral/10 px-4 py-2 font-script text-xl text-coral">
            Coming soon
          </div>
        </div>
      </section>

      {/* Preview cards */}
      <section className="py-section">
        <div className="section-container">
          <p className="mb-10 text-center text-sm font-semibold uppercase tracking-[0.12em] text-terracotta/45">
            A peek at what's coming
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {COMING_SOON_ITEMS.map(({ icon: Icon, label, description }) => (
              <div
                key={label}
                className="card-warm flex flex-col items-center gap-4 p-8 text-center"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-coral/10">
                  <Icon size={22} className="text-coral" />
                </div>
                <h3 className="font-display text-lg text-olive">{label}</h3>
                <p className="text-sm leading-relaxed text-terracotta/65">
                  {description}
                </p>
                <span className="mt-auto rounded-full bg-peach-200 px-3 py-1 text-xs font-semibold text-terracotta/50">
                  Coming Soon
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="relative overflow-hidden bg-terracotta-400 py-16 text-center text-cream">
        <Heart
          aria-hidden size={44} fill="currentColor"
          className="absolute left-8 top-6 -rotate-12 text-coral-300/15"
        />
        <Heart
          aria-hidden size={28} fill="currentColor"
          className="absolute bottom-6 right-10 rotate-6 text-coral-200/20"
        />
        <div className="section-narrow relative">
          <p className="font-script text-3xl text-coral-200">Be the first to know</p>
          <h2 className="mt-2 font-display text-2xl text-cream md:text-3xl">
            Join the newsletter for early access
          </h2>
          <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-cream/75">
            Subscribers hear about new books, resources, and the shop opening
            before anyone else.
          </p>
          <Link href="/#newsletter" className="btn-primary mt-8 inline-flex">
            <Heart size={14} fill="currentColor" />
            Get Early Access
          </Link>
        </div>
      </section>
    </main>
  );
}
