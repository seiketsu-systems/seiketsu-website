import Link from "next/link";

const pakketten = [
  {
    naam: "AI Starter",
    prijs: "297",
    setup: "500",
    beschrijving: "Ideaal voor kleine bedrijven die willen starten met geautomatiseerde lead opvolging.",
    populair: false,
    features: [
      "CRM configuratie (HighLevel)",
      "Audit booking automatisering",
      "4x automatische herinneringen",
      "No-show reactivatie flow",
      "Maandelijkse rapportage",
      "Contactformulier → CRM koppeling",
      "Email automatisering (basis)",
      "Support via email",
    ],
  },
  {
    naam: "AI Growth",
    prijs: "497",
    setup: "500",
    beschrijving: "De complete AI sales machine voor groeiende bedrijven die willen opschalen.",
    populair: true,
    features: [
      "Alles uit AI Starter",
      "Vapi voice AI geïntegreerd",
      "Automatisch contract verzenden",
      "DPA automatisch verstuurd",
      "Betaallink automatisering",
      "3-maanden upsell sequentie",
      "SMS opvolging",
      "Priority support",
    ],
  },
  {
    naam: "AI Full Suite",
    prijs: "797",
    setup: "500",
    beschrijving: "De ultieme automatiseringssuite voor bedrijven die maximale autonomie willen.",
    populair: false,
    features: [
      "Alles uit AI Growth",
      "12-email nurture sequentie",
      "Complete onboarding flow",
      "Persoonlijke go-live sessie",
      "Google Reviews automatisering",
      "Referral workflow",
      "Klant dashboard toegang",
      "Priority support 24/7",
    ],
  },
];

export default function Prijzen() {
  return (
    <section id="prijzen" className="bg-surface-base py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 reveal">
          <span className="text-brand text-xs font-semibold tracking-[0.2em] uppercase mb-4 block">
            Tarieven
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5">
            Transparante prijzen, geen verrassingen
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Eenmalige setup + vaste maandprijs. Altijd weten wat u betaalt.
            Opzegbaar met één maand opzegtermijn.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-stretch reveal-stagger">
          {pakketten.map((pakket) => (
            <div
              key={pakket.naam}
              className={`relative flex flex-col rounded-xl p-8 ${
                pakket.populair ? "card-featured" : "card"
              }`}
            >
              {pakket.populair && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-brand text-white text-xs font-bold px-5 py-1.5 rounded-full tracking-wider uppercase">
                    Meest Gekozen
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-2">{pakket.naam}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{pakket.beschrijving}</p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-zinc-500 text-lg">€</span>
                  <span className="text-5xl font-bold text-white">{pakket.prijs}</span>
                  <span className="text-zinc-500">/maand</span>
                </div>
                <div className="mt-2">
                  <span className="text-zinc-600 text-sm">+ €{pakket.setup} eenmalige setup</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {pakket.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-zinc-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`w-full text-center py-4 rounded-lg font-semibold text-base transition-all duration-200 block ${
                  pakket.populair
                    ? "btn-primary"
                    : "bg-transparent border border-zinc-700 hover:border-zinc-500 text-white"
                }`}
              >
                Plan Gratis Audit
              </Link>
            </div>
          ))}
        </div>

        <p className="text-center text-zinc-600 text-sm mt-12">
          Alle pakketten inclusief 30 minuten gratis strategische audit. Geen
          jaarcontract vereist. Opzegbaar met 1 maand opzegtermijn.
        </p>
      </div>
    </section>
  );
}
