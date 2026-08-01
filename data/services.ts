export interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  description: string;
  icon: string;
  image: string;
}

export const services: ServiceItem[] = [
  {
    id: 'srv-1',
    title: 'Professional Installation',
    slug: 'installation',
    description: 'Expert, end-to-end commissioning of water treatment plants ensuring zero-defect deployment.',
    icon: 'Wrench',
    image: 'https://placehold.co/600x400/0E3B45/F6F4EF?text=Professional+Installation'
  },
  {
    id: 'srv-2',
    title: 'Annual Maintenance Contracts (AMC)',
    slug: 'amc-maintenance',
    description: 'Comprehensive preventative and breakdown maintenance plans to maximize plant uptime.',
    icon: 'ShieldCheck',
    image: 'https://placehold.co/600x400/1C7C93/F6F4EF?text=AMC+Maintenance'
  },
  {
    id: 'srv-3',
    title: 'Consultation & Auditing',
    slug: 'consultation',
    description: 'Detailed water audits, feasibility studies, and regulatory compliance consulting.',
    icon: 'ClipboardList',
    image: 'https://placehold.co/600x400/2F6B47/F6F4EF?text=Consultation+Services'
  }
];
