const products = [
  {
    name: "伝蜂はちみつ（通常版）",
    price: "¥1,300",
    weight: "65g",
    description:
      "慶應キャンパスで採れた国産純粋はちみつ。保健所許可済みの安心品質。",
    badge: null,
  },
  {
    name: "伝蜂はちみつ（ギフト版）",
    price: "価格未定",
    weight: "65g",
    description:
      "紙袋・蜜蝋シーリングスタンプ・手紙風メッセージカード付き。大切な人への贈り物に。",
    badge: "GIFT",
  },
];

import Button from "@/components/ui/Button";

export default function Shop() {
  return (
    <section id="shop" className="bg-white px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-center text-sm font-semibold uppercase tracking-[0.3em] text-[#D89B1D]">
          Shop
        </p>
        <h2 className="mb-4 text-center text-3xl font-semibold text-black sm:text-4xl">
          はちみつを購入する
        </h2>
        <p className="mb-12 text-center text-black/70">STORESにてお求めいただけます</p>

        <div className="mb-12 grid gap-8 md:grid-cols-2">
          {products.map((product) => (
            <div
              key={product.name}
              className="overflow-hidden rounded-[24px] border border-black/10 bg-[linear-gradient(180deg,#222222_0%,#000000_100%)] text-white shadow-[0_12px_32px_rgba(0,0,0,0.12)]"
            >
              <div className="relative aspect-square bg-white/10">
                {product.badge && (
                  <span className="absolute right-4 top-4 rounded-full bg-[#D89B1D] px-3 py-1 text-xs font-semibold text-white">
                    {product.badge}
                  </span>
                )}
                <span className="absolute inset-0 flex items-center justify-center text-lg text-white/70">
                  [商品画像]
                </span>
              </div>

              <div className="p-6">
                <h3 className="mb-1 text-lg font-semibold">{product.name}</h3>
                <p className="mb-2 text-sm text-white/60">{product.weight}</p>
                <p className="mb-4 text-sm leading-7 text-white/75">{product.description}</p>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xl font-semibold text-[#D89B1D]">{product.price}</span>
                  <Button href="https://stores.jp/" variant="secondary" external>
                    購入する
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-[24px] border border-black/10 bg-white p-8 text-center shadow-[0_10px_24px_rgba(0,0,0,0.05)]">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-[#D89B1D]">
            COMING SOON
          </p>
          <h3 className="mb-2 text-xl font-semibold text-black">定期便サービス</h3>
          <p className="text-sm leading-7 text-black/70">
            毎月届く「伝蜂便」—— 近日公開予定です。
          </p>
        </div>
      </div>
    </section>
  );
}
