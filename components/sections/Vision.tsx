import Reveal from "@/components/ui/Reveal";
import SectionIntro from "@/components/ui/SectionIntro";
import { brandCardWarm, brandContainer, brandSection } from "@/components/ui/designTokens";

const philosophy = [
  ["Observe", "自然を観察し、変化に気づく力を育てる。"],
  ["Harvest", "採蜜を通じて、食が生まれる現場に触れる。"],
  ["Deliver", "蜂蜜と物語を、贈る人の気持ちと一緒に届ける。"],
];

const trustItems = [
  {
    label: "保健所確認済み",
    detail: "志木・藤沢の保健所で製造許可を取得しています。",
  },
  {
    label: "食品衛生責任者",
    detail: "飯塚・松丸の2名が資格を取得しています。",
  },
  {
    label: "国産はちみつ",
    detail: "慶應キャンパス内で採取した純粋はちみつです。",
  },
];

export default function Vision() {
  return (
    <section id="vision" className={`${brandSection} bg-shell`}>
      <div className={brandContainer}>
        <Reveal stagger className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <SectionIntro eyebrow="Vision" title="一瓶の蜂蜜から、学びの風景を変える。">
            <p>
              伝蜂という名前には、「電報」のように大切な想いを届けたいという意味があります。
              蜂蜜をただ売るのではなく、そこにある季節、手仕事、学校での探究の記憶まで届けたい。
            </p>
            <p className="mt-5">
              ミツバチは、環境、食、地域、経済を一つの小さな巣箱の中でつなぎます。
              私たちはその接点を、学校と日常のどちらにも開いていきます。
            </p>
          </SectionIntro>

          <div className="border-l border-line-strong pl-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-bark">
              Philosophy
            </p>
            <dl className="mt-8 space-y-8">
              {philosophy.map(([term, detail]) => (
                <div key={term}>
                  <dt className="text-xl font-semibold text-ink">{term}</dt>
                  <dd className="mt-2 leading-7 text-ink-soft">{detail}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>

        <Reveal stagger className="mt-16 grid gap-4 md:grid-cols-3">
          {trustItems.map((item) => (
            <div key={item.label} className={`${brandCardWarm} p-7 text-ink`}>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-bark">Trust</p>
              <h3 className="mt-4 text-lg font-semibold text-ink">{item.label}</h3>
              <p className="mt-3 text-sm leading-7 text-ink-soft">{item.detail}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
