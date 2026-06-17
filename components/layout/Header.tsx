"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "はちみつを買う", href: "#shop" },
  { label: "学校Bee Project", href: "#project" },
  { label: "実績", href: "#case-studies" },
  { label: "メンバー", href: "#members" },
  { label: "ニュース", href: "#news" },
  { label: "お問い合わせ", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-amber-50 border-b border-amber-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
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
        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-amber-900 hover:text-amber-600 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-amber-800"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニューを開く"
        >
          <span className="block w-6 h-0.5 bg-amber-800 mb-1" />
          <span className="block w-6 h-0.5 bg-amber-800 mb-1" />
          <span className="block w-6 h-0.5 bg-amber-800" />
        </button>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <nav className="md:hidden bg-amber-50 border-t border-amber-200 px-4 pb-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block py-2 text-amber-900 hover:text-amber-600"
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
