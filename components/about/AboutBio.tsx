"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Heart } from "lucide-react";
import { urlFor } from "@/lib/sanity";
import { RichText } from "@/components/shared/RichText";
import type { PortableTextBlock } from "@portabletext/types";

const FALLBACK_PORTRAIT = "/genicia.jpg";

const FALLBACK_BIO: PortableTextBlock[] = [
  {
    _type: "block",
    _key: "a",
    style: "normal",
    children: [
      {
        _type: "span",
        _key: "a1",
        text: "Hi, I'm Genicia — but the kids know me as Ms. G. I'm a first-time author, a speaker, and most importantly a Kingdom builder who believes every child deserves a story that points their heart toward Jesus.",
        marks: [],
      },
    ],
    markDefs: [],
  },
  {
    _type: "block",
    _key: "b",
    style: "normal",
    children: [
      {
        _type: "span",
        _key: "b1",
        text: "My debut children's book, A Home to Call Their Own, was born from a place of deep faith — the kind that grows quietly in the middle of uncertainty and blooms into something beautiful. I wanted to give children a story they could hold onto when the world felt unsettled.",
        marks: [],
      },
    ],
    markDefs: [],
  },
  {
    _type: "block",
    _key: "c",
    style: "normal",
    children: [
      {
        _type: "span",
        _key: "c1",
        text: "When I'm not writing, you'll find me speaking to classrooms, churches, and community gatherings — sharing stories that spark imagination and remind both children and adults that they are seen, loved, and never alone.",
        marks: [],
      },
    ],
    markDefs: [],
  },
];

type Props = {
  author?: {
    legalName?: string;
    publicName?: string;
    photo?: any;
    fullBio?: PortableTextBlock[];
    shortIntro?: string;
  } | null;
};

export function AboutBio({ author }: Props) {
  const legalName = author?.legalName ?? "Genicia Corney";
  const photoUrl = author?.photo
    ? urlFor(author.photo).width(900).height(1100).fit("crop").url()
    : FALLBACK_PORTRAIT;
  const bio =
    author?.fullBio && author.fullBio.length > 0
      ? author.fullBio
      : FALLBACK_BIO;

  return (
    <section className="relative py-section">
      <div className="section-container">
        <div className="grid grid-cols-1 items-start gap-14 md:grid-cols-12 md:gap-16">
          {/* Photo column — offset card effect */}
          <motion.div
            className="md:col-span-5"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Offset warm card frame */}
            <div className="relative mx-auto max-w-sm">
              {/* Shadow card — offset bottom-right */}
              <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-card bg-peach-200" />
              {/* Photo card */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-card">
                <Image
                  src={photoUrl}
                  alt={legalName}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 40vw, 90vw"
                />
              </div>
              {/* Floating heart accent */}
              <Heart
                aria-hidden
                size={28}
                fill="currentColor"
                className="absolute -right-4 -top-4 rotate-12 text-coral-300"
              />
            </div>
          </motion.div>

          {/* Bio column */}
          <motion.div
            className="md:col-span-7"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          >
            <div className="mb-6 flex items-center gap-3">
              <Heart size={12} fill="currentColor" className="text-coral" />
              <p className="eyebrow">My Story</p>
            </div>

            <h2 className="mb-8 font-display text-3xl text-olive md:text-4xl">
              The Heart Behind the Writer
            </h2>

            <RichText value={bio} />

            {/* Script sign-off */}
            <p className="mt-10 font-script text-3xl text-coral">
              With love,{" "}
              <span className="text-4xl">{author?.publicName ?? "Ms. G"}</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
