import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { CaseStudyCard } from '@/components/shared/CaseStudyCard';
import { caseStudies } from '@/data/case-studies';

export default function CaseStudiesPage() {
  return (
    <SectionWrapper bg="gray" className="pt-32">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Success Stories</h1>
        <p className="text-lg text-text-muted">
          Discover how Saraswati Enterprises has helped industries achieve compliance, reduce costs, and improve efficiency through advanced water treatment.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {caseStudies.map((study) => (
          <CaseStudyCard key={study.id} study={study} />
        ))}
      </div>
    </SectionWrapper>
  );
}
