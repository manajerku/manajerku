export default function TextCarousel() {
  const items: string[] = [
    "KURIKULUM TERUPDATE",
    "AKSES SELAMANYA",
    "KOMUNITAS AKTIF",
    "MENTORING DIRECT",
    "100% PRAKTEK",
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
          {[...items, ...items].map((item, index) => (
            <span
              key={index}
              className="mx-4 font-heading text-sm md:text-base text-black tracking-widest flex items-center gap-3">
              <span className="text-lg">✦</span>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
