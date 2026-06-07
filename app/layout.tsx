import type { Metadata } from "next";
import { Roboto_Slab, Dancing_Script } from "next/font/google";
import "./globals.css";

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  variable: "--font-roboto-slab",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const dancing = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://msgwrites.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  title: {
    default: "MsGwrites — Stories That Point Little Hearts to Jesus",
    template: "%s · MsGwrites",
  },
  description:
    "Genicia Corney — author, speaker, and Kingdom builder writing faith-centered stories for children, families, and ministry communities.",
  keywords: [
    "Christian children's books",
    "faith-based picture books",
    "Ms. G author",
    "Genicia Corney",
    "MsGwrites",
    "children's book author",
    "Kingdom builder",
    "Christian speaker",
  ],
  authors: [{ name: "Genicia Corney", url: BASE }],
  creator: "Genicia Corney",
  openGraph: {
    title: "MsGwrites — Stories That Point Little Hearts to Jesus",
    description:
      "Faith-centered children's books, free resources, and speaking engagements by Genicia Corney.",
    url: BASE,
    siteName: "MsGwrites",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@MsGwrites",
    site: "@MsGwrites",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

// Root layout — just html/body/fonts. Brand chrome (Header/Footer) lives in
// app/(site)/layout.tsx so /studio renders without it.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${robotoSlab.variable} ${dancing.variable}`}
    >
      <body className="flex min-h-screen flex-col">{children}</body>
    </html>
  );
}
