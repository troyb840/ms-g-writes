import Link from "next/link";
import { Heart, CalendarHeart } from "lucide-react";

export const metadata = { title: "Events · MsGwrites.com" };

export default function EventsPage() {
  return (
    <main>
      {/* Page hero */}
      <section className="panel-peach py-20 text-center md:py-28">
        <div className="section-narrow">
          <div className="mb-5 flex items-center justify-center gap-3">
            <Heart size={12} fill="currentColor" className="text-coral" />
            <p className="eyebrow">Where to Find Ms. G</p>
            <Heart size={12} fill="currentColor" className="text-coral" />
          </div>
          <h1 className="font-display text-4xl text-olive md:text-5xl">
            Events & Appearances
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-terracotta/70 md:text-lg">
            School visits, church gatherings, community events — if Ms. G is
            showing up, you'll find it here.
          </p>
          <div className="mt-8">
            <Link href="/events/booking" className="btn-primary">
              <CalendarHeart size={15} />
              Book Ms. G for Your Event
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming events — empty state */}
      <section className="py-section">
        <div className="section-container">
          <div className="mb-10 flex items-center gap-3">
            <Heart size={12} fill="currentColor" className="text-coral" />
            <p className="eyebrow">Upcoming</p>
          </div>

          <div className="card-warm py-16 text-center">
            <Heart size={36} fill="currentColor" className="mx-auto text-coral-300/40" />
            <h2 className="mt-4 font-display text-xl text-olive">
              No events scheduled yet
            </h2>
            <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-terracotta/65">
              The calendar is being planned — check back soon! In the
              meantime, you're welcome to invite Ms. G to your community.
            </p>
            <Link href="/events/booking" className="btn-primary mt-6 inline-flex">
              <CalendarHeart size={14} />
              Send a booking inquiry
            </Link>
          </div>
        </div>
      </section>

      {/* Bring Genicia to your community */}
      <section className="panel-cream-warm py-section">
        <div className="section-container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow mb-4">Bring Genicia to Your Community</p>
            <h2 className="font-display text-display-md text-olive md:text-display-lg">
              Let&apos;s Make Something Meaningful Together
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-terracotta/75">
              <p>
                There is something truly special about the moment a child discovers they are a
                reader, a storyteller, a dreamer. Genicia has made it her mission to create those
                moments — in classrooms, sanctuaries, libraries, living rooms, and everywhere
                in between.
              </p>
              <p>
                Whether she&apos;s leading an interactive read-aloud that has little ones laughing
                and leaning in, speaking at a ministry event, or sitting with a young writer who&apos;s
                just beginning to find their voice, Genicia shows up with warmth, purpose, and an
                unshakeable belief in the power of stories to change lives.
              </p>
            </div>
          </div>

          {/* Engagement types grid */}
          <div className="mx-auto mt-12 max-w-3xl">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                "Author visits for schools",
                "Interactive read-aloud sessions",
                "Church and children's ministry appearances",
                "Faith-based family events",
                "Speaking engagements",
                "Book readings and storytime features",
                "Writing encouragement sessions",
                "Classroom literacy enrichment",
                "Panel discussions and interviews",
                "Conferences and community programs",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm text-terracotta/70">
                  <Heart size={10} fill="currentColor" className="shrink-0 text-coral" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="mx-auto max-w-lg text-base leading-relaxed text-terracotta/70">
              If you would like to invite Genicia to your school, church, library, ministry, or
              community event, we would love to hear from you. Every inquiry is read with care,
              and we will be in touch soon.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link href="/events/booking" className="btn-primary">
                <CalendarHeart size={15} />
                Complete the Booking Inquiry Form
              </Link>
              <Link href="/contact" className="btn-secondary">
                Send a General Message
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
