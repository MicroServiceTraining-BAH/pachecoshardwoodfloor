"use client";

import { useState } from "react";

const reviews = [
  {
    name: "Mike Kelly",
    time: "6 months ago",
    text: "We chose to use Pacheco Hardwood floors to refinish the wood floors on the home we just bought. We did not know any other vendors, but interviewed several before deciding to use Enos and Amy for our floors, and we are so happy we did.",
  },
  {
    name: "Melissa S",
    time: "8 months ago",
    text: "So incredibly impressed with the professionalism, communication and reliability of Amy and her team. They did a fantastic job refinishing our floors and we couldn't be happier with the results. We were given clear expectations, and were kept informed every step of the way.",
  },
  {
    name: "Katherine Mohan",
    time: "3 weeks ago",
    text: "We have hired Pachecos Hardwood Floors twice now to replace carpeting with new hardwood flooring and will do so again. They understand flooring and are outstanding consultants for helping you get what you want.",
  },
  {
    name: "James Porzillo",
    time: "9 months ago",
    text: "Fantastic job on our new hardwood floor installation! The results are stunning. The team was efficient, skilled, and left our home spotless. We couldn't be happier with the beautiful new look and the excellent service.",
  },
  {
    name: "Ed Santiago",
    time: "7 months ago",
    text: "After interviewing 3 other hardwood flooring providers, we knew immediately from our very first visit with Amy they were different. She listened to our concerns and made cost effective recommendations that kept us on budget.",
  },
  {
    name: "HC Auto",
    time: "5 months ago",
    text: "Blew me away! Redid approx 1500 sq ft of hardwood floors at my house. Floors are beautiful. They were quick, polite, CLEAN! More than reasonable prices. Can't recommend enough!!!!",
  },
  {
    name: "Brooke Gaffney",
    time: "8 months ago",
    text: "Pachecos did an amazing job refinishing our hardwood floors. The communication from start to finish was excellent. They are true professionals, from their wealth of knowledge to being punctual and on schedule for the duration of the project.",
  },
  {
    name: "Sandra Howard",
    time: "3 years ago",
    text: "The owners Amy and Enos are amazing to work with!! The team installed new hardwood floors in the three bedrooms, repaired step and changed stain in the rest of the house. Hardworking, professional and cleaned up each day!",
  },
];

function Stars() {
  return (
    <div style={{ display: "flex", gap: "3px" }}>
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="var(--gold)" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

const CARDS_PER_PAGE = 3;

export default function Testimonials() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(reviews.length / CARDS_PER_PAGE);
  const visible = reviews.slice(page * CARDS_PER_PAGE, page * CARDS_PER_PAGE + CARDS_PER_PAGE);

  return (
    <section
      id="testimonials"
      style={{
        background: "var(--bg-warm)",
        padding: "5rem 2rem",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header row */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1.5rem",
            marginBottom: "3rem",
          }}
        >
          <div>
            <span className="section-eyebrow" style={{ marginBottom: "0.6rem" }}>4.8 Stars · Google Reviews</span>
            <h2 className="section-heading">What Our Clients Say</h2>
            <div style={{ width: "48px", height: "3px", background: "var(--gold)", marginTop: "1rem" }} />
          </div>

          {/* Arrow controls */}
          <div style={{ display: "flex", gap: "0.5rem" }}>
            <button
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={page === 0}
              style={{
                width: "44px",
                height: "44px",
                border: "1px solid var(--border)",
                background: page === 0 ? "var(--bg-section)" : "#ffffff",
                color: page === 0 ? "var(--text-muted)" : "var(--text-dark)",
                cursor: page === 0 ? "default" : "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "background 0.2s ease, color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                if (page !== 0) (e.currentTarget as HTMLButtonElement).style.background = "var(--bg-dark)";
                if (page !== 0) (e.currentTarget as HTMLButtonElement).style.color = "#ffffff";
              }}
              onMouseLeave={(e) => {
                if (page !== 0) (e.currentTarget as HTMLButtonElement).style.background = "#ffffff";
                if (page !== 0) (e.currentTarget as HTMLButtonElement).style.color = "var(--text-dark)";
              }}
              aria-label="Previous reviews"
            >
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={page === totalPages - 1}
              style={{
                width: "44px",
                height: "44px",
                border: "1px solid var(--border)",
                background: page === totalPages - 1 ? "var(--bg-section)" : "#ffffff",
                color: page === totalPages - 1 ? "var(--text-muted)" : "var(--text-dark)",
                cursor: page === totalPages - 1 ? "default" : "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "background 0.2s ease, color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                if (page !== totalPages - 1) (e.currentTarget as HTMLButtonElement).style.background = "var(--bg-dark)";
                if (page !== totalPages - 1) (e.currentTarget as HTMLButtonElement).style.color = "#ffffff";
              }}
              onMouseLeave={(e) => {
                if (page !== totalPages - 1) (e.currentTarget as HTMLButtonElement).style.background = "#ffffff";
                if (page !== totalPages - 1) (e.currentTarget as HTMLButtonElement).style.color = "var(--text-dark)";
              }}
              aria-label="Next reviews"
            >
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Review cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
            gap: "1.25rem",
          }}
        >
          {visible.map((review) => (
            <div
              key={review.name}
              style={{
                background: "#ffffff",
                border: "1px solid var(--border)",
                padding: "1.75rem",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                position: "relative",
              }}
            >
              <div style={{ position: "absolute", top: 0, left: "1.75rem", width: "32px", height: "2px", background: "var(--gold)" }} />
              <Stars />
              <p
                style={{
                  fontFamily: "var(--font-body), sans-serif",
                  fontSize: "0.9rem",
                  fontWeight: 300,
                  color: "var(--text-body)",
                  lineHeight: 1.8,
                  flex: 1,
                }}
              >
                &ldquo;{review.text}&rdquo;
              </p>
              <div
                style={{
                  borderTop: "1px solid var(--border-warm)",
                  paddingTop: "0.85rem",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-display), 'Cormorant Garamond', serif",
                    fontSize: "1.1rem",
                    fontWeight: 500,
                    color: "var(--text-dark)",
                  }}
                >
                  {review.name}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body), sans-serif",
                    fontSize: "0.72rem",
                    color: "var(--text-muted)",
                    letterSpacing: "0.04em",
                  }}
                >
                  {review.time}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination dots + link */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "2rem",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <div style={{ display: "flex", gap: "0.4rem" }}>
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                style={{
                  width: i === page ? "24px" : "8px",
                  height: "8px",
                  background: i === page ? "var(--gold)" : "var(--border)",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  transition: "width 0.2s ease, background 0.2s ease",
                }}
                aria-label={`Page ${i + 1}`}
              />
            ))}
          </div>

          <a
            href="https://www.google.com/maps/place/Pachecos+Hardwood+Floor/@38.4761737,-77.442906,884m/data=!3m2!1e3!4b1!4m6!3m5!1s0x89b6eff982011b85:0xc1e3942fe1c754c0!8m2!3d38.4761695!4d-77.4403311!16s%2Fg%2F11fl8ln946"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              fontFamily: "var(--font-body), sans-serif",
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--text-muted)",
              textDecoration: "none",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--gold)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--text-muted)")}
          >
            View All Reviews on Google
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
