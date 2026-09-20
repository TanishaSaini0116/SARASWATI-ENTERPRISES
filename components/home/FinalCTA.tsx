'use client';

import { SectionWrapper } from '../shared/SectionWrapper';
import { CTAButton } from '../shared/CTAButton';
import { PhoneCall, Droplet, Leaf } from 'lucide-react';

export const FinalCTA = () => {
  return (
    <SectionWrapper bg="navy" className="relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[800px] bg-gradient-to-br from-blue-400/30 to-green-500/30 rounded-[100%] blur-[120px] pointer-events-none opacity-20" />
      
      {/* Water droplet and leaf cutouts */}
      <Droplet className="absolute -top-20 -left-10 w-96 h-96 text-blue-200 opacity-[0.05] pointer-events-none -rotate-12" strokeWidth={0.5} />
      <Leaf className="absolute -bottom-20 -right-10 w-96 h-96 text-green-200 opacity-[0.05] pointer-events-none rotate-12" strokeWidth={0.5} />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Upgrade Your Water System?
        </h2>
        <p className="text-xl text-text-muted mb-10 max-w-2xl mx-auto">
          Contact our engineers today for a free site assessment and technical consultation. Let&apos;s build a sustainable future together.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
          <CTAButton href="/contact" variant="primary" className="w-full sm:w-auto text-lg px-8 py-4" icon>
            Request a Quote
          </CTAButton>
          <div className="flex items-center gap-3 text-lg font-semibold">
            <span className="text-text-muted">or call us at</span>
            <a href="tel:+919876543210" className="flex items-center gap-2 text-white hover:text-green-accent transition-colors">
              <PhoneCall className="w-5 h-5" />
              +91 98765 43210
            </a>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-center gap-4 text-sm font-semibold tracking-widest uppercase text-accent">
          <span>Trusted Solutions</span>
          <span className="hidden md:inline text-white">•</span>
          <span>Engineering Excellence</span>
          <span className="hidden md:inline text-white">•</span>
          <span>Sustainable Future</span>
        </div>
      </div>
    </SectionWrapper>
  );
};
