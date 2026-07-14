import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Maintenance from "@/components/Maintenance";

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
    <html lang="ja">
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
