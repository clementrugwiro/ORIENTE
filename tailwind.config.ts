import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0B2545",
          dark: "#071A33",
          light: "#13345F",
        },
        accent: {
          DEFAULT: "#C9A24B",
          light: "#E0C377",
          dark: "#A9812F",
        },
        surface: "#F7F5F0",
        muted: "#6B7280",
        charcoal: "#1F2430",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      maxWidth: {
        "8xl": "90rem",
      },
      boxShadow: {
        card: "0 4px 24px rgba(11, 37, 69, 0.08)",
        cardHover: "0 12px 32px rgba(11, 37, 69, 0.14)",
      },
      keyframes: {
         kenburns: {
    "0%": { transform: "scale(1)" },
    "100%": { transform: "scale(1.12)" },
  },
  flyAcross: {
    "0%": { transform: "translate(-15vw, 0)", opacity: "0" },
    "10%": { opacity: "1" },
    "85%": { opacity: "1" },
    "100%": { transform: "translate(105vw, -40vh)", opacity: "0" },
  },
        marquee: {
    "0%": { transform: "translateX(0)" },
    "100%": { transform: "translateX(-50%)" },
  },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        fadeUp: "fadeUp 0.6s ease-out forwards",
        kenburns: "kenburns 6s ease-in infinite alternate",
        flyAcross: "flyAcross 4s ease-in-out 0.3s 1 forwards",
      },
    },
  },
  plugins: [],
};
export default config;
