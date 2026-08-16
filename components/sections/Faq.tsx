"use client";

import { useState } from "react";
import Reveal from "@/components/ui/Reveal";
import SectionIntro from "@/components/ui/SectionIntro";
import { brandCard, brandContainer, brandSection } from "@/components/ui/designTokens";

export type FaqItem = { q: string; a: string };

export const consumerFaqs: FaqItem[] = [
  {
    q: "賞味期限はどのくらいですか？",
    a: "未開封の場合、製造日から2年です。開封後は直射日光・高温多湿を避け、早めにお召し上がりください。",
  },
  {
    q: "アレルギーはありますか？",
    a: "はちみつはハチアレルギーのある方、1歳未満の乳児にはお与えにならないでください。また花粉アレルギーの方はご注意ください。",
  },
  {
    q: "結晶化していますが大丈夫ですか？",
    a: "はちみつは低温で結晶化しますが品質に問題はありません。40℃程度の湯煎でゆっくり溶かしてください。",
  },
  {
    q: "STORESでの購入方法は？",
    a: "「購入する」ボタンからSTORESページへ移動し、カートに追加してご購入ください。",
  },
];

export const schoolFaqs: FaqItem[] = [
  {
    q: "導入費用はどのくらいかかりますか？",
    a: "学校の規模・設置環境・サポート内容によって変わります。詳細はお問い合わせよりご連絡ください。",
  },
  {
    q: "蜂に刺される心配はありませんか？",
    a: "導入前に安全対策（保護具・緊急対応マニュアル・アレルギー確認フロー）を整えます。また蜂の習性に沿った管理で攻撃リスクを最小限に抑えます。",
  },
  {
    q: "どんな学校に向いていますか？",
    a: "屋上・中庭・農場など巣箱を設置できるスペースがあれば導入可能です。中学・高校・大学での実績があります。",
  },
  {
    q: "カリキュラムへの組み込みはサポートしてもらえますか？",
    a: "理科・総合学習・食育・キャリア教育など、各教科に合わせたプログラム設計をご支援します。",
  },
];

export const corporateFaqs: FaqItem[] = [
  {
    q: "費用はどのくらいかかりますか？",
    a: "設置する巣箱の数、拠点数、イベントの実施回数によって変わります。現地調査のうえでお見積りをご案内しますので、まずはお問い合わせください。",
  },
  {
    q: "社員の手間はどのくらい必要ですか？",
    a: "日常管理はすべて伝蜂が行うため、社員の方の定期的な作業は発生しません。採蜜やミツバチ教室など、ご参加いただきたい日だけ事前にご相談します。",
  },
  {
    q: "どのくらいのスペースが必要ですか？",
    a: "巣箱1群であれば数平方メートルから設置可能です。日照・風・周辺環境を含めて現地調査で判断しますので、まずは候補地をお知らせください。",
  },
  {
    q: "近隣やお客様が刺される心配はありませんか？",
    a: "巣箱の向きや飛行経路を設計し、人の動線と交差しない配置にします。設置前の近隣説明、保護具の準備、緊急対応マニュアルの整備までを伝蜂が行います。",
  },
  {
    q: "採れたはちみつは自由に使えますか？",
    a: "はい。貴社名を入れたラベルでお渡しし、社内配布・ノベルティ・店舗での提供や販売など、用途はご自由にお決めいただけます。販売される場合は必要な許可についてもご相談ください。",
  },
  {
    q: "どのくらいの量が採れますか？",
    a: "立地や気候、群の状態によって大きく変わるため、確約はいたしかねます。現地調査の際に、周辺の蜜源環境から見込みをご説明します。",
  },
];

function AccordionItem({ item }: { item: FaqItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`${brandCard} overflow-hidden`}>
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-brown/5"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-medium text-ink">{item.q}</span>
        <span className="text-xl leading-none text-honey">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div className="border-t border-line px-6 py-5 text-sm leading-7 text-ink/70">{item.a}</div>
      )}
    </div>
  );
}

type FaqProps = {
  items: FaqItem[];
  eyebrow?: string;
  title?: string;
  lead?: string;
};

export default function Faq({ items, eyebrow = "FAQ", title = "よくある質問", lead }: FaqProps) {
  return (
    <section id="faq" className={`${brandSection} bg-white`}>
      <div className={brandContainer}>
        <Reveal>
          <SectionIntro eyebrow={eyebrow} title={title}>
            {lead && <p>{lead}</p>}
          </SectionIntro>
        </Reveal>

        <Reveal stagger className="mt-14 grid max-w-4xl gap-3">
          {items.map((item) => (
            <AccordionItem key={item.q} item={item} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
