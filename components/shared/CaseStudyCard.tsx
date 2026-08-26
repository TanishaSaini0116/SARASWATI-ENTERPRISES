import Image from 'next/image';
import { CaseStudy } from '@/types';
import { CTAButton } from './CTAButton';
import { MapPin, Building2 } from 'lucide-react';

export const CaseStudyCard = ({ study }: { study: CaseStudy }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col h-full group">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={study.image}
          alt={study.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary uppercase tracking-wider flex items-center gap-1">
          <Building2 className="w-3 h-3" /> {study.industry}
        </div>
      </div>
      
      <div className="p-8 flex flex-col flex-grow">
        <div className="flex items-center gap-2 text-sm text-text-muted mb-4">
          <MapPin className="w-4 h-4 text-green-accent" />
          <span>{study.location}</span>
        </div>
        
        <h3 className="text-xl font-bold text-primary mb-4 leading-tight group-hover:text-accent transition-colors">
          {study.title}
        </h3>
        
        <div className="mb-6 flex-grow">
          <p className="text-sm text-text-muted line-clamp-3">
            <span className="font-semibold text-primary">Challenge:</span> {study.challenge}
          </p>
        </div>
        
        <div className="pt-6 border-t border-gray-100 mt-auto">
          <CTAButton href={`/case-studies/${study.slug}`} variant="ghost" className="px-0" icon>
            Read Full Case Study
          </CTAButton>
        </div>
      </div>
    </div>
  );
};
