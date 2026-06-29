"use client";

import { Heading } from "@/components/ui/Heading";
import { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/Badge";
import Image from "next/image";
import Magnetic from "../ui/Magnetic";

const stats = [
  { value: 0, suffix: "%", label: "Rumus Manual" },
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
          const duration = 2000;
          const steps = 80;
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
      { threshold: 0.3 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span
      ref={ref}
      className="font-heading text-4xl md:text-6xl font-bold text-[var(--color-neo-mustard)]">
      {count}
      {suffix}
    </span>
  );
}

export default function AboutSection() {
  return (
    <section
      id="about"
      className="bg-[var(--background)] border-t-[var(--bw)] border-[var(--color-neo-black)]">
      {/* About Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-24 grid md:grid-cols-2 gap-16 items-center">
        {/* Left - Text */}
        <div className="flex flex-col gap-6">
          <Badge variant="hijau">TENTANG KAMI</Badge>

          <Heading
            level="h2"
            className="text-[clamp(2rem,5vw,4rem)] leading-[0.95] tracking-[-0.03em] uppercase font-bold text-[var(--color-neo-black)]">
            Kami Hadir Untuk UMKM Yang Ingin Berkembang
          </Heading>

          <p className="font-body text-base md:text-lg leading-relaxed text-[var(--color-neo-black)]/70 max-w-prose">
            Manajerku adalah platform manajemen keuangan yang dirancang khusus
            untuk pelaku UMKM Indonesia. Kami percaya bahwa setiap bisnis kecil
            berhak punya sistem keuangan yang rapi, mudah dipahami, dan
            terjangkau.
          </p>

          <p className="font-body text-base md:text-lg leading-relaxed text-[var(--color-neo-black)]/70 max-w-prose">
            Dari pencatatan pemasukan & pengeluaran, laporan laba rugi, hingga
            analisis arus kas — semua bisa kamu kelola dalam satu tempat. Tanpa
            perlu jadi akuntan, tanpa ribet.
          </p>

          {/* Highlight box */}
          <Magnetic>
            <div className="border-[var(--bw)] border-[var(--color-neo-black)] bg-[var(--color-neo-green)] text-[var(--color-neo-cream)] p-6 shadow-[var(--shadow)]">
              <p className="font-heading text-lg uppercase tracking-wide leading-tight">
                &quot;Keuangan sehat, bisnis kuat — mulai dari pencatatan yang
                benar.&quot;
              </p>
            </div>
          </Magnetic>
        </div>

        {/* Right - Decorative Block */}
        <div className="relative flex items-center justify-center h-80 md:h-full min-h-[400px]">
          <div className="w-64 h-64 bg-[var(--color-neo-green)] border-[var(--bw)] border-[var(--color-neo-black)] shadow-[8px_8px_0px_0px_var(--color-neo-black)] flex items-center justify-center rotate-3">
            <Image
              src="/logo/logo.png"
              alt="Logo Manajerku"
              width={150}
              height={150}
              priority
              className="w-full h-auto p-4"
            />
          </div>
          <div className="absolute bottom-8 right-8 w-24 h-24 bg-[var(--color-neo-brick)] border-[var(--bw)] border-[var(--color-neo-black)] shadow-[5px_5px_0px_0px_var(--color-neo-black)] -rotate-6" />
          <div className="absolute top-8 left-8 w-12 h-12 bg-[var(--color-neo-black)] border-[var(--bw)] border-[var(--color-neo-black)] rotate-12" />
          <div className="absolute top-16 right-16 w-8 h-8 bg-[var(--color-neo-mustard)] border-[var(--bw)] border-[var(--color-neo-black)] -rotate-12" />
        </div>
      </div>

      {/* Stats Section */}
      <div className="border-t-[var(--bw)] border-b-[var(--bw)] border-[var(--color-neo-black)] bg-[var(--color-neo-black)]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-3 py-14 px-6 border-[var(--bw)] border-[var(--color-neo-black)] bg-[var(--color-neo-black)]">
              <CountUp target={stat.value} suffix={stat.suffix} />
              <span className="font-body text-sm md:text-base text-[var(--color-neo-cream)] uppercase tracking-widest text-center font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
