import { cn } from '@/lib/utils';
import React from 'react';

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  bg?: 'white' | 'gray' | 'navy';
}

export const SectionWrapper = ({ children, className, id, bg = 'white' }: SectionWrapperProps) => {
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    navy: 'bg-brand-navy text-white'
  };

  return (
    <section 
      id={id} 
      className={cn("py-20 md:py-28", backgrounds[bg], className)}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};
