import { notFound } from "next/navigation";
import Link from "next/link";
import { Heart, ChevronLeft } from "lucide-react";
import { sanityClient, resourcesByGroupQuery } from "@/lib/sanity";
import { ResourceCard } from "@/components/resources/ResourceCard";
import { GROUPS } from "@/components/resources/groups";

export const revalidate = 60;

export async function generateStaticParams() {
  return GROUPS.map((g) => ({ group: g.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ group: string }> }) {
  const { group } = await params;
  const config = GROUPS.find((g) => g.slug === group);
  if (!config) return {};
  return { title: `${config.label} · Resources · MsGwrites.com` };
}

export default async function ResourceGroupPage({
  params,
}: {
  params: Promise<{ group: string }>;
}) {
  const { group } = await params;
  const config = GROUPS.find((g) => g.slug === group);
  if (!config) notFound();

  const resources = await sanityClient.fetch(resourcesByGroupQuery, {
    group,
  });
  const displayItems = resources?.length > 0 ? resources : config.placeholders;

  return (
    <main>
      {/* Back nav */}
      <div className="panel-cream-warm py-4">
        <div className="section-container">
          <Link
            href="/resources"
            className="inline-flex items-center gap-1.5 text-sm text-terracotta/60 transition-colors hover:text-coral"
          >
            <ChevronLeft size={14} />
            All resources
          </Link>
        </div>
      </div>

      {/* Page hero */}
      <section className="panel-peach py-16 text-center md:py-20">
        <div className="section-narrow">
          <div className="mb-4 flex items-center justify-center gap-3">
            <Heart size={12} fill="currentColor" className="text-coral" />
            <p className="eyebrow">Resources</p>
            <Heart size={12} fill="currentColor" className="text-coral" />
          </div>
          <h1 className="font-display text-3xl text-olive md:text-4xl">
            {config.label}
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-terracotta/70 md:text-base">
            {config.description}
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-section">
        <div className="section-container">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {displayItems.map((r: any) => (
              <ResourceCard key={r._id} resource={r} />
            ))}
          </div>
        </div>
      </section>

      {/* Nav between groups */}
      <section className="panel-cream-warm py-10">
        <div className="section-container">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.1em] text-terracotta/50">
            More Resources
          </p>
          <div className="flex flex-wrap gap-3">
            {GROUPS.filter((g) => g.slug !== group).map((g) => (
              <Link key={g.slug} href={`/resources/${g.slug}`} className="btn-secondary text-sm">
                {g.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
