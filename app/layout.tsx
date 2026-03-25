import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import Script from "next/script";
import dynamic from "next/dynamic";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollAnimations from "@/components/ScrollAnimations";

const VoiceAgent = dynamic(() => import("@/components/VoiceAgent"), { ssr: false });

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'chat-widget': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & { 'location-id'?: string }, HTMLElement>;
    }
  }
}

export const metadata: Metadata = {
  title: "Seiketsu Systems — Stop met leads verliezen door trage opvolging",
  description: "Wij automatiseren uw sales met AI — meer afspraken, minder handwerk, vanaf dag 1. AI Lead Machine, AI Sales Funnel, AI Klantbeheer voor NL MKB.",
  keywords: "AI automatisering, sales automation, lead opvolging, CRM automatisering, MKB, Nederland, Eindhoven",
  openGraph: {
    title: "Seiketsu Systems — AI Sales Automatisering voor NL MKB",
    description: "Stop met leads verliezen door trage opvolging. Wij automatiseren uw sales met AI — meer afspraken, minder handwerk, vanaf dag 1.",
    url: "https://seiketsu-systems.nl",
    siteName: "Seiketsu Systems",
    locale: "nl_NL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Seiketsu Systems — AI Sales Automatisering",
    description: "Stop met leads verliezen door trage opvolging. AI automatisering voor NL MKB.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://seiketsu-systems.nl" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="font-sans">
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <ScrollAnimations />
        <VoiceAgent />
        <chat-widget
          location-id="LyOYhH95JP7PMLpPLEXT"
          i-1-8n-labels='{"name":"Naam","phone":"Mobiel","email":"E-mailadres","message":"Bericht","required":"Verplicht","send":"Verzenden","received":"Ontvangen","sending":"Verzenden...","invalid_value":"Ongeldig nummer"}'
          style={{
            '--chat-widget-primary-color': '#FF6B35',
            '--chat-widget-active-color': '#FF6B35',
          } as React.CSSProperties}
        />
        <Script
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
