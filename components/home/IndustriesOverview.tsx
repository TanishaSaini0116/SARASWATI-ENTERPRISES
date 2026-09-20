'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, FlaskConical, Factory, Scissors, Utensils, Stethoscope } from 'lucide-react';
import { industries } from '@/data/industries';
import Image from 'next/image';

const carouselData = [
  {
    ...industries.find(i => i.id === 'ind-pharmaceutical'),
    icon: FlaskConical,
    stat: "USP & IP Standard",
    image: "https://images.unsplash.com/photo-1532187863486-abf9db61b7f5?q=80&w=800"
  },
  {
    ...industries.find(i => i.id === 'ind-manufacturing'),
    icon: Factory,
    stat: "Zero Liquid Discharge",
    image: "https://images.unsplash.com/photo-1565439399220-40507a211470?q=80&w=800"
  },
  {
    ...industries.find(i => i.id === 'ind-textile'),
    icon: Scissors,
    stat: "95% Water Recovery",
    image: "https://images.unsplash.com/photo-1528319725582-ddc096101511?q=80&w=800"
  },
  {
    ...industries.find(i => i.id === 'ind-food-beverage'),
    icon: Utensils,
    stat: "Food-Grade Systems",
    image: "https://images.unsplash.com/photo-1589227365533-cee630bf1211?q=80&w=800"
  },
  {
    ...industries.find(i => i.id === 'sec-hospitals'),
    icon: Stethoscope,
    stat: "24/7 Pure Water",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800"
  }
];

export const IndustriesOverview = () => {
  const [currentIndex, setCurrentIndex] = useState(2); // Start with center focused

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + carouselData.length) % carouselData.length);
  };

  const getCardStyle = (index: number) => {
    let offset = index - currentIndex;
    const length = carouselData.length;
    
    // Circular offset calculation for infinite loop effect (keeps symmetric side cards)
    if (offset > Math.floor(length / 2)) {
      offset -= length;
    } else if (offset < -Math.floor(length / 2)) {
      offset += length;
    }

    const absOffset = Math.abs(offset);
    const zIndex = 10 - absOffset;
    
    // Dynamic scale to fit container without clipping on the edges
    const scale = offset === 0 ? 1 : (absOffset === 1 ? 0.75 : 0.6);
    
    // Dynamic x positioning to maintain consistent gaps (~20px) and prevent clipping
    let x = 0;
    if (absOffset === 1) x = 265;
    if (absOffset === 2) x = 474;
    x = offset < 0 ? -x : x;
    
    const opacity = offset === 0 ? 1 : (absOffset === 1 ? 0.55 : 0.3);
    const blur = offset === 0 ? 0 : (absOffset === 1 ? 3 : 6);

    return {
      zIndex,
      scale,
      x: x,
      opacity,
      filter: `blur(${blur}px)`,
      transition: { duration: 0.5, ease: "easeInOut" as const }
    };
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50/50 overflow-hidden relative">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="relative bg-white/40 backdrop-blur-3xl border border-white/60 rounded-[40px] p-8 md:p-16 shadow-[0_20px_50px_-12px_rgba(14,59,69,0.05)] overflow-hidden">
          
          {/* Header */}
          <div className="text-center mb-16 relative z-20">
            <span className="inline-block py-1.5 px-4 rounded-full bg-white shadow-sm border border-gray-100 text-sm font-semibold text-primary mb-6">
              What We Do
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 tracking-tight">Industries We Serve</h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              Tailored water treatment solutions engineered for the specific compliance and volume needs of your sector.
            </p>
          </div>

          {/* Floating Bubbles (Desktop only) */}
          <div className="hidden lg:block absolute left-12 top-1/3 z-30">
            <div className="relative">
              <svg className="absolute -right-28 top-1/2 w-28 h-12 text-gray-300" viewBox="0 0 100 50" preserveAspectRatio="none">
                <path d="M0,25 Q50,0 100,25" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
              </svg>
              <div className="bg-white rounded-full p-2 pr-4 shadow-lg shadow-black/5 flex items-center gap-3 border border-gray-100 relative z-10">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold overflow-hidden">
                  <Image src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150" alt="Avatar" width={40} height={40} className="object-cover" />
                </div>
                <div className="text-sm font-medium text-gray-800">Trusted partner 💧</div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block absolute right-12 top-1/4 z-30">
            <div className="relative">
              <svg className="absolute -left-28 top-1/2 w-28 h-12 text-gray-300" viewBox="0 0 100 50" preserveAspectRatio="none">
                <path d="M100,25 Q50,50 0,25" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
              </svg>
              <div className="bg-white rounded-full p-2 pl-4 shadow-lg shadow-black/5 flex items-center gap-3 border border-gray-100 relative z-10">
                <div className="text-sm font-medium text-gray-800">Built to last 🏗️</div>
                <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600 font-bold overflow-hidden">
                  <Image src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=150" alt="Avatar" width={40} height={40} className="object-cover" />
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Carousel */}
          <div className="hidden md:flex relative w-full h-[480px] justify-center items-center mt-6 z-10">
            {/* Soft bluish-lavender radial gradient glow perfectly centered behind the cards */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] max-w-[1200px] h-[500px] bg-blue-100/80 rounded-[100%] blur-[90px] pointer-events-none z-0" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-100/90 rounded-[100%] blur-[70px] pointer-events-none z-0" />
            
            <AnimatePresence initial={false}>
              {carouselData.map((item, index) => {
                const Icon = item.icon!;
                const { zIndex, scale, x, opacity, filter, transition } = getCardStyle(index);

                return (
                  <motion.div
                    key={item.id}
                    className="absolute w-[280px] h-[390px] rounded-[2rem] overflow-hidden shadow-2xl cursor-pointer bg-white"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ zIndex, scale, x, opacity, filter }}
                    transition={transition}
                    onClick={() => setCurrentIndex(index)}
                  >
                    {/* Background Image */}
                    <div className="absolute inset-0 bg-gray-200">
                      <Image 
                        src={item.image!}
                        alt={item.name!}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                    {/* Gradient Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
                    
                    {/* Top Tag */}
                    <div className="absolute top-4 left-4">
                      <div className="bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-2 shadow-sm">
                        <Icon className="w-3.5 h-3.5" />
                        {item.name}
                      </div>
                    </div>

                    {/* Bottom Info */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-sm">
                        <h3 className="text-white font-bold text-lg mb-2 leading-tight">{item.name}</h3>
                        <div className="flex items-center justify-between text-white/90 text-sm border-t border-white/20 pt-3 mt-1">
                          <span className="font-medium tracking-wide">{item.stat}</span>
                          <div className="flex items-center gap-1 opacity-70">
                            <span className="w-1.5 h-1.5 rounded-full bg-white block"></span>
                            <span className="w-1.5 h-1.5 rounded-full bg-white block"></span>
                            <span className="w-1.5 h-1.5 rounded-full bg-white block"></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Mobile Swipeable Row */}
          <div className="md:hidden flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 -mx-4 px-4 no-scrollbar">
            {carouselData.map((item) => {
              const Icon = item.icon!;
              return (
                <div 
                  key={item.id} 
                  className="relative flex-none w-[85vw] h-[400px] snap-center rounded-[2rem] overflow-hidden shadow-xl"
                >
                  <div className="absolute inset-0 bg-gray-200">
                    <Image 
                      src={item.image!}
                      alt={item.name!}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
                  
                  <div className="absolute top-4 left-4">
                    <div className="bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-2">
                      <Icon className="w-3.5 h-3.5" />
                      {item.name}
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4">
                      <h3 className="text-white font-bold text-lg mb-2">{item.name}</h3>
                      <div className="flex items-center justify-between text-white/90 text-sm border-t border-white/20 pt-2">
                        <span className="font-medium">{item.stat}</span>
                        <div className="flex items-center gap-1 opacity-70">
                          <span className="w-1.5 h-1.5 rounded-full bg-white block"></span>
                          <span className="w-1.5 h-1.5 rounded-full bg-white block"></span>
                          <span className="w-1.5 h-1.5 rounded-full bg-white block"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Controls (Desktop) */}
          <div className="hidden md:flex justify-center items-center gap-4 mt-8 relative z-20">
            <button 
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm flex items-center justify-center text-gray-600 hover:text-primary hover:bg-white hover:scale-105 active:scale-95 transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm flex items-center justify-center text-gray-600 hover:text-primary hover:bg-white hover:scale-105 active:scale-95 transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
