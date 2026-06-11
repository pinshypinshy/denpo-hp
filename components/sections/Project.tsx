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

export default function Project() {
  return (
    <section id="project" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-sm font-semibold text-amber-600 uppercase tracking-widest mb-4">
          Bee Project
        </p>
        <h2 className="text-3xl font-bold text-center text-amber-900 mb-4">
          学校 Bee Project
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-xl mx-auto">
          学校の屋上・中庭・農場に養蜂箱を設置し、
          子どもたちとミツバチとの共生を通じた体験型教育プログラムを提供します。
        </p>

        {/* Education effects */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {educationEffects.map((effect) => (
            <div
              key={effect.label}
              className="bg-amber-50 rounded-xl p-5 text-center border border-amber-100"
            >
              <div className="text-3xl mb-2">{effect.icon}</div>
              <h3 className="font-bold text-amber-800 mb-1">{effect.label}</h3>
              <p className="text-xs text-gray-600">{effect.detail}</p>
            </div>
          ))}
        </div>

        {/* Steps */}
        <h3 className="text-xl font-bold text-amber-900 mb-8 text-center">
          導入の流れ
        </h3>
        <div className="space-y-4 mb-12">
          {steps.map((step) => (
            <div
              key={step.step}
              className="flex items-start gap-4 bg-amber-50 rounded-xl p-5 border border-amber-100"
            >
              <span className="text-2xl font-bold text-amber-300 min-w-[2.5rem]">
                {step.step}
              </span>
              <div>
                <h4 className="font-bold text-amber-800">{step.title}</h4>
                <p className="text-sm text-gray-600 mt-1">{step.detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#contact"
            className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-10 py-4 rounded-full text-lg inline-block transition-colors"
          >
            導入を問い合わせる
          </a>
          <p className="text-sm text-gray-500 mt-3">
            ※料金・詳細はお問い合わせ後にご案内いたします
          </p>
        </div>
      </div>
    </section>
  );
}
