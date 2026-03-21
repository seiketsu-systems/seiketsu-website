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
    <section id="werkwijze" className="bg-[#1A1A1A] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#FF6B35] text-sm font-semibold tracking-widest uppercase mb-4 block">
            Werkwijze
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
            Van audit tot{" "}
            <span className="text-[#FF6B35]">autonome machine</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Drie stappen, 14 dagen, en uw sales draait op autopilot. Geen
            technische kennis vereist aan uw kant.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line desktop */}
          <div className="hidden md:block absolute top-16 left-1/4 right-1/4 h-0.5 bg-[#2A2A2A]" />

          {stappen.map((stap, index) => (
            <div key={stap.nummer} className="relative">
              {/* Step number */}
              <div className="flex flex-col items-center md:items-start mb-6">
                <div className="relative z-10 w-14 h-14 bg-[#FF6B35] rounded-full flex items-center justify-center text-white font-black text-lg mb-4">
                  {stap.nummer}
                </div>

                {/* Mobile connector */}
                {index < stappen.length - 1 && (
                  <div className="md:hidden w-0.5 h-8 bg-[#2A2A2A] mb-4" />
                )}
              </div>

              <div className="bg-[#0A0A0A] border border-[#2A2A2A] rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  {stap.titel}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">
                  {stap.beschrijving}
                </p>
                <ul className="space-y-2">
                  {stap.details.map((detail) => (
                    <li key={detail} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#FF6B35] rounded-full flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 border border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white px-8 py-4 rounded font-semibold text-base transition-all duration-200"
          >
            Start met stap 1 — Gratis Audit
            <svg
              className="w-4 h-4"
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
