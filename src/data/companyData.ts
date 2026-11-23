import type { ServiceOption } from '../utils/rfq';

export interface SupplierCategory {
  title: string;
  detail: string;
}

export const SUPPLIER_CATEGORIES: SupplierCategory[] = [
  {
    title: 'IT Equipment & Office Infrastructure',
    detail: 'Enterprise laptops, servers, networking hardware, multifunction printers, and workplace equipment.',
  },
  {
    title: 'Industrial Supplies & MRO',
    detail: 'Personal protective equipment (PPE), technical maintenance tools, operational spare parts, and plant utilities.',
  },
  {
    title: 'Project Materials & Recurring Operations',
    detail: 'Electrical components, building facility supplies, and scheduled contracts for recurring operational consumables.',
  },
];

export interface ErpModuleItem {
  id: string;
  name: string;
  focus: string;
  impact: string;
}

export const ERP_MODULES: ErpModuleItem[] = [
  {
    id: 'procurement',
    name: 'Procurement',
    focus: 'Centralizes purchase requisitions (PR), vendor quote comparisons, and tiered Purchase Order approvals.',
    impact: 'Eliminates manual purchasing bottlenecks and maintains a complete audit trail.',
  },
  {
    id: 'inventory',
    name: 'Inventory',
    focus: 'Real-time multi-location stock balance visibility complete with automated reorder thresholds.',
    impact: 'Prevents inventory discrepancies and mitigates stockout risks for critical items.',
  },
  {
    id: 'warehouse',
    name: 'Warehouse',
    focus: 'Manages inbound receiving, bin allocation, and digitally verified outbound dispatch workflows.',
    impact: 'Accelerates warehouse handover speed with verified physical stock accuracy.',
  },
  {
    id: 'sales',
    name: 'Sales',
    focus: 'Streamlines B2B quotations, recurring supply contracts, and real-time order fulfillment tracking.',
    impact: 'Keeps client delivery SLA commitments transparent and consistently on schedule.',
  },
  {
    id: 'finance',
    name: 'Finance',
    focus: 'Connects POs, handover certificates, commercial invoices, tax invoices, and payment reconciliation.',
    impact: 'Shortens billing cycles without repetitive manual re-entry across departments.',
  },
];

export interface BentoValueItem {
  id: string;
  number: string;
  title: string;
  description: string;
  metricContext: string;
  iconName: 'database' | 'clock' | 'layers' | 'shield';
  spanClass: string;
}

export const VALUE_PROPOSITIONS: BentoValueItem[] = [
  {
    id: 'data-driven',
    number: '01',
    title: 'Data-Driven Procurement',
    description:
      'Every order and distribution cycle is backed by structured system records that remain clean, traceable, and audit-ready for management review.',
    metricContext: 'End-to-end digital audit trail from PO to official handover',
    iconName: 'database',
    spanClass: 'lg:col-span-7',
  },
  {
    id: 'cost-time',
    number: '02',
    title: 'Cost & Time Efficiency',
    description:
      'Cut procurement bureaucracy by working with a single integrated partner for both physical goods supply and operational control systems.',
    metricContext: 'Vendor consolidation under one coordinated gateway',
    iconName: 'clock',
    spanClass: 'lg:col-span-5',
  },
  {
    id: 'scalability',
    number: '03',
    title: 'Flexible Scalability',
    description:
      'Built to serve growing SMEs as well as large-scale corporate supply contracts and multi-site ERP rollouts.',
    metricContext: 'Adaptable from ad-hoc orders to annual supply contracts',
    iconName: 'layers',
    spanClass: 'lg:col-span-5',
  },
  {
    id: 'compliance',
    number: '04',
    title: 'Full Compliance & Administration',
    description:
      'Ready to support enterprise vendor registration, official tax invoice issuance, and accountable B2B handover documentation.',
    metricContext: 'Registered legal entity & complete B2B documentation',
    iconName: 'shield',
    spanClass: 'lg:col-span-7',
  },
];

export interface WorkflowStage {
  step: string;
  title: string;
  description: string;
  deliverable: string;
}

export const WORKFLOW_STAGES: WorkflowStage[] = [
  {
    step: '01',
    title: 'Inquiry & Specifications (RFQ)',
    description:
      'Submit your procurement item list or your company ERP implementation scope to our commercial team.',
    deliverable: 'Deliverable: Technical specification checklist & workflow mapping.',
  },
  {
    step: '02',
    title: 'Proposal & Planning',
    description:
      'Our team prepares a transparent commercial quotation along with a delivery schedule or measurable implementation timeline.',
    deliverable: 'Deliverable: Formal quotation, budget plan, & SLA commitment.',
  },
  {
    step: '03',
    title: 'Execution & System Control',
    description:
      'Procurement and stock operations are executed under strict quality control with regular status synchronization.',
    deliverable: 'Deliverable: Goods QC inspection / verified ERP module setup.',
  },
  {
    step: '04',
    title: 'Handover & Ongoing Support',
    description:
      'On-time delivery accompanied by official handover records, complete tax invoices, and continuous post-delivery support.',
    deliverable: 'Deliverable: Official handover report (BAST), tax invoice, & after-sales support.',
  },
];

export const LEGALITY_RECORDS = [
  { label: 'Company Name', value: 'PT DomestiQ Hub Indonesia', copyable: false },
  { label: 'Legal Entity Form', value: 'Perseroan Perorangan (Individual LLC)', copyable: false },
  { label: 'Ministry Decree (SK Kemenkumham RI)', value: 'AHU-A125536.AH.01.30.Tahun 2026', copyable: true },
  { label: 'Date of Establishment', value: '25 September 2026', copyable: false },
  { label: 'Tax Identification Number (NPWP)', value: '1000 0000 1134 7794', copyable: true },
  {
    label: 'Registered Address',
    value:
      'Perumahan The Magnolia Grande Blok B03 No.20 RT.001/008, Desa Karang Rahayu, Kec. Karang Bahagia, Kab. Bekasi, Jawa Barat 17535',
    copyable: false,
  },
] as const;

export const PILLAR_SERVICE_MAP: Record<'supplier' | 'erp', ServiceOption> = {
  supplier: 'General Supplier / Procurement',
  erp: 'ERP System Implementation',
};
