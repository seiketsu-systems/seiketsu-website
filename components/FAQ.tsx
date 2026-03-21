"use client";

import { useState } from "react";

const vragen = [
  {
    vraag: "Wat doet Seiketsu Systems precies?",
    antwoord:
      "Seiketsu Systems bouwt volledig geautomatiseerde sales- en opvolgingssystemen voor het Nederlandse MKB. Wij koppelen uw CRM (HighLevel), e-mail, SMS en voice AI (Vapi) zodat elke lead automatisch wordt opgevolgd — van het eerste contact tot het getekende contract. U hoeft niets handmatig te doen: het systeem werkt 24/7, ook buiten uw kantooruren.",
  },
  {
    vraag: "Heb ik technische kennis nodig?",
    antwoord:
      "Absoluut niet. Wij bouwen en configureren alles voor u. U krijgt van ons een kant-en-klaar systeem dat direct werkt. Na de go-live sessie laten we u zien hoe u de belangrijkste statistieken kunt bekijken — meer hoeft u niet te weten. Eventuele aanpassingen of optimalisaties voeren wij voor u uit als onderdeel van uw maandabonnement.",
  },
  {
    vraag: "Praten mijn klanten met een AI?",
    antwoord:
      "In het AI Growth- en Full Suite-pakket wordt Vapi voice AI ingezet voor de eerste contactmomenten. De AI klinkt professioneel en natuurlijk, en handelt veelgestelde vragen af of plant direct een afspraak in. Klanten worden altijd correct geïnformeerd dat ze communiceren met een geautomatiseerd systeem — wij zorgen voor volledige GDPR- en transparantiecompliance. U kunt zelf bepalen hoe en wanneer de AI wordt ingezet.",
  },
  {
    vraag: "Is mijn data veilig?",
    antwoord:
      "Ja. Alle data wordt opgeslagen in HighLevel CRM, een platform dat voldoet aan de Europese AVG/GDPR-wetgeving. Wij verwerken een verwerkersovereenkomst (DPA) met elke klant. Uw klantdata wordt nooit gedeeld met derden en is altijd toegankelijk voor u als eigenaar. Wij werken uitsluitend met platforms die ISO 27001-gecertificeerd zijn of vergelijkbare beveiligingsstandaarden hanteren.",
  },
  {
    vraag: "Hoe lang duurt de implementatie?",
    antwoord:
      "De standaard implementatietijd is 14 werkdagen vanaf de start van het project. In die periode bouwen en testen wij uw volledige systeem. Na de go-live sessie werkt alles autonoom. In uitzonderlijke gevallen — bijvoorbeeld bij complexe koppelingen met bestaande systemen — kan dit uitlopen naar maximaal 21 dagen. We communiceren dit altijd transparant van tevoren.",
  },
  {
    vraag: "Wat kost het?",
    antwoord:
      "We bieden drie pakketten aan: AI Starter (€297/maand + €500 setup), AI Growth (€497/maand + €500 setup) en AI Full Suite (€797/maand + €500 setup). Er is geen jaarcontract vereist — alle pakketten zijn maandelijks opzegbaar met één maand opzegtermijn. De gratis strategische audit van 30 minuten is altijd de eerste stap, zodat u precies weet welk pakket bij uw situatie past.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-[#0A0A0A] py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#FF6B35] text-sm font-semibold tracking-widest uppercase mb-4 block">
            Veelgestelde vragen
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
            Heeft u een <span className="text-[#FF6B35]">vraag</span>?
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Hieronder vindt u antwoorden op de meest gestelde vragen. Staat uw
            vraag er niet bij? Neem dan direct contact met ons op.
          </p>
        </div>

        <div className="space-y-3">
          {vragen.map((item, index) => (
            <div
              key={item.vraag}
              className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-[#222222] transition-colors duration-200"
                aria-expanded={open === index}
              >
                <span className="font-semibold text-white pr-4">
                  {item.vraag}
                </span>
                <div
                  className={`flex-shrink-0 w-6 h-6 rounded-full border border-[#2A2A2A] flex items-center justify-center transition-all duration-300 ${
                    open === index
                      ? "bg-[#FF6B35] border-[#FF6B35] rotate-45"
                      : ""
                  }`}
                >
                  <svg
                    className="w-3 h-3 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </div>
              </button>

              <div
                className={`transition-all duration-300 overflow-hidden ${
                  open === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-6 border-t border-[#2A2A2A]">
                  <p className="text-gray-400 leading-relaxed pt-4">
                    {item.antwoord}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
