import Image from 'next/image';
// import Link from 'next/link';
import { Product } from '@/types';
import { CTAButton } from './CTAButton';

export const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      <div className="relative h-64 overflow-hidden bg-gray-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          {product.category}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
          {product.name}
        </h3>
        <p className="text-text-muted text-sm leading-relaxed mb-6 flex-grow">
          {product.shortDescription}
        </p>

        <div className="space-y-2 mb-6">
          {product.specifications.slice(0, 2).map((spec, idx) => (
            <div key={idx} className="flex justify-between text-sm">
              <span className="text-text-muted">{spec.label}</span>
              <span className="font-semibold text-primary text-right">{spec.value}</span>
            </div>
          ))}
        </div>

        <div className="pt-4 border-t border-gray-100 mt-auto">
          <CTAButton
            href={`/${product.category.toLowerCase()}/${product.slug}`}
            variant="outline"
            className="w-full text-center group-hover:bg-primary group-hover:text-white"
          >
            View Details
          </CTAButton>
        </div>
      </div>
    </div>
  );
};
