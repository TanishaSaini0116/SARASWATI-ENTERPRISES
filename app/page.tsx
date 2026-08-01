import { Hero } from '@/components/home/Hero';
import { SegmentRouter } from '@/components/home/SegmentRouter';
import { TrustBar } from '@/components/home/TrustBar';
import { ServicesOverview } from '@/components/home/ServicesOverview';
import { IndustriesOverview } from '@/components/home/IndustriesOverview';
import { FeaturedCaseStudy } from '@/components/home/FeaturedCaseStudy';
import { Testimonials } from '@/components/home/Testimonials';
import { FinalCTA } from '@/components/home/FinalCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <SegmentRouter />
      <TrustBar />
      <ServicesOverview />
      <IndustriesOverview />
      <FeaturedCaseStudy />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
