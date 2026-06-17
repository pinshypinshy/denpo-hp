import Image from "next/image";

const trustItems = [
  { label: "保健所確認済み", detail: "志木・藤沢の保健所で製造許可を取得" },
  { label: "食品衛生責任者", detail: "飯塚・松丸が資格を取得" },
  { label: "国産はちみつ", detail: "慶應キャンパス内で採取した純粋はちみつ" },
];

export default function About() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-sm font-semibold text-amber-600 uppercase tracking-widest mb-4">
          About
        </p>
        <h2 className="text-3xl font-bold text-center text-amber-900 mb-12">
          伝蜂とは
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Brand story */}
          <div>
            <h3 className="text-xl font-bold text-amber-800 mb-4">
              「電報」のように、想いを届ける
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              「伝蜂（DENPO）」は「電報」との語呂合わせ。
              かつて電報が大切な想いを届けたように、
              私たちは一瓶のはちみつを通じて、贈る人の気持ちを届けます。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              シーリングスタンプで封をした手紙風メッセージカードと、
              蜜蝋でできたラッピング。
              ギフトとしてのはちみつに、忘れられない体験を。
            </p>
            <p className="text-gray-700 leading-relaxed">
              そして私たちのもう一つのミッションは、学校に養蜂を届けること。
              ミツバチとの出会いが、子どもたちの探究心と環境への感性を育てます。
            </p>
          </div>

          {/* Activity image */}
          <div className="relative rounded-2xl aspect-square overflow-hidden">
            <Image
              src="/images/activity_beehive_01.jpg"
              alt="伝蜂の養蜂活動・巣箱"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Trust info */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {trustItems.map((item) => (
            <div
              key={item.label}
              className="bg-amber-50 border border-amber-200 rounded-xl p-6 text-center"
            >
              <div className="text-2xl mb-2">🐝</div>
              <h4 className="font-bold text-amber-800 mb-1">{item.label}</h4>
              <p className="text-sm text-gray-600">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
