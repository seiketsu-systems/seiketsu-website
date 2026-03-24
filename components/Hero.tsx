import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#0A0A0A] overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="orb orb-1" aria-hidden="true" />
      <div className="orb orb-2" aria-hidden="true" />
      <div className="orb orb-3" aria-hidden="true" />

      {/* Dot pattern overlay */}
      <div
        className="absolute inset-0 dot-pattern opacity-30 pointer-events-none"
        aria-hidden="true"
      />

      {/* Top gradient fade */}
      <div
        className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#0A0A0A] to-transparent z-[1] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 glass rounded-full px-5 py-2.5 mb-10">
            <span className="relative w-2 h-2 bg-[#FF6B35] rounded-full">
              <span className="absolute inset-0 bg-[#FF6B35] rounded-full animate-ping opacity-75" />
            </span>
            <span className="text-gray-300 text-sm font-medium tracking-wide">
              AI Sales Automatisering voor NL MKB
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.08] mb-7 tracking-tight">
            Stop met leads verliezen{" "}
            <span className="gradient-text-hero">
              door trage opvolging
            </span>
          </h1>

          {/* Subline */}
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl leading-relaxed">
            Wij automatiseren uw sales met AI — meer afspraken, minder
            handwerk, vanaf dag 1. Uw klanten worden binnen seconden opgevolgd,
            niet binnen dagen.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="btn-premium inline-flex items-center justify-center bg-[#FF6B35] hover:bg-[#e55a25] text-white px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300 group"
            >
              Plan Gratis Audit
              <svg
                className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
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
            <Link
              href="#diensten"
              className="inline-flex items-center justify-center bg-transparent border border-white/[0.08] hover:border-[#FF6B35]/50 hover:bg-white/[0.02] text-white px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300"
            >
              Bekijk Diensten
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center gap-8 mt-14 pt-8 border-t border-white/[0.06]">
            {[
              "Binnen 14 dagen live",
              "Geen technische kennis nodig",
              "Vaste maandprijs, geen verrassingen",
            ].map((text) => (
              <div key={text} className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#FF6B35]/10 flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-[#FF6B35]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-gray-400 text-sm">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-gray-500 text-xs tracking-[0.2em] uppercase font-medium">
          Scroll
        </span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-[#FF6B35] to-transparent" />
      </div>

      {/* Bottom gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent pointer-events-none z-[1]"
        aria-hidden="true"
      />
    </section>
  );
}
