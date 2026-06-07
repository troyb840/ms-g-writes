import { sanityClient, homePageQuery } from "@/lib/sanity";
import { Hero } from "@/components/home/Hero";
import { FeaturedBook } from "@/components/home/FeaturedBook";
import { ResourcesTeaser } from "@/components/home/ResourcesTeaser";
import { EventsTeaser } from "@/components/home/EventsTeaser";
import { HeartBehindWriter } from "@/components/home/HeartBehindWriter";
import { Newsletter } from "@/components/home/Newsletter";
import { QuoteCallout } from "@/components/home/QuoteCallout";

// ISR — revalidate every 60s so Genicia's edits in Studio appear quickly
export const revalidate = 60;

type HomeData = {
  author?: {
    publicName?: string;
    legalName?: string;
    tagline?: string;
    headline?: string;
    photo?: any;
    shortIntro?: string;
  };
  featuredBook?: {
    _id: string;
    title: string;
    subtitle?: string;
    slug?: string;
    audience?: string;
    status?: "coming-soon" | "preorder" | "available";
    cover?: any;
    shortDescription?: string;
    buyLinks?: { retailer?: string; url?: string }[];
  } | null;
  settings?: {
    newsletterIntro?: string;
    convertKitFormId?: string;
  };
};

export default async function HomePage() {
  const data = await sanityClient.fetch<HomeData>(homePageQuery);

  return (
    <main>
      {/* 1. Hero — script signature + painterly portrait */}
      <Hero
        publicName={data.author?.publicName}
        legalName={data.author?.legalName}
        tagline={data.author?.tagline}
        headline={data.author?.headline}
        photo={data.author?.photo}
        shortIntro={data.author?.shortIntro}
      />

      {/* 2. Featured book — peach panel */}
      <FeaturedBook book={data.featuredBook} />

      {/* 3. Free Resources teaser */}
      <ResourcesTeaser />

      {/* 4. Events teaser */}
      <EventsTeaser />

      {/* 5. The Heart Behind the Writer — 3 pillars */}
      <HeartBehindWriter />

      {/* 4. Newsletter — terracotta band */}
      <Newsletter
        intro={data.settings?.newsletterIntro}
        convertKitFormId={data.settings?.convertKitFormId}
      />

      {/* 5. Closing quote callout */}
      <QuoteCallout />
    </main>
  );
}
