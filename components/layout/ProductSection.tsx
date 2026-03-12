import { Heading } from "@/components/ui/Heading";
import { ProductCard } from "@/components/feature/CardProduk";
import { products } from "@/data/DataProduct";
import { Badge } from "@/components/ui/Badge";

export default function ProductSection() {
  return (
    <section
      id="product"
      className="border-t-4 border-black bg-[var(--color-white)] px-6 md:px-16 py-24">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <Badge>Daftar Produk</Badge>
          <Heading level="h2">Produk Unggulan Kami</Heading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
