import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { CTAButton } from '@/components/shared/CTAButton';
// import { notFound } from 'next/navigation';

// DUMMY CONTENT - Replace with real data later
export default function Page() {
  return (
    <SectionWrapper>
      <div className="max-w-4xl mx-auto">
        <div className="inline-block py-1 px-3 rounded-full bg-accent/10 text-accent font-semibold text-sm mb-6 uppercase tracking-wider">
          CONTACT
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 capitalize">
          commercial quote
        </h1>
        <div className="prose prose-lg max-w-none text-text-muted mb-12">
          <p>
            Welcome to the commercial quote page under contact. This is a fully functional placeholder page.
            Saraswati Enterprises provides premium engineering solutions for this category.
          </p>
          <h3 className="text-2xl font-bold text-primary mt-8 mb-4">Key Features</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>High-grade engineering and construction</li>
            <li>Energy-efficient performance</li>
            <li>Customized to your exact requirements</li>
            <li>Compliant with all regulatory standards</li>
            <li>Low maintenance and robust design</li>
          </ul>
        </div>
        
        <div className="bg-soft-bg p-8 rounded-2xl border border-gray-100 mb-12">
          <h3 className="text-xl font-bold text-primary mb-4">Technical Specifications</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex justify-between border-b border-gray-200 pb-2">
              <span className="text-text-muted">Capacity</span>
              <span className="font-semibold text-primary">Customizable</span>
            </div>
            <div className="flex justify-between border-b border-gray-200 pb-2">
              <span className="text-text-muted">Material</span>
              <span className="font-semibold text-primary">SS 304 / 316</span>
            </div>
            <div className="flex justify-between border-b border-gray-200 pb-2">
              <span className="text-text-muted">Automation</span>
              <span className="font-semibold text-primary">Fully Auto / Semi-Auto</span>
            </div>
            <div className="flex justify-between border-b border-gray-200 pb-2">
              <span className="text-text-muted">Warranty</span>
              <span className="font-semibold text-primary">1 Year</span>
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
