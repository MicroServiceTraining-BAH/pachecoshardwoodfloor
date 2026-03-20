"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What areas do you serve?",
    a: "We serve Stafford, VA and the greater Northern Virginia area including Fredericksburg, Woodbridge, Manassas, Spotsylvania, and surrounding communities. Contact us to confirm availability in your specific area.",
  },
  {
    q: "How long does a typical floor installation take?",
    a: "Most residential installations are completed in 1–3 days depending on square footage. Refinishing projects typically take 2–4 days including drying time. We'll give you a precise timeline during your free estimate.",
  },
  {
    q: "Do you offer free estimates?",
    a: "Yes! We provide free, no-obligation estimates for all projects. Simply reach out via our contact form or call us directly and we'll schedule a convenient time to assess your space.",
  },
  {
    q: "What types of wood species do you work with?",
    a: "We work with a wide range of species including Standard Oak (our most popular), Walnut, Hickory, Maple, Cherry, and exotic species available by special order. We also carry prefinished options with select colors in stock.",
  },
  {
    q: "Can you match my existing floors when adding a new room?",
    a: "Absolutely. Matching existing floors is one of our specialties. Owner Enos Pacheco has over 25 years of experience and is skilled at color-matching stains and selecting wood that blends seamlessly with your current flooring.",
  },
  {
    q: "How do I maintain my hardwood floors after installation?",
    a: "We'll walk you through proper care before we leave. Generally: sweep or vacuum regularly, use a damp (not wet) mop with a hardwood-safe cleaner, place felt pads under furniture, and avoid high heels or pet claws on fresh finishes for 72 hours.",
  },
  {
    q: "Do I need to move my furniture before you arrive?",
    a: "For most projects, yes — the areas being worked on need to be clear. We're happy to help move lighter items on the day of installation. We recommend making arrangements for larger furniture pieces in advance.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      id="faq"
      style={{
        background: "var(--bg-page)",
        padding: "5rem 2rem",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div
          className="grid md:grid-cols-[1fr_2fr]"
          style={{ gap: "4rem", alignItems: "start" }}
        >
          {/* Left: heading */}
          <div style={{ position: "sticky", top: "120px" }}>
            <span className="section-eyebrow" style={{ marginBottom: "0.6rem" }}>Common Questions</span>
            <h2 className="section-heading" style={{ marginBottom: "1rem" }}>
              Frequently<br />
              <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Asked</em>
            </h2>
            <div style={{ width: "48px", height: "3px", background: "var(--gold)", marginBottom: "1.5rem" }} />
            <p
              style={{
                fontFamily: "var(--font-body), sans-serif",
                fontSize: "0.9rem",
                fontWeight: 300,
                color: "var(--text-muted)",
                lineHeight: 1.8,
                marginBottom: "2rem",
              }}
            >
              Don&apos;t see your question? Reach out directly — we&apos;re always happy to help.
            </p>
            <a
              href="#contact"
              style={{
                display: "inline-block",
                padding: "0.7rem 1.75rem",
                background: "var(--bg-dark)",
                color: "var(--text-light)",
                fontFamily: "var(--font-body), sans-serif",
                fontSize: "0.72rem",
                fontWeight: 600,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "background 0.2s ease",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "var(--gold)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "var(--bg-dark)")}
            >
              Contact Us
            </a>
          </div>

          {/* Right: accordion */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            {faqs.map((faq, i) => (
              <div
                key={i}
                style={{
                  borderBottom: "1px solid var(--border)",
                  borderTop: i === 0 ? "1px solid var(--border)" : "none",
                }}
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "1.25rem 0",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    gap: "1rem",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-body), sans-serif",
                      fontSize: "0.95rem",
                      fontWeight: 500,
                      color: open === i ? "var(--gold)" : "var(--text-dark)",
                      letterSpacing: "0.01em",
                      transition: "color 0.2s ease",
                    }}
                  >
                    {faq.q}
                  </span>
                  <span
                    style={{
                      flexShrink: 0,
                      width: "24px",
                      height: "24px",
                      border: "1px solid var(--border)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: open === i ? "var(--gold)" : "var(--text-muted)",
                      background: open === i ? "var(--bg-warm)" : "transparent",
                      transition: "background 0.2s ease, color 0.2s ease",
                    }}
                  >
                    <svg
                      width="12"
                      height="12"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      style={{ transform: open === i ? "rotate(45deg)" : "rotate(0deg)", transition: "transform 0.2s ease" }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </button>

                {open === i && (
                  <div style={{ paddingBottom: "1.25rem" }}>
                    <p
                      style={{
                        fontFamily: "var(--font-body), sans-serif",
                        fontSize: "0.9rem",
                        fontWeight: 300,
                        color: "var(--text-muted)",
                        lineHeight: 1.85,
                      }}
                    >
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
