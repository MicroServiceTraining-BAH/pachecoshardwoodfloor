"use client";

import Image from "next/image";

const products = [
  { name: "Designs",      description: "Special order · 2-week lead time", note: "Custom",  photo: "/design-herringbone.jpg" },
  { name: "Prefinished",  description: "Select colors in-stock",           note: "Ready",   photo: "/hw-dark-open-plan.jpg" },
  { name: "Exotic",       description: "Special order",                    note: "Rare",    photo: "/stairs-rustic-walnut.jpg" },
  { name: "Standard Oak", description: "In-stock · stained to taste",      note: "Classic", photo: "/hw-oak-bedroom.jpg" },
];

export default function Products() {
  return (
    <section
      id="products"
      style={{
        background: "var(--bg-warm)",
        padding: "5rem 2rem",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        scrollMarginTop: "160px",
      }}
    >
      <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
        {/* Heading */}
        <div style={{ marginBottom: "3rem" }}>
          <span className="section-eyebrow">Our Collection</span>
          <h2 className="section-heading" style={{ marginTop: "0.5rem" }}>
            Wood Products
          </h2>
          <div style={{ width: "48px", height: "2px", background: "var(--gold)", marginTop: "1.25rem" }} />
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 230px), 1fr))",
            gap: "1.5rem",
          }}
        >
          {products.map((p) => (
            <div
              key={p.name}
              className="group"
              style={{
                background: "#ffffff",
                border: "1px solid var(--border)",
                overflow: "hidden",
                cursor: "pointer",
                transition: "box-shadow 0.2s ease, transform 0.2s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.boxShadow = "0 12px 40px rgba(154,110,40,0.18), 0 4px 12px rgba(0,0,0,0.1)";
                el.style.transform = "translateY(-5px)";
                el.style.borderColor = "var(--gold-light)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.boxShadow = "none";
                el.style.transform = "translateY(0)";
                el.style.borderColor = "var(--border)";
              }}
            >
              {/* Swatch */}
              <div style={{ height: "180px", position: "relative", overflow: "hidden" }}>
                <Image
                  src={p.photo}
                  alt={p.name}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  style={{ objectFit: "cover", transition: "transform 0.4s ease" }}
                  className="group-hover:scale-105"
                />
                <div
                  style={{
                    position: "absolute",
                    top: "1rem",
                    right: "1rem",
                    padding: "0.2rem 0.65rem",
                    background: "rgba(0,0,0,0.4)",
                    border: "1px solid rgba(255,255,255,0.25)",
                    fontFamily: "var(--font-body), sans-serif",
                    fontSize: "0.6rem",
                    fontWeight: 500,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#ffffff",
                  }}
                >
                  {p.note}
                </div>
              </div>

              {/* Label */}
              <div style={{ padding: "1.25rem 1.25rem 1.5rem", borderTop: "2px solid var(--gold-muted)" }}>
                <p
                  style={{
                    fontFamily: "var(--font-display), 'Cormorant Garamond', serif",
                    fontSize: "1.4rem",
                    fontWeight: 400,
                    color: "var(--text-dark)",
                    marginBottom: "0.3rem",
                  }}
                >
                  {p.name}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body), sans-serif",
                    fontSize: "0.875rem",
                    fontWeight: 300,
                    color: "var(--text-muted)",
                  }}
                >
                  {p.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
