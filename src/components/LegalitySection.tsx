import { useState } from 'react';
import { Check, Copy, ShieldCheck } from 'lucide-react';
import { LEGALITY_RECORDS } from '../data/companyData';

export default function LegalitySection() {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = async (label: string, value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedField(label);
      window.setTimeout(() => {
        setCopiedField((prev) => (prev === label ? null : prev));
      }, 2000);
    } catch {
      // Clipboard API unavailable in restricted contexts; ignore gracefully
    }
  };

  return (
    <section id="legalitas" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Corporate Profile Narrative */}
          <div className="lg:col-span-5">
            <p className="text-sm font-semibold text-[#155799]">
              Corporate Identity &amp; Governance
            </p>
            <h2
              className="mt-2 font-display text-2xl font-bold tracking-tight text-[#0B2C4D] sm:text-3xl"
              style={{ textWrap: 'balance' }}
            >
              A Strategic B2B Partner Backed by Verified Legal Certainty
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-600">
              PT DomestiQ Hub Indonesia operates as an officially registered legal entity committed
              to administrative transparency, tax compliance, and strict accountability across every
              procurement engagement and ERP implementation.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-600">
              Our verified corporate legality records are structured to streamline enterprise vendor
              registration, Purchase Order issuance, and official tax invoicing for your
              organization.
            </p>

            <div className="mt-8 flex items-center gap-4 border-t border-slate-200 pt-6">
              <img
                src={`${import.meta.env.BASE_URL}assets/aistudio/Screenshot_2026-11-23_103450_adf18c6a.png`}
                alt="DQH Monogram"
                className="h-11 w-auto shrink-0 object-contain"
                referrerPolicy="no-referrer"
              />
              <div>
                <p className="font-display text-sm font-bold text-[#0B2C4D]">
                  PT DomestiQ Hub Indonesia
                </p>
                <p className="text-xs text-slate-500">
                  General Supplier &amp; Integrated ERP Solutions · Bekasi Regency, West Java
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Verified Corporate Legality Card */}
          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 bg-[#F3F6FA] px-6 py-4">
                <div>
                  <h3 className="font-display text-base font-bold text-[#0B2C4D]">
                    Official Corporate Legality Records
                  </h3>
                  <p className="text-xs text-slate-500">
                    Registered administrative credentials for B2B vendor verification
                  </p>
                </div>
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#0B2C4D]">
                  <ShieldCheck className="h-4 w-4 text-[#E5B23A]" aria-hidden="true" />
                  <span>Officially Registered Legal Entity</span>
                </div>
              </div>

              <dl className="divide-y divide-slate-200">
                {LEGALITY_RECORDS.map((record) => {
                  const isCopied = copiedField === record.label;
                  const isMonospace =
                    record.label.includes('SK') || record.label.includes('NPWP');

                  return (
                    <div
                      key={record.label}
                      className="flex flex-col justify-between gap-2 px-6 py-4 sm:flex-row sm:items-center sm:gap-6"
                    >
                      <dt className="shrink-0 text-xs font-semibold text-slate-500 sm:w-52">
                        {record.label}
                      </dt>
                      <dd className="flex flex-1 items-start justify-between gap-3 sm:items-center">
                        <span
                          className={`text-sm font-medium text-[#0B2C4D] ${
                            isMonospace ? 'font-mono font-semibold tabular-nums' : ''
                          }`}
                        >
                          {record.value}
                        </span>

                        {record.copyable && (
                          <button
                            type="button"
                            onClick={() => handleCopy(record.label, record.value)}
                            aria-label={`Copy ${record.label}`}
                            className="inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-md border border-slate-200 px-2.5 py-1 text-xs font-medium text-slate-600 transition-colors hover:border-[#155799] hover:text-[#0B2C4D]"
                          >
                            {isCopied ? (
                              <>
                                <Check className="h-3.5 w-3.5 text-emerald-600" aria-hidden="true" />
                                <span>Copied</span>
                              </>
                            ) : (
                              <>
                                <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                                <span>Copy</span>
                              </>
                            )}
                          </button>
                        )}
                      </dd>
                    </div>
                  );
                })}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
