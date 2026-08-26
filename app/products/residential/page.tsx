import { SectionWrapper } from '@/components/shared/SectionWrapper';
import { ProductCard } from '@/components/shared/ProductCard';
import { products } from '@/data/products';

export default function ResidentialIndex() {
  const categoryProducts = products.filter(p => p.category === 'Residential');

  return (
    <SectionWrapper bg="gray" className="min-h-screen pt-32 pb-20">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
          Residential Water Systems
        </h1>
        <p className="text-lg text-text-muted">
          Premium domestic RO purifiers, whole-house softeners, and filters ensuring the health and safety of your family.
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
