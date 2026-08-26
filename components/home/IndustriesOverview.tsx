'use client';

import { motion } from 'framer-motion';
import { SectionWrapper } from '../shared/SectionWrapper';
import { IndustryCard } from '../shared/IndustryCard';
import { industries } from '@/data/industries';
import { CTAButton } from '../shared/CTAButton';

export const IndustriesOverview = () => {
  // Take top 4 industries/sectors to feature
  const featured = industries.slice(0, 4);

  return (
    <SectionWrapper bg="gray">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Industries We Serve</h2>
          <p className="text-lg text-text-muted">
            Tailored water treatment solutions engineered for the specific compliance and volume needs of your sector.
          </p>
        </div>
        <CTAButton href="/industries" variant="outline">
          View All Industries
        </CTAButton>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {featured.map((industry, index) => (
          <motion.div
            key={industry.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <IndustryCard industry={industry} />
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};
