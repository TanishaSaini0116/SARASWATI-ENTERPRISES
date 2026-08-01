export * from '../data/products';
export * from '../data/industries';
export * from '../data/case-studies';

export interface NavItem {
  title: string;
  href: string;
  children?: {
    title: string;
    href: string;
    description?: string;
  }[];
}
