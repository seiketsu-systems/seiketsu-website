"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: "Diensten", href: isHome ? "#diensten" : "/#diensten" },
    { label: "Werkwijze", href: isHome ? "#werkwijze" : "/#werkwijze" },
    { label: "Prijzen", href: isHome ? "#prijzen" : "/#prijzen" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0A0A0A]/80 backdrop-blur-xl border-b border-white/[0.06] shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-[#FF6B35] font-black text-xl md:text-2xl tracking-tight group-hover:text-[#FF8F65] transition-colors duration-300">
              SEIKETSU
            </span>
            <span className="text-white font-light text-xl md:text-2xl tracking-tight">
              SYSTEMS
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-lg ${
                  link.href === "/contact" && pathname === "/contact"
                    ? "text-[#FF6B35]"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {link.label}
                {link.href === "/contact" && pathname === "/contact" && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#FF6B35] rounded-full" />
                )}
              </Link>
            ))}
            <Link
              href="/contact"
              className="btn-premium ml-4 bg-[#FF6B35] hover:bg-[#e55a25] text-white px-6 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300"
            >
              Gratis Audit
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 relative z-50"
            aria-label="Menu"
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? "opacity-0 scale-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden transition-all duration-400 overflow-hidden ${
            menuOpen ? "max-h-[400px] pb-6" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-1 pt-3 border-t border-white/[0.06]">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-gray-400 hover:text-white hover:bg-white/[0.04] transition-all duration-200 text-base font-medium py-3 px-4 rounded-lg"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="btn-premium bg-[#FF6B35] hover:bg-[#e55a25] text-white px-5 py-3.5 rounded-lg font-semibold text-sm transition-all duration-300 text-center mt-3"
            >
              Gratis Audit
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
