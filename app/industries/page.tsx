import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { IndustryCard } from '@/components/shared/IndustryCard';
import { industries } from '@/data/industries';

export default function IndustriesIndex() {
  return (
    <SectionWrapper bg="gray" className="min-h-screen pt-32 pb-20">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
          Industries We Serve
        </h1>
        <p className="text-lg text-text-muted">
          Tailored water treatment solutions engineered for the specific compliance and volume needs of your manufacturing sector.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {industries.map((industry) => (
          <IndustryCard key={industry.id} industry={industry} />
        ))}
      </div>
    </SectionWrapper>
  );
}
