import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-[--background] flex flex-col items-center justify-center gap-8 px-6 py-20 overflow-hidden">
      {/* Dekorasi Brutal */}
      <div className="absolute top-20 left-[10%] w-20 h-20 bg-[var(--color-neo-green)] border-[var(--bw)] border-[var(--color-neo-black)] rotate-12 hidden md:block shadow-[var(--shadow)]" />
      <div className="absolute top-32 right-[15%] w-12 h-12 bg-[var(--color-neo-black)] border-[var(--bw)] border-[var(--color-neo-black)] rotate-45 hidden md:block shadow-[4px_4px_0px_0px_var(--color-neo-green)]" />
      <div className="absolute bottom-32 left-[20%] w-16 h-16 bg-[var(--color-neo-brick)] border-[var(--bw)] border-[var(--color-neo-black)] -rotate-6 hidden md:block shadow-[var(--shadow)]" />
      <div className="absolute bottom-20 right-[10%] w-24 h-24 bg-[var(--color-neo-mustard)] border-[var(--bw)] border-[var(--color-neo-black)] rotate-12 hidden md:block shadow-[var(--shadow)]" />
      <div className="absolute top-40 left-[30%] w-8 h-8 bg-[var(--color-neo-black)] hidden md:block rotate-12" />
      <div className="absolute bottom-40 right-[25%] w-6 h-6 bg-[var(--color-neo-green)] border-[var(--bw)] border-[var(--color-neo-black)] hidden md:block" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-8 max-w-5xl mx-auto text-center">
        <Badge variant="hijau">UNTUK UMKM INDONESIA</Badge>

        <Heading
          level="h1"
          className="text-[clamp(2.5rem,8vw,6rem)] leading-[0.9] tracking-[-0.04em] uppercase font-bold text-[var(--color-neo-black)] text-balance">
          Solusi Praktis Untuk Keuangan UMKM
        </Heading>

        <p className="font-body text-lg md:text-xl max-w-2xl text-[var(--color-neo-black)]/70 leading-relaxed">
          Kelola keuangan bisnis kamu lebih mudah, rapi, dan terukur tanpa
          ribet.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          <Button
            variant="brick"
            href="https://lynk.id/manajerku.id"
            target="_blank">
            BELI SEKARANG
          </Button>

          <Button variant="mustard" href="#product">
            SELENGKAPNYA
          </Button>
        </div>
      </div>
    </section>
  );
}
