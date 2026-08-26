import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  className?: string;
  icon?: boolean;
}

export const CTAButton = ({ href, children, variant = 'primary', className, icon = false }: CTAButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300";

  const variants = {
    primary: "bg-green-accent text-white hover:bg-[#3d8c40] shadow-md hover:shadow-lg px-6 py-3",
    secondary: "bg-primary text-white hover:bg-[#082a4d] shadow-md hover:shadow-lg px-6 py-3",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 py-2.5",
    ghost: "text-accent hover:text-primary hover:underline px-4 py-2"
  };

  return (
    <Link
      href={href}
      className={cn(baseStyles, variants[variant], className)}
    >
      {children}
      {icon && <ArrowRight className="ml-2 w-4 h-4" />}
    </Link>
  );
};
