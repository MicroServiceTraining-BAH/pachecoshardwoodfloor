"use client";

import { useState } from "react";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [msg, setMsg]   = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSend(e: React.FormEvent) {
    e.preventDefault();
    if (!msg.trim()) return;
    setLoading(true);
    setError("");
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: msg }),
    });
    const data = await res.json();
    setLoading(false);
    if (data.error) {
      setError(data.error);
    } else {
      setSent(true);
    }
  }

  return (
    <>
      {/* Chat panel */}
      {open && (
        <div
          style={{
            position: "fixed",
            bottom: "88px",
            right: "1.25rem",
            width: "300px",
            background: "#ffffff",
            border: "1px solid var(--border)",
            boxShadow: "0 8px 40px rgba(0,0,0,0.18)",
            zIndex: 50,
            overflow: "hidden",
          }}
        >
          {/* Header */}
          <div
            style={{
              background: "var(--gold)",
              padding: "0.875rem 1.25rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <div style={{ width: "7px", height: "7px", background: "#ffffff", transform: "rotate(45deg)" }} />
              <span style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#ffffff" }}>
                Chat With Us
              </span>
            </div>
            <button
              onClick={() => setOpen(false)}
              style={{ background: "none", border: "none", cursor: "pointer", color: "rgba(255,255,255,0.85)", padding: "0.2rem" }}
            >
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Body */}
          <div style={{ padding: "1.25rem" }}>
            {sent ? (
              <div style={{ textAlign: "center", padding: "1.5rem 0" }}>
                <div style={{ width: "8px", height: "8px", background: "var(--gold)", transform: "rotate(45deg)", margin: "0 auto 0.75rem" }} />
                <p style={{ fontFamily: "var(--font-display), serif", fontSize: "1.2rem", color: "var(--text-dark)" }}>Message Sent!</p>
                <p style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "0.8rem", color: "var(--text-muted)", marginTop: "0.4rem" }}>
                  We&apos;ll get back to you shortly.
                </p>
              </div>
            ) : (
              <>
                <p style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "0.875rem", fontWeight: 300, color: "var(--text-muted)", marginBottom: "1rem" }}>
                  Hi! How can we help you today?
                </p>
                <form onSubmit={handleSend} style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  <textarea
                    rows={3}
                    placeholder="Type your message..."
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "0.65rem 0.875rem",
                      border: "1px solid var(--border)",
                      fontFamily: "var(--font-body), sans-serif",
                      fontSize: "0.875rem",
                      fontWeight: 300,
                      color: "var(--text-dark)",
                      outline: "none",
                      resize: "none",
                      background: "var(--bg-page)",
                    }}
                    onFocus={(e) => ((e.currentTarget as HTMLTextAreaElement).style.borderColor = "var(--gold)")}
                    onBlur={(e) => ((e.currentTarget as HTMLTextAreaElement).style.borderColor = "var(--border)")}
                  />
                  {error && (
                    <p style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "0.75rem", color: "#c0392b" }}>{error}</p>
                  )}
                  <button
                    type="submit"
                    disabled={loading}
                    style={{
                      padding: "0.65rem",
                      background: loading ? "var(--text-muted)" : "var(--gold)",
                      color: "#ffffff",
                      border: "none",
                      fontFamily: "var(--font-body), sans-serif",
                      fontSize: "0.7rem",
                      fontWeight: 600,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      cursor: loading ? "not-allowed" : "pointer",
                      transition: "background 0.2s ease",
                    }}
                    onMouseEnter={(e) => { if (!loading) (e.currentTarget as HTMLButtonElement).style.background = "#b8820a"; }}
                    onMouseLeave={(e) => { if (!loading) (e.currentTarget as HTMLButtonElement).style.background = "var(--gold)"; }}
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}

      {/* Trigger button */}
      <button
        onClick={() => { setOpen(!open); setSent(false); }}
        style={{
          position: "fixed",
          bottom: "1.5rem",
          right: "1.5rem",
          display: "flex",
          alignItems: "center",
          gap: "0.6rem",
          padding: "0.875rem 1.5rem",
          background: "var(--gold)",
          color: "#ffffff",
          border: "none",
          boxShadow: "0 4px 20px rgba(154,110,40,0.45)",
          cursor: "pointer",
          zIndex: 50,
          fontFamily: "var(--font-body), sans-serif",
          fontSize: "0.75rem",
          fontWeight: 600,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          transition: "background 0.2s ease, box-shadow 0.2s ease",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLButtonElement).style.background = "#b8820a";
          (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 6px 28px rgba(154,110,40,0.6)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.background = "var(--gold)";
          (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 4px 20px rgba(154,110,40,0.45)";
        }}
      >
        {/* Chat icon */}
        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
        Chat With Us
      </button>
    </>
  );
}
