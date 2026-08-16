import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import SectionIntro from "@/components/ui/SectionIntro";
import {
  brandCard,
  brandCardWarm,
  brandContainer,
  brandSection,
} from "@/components/ui/designTokens";

const educationEffects = [
  {
    field: "理科",
    detail: "昆虫の生態・受粉・生物多様性を、教室の外で実地に学ぶ。",
  },
  {
    field: "総合学習",
    detail: "環境問題・食農教育・地域連携を横断する探究テーマとして扱う。",
  },
  {
    field: "食育",
    detail: "採蜜から瓶詰めまでを体験し、食が生まれる現場を体感する。",
  },
  {
    field: "キャリア教育",
    detail: "養蜂を事業として捉え、起業や社会貢献の視点から考える。",
  },
];

const steps = [
  {
    step: "01",
    title: "お問い合わせ",
    detail: "Instagramまたはお問い合わせよりご連絡ください。",
  },
  {
    step: "02",
    title: "ヒアリング・提案",
    detail: "学校の環境・カリキュラムに合わせた導入プランをご提案します。",
  },
  {
    step: "03",
    title: "設置準備",
    detail: "巣箱の設置場所確認、安全対策の整備、保護者向け説明をサポートします。",
  },
  {
    step: "04",
    title: "養蜂スタート",
    detail: "蜂の導入から日常管理まで、伴走しながらサポートします。",
  },
  {
    step: "05",
    title: "採蜜・加工体験",
    detail: "児童・生徒と一緒に採蜜と瓶詰めを実施します。",
  },
];

export default function BeeProject() {
  return (
    <section id="bee-project" className={`${brandSection} bg-shell`}>
      <div className={brandContainer}>
        <Reveal>
          <SectionIntro eyebrow="Bee Project" title="学校に、ミツバチのいる学びを。">
            <p>
              学校の屋上・中庭・農場に巣箱を設置し、子どもたちとミツバチの共生を通じた
              体験型教育プログラムを提供します。設置して終わりではなく、
              日常管理から採蜜までを伴走します。
            </p>
          </SectionIntro>
        </Reveal>

        <Reveal stagger className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {educationEffects.map((effect, index) => (
            <article key={effect.field} className={`${brandCardWarm} p-7`}>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-honey">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-4 text-xl font-semibold text-ink">{effect.field}</h3>
              <p className="mt-3 text-sm leading-7 text-ink/70">{effect.detail}</p>
            </article>
          ))}
        </Reveal>

        <div className="mt-20">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-bark">Process</p>
            <h3 className="mt-4 text-2xl font-semibold text-ink md:text-3xl">導入の流れ</h3>
          </Reveal>

          <Reveal stagger className="mt-10 grid gap-3">
            {steps.map((step) => (
              <div
                key={step.step}
                className={`${brandCard} flex flex-col gap-2 p-6 sm:flex-row sm:items-baseline sm:gap-8`}
              >
                <span className="text-2xl font-semibold text-honey sm:min-w-[3rem]">
                  {step.step}
                </span>
                <div>
                  <h4 className="text-lg font-semibold text-ink">{step.title}</h4>
                  <p className="mt-2 text-sm leading-7 text-ink/70">{step.detail}</p>
                </div>
              </div>
            ))}
          </Reveal>

          <Reveal className="mt-10">
            <Button href="/contact">導入を相談する</Button>
            <p className="mt-4 text-sm text-ink/50">
              ※料金・詳細はお問い合わせ後にご案内いたします。
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
