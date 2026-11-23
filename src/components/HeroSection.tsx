import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onConsultClick: () => void;
}

export default function HeroSection({ onConsultClick }: HeroSectionProps) {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-slate-200/80 bg-gradient-to-b from-white via-white to-[#F3F6FA]"
    >
      <div className="mx-auto max-w-[1200px] px-6 py-16 sm:py-24 lg:py-28">
        <div className="max-w-4xl">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-[2px] w-8 bg-[#E5B23A]" aria-hidden="true" />
            <span className="text-sm font-semibold tracking-tight text-[#155799]">
              General Supplier &amp; Integrated ERP Solutions
            </span>
          </div>

          <h1
            className="font-display font-extrabold tracking-tight text-[#0B2C4D]"
            style={{
              fontSize: 'clamp(2.25rem, 4.1vw, 3.65rem)',
              lineHeight: 1.1,
              textWrap: 'balance',
            }}
          >
            One Gateway for Corporate Procurement &amp; Integrated ERP Operations.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            PT DomestiQ Hub Indonesia unites multi-category General Supplier capabilities with
            Enterprise Resource Planning (ERP) systems so your procurement, inventory control, and
            supply chain operations run faster, accurately, and measurably.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={onConsultClick}
              className="inline-flex min-h-[48px] cursor-pointer items-center justify-center gap-2.5 whitespace-nowrap shrink-0 rounded-lg bg-[#E5B23A] px-6 py-3 font-display text-sm font-bold text-[#0B2C4D] transition-colors duration-150 hover:bg-[#d8a42b] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B2C4D]"
            >
              <span>Consult &amp; Request Quote</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>

            <a
              href="#solusi-bisnis"
              className="inline-flex min-h-[48px] items-center justify-center whitespace-nowrap shrink-0 rounded-lg border border-[#0B2C4D]/25 bg-white px-6 py-3 font-display text-sm font-semibold text-[#0B2C4D] transition-colors duration-150 hover:border-[#0B2C4D] hover:bg-[#F3F6FA] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#155799]"
            >
              Explore Solutions
            </a>
          </div>

          <div className="mt-12 grid w-full max-w-2xl grid-cols-3 divide-x divide-slate-200 border-t border-slate-200 pt-7">
            <div className="pr-3 sm:pr-6">
              <p className="font-mono text-base font-semibold whitespace-nowrap text-[#0B2C4D] tabular-nums sm:text-xl">
                1 Gateway
              </p>
              <p className="mt-1 text-xs leading-snug text-slate-600 sm:text-sm">
                B2B Supply &amp; ERP Control
              </p>
            </div>
            <div className="px-3 sm:px-6">
              <p className="font-mono text-base font-semibold whitespace-nowrap text-[#0B2C4D] tabular-nums sm:text-xl">
                5 Modules
              </p>
              <p className="mt-1 text-xs leading-snug text-slate-600 sm:text-sm">
                Procurement through Finance
              </p>
            </div>
            <div className="pl-3 sm:pl-6">
              <p className="font-mono text-base font-semibold whitespace-nowrap text-[#0B2C4D] tabular-nums sm:text-xl">
                100% Legal
              </p>
              <p className="mt-1 text-xs leading-snug text-slate-600 sm:text-sm">
                Registered Entity &amp; Tax Invoices
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
