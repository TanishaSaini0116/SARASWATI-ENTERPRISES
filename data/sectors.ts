export interface Sector {
  id: string;
  title: string;
  slug: string;
  description: string;
  icon: string; // lucide icon name
  image: string;
}

export const sectors: Sector[] = [
  {
    id: 'sec-1',
    title: 'Hospitals & Healthcare',
    slug: 'hospitals',
    description: 'Ultra-pure water solutions meeting stringent medical and dialysis standards.',
    icon: 'Stethoscope',
    image: 'https://placehold.co/600x400/0E3B45/F6F4EF?text=Hospital+Water+System'
  },
  {
    id: 'sec-2',
    title: 'Hotels & Hospitality',
    slug: 'hotels',
    description: 'Ensuring safe drinking water and soft water for laundry and bathing.',
    icon: 'Hotel',
    image: 'https://placehold.co/600x400/1C7C93/F6F4EF?text=Hotel+Water+Treatment'
  },
  {
    id: 'sec-3',
    title: 'Corporate Offices',
    slug: 'offices',
    description: 'Centralized RO plants for employee health and HVAC cooling tower treatment.',
    icon: 'Building2',
    image: 'https://placehold.co/600x400/2F6B47/F6F4EF?text=Office+Water+Solutions'
  },
  {
    id: 'sec-4',
    title: 'Schools & Universities',
    slug: 'schools',
    description: 'Durable, high-capacity drinking water stations for student safety.',
    icon: 'GraduationCap',
    image: 'https://placehold.co/600x400/B8863F/F6F4EF?text=School+RO+Systems'
  }
];
