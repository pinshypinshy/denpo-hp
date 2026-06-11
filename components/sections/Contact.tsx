export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-amber-50">
      <div className="max-w-2xl mx-auto">
        <p className="text-center text-sm font-semibold text-amber-600 uppercase tracking-widest mb-4">
          Contact
        </p>
        <h2 className="text-3xl font-bold text-center text-amber-900 mb-4">
          お問い合わせ
        </h2>
        <p className="text-center text-gray-600 mb-10">
          学校への養蜂導入・その他のご相談はこちらからどうぞ。
        </p>

        <form className="bg-white rounded-2xl shadow-sm border border-amber-100 p-8 space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              団体名・学校名
            </label>
            <input
              type="text"
              placeholder="例：〇〇高等学校"
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              担当者名
            </label>
            <input
              type="text"
              placeholder="例：山田 太郎"
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              メールアドレス
            </label>
            <input
              type="email"
              placeholder="例：yamada@school.jp"
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              お問い合わせ内容
            </label>
            <textarea
              rows={5}
              placeholder="養蜂導入についてのご質問・ご相談内容をご記入ください"
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 resize-none"
            />
          </div>

          <p className="text-xs text-gray-400">
            ※ 送信機能は近日実装予定です（Phase 2: Formspree連携）
          </p>

          <button
            type="submit"
            disabled
            className="w-full bg-amber-400 text-white font-semibold py-3 rounded-full cursor-not-allowed opacity-60"
          >
            送信する（近日実装）
          </button>
        </form>
      </div>
    </section>
  );
}
