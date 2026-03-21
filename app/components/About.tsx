export default function About() {
  return (
    <section
      id="about"
      style={{
        background: "var(--bg-warm)",
        padding: "5rem 2rem",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
        <div
          className="grid md:grid-cols-2"
          style={{ border: "1px solid var(--border)" }}
        >
          {/* Owners photo placeholder */}
          <div
            style={{
              minHeight: "460px",
              position: "relative",
              overflow: "hidden",
              background: "var(--bg-panel)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.75rem",
            }}
          >
            <svg width="48" height="48" fill="none" stroke="var(--border)" strokeWidth="1" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <p style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "0.65rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text-muted)" }}>
              Photo Coming Soon
            </p>
          </div>

          {/* Text panel */}
          <div
            className="mobile-pad"
          style={{
              background: "#ffffff",
              padding: "3.5rem",
              borderLeft: "1px solid var(--border)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <span className="section-eyebrow" style={{ marginBottom: "0.75rem" }}>Our Story</span>
            <h2 className="section-heading" style={{ marginBottom: "1.75rem" }}>
              Craftsmanship<br />
              <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Since 2021</em>
            </h2>

            <blockquote
              style={{
                borderLeft: "3px solid var(--gold)",
                paddingLeft: "1.25rem",
                marginBottom: "1.75rem",
                fontFamily: "var(--font-display), 'Cormorant Garamond', serif",
                fontSize: "1.2rem",
                fontWeight: 300,
                fontStyle: "italic",
                color: "var(--text-body)",
                lineHeight: 1.6,
              }}
            >
              &ldquo;Over 25 years of experience and 40+ years of combined business expertise — all focused on your floors.&rdquo;
            </blockquote>

            <p
              style={{
                fontFamily: "var(--font-body), sans-serif",
                fontSize: "0.975rem",
                fontWeight: 300,
                color: "var(--text-muted)",
                lineHeight: 1.9,
                marginBottom: "1rem",
              }}
            >
              We have over 25 years of experience in the industry. Owner Enos Pacheco came to Virginia at 16 years old looking for opportunity and built his career from the ground up in hardwood flooring. Owner Amy Pacheco is a native of Virginia and has lived in the area for over 20 years.
            </p>
            <p
              style={{
                fontFamily: "var(--font-body), sans-serif",
                fontSize: "0.975rem",
                fontWeight: 300,
                color: "var(--text-muted)",
                lineHeight: 1.9,
              }}
            >
              Together they bring a combined business experience of 40+ years, and since 2021 have been delivering superior hardwood floor installations, refinishing, and repairs to homeowners across Northern Virginia.
            </p>

            {/* Stats */}
            <div
              style={{
                display: "flex",
                gap: "2.5rem",
                marginTop: "2.5rem",
                paddingTop: "2rem",
                borderTop: "1px solid var(--border)",
              }}
            >
              {[
                { n: "25+", label: "Years in the Industry" },
                { n: "40+", label: "Combined Business Experience" },
                { n: "N. VA", label: "Service Area" },
              ].map((s) => (
                <div key={s.label}>
                  <p
                    style={{
                      fontFamily: "var(--font-display), serif",
                      fontSize: "1.85rem",
                      fontWeight: 400,
                      color: "var(--gold)",
                      lineHeight: 1,
                    }}
                  >
                    {s.n}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-body), sans-serif",
                      fontSize: "0.65rem",
                      fontWeight: 400,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--text-muted)",
                      marginTop: "0.35rem",
                    }}
                  >
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
