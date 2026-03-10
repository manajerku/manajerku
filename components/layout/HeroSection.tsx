import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col text-center item-center justify-center gap-5">
      <Heading level="h1">Solusi Praktis Untuk Keuangan UMKM</Heading>
      <div className="gap-10 flex justify-center">
        <Button variant="hijau" href="/produk">
          Selengkapnya
        </Button>
        <Button variant="hijau" onClick={() => alert("Halo Mario!")}>
          Beli Sekarang
        </Button>
      </div>
    </section>
  );
}
