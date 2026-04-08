import Link from "next/link";
import Image from "next/image";
import { RiInstagramLine, RiWhatsappLine, RiTiktokLine } from "react-icons/ri";

const navLinks = [
  { name: "Tentang", href: "#about" },
  { name: "Produk", href: "#produk" },
  { name: "FAQ", href: "#faq" },
];

const socialLinks = [
  { name: "Instagram", href: "https://instagram.com/", icon: RiInstagramLine },
  { name: "WhatsApp", href: "https://wa.me/628xxxxxxx", icon: RiWhatsappLine },
  { name: "TikTok", href: "https://tiktok.com/", icon: RiTiktokLine },
];

export default function Footer() {
  return (
    <footer className="border-t-4 border-black bg-(--color-primary)">
      {/* Main */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-16 grid grid-cols-1 md:grid-cols-3 gap-12 border-b-4 border-black">
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="relative w-10 h-10 border-2 border-black bg-white">
              <Image
                src="/logo/logo.png"
                alt="Logo"
                fill
                sizes="40px"
                className="object-contain p-1"
              />
            </div>
            <span className="font-heading text-2xl text-white">MANAJERKU</span>
          </div>
          <p className="font-body text-sm text-white opacity-60 leading-relaxed max-w-xs">
            Solusi praktis manajemen keuangan untuk pelaku UMKM Indonesia.
          </p>
        </div>

        {/* Nav */}
        <div className="flex flex-col gap-4">
          <p className="font-heading text-sm text-(--color-accent) uppercase tracking-widest">
            Navigasi
          </p>
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-body text-sm text-white opacity-70 hover:opacity-100 hover:text-(--color-accent) transition-all w-fit border-b-2 border-transparent hover:border-(--color-accent)">
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Social */}
        <div className="flex flex-col gap-4">
          <p className="font-heading text-sm text-(--color-accent) uppercase tracking-widest">
            Ikuti Kami
          </p>
          <div className="flex flex-col gap-3">
            {socialLinks.map((s) => {
              const Icon = s.icon;
              return (
                <Link
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  className="flex items-center gap-3 w-fit group">
                  <span className="w-9 h-9 border-2 border-white flex items-center justify-center group-hover:bg-(--color-accent) group-hover:border-(--color-accent) transition-colors">
                    <Icon
                      size={18}
                      className="text-white group-hover:text-black transition-colors"
                    />
                  </span>
                  <span className="font-body text-sm text-white opacity-70 group-hover:opacity-100 group-hover:text-(--color-accent) transition-all">
                    {s.name}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="font-body text-xs text-white opacity-40">
          © {new Date().getFullYear()} Manajerku. All rights reserved.
        </p>
        <p className="font-body text-xs text-white opacity-40">
          Developed by{" "}
          <Link
            href="https://manajerku.store"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-(--color-accent) hover:opacity-100 transition-all font-heading uppercase tracking-tighter">
            Manajerku.store
          </Link>
        </p>
      </div>
    </footer>
  );
}
