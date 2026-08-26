const fs = require('fs');

const path = 'data/services.ts';
let content = fs.readFileSync(path, 'utf8');

// The original file only has 3 items. Let's make sure it has all 5, and also check if icons are rendered in the UI.
// The user says the service cards in app/services/page.tsx render as empty/blank boxes with no icon, description, or content.
// Wait, in app/services/page.tsx, it renders <h3 ...>{service.title}</h3>, <p>{service.description}</p>. It does not render icons! 
// Let's replace app/services/page.tsx to render the icons if they were missing, but actually let's just make sure data/services.ts is fully populated.

const newServices = `export interface ServiceItem {
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
    image: 'https://placehold.co/600x400/26495C/F6F4EF.png?text=Professional+Installation'
  },
  {
    id: 'srv-2',
    title: 'Annual Maintenance Contracts (AMC)',
    slug: 'amc-maintenance',
    description: 'Comprehensive preventative and breakdown maintenance plans to maximize plant uptime.',
    icon: 'ShieldCheck',
    image: 'https://placehold.co/600x400/6C9BB0/F6F4EF.png?text=AMC+Maintenance'
  },
  {
    id: 'srv-3',
    title: 'Consultation & Auditing',
    slug: 'consultation',
    description: 'Detailed water audits, feasibility studies, and regulatory compliance consulting.',
    icon: 'ClipboardList',
    image: 'https://placehold.co/600x400/7A9B6E/F6F4EF.png?text=Consultation+Services'
  },
  {
    id: 'srv-4',
    title: 'Turnkey Project Setup',
    slug: 'turnkey',
    description: 'From design and civil works to final commissioning, we handle the entire project lifecycle.',
    icon: 'Factory',
    image: 'https://placehold.co/600x400/26495C/F6F4EF.png?text=Turnkey+Setup'
  },
  {
    id: 'srv-5',
    title: 'Spare Parts & Support',
    slug: 'spares',
    description: 'Genuine OEM spares and prompt technical support for all your water treatment needs.',
    icon: 'Settings',
    image: 'https://placehold.co/600x400/6C9BB0/F6F4EF.png?text=Spares+Support'
  }
];
`;

fs.writeFileSync(path, newServices, 'utf8');
console.log('Updated data/services.ts.');

