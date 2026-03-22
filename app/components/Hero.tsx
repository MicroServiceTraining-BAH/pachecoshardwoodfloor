"use client";

import Image from "next/image";

const services = [
  { label: "Hardwood\nInstall",     sub: "Full installation & layout",  photo: "/hw-tigerwood-room.jpg" },
  { label: "Intricate\nDesigns",    sub: "Custom patterns & inlays",    photo: "/design-herringbone.jpg" },
  { label: "Sand &\nRefinish",      sub: "Restore original beauty",     photo: "/refinish-before-after-kitchen.jpg" },
  { label: "Stair Rails\n& Repair", sub: "Crafted for every detail",    photo: "/stairs-install-action.jpg" },
];

export default function Hero() {
  return (
    <section id="home">
      {/* Hero intro — two columns: text left, photo right */}
      <div
        className="grid md:grid-cols-2"
        style={{ minHeight: "480px", borderBottom: "1px solid var(--border)" }}
      >
        {/* Left: text */}
        <div
          className="hero-text-col"
          style={{
            background: "var(--bg-page)",
            padding: "4.5rem 3rem 4rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <span className="section-eyebrow" style={{ marginBottom: "1.25rem" }}>
            Stafford, VA · Serving Northern Virginia since 2021
          </span>
          <h1
            style={{
              fontFamily: "var(--font-display), 'Cormorant Garamond', serif",
              fontSize: "clamp(2.8rem, 5vw, 5rem)",
              fontWeight: 400,
              lineHeight: 1.0,
              color: "var(--text-dark)",
              letterSpacing: "-0.01em",
            }}
          >
            The Art of
            <br />
            <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Hardwood.</em>
          </h1>
          <p
            style={{
              fontFamily: "var(--font-body), sans-serif",
              fontSize: "1rem",
              fontWeight: 300,
              color: "var(--text-muted)",
              marginTop: "1.5rem",
              maxWidth: "400px",
              lineHeight: 1.85,
            }}
          >
            Family-owned and serving Northern Virginia since 2021 —
            installations, refinishing, and custom designs done right,
            every time.
          </p>
          {/* Google Reviews badge */}
          <a
            href="#reviews"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.6rem",
              marginTop: "2rem",
              textDecoration: "none",
              transition: "opacity 0.2s ease",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.75")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")}
          >
            <div style={{ display: "flex", gap: "2px" }}>
              {[0,1,2,3,4].map((i) => (
                <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="#c8952a">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
            <span style={{
              fontFamily: "var(--font-body), sans-serif",
              fontSize: "0.78rem",
              fontWeight: 400,
              color: "var(--text-muted)",
              letterSpacing: "0.04em",
              whiteSpace: "nowrap",
            }}>
              4.8 · 34 Google Reviews
            </span>
          </a>

          <div style={{ display: "flex", gap: "1rem", marginTop: "1.25rem", flexWrap: "wrap" }}>
            <a
              href="#contact"
              style={{
                display: "inline-block",
                padding: "0.8rem 2.25rem",
                background: "var(--gold)",
                color: "#ffffff",
                fontFamily: "var(--font-body), sans-serif",
                fontSize: "0.75rem",
                fontWeight: 500,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "background 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = "var(--text-dark)";
                el.style.transform = "translateY(-2px)";
                el.style.boxShadow = "0 6px 20px rgba(0,0,0,0.2)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = "var(--gold)";
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "none";
              }}
            >
              Get a Free Quote
            </a>
            <a
              href="#gallery"
              style={{
                display: "inline-block",
                padding: "0.8rem 2.25rem",
                background: "transparent",
                color: "var(--text-dark)",
                border: "1px solid var(--border)",
                fontFamily: "var(--font-body), sans-serif",
                fontSize: "0.75rem",
                fontWeight: 500,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "border-color 0.2s ease, color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.borderColor = "var(--gold-light)";
                el.style.color = "var(--gold-light)";
                el.style.transform = "translateY(-2px)";
                el.style.boxShadow = "0 4px 16px rgba(0,0,0,0.1)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.borderColor = "var(--border)";
                el.style.color = "var(--text-dark)";
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "none";
              }}
            >
              View Our Work
            </a>
          </div>
        </div>

        {/* Right: featured photo */}
        <div className="hidden md:block" style={{ position: "relative", overflow: "hidden", minHeight: "380px" }}>
          <Image
            src="/hw-cherry-foyer.jpg"
            alt="Brazilian cherry hardwood floor with custom staircase"
            fill
            priority
            sizes="50vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to right, var(--bg-page) 0%, transparent 18%)",
              pointerEvents: "none",
            }}
          />
        </div>
      </div>

      {/* Service panels */}
      <div id="services" className="grid grid-cols-2 md:grid-cols-4 md:h-[300px]">
        {services.map((svc) => (
          <a
            key={svc.label}
            href="#contact"
            className="group hero-panels-item"
            style={{ position: "relative", overflow: "hidden", cursor: "pointer", background: "#1a1008", display: "block", textDecoration: "none" }}
          >
            <Image
              src={svc.photo}
              alt={svc.label.replace("\n", " ")}
              fill
              sizes="25vw"
              style={{ objectFit: "cover", transition: "transform 0.5s ease" }}
              className="group-hover:scale-105"
            />
            {/* Dark gradient */}
            <div
              style={{
                position: "absolute", bottom: 0, left: 0, right: 0, height: "70%",
                background: "linear-gradient(to top, rgba(0,0,0,0.82) 0%, transparent 100%)",
                pointerEvents: "none",
              }}
            />
            {/* Gold top accent line on hover */}
            <div
              style={{
                position: "absolute", top: 0, left: 0, right: 0, height: "3px",
                background: "var(--gold-light)", opacity: 0, transition: "opacity 0.3s ease",
              }}
              className="group-hover:opacity-100"
            />
            {/* Content */}
            <div
              style={{
                position: "absolute", inset: 0, display: "flex",
                flexDirection: "column", justifyContent: "flex-end", padding: "1.5rem",
              }}
            >
              <div style={{ width: "7px", height: "7px", background: "var(--gold-light)", transform: "rotate(45deg)", marginBottom: "0.65rem" }} />
              <p
                style={{
                  fontFamily: "var(--font-display), serif", fontSize: "1.6rem", fontWeight: 500,
                  color: "#ffffff", lineHeight: 1.15, whiteSpace: "pre-line",
                  textShadow: "0 2px 10px rgba(0,0,0,0.5)",
                }}
              >
                {svc.label}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body), sans-serif", fontSize: "0.8rem", fontWeight: 400,
                  color: "rgba(255,255,255,0.8)", marginTop: "0.35rem",
                  textShadow: "0 1px 6px rgba(0,0,0,0.5)",
                }}
              >
                {svc.sub}
              </p>
              {/* "Get a Quote →" slides up on hover */}
              <p
                className="service-panel-cta"
                style={{
                  fontFamily: "var(--font-body), sans-serif",
                  fontSize: "0.65rem",
                  fontWeight: 600,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--gold-light)",
                  marginTop: "0.75rem",
                }}
              >
                Get a Quote →
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
