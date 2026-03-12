import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { freeProducts } from "@/data/FreeProduct";

export default function FreeProdukSection() {
  const item = freeProducts[0];

  return (
    <section id="free-produk" className="border-t-4 border-black">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_280px] border-b-4 border-black bg-(--color-primary)">
        {/* Deskripsi */}
        <div className="flex flex-col justify-center gap-3 px-10 py-10 border-r-4 border-black">
          <div className="inline-block w-fit bg-(--color-accent) border-2 border-black px-3 py-1 font-heading text-xs shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            GRATIS
          </div>
          <h3 className="font-heading text-2xl uppercase leading-tight text-white">
            {item.title}
          </h3>
          <p className="font-body text-sm leading-relaxed text-white opacity-70 max-w-lg">
            {item.description}
          </p>
          <Button href={item.href} variant="kuning" className="w-fit mt-2">
            Download Gratis
          </Button>
        </div>

        {/* Image */}
        <div className="hidden md:flex items-center justify-center bg-(--color-secondary) relative overflow-hidden p-6">
          {item.image ? (
            <div className="relative w-full h-full min-h-48 border-4 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
          ) : (
            <div className="w-full h-48 bg-(--color-primary) border-4 border-black flex items-center justify-center">
              <span className="font-heading text-(--color-accent)-sm uppercase tracking-widest">
                No Image
              </span>
            </div>
          )}
          <div className="absolute -top-4 -right-4 w-16 h-16 bg-(--color-accent) border-4 border-black rotate-12" />
          <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-neo-orange border-4 border-black -rotate-6" />
        </div>
      </div>
    </section>
  );
}
