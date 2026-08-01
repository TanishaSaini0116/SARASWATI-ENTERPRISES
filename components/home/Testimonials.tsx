'use client';

import { motion } from 'framer-motion';
import { SectionWrapper } from '../shared/SectionWrapper';
import { Quote } from 'lucide-react';

export const Testimonials = () => {
  const testimonials = [
    {
      quote: "Saraswati Enterprises installed our 500 KLD ETP plant. Their engineering expertise and post-installation support have been outstanding. We passed our pollution board audits with zero issues.",
      name: "Rajesh Kumar",
      designation: "Plant Head",
      company: "Apex Textiles"
    },
    {
      quote: "The DM plant supplied for our pharma unit is flawless. Conductivity is consistently below 0.1 µS/cm. Highly recommend them for any critical water treatment needs.",
      name: "Dr. Sunita Sharma",
      designation: "Quality Director",
      company: "MediCare Pharma"
    },
    {
      quote: "We switched our hotel's entire water system to Saraswati. The RO and Softener combination has drastically reduced our maintenance costs on boilers and laundry.",
      name: "Vikram Singh",
      designation: "Chief Engineer",
      company: "Grand Horizon Hotels"
    },
    {
      quote: "Very professional team. They designed a compact STP for our commercial complex that is completely odorless and requires very little operator intervention.",
      name: "Amit Patel",
      designation: "Facility Manager",
      company: "TechPark IT SEZ"
    }
  ];

  return (
    <SectionWrapper bg="gray">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">Client Testimonials</h2>
        <p className="text-lg text-gray-600">
          Don't just take our word for it. Hear what industry leaders say about our water treatment solutions.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((test, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 relative"
          >
            <Quote className="absolute top-8 right-8 w-12 h-12 text-gray-100 rotate-180" />
            <p className="text-gray-700 text-lg leading-relaxed mb-8 relative z-10 italic">
              "{test.quote}"
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center text-brand-blue font-bold text-xl">
                {test.name.charAt(0)}
              </div>
              <div>
                <h4 className="font-bold text-brand-navy">{test.name}</h4>
                <p className="text-sm text-gray-500">{test.designation}, {test.company}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};
