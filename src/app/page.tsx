'use client';

import Header from '@/components/landing/Header';
import HeroSection from '@/components/landing/HeroSection';
import WhatIsIncluded from '@/components/landing/WhatIsIncluded';
import FeatureShowcase from '@/components/landing/FeatureShowcase';
import PagesGrid from '@/components/landing/PagesGrid';
import ExtrasSection from '@/components/landing/ExtrasSection';
import Footer from '@/components/landing/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0a]">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <WhatIsIncluded />
        <FeatureShowcase />
        <PagesGrid />
        <ExtrasSection />
      </main>
      <Footer />
    </div>
  );
}
