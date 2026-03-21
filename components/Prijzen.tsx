import Link from "next/link";

const pakketten = [
  {
    naam: "AI Starter",
    prijs: "297",
    setup: "500",
    beschrijving:
      "Ideaal voor kleine bedrijven die willen starten met geautomatiseerde lead opvolging.",
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
    beschrijving:
      "De complete AI sales machine voor groeiende bedrijven die willen opschalen.",
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
    beschrijving:
      "De ultieme automatiseringssuite voor bedrijven die maximale autonomie willen.",
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
    <section id="prijzen" className="bg-[#0A0A0A] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#FF6B35] text-sm font-semibold tracking-widest uppercase mb-4 block">
            Tarieven
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
            Transparante prijzen,{" "}
            <span className="text-[#FF6B35]">geen verrassingen</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Eenmalige setup + vaste maandprijs. Altijd weten wat u betaalt.
            Opzegbaar met één maand opzegtermijn.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {pakketten.map((pakket) => (
            <div
              key={pakket.naam}
              className={`relative flex flex-col rounded-xl p-8 transition-all duration-300 ${
                pakket.populair
                  ? "bg-[#1A1A1A] border-2 border-[#FF6B35]"
                  : "bg-[#1A1A1A] border border-[#2A2A2A] hover:border-[#FF6B35]/50"
              }`}
              style={
                pakket.populair
                  ? { boxShadow: "0 0 40px rgba(255,107,53,0.15)" }
                  : undefined
              }
            >
              {/* Popular badge */}
              {pakket.populair && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-[#FF6B35] text-white text-xs font-bold px-4 py-1.5 rounded-full tracking-wide uppercase">
                    Meest Gekozen
                  </span>
                </div>
              )}

              {/* Header */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {pakket.naam}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {pakket.beschrijving}
                </p>
              </div>

              {/* Price */}
              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-gray-400 text-lg">€</span>
                  <span className="text-5xl font-black text-white">
                    {pakket.prijs}
                  </span>
                  <span className="text-gray-400">/maand</span>
                </div>
                <div className="flex items-center gap-1 mt-2">
                  <span className="text-gray-500 text-sm">
                    + €{pakket.setup} eenmalige setup
                  </span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-grow">
                {pakket.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-[#FF6B35] flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href="/contact"
                className={`w-full text-center py-3.5 rounded font-semibold text-base transition-colors duration-200 ${
                  pakket.populair
                    ? "bg-[#FF6B35] hover:bg-[#e55a25] text-white"
                    : "bg-transparent border border-[#2A2A2A] hover:border-[#FF6B35] text-white"
                }`}
              >
                Start met gratis audit
              </Link>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-gray-600 text-sm mt-10">
          Alle pakketten inclusief 30 minuten gratis strategische audit. Geen
          jaarcontract vereist. Opzegbaar met 1 maand opzegtermijn.
        </p>
      </div>
    </section>
  );
}
