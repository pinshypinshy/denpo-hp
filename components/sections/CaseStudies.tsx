import Image from "next/image";

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-20 px-4 bg-amber-50">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-sm font-semibold text-amber-600 uppercase tracking-widest mb-4">
          Case Studies
        </p>
        <h2 className="text-3xl font-bold text-center text-amber-900 mb-12">
          導入実績
        </h2>

        <div className="bg-white rounded-2xl shadow-sm border border-amber-100 overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* Case image */}
            <div className="relative min-h-64">
              <Image
                src="/images/case_shiki_harvest_01.jpg"
                alt="慶應義塾志木高等学校での採蜜の様子"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-8">
              <p className="text-sm font-semibold text-amber-600 mb-2">
                導入事例 #001
              </p>
              <h3 className="text-2xl font-bold text-amber-900 mb-4">
                慶應義塾志木高等学校
              </h3>

              <dl className="space-y-3 mb-6">
                <div>
                  <dt className="text-xs text-gray-500 uppercase tracking-wide">
                    初回採蜜
                  </dt>
                  <dd className="font-semibold text-amber-800">
                    2026年5月30日
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-gray-500 uppercase tracking-wide">
                    採蜜量
                  </dt>
                  <dd className="font-bold text-2xl text-amber-700">40 kg</dd>
                </div>
              </dl>

              <p className="text-gray-600 text-sm leading-relaxed">
                慶應義塾志木高校の屋外スペースにセイヨウミツバチを導入。
                2026年4月17日に蜂を導入し、約6週間で初回採蜜を実施。
                生徒たちが自ら保護具をつけて採蜜を体験し、40kgという
                初回としては豊かな収量を達成しました。
              </p>

              <div className="mt-6 flex gap-2 flex-wrap">
                <span className="bg-amber-100 text-amber-800 text-xs px-3 py-1 rounded-full">
                  セイヨウミツバチ
                </span>
                <span className="bg-amber-100 text-amber-800 text-xs px-3 py-1 rounded-full">
                  採蜜体験
                </span>
                <span className="bg-amber-100 text-amber-800 text-xs px-3 py-1 rounded-full">
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
