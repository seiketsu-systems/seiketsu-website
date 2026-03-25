"use client";

import { useState } from "react";

const vragen = [
  {
    vraag: "Wat doet Seiketsu Systems precies?",
    antwoord: "Seiketsu Systems bouwt volledig geautomatiseerde sales- en opvolgingssystemen voor het Nederlandse MKB. Wij koppelen uw CRM (HighLevel), e-mail, SMS en voice AI (Vapi) zodat elke lead automatisch wordt opgevolgd — van het eerste contact tot het getekende contract. U hoeft niets handmatig te doen: het systeem werkt 24/7.",
  },
  {
    vraag: "Heb ik technische kennis nodig?",
    antwoord: "Absoluut niet. Wij bouwen en configureren alles voor u. U krijgt van ons een kant-en-klaar systeem dat direct werkt. Na de go-live sessie laten we u zien hoe u de belangrijkste statistieken kunt bekijken — meer hoeft u niet te weten.",
  },
  {
    vraag: "Praten mijn klanten met een AI?",
    antwoord: "In het AI Growth- en Full Suite-pakket wordt Vapi voice AI ingezet voor de eerste contactmomenten. De AI klinkt professioneel en natuurlijk, en handelt veelgestelde vragen af of plant direct een afspraak in. Klanten worden altijd correct geïnformeerd — wij zorgen voor volledige GDPR- en transparantiecompliance.",
  },
  {
    vraag: "Is mijn data veilig?",
    antwoord: "Ja. Alle data wordt opgeslagen in HighLevel CRM, een platform dat voldoet aan de Europese AVG/GDPR-wetgeving. Wij verwerken een verwerkersovereenkomst (DPA) met elke klant. Uw klantdata wordt nooit gedeeld met derden.",
  },
  {
    vraag: "Hoe lang duurt de implementatie?",
    antwoord: "De standaard implementatietijd is 14 werkdagen vanaf de start van het project. In die periode bouwen en testen wij uw volledige systeem. Na de go-live sessie werkt alles autonoom.",
  },
  {
    vraag: "Wat kost het?",
    antwoord: "We bieden drie pakketten aan: AI Starter (€297/maand + €500 setup), AI Growth (€497/maand + €500 setup) en AI Full Suite (€797/maand + €500 setup). Er is geen jaarcontract vereist — alle pakketten zijn maandelijks opzegbaar met één maand opzegtermijn.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-surface-base py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-brand text-xs font-semibold tracking-[0.2em] uppercase mb-4 block">
            Veelgestelde vragen
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5">
            Heeft u een vraag?
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Hieronder vindt u antwoorden op de meest gestelde vragen. Staat uw
            vraag er niet bij? Neem dan direct contact met ons op.
          </p>
        </div>

        <div className="space-y-3">
          {vragen.map((item, index) => (
            <div
              key={item.vraag}
              className={`rounded-xl overflow-hidden transition-all duration-200 ${
                open === index
                  ? "bg-surface-elevated border border-zinc-700"
                  : "bg-surface-elevated border border-zinc-800 hover:border-zinc-700"
              }`}
            >
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
                aria-expanded={open === index}
              >
                <span className="font-semibold text-white pr-4 text-[15px]">{item.vraag}</span>
                <div className={`flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-200 ${
                  open === index ? "bg-brand rotate-45" : "bg-zinc-800"
                }`}>
                  <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
              </button>

              <div className={`transition-all duration-200 overflow-hidden ${open === index ? "max-h-[500px]" : "max-h-0"}`}>
                <div className="px-6 pb-6">
                  <div className="h-px bg-zinc-800 mb-4" />
                  <p className="text-zinc-400 leading-relaxed text-[15px]">{item.antwoord}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
