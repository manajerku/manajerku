"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Tentang", href: "#about" },
    { name: "Produk", href: "#produk" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-(--color-primary) border-b-4 border-black px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* LOGO SECTION */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative w-10 h-10 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-none group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-all bg-white">
            <Image
              src="/logo/logo.png"
              alt="Logo"
              fill
              className="object-contain p-1"
            />
          </div>
          <span className="font-heading text-xl md:text-2xl tracking-tighter text-white">
            MANAJERKU
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-heading text-sm uppercase text-white hover:text-(--color-accent) transition-colors border-b-2 border-transparent hover:border-black">
              {link.name}
            </Link>
          ))}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden p-2 border-2 border-white bg-[var(--color-primary) shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-0.5 active:translate-y-0.5 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}>
          {/* Sederhanakan icon burger */}
          <div className="space-y-1">
            <div className="w-6 h-1 bg-white"></div>
            <div className="w-6 h-1 bg-white"></div>
            <div className="w-6 h-1 bg-white"></div>
          </div>
        </button>
      </div>

      {/* MOBILE NAV DROPDOWN */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-brand-light border-b-4 border-black p-6 space-y-6 flex flex-col items-center animate-in slide-in-from-top duration-200">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-heading text-xl uppercase text-black border-b-2 border-transparent active:border-black">
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};
