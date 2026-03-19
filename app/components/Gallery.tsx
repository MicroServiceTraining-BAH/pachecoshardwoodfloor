import Image from "next/image";

const tiles = [
  { src: "/floor-charcoal.jpg",       alt: "Dark charcoal stained hardwood floor",          span: "col-span-2 row-span-2" },
  { src: "/floor-herringbone.jpg",    alt: "Herringbone pattern installation in progress",   span: "" },
  { src: "/floor-oak.jpg",            alt: "Light natural oak floor with stair railing",     span: "" },
  { src: "/floor-walnut-stairs.jpg",  alt: "Dark walnut floor with iron staircase",          span: "" },
  { src: "/floor-charcoal.jpg",       alt: "Gleaming charcoal hardwood detail",              span: "" },
  { src: "/floor-herringbone.jpg",    alt: "Custom herringbone design detail",               span: "" },
  { src: "/floor-oak.jpg",            alt: "Natural oak flooring detail",                    span: "" },
  { src: "/floor-walnut-stairs.jpg",  alt: "Walnut staircase and railing detail",            span: "col-span-2" },
  { src: "/floor-charcoal.jpg",       alt: "Refinished charcoal floor",                     span: "" },
  { src: "/floor-oak.jpg",            alt: "Oak floor installation",                         span: "" },
  { src: "/floor-walnut-stairs.jpg",  alt: "Hardwood staircase",                            span: "" },
  { src: "/floor-herringbone.jpg",    alt: "Intricate floor pattern",                       span: "" },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      style={{
        background: "var(--bg-page)",
        padding: "5rem 2rem",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
        {/* Heading */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: "2.5rem",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <div>
            <span className="section-eyebrow">Our Work</span>
            <h2 className="section-heading" style={{ marginTop: "0.5rem" }}>
              Completed Projects
            </h2>
          </div>
          <p
            style={{
              fontFamily: "var(--font-body), sans-serif",
              fontSize: "0.875rem",
              color: "var(--text-muted)",
              fontWeight: 300,
              maxWidth: "260px",
              lineHeight: 1.7,
            }}
          >
            Browse our portfolio of installations, refinishes, and custom designs.
          </p>
        </div>

        {/* Mosaic grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gridAutoRows: "140px",
            gap: "4px",
            border: "1px solid var(--border)",
          }}
        >
          {tiles.map((tile, i) => (
            <a
              key={i}
              href={tile.src}
              target="_blank"
              rel="noopener noreferrer"
              className={`group ${tile.span}`}
              style={{ position: "relative", overflow: "hidden", cursor: "pointer", display: "block" }}
            >
              <Image
                src={tile.src}
                alt={tile.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                style={{ objectFit: "cover", transition: "transform 0.4s ease" }}
                className="group-hover:scale-105"
              />
              {/* Hover overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "rgba(154,110,40,0.18)",
                  opacity: 0,
                  transition: "opacity 0.3s ease",
                }}
                className="group-hover:opacity-100"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
