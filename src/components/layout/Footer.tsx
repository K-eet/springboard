"use client";

import { Linkedin } from "lucide-react";

const footerLinks = {
  Company: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Partners", href: "#partners" },
    { label: "Team", href: "#team" },
  ],
  Connect: [
    { label: "Contact", href: "#contact" },
    { label: "LinkedIn", href: "https://linkedin.com", external: true },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Use", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "var(--accent)",
        color: "#FFFFFF",
      }}
      aria-label="Site footer"
    >
      <div className="container-site py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand column */}
          <div className="md:col-span-1">
            <div
              style={{
                fontFamily: "var(--font-serif), Georgia, serif",
                fontSize: "1.25rem",
                color: "#FFFFFF",
                marginBottom: "1rem",
              }}
            >
              Springboard
            </div>
            <p
              style={{
                fontFamily: "var(--font-serif), Georgia, serif",
                fontSize: "0.875rem",
                color: "rgba(255,255,255,0.6)",
                lineHeight: "1.6",
                marginBottom: "1.5rem",
              }}
            >
              Consulting and ventures firm.
              <br />
              Kuala Lumpur, Malaysia.
            </p>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Springboard on LinkedIn"
              style={{
                color: "rgba(255,255,255,0.6)",
                transition: "color 150ms ease",
                display: "inline-block",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "#FFFFFF")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(255,255,255,0.6)")
              }
            >
              <Linkedin size={18} />
            </a>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([groupLabel, links]) => (
            <div key={groupLabel}>
              <p
                style={{
                  fontFamily: "var(--font-serif), Georgia, serif",
                  fontSize: "0.75rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.4)",
                  marginBottom: "1rem",
                }}
              >
                {groupLabel}
              </p>
              <ul className="flex flex-col gap-3" role="list">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      {...("external" in link && link.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      style={{
                        fontFamily: "var(--font-serif), Georgia, serif",
                        fontSize: "0.875rem",
                        color: "rgba(255,255,255,0.7)",
                        transition: "color 150ms ease",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "#FFFFFF")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "rgba(255,255,255,0.7)")
                      }
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.15)",
            marginTop: "3rem",
            paddingTop: "2rem",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-serif), Georgia, serif",
              fontSize: "0.8125rem",
              color: "rgba(255,255,255,0.4)",
            }}
          >
            © 2025 Springboard. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
