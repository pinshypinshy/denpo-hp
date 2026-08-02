import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import BeeProject from "@/components/sections/BeeProject";
import PartnerSchools from "@/components/sections/PartnerSchools";
import News from "@/components/sections/News";
import Faq, { schoolFaqs } from "@/components/sections/Faq";

export const metadata: Metadata = {
  title: "学校養蜂 | 伝蜂 DENPO",
  description:
    "学校の屋上・中庭に巣箱を設置し、理科・食育・環境教育をつなぐ体験型プログラムを設計します。導入の流れ、導入実績、活動報告をご紹介します。",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader eyebrow="School Bee Project" title="学校養蜂">
        <p>
          巣箱を置いて終わりにしない養蜂を。導入から日常管理、採蜜体験までを
          学校の先生方と一緒に設計します。
        </p>
      </PageHeader>
      <BeeProject />
      <PartnerSchools />
      <News eyebrow="Activity Log" title="活動報告" />
      <Faq
        items={schoolFaqs}
        eyebrow="FAQ for Schools"
        title="学校向けのよくある質問"
        lead="安全対策や費用など、導入検討の初期段階でいただくことの多いご質問をまとめました。"
      />
    </>
  );
}
