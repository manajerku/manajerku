export type Testimonial = {
  name: string;
  role: string;
  message: string;
  avatar?: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Sari Dewi",
    role: "Pemilik Toko Baju Online",
    message:
      "Sebelum pakai template ini, keuangan toko saya berantakan. Sekarang tiap bulan bisa lihat untung rugi dengan jelas. Recommended banget!",
  },
  {
    name: "Budi Santoso",
    role: "Pemilik Warung Makan",
    message:
      "Simple banget dipakainya. Saya yang gak ngerti akuntansi pun bisa langsung paham. Laporan bulanan jadi lebih rapi.",
  },
  {
    name: "Rina Kusuma",
    role: "Reseller Fashion",
    message:
      "Akhirnya bisa tahu mana produk yang paling untung. Template pencatatan online-nya cocok banget buat jualan di Shopee dan Tokopedia.",
  },
  {
    name: "Agus Prayitno",
    role: "Pemilik Usaha Laundry",
    message:
      "Harganya terjangkau tapi isinya lengkap. Udah 3 bulan pakai dan sangat membantu untuk kontrol pengeluaran operasional.",
  },
];
