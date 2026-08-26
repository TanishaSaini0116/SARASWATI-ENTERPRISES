'use client';

import { Play, Sparkles } from 'lucide-react';
import BoomerangVideoBg from './BoomerangVideoBg';

const BG_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260511_131941_d136af49-e243-493a-be14-6ff3f24e09e6.mp4';

export const Hero = () => {
  return (
    <section className="relative w-full min-h-[90vh] sm:h-[90vh] overflow-hidden bg-primary">
      <BoomerangVideoBg src={BG_VIDEO} className="absolute inset-0 w-full h-full opacity-60 mix-blend-screen" />

      {/* Hero copy */}
      <div className="relative z-10 flex flex-col items-center text-center pt-24 sm:pt-28 md:pt-32 px-4 sm:px-6 h-full justify-center -mt-16">
        <h1
          className="font-normal leading-[0.95] text-green-accent text-[2rem] sm:text-4xl md:text-5xl lg:text-[4.75rem] xl:text-[5.25rem] max-w-5xl drop-shadow-lg"
          style={{ fontFamily: '"Neue Haas Grotesk Display Pro 55 Roman", "Neue Haas Grotesk Text Pro", "Helvetica Neue", Helvetica, Arial, sans-serif', letterSpacing: '-0.035em' }}
        >
          Pure Water for a <br className="hidden sm:block" />
          <span className="text-white">
            Sustainable Future.
          </span>
        </h1>
        <p className="mt-6 sm:mt-8 text-white text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl px-2 font-medium">
          From heavy-duty industrial RO plants to commercial sewage treatment. We deliver reliable, compliant, and cost-effective water solutions tailored to your exact needs.
        </p>
      </div>

      {/* Bottom-left CTA block */}
      <div className="absolute left-4 right-4 sm:right-auto sm:left-6 md:left-10 bottom-6 sm:bottom-8 md:bottom-10 z-10 max-w-sm">
        <div className="flex items-center gap-2 text-white mb-3">
          <Sparkles className="w-4 h-4 text-green-accent" />
          <span className="text-sm font-semibold sm:font-medium">
            Engineering Excellence<sup className="text-[10px]">TM</sup>
          </span>
        </div>
        <p className="text-white text-xs leading-relaxed mb-6 max-w-xs font-medium sm:font-normal">
          Leading provider of industrial, commercial, and residential water treatment solutions ensuring absolute purity and regulatory compliance.
        </p>
        <div className="flex items-center gap-4 flex-wrap">
          <a href="/contact" className="inline-flex bg-white hover:bg-white/90 text-primary text-sm font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-full transition-colors shadow-sm">
            Free Consultation
          </a>
          <a href="/industrial" className="text-white text-sm font-semibold sm:font-medium hover:opacity-80 transition-opacity">
            Explore Solutions.
          </a>
        </div>
      </div>

      {/* Bottom-right video link */}
      <div className="hidden sm:flex absolute right-6 md:right-10 bottom-8 md:bottom-10 z-10 items-center gap-2 text-white text-sm">
        <button className="flex items-center justify-center w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors">
          <Play className="w-3 h-3 fill-white text-white ml-0.5" />
        </button>
        <span className="font-medium">How we build?</span>
        <span className="text-white">1:35</span>
      </div>
    </section>
  );
};
