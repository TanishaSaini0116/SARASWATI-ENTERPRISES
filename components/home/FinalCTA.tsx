'use client';

import { SectionWrapper } from '../shared/SectionWrapper';
import { CTAButton } from '../shared/CTAButton';
import { PhoneCall } from 'lucide-react';

export const FinalCTA = () => {
  return (
    <SectionWrapper bg="navy" className="relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-brand-blue rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-96 h-96 bg-brand-green rounded-full opacity-20 blur-3xl"></div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Upgrade Your Water System?
        </h2>
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Contact our engineers today for a free site assessment and technical consultation. Let's build a sustainable future together.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
          <CTAButton href="/contact" variant="primary" className="w-full sm:w-auto text-lg px-8 py-4" icon>
            Request a Quote
          </CTAButton>
          <div className="flex items-center gap-3 text-lg font-semibold">
            <span className="text-gray-400">or call us at</span>
            <a href="tel:+919876543210" className="flex items-center gap-2 text-white hover:text-brand-green transition-colors">
              <PhoneCall className="w-5 h-5" />
              +91 98765 43210
            </a>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-center gap-4 text-sm font-semibold tracking-widest uppercase text-brand-blue">
          <span>Trusted Solutions</span>
          <span className="hidden md:inline text-white/20">•</span>
          <span>Engineering Excellence</span>
          <span className="hidden md:inline text-white/20">•</span>
          <span>Sustainable Future</span>
        </div>
      </div>
    </SectionWrapper>
  );
};
