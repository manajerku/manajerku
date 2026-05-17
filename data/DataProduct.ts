export type ContentSection = {
  title: string;
  body: string;
  image?: string;
};

export type Product = {
  slug: string;
  title: string;
  price: string;
  description: string;
  longDescription: string;
  features: string[];
  badge?: string;
  forWho?: string[];
  contentSections?: ContentSection[];
  faqs?: { question: string; answer: string }[];
  href: string;
  image?: string;
};

export const products: Product[] = [
  {
    slug: "template-laundry-premium",
    title: "Template Laporan Keuangan UMKM Laundry",
    price: "Rp30.000",
    description:
      "Kelola keuangan usaha laundry lebih rapi dan terstruktur tanpa perlu ribet bikin rumus Excel sendiri. Template ini membantu mencatat pemasukan, pengeluaran, profit, hingga performa bisnis secara otomatis dalam satu dashboard yang mudah dipahami.",
    longDescription:
      "Template laporan keuangan ini dirancang khusus untuk kebutuhan operasional bisnis laundry, baik kiloan maupun satuan. Seluruh sistem sudah terintegrasi mulai dari pencatatan transaksi pelanggan, pengeluaran operasional, monitoring keuntungan, hingga visualisasi performa bisnis melalui dashboard otomatis.\n\nKamu tidak perlu membuat rumus Excel dari nol atau menghitung laporan secara manual setiap bulan. Semua data akan terhubung otomatis sehingga memudahkan pemilik usaha melihat kondisi keuangan secara real-time.\n\nCocok digunakan untuk UMKM laundry yang ingin memiliki pencatatan keuangan lebih profesional, rapi, dan mudah dianalisis tanpa harus memiliki skill akuntansi.",
    badge: "BARU!!",
    features: [
      "Dashboard otomatis untuk memantau omzet, pengeluaran, dan profit",
      "Pencatatan transaksi laundry lengkap dengan status pembayaran",
      "Rekap pengeluaran operasional lebih terstruktur dan mudah dianalisis",
      "Grafik performa bulanan untuk melihat tren bisnis",
      "Sistem laporan otomatis tanpa perlu membuat rumus manual",
    ],
    forWho: [
      "Pemilik usaha laundry yang masih mencatat keuangan secara manual",
      "UMKM laundry yang ingin laporan lebih rapi dan profesional",
      "Pengusaha laundry yang ingin mengetahui profit bisnis dengan lebih jelas",
    ],
    contentSections: [
      {
        title: "1. Dashboard Tahunan & Selisih Target",
        image: "/Product/laundry/laundry (1).png",
        body: "Lihat ringkasan performa bisnis dalam satu halaman. Dashboard ini menampilkan total pemasukan, total pengeluaran, laba bersih, hingga pencapaian target pendapatan tahunan secara otomatis.",
      },
      {
        title: "2. Dashboard Bulanan & Grafik Tren",
        image: "/Product/laundry/laundry (2).png",
        body: "Pantau perkembangan bisnis setiap bulan melalui grafik dan rekap otomatis. Memudahkan analisis tren pemasukan, pengeluaran, serta performa transaksi harian tanpa perlu menghitung manual.",
      },
      {
        title: "3. Pencatatan Pemasukan Detail",
        image: "/Product/laundry/laundry (3).png",
        body: "Form input pesanan pelanggan yang lengkap, mencakup nama pelanggan, jenis layanan (cuci setrika, karpet, sepatu, dll), berat/jumlah, hingga status dan metode pembayaran (Cash/Transfer/QRIS).",
      },
      {
        title: "4. Manajemen Pengeluaran Operasional",
        image: "/Product/laundry/laundry (4).png",
        body: "Catat setiap biaya keluar mulai dari pembelian pewangi, deterjen, gas, biaya listrik/air, hingga sewa tempat secara sistematis agar tidak ada biaya yang terlewat.",
      },
      {
        title: "5. Pusat Data & Pengaturan Layanan",
        image: "/Product/laundry/laundry (5).png",
        body: "Sheet khusus untuk mengatur jenis layanan dan harga per kilo, kategori pengeluaran, serta daftar bulan untuk memastikan konsistensi data di seluruh laporan.",
      },
    ],
    faqs: [
      {
        question: "Apakah harga layanan bisa diubah?",
        answer:
          "Bisa. Kamu cukup mengubah daftar harga di sheet Data, dan semua perhitungan di sheet pemasukan akan otomatis mengikuti harga terbaru.",
      },
      {
        question: "Apakah bisa digunakan untuk lebih dari satu cabang?",
        answer:
          "Satu template disarankan untuk satu cabang agar laporan laba rugi tetap akurat. Kamu bisa menduplikasi file untuk cabang lainnya.",
      },
      {
        question: "Apakah mendukung pembayaran digital?",
        answer:
          "Ya, template ini sudah menyediakan kategori metode pembayaran Cash, Transfer, dan QRIS untuk memudahkan rekonsiliasi bank.",
      },
    ],
    href: "https://lynk.id/manajerku.id/exmx1pppdk4q/checkout?token=cGFyYW1zPSU1QiU1RCZiaWRfcHJpY2U9MCZxdHlfcHJvZD0xJnNlc3NpZD0mdG90YWxfcHJpY2U9JnRvdGFsX3VuaXQ9",
    image: "/Product/laundry.png",
  },
  {
    slug: "template-premium",
    title: "Template Laporan Keuangan Pemium UMKM ",
    price: "Rp50.000",
    description:
      "Atur keuangan bisnismu lebih profesional dengan template khusus UMKM yang dilengkapi fitur manajemen stok dan analisis menu terlaris.",
    longDescription:
      "Template ini dirancang untuk UMKM, tidak hanya mencatat uang masuk dan keluar, tapi juga membantu kamu memantau stok produk secara otomatis dan melihat performa penjualan harian hingga tahunan dalam bentuk visual yang mudah dipahami.",
    badge: "PREMIUM",
    features: [
      "Dashboard Visual Tahunan & Bulanan",
      "Manajemen Stok Barang Masuk Otomatis",
      "Tracking Penjualan Berdasarkan Menu",
      "Analisis Grafik Tren Keuntungan",
      "Input Pemasukan & Pengeluaran Harian",
    ],
    forWho: [
      "Pemilik warung makan, cafe, atau kedai kopi",
      "Pengusaha catering atau bisnis makanan rumahan",
      "UMKM yang butuh memantau stok bahan dan laba bersih sekaligus",
    ],
    contentSections: [
      {
        title: "1. Dashboard Tahunan & Analisis Keuntungan",
        image: "/Product/premium/premium (1).png",
        body: "Lihat performa bisnismu sepanjang tahun. Dashboard ini menyajikan total pemasukan, pengeluaran, saldo akhir, serta grafik tren laba bersih setiap bulannya untuk evaluasi strategi bisnis.",
      },
      {
        title: "2. Laporan Bulanan & Persentase Kas",
        image: "/Product/premium/premium (2).png",

        body: "Pantau detail harian dalam satu bulan tertentu. Lengkap dengan perbandingan persentase pemasukan vs pengeluaran melalui pie chart dan status keuntungan terhadap target penjualan.",
      },
      {
        title: "3. Pencatatan Pemasukan & Menu Terjual",
        image: "/Product/premium/premium (3).png",

        body: "Input transaksi penjualan dengan detail nama menu, kategori, jumlah produk, hingga metode pembayaran digital seperti QRIS, DANA, dan BNI.",
      },
      {
        title: "4. Manajemen Stok Barang Masuk",
        image: "/Product/premium/premium (4).png",

        body: "Sheet khusus untuk mencatat inventaris barang masuk setiap bulan. Data ini akan terintegrasi langsung dengan stok produk untuk memastikan ketersediaan bahan baku terjaga.",
      },
      {
        title: "5. Inputan Data Master & Harga Modal",
        image: "/Product/premium/premium (5).png",

        body: "Atur daftar menu, kategori produk, harga jual, hingga harga modal (HPP) di satu tempat. Memudahkan sistem menghitung keuntungan kotor dan bersih secara otomatis tanpa input manual berulang kali.",
      },
    ],
    faqs: [
      {
        question: "Apakah stok berkurang otomatis saat ada penjualan?",
        answer:
          "Ya, template ini sudah dilengkapi rumus otomatis yang mengurangi stok produk berdasarkan jumlah pesanan yang diinput di sheet pemasukan.",
      },
      {
        question: "Bisa untuk mencatat gaji pegawai?",
        answer:
          "Bisa. Kamu bisa mengkategorikan pengeluaran sebagai 'Gaji Pegawai' di sheet pengeluaran untuk melihat pengaruhnya terhadap laba bersih bulanan.",
      },
      {
        question: "Gimana kalau saya punya banyak menu?",
        answer:
          "Template ini menyediakan baris yang banyak dan bisa kamu tambah sesuai kebutuhan daftar menu di tokomu.",
      },
    ],
    href: "https://lynk.id/manajerku.id/gy9ynd63w10o/checkout?token=cGFyYW1zPSU1QiU1RCZiaWRfcHJpY2U9MCZxdHlfcHJvZD0xJnNlc3NpZD0mdG90YWxfcHJpY2U9JnRvdGFsX3VuaXQ9",
    image: "/Product/premium.png",
  },
];
