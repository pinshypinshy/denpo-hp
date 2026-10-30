import type { Metadata } from "next";
import { Noto_Sans_JP, Yuji_Syuku } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Maintenance from "@/components/Maintenance";

const notoSans = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

// ヒーロー文言用の毛筆書体（ロゴの筆文字に合わせる）。ウェイトは 400 のみ提供されている。
const yujiSyuku = Yuji_Syuku({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-yuji-syuku",
  display: "swap",
});

const isMaintenance = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === "true";

export const metadata: Metadata = {
  title: "伝蜂 | DENPO",
  description: "学校養蜂を通じて未来の学びを届ける学生団体",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${notoSans.variable} ${yujiSyuku.variable}`}
      data-scroll-behavior="smooth"
    >
      {isMaintenance ? (
        <body>
          <Maintenance />
        </body>
      ) : (
        <body className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </body>
      )}
    </html>
  );
}
