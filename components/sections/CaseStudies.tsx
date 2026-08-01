import Image from "next/image";

export default function CaseStudies() {
  return (
    <section id="case-studies" className="bg-white px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-center text-sm font-semibold uppercase tracking-[0.3em] text-[#D89B1D]">
          Case Studies
        </p>
        <h2 className="mb-12 text-center text-3xl font-semibold text-black sm:text-4xl">
          導入実績
        </h2>

        <div className="overflow-hidden rounded-[24px] border border-black/10 bg-white shadow-[0_12px_32px_rgba(0,0,0,0.08)]">
          <div className="grid md:grid-cols-2">
            <div className="relative min-h-64">
              <Image
                src="/images/case_shiki_harvest_01.jpg"
                alt="慶應義塾志木高等学校での採蜜の様子"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="p-8">
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.24em] text-[#D89B1D]">
                導入事例 #001
              </p>
              <h3 className="mb-4 text-2xl font-semibold text-black">
                慶應義塾志木高等学校
              </h3>

              <dl className="mb-6 space-y-3">
                <div>
                  <dt className="text-xs uppercase tracking-wide text-black/50">初回採蜜</dt>
                  <dd className="font-semibold text-black">2026年5月30日</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wide text-black/50">採蜜量</dt>
                  <dd className="text-2xl font-semibold text-[#D89B1D]">40 kg</dd>
                </div>
              </dl>

              <p className="text-sm leading-8 text-black/70">
                慶應義塾志木高校の屋外スペースにセイヨウミツバチを導入。
                2026年4月17日に蜂を導入し、約6週間で初回採蜜を実施。
                生徒たちが自ら保護具をつけて採蜜を体験し、40kgという
                初回としては豊かな収量を達成しました。
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full bg-black px-3 py-1 text-xs font-semibold text-white">
                  セイヨウミツバチ
                </span>
                <span className="rounded-full bg-black px-3 py-1 text-xs font-semibold text-white">
                  採蜜体験
                </span>
                <span className="rounded-full bg-black px-3 py-1 text-xs font-semibold text-white">
                  理科・総合学習
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
