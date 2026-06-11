export default function Footer() {
  return (
    <footer className="bg-amber-900 text-amber-100 py-10 mt-16">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-2">伝蜂 | DENPO</h3>
          <p className="text-sm text-amber-300">
            学校養蜂を通じて未来の学びを届ける学生団体。
            慶應義塾大学を拠点に活動中。
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">SNS</h4>
          <a
            href="https://www.instagram.com/keio_beekeeper"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-amber-300 hover:text-white transition-colors"
          >
            Instagram: @keio_beekeeper
          </a>
        </div>

        <div>
          <h4 className="font-semibold mb-2">法的情報</h4>
          <p className="text-sm text-amber-300">
            保健所確認済み（志木・藤沢）
            <br />
            食品衛生責任者資格取得済み
          </p>
          <p className="text-xs text-amber-400 mt-2">
            ※プライバシーポリシーは近日公開
          </p>
        </div>
      </div>

      <div className="text-center text-xs text-amber-500 mt-8">
        © 2026 伝蜂 (DENPO). All rights reserved.
      </div>
    </footer>
  );
}
