import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import type { Product } from "@/data/DataProduct";

export const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="relative flex flex-col bg-[var(--color-white)] border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1.5 hover:translate-y-1.5 transition-all duration-150">
      {/* Badge pojok */}
      {product.badge && (
        <div className="absolute -top-3 -right-3 z-10 bg-[var(--color-accent)] border-2 border-black px-3 py-1 font-heading text-xs text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
          {product.badge}
        </div>
      )}

      {/* Thumbnail */}
      <div className="relative w-full h-40 md:h-48 border-b-4 border-black overflow-hidden">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full bg-[var(--color-primary)] flex items-center justify-center">
            <span className="font-heading text-sm text-[var(--color-accent)] uppercase tracking-widest">
              No Image
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 p-4 md:p-6 flex-1">
        <h3 className="font-heading text-lg md:text-xl uppercase leading-tight">
          {product.title}
        </h3>
        <p className="font-body text-xs md:text-sm opacity-70 leading-relaxed flex-1">
          {product.description}
        </p>

        {/* Price */}
        <div className="inline-block w-fit bg-[var(--color-orange)] border-2 border-black px-3 py-1 font-heading text-base md:text-lg shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
          {product.price}
        </div>

        <Link href={`/product/${product.slug}`} className="w-full mt-2">
          <Button variant="hijau" className="w-full">
            Akses Sekarang
          </Button>
        </Link>
      </div>
    </div>
  );
};
