import { Heading } from "@/components/ui/Heading";
import { Badge } from "@/components/ui/Badge";
import { testimonials } from "@/data/Testimonial";

export default function TestimoniSection() {
  return (
    <section
      id="testimoni"
      className="border-t-4 border-black bg-white px-6 md:px-16 py-24">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Header */}
        <div className="flex flex-col gap-4">
          <Badge>TESTIMONI</Badge>
          <Heading level="h2">Kata Mereka Yang Sudah Pakai</Heading>
        </div>

        {/* Grid testimoni */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="flex gap-5 border-4 border-black bg-whitex_5px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translatehover:translate-x-1.25e-y-[5px] transition-all duration-150">
              {/* Avatar */}
              <div className="shrink-0 w-14 h-14 bg-(--color-primary) border-4 border-black flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-heading text-xl text-(--color-accent)">
                  {t.name.charAt(0)}
                </span>
              </div>

              {/* Teks */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-heading text-base uppercase">
                    {t.name}
                  </span>
                  <span className="bg-(--color-accent) border-2 border-black px-2 py-0 font-heading text-xs">
                    {t.role}
                  </span>
                </div>
                <p className="font-body text-sm leading-relaxed opacity-70">
                  &quot;{t.message}&quot;
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
