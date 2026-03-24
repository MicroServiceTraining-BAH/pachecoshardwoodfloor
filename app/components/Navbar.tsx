"use client";

import { useEffect, useRef, useState } from "react";

const navLinks = [
  { label: "Home",      href: "#home" },
  { label: "Services",  href: "#services" },
  { label: "Products",  href: "#products" },
  { label: "Gallery",   href: "#gallery" },
  { label: "About",     href: "#about" },
  { label: "Reviews",   href: "#reviews" },
  { label: "Contact",   href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen]         = useState(false);
  const [active, setActive]     = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const clickScrolling           = useRef(false);
  const scrollEndTimer           = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      // Clear the flag once scrolling has fully stopped
      if (clickScrolling.current) {
        if (scrollEndTimer.current) clearTimeout(scrollEndTimer.current);
        scrollEndTimer.current = setTimeout(() => {
          clickScrolling.current = false;
        }, 150);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !clickScrolling.current) {
            const link = navLinks.find((l) => l.href === `#${id}`);
            if (link) setActive(link.label);
          }
        },
        { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((obs) => obs.disconnect());
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
          height: "140px",
        }}
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={() => { clickScrolling.current = true; setActive("Home"); }}
          style={{ display: "flex", alignItems: "center", textDecoration: "none" }}
        >
          <img
            src="/logo.png"
            alt="Pacheco's Hardwood Floors"
            style={{ height: "140px", width: "auto" }}
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex" style={{ alignItems: "center" }}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => { clickScrolling.current = true; setActive(link.label); }}
              className={`nav-link${active === link.label ? " nav-active" : ""}`}
            >
              {link.label}
            </a>
          ))}

          {/* FREE QUOTE button */}
          <a
            href="#contact"
            onClick={() => { clickScrolling.current = true; setActive("Contact"); }}
            className="nav-cta"
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
        <div style={{ background: "#ffffff", borderTop: "1px solid var(--border)", padding: "0.5rem 2rem 1.25rem" }}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => { clickScrolling.current = true; setActive(link.label); setOpen(false); }}
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
                transition: "color 0.15s ease",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => { clickScrolling.current = true; setActive("Contact"); setOpen(false); }}
            className="nav-cta"
            style={{ display: "block", marginTop: "1.25rem", textAlign: "center" }}
          >
            Free Quote
          </a>
        </div>
      )}
    </header>
  );
}
