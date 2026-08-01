import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { CTAButton } from '@/components/shared/CTAButton';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

export default function ConsultationPage() {
  const imageUrl = "https://placehold.co/800x600/2F6B47/F6F4EF?text=Consultation+Services";

  return (
    <>
      <SectionWrapper bg="navy" className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Consultation & Auditing</h1>
          <p className="text-lg text-gray-300 mb-8">
            Detailed water audits, feasibility studies, and regulatory compliance consulting.
          </p>
          <CTAButton href="/contact" variant="primary">Schedule an Audit</CTAButton>
        </div>
      </SectionWrapper>

      <SectionWrapper bg="white" className="py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
            <Image src={imageUrl} alt="Consultation Services" fill className="object-cover" />
          </div>
          
          <div>
            <h2 className="text-3xl font-heading font-bold text-brand-navy mb-6">Service Overview</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Before investing in heavy machinery, a detailed study of your water profile and consumption habits can save millions. Our environmental engineers provide unbiased consulting to help you design zero-liquid-discharge systems and optimize existing setups.
            </p>
            
            <h3 className="text-2xl font-heading font-bold text-brand-navy mb-4">What We Cover</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-brand-green shrink-0 mr-3" />
                <span className="text-gray-700">Raw Water Profiling</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-brand-green shrink-0 mr-3" />
                <span className="text-gray-700">System Bottleneck Identification</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-brand-green shrink-0 mr-3" />
                <span className="text-gray-700">ZLD Feasibility Reports</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-brand-green shrink-0 mr-3" />
                <span className="text-gray-700">Pollution Control Board Compliance</span>
              </li>
            </ul>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
