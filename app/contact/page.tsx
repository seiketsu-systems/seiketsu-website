import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Gratis Audit Plannen — Seiketsu Systems",
  description:
    "Plan uw gratis strategische audit van 30 minuten. Ontdek hoeveel leads u verliest en hoe AI automatisering dat oplost.",
};

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main className="relative min-h-screen bg-[#0A0A0A] pt-28 pb-24 overflow-hidden">
        {/* Background orbs */}
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-[#FF6B35]/[0.03] rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#FF6B35]/[0.02] rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-[#FF6B35] text-xs font-semibold tracking-[0.2em] uppercase mb-4 block">
              Gratis &amp; Vrijblijvend
            </span>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-5">
              Plan uw Gratis{" "}
              <span className="gradient-text">Strategische Audit</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              In 30 minuten analyseren wij uw huidige sales- en
              opvolgingsproces. U krijgt direct inzicht in waar leads verloren
              gaan en een concreet plan om dat te stoppen.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-10 items-start">
            {/* Calendar embed */}
            <div className="lg:col-span-3">
              <div className="card-premium overflow-hidden !rounded-2xl">
                <div className="p-5 border-b border-white/[0.06] flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#FF6B35]/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-[#FF6B35]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-white font-semibold text-sm">
                    Kies een datum en tijdstip
                  </p>
                </div>
                <div className="bg-white rounded-b-2xl">
                  <iframe
                    src="https://api.leadconnectorhq.com/widget/booking/david-30m-audit"
                    style={{ width: "100%", border: "none", overflow: "hidden" }}
                    scrolling="no"
                    id="msgsndr-calendar"
                    title="Seiketsu Systems — Gratis Audit Boeken"
                    className="min-h-[700px] rounded-b-2xl"
                  />
                </div>
              </div>
            </div>

            {/* Contact info sidebar */}
            <div className="lg:col-span-2 space-y-6">
              {/* What to expect */}
              <div className="card-premium p-7 !rounded-2xl">
                <h3 className="font-display text-lg font-bold text-white mb-6">
                  Wat kunt u verwachten?
                </h3>
                <ul className="space-y-5">
                  {[
                    {
                      titel: "Analyse van uw proces",
                      tekst:
                        "We kijken samen naar uw huidige workflow en waar leads verloren gaan.",
                    },
                    {
                      titel: "Berekening van het verlies",
                      tekst:
                        "Hoeveel omzet laat u maandelijks liggen door trage opvolging?",
                    },
                    {
                      titel: "Concreet automatiseringsplan",
                      tekst:
                        "U krijgt een op maat gemaakt plan voor uw situatie.",
                    },
                    {
                      titel: "Geen verplichtingen",
                      tekst:
                        "De audit is 100% gratis en vrijblijvend. U beslist zelf of u verder wilt.",
                    },
                  ].map((item) => (
                    <li key={item.titel} className="flex items-start gap-3.5">
                      <div className="w-6 h-6 bg-gradient-to-br from-[#FF6B35] to-[#FF8F65] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-glow">
                        <svg
                          className="w-3 h-3 text-white"
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
                      <div>
                        <p className="text-white font-medium text-sm">
                          {item.titel}
                        </p>
                        <p className="text-gray-500 text-sm mt-1 leading-relaxed">
                          {item.tekst}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact info */}
              <div className="card-premium p-7 !rounded-2xl">
                <h3 className="font-display text-lg font-bold text-white mb-6">
                  Direct contact
                </h3>
                <div className="space-y-4">
                  <a
                    href="mailto:info@seiketsu-systems.nl"
                    className="flex items-center gap-3.5 text-gray-400 hover:text-[#FF6B35] transition-colors duration-300 group"
                  >
                    <div className="w-10 h-10 bg-white/[0.04] rounded-xl flex items-center justify-center group-hover:bg-[#FF6B35]/10 transition-colors duration-300">
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
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 mb-0.5">E-mail</p>
                      <p className="text-sm text-white">
                        info@seiketsu-systems.nl
                      </p>
                    </div>
                  </a>

                  <a
                    href="tel:+319701025988"
                    className="flex items-center gap-3.5 text-gray-400 hover:text-[#FF6B35] transition-colors duration-300 group"
                  >
                    <div className="w-10 h-10 bg-white/[0.04] rounded-xl flex items-center justify-center group-hover:bg-[#FF6B35]/10 transition-colors duration-300">
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
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 mb-0.5">Telefoon</p>
                      <p className="text-sm text-white">+31 9701 0259 881</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 bg-white/[0.04] rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-4 h-4 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 mb-0.5">Adres</p>
                      <p className="text-sm text-white">
                        Verdunplein 1, Eindhoven
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Guarantee */}
              <div className="relative rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35]/10 to-[#FF6B35]/[0.02]" />
                <div className="absolute inset-[1px] rounded-2xl bg-[#0A0A0A]" />
                <div className="relative p-7 border border-[#FF6B35]/20 rounded-2xl">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 bg-[#FF6B35]/10 rounded-xl flex items-center justify-center flex-shrink-0">
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
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm mb-1.5">
                        100% Vrijblijvend
                      </p>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        De strategische audit is volledig gratis. U betaalt pas
                        wanneer u besluit samen verder te gaan en helemaal
                        tevreden bent met het plan.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
