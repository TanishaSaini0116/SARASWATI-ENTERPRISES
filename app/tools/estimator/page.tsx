import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { EstimatorForm } from '@/components/forms/EstimatorForm';

export default function EstimatorPage() {
  return (
    <SectionWrapper bg="gray" className="min-h-screen pt-32">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Budget Estimator</h1>
          <p className="text-lg text-text-muted">
            Get an instant rough estimate for your water treatment plant based on capacity and system type.
          </p>
        </div>
        
        <EstimatorForm />
      </div>
    </SectionWrapper>
  );
}
