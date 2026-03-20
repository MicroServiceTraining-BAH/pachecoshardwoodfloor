"use client";

export default function Footer() {
  return (
    <footer style={{ background: "var(--bg-dark)" }}>
      {/* Main content */}
      <div
        className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-10"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "3.5rem 2rem 3rem",
          borderBottom: "1px solid rgba(164,128,48,0.15)",
        }}
      >
        {/* Brand */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
            <div
              style={{
                width: "36px",
                height: "36px",
                border: "1px solid rgba(164,128,48,0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-display), serif",
                  fontSize: "1rem",
                  fontWeight: 400,
                  color: "var(--gold-light)",
                  fontStyle: "italic",
                }}
              >
                P
              </span>
            </div>
            <div>
              <p style={{ fontFamily: "var(--font-display), serif", fontSize: "1.2rem", fontWeight: 400, color: "var(--text-light)", letterSpacing: "0.07em", lineHeight: 1 }}>
                PACHECO&apos;S
              </p>
              <p style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "0.5rem", fontWeight: 600, letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--gold-light)", marginTop: "2px" }}>
                Hardwood Floors
              </p>
            </div>
          </div>
          <p style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "0.875rem", fontWeight: 300, color: "rgba(240,237,228,0.55)", lineHeight: 1.75, marginBottom: "1.25rem" }}>
            Professional hardwood floor installation, refinishing, and custom designs serving Northern Virginia since 2021.
          </p>
          <div style={{ display: "flex", gap: "0.75rem" }}>
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
                style={{
                  width: "34px",
                  height: "34px",
                  border: "1px solid rgba(164,128,48,0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "rgba(240,237,228,0.5)",
                  transition: "color 0.2s ease, border-color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.color = "var(--gold-light)";
                  el.style.borderColor = "var(--gold-light)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.color = "rgba(240,237,228,0.5)";
                  el.style.borderColor = "rgba(164,128,48,0.25)";
                }}
              >
                <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">{s.icon}</svg>
              </a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div>
          <p style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--gold-light)", marginBottom: "1.25rem" }}>
            Navigation
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
            {[["Home","#home"],["Services","#services"],["Products","#products"],["Gallery","#gallery"],["Reviews","#testimonials"],["About","#about"],["Contact","#contact"]].map(([label, href]) => (
              <a
                key={href}
                href={href}
                style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "0.875rem", fontWeight: 300, color: "rgba(240,237,228,0.55)", textDecoration: "none", transition: "color 0.2s ease" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--gold-light)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(240,237,228,0.55)")}
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <p style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--gold-light)", marginBottom: "1.25rem" }}>
            Services
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
            {["Hardwood Install","Intricate Designs","Sand & Refinish","Stair Rail Repair"].map((s) => (
              <a
                key={s}
                href="#services"
                style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "0.875rem", fontWeight: 300, color: "rgba(240,237,228,0.55)", textDecoration: "none", transition: "color 0.2s ease" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--gold-light)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(240,237,228,0.55)")}
              >
                {s}
              </a>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <p style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--gold-light)", marginBottom: "1.25rem" }}>
            Contact
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
            {[
              { icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "309 Kingsland Dr\nStafford, VA 22556" },
              { icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z", text: "571-575-1570" },
              { icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", text: "pachecoshardwoodfloor\n@gmail.com" },
            ].map((item) => (
              <div key={item.text} style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem" }}>
                <svg width="13" height="13" fill="none" stroke="var(--gold-light)" strokeWidth="1.5" viewBox="0 0 24 24" style={{ flexShrink: 0, marginTop: "3px" }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                </svg>
                <p style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "0.875rem", fontWeight: 300, color: "rgba(240,237,228,0.55)", whiteSpace: "pre-line", lineHeight: 1.6 }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ padding: "1.25rem 2rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem" }}>
          <p style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "0.72rem", fontWeight: 300, color: "rgba(240,237,228,0.35)" }}>
            &copy; {new Date().getFullYear()} Pacheco&apos;s Hardwood Floors. All rights reserved.
          </p>
          <p style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "0.72rem", fontWeight: 300, color: "rgba(240,237,228,0.35)", fontStyle: "italic" }}>
            The Art of Hardwood
          </p>
          <p style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "0.72rem", fontWeight: 300, color: "rgba(240,237,228,0.35)" }}>
            Website by Gabriel Cajigas
          </p>
        </div>
      </div>
    </footer>
  );
}
