import { useState, type FormEvent } from 'react';
import {
  CheckCircle2,
  ExternalLink,
  Mail,
  MapPin,
  MessageSquare,
  RotateCcw,
} from 'lucide-react';
import {
  buildWhatsAppRfqUrl,
  CORPORATE_EMAIL,
  formatRfqReferenceId,
  validateRfqInput,
  WHATSAPP_DISPLAY,
  WHATSAPP_NUMBER,
  type RfqValidationErrors,
  type ServiceOption,
} from '../utils/rfq';

interface InquirySectionProps {
  selectedService: ServiceOption;
  onServiceChange: (service: ServiceOption) => void;
}

const SERVICE_OPTIONS: ServiceOption[] = [
  'General Supplier / Procurement',
  'ERP System Implementation',
  'Both (Procurement + ERP)',
];

export default function InquirySection({
  selectedService,
  onServiceChange,
}: InquirySectionProps) {
  const [picAndCompany, setPicAndCompany] = useState('');
  const [contact, setContact] = useState('');
  const [summary, setSummary] = useState('');
  const [errors, setErrors] = useState<RfqValidationErrors>({});
  const [submittedPayload, setSubmittedPayload] = useState<{
    referenceId: string;
    whatsappUrl: string;
    picAndCompany: string;
    contact: string;
    serviceType: ServiceOption;
    summary: string;
  } | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validation = validateRfqInput({
      picAndCompany,
      contact,
      serviceType: selectedService,
      summary,
    });

    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    const whatsappUrl = buildWhatsAppRfqUrl({
      picAndCompany,
      contact,
      serviceType: selectedService,
      summary,
    });

    setSubmittedPayload({
      referenceId: formatRfqReferenceId(),
      whatsappUrl,
      picAndCompany: picAndCompany.trim(),
      contact: contact.trim(),
      serviceType: selectedService,
      summary: summary.trim(),
    });
  };

  const handleReset = () => {
    setSubmittedPayload(null);
    setPicAndCompany('');
    setContact('');
    setSummary('');
    setErrors({});
  };

  return (
    <section
      id="penawaran"
      className="border-t border-slate-200/80 bg-[#F3F6FA] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Direct Contact Details */}
          <div className="lg:col-span-5">
            <p className="text-sm font-semibold text-[#155799]">
              Contact Our B2B Commercial Team
            </p>
            <h2
              className="mt-2 font-display text-2xl font-bold tracking-tight text-[#0B2C4D] sm:text-3xl"
              style={{ textWrap: 'balance' }}
            >
              Discuss Your Procurement or ERP System Requirements
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
              Share your company requirements to receive a transparent commercial proposal,
              supply delivery schedule, or tailored ERP walkthrough.
            </p>

            <div className="mt-8 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
              <div className="flex items-start gap-4 p-5">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#E5B23A]" aria-hidden="true" />
                <div>
                  <p className="font-display text-xs font-bold text-slate-500">
                    Office Address
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-[#0B2C4D]">
                    Perumahan The Magnolia Grande Blok B03 No.20 RT.001/008, Desa Karang Rahayu,
                    Kec. Karang Bahagia, Kab. Bekasi, Jawa Barat 17535
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5">
                <MessageSquare
                  className="mt-0.5 h-5 w-5 shrink-0 text-[#E5B23A]"
                  aria-hidden="true"
                />
                <div>
                  <p className="font-display text-xs font-bold text-slate-500">
                    WhatsApp Business
                  </p>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex items-center gap-1.5 font-mono text-sm font-semibold text-[#155799] tabular-nums hover:underline"
                  >
                    <span>{WHATSAPP_DISPLAY}</span>
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-[#E5B23A]" aria-hidden="true" />
                <div>
                  <p className="font-display text-xs font-bold text-slate-500">
                    Corporate Email
                  </p>
                  <a
                    href={`mailto:${CORPORATE_EMAIL}`}
                    className="mt-1 inline-block text-sm font-semibold text-[#155799] hover:underline"
                  >
                    {CORPORATE_EMAIL}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Quick RFQ Form */}
          <div className="lg:col-span-7">
            <div className="rounded-xl border border-slate-200 bg-white p-7 sm:p-9">
              {!submittedPayload ? (
                <form onSubmit={handleSubmit} noValidate aria-label="Quick Request for Quotation Form">
                  <div className="border-b border-slate-200 pb-5">
                    <h3 className="font-display text-xl font-bold text-[#0B2C4D]">
                      Quick Request for Quotation (RFQ)
                    </h3>
                    <p className="mt-1 text-sm text-slate-600">
                      Complete the brief below to forward your inquiry directly to PT DomestiQ Hub
                      Indonesia&apos;s official WhatsApp Business desk.
                    </p>
                  </div>

                  <div className="mt-6 space-y-5">
                    <div>
                      <label
                        htmlFor="rfq-pic-company"
                        className="block text-sm font-semibold text-[#0B2C4D]"
                      >
                        PIC Name &amp; Company Name
                      </label>
                      <input
                        id="rfq-pic-company"
                        name="picAndCompany"
                        type="text"
                        value={picAndCompany}
                        onChange={(e) => {
                          setPicAndCompany(e.target.value);
                          if (errors.picAndCompany) {
                            setErrors((prev) => ({ ...prev, picAndCompany: undefined }));
                          }
                        }}
                        placeholder="Example: Budi Santoso — PT Karya Manufaktur Indonesia"
                        aria-invalid={Boolean(errors.picAndCompany)}
                        aria-describedby={errors.picAndCompany ? 'error-pic-company' : undefined}
                        className="mt-1.5 block w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-[#0B2C4D] placeholder:text-slate-400 focus:border-[#155799] focus:outline-none focus:ring-2 focus:ring-[#155799]/20"
                      />
                      {errors.picAndCompany && (
                        <p id="error-pic-company" className="mt-1.5 text-xs font-medium text-red-600">
                          {errors.picAndCompany}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="rfq-contact"
                        className="block text-sm font-semibold text-[#0B2C4D]"
                      >
                        WhatsApp Number / Business Email
                      </label>
                      <input
                        id="rfq-contact"
                        name="contact"
                        type="text"
                        value={contact}
                        onChange={(e) => {
                          setContact(e.target.value);
                          if (errors.contact) {
                            setErrors((prev) => ({ ...prev, contact: undefined }));
                          }
                        }}
                        placeholder="Example: +62 812-3456-7890 or procurement@company.co.id"
                        aria-invalid={Boolean(errors.contact)}
                        aria-describedby={errors.contact ? 'error-contact' : undefined}
                        className="mt-1.5 block w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-[#0B2C4D] placeholder:text-slate-400 focus:border-[#155799] focus:outline-none focus:ring-2 focus:ring-[#155799]/20"
                      />
                      {errors.contact && (
                        <p id="error-contact" className="mt-1.5 text-xs font-medium text-red-600">
                          {errors.contact}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="rfq-service"
                        className="block text-sm font-semibold text-[#0B2C4D]"
                      >
                        Service Requirement
                      </label>
                      <select
                        id="rfq-service"
                        name="serviceType"
                        value={selectedService}
                        onChange={(e) => onServiceChange(e.target.value as ServiceOption)}
                        className="mt-1.5 block w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-[#0B2C4D] focus:border-[#155799] focus:outline-none focus:ring-2 focus:ring-[#155799]/20"
                      >
                        {SERVICE_OPTIONS.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="rfq-summary"
                        className="block text-sm font-semibold text-[#0B2C4D]"
                      >
                        Requirement Summary
                      </label>
                      <textarea
                        id="rfq-summary"
                        name="summary"
                        rows={4}
                        value={summary}
                        onChange={(e) => {
                          setSummary(e.target.value);
                          if (errors.summary) {
                            setErrors((prev) => ({ ...prev, summary: undefined }));
                          }
                        }}
                        placeholder="Describe your item list, estimated quantities, or the ERP modules you plan to deploy..."
                        aria-invalid={Boolean(errors.summary)}
                        aria-describedby={errors.summary ? 'error-summary' : undefined}
                        className="mt-1.5 block w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-[#0B2C4D] placeholder:text-slate-400 focus:border-[#155799] focus:outline-none focus:ring-2 focus:ring-[#155799]/20"
                      />
                      {errors.summary && (
                        <p id="error-summary" className="mt-1.5 text-xs font-medium text-red-600">
                          {errors.summary}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs text-slate-500">
                      Connected directly to WhatsApp Business {WHATSAPP_DISPLAY}
                    </p>
                    <button
                      type="submit"
                      className="inline-flex min-h-[46px] cursor-pointer items-center justify-center whitespace-nowrap shrink-0 rounded-lg bg-[#E5B23A] px-6 py-3 font-display text-sm font-bold text-[#0B2C4D] transition-colors duration-150 hover:bg-[#d8a42b] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B2C4D]"
                    >
                      Send Request to Our Team
                    </button>
                  </div>
                </form>
              ) : (
                <div role="status" aria-live="polite">
                  <div className="flex items-start gap-3 border-b border-slate-200 pb-5">
                    <CheckCircle2
                      className="mt-0.5 h-6 w-6 shrink-0 text-emerald-600"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="font-mono text-xs font-semibold text-[#155799] tabular-nums">
                        {submittedPayload.referenceId}
                      </p>
                      <h3 className="mt-1 font-display text-xl font-bold text-[#0B2C4D]">
                        Quotation Draft Ready for WhatsApp
                      </h3>
                      <p className="mt-1 text-sm text-slate-600">
                        Click the button below to open PT DomestiQ Hub Indonesia&apos;s official
                        WhatsApp Business chat with your formatted inquiry.
                      </p>
                    </div>
                  </div>

                  <dl className="divide-y divide-slate-200 border-b border-slate-200 text-sm">
                    <div className="flex flex-col gap-0.5 py-3.5 sm:flex-row sm:justify-between">
                      <dt className="font-medium text-slate-500">PIC &amp; Company</dt>
                      <dd className="font-semibold text-[#0B2C4D]">
                        {submittedPayload.picAndCompany}
                      </dd>
                    </div>
                    <div className="flex flex-col gap-0.5 py-3.5 sm:flex-row sm:justify-between">
                      <dt className="font-medium text-slate-500">Business Contact</dt>
                      <dd className="font-mono text-[#0B2C4D]">{submittedPayload.contact}</dd>
                    </div>
                    <div className="flex flex-col gap-0.5 py-3.5 sm:flex-row sm:justify-between">
                      <dt className="font-medium text-slate-500">Category</dt>
                      <dd className="font-semibold text-[#155799]">
                        {submittedPayload.serviceType}
                      </dd>
                    </div>
                    <div className="py-3.5">
                      <dt className="font-medium text-slate-500">Requirement Summary</dt>
                      <dd className="mt-1 text-[#0B2C4D]">{submittedPayload.summary}</dd>
                    </div>
                  </dl>

                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <a
                      href={submittedPayload.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-lg bg-[#E5B23A] px-6 py-3 font-display text-sm font-bold text-[#0B2C4D] transition-colors duration-150 hover:bg-[#d8a42b]"
                    >
                      <span>Continue to Official WhatsApp</span>
                      <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    </a>

                    <button
                      type="button"
                      onClick={handleReset}
                      className="inline-flex min-h-[46px] cursor-pointer items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 font-display text-sm font-semibold text-[#0B2C4D] transition-colors hover:bg-slate-50"
                    >
                      <RotateCcw className="h-4 w-4" aria-hidden="true" />
                      <span>Create New Request</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
