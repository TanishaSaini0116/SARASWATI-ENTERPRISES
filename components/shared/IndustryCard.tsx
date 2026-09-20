import Image from 'next/image';
// import Link from 'next/link';
import { Industry } from '@/types';
import { CTAButton } from './CTAButton';

export const IndustryCard = ({ industry }: { industry: Industry }) => {
  return (
    <div className="group relative bg-primary rounded-2xl overflow-hidden shadow-lg h-[400px]">
      <Image
        src={industry.image}
        alt={industry.name}
        fill
        className="object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent p-8 flex flex-col justify-end transform transition-transform duration-500">
        <h3 className="text-2xl font-bold text-white mb-3">{industry.name}</h3>
        <p className="text-gray-200 text-sm mb-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
          {industry.shortDescription}
        </p>
        <CTAButton 
          href={`/${industry.type === 'Industry' ? 'industries' : 'sectors'}/${industry.slug}`} 
          variant="primary"
          className="w-fit opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100"
        >
          Explore Solutions
        </CTAButton>
      </div>
    </div>
  );
};
