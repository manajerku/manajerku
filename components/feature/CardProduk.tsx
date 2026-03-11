import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import type { Product } from "@/data/DataProduct";

export const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="relative flex flex-col bg-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1.5 hover:translate-y-1.5 transition-all duration-150">
      {/* Badge pojok */}
      {product.badge && (
        <div className="absolute -top-3 -right-3 z-10 bg-(--color-accent) border-2 border-black px-3 py-1 font-heading text-xs text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
          {product.badge}
        </div>
      )}

      {/* Thumbnail placeholder */}
      <div className="w-full h-48 bg-(--color-primary) border-b-4 border-black flex items-center justify-center">
        <span className="font-heading text-5xl text-(--color-accent)">📊</span>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 p-6 flex-1">
        <h3 className="font-heading text-xl uppercase leading-tight">
          {product.title}
        </h3>
        <p className="font-body text-sm opacity-70 leading-relaxed flex-1">
          {product.description}
        </p>

        {/* Price */}
        <div className="inline-block w-fit bg-(--neo-orange) border-2 border-black px-3 py-1 font-heading text-lg shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
          {product.price}
        </div>

        <Link href={`/produk/${product.slug}`}>
          <Button variant="hijau" className="w-full mt-2">
            Akses Sekarang
          </Button>
        </Link>
      </div>
    </div>
  );
};
