'use client';

import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  { q: "What is the lifespan of an Industrial RO Plant?", a: "With proper maintenance and timely membrane replacement, an Industrial RO Plant can last 10-15 years. The membranes typically need replacement every 2-3 years depending on feed water quality." },
  { q: "Do you provide AMC (Annual Maintenance Contracts)?", a: "Yes, we offer comprehensive and non-comprehensive AMCs for all water treatment plants, including RO, ETP, and STP, even if they were installed by other vendors." },
  { q: "What is the difference between ETP and STP?", a: "ETP (Effluent Treatment Plant) is designed to treat complex industrial wastewater containing chemicals and heavy metals. STP (Sewage Treatment Plant) is meant to treat domestic sewage from toilets and kitchens." },
  { q: "How much space does a 100 KLD STP require?", a: "Our compact MBBR-based 100 KLD STP typically requires an area of about 15-20 sq meters, though we can customize the dimensions (civil or packaged) based on site availability." },
  { q: "Can we achieve Zero Liquid Discharge (ZLD)?", a: "Yes. By combining biological treatment, Ultrafiltration, Reverse Osmosis, and Multi-Effect Evaporators (MEE), we design complete ZLD systems that recover over 95% of water and leave only dry solid waste." },
  { q: "Are your water softeners fully automatic?", a: "Yes, our commercial and industrial water softeners feature programmable multiport valves that automatically initiate backwash and regeneration based on time or volume." },
  { q: "Do you supply water treatment chemicals?", a: "Yes, we supply RO antiscalants, biocides, boiler chemicals, cooling tower chemicals, and coagulants tailored to your specific water chemistry." },
  { q: "How quickly can you deliver a commercial RO system?", a: "Standard commercial RO systems (up to 1000 LPH) are usually kept in stock or can be assembled and delivered within 3-5 working days." },
];

export default function FAQPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <SectionWrapper bg="gray" className="min-h-screen pt-32">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-center">Frequently Asked Questions</h1>
        <p className="text-lg text-text-muted text-center mb-12">Find answers to common questions about our water treatment solutions.</p>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <button 
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full px-6 py-4 flex items-center justify-between font-bold text-left text-primary hover:bg-soft-bg transition-colors"
              >
                <span>{faq.q}</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${openIdx === i ? 'rotate-180' : ''}`} />
              </button>
              {openIdx === i && (
                <div className="px-6 pb-4 pt-2 text-text-muted border-t border-gray-100">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
