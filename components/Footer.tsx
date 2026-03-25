import Link from "next/link";

const navLinks = [
  { label: "Diensten", href: "/#diensten" },
  { label: "Werkwijze", href: "/#werkwijze" },
  { label: "Prijzen", href: "/#prijzen" },
  { label: "Contact", href: "/contact" },
];

const legalLinks = [
  { label: "Privacybeleid", href: "/privacy" },
  { label: "Cookiebeleid", href: "/cookies" },
  { label: "Algemene Voorwaarden", href: "/voorwaarden" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-surface-base">
      <div className="border-t border-zinc-800" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-5">
              <span className="text-brand font-black text-xl tracking-tight">SEIKETSU</span>
              <span className="text-white font-light text-xl tracking-tight">SYSTEMS</span>
            </Link>
            <p className="text-zinc-500 text-sm leading-relaxed mb-8 max-w-sm">
              AI sales automatisering voor het Nederlandse MKB. Stop met leads
              verliezen door trage opvolging — wij regelen het.
            </p>

            <div className="space-y-3">
              <a href="mailto:info@seiketsu-systems.nl" className="flex items-center gap-2.5 text-zinc-400 hover:text-brand transition-colors duration-200 text-sm">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@seiketsu-systems.nl
              </a>
              <a href="tel:+319701025988" className="flex items-center gap-2.5 text-zinc-400 hover:text-brand transition-colors duration-200 text-sm">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +31 9701 0259 881
              </a>
              <div className="flex items-start gap-2.5 text-zinc-500 text-sm">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Verdunplein 1, Eindhoven
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-6 uppercase tracking-[0.15em]">Navigatie</h4>
            <ul className="space-y-3.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-zinc-400 hover:text-white transition-colors duration-200 text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-6 uppercase tracking-[0.15em]">Volg ons</h4>
            <a
              href="https://linkedin.com/company/seiketsu-systems"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 text-zinc-400 hover:text-brand transition-colors duration-200 text-sm mb-10"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>

            <h4 className="text-white font-bold text-sm mb-5 uppercase tracking-[0.15em]">Juridisch</h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-zinc-500 hover:text-zinc-300 transition-colors duration-200 text-xs">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-600 text-sm">&copy; {year} Seiketsu Systems. Alle rechten voorbehouden.</p>
          <p className="text-zinc-700 text-xs">KvK-registratie: Eindhoven &middot; BTW: NL (op aanvraag) &middot; AVG-compliant</p>
        </div>
      </div>
    </footer>
  );
}
