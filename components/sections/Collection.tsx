import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

const entries = [
  {
    eyebrow: "Shop",
    title: "はちみつを購入する",
    body: "キャンパスで採れた国産純粋はちみつ。贈りものとしての体験まで。",
    href: "/products",
    image: "/images/product_regular_jar.jpg",
    alt: "瓶詰めされた伝蜂のはちみつ",
  },
  {
    eyebrow: "School Bee Project",
    title: "学校養蜂について知る",
    body: "巣箱の設置から採蜜体験まで。学校向け導入プログラムのご案内。",
    href: "/projects",
    image: "/images/case_shiki_harvest_01.jpg",
    alt: "慶應義塾志木高等学校での採蜜体験",
  },
  {
    eyebrow: "Corporate Bee Project",
    title: "企業養蜂について知る",
    body: "屋上の遊休スペースに巣箱を。養蜂はすべて伝蜂が代行します。",
    href: "/corporate",
    image: "/images/activity_beehive_01.jpg",
    alt: "ミツバチと巣板で満たされた巣箱の巣枠",
  },
  {
    eyebrow: "Contact",
    title: "お問い合わせ",
    body: "導入のご相談、商品や取材のお問い合わせはこちらから。",
    href: "/contact",
    image: "/images/activity_harvest_01.jpg",
    alt: "採蜜した蜂蜜を瓶に詰める伝蜂のメンバー",
  },
];

export default function Collection() {
  return (
    <section id="collection" className="bg-white px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {entries.map((entry) => (
            <Link
              key={entry.href}
              href={entry.href}
              className="group relative block aspect-[3/4] overflow-hidden rounded-[16px] border border-black/10 shadow-[0_10px_24px_rgba(0,0,0,0.06)]"
            >
              <Image
                src={entry.image}
                alt={entry.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.10)_0%,rgba(0,0,0,0.34)_34%,rgba(0,0,0,0.78)_62%,rgba(0,0,0,0.95)_100%)]" />

              <div className="absolute inset-x-0 bottom-0 p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#D89B1D]">
                  {entry.eyebrow}
                </p>
                <h3 className="mt-4 text-2xl font-semibold leading-tight text-white">
                  {entry.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/75">{entry.body}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-white transition-colors group-hover:text-[#D89B1D]">
                  View
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
