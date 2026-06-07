import { Heart } from "lucide-react";
import Link from "next/link";
import { sanityClient, allResourcesQuery } from "@/lib/sanity";
import { ResourceGroup } from "@/components/resources/ResourceGroup";
import { GROUPS } from "@/components/resources/groups";

export const revalidate = 60;
export const metadata = {
  title: "Free Resources",
  description:
    "Free printables, Bible study guides, lesson plans, and kids' activities from Ms. G — always free, no email required.",
  openGraph: {
    title: "Free Resources · MsGwrites.com",
    description:
      "Printables, study guides, lesson plans, and kids' activities — free forever from Ms. G.",
  },
};

export default async function ResourcesPage() {
  const resources = await sanityClient.fetch(allResourcesQuery);
  const all = resources ?? [];

  return (
    <main>
      {/* Page hero */}
      <section className="panel-peach py-20 text-center md:py-28">
        <div className="section-narrow">
          <div className="mb-5 flex items-center justify-center gap-3">
            <Heart size={12} fill="currentColor" className="text-coral" />
            <p className="eyebrow">Free Resources</p>
            <Heart size={12} fill="currentColor" className="text-coral" />
          </div>
          <h1 className="font-display text-4xl text-olive md:text-5xl">
            Tools to Extend the Story
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-terracotta/60 md:text-lg">
            Deepen the conversation, and bring the message home.
          </p>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-terracotta/70">
            Every book Genicia writes is an invitation to wonder, to faith, to connection.
            These free resources are designed to help you carry that invitation further.
            Download, print, share, and use them freely. They are made with love and
            offered with Kingdom purpose.
          </p>
        </div>
      </section>

      {/* Resource groups */}
      <section className="py-section">
        <div className="section-container space-y-20">
          {GROUPS.map((group, i) => {
            const groupResources = all.filter((r: any) => r.group === group.slug);
            return (
              <ResourceGroup
                key={group.slug}
                config={group}
                resources={groupResources}
                index={i}
              />
            );
          })}
        </div>
      </section>

      {/* FREE TO DOWNLOAD notice */}
      <section className="bg-peach-100 py-14">
        <div className="section-container">
          <div className="mx-auto max-w-3xl rounded-card border border-coral/15 bg-cream px-8 py-10 text-center shadow-warm">
            <p className="eyebrow mb-3 text-coral">Free to Download. Free to Share.</p>
            <p className="text-base leading-relaxed text-terracotta/75">
              All resources on this page are free for personal, classroom, community, and ministry
              use. If you share them, we only ask that you share them as-is and credit{" "}
              <span className="font-semibold text-terracotta">Genicia Corney</span> as the author.
            </p>
            <div className="mt-6 border-t border-terracotta/10 pt-6">
              <p className="text-sm text-terracotta/60">
                Have a resource request? Is there something your class, congregation, or family
                could use that you don&apos;t see here?{" "}
              </p>
              <Link href="/contact?subject=general" className="link-arrow mt-2 inline-flex text-sm">
                Send a Resource Request
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Educator note */}
      <section className="panel-cream-warm py-14">
        <div className="section-container">
          <div className="mx-auto max-w-3xl">
            <div className="flex items-start gap-4">
              <Heart size={18} fill="currentColor" className="mt-1 shrink-0 text-coral" />
              <div>
                <p className="eyebrow mb-3">A Note to Educators, Community Leaders & Ministry Leaders</p>
                <p className="text-base leading-relaxed text-terracotta/75">
                  If you&apos;re planning an author visit, a book unit, or a faith-based reading
                  series, Genicia&apos;s resources are designed to work together — before, during,
                  and after the experience. Reach out through the Booking page if you&apos;d like
                  guidance on pairing the right resources with the right engagement.
                </p>
                <Link href="/events/booking" className="btn-primary mt-6 inline-flex">
                  <Heart size={14} fill="currentColor" />
                  View Events &amp; Booking
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom newsletter nudge */}
      <section className="panel-cream-warm py-14 text-center">
        <div className="section-narrow">
          <p className="font-script text-2xl text-coral">Never miss a new resource</p>
          <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-terracotta/65">
            New printables and guides drop alongside book launches. Get on the
            list so you&apos;re first to know.
          </p>
          <Link href="/#newsletter" className="btn-primary mt-6 inline-flex">
            <Heart size={14} fill="currentColor" />
            Join the Newsletter
          </Link>
        </div>
      </section>
    </main>
  );
}
