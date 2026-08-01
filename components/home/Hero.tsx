'use client';

import { motion } from 'framer-motion';
import { CTAButton } from '../shared/CTAButton';

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-brand-navy overflow-hidden">
      {/* Background Graphic/Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/90 to-brand-blue/30 z-10" />
        <div 
          className="absolute inset-0 opacity-30 bg-cover bg-center mix-blend-overlay"
          style={{ backgroundImage: "url('https://placehold.co/1920x1080/0B3D6E/FFF?text=Industrial+Water+Treatment+Facility')" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-brand-green/20 text-brand-green font-semibold text-sm mb-6 border border-brand-green/30 tracking-wide uppercase">
              Engineering Excellence in Water Treatment
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Pure Water for a <br />
              <span className="text-brand-blue">Sustainable Future.</span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
              From heavy-duty industrial RO plants to commercial sewage treatment. We deliver reliable, compliant, and cost-effective water solutions tailored to your exact needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton href="/contact" variant="primary" icon>
                Get a Free Consultation
              </CTAButton>
              <CTAButton href="/industrial" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-navy">
                Explore Industrial Solutions
              </CTAButton>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center justify-center opacity-70"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="text-white text-xs font-semibold tracking-widest uppercase mb-2">Scroll</span>
        <div className="w-0.5 h-12 bg-gradient-to-b from-white to-transparent" />
      </motion.div>
    </section>
  );
};
