import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { CTAButton } from '@/components/shared/CTAButton';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

export default function AMCMaintenancePage() {
  const imageUrl = "https://placehold.co/800x600/6C9BB0/F6F4EF?text=AMC+Maintenance";

  return (
    <>
      <SectionWrapper bg="navy" className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Annual Maintenance Contracts (AMC)</h1>
          <p className="text-lg text-text-muted mb-8">
            Comprehensive preventative and breakdown maintenance plans to maximize plant uptime.
          </p>
          <CTAButton href="/contact/amc-inquiry" variant="primary">Inquire About AMC</CTAButton>
        </div>
      </SectionWrapper>

      <SectionWrapper bg="white" className="py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
            <Image src={imageUrl} alt="AMC Maintenance" fill className="object-cover" />
          </div>
          
          <div>
            <h2 className="text-3xl font-heading font-bold text-primary mb-6">Service Overview</h2>
            <p className="text-text-muted mb-6 leading-relaxed">
              Downtime is costly. Our AMC packages are designed to shift your maintenance strategy from reactive to proactive. We deploy trained technicians at scheduled intervals to monitor health, replace consumables, and optimize efficiency.
            </p>
            
            <h3 className="text-2xl font-heading font-bold text-primary mb-4">What We Cover</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-green-accent shrink-0 mr-3" />
                <span className="text-text-secondary">Scheduled Preventative Maintenance</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-green-accent shrink-0 mr-3" />
                <span className="text-text-secondary">Priority Breakdown Support</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-green-accent shrink-0 mr-3" />
                <span className="text-text-secondary">Consumables & Spare Parts Management</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-green-accent shrink-0 mr-3" />
                <span className="text-text-secondary">Monthly Performance Audits</span>
              </li>
            </ul>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
