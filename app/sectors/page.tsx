import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { sectors } from '@/data/sectors';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function SectorsIndex() {
  return (
    <SectionWrapper bg="gray" className="min-h-screen pt-32 pb-20">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
          Sectors We Serve
        </h1>
        <p className="text-lg text-text-muted">
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
                <h3 className="text-2xl font-bold font-heading text-primary mb-3">{sector.title}</h3>
                <p className="text-text-muted mb-6">{sector.description}</p>
                <div className="flex items-center text-accent font-bold group-hover:text-primary transition-colors">
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
