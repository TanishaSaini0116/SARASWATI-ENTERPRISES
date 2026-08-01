import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { CTAButton } from '@/components/shared/CTAButton';

export default function ResourcesPage() {
  const blogs = [
    { title: 'The Importance of ZLD in Textile Industry', category: 'Guide', slug: 'zld-textile-industry' },
    { title: 'How to Choose the Right RO Plant Capacity', category: 'Buying Guide', slug: 'choose-ro-plant-capacity' },
    { title: 'Maintaining Your Commercial STP: Best Practices', category: 'Maintenance', slug: 'maintain-commercial-stp' }
  ];

  return (
    <SectionWrapper bg="gray" className="min-h-screen pt-32">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">Resources & Insights</h1>
        <p className="text-lg text-gray-600">
          Expert guides, industry updates, and best practices in water treatment.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {blogs.map((blog, idx) => (
          <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full group hover:shadow-lg transition-all duration-300">
            <div className="inline-block bg-brand-green/10 text-brand-green font-semibold text-xs px-3 py-1 rounded-full mb-4 w-fit">
              {blog.category}
            </div>
            <h3 className="text-xl font-bold text-brand-navy mb-4 group-hover:text-brand-blue transition-colors">
              {blog.title}
            </h3>
            <p className="text-gray-600 mb-8 flex-grow">
              DUMMY CONTENT: This is a placeholder for the blog post excerpt. In a real scenario, this would be fetched from MDX files.
            </p>
            <CTAButton href={`/resources/${blog.slug}`} variant="ghost" className="px-0" icon>
              Read Article
            </CTAButton>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
