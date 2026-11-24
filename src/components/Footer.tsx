import { useState } from 'react';
import { ExternalLink } from 'lucide-react';

const FOOTER_LINKS = [
  { label: 'Business Solutions', href: '#solusi-bisnis' },
  { label: 'ERP Ecosystem', href: '#ekosistem-erp' },
  { label: 'How It Works', href: '#cara-kerja' },
  { label: 'Legal Compliance', href: '#legalitas' },
  { label: 'Request Quote', href: '#penawaran' },
];

const INTERNAL_SYSTEM_URL = 'https://gen-lang-client-0621052252.web.app/';

export default function Footer() {
  const [logoError, setLogoError] = useState(false);

  return (
    <footer className="border-t border-[#E2E8F0] bg-white">
      <div className="mx-auto max-w-[1200px] px-6 py-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <a
            href="#top"
            className="inline-flex shrink-0 items-center"
            aria-label="Back to top — PT DomestiQ Hub Indonesia"
          >
            {!logoError ? (
              <img
                src={`${import.meta.env.BASE_URL}assets/aistudio/Screenshot_2026-11-23_103501_21c89ab0.png`}
                alt="DQH — PT DomestiQ Hub Indonesia"
                className="h-9 w-auto object-contain"
                referrerPolicy="no-referrer"
                onError={() => setLogoError(true)}
              />
            ) : (
              <span className="font-display text-base font-extrabold text-[#0B2C4D]">
                DQH — PT DomestiQ Hub Indonesia
              </span>
            )}
          </a>

          <nav aria-label="Footer Navigation" className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="whitespace-nowrap text-sm font-medium text-slate-600 transition-colors hover:text-[#0B2C4D]"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-8 flex flex-col justify-between gap-3 border-t border-slate-100 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center">
          <p>© 2026 PT DomestiQ Hub Indonesia. All Rights Reserved.</p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span>General Supplier &amp; Integrated ERP Solutions · Bekasi Regency, West Java</span>
            <span aria-hidden="true" className="hidden text-slate-300 sm:inline">
              ·
            </span>
            <a
              href={INTERNAL_SYSTEM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 whitespace-nowrap shrink-0 font-medium text-[#155799] transition-colors hover:text-[#0B2C4D] hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#155799]"
            >
              <span>Internal System</span>
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
