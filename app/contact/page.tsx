import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "お問い合わせ | 伝蜂 DENPO",
  description: "Bee Project の導入検討、商品に関するお問い合わせ、活動への協力相談を承ります。",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader eyebrow="Contact" title="お問い合わせ">
        <p>
          学校導入のご相談、商品や取材のお問い合わせを承ります。 具体的な検討の前段階でも歓迎です。
        </p>
      </PageHeader>
      <Contact />
    </>
  );
}
