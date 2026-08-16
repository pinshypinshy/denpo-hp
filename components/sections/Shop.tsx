import Image from "next/image";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import SectionIntro from "@/components/ui/SectionIntro";
import {
  brandCard,
  brandCardWarm,
  brandContainer,
  brandSection,
} from "@/components/ui/designTokens";

/** TODO: STORES の実URLが決まり次第差し替える（現在は仮リンク）。 */
const STORES_URL = "https://stores.jp/";

const products = [
  {
    name: "伝蜂はちみつ（通常版）",
    price: "¥1,300",
    weight: "65g",
    description: "慶應キャンパスで採れた国産純粋はちみつ。保健所許可済みの安心品質。",
    badge: null,
    image: "/images/product_regular_jar.jpg",
  },
  {
    name: "伝蜂はちみつ（ギフト版）",
    price: "価格未定",
    weight: "65g",
    description: "紙袋・蜜蝋シーリングスタンプ・手紙風メッセージカード付き。大切な人への贈り物に。",
    badge: "GIFT",
    image: null,
  },
];

export default function Shop() {
  return (
    <section id="shop" className={`${brandSection} bg-white`}>
      <div className={brandContainer}>
        <Reveal>
          <SectionIntro eyebrow="Shop" title="はちみつを購入する。">
            <p>
              販売はSTORESにて承ります。数量に限りがあるため、在庫状況はSTORESのページをご確認ください。
            </p>
          </SectionIntro>
        </Reveal>

        <Reveal stagger className="mt-14 grid gap-6 md:grid-cols-2">
          {products.map((product) => (
            <article key={product.name} className={`${brandCardWarm} overflow-hidden text-ink`}>
              <div className="relative aspect-[3/2] bg-white/10">
                {product.image ? (
                  <Image
                    src={product.image}
                    alt={`${product.name}の商品写真`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                ) : (
                  <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold uppercase tracking-[0.24em] text-bark/70">
                    Photo coming soon
                  </span>
                )}
                {product.badge && (
                  <span className="absolute right-4 top-4 rounded-full bg-honey px-3 py-1 text-xs font-semibold text-white">
                    {product.badge}
                  </span>
                )}
              </div>

              <div className="p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-bark">
                  {product.weight}
                </p>
                <h3 className="mt-4 text-xl font-semibold text-ink">{product.name}</h3>
                <p className="mt-3 text-sm leading-7 text-ink-soft">{product.description}</p>
                <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
                  <span className="text-xl font-semibold text-honey">{product.price}</span>
                  <Button href={STORES_URL} external>
                    購入する
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </Reveal>

        <Reveal className={`${brandCard} mt-6 p-7`}>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-honey">
            Coming Soon
          </p>
          <h3 className="mt-4 text-xl font-semibold text-ink">定期便サービス</h3>
          <p className="mt-3 text-sm leading-7 text-ink/70">
            毎月届く「伝蜂便」を準備中です。採蜜の時期に合わせて、その季節の蜂蜜をお届けします。
          </p>
        </Reveal>
      </div>
    </section>
  );
}
