"use client";

const reviews = [
  {
    name: "Sarah M.",
    initials: "SM",
    stars: 5,
    date: "March 2024",
    text: "Pacheco's did an incredible job refinishing our floors. Enos and his team were professional, on time, and the results exceeded our expectations. Our 20-year-old oak floors look brand new!",
  },
  {
    name: "James T.",
    initials: "JT",
    stars: 5,
    date: "January 2024",
    text: "We had new hardwood installed throughout our entire first floor. The craftsmanship is outstanding — perfectly laid, beautiful finish. You can tell they take real pride in their work.",
  },
  {
    name: "Priya L.",
    initials: "PL",
    stars: 5,
    date: "November 2023",
    text: "From the free quote to the final walkthrough, communication was clear and the work was spotless. The herringbone pattern in our dining room is stunning. Highly recommend!",
  },
  {
    name: "Kevin R.",
    initials: "KR",
    stars: 5,
    date: "September 2023",
    text: "Very happy with the stair rail and repair work. Enos went above and beyond to match the existing wood color perfectly. Fair pricing and great quality — we'll be calling them again.",
  },
];

function Stars() {
  return (
    <div style={{ display: "flex", gap: "4px", marginBottom: "1.25rem" }}>
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="#f4b400">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      id="reviews"
      style={{
        background: "var(--bg-dark)",
        padding: "5.5rem 2rem",
        borderTop: "1px solid rgba(154,110,40,0.3)",
        borderBottom: "1px solid rgba(154,110,40,0.3)",
        scrollMarginTop: "160px",
      }}
    >
      <div style={{ maxWidth: "1120px", margin: "0 auto" }}>

        {/* Header row */}
        <div style={{ marginBottom: "3.5rem" }}>
          <span
            className="section-eyebrow"
            style={{ color: "var(--gold-light)" }}
          >
            Google Reviews
          </span>
          <h2
            style={{
              fontFamily: "var(--font-display), 'Cormorant Garamond', serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 400,
              lineHeight: 1.1,
              color: "var(--text-light)",
              marginTop: "0.5rem",
            }}
          >
            What Our Clients Say
          </h2>
          <div style={{ width: "48px", height: "2px", background: "var(--gold)", marginTop: "1.25rem" }} />
        </div>

        {/* Review cards */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4"
          style={{ gap: "1.5rem" }}
        >
          {reviews.map((r) => (
            <div
              key={r.name}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(154,110,40,0.18)",
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                transition: "border-color 0.2s ease, background 0.2s ease, transform 0.2s ease",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = "rgba(154,110,40,0.45)";
                el.style.background = "rgba(255,255,255,0.07)";
                el.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = "rgba(154,110,40,0.18)";
                el.style.background = "rgba(255,255,255,0.04)";
                el.style.transform = "translateY(0)";
              }}
            >
              <Stars />

              <p
                style={{
                  fontFamily: "var(--font-body), sans-serif",
                  fontSize: "0.9rem",
                  fontWeight: 300,
                  color: "rgba(245,237,224,0.82)",
                  lineHeight: 1.85,
                  flex: 1,
                }}
              >
                &ldquo;{r.text}&rdquo;
              </p>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  marginTop: "1.5rem",
                  paddingTop: "1.25rem",
                  borderTop: "1px solid rgba(154,110,40,0.14)",
                }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background: "var(--gold)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-body), sans-serif",
                    fontSize: "0.62rem",
                    fontWeight: 600,
                    color: "#ffffff",
                    flexShrink: 0,
                    letterSpacing: "0.05em",
                  }}
                >
                  {r.initials}
                </div>
                <div>
                  <p style={{
                    fontFamily: "var(--font-body), sans-serif",
                    fontSize: "0.82rem",
                    fontWeight: 500,
                    color: "var(--text-light)",
                    letterSpacing: "0.03em",
                  }}>
                    {r.name}
                  </p>
                  <p style={{
                    fontFamily: "var(--font-body), sans-serif",
                    fontSize: "0.65rem",
                    color: "var(--text-muted)",
                    marginTop: "2px",
                  }}>
                    {r.date} · Google
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ marginTop: "3rem", textAlign: "center" }}>
          <a
            href="https://www.google.com/search?q=Pachecos+Hardwood+Floor+Reviews"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.7rem 2rem",
              border: "1px solid rgba(154,110,40,0.35)",
              color: "var(--gold-light)",
              fontFamily: "var(--font-body), sans-serif",
              fontSize: "0.7rem",
              fontWeight: 500,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "border-color 0.2s ease, color 0.2s ease, background 0.2s ease",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.borderColor = "var(--gold)";
              el.style.color = "#ffffff";
              el.style.background = "rgba(154,110,40,0.15)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.borderColor = "rgba(154,110,40,0.35)";
              el.style.color = "var(--gold-light)";
              el.style.background = "transparent";
            }}
          >
            See All Reviews on Google
            <svg width="11" height="11" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
