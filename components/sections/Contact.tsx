import Button from "@/components/ui/Button";

export default function Contact() {
  return (
    <section id="contact" className="bg-white px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <p className="mb-4 text-center text-sm font-semibold uppercase tracking-[0.3em] text-[#D89B1D]">
          Contact
        </p>
        <h2 className="mb-4 text-center text-3xl font-semibold text-black sm:text-4xl">
          お問い合わせ
        </h2>
        <p className="mb-10 text-center leading-8 text-black/70">
          学校への養蜂導入・その他のご相談はこちらからどうぞ。
        </p>

        <form className="space-y-5 rounded-[24px] border border-black/10 bg-[linear-gradient(180deg,#222222_0%,#000000_100%)] p-8 text-white shadow-[0_12px_32px_rgba(0,0,0,0.12)]">
          <div>
            <label className="mb-1 block text-sm font-medium text-white/80">団体名・学校名</label>
            <input
              type="text"
              placeholder="例：〇〇高等学校"
              className="w-full rounded-[12px] border border-white/10 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#D89B1D]"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-white/80">担当者名</label>
            <input
              type="text"
              placeholder="例：山田 太郎"
              className="w-full rounded-[12px] border border-white/10 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#D89B1D]"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-white/80">メールアドレス</label>
            <input
              type="email"
              placeholder="例：yamada@school.jp"
              className="w-full rounded-[12px] border border-white/10 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#D89B1D]"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-white/80">お問い合わせ内容</label>
            <textarea
              rows={5}
              placeholder="養蜂導入についてのご質問・ご相談内容をご記入ください"
              className="w-full resize-none rounded-[12px] border border-white/10 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#D89B1D]"
            />
          </div>

          <p className="text-xs text-white/50">
            ※ 送信機能は近日実装予定です（Phase 2: Formspree連携）
          </p>

          <Button type="submit" disabled className="w-full justify-center">
            送信する（近日実装）
          </Button>
        </form>
      </div>
    </section>
  );
}
