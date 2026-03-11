import { Heading } from "@/components/ui/Heading";
import { ProductCard } from "@/components/feature/CardProduk";
import { products } from "@/data/DataProduct";

export default function ProductSection() {
  return (
    <section id="product" className="py-16 px-20 ">
      <Heading level="h1">
        Edukasi <br /> Tanpa Batas
      </Heading>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </section>
  );
}
