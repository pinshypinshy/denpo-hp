import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import SectionIntro from "@/components/ui/SectionIntro";

const benefits = [
  {
    title: "サステナビリティへの貢献",
    detail:
      "受粉を担うミツバチを都市で育てることは、生物多様性の保全に直結します。SDGsや環境方針に沿った、目に見える活動として発信できます。",
  },
  {
    title: "自社名入りのはちみつ",
    detail:
      "採れたはちみつには貴社名を入れたラベルをお付けします。社内イベント、来客への手土産、ノベルティ、店舗での販売まで自由にお使いいただけます。",
  },
  {
    title: "社員参加型のイベント",
    detail:
      "採蜜の日は社員の方と一緒に。ご家族や取引先を招いた「ミツバチ教室」「養蜂見学会」も、企画から運営まで伝蜂が担当します。",
  },
  {
    title: "発信と、学生との接点",
    detail:
      "伝蜂のInstagram（@denpo_bee）や活動報告でも取り組みを紹介します。慶應義塾大学を中心とした学生メンバーとの関わりは、産学連携や採用広報のきっかけにもなります。",
  },
];

const ourWork = [
  "設置場所の調査と巣箱の設置",
  "内検・給餌・病害虫対策・越冬などの日常管理",
  "採蜜、瓶詰め、ラベルのご用意",
  "近隣への説明と安全対策の整備",
  "ミツバチ教室・養蜂見学会の企画と運営",
];

const yourWork = [
  "巣箱を置く数平方メートルのスペース",
  "建物・敷地の管理者からの設置許可",
  "採蜜日のご都合（ご参加は任意です）",
];

const targets = [
  {
    field: "ブライダル会場・ホテル",
    detail: "引き出物やウェルカムギフト、館内レストランでの提供に。会場の物語を一つ増やす。",
  },
  {
    field: "オフィスビル・商業施設",
    detail: "屋上の遊休スペースをそのまま環境活動の拠点に。テナントや来館者向けの催しにも。",
  },
  {
    field: "自然・食に関わる企業",
    detail: "事業と地続きのストーリーとして、原料や商品開発にもつなげられる。",
  },
  {
    field: "工場・研修所・保養所",
    detail: "緑地を持つ拠点の価値づけに。地域との接点づくりにも活用できる。",
  },
];

const steps = [
  {
    step: "01",
    title: "お問い合わせ",
    detail: "Instagramまたはお問い合わせよりご連絡ください。構想段階のご相談でも歓迎です。",
  },
  {
    step: "02",
    title: "現地調査・ご提案",
    detail:
      "屋上や敷地を拝見し、日照・風・周辺環境から設置可否を判断のうえ、規模と運用プランをご提案します。",
  },
  {
    step: "03",
    title: "設置準備",
    detail:
      "管理者様の許可取得、近隣へのご説明、安全対策の整備までを伝蜂がサポートします。",
  },
  {
    step: "04",
    title: "巣箱設置・養蜂スタート",
    detail:
      "巣箱の設置後、日常管理はすべて伝蜂が行います。社員の方の手を煩わせることはありません。",
  },
  {
    step: "05",
    title: "採蜜・瓶詰め",
    detail:
      "採蜜の日は社員の方と一緒に。瓶詰めとラベル貼りまで行い、はちみつをお渡しします。",
  },
];

export default function CorporateBee() {
  return (
    <section id="corporate-bee" className="bg-[#FAF8F3] px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionIntro
            eyebrow="Corporate Bee Project"
            title="少しのスペースを、有効活用してみませんか。"
          >
            <p>
              貴社の屋上や敷地の空きスペースに巣箱を設置し、設置から日常管理、採蜜、瓶詰めまでを
              伝蜂がすべて代行します。社員の方に日々の作業は発生しません。
              採蜜の日だけ、ミツバチのいる現場に立ち会っていただきます。
            </p>
          </SectionIntro>
        </Reveal>

        <Reveal stagger className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <article
              key={benefit.title}
              className="rounded-[16px] border border-black/10 bg-white p-7 shadow-[0_10px_24px_rgba(0,0,0,0.06)]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#D89B1D]">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-4 text-xl font-semibold text-black">{benefit.title}</h3>
              <p className="mt-3 text-sm leading-7 text-black/70">{benefit.detail}</p>
            </article>
          ))}
        </Reveal>

        <div className="mt-20">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8a6333]">
              Service
            </p>
            <h3 className="mt-4 text-2xl font-semibold text-black md:text-3xl">
              養蜂は、すべて伝蜂が行います
            </h3>
          </Reveal>

          <Reveal stagger className="mt-10 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-[24px] border border-[#E6DDCF] bg-[linear-gradient(180deg,#FFFDF8_0%,#F5EBDD_100%)] p-8 text-[#111111] shadow-[0_12px_30px_rgba(59,53,42,0.08)] md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8a6333]">
                We do
              </p>
              <h4 className="mt-4 text-xl font-semibold text-[#111111]">伝蜂が行うこと</h4>
              <ul className="mt-7 grid gap-4">
                {ourWork.map((item) => (
                  <li
                    key={item}
                    className="border-t border-[#e8dcc8] pt-4 text-sm leading-7 text-[#4a463f]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[24px] border border-[#E6DDCF] bg-white p-8 shadow-[0_12px_30px_rgba(59,53,42,0.08)] md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8a6333]">
                You do
              </p>
              <h4 className="mt-4 text-xl font-semibold text-black">
                ご用意いただくもの
              </h4>
              <ul className="mt-7 grid gap-4">
                {yourWork.map((item) => (
                  <li
                    key={item}
                    className="border-t border-black/10 pt-4 text-sm leading-7 text-black/70"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <div className="mt-20">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8a6333]">
              For
            </p>
            <h3 className="mt-4 text-2xl font-semibold text-black md:text-3xl">
              こんな企業に向いています
            </h3>
          </Reveal>

          <Reveal stagger className="mt-10 grid gap-4 sm:grid-cols-2">
            {targets.map((target) => (
              <article
                key={target.field}
                className="rounded-[16px] border border-[#E6DDCF] bg-white p-7 shadow-[0_12px_30px_rgba(59,53,42,0.08)]"
              >
                <h4 className="text-lg font-semibold text-black">{target.field}</h4>
                <p className="mt-3 text-sm leading-7 text-black/70">{target.detail}</p>
              </article>
            ))}
          </Reveal>
        </div>

        <div className="mt-20">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8a6333]">
              Process
            </p>
            <h3 className="mt-4 text-2xl font-semibold text-black md:text-3xl">導入の流れ</h3>
          </Reveal>

          <Reveal stagger className="mt-10 grid gap-3">
            {steps.map((step) => (
              <div
                key={step.step}
                className="flex flex-col gap-2 rounded-[16px] border border-[#E6DDCF] bg-white p-6 shadow-[0_12px_30px_rgba(59,53,42,0.08)] sm:flex-row sm:items-baseline sm:gap-8"
              >
                <span className="text-2xl font-semibold text-[#D89B1D] sm:min-w-[3rem]">
                  {step.step}
                </span>
                <div>
                  <h4 className="text-lg font-semibold text-black">{step.title}</h4>
                  <p className="mt-2 text-sm leading-7 text-black/70">{step.detail}</p>
                </div>
              </div>
            ))}
          </Reveal>

          <Reveal className="mt-10">
            <Button href="/contact">導入を相談する</Button>
            <p className="mt-4 text-sm text-black/50">
              ※費用は設置規模・拠点数・イベント実施回数によって変わります。お問い合わせ後にお見積りをご案内いたします。
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
