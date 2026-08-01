// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://hightech-autoservices.com"),
  title: "High Tech Auto Services | Mobile Mechanic — We Come To You",
  description:
    "Car broke down? Don't tow it. High Tech Auto Services brings 20+ years of ASE-Certified expertise directly to your driveway. Honest pricing, fast same-day service across South Florida. 50% off all jobs + FREE diagnostic.",
  keywords: [
    "mobile mechanic",
    "mobile auto repair",
    "ASE-certified mechanic",
    "car repair at home",
    "engine diagnostics",
    "brake service",
    "electrical repair",
    "pre-purchase inspection",
    "North Miami mechanic",
    "Hollywood FL mechanic",
    "Fort Lauderdale mobile mechanic",
    "Pompano auto repair",
    "Tamarac car repair",
    "High Tech Auto Services",
  ],
  authors: [{ name: "High Tech Auto Services" }],
  creator: "High Tech Auto Services",
  publisher: "High Tech Auto Services",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "High Tech Auto Services | Mobile Mechanic — We Come To You",
    description:
      "Skip the expensive shop prices and tow fees. 20+ years ASE-Certified expertise brought right to your driveway. 50% off all jobs + FREE diagnostic with same-day service.",
    url: "https://hightech-autoservices.com/",
    siteName: "High Tech Auto Services",
    images: [
      {
        url: "/images/hero-mechanic.png",
        width: 1200,
        height: 630,
        alt: "High Tech Auto Services — ASE-Certified mobile mechanic",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "High Tech Auto Services | Mobile Mechanic — We Come To You",
    description:
      "Car broke down? Don't tow it. We come to you. 20+ years ASE-Certified expertise. 50% off all jobs + FREE diagnostic.",
    images: ["/images/hero-mechanic.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
