const anderen = [
  "Trage opvolging (>24 uur)",
  "Generieke automations",
  "Geen transparantie over resultaten",
  "Dure setups zonder garantie",
  "Handmatige follow-ups nodig",
  "Maandenlange implementatie",
];

const seiketsu = [
  "Binnen 14 dagen volledig live",
  "Vapi voice AI geïntegreerd",
  "32-staps lifecycle tracking",
  "Vaste maandprijs, geen verrassingen",
  "100% geautomatiseerde opvolging",
  "Persoonlijke go-live begeleiding",
];

export default function Vergelijking() {
  return (
    <section className="relative bg-[#0A0A0A] py-24 md:py-32 overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF6B35]/[0.03] rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-[#FF6B35] text-xs font-semibold tracking-[0.2em] uppercase mb-4 block">
            De Vergelijking
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-5">
            Waarom kiezen voor{" "}
            <span className="gradient-text">Seiketsu Systems</span>?
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            De meeste bureaus bouwen generieke systemen. Wij bouwen een
            volledig geautomatiseerde sales machine die autonoom werkt.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-0 max-w-4xl mx-auto rounded-2xl overflow-hidden border border-white/[0.06]">
          {/* Andere bureaus */}
          <div className="bg-[#111111] p-8 md:p-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-white/[0.04] flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-display font-bold text-gray-400">
                Andere bureaus
              </h3>
            </div>
            <ul className="space-y-4">
              {anderen.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-gray-600/60 mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  <span className="text-gray-500 text-[15px]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Seiketsu Systems */}
          <div className="relative bg-[#111111] p-8 md:p-10 border-t md:border-t-0 md:border-l-2 border-[#FF6B35]">
            {/* Inner glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35]/[0.04] to-transparent pointer-events-none" />

            <div className="relative">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-[#FF6B35]/10 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-[#FF6B35]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-display font-bold text-white">
                  <span className="text-[#FF6B35]">Seiketsu</span> Systems
                </h3>
              </div>
              <ul className="space-y-4">
                {seiketsu.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-[#FF6B35] mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-white font-medium text-[15px]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
