export type ServiceOption =
  | 'General Supplier / Procurement'
  | 'ERP System Implementation'
  | 'Both (Procurement + ERP)';

export interface RfqFormInput {
  picAndCompany: string;
  contact: string;
  serviceType: ServiceOption;
  summary: string;
}

export interface RfqValidationErrors {
  picAndCompany?: string;
  contact?: string;
  summary?: string;
}

export const WHATSAPP_NUMBER = '6285706375004';
export const WHATSAPP_DISPLAY = '+62 857-0637-5004';
export const CORPORATE_EMAIL = 'marketing@domestiqhub.com';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidBusinessContact(rawContact: string): boolean {
  const trimmed = rawContact.trim();
  if (!trimmed) return false;
  if (EMAIL_PATTERN.test(trimmed)) return true;

  const digitsOnly = trimmed.replace(/[\s\-().+]/g, '');
  if (!/^\d+$/.test(digitsOnly)) return false;

  // Indonesian mobile/office numbers or international numbers: 9 to 15 digits
  return digitsOnly.length >= 9 && digitsOnly.length <= 15;
}

export function validateRfqInput(input: RfqFormInput): {
  isValid: boolean;
  errors: RfqValidationErrors;
} {
  const errors: RfqValidationErrors = {};

  if (input.picAndCompany.trim().length < 3) {
    errors.picAndCompany = 'Please enter your PIC name and company name (at least 3 characters).';
  }

  if (!isValidBusinessContact(input.contact)) {
    errors.contact = 'Please provide a valid WhatsApp number or business email address.';
  }

  if (input.summary.trim().length < 10) {
    errors.summary = 'Please describe your procurement or ERP requirements (at least 10 characters).';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export function buildWhatsAppRfqUrl(input: RfqFormInput): string {
  const messageLines = [
    'Hello PT DomestiQ Hub Indonesia Team,',
    '',
    'I would like to submit a Request for Quotation (RFQ) via your official website:',
    `- PIC & Company Name: ${input.picAndCompany.trim()}`,
    `- Business Contact (WA/Email): ${input.contact.trim()}`,
    `- Service Requirement: ${input.serviceType}`,
    `- Requirement Summary: ${input.summary.trim()}`,
    '',
    'Please share your consultation schedule or quotation estimate. Thank you.',
  ];

  const encodedText = encodeURIComponent(messageLines.join('\n'));
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`;
}

export function formatRfqReferenceId(date: Date = new Date()): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const suffix = String(date.getHours()).padStart(2, '0') + String(date.getMinutes()).padStart(2, '0');
  return `DQH-RFQ-${year}${month}${day}-${suffix}`;
}
