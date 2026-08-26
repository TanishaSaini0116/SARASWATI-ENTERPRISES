import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { CTAButton } from '@/components/shared/CTAButton';

export default function AboutPage() {
  return (
    <>
      <SectionWrapper bg="navy" className="pt-32 pb-20">
        <div className="max-w-4xl">
          <h1 className="text-5xl font-bold text-white mb-6">About Saraswati Enterprises</h1>
          <p className="text-xl text-text-muted">
            Pioneering engineering excellence in water and wastewater treatment since 2008.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper bg="white">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-6">Our Mission</h2>
            <p className="text-text-muted text-lg leading-relaxed mb-6">
              To provide sustainable, high-performance water treatment solutions that enable industries to operate efficiently while protecting the environment. We believe that clean water is the foundation of a better future.
            </p>
            <div className="text-lg font-bold text-accent uppercase tracking-wider mb-8">
              Trusted Solutions | Engineering Excellence | Sustainable Future
            </div>
            
            <h3 className="text-2xl font-bold text-primary mb-4">Why Choose Us?</h3>
            <ul className="space-y-4">
              {['In-house manufacturing facility', 'Expert team of environmental engineers', 'Pan-India service network', 'Stringent quality control (ISO 9001:2015)'].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-accent"></div>
                  <span className="text-text-secondary font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-100 h-64 rounded-2xl bg-cover bg-center" style={{ backgroundImage: "url('https://placehold.co/400x400/26495C/FFF?text=Manufacturing')" }}></div>
            <div className="bg-gray-100 h-64 rounded-2xl mt-12 bg-cover bg-center" style={{ backgroundImage: "url('https://placehold.co/400x400/7A9B6E/FFF?text=Our+Team')" }}></div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper bg="gray" className="text-center">
        <h2 className="text-3xl font-bold text-primary mb-12">Meet the Leadership</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { name: 'Arun Sharma', role: 'Managing Director', img: 'https://placehold.co/300x300/E2E8F0/475569?text=AS' },
            { name: 'Priya Patel', role: 'Head of Engineering', img: 'https://placehold.co/300x300/E2E8F0/475569?text=PP' },
            { name: 'Rahul Verma', role: 'Operations Head', img: 'https://placehold.co/300x300/E2E8F0/475569?text=RV' },
          ].map((leader, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <img src={leader.img} alt={leader.name} className="w-32 h-32 rounded-full mx-auto mb-6 object-cover" />
              <h4 className="text-xl font-bold text-primary mb-1">{leader.name}</h4>
              <p className="text-accent font-medium">{leader.role}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
