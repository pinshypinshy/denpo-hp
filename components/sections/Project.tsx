const educationEffects = [
  {
    icon: "🔬",
    label: "理科",
    detail: "昆虫の生態・受粉・生物多様性を実地で学ぶ",
  },
  {
    icon: "🌿",
    label: "総合学習",
    detail: "環境問題・食農教育・地域連携への探究",
  },
  {
    icon: "🍯",
    label: "食育",
    detail: "採蜜〜瓶詰めを通じて食の生産を体感する",
  },
  {
    icon: "🚀",
    label: "キャリア教育",
    detail: "養蜂ビジネスの視点から起業・社会貢献を考える",
  },
];

const steps = [
  { step: "01", title: "お問い合わせ", detail: "フォームまたはメールでご連絡ください" },
  { step: "02", title: "ヒアリング・提案", detail: "学校の環境・カリキュラムに合わせた導入プランをご提案" },
  { step: "03", title: "設置準備", detail: "巣箱の設置場所確認・安全対策・保護者説明サポート" },
  { step: "04", title: "養蜂スタート", detail: "蜂の導入〜日常管理を伴走しながらサポート" },
  { step: "05", title: "採蜜・加工体験", detail: "児童・生徒と一緒に採蜜・瓶詰めを実施" },
];

import Button from "@/components/ui/Button";

export default function Project() {
  return (
    <section id="project" className="bg-white px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-center text-sm font-semibold uppercase tracking-[0.3em] text-[#D89B1D]">
          Bee Project
        </p>
        <h2 className="mb-4 text-center text-3xl font-semibold text-black sm:text-4xl">
          学校 Bee Project
        </h2>
        <p className="mx-auto mb-12 max-w-xl text-center leading-8 text-black/70">
          学校の屋上・中庭・農場に養蜂箱を設置し、
          子どもたちとミツバチとの共生を通じた体験型教育プログラムを提供します。
        </p>

        <div className="mb-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {educationEffects.map((effect) => (
            <div
              key={effect.label}
              className="rounded-[16px] border border-black/10 bg-white p-5 text-center shadow-[0_10px_24px_rgba(0,0,0,0.05)]"
            >
              <div className="mb-2 text-3xl">{effect.icon}</div>
              <h3 className="mb-1 font-semibold text-black">{effect.label}</h3>
              <p className="text-xs leading-7 text-black/70">{effect.detail}</p>
            </div>
          ))}
        </div>

        <h3 className="mb-8 text-center text-xl font-semibold text-black">
          導入の流れ
        </h3>
        <div className="mb-12 space-y-4">
          {steps.map((step) => (
            <div
              key={step.step}
              className="flex items-start gap-4 rounded-[16px] border border-black/10 bg-white p-5 shadow-[0_10px_24px_rgba(0,0,0,0.05)]"
            >
              <span className="min-w-[2.5rem] text-2xl font-semibold text-[#D89B1D]">
                {step.step}
              </span>
              <div>
                <h4 className="font-semibold text-black">{step.title}</h4>
                <p className="mt-1 text-sm leading-7 text-black/70">{step.detail}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button href="#contact">導入を問い合わせる</Button>
          <p className="mt-3 text-sm text-black/50">
            ※料金・詳細はお問い合わせ後にご案内いたします
          </p>
        </div>
      </div>
    </section>
  );
}
