'use client';

import { motion } from 'framer-motion';
import { SectionWrapper } from '../shared/SectionWrapper';
import Image from 'next/image';
import { CTAButton } from '../shared/CTAButton';

export const ServicesOverview = () => {
  const coreServices = [
    {
      title: 'RO Plants',
      desc: 'High-recovery reverse osmosis systems for pristine water quality.',
      img: 'https://placehold.co/600x400/0B3D6E/FFF?text=RO+Plants'
    },
    {
      title: 'STP Plants',
      desc: 'Eco-friendly sewage treatment for safe disposal and reuse.',
      img: 'https://placehold.co/600x400/4CAF50/FFF?text=STP+Plants'
    },
    {
      title: 'ETP Plants',
      desc: 'Robust effluent treatment complying with pollution board norms.',
      img: 'https://placehold.co/600x400/2E9DE0/FFF?text=ETP+Plants'
    },
    {
      title: 'Installation & Maintenance',
      desc: 'End-to-end turnkey installation and comprehensive AMC support.',
      img: 'https://placehold.co/600x400/0B3D6E/FFF?text=Maintenance'
    }
  ];

  return (
    <SectionWrapper>
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">Our Core Capabilities</h2>
        <p className="text-lg text-gray-600">
          As indicated by our brand identity, we specialize in these four foundational pillars of water and wastewater management.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {coreServices.map((service, idx) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group relative overflow-hidden rounded-2xl aspect-[4/5] shadow-lg"
          >
            <Image 
              src={service.img} 
              alt={service.title} 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/60 to-transparent p-6 flex flex-col justify-end">
              <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
              <p className="text-gray-200 text-sm">{service.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <CTAButton href="/industrial" variant="outline">
          View All Products
        </CTAButton>
      </div>
    </SectionWrapper>
  );
};
