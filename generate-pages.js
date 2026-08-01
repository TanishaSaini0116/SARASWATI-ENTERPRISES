const fs = require('fs');
const path = require('path');

// Dummy data structures
const categories = {
  industrial: {
    basePath: 'app/industrial',
    contactLink: '/contact/industrial-rfq',
    bgTheme: '0E3B45',
    items: [
      { slug: 'ro-plant', name: 'Industrial RO Plant', features: ['High TDS rejection', 'Continuous operation', 'PLC automated', 'Energy recovery', 'CIP system included'] },
      { slug: 'etp', name: 'Effluent Treatment Plant (ETP)', features: ['ZLD capabilities', 'Biological treatment', 'Chemical dosing', 'Sludge dewatering', 'Remote monitoring'] },
      { slug: 'stp', name: 'Sewage Treatment Plant (STP)', features: ['MBBR technology', 'Odorless operation', 'Compact footprint', 'Treated water reuse', 'Low maintenance'] },
      { slug: 'dm-plant', name: 'Demineralization (DM) Plant', features: ['Two-bed system', 'Mixed bed polishing', 'High purity water', 'Acid/Alkali regeneration', 'Conductivity monitoring'] },
      { slug: 'uf-system', name: 'Ultrafiltration (UF) System', features: ['Hollow fiber membrane', 'High flux rate', 'Turbidity removal', 'Backwash automation', 'Pre-treatment for RO'] },
      { slug: 'desalination-plant', name: 'Desalination Plant', features: ['Sea water RO', 'Corrosion resistant', 'Energy efficient pumps', 'High pressure operation', 'Containerized options'] },
      { slug: 'mix-bed-unit', name: 'Mixed Bed Unit', features: ['Ultra-pure water', 'Resin mixture', 'Low silica leakage', 'Customizable capacity', 'Easy regeneration'] },
      { slug: 'water-treatment-chemicals', name: 'Water Treatment Chemicals', features: ['Antiscalants', 'Biocides', 'Coagulants', 'Flocculants', 'pH adjusters'] },
      { slug: 'instruments', name: 'Treatment Instruments', features: ['Flow meters', 'pH sensors', 'Conductivity meters', 'Pressure gauges', 'Dosing pumps'] }
    ]
  },
  commercial: {
    basePath: 'app/commercial',
    contactLink: '/contact/commercial-quote',
    bgTheme: '1C7C93',
    items: [
      { slug: 'ro-plant', name: 'Commercial RO System', features: ['Skid mounted', '500-2000 LPH', 'FRP vessels', 'Stainless steel frame', 'Low noise'] },
      { slug: 'stp', name: 'Commercial STP', features: ['Underground installation', 'Packaged system', 'Silent blowers', 'Green building compliant', 'Auto sludge removal'] },
      { slug: 'water-softener', name: 'Commercial Water Softener', features: ['Ion exchange', 'Hardness removal', 'Timer based regeneration', 'Food grade resin', 'Scale prevention'] },
      { slug: 'uv-plant', name: 'Commercial UV Plant', features: ['High intensity lamps', 'SS 316 reactor', '99.9% disinfection', 'Quartz sleeves', 'Alarm monitor'] },
      { slug: 'filtration-plant', name: 'Sand & Carbon Filtration', features: ['Multi-grade sand', 'Activated carbon', 'Odor removal', 'Suspended solids removal', 'Manual/Auto valves'] },
      { slug: 'packaged-drinking-water-plant', name: 'Packaged Drinking Water Plant', features: ['Turnkey solution', 'BISI standard', 'Bottle washing', 'Filling machine', 'Ozonation'] }
    ]
  },
  residential: {
    basePath: 'app/residential',
    contactLink: '/contact',
    bgTheme: '2F6B47',
    items: [
      { slug: 'ro-system', name: 'Residential RO Purifier', features: ['Under-sink design', 'Alkaline cartridge', 'TDS controller', 'Storage tank', 'Smart indicators'] },
      { slug: 'water-softener', name: 'Whole House Water Softener', features: ['Protects appliances', 'Better skin/hair', 'Fully automatic', 'Compact design', 'Low salt consumption'] },
      { slug: 'uv-purifier', name: 'UV Water Purifier', features: ['Gravity/In-line options', 'No water wastage', 'Instant purification', 'Sleek design', 'Low power'] },
      { slug: 'cartridge-filter', name: 'Cartridge Filters', features: ['Spun/Wound PP', 'Carbon block', 'Easy replacement', 'Point of use', 'Sediment removal'] },
      { slug: 'water-testing-kits', name: 'Home Water Testing Kits', features: ['TDS meter', 'pH strips', 'Hardness drop test', 'Iron test', 'Chlorine test'] }
    ]
  },
  industries: {
    basePath: 'app/industries',
    contactLink: '/contact/industrial-rfq',
    bgTheme: '1B2A2E',
    items: [
      { slug: 'pharmaceutical', name: 'Pharmaceutical Water Systems', features: ['USFDA compliant', 'WFI generation', 'Purified Water (PW)', 'Sanitary piping', 'Validation documentation'] },
      { slug: 'manufacturing', name: 'Manufacturing Water Solutions', features: ['Process water', 'Cooling tower blowdown', 'Heavy metal removal', 'Zero Liquid Discharge', 'High capacity'] },
      { slug: 'textile', name: 'Textile Industry ETP/ZLD', features: ['Color removal', 'High COD/BOD reduction', 'Caustic recovery', 'Brine concentration', 'Evaporator systems'] },
      { slug: 'food-beverage', name: 'Food & Beverage Water Treatment', features: ['Food grade materials', 'Taste & odor control', 'Microbial safety', 'CIP compatible', 'Consistent quality'] }
    ]
  },
  sectors: {
    basePath: 'app/sectors',
    contactLink: '/contact/commercial-quote',
    bgTheme: 'B8863F',
    items: [
      { slug: 'hospitals', name: 'Hospital Water Treatment', features: ['Dialysis water', 'CSSD sterilization', 'Legionella control', 'Continuous supply', 'Soft water for laundry'] },
      { slug: 'hotels', name: 'Hotel Water Solutions', features: ['Guest room RO', 'Kitchen filtration', 'Swimming pool filters', 'Boiler feed water', 'Sewage recycling'] },
      { slug: 'offices', name: 'Office Water Systems', features: ['Centralized drinking RO', 'Chiller plant water', 'Restroom recycling', 'Aesthetic dispensers', 'Low maintenance contracts'] },
      { slug: 'schools', name: 'School Water Purifiers', features: ['High volume coolers', 'Vandal-proof design', 'Child safe', 'Regular AMC', 'Multi-stage purification'] }
    ]
  }
};

const generatePageContent = (item, categoryData) => {
  const imageUrl = `https://placehold.co/800x600/${categoryData.bgTheme}/F6F4EF?text=${encodeURIComponent(item.name)}`;
  const specs = [
    { label: 'Capacity Range', value: `${Math.floor(Math.random() * 10 + 1) * 100} - ${Math.floor(Math.random() * 50 + 50) * 1000} LPH` },
    { label: 'Power Consumption', value: `${(Math.random() * 5 + 1).toFixed(1)} kW - ${(Math.random() * 20 + 10).toFixed(1)} kW` },
    { label: 'Material of Construction', value: 'FRP / SS 304 / SS 316 / MSRL' },
    { label: 'Automation Level', value: 'Semi-Automatic / Fully Automatic (PLC)' },
    { label: 'Operating Pressure', value: `${Math.floor(Math.random() * 5 + 2)} - ${Math.floor(Math.random() * 10 + 10)} Bar` }
  ];

  return `import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { CTAButton } from '@/components/shared/CTAButton';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

export default function ${item.slug.replace(/-/g, '').toUpperCase()}Page() {
  return (
    <>
      <SectionWrapper bg="navy" className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">${item.name}</h1>
          <p className="text-lg text-gray-300 mb-8">
            Engineered for reliability, efficiency, and compliance. Our ${item.name} solutions are custom-built to meet the exact specifications of your facility.
          </p>
          <CTAButton href="${categoryData.contactLink}" variant="primary">Request a Quote</CTAButton>
        </div>
      </SectionWrapper>

      <SectionWrapper bg="white" className="py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
            <Image src="${imageUrl}" alt="${item.name}" fill className="object-cover" />
          </div>
          
          <div>
            <h2 className="text-3xl font-heading font-bold text-brand-navy mb-6">System Overview</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              The ${item.name} from Saraswati Enterprises represents the pinnacle of modern water treatment engineering. Designed utilizing advanced simulation tools and high-grade materials, this system ensures consistent performance even under fluctuating feed conditions.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Whether you are looking to upgrade an existing facility or implement a greenfield project, our expert engineering team will size, design, and commission the perfect ${item.name} to optimize your operational expenditures while meeting all regulatory frameworks.
            </p>
            
            <h3 className="text-2xl font-heading font-bold text-brand-navy mb-4">Key Features</h3>
            <ul className="space-y-3">
              ${item.features.map(f => `
              <li className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-brand-green shrink-0 mr-3" />
                <span className="text-gray-700">${f}</span>
              </li>`).join('')}
            </ul>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper bg="gray" className="py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-brand-navy mb-4">Technical Specifications</h2>
            <p className="text-gray-600">Standard operating parameters for our ${item.name} series.</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-brand-navy text-white">
                  <th className="p-4 font-semibold w-1/3 border-b border-brand-navy/20">Parameter</th>
                  <th className="p-4 font-semibold border-b border-brand-navy/20">Specification</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                ${specs.map(s => `
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="p-4 font-medium text-gray-700">${s.label}</td>
                  <td className="p-4 text-gray-600">${s.value}</td>
                </tr>`).join('')}
              </tbody>
            </table>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">Need custom specifications? Talk to our engineers.</p>
            <CTAButton href="${categoryData.contactLink}" variant="secondary">Contact Engineering Team</CTAButton>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
`;
};

Object.values(categories).forEach(cat => {
  const fullBasePath = path.join(__dirname, cat.basePath);
  if (!fs.existsSync(fullBasePath)) {
    fs.mkdirSync(fullBasePath, { recursive: true });
  }

  cat.items.forEach(item => {
    const itemDir = path.join(fullBasePath, item.slug);
    if (!fs.existsSync(itemDir)) {
      fs.mkdirSync(itemDir, { recursive: true });
    }
    
    const filePath = path.join(itemDir, 'page.tsx');
    fs.writeFileSync(filePath, generatePageContent(item, cat));
    console.log(`Generated: ${filePath}`);
  });
});
console.log('Finished generating pages!');
