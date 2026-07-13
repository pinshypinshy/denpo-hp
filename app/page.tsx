import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

type SectionIntroProps = {
  eyebrow: string;
  title: string;
  children: ReactNode;
  inverse?: boolean;
};

const projects = [
  {
    label: "School Bee Project",
    title: "学校に、ミツバチのいる学びを。",
    body: "屋上や中庭に巣箱を置き、理科・食育・環境教育をつなぐ体験型プログラムを設計します。",
    href: "/projects",
    cta: "導入案内を見る",
  },
  {
    label: "Campus Beekeeping",
    title: "学生が現場に立ち、季節の変化を記録する。",
    body: "採蜜、瓶詰め、衛生管理、学校との連携まで。日々の活動を次の導入へ生かしています。",
    href: "/blog",
    cta: "活動報告を読む",
  },
];

const products = [
  {
    name: "伝蜂はちみつ",
    detail: "65g / 国産純粋はちみつ",
    body: "慶應キャンパスで採れた蜂蜜を、食の安全に配慮して丁寧に瓶詰めしています。",
  },
  {
    name: "Gift Package",
    detail: "手紙風カード / 蜜蝋ラッピング",
    body: "「電報」のように想いを届ける、贈りものとしての蜂蜜体験を準備しています。",
  },
];

const partnerStats = [
  { value: "2026.04", label: "セイヨウミツバチ導入" },
  { value: "40kg", label: "初回採蜜量" },
  { value: "6 weeks", label: "導入から初回採蜜まで" },
];

function SectionIntro({ eyebrow, title, children, inverse }: SectionIntroProps) {
  return (
    <div className="max-w-3xl">
      <p
        className={`mb-4 text-xs font-semibold uppercase tracking-[0.28em] ${
          inverse ? "text-[#d6ad62]" : "text-[#8a6333]"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`text-3xl font-semibold leading-tight md:text-5xl ${
          inverse ? "text-[#f8f3ea]" : "text-[#211a14]"
        }`}
      >
        {title}
      </h2>
      <div
        className={`mt-6 text-base leading-8 md:text-lg ${
          inverse ? "text-[#d7cbbb]" : "text-[#5e5348]"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <section className="relative min-h-[84svh] overflow-hidden bg-[#18120d] text-[#f8f3ea]">
        <Image
          src="/images/hero_main.jpg"
          alt="採蜜に取り組む伝蜂の活動風景"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-55 saturate-[0.85]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(24,18,13,0.92)_0%,rgba(24,18,13,0.7)_42%,rgba(24,18,13,0.18)_100%)]" />
        <div className="relative mx-auto flex min-h-[84svh] max-w-7xl flex-col justify-end px-5 pb-16 pt-28 sm:px-8 lg:px-12">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.34em] text-[#d6ad62]">
            DENPO / Student Beekeeping Collective
          </p>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] md:text-7xl">
            伝蜂
            <span className="mt-4 block text-2xl font-normal leading-relaxed text-[#e7dccb] md:text-3xl">
              ミツバチの営みを、学びと贈りものに変えて届ける。
            </span>
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-8 text-[#d7cbbb] md:text-lg">
            学校に養蜂を届けること。採れた蜂蜜に想いを添えて届けること。
            伝蜂は、自然の循環を手で触れられる体験として社会にひらく学生団体です。
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#vision"
              className="inline-flex items-center justify-center border border-[#d6ad62] bg-[#d6ad62] px-6 py-3 text-sm font-semibold text-[#211a14] transition-colors hover:bg-[#efc879]"
            >
              Visionを見る
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center border border-[#f8f3ea]/55 px-6 py-3 text-sm font-semibold text-[#f8f3ea] transition-colors hover:border-[#f8f3ea] hover:bg-[#f8f3ea]/10"
            >
              学校向け導入案内
            </Link>
          </div>
        </div>
      </section>

      <section id="vision" className="bg-[#f8f3ea] px-5 py-24 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
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

          <div className="border-l border-[#c9b99e] pl-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#8a6333]">
              Philosophy
            </p>
            <dl className="mt-8 space-y-8">
              {[
                ["Observe", "自然を観察し、変化に気づく力を育てる。"],
                ["Harvest", "採蜜を通じて、食が生まれる現場に触れる。"],
                ["Deliver", "蜂蜜と物語を、贈る人の気持ちと一緒に届ける。"],
              ].map(([term, detail]) => (
                <div key={term}>
                  <dt className="text-xl font-semibold text-[#211a14]">{term}</dt>
                  <dd className="mt-2 leading-7 text-[#5e5348]">{detail}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section id="projects" className="bg-[#201913] px-5 py-24 text-[#f8f3ea] sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionIntro eyebrow="Projects" title="巣箱から始まるプロジェクト。" inverse>
            <p>
              導入するだけで終わらせず、学校のカリキュラム、地域の環境、採蜜後の商品化までを一連の学びとして設計します。
            </p>
          </SectionIntro>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.label}
                className="border border-[#4a3b2e] bg-[#281f18] p-7"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d6ad62]">
                  {project.label}
                </p>
                <h3 className="mt-5 text-2xl font-semibold leading-tight text-[#f8f3ea]">
                  {project.title}
                </h3>
                <p className="mt-4 leading-7 text-[#d7cbbb]">{project.body}</p>
                <Link
                  href={project.href}
                  className="mt-8 inline-flex border-b border-[#d6ad62] pb-1 text-sm font-semibold text-[#d6ad62] transition-colors hover:text-[#f3d18b]"
                >
                  {project.cta}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="bg-[#eee3d1] px-5 py-24 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="relative min-h-[440px] overflow-hidden">
            <Image
              src="/images/activity_harvest_01.jpg"
              alt="採蜜した蜂蜜を確認する様子"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>

          <div>
            <SectionIntro eyebrow="Products" title="蜂蜜を、手紙のように届ける。">
              <p>
                国産純粋はちみつとしての品質に加え、手紙風のメッセージカードや蜜蝋のラッピングで、
                贈る体験まで含めた商品づくりを進めています。
              </p>
            </SectionIntro>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {products.map((product) => (
                <article key={product.name} className="border border-[#c9b99e] bg-[#f8f3ea] p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8a6333]">
                    {product.detail}
                  </p>
                  <h3 className="mt-4 text-xl font-semibold text-[#211a14]">
                    {product.name}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#5e5348]">{product.body}</p>
                </article>
              ))}
            </div>

            <Link
              href="/products"
              className="mt-9 inline-flex border border-[#211a14] px-6 py-3 text-sm font-semibold text-[#211a14] transition-colors hover:bg-[#211a14] hover:text-[#f8f3ea]"
            >
              商品紹介を見る
            </Link>
          </div>
        </div>
      </section>

      <section id="partner-schools" className="bg-[#f8f3ea] px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionIntro eyebrow="Partner Schools" title="学校とともに、実践を積み重ねる。">
            <p>
              慶應義塾志木高等学校での導入を起点に、学校の現場で無理なく続く養蜂プログラムを検証しています。
            </p>
          </SectionIntro>

          <div className="mt-14 grid overflow-hidden border border-[#c9b99e] bg-[#fffaf2] lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative min-h-[320px]">
              <Image
                src="/images/case_shiki_harvest_01.jpg"
                alt="慶應義塾志木高等学校での採蜜体験"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="p-8 md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8a6333]">
                Case 001
              </p>
              <h3 className="mt-4 text-3xl font-semibold text-[#211a14]">
                慶應義塾志木高等学校
              </h3>
              <p className="mt-5 leading-8 text-[#5e5348]">
                2026年4月にセイヨウミツバチを導入。約6週間後の初回採蜜では、
                生徒たちが保護具を身につけて採蜜を体験し、40kgの蜂蜜を収穫しました。
              </p>
              <dl className="mt-8 grid gap-4 sm:grid-cols-3">
                {partnerStats.map((stat) => (
                  <div key={stat.label} className="border-t border-[#c9b99e] pt-4">
                    <dt className="text-2xl font-semibold text-[#211a14]">{stat.value}</dt>
                    <dd className="mt-1 text-xs leading-5 text-[#6a5d50]">{stat.label}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#263c32] px-5 py-24 text-[#f8f3ea] sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionIntro eyebrow="Contact" title="学校導入、商品、取材のご相談へ。" inverse>
            <p>
              Bee Project の導入検討、商品に関するお問い合わせ、活動への協力相談など、
              まずは伝蜂の活動アカウントからご連絡ください。
            </p>
          </SectionIntro>

          <div className="border border-[#8ca491] p-7">
            <p className="text-sm leading-7 text-[#dbe5d6]">
              学校の設置環境や授業との接続、採蜜後の扱いまで、初回相談で整理します。
              具体的な導入検討の前段階でも歓迎です。
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center border border-[#f8f3ea] px-6 py-3 text-sm font-semibold text-[#f8f3ea] transition-colors hover:bg-[#f8f3ea] hover:text-[#263c32]"
              >
                導入案内を見る
              </Link>
              <a
                href="https://www.instagram.com/keio_beekeeper"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-[#8ca491] px-6 py-3 text-sm font-semibold text-[#f8f3ea] transition-colors hover:border-[#f8f3ea]"
              >
                Instagramで連絡する
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
