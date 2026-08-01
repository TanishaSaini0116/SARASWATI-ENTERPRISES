import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { CTAButton } from '@/components/shared/CTAButton';
import { notFound } from 'next/navigation';

// DUMMY CONTENT - Replace with real data later
export default function Page() {
  return (
    <SectionWrapper>
      <div className="max-w-4xl mx-auto">
        <div className="inline-block py-1 px-3 rounded-full bg-brand-blue/10 text-brand-blue font-semibold text-sm mb-6 uppercase tracking-wider">
          CONTACT
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6 capitalize">
          industrial rfq
        </h1>
        <div className="prose prose-lg max-w-none text-gray-600 mb-12">
          <p>
            Welcome to the industrial rfq page under contact. This is a fully functional placeholder page.
            Saraswati Enterprises provides premium engineering solutions for this category.
          </p>
          <h3 className="text-2xl font-bold text-brand-navy mt-8 mb-4">Key Features</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>High-grade engineering and construction</li>
            <li>Energy-efficient performance</li>
            <li>Customized to your exact requirements</li>
            <li>Compliant with all regulatory standards</li>
            <li>Low maintenance and robust design</li>
          </ul>
        </div>
        
        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 mb-12">
          <h3 className="text-xl font-bold text-brand-navy mb-4">Technical Specifications</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex justify-between border-b border-gray-200 pb-2">
              <span className="text-gray-500">Capacity</span>
              <span className="font-semibold text-brand-navy">Customizable</span>
            </div>
            <div className="flex justify-between border-b border-gray-200 pb-2">
              <span className="text-gray-500">Material</span>
              <span className="font-semibold text-brand-navy">SS 304 / 316</span>
            </div>
            <div className="flex justify-between border-b border-gray-200 pb-2">
              <span className="text-gray-500">Automation</span>
              <span className="font-semibold text-brand-navy">Fully Auto / Semi-Auto</span>
            </div>
            <div className="flex justify-between border-b border-gray-200 pb-2">
              <span className="text-gray-500">Warranty</span>
              <span className="font-semibold text-brand-navy">1 Year</span>
            </div>
          </div>
        </div>

        <CTAButton href="/contact" variant="primary">
          Request a Quote
        </CTAButton>
      </div>
    </SectionWrapper>
  );
}
