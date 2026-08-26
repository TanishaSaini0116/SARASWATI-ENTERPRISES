import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { CTAButton } from '@/components/shared/CTAButton';

export default function ResourceDetail({ params }: { params: { slug: string } }) {
  return (
    <SectionWrapper bg="white" className="pt-32">
      <div className="max-w-3xl mx-auto">
        <div className="inline-block bg-accent/10 text-accent font-semibold text-xs px-3 py-1 rounded-full mb-6 w-fit uppercase tracking-wider">
          Article
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 capitalize leading-tight">
          {params.slug.replace(/-/g, ' ')}
        </h1>
        <div className="flex items-center gap-4 text-sm text-text-muted mb-12 pb-8 border-b border-gray-100">
          <span>Published by Saraswati Engineering Team</span>
          <span>•</span>
          <span>5 min read</span>
        </div>
        
        <div className="prose prose-lg max-w-none text-text-muted mb-16">
          <p className="lead text-xl text-text-secondary mb-8 font-medium">
            This is a dummy blog post content area for the article titled "{params.slug.replace(/-/g, ' ')}". 
            In the final version, this would be generated from an MDX file in the <code>content/resources/</code> folder.
          </p>
          <h2 className="text-2xl font-bold text-primary mb-4 mt-8">The Core Problem</h2>
          <p className="mb-6">
            Industries today face unprecedented challenges regarding water scarcity and stringent pollution control norms. 
            Understanding the right treatment methodology is no longer optional—it's a critical business requirement.
          </p>
          <h2 className="text-2xl font-bold text-primary mb-4 mt-8">Key Considerations</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Raw water quality and complete mineral analysis</li>
            <li>Peak flow requirements vs average daily usage</li>
            <li>Local pollution control board (SPCB) discharge norms</li>
            <li>Availability of space and skilled operators</li>
          </ul>
          <p>
            By partnering with an experienced OEM like Saraswati Enterprises, you ensure that your plant is designed optimally for both CAPEX and long-term OPEX.
          </p>
        </div>

        <div className="bg-primary text-white p-8 md:p-12 rounded-2xl text-center">
          <h3 className="text-2xl font-bold mb-4">Need Expert Advice?</h3>
          <p className="text-text-muted mb-8">Our engineers are available for a free consultation regarding your specific water treatment needs.</p>
          <CTAButton href="/contact" variant="primary">
            Contact Us Today
          </CTAButton>
        </div>
      </div>
    </SectionWrapper>
  );
}
