"use client";

import { Heading } from "@/components/ui/Heading";
import { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/Badge";
import Image from "next/image";

const stats = [
  { value: 50, suffix: "+", label: "UMKM Terdaftar" },
  { value: 100, suffix: "%", label: "Berbasis Praktek" },
  { value: 3, suffix: "x", label: "Lebih Cepat Kelola Keuangan" },
  { value: 24, suffix: "/7", label: "Akses Kapan Saja" },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1500;
          const steps = 60;
          const increment = target / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span
      ref={ref}
      className="font-heading text-4xl md:text-6xl text-(--color-accent)">
      {count}
      {suffix}
    </span>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="bg-white border-t-4 border-black">
      {/* About Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-24 grid md:grid-cols-2 gap-16 items-center">
        {/* Left - Text */}
        <div className="flex flex-col gap-6">
          <Badge>TENTANG KAMI</Badge>

          <Heading level="h2">
            Kami Hadir Untuk UMKM Yang Ingin Berkembang
          </Heading>

          <p className="font-body text-base md:text-lg leading-relaxed opacity-80">
            Manajerku adalah platform manajemen keuangan yang dirancang khusus
            untuk pelaku UMKM Indonesia. Kami percaya bahwa setiap bisnis kecil
            berhak punya sistem keuangan yang rapi, mudah dipahami, dan
            terjangkau.
          </p>

          <p className="font-body text-base md:text-lg leading-relaxed opacity-80">
            Dari pencatatan pemasukan & pengeluaran, laporan laba rugi, hingga
            analisis arus kas — semua bisa kamu kelola dalam satu tempat. Tanpa
            perlu jadi akuntan, tanpa ribet.
          </p>

          {/* Highlight box */}
          <div className="border-4 border-black bg-(--color-primary) text--white p-5 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]">
            <p className="font-heading text-lg text-(--background) uppercase tracking-wide">
              &quot;Keuangan sehat, bisnis kuat — mulai dari pencatatan yang
              benar.&quot;
            </p>
          </div>
        </div>

        {/* Right - Decorative Block */}
        <div className="relative flex items-center justify-center h-80 md:h-full">
          <div className="w-64 h-64 bg-(--color-accent) border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center rotate-3">
            <Image
              src="/logo/logo.png"
              alt="Logo Manajerku"
              width={150}
              height={150}
              priority
            />
          </div>
          <div className="absolute bottom-8 right-8 w-24 h-24 bg-(--color-neo-orange) border-4 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] -rotate-6" />
          <div className="absolute top-8 left-8 w-12 h-12 bg-(--color-primary) border-4 border-black rotate-12" />
        </div>
      </div>

      {/* Stats Section */}
      <div className="border-t-4 border-b-4 border-black bg-(--color-primary)">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-2 py-14 px-6 border-4 border-black -m-0.5">
              <CountUp target={stat.value} suffix={stat.suffix} />
              <span className="font-body text-sm md:text-base text-white uppercase tracking-widest text-center">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
