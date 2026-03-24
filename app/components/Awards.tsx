"use client";

type Award = {
  title: string;
  badge: string;
  subLabel: string;
  href?: string;
};

const AWARDS: Award[] = [
  {
    title: "Best of Stafford",
    badge: "6× Winner",
    subLabel: "Reader-Voted by InsideNOVA",
    href: "https://www.insidenova.com/best_of/meet-the-best-of-stafford-2022/article_1375afce-bb76-11ed-b1c8-3377fc9596ec.html",
  },
  {
    title: "Best of Prince William",
    badge: "Winner",
    subLabel: "Reader-Voted by InsideNOVA",
  },
];

export default function Awards() {
  return (
    <section
      id="awards"
      style={{
        background: "var(--bg-page)",
        padding: "5rem 2rem",
        borderTop: "1px solid var(--border)",
        scrollMarginTop: "160px",
      }}
    >
      <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span className="section-eyebrow" style={{ marginBottom: "0.75rem" }}>
            Awards &amp; Recognition
          </span>
          <h2 className="section-heading" style={{ marginBottom: "0.5rem" }}>
            Recognized by Our{" "}
            <em style={{ fontStyle: "italic", color: "var(--gold)" }}>
              Community
            </em>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body), sans-serif",
              fontSize: "0.975rem",
              fontWeight: 300,
              color: "var(--text-muted)",
              lineHeight: 1.7,
              marginTop: "0.75rem",
            }}
          >
            Trusted and voted on by thousands of Northern Virginia neighbors
          </p>
          {/* Gold underline accent */}
          <div
            style={{
              width: "48px",
              height: "2px",
              background: "var(--gold)",
              margin: "1.25rem auto 0",
            }}
          />
        </div>

        {/* Cards grid */}
        <div
          className="grid md:grid-cols-2"
          style={{ gap: "1.5rem", maxWidth: "760px", margin: "0 auto" }}
        >
          {AWARDS.map((award) => {
            const CardInner = (
              <div
                style={{
                  background: "#ffffff",
                  border: "1px solid var(--border)",
                  borderTop: "3px solid #C9A84C",
                  padding: "2.5rem 2rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  gap: "1.25rem",
                  transition: "box-shadow 0.2s ease, transform 0.2s ease",
                  height: "100%",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    "0 8px 28px rgba(154, 110, 40, 0.14)";
                  (e.currentTarget as HTMLDivElement).style.transform =
                    "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                  (e.currentTarget as HTMLDivElement).style.transform =
                    "translateY(0)";
                }}
              >
                {/* Logo */}
                <img
                  src="/assets/images/insidenova-logo.png"
                  alt="InsideNOVA"
                  style={{
                    maxWidth: "160px",
                    width: "100%",
                    height: "auto",
                    objectFit: "contain",
                  }}
                />

                {/* Award title */}
                <h3
                  style={{
                    fontFamily:
                      "var(--font-display), 'Cormorant Garamond', serif",
                    fontSize: "1.6rem",
                    fontWeight: 500,
                    color: "var(--text-dark)",
                    lineHeight: 1.2,
                    margin: 0,
                  }}
                >
                  {award.title}
                </h3>

                {/* Badge pill */}
                <span
                  style={{
                    display: "inline-block",
                    background: "rgba(201, 168, 76, 0.12)",
                    border: "1px solid #C9A84C",
                    color: "#9a6e28",
                    fontFamily: "var(--font-body), sans-serif",
                    fontSize: "0.7rem",
                    fontWeight: 500,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    padding: "0.35rem 0.9rem",
                    borderRadius: "2px",
                  }}
                >
                  {award.badge}
                </span>

                {/* Sub-label */}
                <p
                  style={{
                    fontFamily: "var(--font-body), sans-serif",
                    fontSize: "0.75rem",
                    fontWeight: 400,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--text-muted)",
                    margin: 0,
                  }}
                >
                  {award.subLabel}
                </p>

                {/* Link label for linked cards */}
                {award.href && (
                  <p
                    style={{
                      fontFamily: "var(--font-body), sans-serif",
                      fontSize: "0.8rem",
                      fontWeight: 400,
                      color: "var(--gold)",
                      margin: 0,
                      borderBottom: "1px solid rgba(154,110,40,0.35)",
                      paddingBottom: "1px",
                    }}
                  >
                    View Award →
                  </p>
                )}
              </div>
            );

            return award.href ? (
              <a
                key={award.title}
                href={award.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${award.title} — ${award.badge}. Opens InsideNOVA article in a new tab.`}
                style={{ textDecoration: "none", display: "block" }}
              >
                {CardInner}
              </a>
            ) : (
              <div key={award.title} style={{ display: "block" }}>
                {CardInner}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
