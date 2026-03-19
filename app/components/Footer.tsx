"use client";

export default function Footer() {
  return (
    <footer style={{ background: "var(--bg-warm)", borderTop: "1px solid var(--border)" }}>
      {/* Main content */}
      <div
        style={{
          maxWidth: "1120px",
          margin: "0 auto",
          padding: "3rem 2rem 2.5rem",
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1fr",
          gap: "2.5rem",
          flexWrap: "wrap",
        }}
        className="grid-cols-1 md:grid-cols-4"
      >
        {/* Brand */}
        <div>
          <p style={{ fontFamily: "var(--font-display), 'Cormorant Garamond', serif", fontSize: "1.3rem", fontWeight: 400, color: "var(--text-dark)", letterSpacing: "0.06em" }}>
            PACHECO&apos;S
          </p>
          <p style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "0.55rem", fontWeight: 500, letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--gold)", marginTop: "3px" }}>
            Hardwood Floors
          </p>
          <p style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "0.875rem", fontWeight: 300, color: "var(--text-muted)", marginTop: "0.875rem", lineHeight: 1.7 }}>
            Professional hardwood floor installation, refinishing, and custom designs serving Northern Virginia since 2021.
          </p>
          {/* Social */}
          <div style={{ display: "flex", gap: "1rem", marginTop: "1.25rem" }}>
            {[
              { label: "Facebook", href: "https://facebook.com", icon: <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /> },
              { label: "LinkedIn", href: "https://linkedin.com", icon: <><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></> },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                style={{ color: "var(--text-muted)", transition: "color 0.2s ease" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--gold)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--text-muted)")}
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">{s.icon}</svg>
              </a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div>
          <p style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--text-dark)", marginBottom: "1rem" }}>
            Navigation
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
            {[["Home","#home"],["Services","#services"],["Products","#products"],["Gallery","#gallery"],["About","#about"],["Contact","#contact"]].map(([label, href]) => (
              <a
                key={href}
                href={href}
                style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "0.9rem", fontWeight: 300, color: "var(--text-muted)", textDecoration: "none", transition: "color 0.2s ease" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--gold)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--text-muted)")}
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <p style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--text-dark)", marginBottom: "1rem" }}>
            Services
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
            {["Hardwood Install","Intricate Designs","Sand & Refinish","Stair Rail Repair"].map((s) => (
              <span key={s} style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "0.9rem", fontWeight: 300, color: "var(--text-muted)" }}>
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <p style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--text-dark)", marginBottom: "1rem" }}>
            Contact
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
            {["309 Kingsland Dr\nStafford, VA 22556","571-575-1570","pachecoshardwoodfloor\n@gmail.com"].map((line) => (
              <p key={line} style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "0.9rem", fontWeight: 300, color: "var(--text-muted)", whiteSpace: "pre-line" }}>
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid var(--border-warm)", padding: "1rem 2rem" }}>
        <div style={{ maxWidth: "1120px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem" }}>
          <p style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "0.75rem", fontWeight: 300, color: "var(--text-muted)" }}>
            &copy; {new Date().getFullYear()} Pacheco&apos;s Hardwood Floors. All rights reserved.
          </p>
          <p style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "0.75rem", fontWeight: 300, color: "var(--text-muted)", fontStyle: "italic" }}>
            The Art of Hardwood
          </p>
          <p style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "0.75rem", fontWeight: 300, color: "var(--text-muted)" }}>
            Website by Gabriel Cajigas
          </p>
        </div>
      </div>
    </footer>
  );
}
