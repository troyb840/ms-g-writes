import { sanityClient, authorQuery } from "@/lib/sanity";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutBio } from "@/components/about/AboutBio";
import { AboutPillars } from "@/components/about/AboutPillars";
import { AboutSpeaker } from "@/components/about/AboutSpeaker";

export const revalidate = 60;
export const metadata = {
  title: "About Ms. G",
  description:
    "Meet Genicia Corney — author, speaker, and Kingdom builder behind MsGwrites. Learn her story, her faith, and how to bring her to your community.",
  openGraph: {
    title: "Meet Ms. G · MsGwrites.com",
    description:
      "The heart behind the stories — Genicia Corney is an author, speaker, and Kingdom builder writing faith-centered books for children.",
  },
};

export default async function AboutPage() {
  const author = await sanityClient.fetch(authorQuery);

  return (
    <main>
      <AboutHero author={author} />
      <AboutBio author={author} />
      <AboutPillars />
      <AboutSpeaker author={author} />
    </main>
  );
}
