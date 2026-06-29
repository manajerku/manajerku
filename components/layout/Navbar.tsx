"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Tentang", href: "#about" },
    { name: "Produk", href: "#product" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-[var(--color-neo-green)] border-b-[var(--bw)] border-[var(--color-neo-black)] px-6 py-4 shadow-[var(--shadow)]">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* LOGO SECTION */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 border-[var(--bw)] border-[var(--color-neo-black)] shadow-[3px_3px_0px_0px_var(--color-neo-black)] group-hover:shadow-none group-hover:translate-x-[3px] group-hover:translate-y-[3px] transition-all duration-100 bg-[var(--color-neo-cream)]">
            <Image
              src="/logo/logo.png"
              alt="Logo"
              width={100}
              height={100}
              className="object-contain p-1"
            />
          </div>
          <span className="font-heading text-xl md:text-2xl font-bold uppercase tracking-tighter text-[var(--color-neo-cream)]">
            MANAJERKU
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-heading text-sm font-bold uppercase tracking-wider text-[var(--color-neo-cream)] hover:text-[var(--color-neo-mustard)] transition-colors duration-100 border-b-[3px] border-transparent hover:border-[var(--color-neo-mustard)] py-1">
              {link.name}
            </Link>
          ))}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden p-2 border-[var(--bw)] border-[var(--color-neo-cream)] bg-[var(--color-neo-black)] shadow-[3px_3px_0px_0px_var(--color-neo-cream)] active:shadow-none active:translate-x-[3px] active:translate-y-[3px] transition-all duration-100 cursor-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu">
          <div className="space-y-1.5">
            <div
              className={`w-6 h-0.5 bg-[var(--color-neo-cream)] transition-all duration-200 ${isOpen ? "rotate-45 translate-y-2" : ""}`}></div>
            <div
              className={`w-6 h-0.5 bg-[var(--color-neo-cream)] transition-all duration-200 ${isOpen ? "opacity-0" : ""}`}></div>
            <div
              className={`w-6 h-0.5 bg-[var(--color-neo-cream)] transition-all duration-200 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></div>
          </div>
        </button>
      </div>

      {/* MOBILE NAV DROPDOWN */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="w-full bg-[var(--color-neo-green)] border-b-[var(--bw)] border-[var(--color-neo-black)] p-6 flex flex-col items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-heading text-xl font-bold uppercase tracking-wider text-[var(--color-neo-cream)] hover:text-[var(--color-neo-mustard)] transition-colors duration-100 border-b-[3px] border-transparent hover:border-[var(--color-neo-mustard)] py-1">
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};
