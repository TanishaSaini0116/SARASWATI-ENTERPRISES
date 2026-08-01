import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { ProductCard } from '@/components/shared/ProductCard';
import { products } from '@/data/products';

export default function CommercialIndex() {
  const categoryProducts = products.filter(p => p.category === 'Commercial');

  return (
    <SectionWrapper bg="gray" className="min-h-screen pt-32 pb-20">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-brand-navy mb-6">
          Commercial Water Solutions
        </h1>
        <p className="text-lg text-gray-600">
          Compact, efficient purification and sewage treatment solutions for hospitals, hotels, schools, and corporate complexes.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categoryProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </SectionWrapper>
  );
}
