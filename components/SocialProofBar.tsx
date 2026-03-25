"use client";

import { useEffect, useRef, useState } from "react";

interface Stat {
  prefix: string;
  value: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { prefix: "", value: 300, suffix: "+", label: "Automatiseringen gebouwd" },
  { prefix: "", value: 98, suffix: "%", label: "Klanttevredenheid" },
  { prefix: "€", value: 2.3, suffix: "M+", label: "Extra omzet gegenereerd" },
  { prefix: "", value: 14, suffix: " dagen", label: "Tot go-live gemiddeld" },
];

function CountUp({ value, prefix, suffix, isVisible }: { value: number; prefix: string; suffix: string; isVisible: boolean }) {
  const [displayed, setDisplayed] = useState(0);
  const animatedRef = useRef(false);

  useEffect(() => {
    if (!isVisible || animatedRef.current) return;
    animatedRef.current = true;

    const duration = 1800;
    const steps = 60;
    const increment = value / steps;
    const stepDuration = duration / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(current + increment, value);
      setDisplayed(parseFloat(current.toFixed(value % 1 !== 0 ? 1 : 0)));
      if (step >= steps) {
        setDisplayed(value);
        clearInterval(timer);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  const display = value % 1 !== 0 ? displayed.toFixed(1) : Math.floor(displayed).toString();

  return (
    <span>
      {prefix}{display}{suffix}
    </span>
  );
}

export default function SocialProofBar() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-surface-elevated py-14 md:py-20 border-y border-zinc-800">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-mono mb-3">
                <CountUp value={stat.value} prefix={stat.prefix} suffix={stat.suffix} isVisible={isVisible} />
              </div>
              <div className="text-zinc-500 text-sm md:text-base font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
