export interface CaseStudy {
  id: string;
  title: string;
  slug: string;
  client: string;
  industry: string;
  location: string;
  challenge: string;
  solution: string;
  results: string[];
  image: string;
  featured?: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'cs-1',
    title: 'Zero Liquid Discharge (ZLD) Implementation for a Major Textile Dyeing Unit',
    slug: 'zld-textile-dyeing',
    client: 'Apex Textiles Ltd.',
    industry: 'Textile & Dyeing',
    location: 'Tirupur, Tamil Nadu',
    challenge: 'The client was facing strict mandates from the State Pollution Control Board to achieve Zero Liquid Discharge. Their existing ETP was outdated, failing to remove color effectively, and they were incurring high costs for fresh water intake.',
    solution: 'Saraswati Enterprises designed and installed a comprehensive 500 KLD ZLD system. This included upgrading the biological treatment, followed by Ultrafiltration (UF), a Multi-Stage Reverse Osmosis (RO) system, and a Multi-Effect Evaporator (MEE) for the RO reject.',
    results: [
      'Achieved 100% Zero Liquid Discharge compliance.',
      'Recovered 92% of wastewater for reuse in the dyeing process.',
      'Reduced fresh water consumption by 450 KLD, saving significant operational costs.',
      'ROI achieved in just 2.5 years.'
    ],
    image: 'https://placehold.co/800x600/0B3D6E/FFF?text=Textile+ZLD+Plant',
    featured: true,
  },
  {
    id: 'cs-2',
    title: 'High-Purity DM Plant for Pharmaceutical Manufacturing',
    slug: 'dm-plant-pharma',
    client: 'MediCare Pharma Inc.',
    industry: 'Pharmaceutical',
    location: 'Baddi, Himachal Pradesh',
    challenge: 'The client required a highly reliable source of Purified Water (PW) meeting strict USP standards for their new injectable manufacturing line. Consistency in conductivity and absolute microbial control were critical.',
    solution: 'We installed a 5,000 LPH Two-Stage RO followed by an Electro-Deionization (EDI) system and a Mixed Bed (MB) polisher. The entire system was constructed with sanitary-grade SS 316L, featuring automatic hot water sanitization loops.',
    results: [
      'Consistently delivered water with conductivity < 0.1 µS/cm.',
      'Zero microbial failures over 3 years of continuous operation.',
      'Successfully passed rigorous FDA and local regulatory audits.',
      'Automated sanitization reduced downtime by 30%.'
    ],
    image: 'https://placehold.co/800x600/2E9DE0/FFF?text=Pharma+DM+Plant',
  },
  {
    id: 'cs-3',
    title: 'Compact STP and RO Setup for a Luxury 5-Star Hotel',
    slug: 'stp-ro-luxury-hotel',
    client: 'The Grand Horizon Hotel',
    industry: 'Hotels & Hospitality',
    location: 'Goa',
    challenge: 'The hotel was struggling with hard water causing scale in expensive bathroom fittings and high laundry costs. Additionally, they needed an aesthetic, odor-free solution to treat sewage within a very restricted space in the basement.',
    solution: 'We installed a 10,000 LPH Water Softener and a 5,000 LPH Commercial RO plant for the kitchen and drinking water. For sewage, we implemented a 100 KLD compact MBBR (Moving Bed Biofilm Reactor) STP that was completely enclosed and odor-controlled.',
    results: [
      'Extended the lifespan of plumbing fixtures and boilers by preventing scale.',
      'Reduced laundry detergent consumption by 40%.',
      'The MBBR STP fit into 50% less space than a conventional STP.',
      'Treated sewage water is now used for 100% of the hotel\'s landscaping needs.'
    ],
    image: 'https://placehold.co/800x600/4CAF50/FFF?text=Hotel+STP',
  }
];
