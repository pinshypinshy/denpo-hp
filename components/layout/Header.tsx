"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { label: "学校養蜂", href: "/projects" },
  { label: "企業養蜂", href: "/corporate" },
  { label: "商品", href: "/products" },
  { label: "メンバー", href: "/members" },
  { label: "お問い合わせ", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") {
      setIsScrolled(true);
      return;
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const isSolid = pathname !== "/" || isScrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isSolid
          ? "border-b border-black/10 bg-white/95 text-black shadow-[0_6px_20px_rgba(0,0,0,0.06)] backdrop-blur-sm"
          : "border-b border-white/20 bg-transparent text-white shadow-none"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
        <Link href="/" aria-label="伝蜂 DENPO トップへ">
          <Image
            src="/logo/logo_horizontal_black.png"
            alt="伝蜂 DENPO"
            width={147}
            height={80}
            priority
            className={`h-10 w-auto transition-all duration-300 ${isSolid ? "" : "brightness-0 invert"}`}
          />
        </Link>

        <nav className="hidden gap-7 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-[#D89B1D] ${
                isSolid ? "text-black" : "text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="relative h-6 w-6 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={menuOpen}
        >
          <span
            className={`absolute left-0 block h-0.5 w-6 transition-all duration-300 ${
              isSolid ? "bg-black" : "bg-white"
            } ${menuOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-1.5"}`}
          />
          <span
            className={`absolute left-0 top-1/2 block h-0.5 w-6 -translate-y-1/2 transition-opacity duration-200 ${
              isSolid ? "bg-black" : "bg-white"
            } ${menuOpen ? "opacity-0" : "opacity-100"}`}
          />
          <span
            className={`absolute left-0 block h-0.5 w-6 transition-all duration-300 ${
              isSolid ? "bg-black" : "bg-white"
            } ${menuOpen ? "top-1/2 -translate-y-1/2 -rotate-45" : "top-[1.125rem]"}`}
          />
        </button>
      </div>

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
