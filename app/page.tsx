"use client";

import HeroSection from "@/components/layout/HeroSection";
import TextCarousel from "@/components/ui/TextCarousel";
import AboutSection from "@/components/layout/AboutSection";
import ProductSection from "@/components/layout/ProductSection";

export default function Home() {
  return (
    <div className="bg-brand-light min-h-screen">
      <HeroSection />
      <TextCarousel />
      <AboutSection />
      <ProductSection />
    </div>
  );
}
