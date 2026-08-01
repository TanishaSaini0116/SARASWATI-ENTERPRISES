'use client';

import { motion } from 'framer-motion';
import { SectionWrapper } from '../shared/SectionWrapper';
import { CTAButton } from '../shared/CTAButton';
import { Factory, Building, Home } from 'lucide-react';

export const SegmentRouter = () => {
  const segments = [
    {
      title: 'Industrial Solutions',
      icon: <Factory className="w-12 h-12 mb-6 text-brand-blue" />,
      description: 'High-capacity RO, ETP, STP, and ZLD systems designed for heavy manufacturing, pharma, and textile industries.',
      href: '/industrial',
      color: 'hover:border-brand-blue'
    },
    {
      title: 'Commercial Solutions',
      icon: <Building className="w-12 h-12 mb-6 text-brand-green" />,
      description: 'Compact purification and sewage treatment solutions for hospitals, hotels, schools, and corporate offices.',
      href: '/commercial',
      color: 'hover:border-brand-green'
    },
    {
      title: 'Residential Solutions',
      icon: <Home className="w-12 h-12 mb-6 text-brand-navy" />,
      description: 'Premium domestic RO purifiers and whole-house water softeners ensuring the health of your family.',
      href: '/residential',
      color: 'hover:border-brand-navy'
    }
  ];

  return (
    <SectionWrapper bg="gray" className="relative -mt-20 z-30 !pt-0 pb-20">
      <div className="grid md:grid-cols-3 gap-8">
        {segments.map((segment, index) => (
          <motion.div
            key={segment.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`bg-white rounded-2xl p-10 shadow-xl border-t-4 border-transparent ${segment.color} transition-all duration-300 group hover:-translate-y-2`}
          >
            {segment.icon}
            <h3 className="text-2xl font-bold text-brand-navy mb-4 group-hover:text-brand-blue transition-colors">
              {segment.title}
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              {segment.description}
            </p>
            <CTAButton href={segment.href} variant="ghost" className="px-0" icon>
              View Products
            </CTAButton>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};
