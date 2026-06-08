"use client";

import Image from "next/image";
import { Heart } from "lucide-react";

type Props = {
  pages: any[];
  title: string;
};

export function BookSamples({ pages, title }: Props) {
  return (
    <section className="py-section">
      <div className="section-container">
        <div className="mb-10 flex items-center gap-3">
          <Heart size={12} fill="currentColor" className="text-coral" />
          <p className="eyebrow">A Peek Inside</p>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {pages.map((page, i) => {
            const imgUrl = typeof page === "string" ? page : null;
            if (!imgUrl) return null;
            return (
              <div
                key={i}
                className="relative aspect-[4/3] overflow-hidden rounded-card bg-peach-100 shadow-warm"
              >
                <Image
                  src={imgUrl}
                  alt={`${title} — sample page ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 25vw, 50vw"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
