import Image from "next/image";
import Button from "@/components/ui/Button";
import SectionIntro from "@/components/ui/SectionIntro";

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
    description:
      "紙袋・蜜蝋シーリングスタンプ・手紙風メッセージカード付き。大切な人への贈り物に。",
    badge: "GIFT",
    image: null,
  },
];

export default function Shop() {
  return (
    <section id="shop" className="bg-white px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionIntro eyebrow="Shop" title="はちみつを購入する。">
          <p>
            販売はSTORESにて承ります。数量に限りがあるため、在庫状況はSTORESのページをご確認ください。
          </p>
        </SectionIntro>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {products.map((product) => (
            <article
              key={product.name}
              className="overflow-hidden rounded-[16px] border border-white/10 bg-[linear-gradient(180deg,#222222_0%,#000000_100%)] text-white shadow-[0_12px_32px_rgba(0,0,0,0.16)]"
            >
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
                  <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold uppercase tracking-[0.24em] text-white/50">
                    Photo coming soon
                  </span>
                )}
                {product.badge && (
                  <span className="absolute right-4 top-4 rounded-full bg-[#D89B1D] px-3 py-1 text-xs font-semibold text-white">
                    {product.badge}
                  </span>
                )}
              </div>

              <div className="p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D89B1D]">
                  {product.weight}
                </p>
                <h3 className="mt-4 text-xl font-semibold text-white">{product.name}</h3>
                <p className="mt-3 text-sm leading-7 text-white/75">{product.description}</p>
                <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
                  <span className="text-xl font-semibold text-[#D89B1D]">{product.price}</span>
                  <Button href={STORES_URL} variant="secondary" external>
                    購入する
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 rounded-[16px] border border-black/10 bg-white p-7 shadow-[0_10px_24px_rgba(0,0,0,0.06)]">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#D89B1D]">
            Coming Soon
          </p>
          <h3 className="mt-4 text-xl font-semibold text-black">定期便サービス</h3>
          <p className="mt-3 text-sm leading-7 text-black/70">
            毎月届く「伝蜂便」を準備中です。採蜜の時期に合わせて、その季節の蜂蜜をお届けします。
          </p>
        </div>
      </div>
    </section>
  );
}
