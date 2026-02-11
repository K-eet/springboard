interface PartnerLogoProps {
  name: string;
  description?: string;
  featured?: boolean;
}

function PartnerLogo({ name, description, featured = false }: PartnerLogoProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.75rem",
      }}
    >
      {/* Logo placeholder */}
      <div
        style={{
          backgroundColor: featured ? "var(--background-elevated)" : "var(--background-subtle)",
          border: `1px solid var(--border)`,
          borderRadius: "8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: featured ? "1.5rem 2.5rem" : "1rem 1.75rem",
          minWidth: featured ? "220px" : "140px",
          minHeight: featured ? "80px" : "60px",
        }}
        aria-label={`${name} logo placeholder`}
        role="img"
      >
        <span
          style={{
            fontFamily: "var(--font-serif), Georgia, serif",
            fontSize: featured ? "1rem" : "0.8125rem",
            color: featured ? "var(--foreground-muted)" : "var(--foreground-subtle)",
            letterSpacing: "0.03em",
          }}
        >
          {name}
        </span>
      </div>
      {description && (
        <p
          style={{
            fontFamily: "var(--font-serif), Georgia, serif",
            fontSize: "0.8125rem",
            color: "var(--foreground-subtle)",
            textAlign: "center",
            maxWidth: "180px",
            lineHeight: "1.4",
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export default function Partners() {
  return (
    <section
      id="partners"
      aria-labelledby="partners-heading"
      className="section-padding section-divider"
      style={{ backgroundColor: "var(--background-subtle)" }}
    >
      <div className="container-site">
        {/* Section header */}
        <div style={{ marginBottom: "3.5rem", maxWidth: "640px" }}>
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
            Strategic Partners
          </p>
          <h2
            id="partners-heading"
            style={{
              fontFamily: "var(--font-serif), Georgia, serif",
              fontWeight: 400,
              color: "var(--foreground)",
              lineHeight: "1.2",
              marginBottom: "1.5rem",
            }}
            className="text-[2rem] sm:text-[2.5rem] lg:text-[3rem]"
          >
            Connected to the frontier.
          </h2>
          <p
            style={{
              fontFamily: "var(--font-serif), Georgia, serif",
              fontSize: "1.125rem",
              color: "var(--foreground-muted)",
              lineHeight: "1.7",
            }}
          >
            {/* PLACEHOLDER COPY */}
            Our partnership with Silicon Foundry gives Springboard clients direct
            access to the world&rsquo;s most consequential AI ecosystem — including
            leading technology companies, research institutions, and venture capital
            networks.
          </p>
        </div>

        {/* Featured partner: Silicon Foundry */}
        <div
          style={{
            marginBottom: "3rem",
            paddingBottom: "3rem",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-serif), Georgia, serif",
              fontSize: "0.75rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--foreground-subtle)",
              marginBottom: "1.5rem",
            }}
          >
            Primary Partner
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <PartnerLogo
              name="Silicon Foundry"
              featured
            />
            <div style={{ maxWidth: "520px" }}>
              <p
                style={{
                  fontFamily: "var(--font-serif), Georgia, serif",
                  fontSize: "1rem",
                  color: "var(--foreground-muted)",
                  lineHeight: "1.7",
                }}
              >
                {/* PLACEHOLDER COPY */}
                Silicon Foundry is a global innovation advisory firm and a Kearney
                company. They connect the world&rsquo;s leading enterprises with the
                frontier of technology — from emerging AI platforms to the next
                generation of enterprise software.
              </p>
            </div>
          </div>
        </div>

        {/* Additional partner placeholders */}
        <div>
          <p
            style={{
              fontFamily: "var(--font-serif), Georgia, serif",
              fontSize: "0.75rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--foreground-subtle)",
              marginBottom: "2rem",
            }}
          >
            Network Partners
          </p>
          <div className="flex flex-wrap gap-6">
            {["Partner Co.", "Partner Co.", "Partner Co.", "Partner Co.", "Partner Co."].map(
              (name, i) => (
                <PartnerLogo key={i} name={name} />
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
