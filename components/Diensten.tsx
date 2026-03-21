import Link from "next/link";

const diensten = [
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    title: "AI Lead Machine",
    description:
      "Automatische lead capture en follow-up via email, SMS en voice AI. Geen enkele lead gaat meer verloren — uw systeem werkt 24/7, ook buiten kantooruren.",
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
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
    title: "AI Sales Funnel",
    description:
      "Van eerste contact tot getekend contract — volledig geautomatiseerd. Uw sales pipeline werkt autonoom zodat u zich kunt focussen op wat telt.",
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
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    title: "AI Klantbeheer",
    description:
      "Onboarding, maandelijkse rapportage en upsell — uw klanten worden uitstekend verzorgd zonder extra handwerk. Meer loyaliteit, minder churn.",
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
    <section id="diensten" className="bg-[#0A0A0A] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#FF6B35] text-sm font-semibold tracking-widest uppercase mb-4 block">
            Onze Diensten
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
            Drie systemen,{" "}
            <span className="text-[#FF6B35]">één volledig proces</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Elk pakket bouwt voort op het vorige. Samen vormen ze een complete,
            autonome sales machine voor uw bedrijf.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {diensten.map((dienst, index) => (
            <div
              key={dienst.title}
              className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl p-8 hover:border-[#FF6B35]/50 transition-colors duration-300 group"
            >
              {/* Number */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 bg-[#FF6B35]/10 rounded-lg flex items-center justify-center text-[#FF6B35] group-hover:bg-[#FF6B35] group-hover:text-white transition-colors duration-300">
                  {dienst.icon}
                </div>
                <span className="text-[#2A2A2A] text-5xl font-black group-hover:text-[#FF6B35]/20 transition-colors duration-300">
                  0{index + 1}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-3">
                {dienst.title}
              </h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                {dienst.description}
              </p>

              <ul className="space-y-2.5">
                {dienst.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2.5">
                    <svg
                      className="w-4 h-4 text-[#FF6B35] flex-shrink-0"
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
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#FF6B35] hover:bg-[#e55a25] text-white px-8 py-4 rounded font-semibold text-base transition-colors duration-200"
          >
            Bespreek uw situatie
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
