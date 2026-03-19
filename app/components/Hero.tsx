"use client";

import Image from "next/image";

const services = [
  { label: "Hardwood\nInstall",   sub: "Full installation & layout",  photo: "/floor-oak.jpg" },
  { label: "Intricate\nDesigns",  sub: "Custom patterns & inlays",    photo: "/floor-herringbone.jpg" },
  { label: "Sand &\nRefinish",    sub: "Restore original beauty",     photo: "/floor-charcoal.jpg" },
  { label: "Stair Rails\n& Repair", sub: "Crafted for every detail",  photo: "/floor-walnut-stairs.jpg" },
];

export default function Hero() {
  return (
    <section id="home">
      {/* Hero intro — two columns: text left, photo right */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          minHeight: "480px",
          borderBottom: "1px solid var(--border)",
        }}
        className="grid-cols-1 md:grid-cols-2"
      >
        {/* Left: text */}
        <div
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
          <div style={{ display: "flex", gap: "1rem", marginTop: "2rem", flexWrap: "wrap" }}>
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
                transition: "background 0.2s ease",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "#b8820a")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "var(--gold)")}
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
                transition: "border-color 0.2s ease, color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--gold)";
                (e.currentTarget as HTMLAnchorElement).style.color = "var(--gold)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--border)";
                (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-dark)";
              }}
            >
              View Our Work
            </a>
          </div>
        </div>

        {/* Right: featured photo */}
        <div style={{ position: "relative", overflow: "hidden", minHeight: "380px" }}>
          <Image
            src="/floor-charcoal.jpg"
            alt="Beautifully refinished charcoal hardwood floor"
            fill
            priority
            sizes="50vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          {/* Subtle left fade to blend with text panel */}
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
      <div
        style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", height: "300px" }}
        className="grid-cols-2 md:grid-cols-4"
      >
        {services.map((svc) => (
          <div
            key={svc.label}
            className="group"
            style={{ position: "relative", overflow: "hidden", cursor: "pointer", background: "#1a1008" }}
          >
            <Image
              src={svc.photo}
              alt={svc.label.replace("\n", " ")}
              fill
              sizes="25vw"
              style={{ objectFit: "cover", transition: "transform 0.5s ease" }}
              className="group-hover:scale-105"
            />
            {/* Bottom scrim */}
            <div
              style={{
                position: "absolute", bottom: 0, left: 0, right: 0, height: "70%",
                background: "linear-gradient(to top, rgba(0,0,0,0.78) 0%, transparent 100%)",
                pointerEvents: "none",
              }}
            />
            {/* Gold hover top rule */}
            <div
              style={{
                position: "absolute", top: 0, left: 0, right: 0, height: "3px",
                background: "var(--gold-light)", opacity: 0, transition: "opacity 0.3s ease",
              }}
              className="group-hover:opacity-100"
            />
            {/* Text */}
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
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
