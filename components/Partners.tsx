const partners = [
  { name: "WhatsApp", style: "text-green-400/60 hover:text-green-400" },
  { name: "Google", style: "text-blue-400/60 hover:text-blue-400" },
  { name: "HighLevel", style: "text-yellow-400/60 hover:text-yellow-400" },
  { name: "Stripe", style: "text-purple-400/60 hover:text-purple-400" },
  { name: "Vapi", style: "text-[#FF6B35]/60 hover:text-[#FF6B35]" },
  { name: "Zapier", style: "text-orange-400/60 hover:text-orange-400" },
];

export default function Partners() {
  return (
    <section className="bg-[#0A0A0A] py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-600 text-xs font-semibold tracking-[0.2em] uppercase mb-12">
          Integraties &amp; Partners
        </p>
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center gap-2 transition-all duration-300 cursor-default"
            >
              <span
                className={`text-xl md:text-2xl font-black tracking-tight transition-all duration-300 ${partner.style}`}
              >
                {partner.name}
              </span>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-600 text-xs mt-10">
          Wij integreren naadloos met de tools die u al gebruikt
        </p>
      </div>
    </section>
  );
}
