'use client';

import { SectionWrapper } from '../shared/SectionWrapper';
import { caseStudies } from '@/data/case-studies';
import { CTAButton } from '../shared/CTAButton';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

export const FeaturedCaseStudy = () => {
  const featured = caseStudies.find(cs => cs.featured) || caseStudies[0];

  return (
    <SectionWrapper>
      <div className="bg-primary rounded-3xl overflow-hidden shadow-2xl">
        <div className="grid lg:grid-cols-2">
          {/* Content */}
          <div className="p-10 md:p-16 flex flex-col justify-center">
            <div className="inline-block py-1 px-3 rounded-full bg-green-accent/20 text-green-accent font-semibold text-xs mb-6 border border-green-accent/30 tracking-wide uppercase w-fit">
              Featured Case Study
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              {featured.title}
            </h2>
            
            <p className="text-text-muted text-lg mb-8 leading-relaxed">
              {featured.challenge}
            </p>
            
            <div className="space-y-4 mb-10">
              {featured.results.slice(0, 3).map((result, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-accent shrink-0 mt-0.5" />
                  <span className="text-gray-200">{result}</span>
                </div>
              ))}
            </div>
            
            <CTAButton href={`/case-studies/${featured.slug}`} variant="primary" icon className="w-fit">
              Read the Full Story
            </CTAButton>
          </div>
          
          {/* Image */}
          <div className="relative h-64 lg:h-auto min-h-[400px]">
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              className="object-cover"
            />
            {/* Stat Overlay */}
            <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur p-6 rounded-xl shadow-xl flex items-center justify-between">
              <div>
                <div className="text-sm text-text-muted font-semibold uppercase tracking-wider mb-1">Client</div>
                <div className="text-xl font-bold text-primary">{featured.client}</div>
              </div>
              <div className="text-right">
                <div className="text-sm text-text-muted font-semibold uppercase tracking-wider mb-1">Industry</div>
                <div className="text-xl font-bold text-green-accent">{featured.industry}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
