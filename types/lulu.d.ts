import type { DetailedHTMLProps, HTMLAttributes } from "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "lulu-buy-button": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
        "buy-button-id": string;
        variant?: "product-showcase" | "product-preview" | "button-only";
      };
    }
  }
}
