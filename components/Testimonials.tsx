const testimonials = [
  {
    metric: "Lead response: 2 weken → 5 min",
    quote: "Binnen 2 weken volledig geautomatiseerde opvolging. We missen geen lead meer. Elke nieuwe aanvraag wordt direct opgepakt en opgevolgd — ook buiten kantooruren.",
    naam: "Mark V.",
    functie: "Eigenaar Makelaardij",
    locatie: "Amsterdam",
    initiaal: "M",
  },
  {
    metric: "8 uur/week bespaard op receptiewerk",
    quote: "De AI neemt de eerste contactmomenten volledig over. Onze receptiemedewerkers hoeven zich niet meer bezig te houden met het plannen van afspraken.",
    naam: "Sandra K.",
    functie: "Praktijkhouder Tandartspraktijk",
    locatie: "Utrecht",
    initiaal: "S",
  },
  {
    metric: "40% meer afspraken in maand 1",
    quote: "Ik had nooit gedacht dat automatisering zo snel resultaat zou geven. Het systeem werkt gewoon — ik hoef er niets meer aan te doen.",
    naam: "Thomas B.",
    functie: "Business Coach",
    locatie: "Rotterdam",
    initiaal: "T",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-surface-elevated py-24 md:py-32 border-y border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-brand text-xs font-semibold tracking-[0.2em] uppercase mb-4 block">
            Klanten aan het woord
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5">
            Resultaten die voor zichzelf spreken
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
            NL MKB-ondernemers die hun sales hebben geautomatiseerd met Seiketsu Systems.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 reveal-stagger">
          {testimonials.map((testimonial) => (
            <div key={testimonial.naam} className="card p-8 flex flex-col">
              {/* Metric highlight */}
              <div className="bg-brand/10 text-brand text-sm font-semibold px-4 py-2 rounded-lg mb-6 inline-block self-start">
                {testimonial.metric}
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-brand" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-zinc-300 text-[15px] leading-relaxed mb-8 flex-grow">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-zinc-800">
                <div className="w-12 h-12 bg-brand rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  {testimonial.initiaal}
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">{testimonial.naam}</div>
                  <div className="text-zinc-500 text-sm">{testimonial.functie} · {testimonial.locatie}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
