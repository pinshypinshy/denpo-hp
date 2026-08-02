"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "学校養蜂", href: "/projects" },
  { label: "企業養蜂", href: "/corporate" },
  { label: "商品", href: "/products" },
  { label: "メンバー", href: "/members" },
  { label: "お問い合わせ", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/95 backdrop-blur-sm shadow-[0_6px_20px_rgba(0,0,0,0.06)]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
        <Link href="/" aria-label="伝蜂 DENPO トップへ">
          <Image
            src="/logo/logo_horizontal_black.png"
            alt="伝蜂 DENPO"
            width={147}
            height={80}
            priority
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden gap-7 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-black transition-colors hover:text-[#D89B1D]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger — 開いている間はバツ印に変形する */}
        <button
          type="button"
          className="relative h-6 w-6 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={menuOpen}
        >
          <span
            className={`absolute left-0 block h-0.5 w-6 bg-white transition-all duration-300 ${
              menuOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-1.5"
            }`}
          />
          <span
            className={`absolute left-0 top-1/2 block h-0.5 w-6 -translate-y-1/2 bg-black transition-opacity duration-200 ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute left-0 block h-0.5 w-6 bg-white transition-all duration-300 ${
              menuOpen ? "top-1/2 -translate-y-1/2 -rotate-45" : "top-[1.125rem]"
            }`}
          />
        </button>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <nav className="border-t border-black/10 bg-white px-5 pb-4 shadow-[0_10px_24px_rgba(0,0,0,0.05)] sm:px-8 md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block py-2 text-sm text-black transition-colors hover:text-[#D89B1D]"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
