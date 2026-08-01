"use client";

import { useState } from "react";

type FaqItem = { q: string; a: string };

const consumerFaqs: FaqItem[] = [
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

const schoolFaqs: FaqItem[] = [
  {
    q: "導入費用はどのくらいかかりますか？",
    a: "学校の規模・設置環境・サポート内容によって変わります。詳細はお問い合わせフォームよりご連絡ください。",
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

function AccordionItem({ item }: { item: FaqItem }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="overflow-hidden rounded-[16px] border border-black/10 bg-white shadow-[0_8px_20px_rgba(0,0,0,0.04)]">
      <button
        className="flex w-full items-center justify-between px-5 py-4 text-left transition-colors hover:bg-black/5"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-medium text-black">{item.q}</span>
        <span className="text-xl text-[#D89B1D]">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div className="border-t border-black/10 bg-black/5 px-5 py-4 text-sm leading-8 text-black/70">
          {item.a}
        </div>
      )}
    </div>
  );
}

export default function Faq() {
  return (
    <section className="bg-white px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <p className="mb-4 text-center text-sm font-semibold uppercase tracking-[0.3em] text-[#D89B1D]">
          FAQ
        </p>
        <h2 className="mb-12 text-center text-3xl font-semibold text-black sm:text-4xl">
          よくある質問
        </h2>

        <div className="mb-10">
          <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-black">
            <span>🍯</span> 消費者向け
          </h3>
          <div className="space-y-3">
            {consumerFaqs.map((item) => (
              <AccordionItem key={item.q} item={item} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-black">
            <span>🏫</span> 学校向け
          </h3>
          <div className="space-y-3">
            {schoolFaqs.map((item) => (
              <AccordionItem key={item.q} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
