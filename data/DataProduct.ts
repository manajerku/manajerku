export type Product = {
  slug: string;
  title: string;
  price: string;
  description: string;
  longDescription: string;
  features: string[];
  badge?: string;
};

export const products: Product[] = [
  {
    slug: "laporan-keuangan-umkm",
    title: "Laporan Keuangan UMKM Umum",
    price: "Rp75.000",
    description:
      "Template pencatatan keuangan untuk UMKM yang membantu kamu mengelola dan membuat laporan usaha lebih efektif.",
    longDescription:
      "Template lengkap untuk pencatatan keuangan UMKM. Cocok untuk usaha kecil menengah yang membutuhkan catatan keuangan dasar hingga laporan laba rugi bulanan.",
    features: [
      "Laporan Laba Rugi Otomatis",
      "Pencatatan Pemasukan & Pengeluaran",
      "Dashboard Performa Usaha",
      "Laporan Bulanan & Tahunan",
    ],
    badge: "TERLARIS",
  },
  {
    slug: "pencatatan-keuangan-online",
    title: "Pencatatan Keuangan Usaha Online",
    price: "Rp50.000",
    description:
      "Template untuk pelaku usaha online yang ingin mengontrol inventori produk dan membuat catatan keuangan per platform.",
    longDescription:
      "Dirancang sederhana agar mudah digunakan berbagai kalangan. Cocok untuk usaha online seperti reseller, dropshipper, dan toko online.",
    features: [
      "Manajemen Inventori Produk",
      "Catatan Per Platform (Shopee, Tokopedia, dll)",
      "Laporan Penjualan Bulanan",
      "Rekap Keuntungan Bersih",
    ],
    badge: "BARU",
  },
];
