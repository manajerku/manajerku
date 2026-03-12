import { products } from "@/data/DataProduct";
import { notFound } from "next/navigation";
import { Heading } from "@/components/ui/Heading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  return (
    <main className="min-h-screen bg-white">
      {/* ── HERO ── */}
      <section className="border-b-4 border-black bg-(--color-primary) px-6 md:px-24 py-20">
        <div className="max-w-4xl mx-auto flex flex-col gap-6">
          {product.badge && <Badge>{product.badge}</Badge>}
          <Heading level="h1" isInverse>
            {product.title}
          </Heading>
          <p className="font-body text-lg text-white opacity-80 max-w-2xl leading-relaxed">
            {product.description}
          </p>
          <div className="flex items-center gap-6 flex-wrap mt-2">
            <div className="bg-(--color-neo-orange) border-4 border-black px-6 py-3 font-heading text-2xl shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]">
              {product.price}
            </div>
            <Button href={product.href} variant="kuning">
              ⬇ Akses Sekarang
            </Button>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 md:px-8 py-16 flex flex-col gap-16">
        {/* ── UNTUK SIAPA ── */}
        {product.forWho && (
          <section className="flex flex-col gap-6">
            <div className="border-l-8 border-(--color-neo-orange) pl-5">
              <Heading level="h2">Untuk Siapa Template Ini?</Heading>
            </div>
            <div className="flex flex-col gap-3">
              {product.forWho.map((who, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 border-2 border-black bg-white px-5 py-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                  <span className="w-6 h-6 bg-(--color-accent) border-2 border-black shrink-0" />
                  <span className="font-body text-base">{who}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── FITUR ── */}
        <section className="flex flex-col gap-6">
          <div className="border-l-8 border-(--color-neo-orange) pl-5">
            <Heading level="h2">Apa Yang Kamu Dapat</Heading>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {product.features.map((f, i) => (
              <div
                key={i}
                className="flex items-center gap-4 border-4 border-black bg-(--color-primary) px-5 py-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-heading text-(--color-accent) text-xl">
                  ✦
                </span>
                <span className="font-body text-white text-base">{f}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── KONTEN BLOG ── */}
        {product.contentSections && (
          <section className="flex flex-col gap-10">
            <div className="border-l-8 border-(--color-neo-orange) pl-5">
              <Heading level="h2">Isi Template</Heading>
            </div>
            {product.contentSections.map((section, i) => (
              <div key={i} className="flex flex-col gap-4">
                <h3 className="font-heading text-xl uppercase">
                  {section.title}
                </h3>
                <p className="font-body text-base leading-relaxed opacity-80">
                  {section.body}
                </p>
                {/* Placeholder screenshot */}
                <div className="w-full h-48 bg-(--color-primary) border-4 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center">
                  <span className="font-heading text-(--color-accent) text-sm uppercase tracking-widest">
                    Screenshot Preview
                  </span>
                </div>
              </div>
            ))}
          </section>
        )}

        {/* ── FAQ ── */}
        {product.faqs && (
          <section className="flex flex-col gap-6">
            <div className="border-l-8 border-(--color-neo-orange) pl-5">
              <Heading level="h2">Pertanyaan Umum</Heading>
            </div>
            <div className="flex flex-col gap-4">
              {product.faqs.map((faq, i) => (
                <div
                  key={i}
                  className="border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <div className="bg-(--color-primary) px-6 py-4">
                    <p className="font-heading text-base text-(--color-accent) uppercase">
                      {faq.question}
                    </p>
                  </div>
                  <div className="bg-white) px-6 py-4 border-t-4 border-black">
                    <p className="font-body text-base leading-relaxed opacity-80">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── CTA BOTTOM ── */}
        <section className="border-4 border-black bg-(--color-neo-orange) p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col gap-1">
            <p className="font-heading text-xl uppercase text-black">
              Siap Kelola Keuangan Lebih Rapi?
            </p>
            <p className="font-body text-black opacity-70">
              Dapatkan akses selamanya dengan sekali bayar.
            </p>
          </div>
          <div className="flex items-center gap-4 flex-wrap">
            <span className="font-heading text-2xl text-black border-2 border-black bg-white px-4 py-2 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              {product.price}
            </span>
            <Button href={product.href} variant="hijau">
              Beli Sekarang
            </Button>
          </div>
        </section>

        {/* Back */}
        <Button variant="outline" href="/" className="w-fit">
          ← Kembali ke Produk
        </Button>
      </div>
    </main>
  );
}
