"use client";

import Link from "next/link";
import { Heart, Download, Lock } from "lucide-react";

type Resource = {
  _id: string;
  title: string;
  slug: string;
  category?: string;
  group?: string;
  description?: string;
  hasFile: boolean;
};

type Props = { resources: Resource[] };

export function LinkedResources({ resources }: Props) {
  return (
    <section className="panel-peach py-section-sm">
      <div className="section-container">
        <div className="mb-8 flex items-center gap-3">
          <Heart size={12} fill="currentColor" className="text-coral" />
          <p className="eyebrow">Free Resources for This Book</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((r) => (
            <div key={r._id} className="card-warm flex flex-col gap-3 p-5">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-base text-olive">{r.title}</h3>
                {r.hasFile ? (
                  <Download size={15} className="mt-0.5 shrink-0 text-coral" />
                ) : (
                  <Lock size={15} className="mt-0.5 shrink-0 text-terracotta/30" />
                )}
              </div>
              {r.description && (
                <p className="text-sm leading-relaxed text-terracotta/70">
                  {r.description}
                </p>
              )}
              <Link
                href={`/resources`}
                className="link-arrow mt-auto text-sm"
              >
                {r.hasFile ? "Download free" : "Coming soon"}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
