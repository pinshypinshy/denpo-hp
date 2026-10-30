import Image from "next/image";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import SectionIntro from "@/components/ui/SectionIntro";
import { brandContainer, brandPanelWarm, brandSection } from "@/components/ui/designTokens";

/**
 * 当面の販売はCAMPFIREのクラウドファンディングのリターンで行う。
 * 募集終了（2027年1月17日）後は、このセクションの導線を差し替えること。
 */
const CAMPFIRE_URL = "https://camp-fire.jp/projects/993442/view";

const facts = [
  { label: "支援方式", value: "All-in方式" },
  { label: "募集終了", value: "2027年1月17日" },
  { label: "お届け予定", value: "2027年2月" },
  { label: "支援額", value: "1,000円から" },
];

export default function Shop() {
  return (
    <section id="shop" className={`${brandSection} bg-shell`}>
      <div className={brandContainer}>
        <Reveal>
          <SectionIntro eyebrow="Crowdfunding" title="支援のお礼に、蜂蜜を届けます。">
            <p>
              現在、蜂蜜はCAMPFIREのクラウドファンディングを通じてお届けしています。
              ご支援いただいた方へ、リターンとして志木高で採れた純粋蜂蜜をお送りします。
            </p>
          </SectionIntro>
        </Reveal>

        <Reveal
          className={`${brandPanelWarm} mt-14 grid overflow-hidden text-ink lg:grid-cols-[0.95fr_1.05fr]`}
        >
          <div className="relative min-h-[300px]">
            <Image
              src="/images/activity_harvest_jars_01.jpg"
              alt="採れた蜂蜜の瓶を囲んだ集合写真"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>

          <div className="p-7 sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-bark">CAMPFIRE</p>
            <h3 className="mt-4 text-2xl font-semibold leading-snug text-ink">
              志木高で初めて採れた<span className="inline-block">蜂蜜を届けたい！</span>
              <br />
              学生養蜂団体「伝蜂」の挑戦
            </h3>
            <p className="mt-4 text-sm leading-7 text-ink-soft">
              2026年5月、慶應義塾志木高等学校での初めての採蜜で40kgの蜂蜜が採れました。
              いただいたご支援は、巣箱の増設やスズメバチ対策など、養蜂を続けるための設備に充てます。
            </p>

            <dl className="mt-7 grid grid-cols-2 gap-px overflow-hidden rounded-[12px] border border-line bg-line">
              {facts.map((fact) => (
                <div key={fact.label} className="bg-white px-5 py-4">
                  <dt className="text-xs font-semibold tracking-[0.12em] text-bark">
                    {fact.label}
                  </dt>
                  <dd className="mt-1 text-base font-semibold text-ink">{fact.value}</dd>
                </div>
              ))}
            </dl>

            <p className="mt-5 text-xs leading-6 text-ink-soft">
              蜂蜜は春にのみ採蜜しているため、お届けできるのは現在の在庫分に限られます。
              リターンの内容と残数はCAMPFIREのページでご確認ください。
            </p>

            <div className="mt-8">
              <Button href={CAMPFIRE_URL} external>
                CAMPFIREで支援する
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
