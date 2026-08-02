import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import CorporateBee from "@/components/sections/CorporateBee";
import CorporateCases from "@/components/sections/CorporateCases";
import Faq, { corporateFaqs } from "@/components/sections/Faq";

export const metadata: Metadata = {
  title: "企業養蜂 | 伝蜂 DENPO",
  description:
    "屋上や敷地の遊休スペースに巣箱を設置し、設置から日常管理、採蜜、瓶詰めまでを伝蜂が代行します。自社名入りのはちみつ、社員参加型イベント、SDGsへの貢献まで。国内の企業養蜂事例もご紹介します。",
};

export default function CorporatePage() {
  return (
    <>
      <PageHeader eyebrow="Corporate Bee Project" title="企業養蜂">
        <p>
          屋上や敷地の空きスペースに巣箱を。養蜂はすべて伝蜂が担い、
          採れたはちみつは貴社名を入れて、自由にお使いいただけます。
        </p>
      </PageHeader>
      <CorporateBee />
      <CorporateCases />
      <Faq
        items={corporateFaqs}
        eyebrow="FAQ for Companies"
        title="企業向けのよくある質問"
        lead="費用や安全面、はちみつの扱いなど、導入検討の初期段階でいただくことの多いご質問をまとめました。"
      />
    </>
  );
}
