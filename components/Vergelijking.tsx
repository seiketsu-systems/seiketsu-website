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
    <section className="bg-[#0A0A0A] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
            Waarom kiezen voor{" "}
            <span className="text-[#FF6B35]">Seiketsu Systems</span>?
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            De meeste bureaus bouwen generieke systemen. Wij bouwen een
            volledig geautomatiseerde sales machine die autonoom werkt.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-0 max-w-4xl mx-auto rounded-xl overflow-hidden border border-[#2A2A2A]">
          {/* Andere bureaus */}
          <div className="bg-[#1A1A1A] p-8 md:p-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 rounded-full bg-[#2A2A2A] flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-gray-500"
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
              <h3 className="text-xl font-bold text-gray-400">
                Andere bureaus
              </h3>
            </div>
            <ul className="space-y-4">
              {anderen.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-gray-600 mt-0.5 flex-shrink-0"
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
                  <span className="text-gray-500">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Seiketsu Systems */}
          <div
            className="bg-[#1A1A1A] p-8 md:p-10 border-t md:border-t-0 md:border-l-2 border-[#FF6B35]"
            style={{ boxShadow: "inset 0 0 40px rgba(255,107,53,0.05)" }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 rounded-full bg-[#FF6B35] flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-white"
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
              <h3 className="text-xl font-bold text-white">
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
                  <span className="text-white font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
