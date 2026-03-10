"use client";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import HeroSection from "@/components/layout/HeroSection";

export default function Home() {
  return (
    <div className="p-10 space-y-8 bg-brand-light min-h-screen">
      <HeroSection />
      {/* Heading Level 1 */}
      <Heading level="h1">
        Edukasi <br /> Tanpa Batas
      </Heading>

      <div className="flex flex-col gap-4 w-fit">
        {/* Button sebagai Link (Internal/External) */}
        <Button href="/produk" variant="kuning">
          Lihat Produk (Kuning)
        </Button>

        {/* Button sebagai Button Biasa (Action) */}
        <Button variant="hijau" onClick={() => alert("Halo Mario!")}>
          Daftar Sekarang (Hijau)
        </Button>

        {/* Button Outline */}
        <Button variant="outline" href="#faq">
          Tanya Jawab
        </Button>
      </div>

      {/* Heading di background gelap */}
      <div className="bg-brand-green p-10 mt-10 border-3 border-black shadow-[10px_10px_0px_0px_#f8e71c]">
        <Heading level="h2" isInverse>
          Detail Produk Kami
        </Heading>
        <p className="text-brand-light font-body mt-4">
          Penjelasan materi secara mendalam.
        </p>
      </div>
    </div>
  );
}
