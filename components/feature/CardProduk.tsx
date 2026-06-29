import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import type { Product } from "@/data/DataProduct";

export const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="relative flex flex-col bg-[var(--color-neo-cream)] border-[var(--bw)] border-[var(--color-neo-black)] shadow-[var(--shadow)] hover:shadow-none hover:translate-x-[5px] hover:translate-y-[5px] transition-all duration-100">
      {/* Badge pojok */}
      {product.badge && (
        <div className="absolute -top-3 -right-3 z-10 bg-[var(--color-neo-mustard)] border-[var(--bw)] border-[var(--color-neo-black)] px-3 py-1 font-heading text-xs font-bold uppercase text-[var(--color-neo-black)] shadow-[3px_3px_0px_0px_var(--color-neo-black)]">
          {product.badge}
        </div>
      )}

      {/* Thumbnail */}
      <div className="relative w-full h-40 md:h-48 border-b-[var(--bw)] border-[var(--color-neo-black)] overflow-hidden">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full bg-[var(--color-neo-green)] flex items-center justify-center">
            <span className="font-heading text-sm font-bold uppercase text-[var(--color-neo-cream)] tracking-widest">
              No Image
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-4 p-4 md:p-6 flex-1">
        <h3 className="font-heading text-lg md:text-xl font-bold uppercase leading-tight text-[var(--color-neo-black)]">
          {product.title}
        </h3>
        <p className="font-body text-sm md:text-base text-[var(--color-neo-black)]/70 leading-relaxed flex-1">
          {product.description}
        </p>

        {/* Price */}
        <div className="inline-block w-fit bg-[var(--color-neo-brick)] border-[var(--bw)] border-[var(--color-neo-black)] px-4 py-2 font-heading text-base md:text-lg font-bold text-white shadow-[3px_3px_0px_0px_var(--color-neo-black)]">
          {product.price}
        </div>

        <Link href={`/product/${product.slug}`} className="w-full mt-2">
          <Button variant="hijau" className="w-full">
            AKSES SEKARANG
          </Button>
        </Link>
      </div>
    </div>
  );
};
