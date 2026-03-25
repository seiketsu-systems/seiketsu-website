const results = [
  {
    metric: "40%",
    description: "meer afspraken",
    context: "Business coach, Rotterdam",
    before: "Handmatig bellen, 60% no-show",
    after: "Geautomatiseerd, 15% no-show",
  },
  {
    metric: "8 uur/week",
    description: "bespaard",
    context: "Tandartspraktijk, Utrecht",
    before: "Receptie plant handmatig",
    after: "AI plant automatisch",
  },
  {
    metric: "< 5 min",
    description: "responstijd op leads",
    context: "Makelaardij, Amsterdam",
    before: "Gemiddeld 26 uur responstijd",
    after: "Gemiddeld 3 minuten responstijd",
  },
];

export default function ResultsSection() {
  return (
    <section className="bg-surface-base py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 reveal">
          <span className="text-brand text-xs font-semibold tracking-[0.2em] uppercase mb-4 block">
            Resultaten
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5">
            Resultaten bij onze klanten
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Concrete cijfers van MKB-bedrijven die hun sales hebben
            geautomatiseerd met Seiketsu Systems.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 reveal-stagger">
          {results.map((result) => (
            <div key={result.metric} className="card p-8">
              <div className="mb-6">
                <span className="text-4xl md:text-5xl font-bold text-brand font-mono">
                  {result.metric}
                </span>
                <p className="text-white font-medium mt-1">{result.description}</p>
                <p className="text-zinc-500 text-sm mt-1">{result.context}</p>
              </div>

              <div className="space-y-3 pt-6 border-t border-zinc-800">
                <div className="flex items-start gap-3">
                  <span className="text-zinc-600 text-xs font-semibold uppercase tracking-wider mt-0.5 w-12 flex-shrink-0">Voor</span>
                  <span className="text-zinc-500 text-sm">{result.before}</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-brand text-xs font-semibold uppercase tracking-wider mt-0.5 w-12 flex-shrink-0">Na</span>
                  <span className="text-white text-sm">{result.after}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
