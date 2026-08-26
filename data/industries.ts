export interface Industry {
  id: string;
  name: string;
  slug: string;
  type: 'Industry' | 'Sector';
  shortDescription: string;
  description: string;
  challenges: string[];
  recommendedProducts: string[]; // Slugs of recommended products
  image: string;
}

export const industries: Industry[] = [
  // INDUSTRIES (Industrial Buyers)
  {
    id: 'ind-pharmaceutical',
    name: 'Pharmaceutical',
    slug: 'pharmaceutical',
    type: 'Industry',
    shortDescription: 'Ultra-pure water solutions meeting stringent USP and IP standards.',
    description: 'The pharmaceutical industry demands water of the highest purity. Our customized DM plants, RO systems, and Mixed Bed units ensure you get Purified Water (PW) and Water for Injection (WFI) that strictly adhere to pharmacopeial standards.',
    challenges: [
      'Maintaining absolute microbial control',
      'Consistent conductivity and TOC levels',
      'Strict regulatory compliance and documentation',
      'Sanitization of distribution loops'
    ],
    recommendedProducts: ['ro-plant', 'dm-plant', 'mix-bed-unit', 'uv-plant'],
    image: 'https://placehold.co/800x600/26495C/FFF.png?text=Pharmaceutical+Water',
  },
  {
    id: 'ind-manufacturing',
    name: 'Manufacturing & Heavy Industry',
    slug: 'manufacturing',
    type: 'Industry',
    shortDescription: 'Robust water treatment for process use, cooling towers, and boiler feed.',
    description: 'From automotive to steel plants, manufacturing requires massive volumes of treated water. Our high-capacity RO, DM, and ETP solutions ensure your processes run smoothly without scaling or corrosion issues, while meeting pollution discharge norms.',
    challenges: [
      'High volume water requirements',
      'Preventing scale in boilers and cooling towers',
      'Treating complex industrial effluents containing heavy metals or oils',
      'Minimizing fresh water intake via recycling'
    ],
    recommendedProducts: ['ro-plant', 'etp', 'water-softener', 'water-treatment-chemicals'],
    image: 'https://placehold.co/800x600/6C9BB0/FFF.png?text=Manufacturing+Plant',
  },
  {
    id: 'ind-textile',
    name: 'Textile & Dyeing',
    slug: 'textile',
    type: 'Industry',
    shortDescription: 'Specialized effluent treatment and color removal for textile processing.',
    description: 'The textile industry uses large amounts of water and generates highly colored, toxic effluent. We provide advanced ETP and ZLD (Zero Liquid Discharge) systems that not only treat the water but recover it for reuse in the dyeing process.',
    challenges: [
      'High COD, BOD, and color in effluent',
      'Fluctuating pH levels in wastewater',
      'High cost of fresh water',
      'Meeting strict ZLD regulatory mandates'
    ],
    recommendedProducts: ['etp', 'uf-system', 'ro-plant', 'water-treatment-chemicals'],
    image: 'https://placehold.co/800x600/7A9B6E/FFF.png?text=Textile+Industry',
  },
  {
    id: 'ind-food-beverage',
    name: 'Food & Beverage',
    slug: 'food-beverage',
    type: 'Industry',
    shortDescription: 'Safe, tasteless, and odorless water for processing and beverage production.',
    description: 'Water is a primary ingredient in the F&B sector. Our sanitary-grade RO, UV, and Filtration systems ensure water is completely free from pathogens, chlorine, and off-tastes, protecting your brand\'s quality and consumer health.',
    challenges: [
      'Ensuring absolute microbiological safety',
      'Removing chlorine and chloramines that alter taste',
      'Maintaining consistent water chemistry for recipes',
      'Treating high BOD wastewater from food processing'
    ],
    recommendedProducts: ['ro-plant', 'uv-plant', 'filtration-plant', 'stp'],
    image: 'https://placehold.co/800x600/26495C/FFF.png?text=Food+and+Beverage',
  },

  // SECTORS (Commercial Buyers)
  {
    id: 'sec-hospitals',
    name: 'Hospitals & Healthcare',
    slug: 'hospitals',
    type: 'Sector',
    shortDescription: 'Reliable RO drinking water and specialized STP systems for healthcare facilities.',
    description: 'Hospitals require flawless drinking water for patients and staff, specialized water for dialysis, and robust sewage treatment plants capable of handling hospital waste. We provide comprehensive, reliable solutions for all healthcare water needs.',
    challenges: [
      'Zero tolerance for pathogens in drinking water',
      'Specialized pure water requirements for dialysis',
      'Treating hospital sewage safely',
      'Uninterrupted 24/7 operation'
    ],
    recommendedProducts: ['ro-plant', 'uv-plant', 'stp', 'water-softener'],
    image: 'https://placehold.co/800x600/6C9BB0/FFF.png?text=Healthcare+Water',
  },
  {
    id: 'sec-hotels',
    name: 'Hotels & Hospitality',
    slug: 'hotels',
    type: 'Sector',
    shortDescription: 'Premium water solutions for guest rooms, laundry, kitchens, and landscaping.',
    description: 'Delight your guests with crystal clear drinking water and spot-free fixtures. Our commercial RO, Water Softeners, and compact STPs help hotels reduce costs, improve guest experience, and maintain lush green lawns with recycled water.',
    challenges: [
      'Providing high-quality drinking water to guests',
      'Preventing scale in expensive bathroom fixtures and boilers',
      'High laundry detergent costs due to hard water',
      'Space constraints for sewage treatment'
    ],
    recommendedProducts: ['ro-plant', 'water-softener', 'stp', 'filtration-plant'],
    image: 'https://placehold.co/800x600/7A9B6E/FFF.png?text=Hotel+Water+Systems',
  },
  {
    id: 'sec-schools',
    name: 'Schools & Educational Institutes',
    slug: 'schools',
    type: 'Sector',
    shortDescription: 'Safe, centralized drinking water systems for students and staff.',
    description: 'Protecting the health of students is paramount. We design, install, and maintain centralized commercial RO systems with UV disinfection and water coolers, ensuring safe drinking water is available across the campus.',
    challenges: [
      'High peak demand during break times',
      'Ensuring consistent water quality',
      'Regular maintenance and filter changes',
      'Vandal-proof and durable installations'
    ],
    recommendedProducts: ['ro-plant', 'uv-plant', 'stp'],
    image: 'https://placehold.co/800x600/26495C/FFF.png?text=School+Water+Purification',
  },
  {
    id: 'sec-offices',
    name: 'Corporate Offices',
    slug: 'offices',
    type: 'Sector',
    shortDescription: 'Compact RO systems and water dispensers for modern workspaces.',
    description: 'Replace expensive and cumbersome bottled water jars with our sleek, high-capacity commercial RO systems. We offer AMC services to ensure your office never runs out of safe drinking water.',
    challenges: [
      'Cost and logistics of bottled water jars',
      'Space constraints in office pantries',
      'Aesthetic integration with modern interiors',
      'Hassle-free maintenance'
    ],
    recommendedProducts: ['ro-plant', 'water-softener', 'cartridge-filter'],
    image: 'https://placehold.co/800x600/6C9BB0/FFF.png?text=Office+RO+Systems',
  },
];
