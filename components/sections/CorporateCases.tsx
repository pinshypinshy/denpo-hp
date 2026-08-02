import Reveal from "@/components/ui/Reveal";
import SectionIntro from "@/components/ui/SectionIntro";

type CorporateCase = {
  company: string;
  project: string;
  since: string;
  place: string;
  body: string;
  facts: string[];
  href: string;
  source: string;
};

/**
 * 伝蜂の実績ではなく、国内で公開されている他社の企業養蜂事例。
 * 自社実績との誤認を避けるため、リード文と各カードに出典を明示する。
 */
const cases: CorporateCase[] = [
  {
    company: "銀座ミツバチプロジェクト",
    project: "都市養蜂の先駆け",
    since: "2006年",
    place: "銀座三丁目・紙パルプ会館屋上",
    body: "銀座で働く有志が、ビル屋上でセイヨウミツバチの飼育を開始。屋上養蜂場の見学や採蜜体験、出前授業を通じて、都市と自然の共生を伝える活動へ広がりました。",
    facts: ["2006年に活動開始", "同様の取り組みが全国100か所以上へ波及"],
    href: "https://gin-pachi.jp/",
    source: "銀座ミツバチプロジェクト 公式サイト",
  },
  {
    company: "TBSホールディングス",
    project: "TBS赤坂みつばちプロジェクト",
    since: "2011年",
    place: "TBS放送センター 低層階屋上",
    body: "赤坂の住民とともに進める教育CSR活動。子ども向けの「みつばち教室×養蜂見学」を定期的に開催し、地域全体で生物多様性と自然との共生を考える場をつくっています。",
    facts: ["2011年に養蜂を開始", "セイヨウミツバチ 約20万匹を飼育"],
    href: "https://www.tbs.co.jp/csr/akasakamitsubachi/",
    source: "TBSホールディングス CSRサイト",
  },
  {
    company: "庭のホテル 東京",
    project: "屋上養蜂と自家製はちみつ",
    since: "2024年",
    place: "15階屋上（地上約53m）",
    body: "屋上菜園の受粉促進を目的に約1万匹から養蜂を開始。採れたはちみつを朝食ブッフェやオリジナルドリンクに使うほか、瓶詰め販売やクラフトビールの副原料にも活用しています。",
    facts: ["2024年2月に約1万匹から開始", "同年5〜8月で計73kgを採蜜"],
    href: "https://prtimes.jp/main/html/rd/p/000000666.000025694.html",
    source: "野村不動産ホールディングス プレスリリース",
  },
];

export default function CorporateCases() {
  return (
    <section id="corporate-cases" className="bg-[linear-gradient(180deg,#3B352A_0%,#222222_100%)] px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionIntro
            inverse
            eyebrow="Case Studies"
            title="企業が養蜂をする、という選択。"
          >
            <p>
              都市の屋上で企業がミツバチを飼う取り組みは、日本でも2006年から積み重ねられてきました。
              以下は伝蜂が関わった事例ではなく、国内で公開されている他社の取り組みです。
            </p>
          </SectionIntro>
        </Reveal>

        <Reveal stagger className="mt-14 grid gap-4 md:grid-cols-3">
          {cases.map((item) => (
            <article
              key={item.company}
              className="flex flex-col rounded-[16px] border border-[#E6DDCF] bg-[linear-gradient(180deg,#FFFDF8_0%,#F5EBDD_100%)] p-7 shadow-[0_12px_30px_rgba(59,53,42,0.08)]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8a6333]">
                Since {item.since}
              </p>
              <h3 className="mt-4 text-xl font-semibold leading-tight text-black">
                {item.company}
              </h3>
              <p className="mt-2 text-sm font-medium text-black/60">{item.project}</p>
              <p className="mt-5 text-sm leading-7 text-black/70">{item.body}</p>

              <dl className="mt-6 grid gap-3">
                <div className="border-t border-black/10 pt-3">
                  <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8a6333]">
                    Place
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-black/70">{item.place}</dd>
                </div>
                {item.facts.map((fact) => (
                  <div key={fact} className="border-t border-black/10 pt-3">
                    <dd className="text-sm leading-6 text-black/70">{fact}</dd>
                  </div>
                ))}
              </dl>

              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-2 pt-7 text-xs font-semibold uppercase tracking-[0.18em] text-black transition-colors hover:text-[#D89B1D]"
              >
                出典：{item.source}
                <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </Reveal>

        <p className="mt-8 text-sm leading-7 text-white/50">
          ※記載の内容は各社が公開している情報にもとづきます。伝蜂による実施事例ではありません。
        </p>
      </div>
    </section>
  );
}
