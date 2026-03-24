'use client';
import Link from "next/link";
import { useEffect, useRef } from "react";

function AnimatedCounter({ target, duration = 2000 }: { target: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let start = 0;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      el.textContent = Math.floor(progress * target).toString();
      if (progress < 1) requestAnimationFrame(step);
    };
    const timer = setTimeout(() => requestAnimationFrame(step), 600);
    return () => clearTimeout(timer);
  }, [target, duration]);
  return <span ref={ref}>0</span>;
}

const leads = [
  { name: "Tandarts Utrecht", time: "2m geleden", status: "Gereageerd" },
  { name: "Fysiotherapie Amsterdam", time: "14m geleden", status: "In gesprek" },
  { name: "Makelaar Den Haag", time: "1u geleden", status: "Afspraak" },
];

const bars = [40, 65, 50, 80, 55, 90, 75];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#0A0A0A] overflow-hidden tech-grid">
      {/* Orbs */}
      <div className="orb orb-1" aria-hidden="true" />
      <div className="orb orb-2" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT: Copy */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-3 glass rounded-full px-5 py-2.5 mb-8">
              <span className="relative w-2 h-2 bg-[#FF6B35] rounded-full">
                <span className="absolute inset-0 bg-[#FF6B35] rounded-full animate-ping opacity-75" />
              </span>
              <span className="text-gray-300 text-sm font-medium tracking-wide">AI Sales Automatisering voor NL MKB</span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6 tracking-tight">
              Stop met leads<br />
              <span className="gradient-text-hero">verliezen door</span><br />
              <span className="gradient-text-hero">trage opvolging</span>
            </h1>

            {/* Subline */}
            <p className="text-lg text-gray-400 mb-10 max-w-xl leading-relaxed">
              Wij automatiseren uw sales met AI — meer afspraken, minder handwerk, vanaf dag 1. Leads worden binnen seconden opgevolgd, niet binnen dagen.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/contact"
                className="btn-premium inline-flex items-center justify-center bg-[#FF6B35] hover:bg-[#e55a25] text-white px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300 group"
              >
                Plan Gratis Audit
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="#diensten"
                className="inline-flex items-center justify-center border border-white/10 hover:border-[#FF6B35]/50 text-white px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300 hover:bg-white/[0.02]"
              >
                Bekijk Diensten
              </Link>
            </div>

            {/* Trust */}
            <div className="flex flex-wrap gap-6 pt-6 border-t border-white/[0.06]">
              {["Binnen 14 dagen live", "Geen technische kennis", "Vaste maandprijs"].map((t) => (
                <div key={t} className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-[#FF6B35]/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-2.5 h-2.5 text-[#FF6B35]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-400 text-sm">{t}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Animated Dashboard Panel */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="dashboard-panel relative">
              {/* Glow behind panel */}
              <div className="absolute inset-0 bg-[#FF6B35]/10 rounded-2xl blur-3xl scale-110 pointer-events-none" />

              {/* Panel */}
              <div className="relative bg-[#111111] border border-white/[0.08] rounded-2xl overflow-hidden shadow-2xl w-[380px]">

                {/* Panel header */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-[#0D0D0D]">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                  <span className="ml-3 text-gray-500 text-xs font-medium">Seiketsu AI Dashboard</span>
                  <div className="ml-auto flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#FF6B35] animate-pulse" />
                    <span className="text-[#FF6B35] text-xs">Live</span>
                  </div>
                </div>

                {/* Metrics row */}
                <div className="grid grid-cols-3 gap-px bg-white/[0.04] border-b border-white/[0.06]">
                  {[
                    { label: "Leads", value: null, counter: true },
                    { label: "Afspraken", value: "24" },
                    { label: "Conversie", value: "18%" },
                  ].map((m, i) => (
                    <div key={i} className="bg-[#111111] px-3 py-3 text-center">
                      <div className="text-xl font-bold text-white">
                        {m.counter ? <AnimatedCounter target={127} /> : m.value}
                      </div>
                      <div className="text-gray-500 text-xs mt-0.5">{m.label}</div>
                    </div>
                  ))}
                </div>

                {/* Mini bar chart */}
                <div className="px-4 py-3 border-b border-white/[0.06]">
                  <div className="text-gray-500 text-xs mb-2">Leads per dag (week)</div>
                  <div className="flex items-end gap-1.5 h-12">
                    {bars.map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-[#FF6B35]/20 rounded-sm relative overflow-hidden"
                        style={{ height: `${h}%` }}
                      >
                        <div
                          className="absolute bottom-0 left-0 right-0 bg-[#FF6B35] rounded-sm bar-animate"
                          style={{
                            height: `${h}%`,
                            animationDelay: `${i * 0.1 + 0.8}s`,
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Lead cards */}
                <div className="px-4 py-3 space-y-2">
                  <div className="text-gray-500 text-xs mb-2">Recente leads</div>
                  {leads.map((lead, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between bg-[#0D0D0D] rounded-lg px-3 py-2 lead-card-animate border border-white/[0.04]"
                      style={{ animationDelay: `${i * 0.2 + 1.2}s` }}
                    >
                      <div>
                        <div className="text-white text-xs font-medium">{lead.name}</div>
                        <div className="text-gray-600 text-xs">{lead.time}</div>
                      </div>
                      <span className="text-[#FF6B35] text-xs font-medium bg-[#FF6B35]/10 px-2 py-0.5 rounded-full">
                        {lead.status}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Bottom status bar */}
                <div className="px-4 py-2.5 bg-[#0D0D0D] border-t border-white/[0.06] flex items-center gap-2">
                  <div className="flex-1 h-1 bg-white/[0.06] rounded-full overflow-hidden">
                    <div className="h-full bg-[#FF6B35] rounded-full progress-animate" style={{ width: '73%' }} />
                  </div>
                  <span className="text-gray-500 text-xs">73% target bereikt</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <span className="text-gray-500 text-xs tracking-[0.2em] uppercase">Scroll</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-[#FF6B35] to-transparent" />
      </div>
    </section>
  );
}
