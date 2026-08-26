'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../shared/SectionWrapper';
import { Leaf, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const ACCORDION_ITEMS = [
  {
    id: 'industrial',
    title: 'Industrial Solutions',
    subtitle: 'Heavy-duty RO plants and wastewater management tailored for large-scale operations.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop',
    link: '/industrial'
  },
  {
    id: 'commercial',
    title: 'Commercial Solutions',
    subtitle: 'Efficient water purification for businesses, hotels, and institutions.',
    image: 'https://images.unsplash.com/photo-1541888049615-5853247071e6?q=80&w=800&auto=format&fit=crop',
    link: '/commercial'
  },
  {
    id: 'residential',
    title: 'Residential Solutions',
    subtitle: 'Safe, clean, and reliable drinking water solutions for your home and family.',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop',
    link: '/residential'
  }
];

export const SegmentRouter = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number>(0);

  return (
    <SectionWrapper bg="gray" className="relative z-30 pt-20 pb-20 overflow-hidden">
      {/* Top Text Section */}
      <div className="max-w-7xl mx-auto w-full mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-green-accent mb-6">
          <Leaf className="w-4 h-4" />
          <span className="text-sm font-semibold tracking-wide uppercase">Our Mission</span>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-7">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-text-secondary leading-tight">
              We're Building <br/>a <span className="text-green-accent">Greener</span>, <br/>Cleaner, Stronger World.
            </h2>
          </div>
          <div className="lg:col-span-5 flex flex-col items-start pt-2 lg:pt-4">
            <p className="text-text-muted text-lg leading-relaxed mb-8 max-w-lg">
              Through education, action, and innovation, we empower people to protect nature and create lasting change in water management.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <a href="/contact" className="bg-primary hover:bg-primary text-white rounded-xl px-6 py-3 font-medium transition-colors flex items-center gap-2 shadow-sm hover:shadow-md hover:-translate-y-0.5">
                Explore Projects <ArrowRight className="w-4 h-4" />
              </a>
              <a href="/about" className="px-6 py-3 bg-white text-text-secondary font-medium rounded-xl hover:bg-soft-bg transition-colors shadow-sm border border-gray-100">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Accordion Section */}
      <div className="w-full max-w-7xl mx-auto h-[450px] sm:h-[550px] lg:h-[650px] flex gap-2 sm:gap-4 md:gap-5 pb-8">
        {ACCORDION_ITEMS.map((item, index) => {
          const isActive = hoveredIndex === index;
          return (
            <motion.div
              key={item.id}
              className="relative overflow-hidden rounded-[2rem] cursor-pointer group shadow-xl"
              initial={false}
              animate={{
                flex: isActive ? 6 : 1,
              }}
              transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
              onMouseEnter={() => setHoveredIndex(index)}
              onFocus={() => setHoveredIndex(index)}
              tabIndex={0}
            >
              <Link href={item.link} className="absolute inset-0 w-full h-full block">
                {/* Background Image */}
                <div className="absolute inset-0 w-full h-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    priority={index === 0}
                  />
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 transition-opacity duration-700 ${isActive ? 'bg-gradient-to-t from-[#26495C]/90 via-[#26495C]/40 to-transparent' : 'bg-black/70'}`} />
                </div>

                {/* Content Container */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 lg:p-10 pointer-events-none">
                  
                  {/* Unexpanded Vertical Text */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    initial={false}
                    animate={{ opacity: isActive ? 0 : 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <h3 className="text-white text-lg sm:text-xl lg:text-2xl font-semibold tracking-[0.2em] uppercase whitespace-nowrap -rotate-90 origin-center absolute">
                      {item.title}
                    </h3>
                  </motion.div>

                  {/* Expanded Horizontal Text */}
                  <motion.div
                    className="relative z-10 w-full sm:min-w-[400px]"
                    initial={false}
                    animate={{ 
                      opacity: isActive ? 1 : 0,
                      y: isActive ? 0 : 30
                    }}
                    transition={{ duration: 0.5, delay: isActive ? 0.2 : 0, ease: "easeOut" }}
                  >
                    <div className="flex items-center gap-4 mb-3 sm:mb-4">
                      <div className="w-10 sm:w-12 h-[2px] bg-soft-bg" />
                      <span className="text-soft-bg font-semibold tracking-wider text-sm sm:text-base uppercase">0{index + 1}</span>
                    </div>
                    <h3 className="text-white text-3xl sm:text-4xl lg:text-5xl font-semibold mb-3 sm:mb-5 tracking-tight leading-none drop-shadow-md">
                      {item.title}
                    </h3>
                    <p className="text-white text-sm sm:text-base lg:text-lg max-w-md hidden sm:block leading-relaxed drop-shadow-sm font-medium">
                      {item.subtitle}
                    </p>
                  </motion.div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};
