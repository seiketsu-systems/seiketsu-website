import Link from "next/link";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden">
      {/* Gradient background with depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35] via-[#e55a25] to-[#CC5529]" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%20256%20256%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cfilter%20id%3D%22n%22%3E%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%220.9%22%20numOctaves%3D%224%22%20stitchTiles%3D%22stitch%22%2F%3E%3C%2Ffilter%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20filter%3D%22url(%23n)%22%20opacity%3D%221%22%2F%3E%3C%2Fsvg%3E')] opacity-[0.03]" />

      {/* Decorative orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/[0.05] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-black/[0.1] rounded-full blur-[80px] pointer-events-none" />

      <div className="relative py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
            Klaar om te starten?
          </h2>
          <p className="text-white/80 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Boek nu uw gratis strategische audit van 30 minuten. Geen
            verplichtingen. Wij laten u zien hoeveel leads u nu verliest en hoe
            we dat oplossen.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white hover:bg-gray-50 text-[#FF6B35] px-8 py-4 rounded-xl font-bold text-base transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 group"
            >
              Plan nu uw gratis audit
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
            <a
              href="tel:+319701025988"
              className="inline-flex items-center justify-center bg-transparent border-2 border-white/30 hover:border-white/60 hover:bg-white/[0.05] text-white px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300"
            >
              <svg
                className="mr-2 w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Bel direct
            </a>
          </div>

          <p className="text-white/50 text-sm mt-10">
            Gemiddelde reactietijd: &lt; 2 uur op werkdagen
          </p>
        </div>
      </div>
    </section>
  );
}
