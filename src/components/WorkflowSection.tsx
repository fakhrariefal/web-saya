import { useState } from 'react';
import { WORKFLOW_STAGES } from '../data/companyData';

export default function WorkflowSection() {
  const [activeStep, setActiveStep] = useState<string>(WORKFLOW_STAGES[0].step);

  return (
    <section
      id="cara-kerja"
      className="bg-[#061A2E] py-16 text-white sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="flex flex-col justify-between gap-4 border-b border-white/12 pb-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-wide text-[#E5B23A]">
              Integrated Workflow
            </p>
            <h2
              className="mt-2 font-display text-2xl font-bold tracking-[0.005em] text-white sm:text-3xl lg:text-[34px]"
              style={{ textWrap: 'balance' }}
            >
              Four Structured B2B Stages from RFQ to Official Handover
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-slate-300">
            Every stage is systematically documented so your procurement and finance teams maintain
            end-to-end visibility.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {WORKFLOW_STAGES.map((stage) => {
            const isSelected = stage.step === activeStep;
            return (
              <button
                key={stage.step}
                type="button"
                onClick={() => setActiveStep(stage.step)}
                className={`flex h-full cursor-pointer flex-col justify-between rounded-xl border p-6 text-left transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E5B23A] ${
                  isSelected
                    ? 'border-[#E5B23A]/70 bg-[#0B2C4D]'
                    : 'border-white/12 bg-[#0B2C4D]/45 hover:border-white/25 hover:bg-[#0B2C4D]/75'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <span className="font-mono text-2xl font-bold tracking-tight text-[#E5B23A] tabular-nums">
                      {stage.step}
                    </span>
                    <span className="text-xs font-medium text-slate-300">
                      Stage {Number(stage.step)}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-lg font-bold tracking-[0.01em] text-white">
                    {stage.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-300">
                    {stage.description}
                  </p>
                </div>

                <div className="mt-6 border-t border-white/10 pt-3.5">
                  <p className="text-xs font-medium leading-relaxed text-[#E5B23A]">
                    {stage.deliverable}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
