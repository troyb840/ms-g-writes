import { Hero } from "@/components/home/Hero";
import { FeaturedBook } from "@/components/home/FeaturedBook";
import { ResourcesTeaser } from "@/components/home/ResourcesTeaser";
import { EventsTeaser } from "@/components/home/EventsTeaser";
import { HeartBehindWriter } from "@/components/home/HeartBehindWriter";
import { Newsletter } from "@/components/home/Newsletter";
import { QuoteCallout } from "@/components/home/QuoteCallout";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <FeaturedBook />
      <ResourcesTeaser />
      <EventsTeaser />
      <HeartBehindWriter />
      <Newsletter />
      <QuoteCallout />
    </main>
  );
}
