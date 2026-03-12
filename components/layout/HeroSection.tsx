import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-white flex flex-col text-center items-center justify-center gap-6 px-6 overflow-hidden">
      {/* Dekorasi */}
      <div className="absolute top-16 left-10 w-16 h-16 bg-(--color-accent) border-4 border-black rotate-12 hidden md:block" />
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-(--ne-orange) border-4 border-black -rotate-6 hidden md:block" />
      <div className="absolute top-24 right-24 w-10 h-10 bg-(--color-primary) border-4 border-black rotate-45 hidden md:block" />

      <Badge>UNTUK UMKM INDONESIA</Badge>

      <Heading level="h1" className="max-w-4xl">
        Solusi Praktis Untuk Keuangan UMKM
      </Heading>

      <p className="font-body text-lg md:text-xl max-w-2xl text--black opacity-70">
        Kelola keuangan bisnis kamu lebih mudah, rapi, dan terukur — tanpa
        ribet.
      </p>

      {/* Buttons */}
      <div className="gap-6 flex justify-center flex-wrap mt-2">
        <Button variant="kuning" href="#product">
          Selengkapnya
        </Button>
        <Button variant="hijau" href="https://lynk.id/manajerku.id">
          Beli Sekarang
        </Button>
      </div>
    </section>
  );
}
