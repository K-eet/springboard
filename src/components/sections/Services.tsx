import { BriefcaseBusiness, Sprout } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <article
      style={{
        backgroundColor: "var(--background-elevated)",
        border: "1px solid var(--border)",
        borderRadius: "8px",
        padding: "2.5rem",
      }}
    >
      <div
        style={{
          color: "var(--accent)",
          marginBottom: "1.5rem",
        }}
        aria-hidden="true"
      >
        {icon}
      </div>
      <h3
        style={{
          fontFamily: "var(--font-serif), Georgia, serif",
          fontWeight: 400,
          fontSize: "1.5rem",
          color: "var(--foreground)",
          marginBottom: "1rem",
          lineHeight: "1.3",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontFamily: "var(--font-serif), Georgia, serif",
          fontSize: "1rem",
          color: "var(--foreground-muted)",
          lineHeight: "1.7",
        }}
      >
        {description}
      </p>
    </article>
  );
}

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="section-padding section-divider"
      style={{ backgroundColor: "var(--background)" }}
    >
      <div className="container-site">
        {/* Section header */}
        <div style={{ marginBottom: "3.5rem" }}>
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
            What We Do
          </p>
          <h2
            id="services-heading"
            style={{
              fontFamily: "var(--font-serif), Georgia, serif",
              fontWeight: 400,
              color: "var(--foreground)",
              lineHeight: "1.2",
              maxWidth: "560px",
            }}
            className="text-[2rem] sm:text-[2.5rem] lg:text-[3rem]"
          >
            Two practices. One purpose.
          </h2>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <ServiceCard
            icon={<BriefcaseBusiness size={32} />}
            title="Consulting"
            description={
              /* PLACEHOLDER COPY */
              "We advise boards, executive teams, and innovation leaders on AI strategy, operating model design, and transformation roadmaps. Our engagements are grounded in deep sector knowledge and informed by Silicon Foundry's unparalleled access to the global AI ecosystem — giving our clients a clear view of where the world is heading and how to move decisively."
            }
          />
          <ServiceCard
            icon={<Sprout size={32} />}
            title="Ventures"
            description={
              /* PLACEHOLDER COPY */
              "We identify, co-create, and invest in early-stage AI ventures that solve real enterprise problems. Working alongside our corporate partners, we help organisations build new lines of business, pilot emerging technologies, and capture value before it is obvious to the market. Our ventures practice bridges the gap between strategic intent and entrepreneurial execution."
            }
          />
        </div>
      </div>
    </section>
  );
}
