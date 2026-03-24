import Link from "next/link";

const stappen = [
  {
    nummer: "01",
    titel: "Gratis Audit (30 min)",
    beschrijving:
      "We analyseren uw huidige sales- en opvolgingsproces in een gratis strategische sessie van 30 minuten. U krijgt direct inzicht in waar leads verloren gaan en wat dit u kost per maand.",
    details: [
      "Analyse van uw huidige workflow",
      "Concrete besparingspotentieel berekend",
      "Gepersonaliseerd automatiseringsplan",
      "Geen verplichtingen",
    ],
  },
  {
    nummer: "02",
    titel: "Systeem bouwen (14 dagen)",
    beschrijving:
      "Wij bouwen uw complete AI automatiseringssysteem in 14 werkdagen. Van lead capture tot contract en betaling — volledig ingericht op uw bedrijf, uw branche en uw klanten.",
    details: [
      "CRM configuratie en koppeling",
      "Automatische e-mail sequenties",
      "Voice AI instelling (Vapi)",
      "Kalender en booking integratie",
    ],
  },
  {
    nummer: "03",
    titel: "Live + Autonoom",
    beschrijving:
      "Na de go-live sessie werkt uw systeem volledig autonoom. U ontvangt maandelijks een rapportage met resultaten. Ons team monitort en optimaliseert continu op de achtergrond.",
    details: [
      "Persoonlijke go-live begeleiding",
      "Maandelijkse rapportage",
      "Doorlopende optimalisatie",
      "Priority support inbegrepen",
    ],
  },
];

export default function Werkwijze() {
  return (
    <section id="werkwijze" className="relative bg-[#0F0F0F] py-24 md:py-32 overflow-hidden">
      {/* Section dividers */}
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="section-divider absolute bottom-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-[#FF6B35] text-xs font-semibold tracking-[0.2em] uppercase mb-4 block">
            Werkwijze
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-5">
            Van audit tot{" "}
            <span className="gradient-text">autonome machine</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Drie stappen, 14 dagen, en uw sales draait op autopilot. Geen
            technische kennis vereist aan uw kant.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line desktop */}
          <div className="hidden md:block absolute top-[42px] left-[16.67%] right-[16.67%] h-[1px] bg-gradient-to-r from-[#FF6B35]/40 via-[#FF6B35]/20 to-[#FF6B35]/40" />

          {stappen.map((stap, index) => (
            <div key={stap.nummer} className="relative">
              {/* Step number */}
              <div className="flex flex-col items-center mb-8">
                <div className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FF6B35] to-[#e55a25] flex items-center justify-center text-white font-display font-extrabold text-lg shadow-glow">
                  {stap.nummer}
                </div>

                {/* Mobile connector */}
                {index < stappen.length - 1 && (
                  <div className="md:hidden w-[1px] h-8 bg-gradient-to-b from-[#FF6B35]/40 to-transparent mt-2" />
                )}
              </div>

              <div className="card-premium p-7">
                <h3 className="font-display text-xl font-bold text-white mb-3">
                  {stap.titel}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {stap.beschrijving}
                </p>
                <ul className="space-y-2.5">
                  {stap.details.map((detail) => (
                    <li key={detail} className="flex items-center gap-2.5">
                      <div className="w-1.5 h-1.5 bg-[#FF6B35] rounded-full flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 border border-[#FF6B35]/40 text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white hover:border-[#FF6B35] px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300 group"
          >
            Start met stap 1 — Gratis Audit
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
