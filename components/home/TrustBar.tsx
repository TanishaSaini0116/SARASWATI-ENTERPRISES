'use client';

import { motion } from 'framer-motion';

export const TrustBar = () => {
  const stats = [
    { value: '15+', label: 'Years of Experience' },
    { value: '500+', label: 'Installations Worldwide' },
    { value: '50+', label: 'Industries Served' },
    { value: '24/7', label: 'Support & Maintenance' },
  ];

  return (
    <div className="bg-brand-navy py-12 border-y border-brand-blue/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center px-4"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">
                {stat.value}
              </div>
              <div className="text-brand-green font-medium text-sm md:text-base uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
