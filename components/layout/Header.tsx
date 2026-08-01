"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "購入", href: "#shop" },
  { label: "学校養蜂", href: "#project" },
  { label: "実績", href: "#case-studies" },
  { label: "メンバー", href: "#members" },
  { label: "ニュース", href: "#news" },
  { label: "お問い合わせ", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
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
        <nav className="hidden gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white transition-colors hover:text-orange-400"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="text-white md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニューを開く"
        >
          <span className="mb-1 block h-0.5 w-6 bg-white" />
          <span className="mb-1 block h-0.5 w-6 bg-white" />
          <span className="block h-0.5 w-6 bg-white" />
        </button>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <nav className="border-t border-white/20 bg-black/40 px-4 pb-4 backdrop-blur-sm md:hidden">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block py-2 text-sm text-white transition-colors hover:text-orange-400"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
