import Image from "next/image";
import Link from "next/link";
import { brandContainer, brandSection } from "@/components/ui/designTokens";

const entries = [
  {
    eyebrow: "Crowdfunding",
    title: "支援してはちみつを受け取る",
    body: "キャンパスで採れた国産純粋はちみつを、クラウドファンディングのリターンとしてお届けします。",
    href: "/products",
    image: "/images/denpo-honey.jpg",
    alt: "瓶詰めされた伝蜂のはちみつ",
  },
  {
    eyebrow: "School Bee Project",
    title: "学校養蜂について知る",
    body: "巣箱の設置から採蜜体験まで。学校向け導入プログラムのご案内。",
    href: "/projects",
    image: "/images/activity_honeycomb_frame_01.jpg",
    alt: "蜜の詰まった巣枠を手にする養蜂作業の様子",
  },
  {
    eyebrow: "Corporate Bee Project",
    title: "企業養蜂について知る",
    body: "屋上の遊休スペースに巣箱を。養蜂はすべて伝蜂が代行します。",
    href: "/corporate",
    image: "/images/activity_frame_portrait_01.jpg",
    alt: "ミツバチが付いた巣枠を手にする様子",
  },
  {
    eyebrow: "Contact",
    title: "お問い合わせ",
    body: "導入のご相談、商品や取材のお問い合わせはこちらから。",
    href: "/contact",
    image: "/images/activity_hive_inspection_01.jpg",
    alt: "巣箱から巣枠を取り出して確認する様子",
  },
];

export default function Collection() {
  return (
    <section id="collection" aria-label="伝蜂の取り組み" className={`${brandSection} bg-shell`}>
      <div className={`${brandContainer} grid gap-x-12 gap-y-16 md:grid-cols-2`}>
        {entries.map((entry) => (
          <Link key={entry.href} href={entry.href} className="group block">
            <div className="relative aspect-[3/2] overflow-hidden bg-cream-deep">
              <Image src={entry.image} alt={entry.alt} fill
                sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
            </div>
            <p className="mt-6 text-sm font-medium text-bark">{entry.eyebrow}</p>
            <h2 className="mt-2 flex items-baseline justify-between gap-4 text-2xl font-semibold text-brown group-hover:underline sm:text-3xl">
              {entry.title}<span aria-hidden="true" className="shrink-0 text-lg text-bark">→</span>
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-7 text-ink-soft">{entry.body}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
