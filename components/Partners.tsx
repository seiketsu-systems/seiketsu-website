const partners = [
  { name: "WhatsApp", style: "text-green-400" },
  { name: "Google", style: "text-blue-400" },
  { name: "HighLevel", style: "text-yellow-400" },
  { name: "Stripe", style: "text-purple-400" },
  { name: "Vapi", style: "text-[#FF6B35]" },
];

export default function Partners() {
  return (
    <section className="bg-[#0A0A0A] py-12 md:py-16 border-b border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-500 text-sm font-medium tracking-widest uppercase mb-10">
          Integraties &amp; Partners
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {partners.map((partner) => (
            <div key={partner.name} className="flex items-center gap-2 group">
              <span
                className={`text-xl md:text-2xl font-black tracking-tight ${partner.style} opacity-60 group-hover:opacity-100 transition-opacity duration-200`}
              >
                {partner.name}
              </span>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-600 text-xs mt-8">
          Wij integreren naadloos met de tools die u al gebruikt
        </p>
      </div>
    </section>
  );
}
