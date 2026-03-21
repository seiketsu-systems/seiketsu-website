import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Seiketsu Systems — Stop met leads verliezen door trage opvolging",
  description:
    "Wij automatiseren uw sales met AI — meer afspraken, minder handwerk, vanaf dag 1. AI Lead Machine, AI Sales Funnel, AI Klantbeheer voor NL MKB.",
  keywords:
    "AI automatisering, sales automation, lead opvolging, CRM automatisering, MKB, Nederland, Eindhoven",
  openGraph: {
    title: "Seiketsu Systems — AI Sales Automatisering voor NL MKB",
    description:
      "Stop met leads verliezen door trage opvolging. Wij automatiseren uw sales met AI — meer afspraken, minder handwerk, vanaf dag 1.",
    url: "https://seiketsu-systems.nl",
    siteName: "Seiketsu Systems",
    locale: "nl_NL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Seiketsu Systems — AI Sales Automatisering",
    description:
      "Stop met leads verliezen door trage opvolging. AI automatisering voor NL MKB.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://seiketsu-systems.nl",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  );
}
