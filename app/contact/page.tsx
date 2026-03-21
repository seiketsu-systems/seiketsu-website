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
      <main className="min-h-screen bg-[#0A0A0A] pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-[#FF6B35] text-sm font-semibold tracking-widest uppercase mb-4 block">
              Gratis &amp; Vrijblijvend
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
              Plan uw Gratis{" "}
              <span className="text-[#FF6B35]">Strategische Audit</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              In 30 minuten analyseren wij uw huidige sales- en
              opvolgingsproces. U krijgt direct inzicht in waar leads verloren
              gaan en een concreet plan om dat te stoppen.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Calendar embed */}
            <div className="lg:col-span-3">
              <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl overflow-hidden">
                <div className="p-4 border-b border-[#2A2A2A]">
                  <p className="text-white font-semibold text-sm">
                    📅 Kies een datum en tijdstip
                  </p>
                </div>
                <iframe
                  src="https://api.leadconnectorhq.com/widget/booking/david-30m-audit"
                  style={{ width: "100%", border: "none", overflow: "hidden" }}
                  scrolling="no"
                  id="msgsndr-calendar"
                  title="Seiketsu Systems — Gratis Audit Boeken"
                  className="min-h-[700px]"
                />
              </div>
            </div>

            {/* Contact info sidebar */}
            <div className="lg:col-span-2 space-y-6">
              {/* What to expect */}
              <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl p-6">
                <h3 className="text-white font-bold text-lg mb-5">
                  Wat kunt u verwachten?
                </h3>
                <ul className="space-y-4">
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
                    <li key={item.titel} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-[#FF6B35] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
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
                        <p className="text-gray-500 text-xs mt-0.5">
                          {item.tekst}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact info */}
              <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl p-6">
                <h3 className="text-white font-bold text-lg mb-5">
                  Direct contact
                </h3>
                <div className="space-y-4">
                  <a
                    href="mailto:info@seiketsu-systems.nl"
                    className="flex items-center gap-3 text-gray-400 hover:text-[#FF6B35] transition-colors duration-200"
                  >
                    <div className="w-9 h-9 bg-[#0A0A0A] rounded-lg flex items-center justify-center">
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
                    className="flex items-center gap-3 text-gray-400 hover:text-[#FF6B35] transition-colors duration-200"
                  >
                    <div className="w-9 h-9 bg-[#0A0A0A] rounded-lg flex items-center justify-center">
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

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-[#0A0A0A] rounded-lg flex items-center justify-center flex-shrink-0">
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
              <div className="bg-[#FF6B35]/10 border border-[#FF6B35]/30 rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-[#FF6B35] flex-shrink-0 mt-0.5"
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
                  <div>
                    <p className="text-white font-semibold text-sm mb-1">
                      100% Vrijblijvend
                    </p>
                    <p className="text-gray-400 text-xs leading-relaxed">
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
      </main>
      <Footer />
    </>
  );
}
