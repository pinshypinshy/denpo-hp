import Image from "next/image";

const trustItems = [
  { label: "保健所確認済み", detail: "志木・藤沢の保健所で製造許可を取得" },
  { label: "食品衛生責任者", detail: "飯塚・松丸が資格を取得" },
  { label: "国産はちみつ", detail: "慶應キャンパス内で採取した純粋はちみつ" },
];

export default function About() {
  return (
    <section className="bg-white px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-center text-sm font-semibold uppercase tracking-[0.3em] text-[#D89B1D]">
          About
        </p>
        <h2 className="mb-12 text-center text-3xl font-semibold text-black sm:text-4xl">
          伝蜂とは
        </h2>

        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <h3 className="mb-4 text-xl font-semibold text-black">
              「電報」のように、想いを届ける
            </h3>
            <p className="mb-4 leading-8 text-black/70">
              「伝蜂（DENPO）」は「電報」との語呂合わせ。
              かつて電報が大切な想いを届けたように、
              私たちは一瓶のはちみつを通じて、贈る人の気持ちを届けます。
            </p>
            <p className="mb-4 leading-8 text-black/70">
              シーリングスタンプで封をした手紙風メッセージカードと、
              蜜蝋でできたラッピング。
              ギフトとしてのはちみつに、忘れられない体験を。
            </p>
            <p className="leading-8 text-black/70">
              そして私たちのもう一つのミッションは、学校に養蜂を届けること。
              ミツバチとの出会いが、子どもたちの探究心と環境への感性を育てます。
            </p>
          </div>

          <div className="relative aspect-square overflow-hidden rounded-[24px]">
            <Image
              src="/images/activity_beehive_01.jpg"
              alt="伝蜂の養蜂活動・巣箱"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {trustItems.map((item) => (
            <div
              key={item.label}
              className="rounded-[16px] border border-black/10 bg-[linear-gradient(180deg,#222222_0%,#000000_100%)] p-6 text-center text-white shadow-[0_10px_24px_rgba(0,0,0,0.08)]"
            >
              <div className="mb-2 text-2xl">🐝</div>
              <h4 className="mb-1 font-semibold">{item.label}</h4>
              <p className="text-sm leading-7 text-white/70">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
