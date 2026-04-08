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
    slug: "laporan-keuangan-umkm",
    title: "Laporan Keuangan UMKM Umum",
    price: "Rp75.000",
    description:
      "Template pencatatan keuangan untuk UMKM yang membantu kamu mengelola dan membuat laporan usaha lebih efektif dan efisien.",
    longDescription:
      "Template lengkap untuk pencatatan keuangan UMKM. Cocok untuk usaha kecil menengah yang membutuhkan catatan keuangan dasar hingga laporan laba rugi bulanan.",
    badge: "TERLARIS",
    features: [
      "Laporan Laba Rugi Otomatis",
      "Pencatatan Pemasukan & Pengeluaran",
      "Dashboard Performa Usaha",
      "Laporan Bulanan & Tahunan",
    ],
    forWho: [
      "Pemilik warung, toko, atau usaha rumahan",
      "UMKM yang baru mulai mencatat keuangan",
      "Pelaku usaha yang ingin laporan rapi tanpa akuntan",
    ],
    contentSections: [
      {
        title: "1. Dashboard Performa Usaha",
        image: "/Product/free-product.png",
        body: "Lihat ringkasan keuangan bisnis kamu dalam satu tampilan. Total pemasukan, pengeluaran, dan laba bersih tersaji otomatis setiap bulan.",
      },
      {
        title: "2. Pencatatan Pemasukan & Pengeluaran",
        body: "Input transaksi harian dengan mudah. Template ini sudah dilengkapi kategori yang bisa kamu sesuaikan dengan jenis usaha.",
      },
      {
        title: "3. Laporan Laba Rugi Otomatis",
        body: "Tidak perlu hitung manual. Laporan laba rugi terbentuk otomatis dari data yang sudah kamu input setiap hari.",
      },
      {
        title: "4. Laporan Bulanan & Tahunan",
        body: "Pantau tren bisnis kamu dari bulan ke bulan. Berguna untuk evaluasi dan pengambilan keputusan bisnis.",
      },
    ],
    faqs: [
      {
        question: "Template ini pakai aplikasi apa?",
        answer:
          "Template berbasis Google Sheets / Microsoft Excel, jadi bisa langsung dipakai tanpa install aplikasi tambahan.",
      },
      {
        question: "Apakah ada panduan penggunaannya?",
        answer:
          "Ya, setiap pembelian sudah termasuk panduan penggunaan lengkap dalam bentuk PDF.",
      },
      {
        question: "Bisa dipakai untuk usaha apa saja?",
        answer:
          "Template ini cocok untuk semua jenis usaha kecil menengah — dari warung, toko online, jasa, hingga usaha kuliner.",
      },
    ],
    href: "https://lynk.id/manajerku.id/pjmjov4dr396/checkout?token=cGFyYW1zPSU1QiU1RCZiaWRfcHJpY2U9MCZxdHlfcHJvZD0xJnNlc3NpZD0mdG90YWxfcHJpY2U9JnRvdGFsX3VuaXQ9",
    image: "/Product/free-product.png",
  },
  {
    slug: "pencatatan-keuangan-online",
    title: "Pencatatan Keuangan Usaha Online",
    price: "Rp50.000",
    description:
      "Template untuk pelaku usaha online yang ingin mengontrol inventori dan membuat catatan keuangan per platform.",
    longDescription:
      "Dirancang sederhana agar mudah digunakan berbagai kalangan. Cocok untuk usaha online seperti reseller, dropshipper, dan toko online.",
    badge: "BARU",
    features: [
      "Manajemen Inventori Produk",
      "Catatan Per Platform (Shopee, Tokopedia, dll)",
      "Laporan Penjualan Bulanan",
      "Rekap Keuntungan Bersih",
    ],
    forWho: [
      "Reseller dan dropshipper",
      "Pemilik toko online multi-platform",
      "Pelaku usaha yang ingin pantau stok & keuntungan",
    ],
    contentSections: [
      {
        title: "1. Manajemen Inventori Produk",
        body: "Catat stok masuk dan keluar dengan mudah. Kamu bisa tahu kapan harus restok tanpa harus hitung manual.",
      },
      {
        title: "2. Catatan Per Platform",
        body: "Pisahkan catatan penjualan dari Shopee, Tokopedia, Instagram, dan platform lainnya dalam satu file yang rapi.",
      },
      {
        title: "3. Laporan Penjualan Bulanan",
        body: "Rekap otomatis total penjualan per bulan per platform. Mudah untuk evaluasi platform mana yang paling menguntungkan.",
      },
    ],
    faqs: [
      {
        question: "Apakah bisa dipakai untuk lebih dari satu toko?",
        answer:
          "Bisa. Kamu tinggal duplikasi sheet untuk setiap toko atau platform yang kamu kelola.",
      },
      {
        question: "Format filenya apa?",
        answer:
          "File dikirim dalam format .xlsx (Excel) dan sudah kompatibel dengan Google Sheets.",
      },
    ],
    href: "https://lynk.id/manajerku.id/pjmjov4dr396/checkout?token=cGFyYW1zPSU1QiU1RCZiaWRfcHJpY2U9MCZxdHlfcHJvZD0xJnNlc3NpZD0mdG90YWxfcHJpY2U9JnRvdGFsX3VuaXQ9",
    image: "/Product/free-product.png",
  },
];
