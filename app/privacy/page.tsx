import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacybeleid — Seiketsu Systems",
  description: "Privacybeleid van Seiketsu Systems conform de AVG/GDPR.",
};

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen bg-[#0A0A0A] pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h1 className="text-4xl font-black text-white mb-3">
              Privacybeleid
            </h1>
            <p className="text-gray-500 text-sm">
              Laatst bijgewerkt: 1 maart 2026
            </p>
          </div>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-xl font-bold text-white mb-3">
                1. Wie zijn wij?
              </h2>
              <p className="text-gray-400 leading-relaxed">
                Seiketsu Systems is gevestigd aan het Verdunplein 1 te
                Eindhoven en ingeschreven bij de Kamer van Koophandel. Wij
                bieden AI-gedreven sales automatisering voor het Nederlandse
                MKB. U kunt ons bereiken via{" "}
                <a
                  href="mailto:info@seiketsu-systems.nl"
                  className="text-[#FF6B35] hover:underline"
                >
                  info@seiketsu-systems.nl
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">
                2. Welke persoonsgegevens verwerken wij?
              </h2>
              <p className="text-gray-400 leading-relaxed mb-3">
                Wij verwerken persoonsgegevens die u zelf aan ons verstrekt,
                waaronder:
              </p>
              <ul className="text-gray-400 space-y-2 list-disc list-inside">
                <li>Naam en contactgegevens (e-mail, telefoonnummer)</li>
                <li>Bedrijfsnaam en -gegevens</li>
                <li>
                  Gegevens die u invult via ons contactformulier of
                  boekingssysteem
                </li>
                <li>Communicatiegegevens (e-mails, berichten)</li>
                <li>
                  Technische gegevens (IP-adres, browser, bezoekgedrag op onze
                  website)
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">
                3. Waarom verwerken wij uw gegevens?
              </h2>
              <p className="text-gray-400 leading-relaxed mb-3">
                Wij verwerken uw persoonsgegevens voor de volgende doeleinden:
              </p>
              <ul className="text-gray-400 space-y-2 list-disc list-inside">
                <li>
                  Het uitvoeren van de overeenkomst (dienstverlening,
                  automatiseringen bouwen)
                </li>
                <li>
                  Het beantwoorden van uw vragen en verzoeken (gerechtvaardigd
                  belang)
                </li>
                <li>
                  Het verbeteren van onze website en diensten (gerechtvaardigd
                  belang)
                </li>
                <li>Het voldoen aan wettelijke verplichtingen</li>
                <li>
                  Het versturen van relevante informatie over onze diensten (met
                  uw toestemming)
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">
                4. Hoe lang bewaren wij uw gegevens?
              </h2>
              <p className="text-gray-400 leading-relaxed">
                Wij bewaren uw persoonsgegevens niet langer dan noodzakelijk
                voor het doel waarvoor zij zijn verzameld. Klantgegevens worden
                bewaard zolang de overeenkomst loopt en maximaal 7 jaar
                daarna (fiscale bewaarplicht). Gegevens van contactformulieren
                zonder vervolgrelatie worden na 1 jaar verwijderd.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">
                5. Delen wij uw gegevens?
              </h2>
              <p className="text-gray-400 leading-relaxed">
                Wij delen uw gegevens uitsluitend met derden die noodzakelijk
                zijn voor onze dienstverlening, zoals HighLevel (CRM-platform),
                Vapi (voice AI), en e-mail providers. Met alle
                verwerkers sluiten wij een verwerkersovereenkomst conform de
                AVG. Wij verkopen uw gegevens nooit aan derden.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">
                6. Uw rechten
              </h2>
              <p className="text-gray-400 leading-relaxed mb-3">
                Op grond van de AVG heeft u de volgende rechten:
              </p>
              <ul className="text-gray-400 space-y-2 list-disc list-inside">
                <li>
                  Recht op inzage — u kunt opvragen welke gegevens wij van u
                  hebben
                </li>
                <li>
                  Recht op rectificatie — u kunt onjuiste gegevens laten
                  corrigeren
                </li>
                <li>
                  Recht op verwijdering — u kunt verzoeken uw gegevens te
                  wissen
                </li>
                <li>Recht op bezwaar tegen bepaalde verwerkingen</li>
                <li>Recht op dataportabiliteit</li>
              </ul>
              <p className="text-gray-400 leading-relaxed mt-3">
                U kunt uw rechten uitoefenen door contact op te nemen via{" "}
                <a
                  href="mailto:info@seiketsu-systems.nl"
                  className="text-[#FF6B35] hover:underline"
                >
                  info@seiketsu-systems.nl
                </a>
                . Wij reageren binnen 30 dagen op uw verzoek. U heeft tevens
                het recht een klacht in te dienen bij de Autoriteit
                Persoonsgegevens (autoriteitpersoonsgegevens.nl).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">
                7. Beveiliging
              </h2>
              <p className="text-gray-400 leading-relaxed">
                Wij treffen passende technische en organisatorische maatregelen
                om uw persoonsgegevens te beveiligen. Toegang tot
                persoonsgegevens is beperkt tot medewerkers die deze gegevens
                nodig hebben voor hun werkzaamheden. Wij maken gebruik van
                versleutelde verbindingen (SSL/TLS) voor alle datatransmissie.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">
                8. Contact
              </h2>
              <p className="text-gray-400 leading-relaxed">
                Voor vragen over dit privacybeleid of uw persoonsgegevens kunt
                u contact opnemen via:
              </p>
              <div className="mt-3 text-gray-400 space-y-1">
                <p>Seiketsu Systems</p>
                <p>Verdunplein 1, Eindhoven</p>
                <p>
                  E-mail:{" "}
                  <a
                    href="mailto:info@seiketsu-systems.nl"
                    className="text-[#FF6B35] hover:underline"
                  >
                    info@seiketsu-systems.nl
                  </a>
                </p>
                <p>Telefoon: +31 9701 0259 881</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
