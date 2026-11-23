import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onRequestRfq: () => void;
}

const NAV_LINKS = [
  { label: 'Business Solutions', href: '#solusi-bisnis' },
  { label: 'ERP Ecosystem', href: '#ekosistem-erp' },
  { label: 'How It Works', href: '#cara-kerja' },
  { label: 'Legal Compliance', href: '#legalitas' },
];

export default function Navbar({ onRequestRfq }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-[68px] max-w-[1200px] items-center justify-between gap-8 px-6">
        <a
          href="#top"
          className="flex shrink-0 items-center whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#155799]"
          aria-label="PT DomestiQ Hub Indonesia — Home"
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
            <span className="font-display text-lg font-extrabold tracking-tight text-[#0B2C4D]">
              DQH — PT DomestiQ Hub Indonesia
            </span>
          )}
        </a>

        <nav
          aria-label="Primary Navigation"
          className="hidden items-center gap-7 md:flex"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap shrink-0 text-sm font-medium text-slate-600 transition-colors duration-150 hover:text-[#0B2C4D] hover:underline hover:decoration-[#E5B23A] hover:decoration-2 hover:underline-offset-8 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#155799]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <button
            type="button"
            onClick={onRequestRfq}
            className="hidden min-h-[40px] cursor-pointer items-center justify-center whitespace-nowrap shrink-0 rounded-lg bg-[#E5B23A] px-5 py-2 font-display text-sm font-bold text-[#0B2C4D] transition-colors duration-150 hover:bg-[#d8a42b] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B2C4D] sm:inline-flex"
          >
            Request Quote / RFQ
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-lg border border-slate-200 text-[#0B2C4D] transition-colors hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#155799] md:hidden"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-slate-200 bg-white px-6 py-4 md:hidden">
          <nav aria-label="Mobile Navigation" className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="flex min-h-[44px] items-center rounded-lg px-2 text-sm font-medium text-slate-700 transition-colors hover:bg-[#F3F6FA] hover:text-[#0B2C4D]"
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onRequestRfq();
              }}
              className="mt-2 flex min-h-[44px] w-full cursor-pointer items-center justify-center rounded-lg bg-[#E5B23A] px-5 py-2.5 font-display text-sm font-bold text-[#0B2C4D] transition-colors hover:bg-[#d8a42b]"
            >
              Request Quote / RFQ
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
