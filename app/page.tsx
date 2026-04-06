"use client";

import HeroSection from "@/components/layout/HeroSection";
import TextCarousel from "@/components/ui/TextCarousel";
import AboutSection from "@/components/layout/AboutSection";
import ProductSection from "@/components/layout/ProductSection";
// import FreeProdukSection from "@/components/feature/FreeProduct";
// import TestimoniSection from "@/components/layout/TestimonialSection";
// import FAQSection from "@/components/layout/Faq";

export default function Home() {
  return (
    <div className="bg-brand-light min-h-screen">
      <HeroSection />
      <TextCarousel />
      <AboutSection />
      <ProductSection />
      {/* <FreeProdukSection /> */}
      {/* <TestimoniSection /> */}
      {/* <FAQSection /> */}
    </div>
  );
}
