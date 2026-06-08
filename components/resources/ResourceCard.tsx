"use client";

import Image from "next/image";
import { Heart, Download, Clock } from "lucide-react";
import { urlFor } from "@/lib/sanity";

export type ResourceCardData = {
  _id: string;
  title: string;
  slug?: string;
  category?: string;
  group?: string;
  description?: string;
  thumbnail?: any;
  ageRange?: string;
  hasFile: boolean;
  downloadUrl?: string;
};

type Props = { resource: ResourceCardData };

export function ResourceCard({ resource }: Props) {
  const thumbUrl = resource.thumbnail
    ? urlFor(resource.thumbnail).width(480).height(320).fit("crop").url()
    : null;

  return (
    <article className="card-warm group flex flex-col overflow-hidden">
      {/* Thumbnail */}
      <div className="relative aspect-[3/2] w-full overflow-hidden bg-peach-100">
        {thumbUrl ? (
          <Image
            src={thumbUrl}
            alt={resource.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 40vw, 90vw"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
            <Heart size={28} fill="currentColor" className="text-coral-300/50" />
            <p className="text-xs italic text-terracotta/40">Preview coming soon</p>
          </div>
        )}

        {/* Available / Coming Soon badge */}
        <div className="absolute left-3 top-3">
          {resource.hasFile ? (
            <span className="inline-flex items-center gap-1 rounded-full bg-olive/15 px-2.5 py-1 text-xs font-semibold text-olive">
              <Download size={9} />
              Free Download
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 rounded-full bg-peach-200 px-2.5 py-1 text-xs font-semibold text-terracotta/60">
              <Clock size={9} />
              Coming Soon
            </span>
          )}
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        {resource.ageRange && (
          <p className="eyebrow text-coral/65">{resource.ageRange}</p>
        )}
        <h3 className="font-display text-base leading-snug text-olive">
          {resource.title}
        </h3>
        {resource.description && (
          <p className="flex-1 text-sm leading-relaxed text-terracotta/70">
            {resource.description}
          </p>
        )}

        {resource.hasFile && resource.downloadUrl ? (
          <a
            href={resource.downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="btn-primary mt-auto self-start text-xs"
          >
            <Download size={13} />
            Download Free
          </a>
        ) : (
          <p className="mt-auto flex items-center gap-1.5 text-xs text-terracotta/40">
            <Clock size={11} />
            Coming Soon
          </p>
        )}
      </div>
    </article>
  );
}
