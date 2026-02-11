"use client";

import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "200px",
        paddingBottom: "120px",
        backgroundColor: "var(--background)",
        textAlign: "center",
        position: "relative",
      }}
    >
      <div className="container-site flex flex-col items-center">
        {/* Partnership badge */}
        <p
          style={{
            fontFamily: "var(--font-serif), Georgia, serif",
            fontSize: "0.75rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--foreground-subtle)",
            marginBottom: "2.5rem",
          }}
        >
          A Silicon Foundry Partner
        </p>

        {/* Main headline — Quintessential font */}
        <h1
          style={{
            fontFamily: "var(--font-display), cursive",
            fontWeight: 400,
            color: "var(--foreground)",
            lineHeight: "1.1",
            marginBottom: "2rem",
            maxWidth: "900px",
          }}
          className="text-[2.5rem] sm:text-[3.5rem] lg:text-[4.5rem]"
        >
          Where{" "}
          <span style={{ position: "relative", display: "inline-block" }}>
            Bold Ideas
            {/* Hand-drawn teal annotation — SVG underline */}
            <svg
              aria-hidden="true"
              viewBox="0 0 220 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                position: "absolute",
                bottom: "-4px",
                left: "-4px",
                width: "calc(100% + 8px)",
                height: "14px",
                overflow: "visible",
              }}
            >
              <path
                d="M4 9 C40 3, 80 11, 120 7 C160 3, 190 10, 216 6"
                stroke="#2D8C7A"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </span>{" "}
          Meet Enterprise Ambition.
        </h1>

        {/* Subheadline */}
        <p
          style={{
            fontFamily: "var(--font-serif), Georgia, serif",
            fontSize: "1.125rem",
            color: "var(--foreground-muted)",
            lineHeight: "1.6",
            maxWidth: "520px",
            marginBottom: "3rem",
          }}
        >
          Springboard partners with Silicon Foundry — a Kearney company — to help
          Malaysia&rsquo;s leading organisations navigate and lead in the age of AI.
        </p>

        {/* CTA Button */}
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
          }}
          style={{
            display: "inline-block",
            backgroundColor: "var(--button-dark)",
            color: "var(--button-dark-text)",
            fontFamily: "var(--font-serif), Georgia, serif",
            fontSize: "1rem",
            padding: "1rem 2.5rem",
            borderRadius: "50px",
            letterSpacing: "0.02em",
            transition: "opacity 150ms ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          Get in Touch
        </a>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "2.5rem",
          left: "50%",
          transform: "translateX(-50%)",
          color: "var(--foreground-subtle)",
        }}
        aria-hidden="true"
      >
        <ArrowDown size={18} />
      </div>
    </section>
  );
}
