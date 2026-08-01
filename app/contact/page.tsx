import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { ContactForm } from '@/components/forms/ContactForm';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function ContactPage() {
  return (
    <SectionWrapper bg="gray" className="pt-32">
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">Get in Touch</h1>
          <p className="text-lg text-gray-600 mb-12">
            Whether you need a new installation, maintenance support, or a technical consultation, our team of experts is ready to assist you.
          </p>

          <div className="space-y-8 mb-12">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-brand-blue" />
              </div>
              <div>
                <h4 className="font-bold text-brand-navy mb-1">Head Office & Works</h4>
                <p className="text-gray-600">123 Industrial Area, Phase II,<br />New Delhi, 110020, India</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-brand-green/10 rounded-full flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-brand-green" />
              </div>
              <div>
                <h4 className="font-bold text-brand-navy mb-1">Phone</h4>
                <p className="text-gray-600">+91 98765 43210 <br />+91 11 2345 6789</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-brand-navy/10 rounded-full flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 text-brand-navy" />
              </div>
              <div>
                <h4 className="font-bold text-brand-navy mb-1">Email</h4>
                <p className="text-gray-600">info@saraswatienterprises.com <br />sales@saraswatienterprises.com</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <ContactForm />
        </div>
      </div>
    </SectionWrapper>
  );
}
