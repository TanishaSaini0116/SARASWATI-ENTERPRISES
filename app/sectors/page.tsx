import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { sectors } from '@/data/sectors';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function SectorsIndex() {
  return (
    <SectionWrapper bg="gray" className="min-h-screen pt-32 pb-20">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-brand-navy mb-6">
          Sectors We Serve
        </h1>
        <p className="text-lg text-gray-600">
          Commercial water solutions crafted for institutional and public environments.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {sectors.map((sector) => (
          <Link href={`/sectors/${sector.slug}`} key={sector.id} className="group block">
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 w-full">
                <Image src={sector.image} alt={sector.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold font-heading text-brand-navy mb-3">{sector.title}</h3>
                <p className="text-gray-600 mb-6">{sector.description}</p>
                <div className="flex items-center text-brand-blue font-bold group-hover:text-brand-navy transition-colors">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </SectionWrapper>
  );
}
