export default function TextCarousel() {
  const items: string[] = [
    "EDISI KHUSUS RILIS PERDANA",
    "AKSES SELAMANYA",
    "SIAP PAKAI TANPA RUMUS RUMIT",
    "LIFETIME SEKALI BAYAR",
    "OTOMATIS REKAP KEUANGAN",
    "TEMPLATE MURAH MERIAH",
    "TERDAPAT TEMPLATE FREE",
  ];

  const teams: string[] = [
    "Syrilus Christiano Putra Arsam",
    "I Kadek Mario Prayoga",
    "Nikolah Triputra Mentari",
    "Gus Adi",
    "Rizky Ilham Dani",
  ];

  return (
    <div className="flex flex-col gap-0">
      {/* Marquee 1 - Items */}
      <div className="w-full overflow-hidden border-y-[var(--bw)] border-[var(--color-neo-black)] bg-[var(--color-neo-green)] py-4">
        <div className="flex marquee w-max whitespace-nowrap">
          {[...items, ...items, ...items, ...items].map((item, index) => (
            <span
              key={index}
              className="mx-6 font-heading text-sm md:text-base font-bold uppercase text-[var(--color-neo-cream)] tracking-widest flex items-center gap-3">
              <span className="text-[var(--color-neo-mustard)] text-lg">✦</span>
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Marquee 2 - Teams (Reverse) */}
      <div className="w-full overflow-hidden border-b-[var(--bw)] border-[var(--color-neo-black)] bg-[var(--color-neo-black)] py-4">
        <div className="flex marquee-reverse w-max whitespace-nowrap">
          {[...teams, ...teams, ...teams, ...teams].map((item, index) => (
            <span
              key={index}
              className="mx-6 font-heading text-sm md:text-base font-bold uppercase text-[var(--color-neo-cream)] tracking-widest flex items-center gap-3">
              <span className="text-[var(--color-neo-green)] text-lg">✦</span>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
