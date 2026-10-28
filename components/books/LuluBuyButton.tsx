"use client";

import Script from "next/script";

type Props = {
  buyButtonId: string;
  variant?: "product-showcase" | "product-preview" | "button-only";
};

// Lulu's web component renders in a shadow DOM and applies the colors/fonts saved
// in the Lulu buy-button dashboard inline, so its look is configured there, not here.
export function LuluBuyButton({ buyButtonId, variant = "product-showcase" }: Props) {
  return (
    <>
      <Script id="lulu-buy-js" src="https://js.lulu.com/lulu-buy.js" strategy="afterInteractive" />
      <lulu-buy-button buy-button-id={buyButtonId} variant={variant} />
    </>
  );
}
