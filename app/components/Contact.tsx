"use client";

import { useState } from "react";
import Image from "next/image";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "0.75rem 1rem",
    background: "#ffffff",
    border: "1px solid var(--border)",
    color: "var(--text-dark)",
    fontFamily: "var(--font-body), sans-serif",
    fontSize: "0.95rem",
    fontWeight: 300,
    outline: "none",
    transition: "border-color 0.2s ease",
  };

  return (
    <section
      id="contact"
      style={{
        background: "var(--bg-page)",
        padding: "5rem 2rem",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
        {/* Heading */}
        <div style={{ marginBottom: "3rem" }}>
          <span className="section-eyebrow">Get in Touch</span>
          <h2 className="section-heading" style={{ marginTop: "0.5rem" }}>
            Request a Quote
          </h2>
          <div style={{ width: "48px", height: "2px", background: "var(--gold)", marginTop: "1.25rem" }} />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "0",
            border: "1px solid var(--border)",
          }}
          className="grid-cols-1 md:grid-cols-2"
        >
          {/* Info side — photo fills top half, info in bottom half */}
          <div
            style={{
              borderRight: "1px solid var(--border)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Project photo — fills top portion */}
            <div style={{ flex: "0 0 260px", position: "relative", overflow: "hidden" }}>
              <Image
                src="/floor-walnut-stairs.jpg"
                alt="Completed walnut hardwood floor with staircase"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </div>

            {/* Info */}
            <div style={{ background: "var(--bg-warm)", padding: "2.5rem 3rem", display: "flex", flexDirection: "column", gap: "1.25rem", flex: 1 }}>
              <h3
                style={{
                  fontFamily: "var(--font-display), serif",
                  fontSize: "1.5rem",
                  fontWeight: 400,
                  color: "var(--text-dark)",
                }}
              >
                Pacheco&apos;s Hardwood Floors
              </h3>

              {[
                {
                  icon: (
                    <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  text: "309 Kingsland Dr, Stafford VA 22556",
                },
                {
                  icon: (
                    <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  ),
                  text: "571-575-1570  ·  571-383-5946",
                },
                {
                  icon: (
                    <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  text: "pachecoshardwoodfloor@gmail.com",
                  href: "mailto:pachecoshardwoodfloor@gmail.com",
                },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                  <span style={{ color: "var(--gold)", marginTop: "3px", flexShrink: 0 }}>{item.icon}</span>
                  {item.href ? (
                    <a
                      href={item.href}
                      style={{
                        fontFamily: "var(--font-body), sans-serif",
                        fontSize: "0.95rem",
                        fontWeight: 300,
                        color: "var(--text-body)",
                        textDecoration: "none",
                        transition: "color 0.2s ease",
                      }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--gold)")}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--text-body)")}
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "0.95rem", fontWeight: 300, color: "var(--text-body)" }}>
                      {item.text}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Form side */}
          <div style={{ background: "#ffffff", padding: "3rem" }}>
            {submitted ? (
              <div style={{ height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "1rem", textAlign: "center" }}>
                <div style={{ width: "10px", height: "10px", background: "var(--gold)", transform: "rotate(45deg)" }} />
                <p style={{ fontFamily: "var(--font-display), serif", fontSize: "1.75rem", fontWeight: 400, color: "var(--text-dark)" }}>
                  Thank You
                </p>
                <p style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "0.9rem", fontWeight: 300, color: "var(--text-muted)" }}>
                  We&apos;ll be in touch with you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <p style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "0.65rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "0.25rem" }}>
                  Send a Message
                </p>

                <input
                  name="name" type="text" required placeholder="Your Name"
                  value={form.name} onChange={handleChange} style={inputStyle}
                  onFocus={(e) => ((e.currentTarget as HTMLInputElement).style.borderColor = "var(--gold)")}
                  onBlur={(e) => ((e.currentTarget as HTMLInputElement).style.borderColor = "var(--border)")}
                />
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <input
                    name="email" type="email" required placeholder="Email Address"
                    value={form.email} onChange={handleChange} style={inputStyle}
                    onFocus={(e) => ((e.currentTarget as HTMLInputElement).style.borderColor = "var(--gold)")}
                    onBlur={(e) => ((e.currentTarget as HTMLInputElement).style.borderColor = "var(--border)")}
                  />
                  <input
                    name="phone" type="tel" placeholder="Phone (optional)"
                    value={form.phone} onChange={handleChange} style={inputStyle}
                    onFocus={(e) => ((e.currentTarget as HTMLInputElement).style.borderColor = "var(--gold)")}
                    onBlur={(e) => ((e.currentTarget as HTMLInputElement).style.borderColor = "var(--border)")}
                  />
                </div>
                <textarea
                  name="message" placeholder="Tell us about your project..."
                  rows={6} value={form.message} onChange={handleChange}
                  style={{ ...inputStyle, resize: "none" }}
                  onFocus={(e) => ((e.currentTarget as HTMLTextAreaElement).style.borderColor = "var(--gold)")}
                  onBlur={(e) => ((e.currentTarget as HTMLTextAreaElement).style.borderColor = "var(--border)")}
                />

                <button
                  type="submit"
                  style={{
                    alignSelf: "flex-start",
                    padding: "0.75rem 2.25rem",
                    background: "var(--gold)",
                    color: "#ffffff",
                    border: "none",
                    fontFamily: "var(--font-body), sans-serif",
                    fontSize: "0.7rem",
                    fontWeight: 500,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    transition: "background 0.2s ease",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "var(--gold-light)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "var(--gold)")}
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
