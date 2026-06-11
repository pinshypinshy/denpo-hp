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

export default function Shop() {
  return (
    <section id="shop" className="py-20 px-4 bg-amber-50">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-sm font-semibold text-amber-600 uppercase tracking-widest mb-4">
          Shop
        </p>
        <h2 className="text-3xl font-bold text-center text-amber-900 mb-4">
          はちみつを購入する
        </h2>
        <p className="text-center text-gray-600 mb-12">
          STORESにてお求めいただけます
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {products.map((product) => (
            <div
              key={product.name}
              className="bg-white rounded-2xl shadow-sm border border-amber-100 overflow-hidden"
            >
              {/* Product image placeholder */}
              <div className="bg-amber-100 aspect-square flex items-center justify-center relative">
                {product.badge && (
                  <span className="absolute top-4 right-4 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {product.badge}
                  </span>
                )}
                <span className="text-amber-400 text-lg">[商品画像]</span>
              </div>

              <div className="p-6">
                <h3 className="font-bold text-lg text-amber-900 mb-1">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500 mb-2">{product.weight}</p>
                <p className="text-gray-600 text-sm mb-4">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-amber-700">
                    {product.price}
                  </span>
                  <a
                    href="https://stores.jp/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors"
                  >
                    購入する
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Subscription placeholder */}
        <div className="bg-white border-2 border-dashed border-amber-300 rounded-2xl p-8 text-center">
          <p className="text-sm font-semibold text-amber-600 mb-2">
            COMING SOON
          </p>
          <h3 className="text-xl font-bold text-amber-900 mb-2">
            定期便サービス
          </h3>
          <p className="text-gray-500 text-sm">
            毎月届く「伝蜂便」—— 近日公開予定です。
          </p>
        </div>
      </div>
    </section>
  );
}
