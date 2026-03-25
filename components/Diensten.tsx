import Link from "next/link";

const diensten = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "AI Lead Machine",
    description: "Automatische lead capture en follow-up via email, SMS en voice AI. Geen enkele lead gaat meer verloren — uw systeem werkt 24/7.",
    features: [
      "Automatische opvolging binnen 5 minuten",
      "Multi-channel: email, SMS, voice AI",
      "Lead scoring en prioritering",
      "CRM-integratie met HighLevel",
      "Real-time rapportage",
    ],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "AI Sales Funnel",
    description: "Van eerste contact tot getekend contract — volledig geautomatiseerd. Uw sales pipeline werkt autonoom.",
    features: [
      "Automatisch voorstel versturen",
      "Contract en DPA geautomatiseerd",
      "Betaallink en ontvangstbevestiging",
      "No-show reactivatie flows",
      "Pipeline tracking in real-time",
    ],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "AI Klantbeheer",
    description: "Onboarding, rapportage en upsell — uw klanten worden uitstekend verzorgd zonder extra handwerk.",
    features: [
      "Geautomatiseerde onboarding flow",
      "Maandelijkse klantrapportage",
      "3-maanden upsell sequentie",
      "Tevredenheidscheck automatisch",
      "Review-verzoek na go-live",
    ],
  },
];

export default function Diensten() {
  return (
    <section id="diensten" className="bg-surface-base py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 reveal">
          <span className="text-brand text-xs font-semibold tracking-[0.2em] uppercase mb-4 block">
            Onze Diensten
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5">
            Drie systemen, één volledig proces
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Elk pakket bouwt voort op het vorige. Samen vormen ze een complete,
            autonome sales machine voor uw bedrijf.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 reveal-stagger">
          {diensten.map((dienst) => (
            <div key={dienst.title} className="card p-8">
              <div className="w-14 h-14 rounded-xl bg-brand/10 flex items-center justify-center text-brand mb-8">
                {dienst.icon}
              </div>

              <h3 className="text-xl font-bold text-white mb-3">
                {dienst.title}
              </h3>
              <p className="text-zinc-400 text-sm mb-7 leading-relaxed">
                {dienst.description}
              </p>

              <ul className="space-y-3">
                {dienst.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-brand flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-zinc-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
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
