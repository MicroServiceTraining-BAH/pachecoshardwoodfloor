"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home",     href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products" },
  { label: "Gallery",  href: "#gallery" },
  { label: "Reviews",  href: "#testimonials" },
  { label: "About",    href: "#about" },
  { label: "Contact",  href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header style={{ position: "sticky", top: 0, zIndex: 100 }}>
      {/* Top utility bar */}
      <div
        style={{
          background: "var(--bg-dark)",
          padding: "0.5rem 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
          <a
            href="tel:5715751570"
            style={{
              fontFamily: "var(--font-body), sans-serif",
              fontSize: "0.75rem",
              fontWeight: 400,
              letterSpacing: "0.05em",
              color: "rgba(240,237,228,0.85)",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--gold-light)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(240,237,228,0.85)")}
          >
            <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            571-575-1570
          </a>
          <span style={{ color: "rgba(255,255,255,0.2)", fontSize: "0.75rem" }}>|</span>
          <span
            style={{
              fontFamily: "var(--font-body), sans-serif",
              fontSize: "0.72rem",
              fontWeight: 400,
              color: "rgba(240,237,228,0.6)",
              letterSpacing: "0.05em",
            }}
          >
            Serving Northern Virginia · Stafford, VA
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          {[
            { label: "Facebook", href: "https://facebook.com", icon: <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /> },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              style={{ color: "rgba(240,237,228,0.6)", transition: "color 0.2s ease" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--gold-light)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(240,237,228,0.6)")}
            >
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">{s.icon}</svg>
            </a>
          ))}
        </div>
      </div>

      {/* Main nav */}
      <div
        style={{
          background: scrolled ? "rgba(247,246,242,0.97)" : "#ffffff",
          backdropFilter: scrolled ? "blur(10px)" : "none",
          borderBottom: "1px solid var(--border)",
          boxShadow: scrolled ? "0 2px 16px rgba(0,0,0,0.07)" : "0 1px 0 var(--border)",
          transition: "background 0.3s ease, box-shadow 0.3s ease",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "68px",
          }}
        >
          {/* Logo */}
          <a href="#home" style={{ display: "flex", alignItems: "center", gap: "0.75rem", textDecoration: "none" }}>
            <div
              style={{
                width: "40px",
                height: "40px",
                background: "var(--bg-dark)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-display), serif",
                  fontSize: "1.1rem",
                  fontWeight: 400,
                  color: "var(--gold-light)",
                  fontStyle: "italic",
                }}
              >
                P
              </span>
            </div>
            <div>
              <div
                style={{
                  fontFamily: "var(--font-display), 'Cormorant Garamond', serif",
                  fontSize: "1.2rem",
                  fontWeight: 500,
                  letterSpacing: "0.08em",
                  color: "var(--text-dark)",
                  lineHeight: 1,
                }}
              >
                PACHECO&apos;S
              </div>
              <div
                style={{
                  fontFamily: "var(--font-body), sans-serif",
                  fontSize: "0.55rem",
                  fontWeight: 600,
                  letterSpacing: "0.3em",
                  color: "var(--gold)",
                  textTransform: "uppercase",
                  marginTop: "2px",
                }}
              >
                Hardwood Floors
              </div>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex" style={{ alignItems: "center", gap: "0.1rem" }}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  padding: "0.4rem 0.85rem",
                  fontSize: "0.75rem",
                  fontWeight: 500,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--text-body)",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                  fontFamily: "var(--font-body), sans-serif",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--gold)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--text-body)")}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              style={{
                marginLeft: "0.75rem",
                padding: "0.55rem 1.4rem",
                background: "var(--bg-dark)",
                color: "var(--text-light)",
                fontFamily: "var(--font-body), sans-serif",
                fontSize: "0.72rem",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "background 0.2s ease",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "var(--gold)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "var(--bg-dark)")}
            >
              Free Quote
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
            style={{ background: "none", border: "none", color: "var(--text-dark)", cursor: "pointer", padding: "0.5rem" }}
            aria-label="Toggle menu"
          >
            <svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7h16M4 12h16M4 17h16" />
              }
            </svg>
          </button>
        </div>

        {/* Mobile drawer */}
        {open && (
          <div style={{ background: "#ffffff", borderTop: "1px solid var(--border)", padding: "0.5rem 2rem 1.5rem" }}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                style={{
                  display: "block",
                  padding: "0.8rem 0",
                  fontSize: "0.85rem",
                  fontWeight: 500,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--text-body)",
                  textDecoration: "none",
                  borderBottom: "1px solid var(--border-warm)",
                  fontFamily: "var(--font-body), sans-serif",
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              style={{
                display: "block",
                marginTop: "1rem",
                padding: "0.75rem 1.5rem",
                background: "var(--bg-dark)",
                color: "var(--text-light)",
                fontFamily: "var(--font-body), sans-serif",
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                textDecoration: "none",
                textAlign: "center",
              }}
            >
              Get Free Quote
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
