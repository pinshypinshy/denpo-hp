# 伝蜂（DENPO）ホームページ

学生養蜂団体「伝蜂（DENPO）」の公式ホームページ。

- 公開URL：[https://denpobee.com](https://denpobee.com)
- Instagram：[@denpo_bee](https://www.instagram.com/denpo_bee)

はちみつのEC販売（STORESへ誘導）、学校向け養蜂導入事業（Bee Project）、
企業向け養蜂代行事業（Corporate Bee Project）の3軸で構成している。

## 技術スタック

| 技術                  | 用途                       |
| --------------------- | -------------------------- |
| Next.js 16（App Router） | フレームワーク          |
| React 19              | UI                         |
| TypeScript            | 型安全性                   |
| Tailwind CSS v4       | スタイリング（CSS-first）  |
| Cloudflare Pages      | ホスティング               |

`next.config.ts` で `output: "export"` を指定した静的サイトとしてビルドする
（画像最適化は無効。`next/image` は `unoptimized`）。

## セットアップ

```bash
npm install
```

## 開発

```bash
npm run dev
```

[http://localhost:3000](http://localhost:3000) を開く。

## ビルド

```bash
npm run build
```

静的ファイルが `out/` に出力される。変更後は必ずビルドを通し、
`out/` の生成HTMLでリンク切れがないことを確認する。

## Lint

```bash
npm run lint
```

## 環境変数

`.env.example` をコピーして `.env.local` を作成する。

```bash
cp .env.example .env.local
```

| 変数名                         | 値              | 説明                                                  |
| ------------------------------ | --------------- | ----------------------------------------------------- |
| `NEXT_PUBLIC_MAINTENANCE_MODE` | `true` / `false` | `true` のときだけ「リニューアル中」画面を全ページに表示する |

静的書き出し（`output: "export"`）のため、環境変数を変更した場合は
**再ビルド／再デプロイが必要**。

## ページ構成

| ルート       | ページ       |
| ------------ | ------------ |
| `/`          | トップ       |
| `/products`  | 商品紹介     |
| `/projects`  | 学校養蜂     |
| `/corporate` | 企業養蜂     |
| `/members`   | メンバー     |
| `/contact`   | お問い合わせ |

## ディレクトリ構成

```
app/          各ページ（App Router）とルートレイアウト
components/
  layout/     Header / Footer
  ui/         Button・SectionIntro・PageHeader などの共通パーツ
  sections/   ページを構成するセクション単位のコンポーネント
public/
  logo/       ロゴ各種
  images/     写真素材
```

## ドキュメント

サイトの設計方針・デザイントークン・コーディング規約は [CLAUDE.md](./CLAUDE.md) にまとめている。
コンポーネントを追加・変更する前に必ず参照すること。
