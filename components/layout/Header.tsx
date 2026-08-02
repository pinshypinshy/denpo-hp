"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "商品", href: "/products" },
  { label: "学校養蜂", href: "/projects" },
  { label: "メンバー", href: "/members" },
  { label: "お問い合わせ", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
        <Link href="/" aria-label="伝蜂 DENPO トップへ">
          <Image
            src="/logo/logo_horizontal_black.png"
            alt="伝蜂 DENPO"
            width={147}
            height={80}
            priority
            className="h-10 w-auto brightness-0 invert"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden gap-7 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white transition-colors hover:text-[#D89B1D]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="text-white md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニューを開く"
          aria-expanded={menuOpen}
        >
          <span className="mb-1 block h-0.5 w-6 bg-white" />
          <span className="mb-1 block h-0.5 w-6 bg-white" />
          <span className="block h-0.5 w-6 bg-white" />
        </button>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <nav className="border-t border-white/20 bg-black/60 px-5 pb-4 backdrop-blur-sm sm:px-8 md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block py-2 text-sm text-white transition-colors hover:text-[#D89B1D]"
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
