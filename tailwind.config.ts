import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "background-elevated": "var(--background-elevated)",
        "background-subtle": "var(--background-subtle)",
        "foreground-muted": "var(--foreground-muted)",
        "foreground-subtle": "var(--foreground-subtle)",
        accent: {
          DEFAULT: "var(--accent)",
          hover: "var(--accent-hover)",
          highlight: "var(--accent-highlight)",
        },
        border: "var(--border)",
        "button-dark": "var(--button-dark)",
        "button-dark-text": "var(--button-dark-text)",
      },
      fontFamily: {
        display: ["var(--font-display)", "cursive"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      fontSize: {
        hero: ["4.5rem", { lineHeight: "1.1" }],
        "hero-md": ["3.5rem", { lineHeight: "1.1" }],
        "hero-sm": ["2.5rem", { lineHeight: "1.1" }],
        h1: ["3rem", { lineHeight: "1.2" }],
        "h1-md": ["2.5rem", { lineHeight: "1.2" }],
        "h1-sm": ["2rem", { lineHeight: "1.2" }],
        h2: ["2rem", { lineHeight: "1.3" }],
        "h2-md": ["1.75rem", { lineHeight: "1.3" }],
        "h2-sm": ["1.5rem", { lineHeight: "1.3" }],
        h3: ["1.5rem", { lineHeight: "1.4" }],
        body: ["1.125rem", { lineHeight: "1.6" }],
        "body-sm": ["1rem", { lineHeight: "1.6" }],
        small: ["0.875rem", { lineHeight: "1.5" }],
        nav: ["0.75rem", { lineHeight: "1.5" }],
      },
      spacing: {
        "section": "7.5rem",
        "section-sm": "5rem",
      },
      maxWidth: {
        container: "1200px",
        prose: "720px",
      },
      borderRadius: {
        pill: "50px",
      },
      letterSpacing: {
        nav: "0.1em",
        caps: "0.08em",
      },
      transitionDuration: {
        DEFAULT: "150ms",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
