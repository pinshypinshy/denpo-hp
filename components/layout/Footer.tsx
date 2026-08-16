export default function Footer() {
  return (
    <footer className="border-t border-line bg-shell py-12 text-brown">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-3">
        <div>
          <h3 className="mb-2 text-xl font-semibold text-ink">伝蜂 | DENPO</h3>
          <p className="text-sm leading-7 text-ink-soft">
            慶應生が始めた養蜂団体。 学校養蜂を通じて次世代の環境教育を提供する。
          </p>
        </div>

        <div>
          <h4 className="mb-2 font-semibold text-ink">SNS</h4>
          <a
            href="https://www.instagram.com/denpo_bee"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-bark underline-offset-4 transition-colors hover:text-brown hover:underline"
          >
            Instagram: @denpo_bee
          </a>
        </div>

        <div>
          <h4 className="mb-2 font-semibold text-ink">法的情報</h4>
          <p className="text-sm leading-7 text-ink-soft">
            保健所認可（志木・藤沢）
            <br />
            食品衛生責任者資格取得済み
          </p>
          <p className="mt-2 text-xs text-ink-soft/80">※プライバシーポリシーは近日公開</p>
        </div>
      </div>

      <div className="mt-8 text-center text-xs text-ink-soft/70">
        © 2026 伝蜂 (DENPO). All rights reserved.
      </div>
    </footer>
  );
}
