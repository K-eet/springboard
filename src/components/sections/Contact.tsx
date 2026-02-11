"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (data: FormData) => {
    const errs: Record<string, string> = {};
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const message = data.get("message") as string;

    if (!name?.trim()) errs.name = "This field is required";
    if (!email?.trim()) errs.email = "This field is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errs.email = "Please enter a valid email";
    if (!message?.trim()) errs.message = "This field is required";

    return errs;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const errs = validate(data);

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setErrors({});
    setStatus("submitting");

    try {
      // Replace YOUR_FORM_ID with your Formspree form ID
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    backgroundColor: "var(--background-elevated)",
    border: "1px solid var(--border)",
    borderRadius: "50px",
    padding: "1rem 1.5rem",
    fontFamily: "var(--font-serif), Georgia, serif",
    fontSize: "1rem",
    color: "var(--foreground)",
    outline: "none",
    transition: "border-color 150ms ease",
  };

  const errorStyle: React.CSSProperties = {
    fontFamily: "var(--font-serif), Georgia, serif",
    fontSize: "0.8125rem",
    color: "#B91C1C",
    marginTop: "0.375rem",
    paddingLeft: "1rem",
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="section-padding section-divider"
      style={{ backgroundColor: "var(--background-subtle)" }}
    >
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: text */}
          <div>
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
              Contact
            </p>
            <h2
              id="contact-heading"
              style={{
                fontFamily: "var(--font-serif), Georgia, serif",
                fontWeight: 400,
                color: "var(--foreground)",
                lineHeight: "1.2",
                marginBottom: "1.5rem",
              }}
              className="text-[2rem] sm:text-[2.5rem] lg:text-[3rem]"
            >
              Let&rsquo;s talk.
            </h2>
            <p
              style={{
                fontFamily: "var(--font-serif), Georgia, serif",
                fontSize: "1.125rem",
                color: "var(--foreground-muted)",
                lineHeight: "1.7",
                marginBottom: "2rem",
              }}
            >
              {/* PLACEHOLDER COPY */}
              Whether you&rsquo;re exploring what AI could mean for your organisation,
              or ready to move, we&rsquo;d like to hear from you.
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                color: "var(--foreground-subtle)",
              }}
            >
              <MapPin size={16} aria-hidden="true" />
              <span
                style={{
                  fontFamily: "var(--font-serif), Georgia, serif",
                  fontSize: "0.9375rem",
                }}
              >
                Kuala Lumpur, Malaysia
              </span>
            </div>
          </div>

          {/* Right: form */}
          <div>
            {status === "success" ? (
              <div
                style={{
                  backgroundColor: "var(--background-elevated)",
                  border: "1px solid var(--border)",
                  borderRadius: "8px",
                  padding: "3rem 2.5rem",
                  textAlign: "center",
                }}
                role="alert"
              >
                <p
                  style={{
                    fontFamily: "var(--font-serif), Georgia, serif",
                    fontSize: "1.25rem",
                    color: "var(--foreground)",
                    marginBottom: "0.75rem",
                  }}
                >
                  Thank you.
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-serif), Georgia, serif",
                    fontSize: "1rem",
                    color: "var(--foreground-muted)",
                  }}
                >
                  Thanks for reaching out. We&rsquo;ll be in touch soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
                <div className="flex flex-col gap-4">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      style={{
                        display: "block",
                        fontFamily: "var(--font-serif), Georgia, serif",
                        fontSize: "0.8125rem",
                        color: "var(--foreground-muted)",
                        marginBottom: "0.375rem",
                        paddingLeft: "1rem",
                      }}
                    >
                      Name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      autoComplete="name"
                      style={inputStyle}
                      onFocus={(e) =>
                        (e.currentTarget.style.borderColor = "var(--foreground-muted)")
                      }
                      onBlur={(e) =>
                        (e.currentTarget.style.borderColor = "var(--border)")
                      }
                      aria-describedby={errors.name ? "name-error" : undefined}
                      aria-invalid={!!errors.name}
                    />
                    {errors.name && (
                      <p id="name-error" style={errorStyle} role="alert">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      style={{
                        display: "block",
                        fontFamily: "var(--font-serif), Georgia, serif",
                        fontSize: "0.8125rem",
                        color: "var(--foreground-muted)",
                        marginBottom: "0.375rem",
                        paddingLeft: "1rem",
                      }}
                    >
                      Email
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      placeholder="you@company.com"
                      autoComplete="email"
                      style={inputStyle}
                      onFocus={(e) =>
                        (e.currentTarget.style.borderColor = "var(--foreground-muted)")
                      }
                      onBlur={(e) =>
                        (e.currentTarget.style.borderColor = "var(--border)")
                      }
                      aria-describedby={errors.email ? "email-error" : undefined}
                      aria-invalid={!!errors.email}
                    />
                    {errors.email && (
                      <p id="email-error" style={errorStyle} role="alert">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      style={{
                        display: "block",
                        fontFamily: "var(--font-serif), Georgia, serif",
                        fontSize: "0.8125rem",
                        color: "var(--foreground-muted)",
                        marginBottom: "0.375rem",
                        paddingLeft: "1rem",
                      }}
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      placeholder="Tell us about your organisation and what you're exploring…"
                      style={{
                        ...inputStyle,
                        borderRadius: "16px",
                        resize: "vertical",
                        minHeight: "140px",
                      }}
                      onFocus={(e) =>
                        (e.currentTarget.style.borderColor = "var(--foreground-muted)")
                      }
                      onBlur={(e) =>
                        (e.currentTarget.style.borderColor = "var(--border)")
                      }
                      aria-describedby={errors.message ? "message-error" : undefined}
                      aria-invalid={!!errors.message}
                    />
                    {errors.message && (
                      <p id="message-error" style={errorStyle} role="alert">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Error state */}
                  {status === "error" && (
                    <p
                      style={{
                        fontFamily: "var(--font-serif), Georgia, serif",
                        fontSize: "0.9375rem",
                        color: "#B91C1C",
                      }}
                      role="alert"
                    >
                      Something went wrong. Please try again or email us directly.
                    </p>
                  )}

                  {/* Submit */}
                  <div>
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      style={{
                        backgroundColor: "var(--button-dark)",
                        color: "var(--button-dark-text)",
                        fontFamily: "var(--font-serif), Georgia, serif",
                        fontSize: "1rem",
                        padding: "1rem 2.5rem",
                        borderRadius: "50px",
                        border: "none",
                        cursor: status === "submitting" ? "not-allowed" : "pointer",
                        opacity: status === "submitting" ? 0.7 : 1,
                        transition: "opacity 150ms ease",
                        letterSpacing: "0.02em",
                      }}
                      onMouseEnter={(e) => {
                        if (status !== "submitting")
                          e.currentTarget.style.opacity = "0.85";
                      }}
                      onMouseLeave={(e) => {
                        if (status !== "submitting")
                          e.currentTarget.style.opacity = "1";
                      }}
                    >
                      {status === "submitting" ? "Sending…" : "Send Message"}
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
