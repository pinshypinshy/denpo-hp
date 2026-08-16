@AGENTS.md

# 伝蜂（DENPO）ホームページ

## プロジェクト概要

学生養蜂団体「伝蜂（DENPO）」の公式ホームページ。**法人化を予定している。**
はちみつのEC販売（STORESへ誘導）、学校向け養蜂導入事業（Bee Project）、企業向け養蜂代行事業（Corporate Bee Project）の3軸で構成する。

- 公開URL：https://denpobee.com （DNSはCloudflareで管理）
- ターゲット：一般消費者（はちみつ購入）/ 学校教員（導入検討）/ 企業の担当者（CSR・サステナビリティ）
- **トップページはダイジェスト型**。Hero → Vision → Collection（4タイル）の3セクションのみで構成し、
  Collection の写真タイルから各下層ページへ分岐させる。詳細情報は下層ページに置く。

## 技術スタック

| 技術                       | 用途                               |
| -------------------------- | ---------------------------------- |
| Next.js（App Router）      | フレームワーク                     |
| TypeScript                 | 型安全性                           |
| Tailwind CSS               | スタイリング                       |
| Cloudflare Pages           | ホスティング                       |
| Cloudflare Pages Functions | 動的API（Phase 2で追加）           |
| Resend                     | メール送信（Phase 2で追加）        |
| Cloudflare Turnstile       | フォームのbot対策（Phase 2で追加） |
| Notion API                 | ニュース動的化（Phase 3で追加）    |

### 静的出力設定（Phase 1）

```ts
// next.config.ts
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
};
```

`output: "export"` のため、環境変数を変更した場合は再ビルド／再デプロイが必要。

## ディレクトリ構成

```
denpo-hp/
├── app/
│ ├── layout.tsx # ルートレイアウト（Header/Footer、メンテナンス表示の分岐）
│ ├── globals.css
│ ├── page.tsx # /         トップ
│ ├── products/page.tsx # /products 商品紹介
│ ├── projects/page.tsx # /projects 学校養蜂
│ ├── corporate/page.tsx # /corporate 企業養蜂
│ ├── members/page.tsx # /members  メンバー
│ └── contact/page.tsx # /contact  お問い合わせ
├── components/
│ ├── Maintenance.tsx # リニューアル中表示
│ ├── layout/
│ │ ├── Header.tsx # absolute配置・白文字（背面が黒である前提）
│ │ └── Footer.tsx
│ ├── ui/
│ │ ├── Button.tsx # 八角形クリップのボタン
│ │ ├── SectionIntro.tsx # eyebrow + h2 + リード文（左寄せ）
│ │ ├── PageHeader.tsx # 下層ページ冒頭の黒帯（eyebrow + h1 + リード文）
│ │ ├── Reveal.tsx # スクロール連動の表示アニメーション（"use client"）
│ │ └── designTokens.ts # 複数箇所で共有するクラス列（色は globals.css の @theme）
│ └── sections/
│ ├── Hero.tsx
│ ├── Vision.tsx
│ ├── Collection.tsx # トップの4タイル（写真＋オーバーレイ）
│ ├── BeeProject.tsx # 教育効果4項目・導入フロー5ステップ
│ ├── CorporateBee.tsx # 企業メリット4項目・提供内容・導入フロー5ステップ
│ ├── CorporateCases.tsx # 他社の企業養蜂事例（出典リンク付き）
│ ├── PartnerSchools.tsx # 導入実績
│ ├── News.tsx # 活動報告。Phase 3でNotion API動的化
│ ├── Shop.tsx # 商品一覧・STORES誘導
│ ├── GiftStory.tsx # ギフトコンセプト
│ ├── Members.tsx
│ ├── Faq.tsx # アコーディオン（"use client"）
│ └── Contact.tsx
├── public/
│ ├── logo/ # ロゴ各種（favicon, OGP等）
│ └── images/ # 写真素材
├── functions/ # Cloudflare Pages Functions。out/ とは別に、リポジトリ直下がPagesに拾われる
│ └── api/
│ └── contact.ts # 問い合わせ受付API（Phase 2で追加）
├── AGENTS.md
├── CLAUDE.md
├── next.config.ts
└── tsconfig.json
```

## ページ構成

ヘッダーナビは **商品 / 学校養蜂 / 企業養蜂 / メンバー / お問い合わせ** の5項目。

| ルート       | ページ       | セクション構成                                                    |
| ------------ | ------------ | ----------------------------------------------------------------- |
| `/`          | トップ       | Hero → Vision → Collection                                        |
| `/products`  | 商品紹介     | PageHeader → Shop → GiftStory → Faq（消費者向け）                 |
| `/projects`  | 学校養蜂     | PageHeader → BeeProject → PartnerSchools → News → Faq（学校向け） |
| `/corporate` | 企業養蜂     | PageHeader → CorporateBee → CorporateCases → Faq（企業向け）      |
| `/members`   | メンバー     | PageHeader → Members                                              |
| `/contact`   | お問い合わせ | PageHeader → Contact                                              |

- **Contact セクションは `/contact` にのみ置く。**各ページ末尾には配置しない。
- **実績（PartnerSchools）と活動報告（News）は `/projects` に統合する。**単独ページは作らない。
- FAQ は消費者向けを `/products`、学校向けを `/projects`、企業向けを `/corporate` に分けて配置する。
  設問データは `Faq.tsx` から `consumerFaqs` / `schoolFaqs` / `corporateFaqs` として名前付きエクスポートする。
- **`CorporateCases.tsx` は他社の取り組みであり、伝蜂の実績ではない。**
  自社実績との誤認を避けるため、リード文・各カードの出典リンク・末尾の注記を必ず維持する。
  事例を追加・変更する際は、必ず公開情報で事実（開始年・場所・規模）を確認してから記載する。

## 開発フェーズ

- **Phase 1**：Next.js + 静的HTML/CSS で全セクション実装（完了）
- **Phase 2**：Cloudflare Pages Functions + Resend でお問い合わせフォームを実装
  （`Contact.tsx` を `fetch` 送信に変更、`functions/api/contact.ts` を追加、Turnstile で bot 対策）
- **Phase 3**：Cloudflare Functions + Notion API でニュースセクション動的化（`News.tsx` の `newsItems` を差し替え）

## 設計上の重要事項

1. **動的化予定のセクションにはidを振る**
   `News.tsx` は `id="news"`、`Contact.tsx` は `id="contact"` を持つ。後からJSで書き換えられる構造を保つ。

2. **孤児コンポーネントを作らない**
   `components/sections/` に置いたファイルは、必ずいずれかのページから import する。
   ページ構成を変更してどこからも参照されなくなったコンポーネントは、その場で削除する。

3. **下層ページの冒頭には必ず `PageHeader` を置く**
   `Header.tsx` は `absolute` 配置かつ白文字で、背面に黒い領域があることを前提にしている。
   白背景のセクションが最上部に来ると、ロゴとナビが見えなくなる。

4. **ECは外部リンク誘導**
   現時点はSTORESへのリンクのみ。自前のカートは不要。URLは `Shop.tsx` の `STORES_URL` に集約する。

5. **ブランド統一**
   「伝蜂（DENPO）」＝「電報」との語呂合わせ。シーリングスタンプ・手紙風メッセージカードのギフトコンセプトをデザインに反映させる。

6. **Instagramアカウント**
   `@denpo_bee`（https://www.instagram.com/denpo_bee）

7. **フォーム送信は Cloudflare Pages Functions を経由する**
   外部フォームSaaS（Formspree）とVPSでの自前実装を比較のうえ、いずれも不採用とした。
   - Formspree：無料枠が月50件で引き合いを取りこぼす、自動返信が有料、履歴30日、個人情報が第三者に保管される
   - VPS：メール送信は結局外部APIに依存するため自前化の利得が小さく、常駐サーバーの運用・引き継ぎコストだけが残る

   シークレット（`RESEND_API_KEY`、`TURNSTILE_SECRET_KEY`、`CONTACT_TO_EMAIL`）は Cloudflare Pages 側に置き、
   クライアントに露出させない。`NEXT_PUBLIC_` 系（Turnstile のサイトキー等）は静的出力に焼き込まれるため、
   変更時は再ビルドが必要。

## デザイントークン

**コンポーネントに16進カラーを直接書かない。**色と影は `app/globals.css` の `@theme` が唯一の定義場所で、
そこから Tailwind ユーティリティ（`bg-shell` / `text-ink/70` / `border-line` / `shadow-card`）が生成される。

Tailwind はソースを**テキストとして走査**するため、`bg-[${color}]` のようにテンプレートリテラルで
クラス名を組み立てるとCSSが生成されず、その指定は無言で消える。必ずトークン名をリテラルで書く。

### 色（`app/globals.css` の `@theme`）

| トークン           | 値        | 用途                                     |
| ------------------ | --------- | ---------------------------------------- |
| `honey`            | `#D89B1D` | ブランドアクセント（連番・価格・リンク） |
| `honey-deep`       | `#C1870F` | ボタン押下時                             |
| `honey-soft`       | `#D6AD62` | 濃色面の eyebrow                         |
| `bark`             | `#8A6333` | 淡色面の eyebrow                         |
| `ink`              | `#222222` | 見出し・本文（濃）                       |
| `ink-soft`         | `#5F584F` | 本文（淡）                               |
| `brown`            | `#3B352A` | 濃色面・primaryボタン地                  |
| `brown-deep`       | `#2B2416` | 濃色面の最暗部                           |
| `cream`            | `#FFFDF8` | カードのグラデーション上端               |
| `cream-deep`       | `#F5EBDD` | カードのグラデーション下端               |
| `shell`            | `#FAF8F3` | セクション背景・ページ地色・フッター     |
| `shell-alt`        | `#F3EBDD` | 一段濃いセクション背景                   |
| `line`             | `#E6DDCF` | カード枠・区切り線                       |
| `line-strong`      | `#C9B99E` | 見出し脇のアクセント罫線                 |

影も同様に `shadow-card`（カード）／`shadow-card-flat`（白カード）／`shadow-bar`（ヘッダー）／
`shadow-lift`（ボタンhover）を使う。

純白 `bg-white` と白文字 `text-white` はそのまま使ってよい（面として意図的に使っている）。

### 複合クラス（`components/ui/designTokens.ts`）

複数箇所で同じ組み合わせを使うまとまりは、このファイルから import する。
色を文字列としてここに書き足さないこと（`@theme` と二重管理になる）。

| エクスポート       | 内容                                     |
| ------------------ | ---------------------------------------- |
| `brandSection`     | セクション余白 `px-5 py-24 sm:px-8`      |
| `brandContainer`   | コンテナ幅 `mx-auto max-w-7xl`           |
| `brandCard`        | 白カード（角丸16px）                     |
| `brandCardWarm`    | クリームカード（角丸16px）               |
| `brandPanel`       | 白の大コンテナ（角丸24px）               |
| `brandPanelWarm`   | クリームの大コンテナ（角丸24px）         |
| `brandDarkSurface` | 濃色帯の背景グラデーション               |

```tsx
<section className={`${brandSection} bg-shell`}>
  <div className={brandContainer}>
    <article className={`${brandCard} p-7`}>…</article>
  </div>
</section>
```

- 見出しは `SectionIntro`（左寄せ）を使う。中央寄せの見出しは使わない。
- **絵文字は使わない。**アイコンが必要な場合は連番（`01`〜）やテキストラベルで代替する。
- 白背景と黒背景のセクションを交互に置いてリズムをつける。
- 整形は Prettier に従う（`.prettierrc` で `printWidth: 100`）。

## コーディング規約

- TypeScriptを必ず使用する（`any`型は使わない）
- コンポーネントは `components/sections/` 以下にセクション単位で分割し、ページはそれを並べるだけにする
- 複数ページで使う値は、セクションコンポーネントから名前付きエクスポートして共有する
- 画像はすべて `public/` に配置し、`next/image` で読み込む
- 変更後は `npm run build` を通し、`out/` の生成HTMLでリンク切れがないことを確認する

## 未確定・要対応

- **STORES の実URL**：`Shop.tsx` の `STORES_URL` は `https://stores.jp/` の仮リンク
- **ギフト版の価格**：「価格未定」表示のまま
- **商品画像**：`product_regular_jar.jpg` はモックアップからの切り出しで、ラベルが「GAKKO」表記。確定版ができ次第差し替える。ギフト版の写真は未用意（プレースホルダ表示）
- **`hero_main.jpg`**：養蜂ではなく山と湖の風景写真。alt属性の記述と内容が一致していない
- **プライバシーポリシー**：フッターに「近日公開」と記載したまま未作成。法人化に伴い、法人名義で作成する
- **問い合わせの受信先アドレス**：(例) `info@denpobee.com` を Cloudflare Email Routing で転送するか、団体の共有Gmailに受けるか未確定
- **Resend のドメイン検証**：`denpobee.com` の DKIM／SPF レコードが未設定。Phase 2 の実装前に必要
