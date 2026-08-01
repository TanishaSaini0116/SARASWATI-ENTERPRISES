import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { CTAButton } from '@/components/shared/CTAButton';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

export default function InstallationPage() {
  const imageUrl = "https://placehold.co/800x600/0E3B45/F6F4EF?text=Professional+Installation";

  return (
    <>
      <SectionWrapper bg="navy" className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Professional Installation</h1>
          <p className="text-lg text-gray-300 mb-8">
            Expert, end-to-end commissioning of water treatment plants ensuring zero-defect deployment.
          </p>
          <CTAButton href="/contact" variant="primary">Book Consultation</CTAButton>
        </div>
      </SectionWrapper>

      <SectionWrapper bg="white" className="py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
            <Image src={imageUrl} alt="Professional Installation" fill className="object-cover" />
          </div>
          
          <div>
            <h2 className="text-3xl font-heading font-bold text-brand-navy mb-6">Service Overview</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Proper installation is critical to the longevity and performance of any water treatment system. Our certified engineers handle everything from civil foundation validation to mechanical erection and electrical commissioning.
            </p>
            
            <h3 className="text-2xl font-heading font-bold text-brand-navy mb-4">What We Cover</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-brand-green shrink-0 mr-3" />
                <span className="text-gray-700">Site Readiness & Layout Planning</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-brand-green shrink-0 mr-3" />
                <span className="text-gray-700">Mechanical Erection & Piping</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-brand-green shrink-0 mr-3" />
                <span className="text-gray-700">Electrical & PLC Integration</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-brand-green shrink-0 mr-3" />
                <span className="text-gray-700">Wet Testing & Final Handover</span>
              </li>
            </ul>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
