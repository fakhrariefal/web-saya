import { useState } from 'react';
import { ArrowUpRight, Boxes, Cpu, Check } from 'lucide-react';
import { ERP_MODULES, SUPPLIER_CATEGORIES } from '../data/companyData';
import type { ServiceOption } from '../utils/rfq';

interface PillarsSectionProps {
  onSelectServiceForRfq: (service: ServiceOption) => void;
}

export default function PillarsSection({ onSelectServiceForRfq }: PillarsSectionProps) {
  const [selectedErpModuleId, setSelectedErpModuleId] = useState<string>(ERP_MODULES[0].id);

  const activeErpModule =
    ERP_MODULES.find((mod) => mod.id === selectedErpModuleId) ?? ERP_MODULES[0];

  return (
    <section id="solusi-bisnis" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-[#155799]">
            Core Business Capabilities
          </p>
          <h2
            className="mt-2 font-display text-2xl font-bold tracking-tight text-[#0B2C4D] sm:text-3xl lg:text-[34px]"
            style={{ textWrap: 'balance' }}
          >
            Two Integrated Business Pillars for Enterprise Supply Chain Resilience
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-600">
            We combine physical corporate procurement execution with modern ERP infrastructure under
            one measurable control framework.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2">
          {/* Pillar 01: Enterprise General Supplier */}
          <article className="flex flex-col justify-between rounded-xl border border-slate-200 bg-[#F3F6FA] p-7 sm:p-9">
            <div>
              <div className="flex items-center justify-between gap-4 border-b border-slate-200/80 pb-5">
                <span className="font-mono text-sm font-semibold text-[#155799] tabular-nums">
                  Pillar 01
                </span>
                <Boxes className="h-6 w-6 text-[#E5B23A]" aria-hidden="true" />
              </div>

              <h3 className="mt-6 font-display text-xl font-bold tracking-tight text-[#0B2C4D] sm:text-2xl">
                Enterprise General Supplier
              </h3>
              <p className="mt-1 text-sm font-medium text-[#155799]">
                Multi-Category Corporate Procurement
              </p>

              <p className="mt-4 text-[15px] leading-relaxed text-slate-600">
                End-to-end sourcing of corporate operational needs, industrial equipment, IT &amp;
                office hardware, and project materials with verified quality standards, competitive
                pricing, and SLA-driven on-time delivery.
              </p>

              <div className="mt-7 divide-y divide-slate-200 border-t border-b border-slate-200">
                {SUPPLIER_CATEGORIES.map((category) => (
                  <div key={category.title} className="py-3.5">
                    <div className="flex items-start gap-3">
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#E5B23A]"
                        aria-hidden="true"
                      />
                      <div>
                        <p className="text-sm font-semibold text-[#0B2C4D]">{category.title}</p>
                        <p className="mt-0.5 text-xs leading-relaxed text-slate-600">
                          {category.detail}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-2">
              <button
                type="button"
                onClick={() => onSelectServiceForRfq('General Supplier / Procurement')}
                className="inline-flex min-h-[44px] cursor-pointer items-center gap-2 rounded-lg bg-[#0B2C4D] px-5 py-2.5 font-display text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#155799] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B2C4D]"
              >
                <span>Request Goods Procurement</span>
                <ArrowUpRight className="h-4 w-4 text-[#E5B23A]" aria-hidden="true" />
              </button>
            </div>
          </article>

          {/* Pillar 02: Integrated ERP Solutions */}
          <article
            id="ekosistem-erp"
            className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-7 sm:p-9"
          >
            <div>
              <div className="flex items-center justify-between gap-4 border-b border-slate-200 pb-5">
                <span className="font-mono text-sm font-semibold text-[#155799] tabular-nums">
                  Pillar 02
                </span>
                <Cpu className="h-6 w-6 text-[#E5B23A]" aria-hidden="true" />
              </div>

              <h3 className="mt-6 font-display text-xl font-bold tracking-tight text-[#0B2C4D] sm:text-2xl">
                Integrated ERP Solutions
              </h3>
              <p className="mt-1 text-sm font-medium text-[#155799]">
                Unified Management System
              </p>

              <p className="mt-4 text-[15px] leading-relaxed text-slate-600">
                Deployment and configuration of an Enterprise Resource Planning (ERP) ecosystem
                connecting Procurement, Inventory, Warehouse, Sales, and Finance in one centralized
                platform to eliminate manual operational bottlenecks.
              </p>

              {/* Interactive Module Selector */}
              <div className="mt-7">
                <p className="mb-2.5 text-xs font-semibold text-slate-500">
                  Explore ERP ecosystem modules:
                </p>
                <div
                  role="tablist"
                  aria-label="ERP Ecosystem Modules"
                  className="flex flex-wrap gap-1.5 rounded-lg bg-[#F3F6FA] p-1.5"
                >
                  {ERP_MODULES.map((mod) => {
                    const isActive = mod.id === activeErpModule.id;
                    return (
                      <button
                        key={mod.id}
                        type="button"
                        role="tab"
                        aria-selected={isActive}
                        onClick={() => setSelectedErpModuleId(mod.id)}
                        className={`min-h-[36px] cursor-pointer rounded-md px-3 py-1.5 text-xs font-semibold whitespace-nowrap transition-colors duration-150 ${
                          isActive
                            ? 'bg-[#0B2C4D] text-white'
                            : 'text-slate-600 hover:bg-white hover:text-[#0B2C4D]'
                        }`}
                      >
                        {mod.name}
                      </button>
                    );
                  })}
                </div>

                <div className="mt-4 border-t border-b border-slate-200 py-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-display text-sm font-bold text-[#0B2C4D]">
                      {activeErpModule.name} Module
                    </h4>
                    <span className="text-xs font-medium text-[#155799]">
                      Synced to Core Data Hub
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {activeErpModule.focus}
                  </p>
                  <p className="mt-2 text-xs font-semibold text-[#0B2C4D]">
                    Operational impact:{' '}
                    <span className="font-normal text-slate-600">{activeErpModule.impact}</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-2">
              <button
                type="button"
                onClick={() => onSelectServiceForRfq('ERP System Implementation')}
                className="inline-flex min-h-[44px] cursor-pointer items-center gap-2 rounded-lg bg-[#E5B23A] px-5 py-2.5 font-display text-sm font-bold text-[#0B2C4D] transition-colors duration-150 hover:bg-[#d8a42b] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B2C4D]"
              >
                <span>Consult on ERP Implementation</span>
                <ArrowUpRight className="h-4 w-4 text-[#0B2C4D]" aria-hidden="true" />
              </button>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
