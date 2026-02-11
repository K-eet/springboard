export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="section-padding section-divider"
      style={{ backgroundColor: "var(--background-subtle)" }}
    >
      <div className="container-site">
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          {/* Section label */}
          <p
            style={{
              fontFamily: "var(--font-serif), Georgia, serif",
              fontSize: "0.75rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--foreground-subtle)",
              marginBottom: "1.5rem",
            }}
          >
            About
          </p>

          {/* Section title */}
          <h2
            id="about-heading"
            style={{
              fontFamily: "var(--font-serif), Georgia, serif",
              fontWeight: 400,
              color: "var(--foreground)",
              lineHeight: "1.2",
              marginBottom: "2rem",
            }}
            className="text-[2rem] sm:text-[2.5rem] lg:text-[3rem]"
          >
            Built for the complexity of now.
          </h2>

          {/* Body copy */}
          <div className="flex flex-col gap-5">
            <p
              style={{
                fontFamily: "var(--font-serif), Georgia, serif",
                fontSize: "1.125rem",
                color: "var(--foreground-muted)",
                lineHeight: "1.7",
              }}
            >
              {/* PLACEHOLDER COPY — replace with client-approved text */}
              Springboard is a consulting and ventures firm based in Kuala Lumpur,
              Malaysia. We work at the intersection of strategy, technology, and
              execution — helping established enterprises identify, assess, and
              capture value from artificial intelligence.
            </p>
            <p
              style={{
                fontFamily: "var(--font-serif), Georgia, serif",
                fontSize: "1.125rem",
                color: "var(--foreground-muted)",
                lineHeight: "1.7",
              }}
            >
              Through our partnership with Silicon Foundry — a global innovation
              advisory firm and Kearney company — we connect Malaysia&rsquo;s most
              consequential organisations with the frontier of enterprise AI, from
              strategy through to scaled deployment.
            </p>
            <p
              style={{
                fontFamily: "var(--font-serif), Georgia, serif",
                fontSize: "1.125rem",
                color: "var(--foreground-muted)",
                lineHeight: "1.7",
              }}
            >
              We are not a software vendor. We are not an accelerator. We are
              a trusted partner for leadership teams who need clear thinking and
              credible execution in uncertain times.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
