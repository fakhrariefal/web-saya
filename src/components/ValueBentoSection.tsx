import { Clock, Database, Layers, ShieldCheck } from 'lucide-react';
import { VALUE_PROPOSITIONS, type BentoValueItem } from '../data/companyData';

function renderGoldLineIcon(iconName: BentoValueItem['iconName']) {
  const iconProps = {
    className: 'h-6 w-6 text-[#E5B23A]',
    strokeWidth: 1.75,
    'aria-hidden': true as const,
  };

  switch (iconName) {
    case 'database':
      return <Database {...iconProps} />;
    case 'clock':
      return <Clock {...iconProps} />;
    case 'layers':
      return <Layers {...iconProps} />;
    case 'shield':
      return <ShieldCheck {...iconProps} />;
  }
}

export default function ValueBentoSection() {
  return (
    <section className="border-t border-slate-200/80 bg-[#F3F6FA] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-[#155799]">
              B2B Partnership Advantage
            </p>
            <h2
              className="mt-2 font-display text-2xl font-bold tracking-tight text-[#0B2C4D] sm:text-3xl lg:text-[34px]"
              style={{ textWrap: 'balance' }}
            >
              Why Partner with PT DomestiQ Hub Indonesia?
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-slate-600">
            Engineered to meet modern corporate demands for speed, administrative compliance, and
            operational data accuracy.
          </p>
        </div>

        {/* Asymmetric 4-Box Bento Grid */}
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-12">
          {VALUE_PROPOSITIONS.map((item) => (
            <article
              key={item.id}
              className={`flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-7 transition-colors duration-150 hover:border-[#155799]/40 sm:p-8 ${item.spanClass}`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[#0B2C4D]">
                    {renderGoldLineIcon(item.iconName)}
                  </div>
                  <span className="font-mono text-xs font-medium text-slate-400 tabular-nums">
                    {item.number}
                  </span>
                </div>

                <h3 className="mt-6 font-display text-lg font-bold tracking-tight text-[#0B2C4D] sm:text-xl">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 border-t border-slate-100 pt-4">
                <p className="text-xs font-medium text-[#155799]">
                  {item.metricContext}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
