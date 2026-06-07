"use client";

import { ShoppingBag, ExternalLink } from "lucide-react";

type BuyLink = {
  retailer: string;
  url: string;
};

type Props = { links: BuyLink[] };

export function BookBuyLinks({ links }: Props) {
  return (
    <div className="mt-8">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-terracotta/50">
        Where to Buy
      </p>
      <div className="flex flex-wrap gap-3">
        {links.map((link) => (
          <a
            key={link.retailer}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-pill bg-coral px-5 py-2.5 text-sm font-semibold text-cream shadow-warm transition-all hover:-translate-y-0.5 hover:bg-coral-400 hover:shadow-warm-lg"
          >
            <ShoppingBag size={13} />
            {link.retailer}
            <ExternalLink size={11} className="opacity-60" />
          </a>
        ))}
      </div>
    </div>
  );
}
