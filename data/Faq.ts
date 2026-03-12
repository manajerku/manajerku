export type FAQ = {
  question: string;
  answer: string;
};

export const faqs: FAQ[] = [
  {
    question: "Template ini pakai aplikasi apa?",
    answer:
      "Template berbasis Google Sheets dan Microsoft Excel. Tidak perlu install aplikasi tambahan, langsung bisa dipakai.",
  },
  {
    question: "Apakah ada panduan penggunaannya?",
    answer:
      "Ya, setiap pembelian sudah termasuk panduan penggunaan lengkap dalam bentuk PDF dan video tutorial singkat.",
  },
  {
    question: "Bisa dipakai untuk usaha apa saja?",
    answer:
      "Cocok untuk semua jenis UMKM — warung, toko online, jasa, kuliner, laundry, dan lainnya.",
  },
  {
    question: "Apakah bisa dipakai selamanya?",
    answer:
      "Ya, sekali beli akses selamanya. Tidak ada biaya langganan bulanan.",
  },
  {
    question: "Bagaimana cara mendapatkan templatenya?",
    answer:
      "Setelah pembayaran dikonfirmasi, link download akan langsung dikirim ke WhatsApp atau email kamu.",
  },
];
