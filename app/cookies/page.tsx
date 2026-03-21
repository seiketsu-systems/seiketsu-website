import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Cookiebeleid — Seiketsu Systems",
  description: "Cookiebeleid van Seiketsu Systems.",
};

export default function CookiesPage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen bg-[#0A0A0A] pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h1 className="text-4xl font-black text-white mb-3">
              Cookiebeleid
            </h1>
            <p className="text-gray-500 text-sm">
              Laatst bijgewerkt: 1 maart 2026
            </p>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-bold text-white mb-3">
                1. Wat zijn cookies?
              </h2>
              <p className="text-gray-400 leading-relaxed">
                Cookies zijn kleine tekstbestanden die door een website op uw
                apparaat worden opgeslagen wanneer u de website bezoekt. Ze
                worden gebruikt om informatie op te slaan over uw bezoek, zodat
                de website beter kan functioneren en u een betere
                gebruikerservaring krijgt.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">
                2. Welke cookies gebruiken wij?
              </h2>
              <div className="space-y-4">
                <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg p-4">
                  <h3 className="text-white font-semibold mb-2">
                    Functionele cookies (noodzakelijk)
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Deze cookies zijn noodzakelijk voor het correct
                    functioneren van de website. Zonder deze cookies kunnen
                    bepaalde onderdelen niet goed werken. Ze worden niet gebruikt
                    voor marketingdoeleinden en vereisen geen toestemming.
                  </p>
                  <div className="mt-3 grid grid-cols-3 gap-2 text-xs">
                    <span className="text-gray-500 font-medium">Cookie</span>
                    <span className="text-gray-500 font-medium">Doel</span>
                    <span className="text-gray-500 font-medium">Bewaartijd</span>
                    <span className="text-gray-300">sessie</span>
                    <span className="text-gray-400">Sessiemanagement</span>
                    <span className="text-gray-400">Sessie</span>
                  </div>
                </div>

                <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg p-4">
                  <h3 className="text-white font-semibold mb-2">
                    Analytische cookies (optioneel)
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Wij gebruiken Google Analytics om te begrijpen hoe
                    bezoekers onze website gebruiken. De informatie is
                    geanonimiseerd en wordt niet gekoppeld aan individuele
                    personen. U kunt hiervoor toestemming weigeren.
                  </p>
                  <div className="mt-3 grid grid-cols-3 gap-2 text-xs">
                    <span className="text-gray-500 font-medium">Cookie</span>
                    <span className="text-gray-500 font-medium">Doel</span>
                    <span className="text-gray-500 font-medium">Bewaartijd</span>
                    <span className="text-gray-300">_ga</span>
                    <span className="text-gray-400">Gebruiksanalyse</span>
                    <span className="text-gray-400">2 jaar</span>
                    <span className="text-gray-300">_ga_*</span>
                    <span className="text-gray-400">Sessies bijhouden</span>
                    <span className="text-gray-400">2 jaar</span>
                  </div>
                </div>

                <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg p-4">
                  <h3 className="text-white font-semibold mb-2">
                    Marketing cookies (optioneel)
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Wij kunnen cookies van derden gebruiken voor retargeting en
                    het meten van de effectiviteit van onze advertenties. Deze
                    cookies worden uitsluitend geplaatst na uw toestemming.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">
                3. Cookies beheren
              </h2>
              <p className="text-gray-400 leading-relaxed">
                U kunt uw cookievoorkeuren te allen tijde aanpassen via de
                cookie-instellingen in uw browser. Hieronder vindt u
                instructies voor de meest gebruikte browsers:
              </p>
              <ul className="text-gray-400 mt-3 space-y-1 list-disc list-inside text-sm">
                <li>Chrome: Instellingen &rarr; Privacy en beveiliging &rarr; Cookies</li>
                <li>Firefox: Voorkeuren &rarr; Privacy &amp; Beveiliging</li>
                <li>Safari: Voorkeuren &rarr; Privacy</li>
                <li>Edge: Instellingen &rarr; Cookies en sitemachtigingen</li>
              </ul>
              <p className="text-gray-400 leading-relaxed mt-3">
                Let op: het blokkeren van bepaalde cookies kan de
                functionaliteit van onze website beïnvloeden.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">
                4. Wijzigingen in dit cookiebeleid
              </h2>
              <p className="text-gray-400 leading-relaxed">
                Wij behouden het recht dit cookiebeleid te wijzigen. Wijzigingen
                worden op deze pagina gepubliceerd met een nieuwe
                &apos;Laatste bijgewerkt&apos;-datum. Wij raden u aan dit beleid
                periodiek te raadplegen.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">5. Contact</h2>
              <p className="text-gray-400 leading-relaxed">
                Heeft u vragen over ons cookiebeleid? Neem dan contact op via{" "}
                <a
                  href="mailto:info@seiketsu-systems.nl"
                  className="text-[#FF6B35] hover:underline"
                >
                  info@seiketsu-systems.nl
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
