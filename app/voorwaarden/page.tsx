import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Algemene Voorwaarden — Seiketsu Systems",
  description: "Algemene Voorwaarden van Seiketsu Systems.",
};

export default function VoorwaardenPage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen bg-[#0A0A0A] pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h1 className="text-4xl font-black text-white mb-3">
              Algemene Voorwaarden
            </h1>
            <p className="text-gray-500 text-sm">
              Versie 1.0 — Ingangsdatum: 1 januari 2026
            </p>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-bold text-white mb-3">
                Artikel 1 — Definities
              </h2>
              <div className="text-gray-400 leading-relaxed space-y-2">
                <p>
                  <strong className="text-gray-300">Opdrachtnemer:</strong>{" "}
                  Seiketsu Systems, gevestigd aan het Verdunplein 1 te
                  Eindhoven, ingeschreven bij de KvK.
                </p>
                <p>
                  <strong className="text-gray-300">Opdrachtgever:</strong> De
                  natuurlijke of rechtspersoon die een overeenkomst aangaat met
                  Seiketsu Systems.
                </p>
                <p>
                  <strong className="text-gray-300">Diensten:</strong> Alle
                  door Seiketsu Systems geleverde producten en diensten,
                  waaronder AI-automatiseringen, CRM-configuraties, en
                  aanverwante werkzaamheden.
                </p>
                <p>
                  <strong className="text-gray-300">Overeenkomst:</strong> De
                  overeenkomst tussen Opdrachtnemer en Opdrachtgever, inclusief
                  alle bijlagen en aanhangsels.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">
                Artikel 2 — Toepasselijkheid
              </h2>
              <p className="text-gray-400 leading-relaxed">
                Deze algemene voorwaarden zijn van toepassing op alle
                aanbiedingen, offertes, overeenkomsten en leveringen van
                Seiketsu Systems. Afwijkingen van deze voorwaarden zijn slechts
                geldig indien uitdrukkelijk schriftelijk overeengekomen.
                Toepasselijkheid van de inkoop- of andere voorwaarden van
                Opdrachtgever wordt hierbij uitdrukkelijk van de hand gewezen.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">
                Artikel 3 — Offertes en aanbiedingen
              </h2>
              <p className="text-gray-400 leading-relaxed">
                Alle offertes van Seiketsu Systems zijn vrijblijvend en hebben
                een geldigheidsduur van 14 dagen, tenzij anders vermeld.
                Seiketsu Systems kan niet aan haar offertes worden gehouden
                indien de Opdrachtgever redelijkerwijs had kunnen begrijpen dat
                de offerte of een onderdeel daarvan een kennelijke vergissing
                of verschrijving bevat.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">
                Artikel 4 — Uitvoering van de overeenkomst
              </h2>
              <p className="text-gray-400 leading-relaxed">
                Seiketsu Systems zal de overeenkomst naar beste inzicht en
                vermogen uitvoeren. Seiketsu Systems heeft het recht bepaalde
                werkzaamheden te laten uitvoeren door derden. De toepasselijkheid
                van artikelen 7:404, 7:407 lid 2 en 7:409 van het Burgerlijk
                Wetboek wordt uitdrukkelijk uitgesloten. Opgegeven
                levertijden zijn indicatief en geven de Opdrachtgever bij
                overschrijding geen recht op schadevergoeding of ontbinding.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">
                Artikel 5 — Tarieven en betaling
              </h2>
              <p className="text-gray-400 leading-relaxed">
                Alle tarieven zijn exclusief BTW. De eenmalige setupfee is
                verschuldigd bij aanvang van de overeenkomst. Maandelijkse
                abonnementskosten zijn bij vooruitbetaling verschuldigd op de
                eerste dag van elke kalendermaand. Facturen dienen binnen 14
                dagen na factuurdatum te worden voldaan. Bij niet-tijdige
                betaling is de Opdrachtgever van rechtswege in verzuim en is
                Seiketsu Systems gerechtigd de wettelijke handelsrente in
                rekening te brengen.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">
                Artikel 6 — Abonnement en opzegging
              </h2>
              <p className="text-gray-400 leading-relaxed">
                De abonnementsovereenkomst wordt aangegaan voor onbepaalde
                tijd. Opzegging door de Opdrachtgever kan op elk moment
                plaatsvinden met inachtneming van een opzegtermijn van één (1)
                kalendermaand. Opzegging dient schriftelijk of per e-mail te
                worden gedaan via info@seiketsu-systems.nl. Seiketsu Systems
                behoudt het recht de overeenkomst met onmiddellijke ingang te
                ontbinden bij wanbetaling of grove schending van deze
                voorwaarden.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">
                Artikel 7 — Aansprakelijkheid
              </h2>
              <p className="text-gray-400 leading-relaxed">
                De aansprakelijkheid van Seiketsu Systems voor directe schade
                is beperkt tot het bedrag dat in het betreffende geval door de
                aansprakelijkheidsverzekering van Seiketsu Systems wordt
                uitgekeerd, althans tot maximaal het bedrag van de in de drie
                maanden voorafgaand aan de schadeveroorzakende gebeurtenis aan
                Opdrachtgever gefactureerde bedragen. Seiketsu Systems is
                nimmer aansprakelijk voor indirecte schade, waaronder begrepen
                gevolgschade, gederfde winst en schade door bedrijfsstagnatie.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">
                Artikel 8 — Intellectueel eigendom
              </h2>
              <p className="text-gray-400 leading-relaxed">
                Alle intellectuele eigendomsrechten op de door Seiketsu Systems
                ontwikkelde systemen, workflows en software berusten bij
                Seiketsu Systems. Opdrachtgever verkrijgt uitsluitend het recht
                de geleverde diensten te gebruiken gedurende de looptijd van de
                overeenkomst. Dit gebruiksrecht is niet overdraagbaar en niet
                sublicentieerbaar zonder voorafgaande schriftelijke toestemming
                van Seiketsu Systems.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">
                Artikel 9 — Geheimhouding
              </h2>
              <p className="text-gray-400 leading-relaxed">
                Beide partijen verplichten zich tot geheimhouding van alle
                vertrouwelijke informatie die zij in het kader van de
                overeenkomst van de andere partij ontvangen. Informatie geldt
                als vertrouwelijk als dit door de andere partij is medegedeeld
                of als dit voortvloeit uit de aard van de informatie.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">
                Artikel 10 — Toepasselijk recht en geschillen
              </h2>
              <p className="text-gray-400 leading-relaxed">
                Op alle rechtsverhoudingen waarbij Seiketsu Systems partij is,
                is uitsluitend het Nederlands recht van toepassing. Geschillen
                worden bij uitsluiting voorgelegd aan de bevoegde rechter in
                het arrondissement Oost-Brabant, tenzij dwingendrechtelijke
                bepalingen een andere rechter als bevoegd aanwijzen.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">
                Artikel 11 — Wijzigingen
              </h2>
              <p className="text-gray-400 leading-relaxed">
                Seiketsu Systems behoudt zich het recht voor deze algemene
                voorwaarden te wijzigen. Wijzigingen worden aan Opdrachtgever
                medegedeeld per e-mail, minimaal 30 dagen voor inwerkingtreding.
                Bij bezwaar heeft Opdrachtgever het recht de overeenkomst te
                beëindigen per de datum van inwerkingtreding van de wijzigingen.
              </p>
            </section>

            <div className="border-t border-[#2A2A2A] pt-6 mt-8">
              <p className="text-gray-500 text-sm">
                Seiketsu Systems — Verdunplein 1, Eindhoven —{" "}
                <a
                  href="mailto:info@seiketsu-systems.nl"
                  className="text-[#FF6B35] hover:underline"
                >
                  info@seiketsu-systems.nl
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
