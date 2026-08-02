import Image from "next/image";
import SectionIntro from "@/components/ui/SectionIntro";

const partnerStats = [
  { value: "2026.04", label: "セイヨウミツバチ導入" },
  { value: "40kg", label: "初回採蜜量" },
  { value: "6 weeks", label: "導入から初回採蜜まで" },
];

export default function PartnerSchools() {
  return (
    <section id="partner-schools" className="bg-white px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionIntro eyebrow="Partner Schools" title="学校とともに、実践を積み重ねる。">
          <p>
            慶應義塾志木高等学校での導入を起点に、学校の現場で無理なく続く養蜂プログラムを検証しています。
          </p>
        </SectionIntro>

        <div className="mt-14 grid overflow-hidden rounded-[24px] border border-black/10 bg-[linear-gradient(180deg,#222222_0%,#000000_100%)] shadow-[0_16px_40px_rgba(0,0,0,0.12)] lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative min-h-[320px]">
            <Image
              src="/images/case_shiki_harvest_01.jpg"
              alt="慶應義塾志木高等学校での採蜜体験"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="p-8 text-white md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#D89B1D]">
              Case 001
            </p>
            <h3 className="mt-4 text-3xl font-semibold text-white">
              慶應義塾志木高等学校
            </h3>
            <p className="mt-5 leading-8 text-white/80">
              2026年4月にセイヨウミツバチを導入。約6週間後の初回採蜜では、
              生徒たちが保護具を身につけて採蜜を体験し、40kgの蜂蜜を収穫しました。
            </p>
            <dl className="mt-8 grid gap-4 sm:grid-cols-3">
              {partnerStats.map((stat) => (
                <div key={stat.label} className="border-t border-white/20 pt-4">
                  <dt className="text-2xl font-semibold text-white">{stat.value}</dt>
                  <dd className="mt-1 text-xs leading-5 text-white/70">{stat.label}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-8 flex flex-wrap gap-2">
              {["セイヨウミツバチ", "採蜜体験", "理科・総合学習"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/20 px-3 py-1 text-xs font-semibold text-white/80"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
