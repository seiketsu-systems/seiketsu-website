import Link from "next/link";

const stappen = [
  {
    nummer: "01",
    titel: "Gratis Audit (30 min)",
    beschrijving: "We analyseren uw huidige sales- en opvolgingsproces in een gratis strategische sessie van 30 minuten. U krijgt direct inzicht in waar leads verloren gaan.",
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
    beschrijving: "Wij bouwen uw complete AI automatiseringssysteem in 14 werkdagen. Volledig ingericht op uw bedrijf, uw branche en uw klanten.",
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
    beschrijving: "Na de go-live sessie werkt uw systeem volledig autonoom. U ontvangt maandelijks een rapportage met resultaten.",
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
    <section id="werkwijze" className="bg-surface-elevated py-24 md:py-32 border-y border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 reveal">
          <span className="text-brand text-xs font-semibold tracking-[0.2em] uppercase mb-4 block">
            Werkwijze
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5">
            Van audit tot autonome machine
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Drie stappen, 14 dagen, en uw sales draait op autopilot. Geen
            technische kennis vereist aan uw kant.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative reveal-stagger">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-[42px] left-[16.67%] right-[16.67%] h-px bg-zinc-700" />

          {stappen.map((stap, index) => (
            <div key={stap.nummer} className="relative">
              <div className="flex flex-col items-center mb-8">
                <div className="relative z-10 w-16 h-16 rounded-xl bg-brand flex items-center justify-center text-white font-bold text-lg">
                  {stap.nummer}
                </div>
                {index < stappen.length - 1 && (
                  <div className="md:hidden w-px h-8 bg-zinc-700 mt-2" />
                )}
              </div>

              <div className="card p-7">
                <h3 className="text-xl font-bold text-white mb-3">
                  {stap.titel}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  {stap.beschrijving}
                </p>
                <ul className="space-y-2.5">
                  {stap.details.map((detail) => (
                    <li key={detail} className="flex items-center gap-2.5">
                      <div className="w-1.5 h-1.5 bg-brand rounded-full flex-shrink-0" />
                      <span className="text-zinc-300 text-sm">{detail}</span>
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
            className="btn-primary inline-flex items-center gap-2 px-8 py-4 text-base group"
          >
            Plan Gratis Audit
            <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
