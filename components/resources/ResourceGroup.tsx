"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Heart } from "lucide-react";
import { ResourceCard, type ResourceCardData } from "./ResourceCard";
import type { GroupConfig } from "./groups";

type Props = {
  config: GroupConfig;
  resources: ResourceCardData[];
  index: number;
};

export function ResourceGroup({ config, resources, index }: Props) {
  const displayItems = resources.length > 0 ? resources : config.placeholders;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
    >
      {/* Group header */}
      <div className="mb-7 flex items-start justify-between gap-4">
        <div>
          <div className="mb-2 flex items-center gap-2.5">
            <Heart size={11} fill="currentColor" className="text-coral" />
            <p className="eyebrow">{config.label}</p>
          </div>
          <p className="max-w-xl text-sm leading-relaxed text-terracotta/65">
            {config.description}
          </p>
        </div>
        <Link
          href={`/resources/${config.slug}`}
          className="link-arrow shrink-0 text-sm"
        >
          See all
        </Link>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {displayItems.map((r) => (
          <ResourceCard key={r._id} resource={r} />
        ))}
      </div>
    </motion.div>
  );
}
