"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home",     href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products" },
  { label: "Gallery",  href: "#gallery" },
  { label: "About",    href: "#about" },
  { label: "Contact",  href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen]         = useState(false);
  const [active, setActive]     = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: scrolled ? "rgba(250,246,241,0.97)" : "#ffffff",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        borderBottom: "1px solid var(--border)",
        boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.06)" : "none",
        transition: "background 0.3s ease, box-shadow 0.3s ease",
      }}
    >
      <div
        style={{
          maxWidth: "1120px",
          margin: "0 auto",
          padding: "0 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "72px",
        }}
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={() => setActive("Home")}
          style={{ display: "flex", alignItems: "center", gap: "0.875rem", textDecoration: "none" }}
        >
          {/* Logo placeholder */}
          <div
            style={{
              width: "56px",
              height: "56px",
              flexShrink: 0,
              border: "1px dashed var(--border)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "var(--bg-warm)",
            }}
          >
            <span style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "0.55rem", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)" }}>
              Logo
            </span>
          </div>
          <div>
            <div
              style={{
                fontFamily: "var(--font-display), 'Cormorant Garamond', serif",
                fontSize: "1.25rem",
                fontWeight: 500,
                letterSpacing: "0.07em",
                color: "var(--text-dark)",
                lineHeight: 1,
              }}
            >
              PACHECO&apos;S
            </div>
            <div
              style={{
                fontFamily: "var(--font-body), 'DM Sans', sans-serif",
                fontSize: "0.6rem",
                fontWeight: 500,
                letterSpacing: "0.28em",
                color: "var(--gold)",
                textTransform: "uppercase",
                marginTop: "3px",
              }}
            >
              HARDWOOD FLOORS
            </div>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex" style={{ display: "flex", alignItems: "center", gap: "0.125rem" }}>
          {navLinks.map((link) => {
            const isActive = active === link.label;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setActive(link.label)}
                style={{
                  padding: "0.45rem 1rem",
                  fontSize: "0.78rem",
                  fontWeight: 500,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: isActive ? "#ffffff" : "var(--text-body)",
                  background: isActive ? "var(--gold)" : "transparent",
                  textDecoration: "none",
                  transition: "color 0.2s ease, background 0.2s ease",
                  borderRadius: "2px",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) (e.currentTarget as HTMLAnchorElement).style.color = "var(--gold)";
                }}
                onMouseLeave={(e) => {
                  if (!isActive) (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-body)";
                }}
              >
                {link.label}
              </a>
            );
          })}
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
        <div style={{ background: "#ffffff", borderTop: "1px solid var(--border)", padding: "0.5rem 2rem 1.25rem" }}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => { setActive(link.label); setOpen(false); }}
              style={{
                display: "block",
                padding: "0.75rem 0",
                fontSize: "0.85rem",
                fontWeight: 500,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: active === link.label ? "var(--gold)" : "var(--text-body)",
                textDecoration: "none",
                borderBottom: "1px solid var(--border-warm)",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
