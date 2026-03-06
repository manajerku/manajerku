export default function HeroSection() {
  return (
    <section className="min-h-[80vh] bg-white flex items-center p-6 md:p-12 border-b-[6px] border-black overflow-hidden">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="flex flex-col">
          <div className="mb-4">
            <p className="font-body text-base border-b-2 border-black inline-block pb-1">
              Welcome to{" "}
              <span className="text-neo-green font-bold">Manajerku.id</span>
            </p>
          </div>

          <h1 className="font-heading text-3xl md:text-4xl leading-tight tracking-tight text-black mb-6">
            the best solution for <br />
            your business finances <br />
            with <span className="text-neo-green">a practical template</span>
          </h1>

          <p className="font-body text-base md:text-lg text-black/80 max-w-lg leading-relaxed mb-8">
            memberikan sistem manajemen profesional namun sederhana. pelaku
            usaha hanya perlu sekali bayar untuk mendapatkan alat pencatatan
            keuangan, inventaris, dan asisten pembuat konten pemasaran tanpa
            biaya langganan bulanan
          </p>

          <div className="flex gap-4">
            <button className="neo-button bg-neo-green px-8 py-3 text-lg uppercase">
              Dapatkan Sekarang
            </button>
          </div>
        </div>

        <div className="relative grid grid-cols-2 gap-3 h-[380px]">
          <div className="neo-card bg-neo-white mt-16 h-[260px] flex items-center justify-center border-black">
            <div className="w-16 h-16 bg-neo-neon border-[3px] border-black rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"></div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="neo-card bg-neo-white h-[200px] border-black"></div>
            <div className="neo-card bg-neo-white h-[200px] border-black"></div>
          </div>

          <div className="absolute -top-8 -right-8 w-24 h-24 bg-neo-yellow border-[4px] border-black rotate-12 -z-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"></div>
        </div>
      </div>
    </section>
  );
}
