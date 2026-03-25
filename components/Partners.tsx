const partners = [
  "WhatsApp", "Google", "HighLevel", "Stripe", "Vapi", "Zapier",
  "WhatsApp", "Google", "HighLevel", "Stripe", "Vapi", "Zapier",
];

export default function Partners() {
  return (
    <section className="bg-surface-base py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-zinc-600 text-xs font-semibold tracking-[0.2em] uppercase mb-10">
          Integraties &amp; Partners
        </p>
        <div className="relative overflow-hidden">
          <div className="flex logo-scroll gap-12 w-max">
            {partners.map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="text-zinc-600 hover:text-zinc-400 text-lg font-bold tracking-tight transition-colors duration-200 whitespace-nowrap"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
