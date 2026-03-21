import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#0A0A0A] overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#FF6B35] rounded-full blur-3xl" />
      </div>
      <div
        className="absolute bottom-0 left-0 w-1/3 h-1/2 opacity-5 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#FF6B35] rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#1A1A1A] border border-[#2A2A2A] rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 bg-[#FF6B35] rounded-full animate-pulse" />
            <span className="text-gray-400 text-sm font-medium">
              AI Sales Automatisering voor NL MKB
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
            Stop met leads verliezen{" "}
            <span className="text-[#FF6B35]">door trage opvolging</span>
          </h1>

          {/* Subline */}
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed">
            Wij automatiseren uw sales met AI — meer afspraken, minder
            handwerk, vanaf dag 1. Uw klanten worden binnen seconden opgevolgd,
            niet binnen dagen.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-[#FF6B35] hover:bg-[#e55a25] text-white px-8 py-4 rounded font-semibold text-base transition-colors duration-200"
            >
              Plan Gratis Audit
              <svg
                className="ml-2 w-4 h-4"
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
              className="inline-flex items-center justify-center bg-transparent border border-[#2A2A2A] hover:border-[#FF6B35] text-white px-8 py-4 rounded font-semibold text-base transition-colors duration-200"
            >
              Bekijk Diensten
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center gap-6 mt-12 pt-8 border-t border-[#2A2A2A]">
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-[#FF6B35]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-gray-400 text-sm">Binnen 14 dagen live</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-[#FF6B35]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-gray-400 text-sm">Geen technische kennis nodig</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-[#FF6B35]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-gray-400 text-sm">Vaste maandprijs, geen verrassingen</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-gray-500 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-0.5 h-8 bg-gradient-to-b from-[#FF6B35] to-transparent" />
      </div>
    </section>
  );
}
