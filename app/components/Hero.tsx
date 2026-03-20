"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section id="home">
      {/* Full-width hero with dark overlay */}
      <div style={{ position: "relative", minHeight: "600px", display: "flex", alignItems: "center" }}>
        <Image
          src="/floor-charcoal.jpg"
          alt="Beautifully refinished hardwood floor"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        {/* Dark overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(135deg, rgba(14,26,11,0.82) 0%, rgba(14,26,11,0.55) 60%, rgba(14,26,11,0.35) 100%)",
          }}
        />

        {/* Content */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "5rem 2rem",
            width: "100%",
          }}
        >
          <span
            style={{
              display: "inline-block",
              fontFamily: "var(--font-body), sans-serif",
              fontSize: "0.65rem",
              fontWeight: 600,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "var(--gold-light)",
              marginBottom: "1.25rem",
              borderLeft: "3px solid var(--gold-light)",
              paddingLeft: "0.75rem",
            }}
          >
            Stafford, VA · Serving Northern Virginia
          </span>

          <h1
            style={{
              fontFamily: "var(--font-display), 'Cormorant Garamond', serif",
              fontSize: "clamp(3rem, 7vw, 6rem)",
              fontWeight: 400,
              lineHeight: 1.0,
              color: "#ffffff",
              letterSpacing: "-0.01em",
              maxWidth: "700px",
              marginBottom: "1.5rem",
            }}
          >
            Premium Hardwood
            <br />
            <em style={{ fontStyle: "italic", color: "var(--gold-light)" }}>Floors & Refinishing</em>
          </h1>

          <p
            style={{
              fontFamily: "var(--font-body), sans-serif",
              fontSize: "1.05rem",
              fontWeight: 300,
              color: "rgba(240,237,228,0.8)",
              maxWidth: "480px",
              lineHeight: 1.8,
              marginBottom: "2.5rem",
            }}
          >
            Family-owned, serving Northern Virginia since 2021.
            Installations, refinishing, and custom designs — done right, every time.
          </p>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a
              href="#contact"
              style={{
                display: "inline-block",
                padding: "0.9rem 2.5rem",
                background: "var(--gold)",
                color: "#ffffff",
                fontFamily: "var(--font-body), sans-serif",
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "background 0.2s ease",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "var(--gold-light)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "var(--gold)")}
            >
              Get a Free Quote
            </a>
            <a
              href="#services"
              style={{
                display: "inline-block",
                padding: "0.9rem 2.5rem",
                background: "transparent",
                color: "#ffffff",
                border: "1px solid rgba(255,255,255,0.45)",
                fontFamily: "var(--font-body), sans-serif",
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "border-color 0.2s ease, background 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--gold-light)";
                (e.currentTarget as HTMLAnchorElement).style.background = "rgba(164,128,48,0.15)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.45)";
                (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
              }}
            >
              Our Services
            </a>
          </div>
        </div>

        {/* Bottom rating badge */}
        <div
          style={{
            position: "absolute",
            bottom: "2rem",
            right: "2rem",
            zIndex: 2,
            background: "rgba(14,26,11,0.7)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(164,128,48,0.4)",
            padding: "0.75rem 1.25rem",
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
          }}
        >
          <div>
            <div style={{ display: "flex", gap: "2px", marginBottom: "2px" }}>
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="var(--gold-light)">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <p style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "0.65rem", fontWeight: 400, color: "rgba(240,237,228,0.7)", letterSpacing: "0.05em" }}>
              4.8 · 34 Google Reviews
            </p>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div
        style={{
          background: "var(--bg-dark)",
          borderBottom: "1px solid rgba(164,128,48,0.2)",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 2rem",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
          }}
        >
          {[
            { n: "25+", label: "Years of Experience" },
            { n: "40+", label: "Combined Business Yrs" },
            { n: "N. VA", label: "Service Area" },
          ].map((s, i) => (
            <div
              key={s.label}
              style={{
                padding: "1.5rem 2rem",
                borderRight: i < 2 ? "1px solid rgba(164,128,48,0.15)" : "none",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-display), serif",
                  fontSize: "2rem",
                  fontWeight: 400,
                  color: "var(--gold-light)",
                  lineHeight: 1,
                }}
              >
                {s.n}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body), sans-serif",
                  fontSize: "0.65rem",
                  fontWeight: 500,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "rgba(240,237,228,0.55)",
                  marginTop: "0.35rem",
                }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
