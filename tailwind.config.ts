import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sanity/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette — exact hex from Genicia's brief
        cream: {
          DEFAULT: "#FDF6EE",
          50: "#FFFCF7",
          100: "#FDF6EE",
          200: "#F8EBDA",
          300: "#F0DCC2",
        },
        coral: {
          DEFAULT: "#D99985",
          50: "#FAEFEB",
          100: "#F2D9CF",
          200: "#E8BAA7",
          300: "#D99985",
          400: "#C97D66",
          500: "#B5634C",
        },
        olive: {
          DEFAULT: "#6B703C",
          50: "#EFF0E4",
          100: "#DCDEC0",
          200: "#B5B98A",
          300: "#8E9355",
          400: "#6B703C",
          500: "#535732",
        },
        terracotta: {
          DEFAULT: "#5A3A33",
          50: "#F0E4E1",
          100: "#D9BFB8",
          200: "#A87C70",
          300: "#7D544A",
          400: "#5A3A33",
          500: "#3F2823",
        },
        peach: {
          DEFAULT: "#E8C6B5",
          50: "#FAF1EC",
          100: "#F3DDD0",
          200: "#E8C6B5",
          300: "#D9A88F",
          400: "#C68B6E",
        },
      },
      fontFamily: {
        // Roboto Slab for both display and body — warm, readable slab serif
        display: ["var(--font-roboto-slab)", "Georgia", "serif"],
        body: ["var(--font-roboto-slab)", "Georgia", "serif"],
        // Dancing Script for accent moments only
        script: ["var(--font-dancing)", "cursive"],
      },
      fontSize: {
        // Enforce 16px minimum body for accessibility (her brief)
        base: ["1rem", { lineHeight: "1.65" }],
        // Editorial display sizes
        "display-xl": ["clamp(2.5rem, 5vw, 4.5rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2rem, 4vw, 3.25rem)", { lineHeight: "1.15", letterSpacing: "-0.015em" }],
        "display-md": ["clamp(1.5rem, 3vw, 2.25rem)", { lineHeight: "1.2" }],
      },
      spacing: {
        // Editorial breathing room
        "section": "clamp(4rem, 8vw, 8rem)",
        "section-sm": "clamp(2.5rem, 5vw, 5rem)",
      },
      borderRadius: {
        // Soft, warm corners — not sharp
        card: "1rem",
        pill: "9999px",
      },
      boxShadow: {
        // Soft, warm shadows — never harsh black
        warm: "0 4px 24px -8px rgba(90, 58, 51, 0.12)",
        "warm-lg": "0 12px 40px -12px rgba(90, 58, 51, 0.18)",
        "warm-inset": "inset 0 1px 0 rgba(255, 255, 255, 0.6)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "marquee": "marquee 30s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      backgroundImage: {
        // Subtle paper texture — applied as overlay for "warm paper" feel
        "paper-grain": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0.353 0 0 0 0 0.227 0 0 0 0 0.2 0 0 0 0.04 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};

export default config;
