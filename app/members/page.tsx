import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import Members from "@/components/sections/Members";

export const metadata: Metadata = {
  title: "メンバー | 伝蜂 DENPO",
  description:
    "巣箱の管理から保健所との調整、学校への提案まで。伝蜂を運営する共同代表2名をご紹介します。",
};

export default function MembersPage() {
  return (
    <>
      <PageHeader eyebrow="Members" title="メンバー">
        <p>伝蜂の活動は、実際に現場で手を動かす少人数の運営で成り立っています。</p>
      </PageHeader>
      <Members />
    </>
  );
}
