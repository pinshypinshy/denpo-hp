@AGENTS.md

# 伝蜂（DENPO）ホームページ

## プロジェクト概要

学生養蜂団体「伝蜂（DENPO）」の公式ホームページ。
はちみつのEC販売（STORESへ誘導）、学校向け養蜂導入事業（Bee Project）、企業向け養蜂代行事業（Corporate Bee Project）の3軸で構成する。

- ターゲット：一般消費者（はちみつ購入）/ 学校教員（導入検討）/ 企業の担当者（CSR・サステナビリティ）
- **トップページはダイジェスト型**。Hero → Vision → Collection（4タイル）の3セクションのみで構成し、
  Collection の写真タイルから各下層ページへ分岐させる。詳細情報は下層ページに置く。

## 技術スタック

| 技術                  | 用途                                |
| --------------------- | ----------------------------------- |
| Next.js（App Router） | フレームワーク                      |
| TypeScript            | 型安全性                            |
| Tailwind CSS          | スタイリング                        |
| Cloudflare Pages      | ホスティング                        |
| Cloudflare Functions  | 動的API（Phase 3で追加）            |
| Formspree             | 問い合わせフォーム（Phase 2で追加） |
| Notion API            | ニュース動的化（Phase 3で追加）     |

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
│ │ └── PageHeader.tsx # 下層ページ冒頭の黒帯（eyebrow + h1 + リード文）
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
- **Phase 2**：Formspree でお問い合わせフォーム追加（`/contact` の Contact.tsx を差し替え）
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

## デザイントークン

新しいセクションを追加する際は、既存セクションと以下を揃える。

| 用途                     | 値                                                            |
| ------------------------ | ------------------------------------------------------------- |
| アクセント色             | `#D89B1D`                                                     |
| eyebrow（白背景）        | `text-[#8a6333]`                                              |
| eyebrow（黒背景）        | `text-[#d6ad62]`                                              |
| セクション余白           | `px-5 py-24 sm:px-8`                                          |
| コンテナ幅               | `mx-auto max-w-7xl`                                           |
| カード角丸               | `rounded-[16px]`（大きなコンテナのみ `rounded-[24px]`）       |
| 黒カード背景             | `bg-[linear-gradient(180deg,#222222_0%,#000000_100%)]`        |
| 白カード                 | `border border-black/10 bg-white shadow-[0_10px_24px_rgba(0,0,0,0.06)]` |

- 見出しは `SectionIntro`（左寄せ）を使う。中央寄せの見出しは使わない。
- **絵文字は使わない。**アイコンが必要な場合は連番（`01`〜）やテキストラベルで代替する。
- 白背景と黒背景のセクションを交互に置いてリズムをつける。

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
- **プライバシーポリシー**：フッターに「近日公開」と記載したまま未作成
