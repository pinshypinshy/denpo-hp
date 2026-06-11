@AGENTS.md

# 伝蜂（DENPO）ホームページ

## プロジェクト概要

学生養蜂団体「伝蜂（DENPO）」の公式ホームページ。
はちみつのEC販売（STORESへ誘導）と学校向け養蜂導入事業（Bee Project）の2軸で構成する。

- ターゲット：一般消費者（はちみつ購入）/ 学校教員（導入検討）
- ヒーローセクションにCTA2ボタンを並列配置し、最初にユーザーを分岐させる設計が基本

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
};
```

## ディレクトリ構成

```
DENPO-HP/
├── app/
│ ├── layout.tsx # ルートレイアウト（Header/Footer含む）
│ ├── page.tsx # トップページ（全セクション）
│ ├── contact/
│ │ └── page.tsx # お問い合わせ（Phase 2でFormspree追加）
│ └── not-found.tsx # 404ページ
├── components/
│ ├── layout/
│ │ ├── Header.tsx
│ │ ├── Footer.tsx
│ │ └── Navigation.tsx
│ └── sections/
│ ├── Hero.tsx
│ ├── About.tsx
│ ├── Shop.tsx
│ ├── Project.tsx
│ ├── CaseStudies.tsx
│ ├── Members.tsx
│ ├── News.tsx # Phase 3でNotion API動的化
│ ├── Instagram.tsx
│ ├── Faq.tsx
│ └── Contact.tsx
├── public/
│ ├── logo/ # ロゴ各種（favicon, OGP等）
│ └── images/ # 写真素材
├── AGENTS.md
├── CLAUDE.md
├── next.config.ts
└── tsconfig.json
```

## サイトセクション構成

| #   | セクション                 | 種別                | 備考                         |
| --- | -------------------------- | ------------------- | ---------------------------- |
| 1   | ヘッダー / ナビ            | 静的                |                              |
| 2   | ヒーロー                   | 静的                | CTA2ボタン並列               |
| 3   | About（伝蜂とは）          | 静的                | ブランドストーリー・信頼情報 |
| 4   | Shop（はちみつ）           | 静的                | STORESへ外部リンク           |
| 5   | Project（学校Bee Project） | 静的                | 導入フロー・料金等           |
| 6   | Case Studies（実績）       | 静的                | 慶應義塾志木高校             |
| 7   | Members                    | 静的                | 飯塚・松丸                   |
| 8   | News                       | **動的**（Phase 3） | id="news" を振っておく       |
| 9   | SNS（Instagram）           | 静的                | 埋め込みウィジェット         |
| 10  | FAQ                        | 静的                | 消費者向け・学校向け         |
| 11  | Contact                    | **動的**（Phase 2） | id="contact" を振っておく    |
| 12  | フッター                   | 静的                |                              |

## 開発フェーズ

- **Phase 1**：Next.js + 静的HTML/CSS で全セクション実装
- **Phase 2**：Formspree でお問い合わせフォーム追加
- **Phase 3**：Cloudflare Functions + Notion API でニュースセクション動的化

## 設計上の重要事項

1. **動的化予定のセクションにはidを振る**  
   `<section id="news">` / `<section id="contact">` のように、後からJSで書き換えられる構造にしておく。

2. **ECは外部リンク誘導**  
   現時点はSTORES（`https://stores.jp/...`）へのリンクのみ。自前のカートは不要。

3. **ブランド統一**  
   「伝蜂（DENPO）」＝「電報」との語呂合わせ。シーリングスタンプ・手紙風メッセージカードのギフトコンセプトをデザインに反映させる。

4. **Instagramアカウント**  
   `@keio_beekeeper`（https://www.instagram.com/keio_beekeeper）

## コーディング規約

- TypeScriptを必ず使用する（`any`型は使わない）
- コンポーネントは `components/sections/` 以下にセクション単位で分割する
- 画像はすべて `public/` に配置し、`next/image` で読み込む
- カラーパレット・フォントはロゴ素材に合わせて後から確定予定
