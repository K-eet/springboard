"use client";

import { Linkedin, User } from "lucide-react";

interface TeamMemberProps {
  name: string;
  title: string;
  bio: string;
  linkedIn?: string;
  size?: "large" | "small";
}

function AvatarPlaceholder({ size }: { size: "large" | "small" }) {
  const px = size === "large" ? 160 : 96;
  return (
    <div
      style={{
        width: px,
        height: px,
        borderRadius: "50%",
        backgroundColor: "var(--background-subtle)",
        border: "1px solid var(--border)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
      role="img"
      aria-label="Headshot placeholder"
    >
      <User
        size={size === "large" ? 40 : 24}
        style={{ color: "var(--foreground-subtle)" }}
        aria-hidden="true"
      />
    </div>
  );
}

function CEOCard({ name, title, bio, linkedIn }: TeamMemberProps) {
  return (
    <article
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "1.5rem",
        backgroundColor: "var(--background-elevated)",
        border: "1px solid var(--border)",
        borderRadius: "8px",
        padding: "2.5rem",
        maxWidth: "540px",
      }}
    >
      <AvatarPlaceholder size="large" />
      <div>
        <h3
          style={{
            fontFamily: "var(--font-serif), Georgia, serif",
            fontWeight: 400,
            fontSize: "1.5rem",
            color: "var(--foreground)",
            marginBottom: "0.25rem",
          }}
        >
          {name}
        </h3>
        <p
          style={{
            fontFamily: "var(--font-serif), Georgia, serif",
            fontSize: "0.875rem",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: "var(--accent)",
            marginBottom: "1rem",
          }}
        >
          {title}
        </p>
        <p
          style={{
            fontFamily: "var(--font-serif), Georgia, serif",
            fontSize: "1rem",
            color: "var(--foreground-muted)",
            lineHeight: "1.7",
            marginBottom: "1.25rem",
          }}
        >
          {bio}
        </p>
        {linkedIn && (
          <a
            href={linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${name} on LinkedIn`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              fontFamily: "var(--font-serif), Georgia, serif",
              fontSize: "0.8125rem",
              color: "var(--foreground-muted)",
              transition: "color 150ms ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--foreground)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--foreground-muted)")}
          >
            <Linkedin size={16} aria-hidden="true" />
            LinkedIn
          </a>
        )}
      </div>
    </article>
  );
}

function AdvisorCard({ name, title, bio, linkedIn }: TeamMemberProps) {
  return (
    <article
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        backgroundColor: "var(--background)",
        border: "1px solid var(--border)",
        borderRadius: "8px",
        padding: "2rem",
      }}
    >
      <AvatarPlaceholder size="small" />
      <div>
        <h3
          style={{
            fontFamily: "var(--font-serif), Georgia, serif",
            fontWeight: 400,
            fontSize: "1.125rem",
            color: "var(--foreground)",
            marginBottom: "0.2rem",
          }}
        >
          {name}
        </h3>
        <p
          style={{
            fontFamily: "var(--font-serif), Georgia, serif",
            fontSize: "0.8125rem",
            color: "var(--accent)",
            letterSpacing: "0.04em",
            marginBottom: "0.75rem",
          }}
        >
          {title}
        </p>
        <p
          style={{
            fontFamily: "var(--font-serif), Georgia, serif",
            fontSize: "0.875rem",
            color: "var(--foreground-muted)",
            lineHeight: "1.6",
          }}
        >
          {bio}
        </p>
        {linkedIn && (
          <a
            href={linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${name} on LinkedIn`}
            style={{
              display: "inline-block",
              marginTop: "0.75rem",
              color: "var(--foreground-subtle)",
              transition: "color 150ms ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--foreground-muted)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--foreground-subtle)")}
          >
            <Linkedin size={15} aria-hidden="true" />
          </a>
        )}
      </div>
    </article>
  );
}

// PLACEHOLDER team data — replace with real data
const ceo: TeamMemberProps = {
  name: "Chief Executive Officer",
  title: "Chief Executive Officer",
  bio: "Placeholder biography. A seasoned executive with over two decades of experience leading enterprise transformation initiatives across Southeast Asia. Previously held senior roles at [Company A] and [Company B]. Deeply committed to helping Malaysian organisations lead in the age of AI.",
  linkedIn: "https://linkedin.com",
  size: "large",
};

const advisors: TeamMemberProps[] = [
  {
    name: "Advisor Name",
    title: "Former CTO, [Company]",
    bio: "Placeholder bio. 20+ years in enterprise technology. Led digital transformation at a Fortune 500.",
    linkedIn: "https://linkedin.com",
    size: "small",
  },
  {
    name: "Advisor Name",
    title: "Partner, [Advisory Firm]",
    bio: "Placeholder bio. Expert in AI governance and responsible deployment at scale.",
    size: "small",
  },
  {
    name: "Advisor Name",
    title: "MD, [Investment Firm]",
    bio: "Placeholder bio. Investor and operator with experience across Southeast Asian markets.",
    linkedIn: "https://linkedin.com",
    size: "small",
  },
  {
    name: "Advisor Name",
    title: "Professor, [University]",
    bio: "Placeholder bio. Academic specialist in machine learning and enterprise systems research.",
    size: "small",
  },
];

export default function Team() {
  return (
    <section
      id="team"
      aria-labelledby="team-heading"
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
            Leadership
          </p>
          <h2
            id="team-heading"
            style={{
              fontFamily: "var(--font-serif), Georgia, serif",
              fontWeight: 400,
              color: "var(--foreground)",
              lineHeight: "1.2",
            }}
            className="text-[2rem] sm:text-[2.5rem] lg:text-[3rem]"
          >
            The people behind the work.
          </h2>
        </div>

        {/* CEO */}
        <div style={{ marginBottom: "4rem" }}>
          <CEOCard {...ceo} />
        </div>

        {/* Advisors */}
        <div style={{ marginBottom: "2rem" }}>
          <p
            style={{
              fontFamily: "var(--font-serif), Georgia, serif",
              fontSize: "0.75rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--foreground-subtle)",
              marginBottom: "2rem",
            }}
          >
            Advisory Panel
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {advisors.map((advisor, i) => (
              <AdvisorCard key={i} {...advisor} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
