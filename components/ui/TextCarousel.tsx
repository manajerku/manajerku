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
    <div className="gap-2 flex flex-col">
      <div className="w-full overflow-hidden border-y-4 border-black bg-(--color-accent) py-4">
        <div className="flex marquee w-max whitespace-nowrap">
          {[...items, ...items].map((item, index) => (
            <span
              key={index}
              className="mx-4 font-heading text-sm md:text-base text-black tracking-widest flex items-center gap-3">
              <span className="text-black text-lg">✦</span>
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="w-full overflow-hidden border-y-4 border-black bg-(--color-accent) py-4">
        <div className="flex marquee-reverse w-max whitespace-nowrap">
          {[...teams, ...teams].map((item, index) => (
            <span
              key={index}
              className="mx-4 font-heading uppercase text-sm md:text-base text-black tracking-widest flex items-center gap-3">
              <span className="text-lg">✦</span>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
