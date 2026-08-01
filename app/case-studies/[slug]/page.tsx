import { notFound } from 'next/navigation';
import { caseStudies } from '@/data/case-studies';
import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { CTAButton } from '@/components/shared/CTAButton';
import Image from 'next/image';
import { CheckCircle2, Building2, MapPin } from 'lucide-react';

export function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export default function CaseStudyDetail({ params }: { params: { slug: string } }) {
  const study = caseStudies.find(s => s.slug === params.slug);

  if (!study) {
    notFound();
  }

  return (
    <article>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px] flex items-end pb-20">
        <Image src={study.image} alt={study.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/80 to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="flex flex-wrap gap-4 mb-6">
              <span className="inline-flex items-center gap-2 bg-brand-green/20 text-brand-green font-semibold text-xs px-3 py-1 rounded-full border border-brand-green/30 uppercase tracking-wider">
                <Building2 className="w-3 h-3" /> {study.industry}
              </span>
              <span className="inline-flex items-center gap-2 bg-white/10 text-gray-200 font-semibold text-xs px-3 py-1 rounded-full border border-white/20 uppercase tracking-wider">
                <MapPin className="w-3 h-3" /> {study.location}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {study.title}
            </h1>
            <p className="text-xl text-gray-300 font-medium">
              Client: {study.client}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <SectionWrapper bg="white">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold text-brand-navy mb-4">The Challenge</h2>
              <p className="text-gray-600 text-lg leading-relaxed">{study.challenge}</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-brand-navy mb-4">Our Solution</h2>
              <p className="text-gray-600 text-lg leading-relaxed">{study.solution}</p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 border border-gray-100 mb-16">
            <h2 className="text-2xl font-bold text-brand-navy mb-8">Key Results</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {study.results.map((result, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium text-lg leading-relaxed">{result}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center">
            <h3 className="text-2xl font-bold text-brand-navy mb-6">Facing similar challenges?</h3>
            <CTAButton href="/contact" variant="primary">
              Talk to Our Experts
            </CTAButton>
          </div>
        </div>
      </SectionWrapper>
    </article>
  );
}
