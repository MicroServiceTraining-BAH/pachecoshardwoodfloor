import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pacheco's Hardwood Floors | Stafford, VA",
  description:
    "Family-owned hardwood floor installation, refinishing & custom designs serving Stafford, VA and Northern Virginia since 2021. Call for a free quote: 571-575-1570.",
  keywords: [
    "hardwood floors Stafford VA",
    "hardwood floor installation Northern Virginia",
    "floor refinishing Stafford",
    "sand and refinish hardwood",
    "custom hardwood designs",
    "stair rail repair Virginia",
    "hardwood flooring contractor",
  ],
  authors: [{ name: "Pacheco's Hardwood Floors" }],
  metadataBase: new URL("https://pachecoshardwoodfloor.vercel.app"),
  openGraph: {
    title: "Pacheco's Hardwood Floors | Stafford, VA",
    description:
      "Family-owned hardwood floor installation, refinishing & custom designs serving Northern Virginia since 2021. Free quotes available.",
    url: "https://pachecoshardwoodfloor.vercel.app",
    siteName: "Pacheco's Hardwood Floors",
    images: [{ url: "/hw-cherry-foyer.jpg", width: 1200, height: 630, alt: "Brazilian cherry hardwood floor by Pacheco's" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pacheco's Hardwood Floors | Stafford, VA",
    description: "Professional hardwood flooring in Northern Virginia since 2021.",
    images: ["/hw-cherry-foyer.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Pacheco's Hardwood Floors",
    "image": "https://pachecoshardwoodfloor.vercel.app/hw-cherry-foyer.jpg",
    "description": "Family-owned hardwood floor installation, refinishing, and custom designs serving Stafford, VA and Northern Virginia since 2021.",
    "url": "https://pachecoshardwoodfloor.vercel.app",
    "telephone": "571-383-5946",
    "email": "pachecoshardwoodfloor@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "309 Kingsland Dr",
      "addressLocality": "Stafford",
      "addressRegion": "VA",
      "postalCode": "22556",
      "addressCountry": "US",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 38.4721,
      "longitude": -77.4605,
    },
    "areaServed": {
      "@type": "State",
      "name": "Northern Virginia",
    },
    "priceRange": "$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "34",
    },
    "sameAs": [
      "https://www.facebook.com/pachecoshardwoodfloor",
    ],
  };

  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable} h-full antialiased`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </head>
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
