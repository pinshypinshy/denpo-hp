import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import Shop from "@/components/sections/Shop";
import GiftStory from "@/components/sections/GiftStory";
import Faq, { consumerFaqs } from "@/components/sections/Faq";

export const metadata: Metadata = {
  title: "商品紹介 | 伝蜂 DENPO",
  description:
    "慶應キャンパスで採れた国産純粋はちみつ。手紙風メッセージカードと蜜蝋ラッピングを添えた、贈りものとしての蜂蜜をご紹介します。",
};

export default function ProductsPage() {
  return (
    <>
      <PageHeader eyebrow="Products" title="商品紹介">
        <p>
          キャンパスで採れた蜂蜜を、食の安全に配慮して丁寧に瓶詰めしています。
          贈りものとしての体験まで含めた商品づくりを進めています。
        </p>
      </PageHeader>
      <Shop />
      <GiftStory />
      <Faq
        items={consumerFaqs}
        eyebrow="FAQ for Customers"
        title="商品についてのよくある質問"
        lead="保存方法や結晶化など、お客様からいただくことの多いご質問をまとめました。"
      />
    </>
  );
}
