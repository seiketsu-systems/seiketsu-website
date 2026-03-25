import Link from "next/link";

const partners = ["WhatsApp", "Google", "HighLevel", "Stripe", "Vapi", "Zapier"];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-surface-base">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full text-center">
        {/* Partner logos */}
        <div className="flex items-center justify-center gap-6 mb-10">
          <span className="text-zinc-500 text-xs tracking-wide">Vertrouwd door 50+ MKB-bedrijven</span>
          <div className="hidden sm:flex items-center gap-4">
            {partners.map((name) => (
              <span key={name} className="text-zinc-600 text-xs font-medium">{name}</span>
            ))}
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6 tracking-tight">
          Stop met leads verliezen
          <br />
          door trage opvolging
        </h1>

        {/* Subline */}
        <p className="text-lg text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          Wij automatiseren uw sales met AI — meer afspraken, minder handwerk,
          vanaf dag 1. Leads worden binnen seconden opgevolgd, niet binnen dagen.
        </p>

        {/* CTA */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <Link
            href="/contact"
            className="btn-primary inline-flex items-center justify-center px-8 py-4 text-base group"
          >
            Plan Gratis Audit
            <svg className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <span className="text-zinc-500 text-sm hidden sm:inline">30 min, 100% vrijblijvend</span>
        </div>

        {/* Trust signals */}
        <div className="flex flex-wrap items-center justify-center gap-8 text-zinc-500 text-sm">
          {["Binnen 14 dagen live", "Geen technische kennis nodig", "Vaste maandprijs"].map((item, i) => (
            <div key={item} className="flex items-center gap-2">
              {i > 0 && <span className="hidden sm:inline text-zinc-700 mr-4">·</span>}
              <svg className="w-4 h-4 text-brand" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
