import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { CTAButton } from '@/components/shared/CTAButton';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

export default function ROPLANTPage() {
  return (
    <>
      <SectionWrapper bg="navy" className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Commercial RO System</h1>
          <p className="text-lg text-gray-300 mb-8">
            Engineered for reliability, efficiency, and compliance. Our Commercial RO System solutions are custom-built to meet the exact specifications of your facility.
          </p>
          <CTAButton href="/contact/commercial-quote" variant="primary">Request a Quote</CTAButton>
        </div>
      </SectionWrapper>

      <SectionWrapper bg="white" className="py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
            <Image src="https://placehold.co/800x600/1C7C93/F6F4EF?text=Commercial%20RO%20System" alt="Commercial RO System" fill className="object-cover" />
          </div>
          
          <div>
            <h2 className="text-3xl font-heading font-bold text-brand-navy mb-6">System Overview</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              The Commercial RO System from Saraswati Enterprises represents the pinnacle of modern water treatment engineering. Designed utilizing advanced simulation tools and high-grade materials, this system ensures consistent performance even under fluctuating feed conditions.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Whether you are looking to upgrade an existing facility or implement a greenfield project, our expert engineering team will size, design, and commission the perfect Commercial RO System to optimize your operational expenditures while meeting all regulatory frameworks.
            </p>
            
            <h3 className="text-2xl font-heading font-bold text-brand-navy mb-4">Key Features</h3>
            <ul className="space-y-3">
              
              <li className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-brand-green shrink-0 mr-3" />
                <span className="text-gray-700">Skid mounted</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-brand-green shrink-0 mr-3" />
                <span className="text-gray-700">500-2000 LPH</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-brand-green shrink-0 mr-3" />
                <span className="text-gray-700">FRP vessels</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-brand-green shrink-0 mr-3" />
                <span className="text-gray-700">Stainless steel frame</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-brand-green shrink-0 mr-3" />
                <span className="text-gray-700">Low noise</span>
              </li>
            </ul>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper bg="gray" className="py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-brand-navy mb-4">Technical Specifications</h2>
            <p className="text-gray-600">Standard operating parameters for our Commercial RO System series.</p>
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
                
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="p-4 font-medium text-gray-700">Capacity Range</td>
                  <td className="p-4 text-gray-600">1000 - 83000 LPH</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="p-4 font-medium text-gray-700">Power Consumption</td>
                  <td className="p-4 text-gray-600">2.4 kW - 16.0 kW</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="p-4 font-medium text-gray-700">Material of Construction</td>
                  <td className="p-4 text-gray-600">FRP / SS 304 / SS 316 / MSRL</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="p-4 font-medium text-gray-700">Automation Level</td>
                  <td className="p-4 text-gray-600">Semi-Automatic / Fully Automatic (PLC)</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="p-4 font-medium text-gray-700">Operating Pressure</td>
                  <td className="p-4 text-gray-600">3 - 17 Bar</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">Need custom specifications? Talk to our engineers.</p>
            <CTAButton href="/contact/commercial-quote" variant="secondary">Contact Engineering Team</CTAButton>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
