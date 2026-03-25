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
    <section className="bg-surface-base py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-brand text-xs font-semibold tracking-[0.2em] uppercase mb-4 block">
            De Vergelijking
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5">
            Waarom kiezen voor Seiketsu Systems?
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
            De meeste bureaus bouwen generieke systemen. Wij bouwen een
            volledig geautomatiseerde sales machine die autonoom werkt.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-0 max-w-4xl mx-auto rounded-xl overflow-hidden border border-zinc-800">
          {/* Andere bureaus */}
          <div className="bg-surface-elevated p-8 md:p-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center">
                <svg className="w-5 h-5 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-zinc-400">Andere bureaus</h3>
            </div>
            <ul className="space-y-4">
              {anderen.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-zinc-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-zinc-500 text-[15px]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Seiketsu */}
          <div className="bg-surface-elevated p-8 md:p-10 border-t md:border-t-0 md:border-l-2 border-brand">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">
                <span className="text-brand">Seiketsu</span> Systems
              </h3>
            </div>
            <ul className="space-y-4">
              {seiketsu.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white font-medium text-[15px]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
