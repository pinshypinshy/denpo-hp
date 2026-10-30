import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import Shop from "@/components/sections/Shop";
import Faq, { consumerFaqs } from "@/components/sections/Faq";

export const metadata: Metadata = {
  title: "商品紹介 | 伝蜂 DENPO",
  description:
    "慶應義塾志木高等学校で採れた国産純粋はちみつ。CAMPFIREのクラウドファンディングでご支援いただいた方へ、リターンとしてお届けしています。",
};

export default function ProductsPage() {
  return (
    <>
      <PageHeader eyebrow="Products" title="商品紹介">
        <p>
          キャンパスで採れた蜂蜜を、食の安全に配慮して丁寧に瓶詰めしています。
          当面はクラウドファンディングのリターンとして、ご支援いただいた方へお届けします。
        </p>
      </PageHeader>
      <Shop />
      <Faq
        items={consumerFaqs}
        eyebrow="FAQ for Supporters"
        title="商品についてのよくある質問"
        lead="ご支援の方法やお届け時期、保存方法など、よくいただくご質問をまとめました。"
      />
    </>
  );
}
