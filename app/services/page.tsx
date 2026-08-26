import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { services } from '@/data/services';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function ServicesIndex() {
  return (
    <SectionWrapper bg="gray" className="min-h-screen pt-32 pb-20">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
          Our Services
        </h1>
        <p className="text-lg text-text-muted">
          Beyond manufacturing, we offer end-to-end support to ensure your water systems operate flawlessly for decades.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service) => (
          <Link href={`/services/${service.slug}`} key={service.id} className="group block">
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col">
              <div className="relative h-56 w-full shrink-0">
                <Image src={service.image} alt={service.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold font-heading text-primary mb-3">{service.title}</h3>
                <p className="text-text-muted mb-6 flex-grow">{service.description}</p>
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
