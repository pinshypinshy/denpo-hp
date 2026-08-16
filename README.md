# 伝蜂（DENPO）ホームページ

学生養蜂団体「伝蜂（DENPO）」の公式ホームページ。

- 公開URL：[https://denpobee.com](https://denpobee.com)
- Instagram：[@denpo_bee](https://www.instagram.com/denpo_bee)

はちみつのEC販売（STORESへ誘導）、学校向け養蜂導入事業（Bee Project）、
企業向け養蜂代行事業（Corporate Bee Project）の3軸で構成している。

## 技術スタック

| 技術                       | 用途                            |
| -------------------------- | ------------------------------- |
| Next.js 16（App Router）   | フレームワーク                  |
| React 19                   | UI                              |
| TypeScript                 | 型安全性                        |
| Tailwind CSS v4            | スタイリング（CSS-first）       |
| Cloudflare Pages           | ホスティング                    |
| Cloudflare Pages Functions | お問い合わせAPI（`functions/`） |
| Resend                     | メール送信                      |
| Cloudflare Turnstile       | フォームのbot対策               |

`next.config.ts` で `output: "export"` を指定した静的サイトとしてビルドする
（画像最適化は無効。`next/image` は `unoptimized`）。
サーバー処理が必要なのはお問い合わせフォームのみで、これは Pages Functions が担う。

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

## お問い合わせフォームのローカル確認

`npm run dev` では `functions/` が動かないため、フォームの送信まで確認するには
ビルド結果を wrangler で配信する。

```bash
cp .dev.vars.example .dev.vars
npm run build
npx wrangler pages dev out/
```

[http://localhost:8788/contact](http://localhost:8788/contact) を開く。

- `.dev.vars` はローカル専用のシークレット置き場で、コミットされない。
- Turnstile は常に成功するテストキー（サイトキー `1x00000000000000000000AA`、
  シークレット `1x0000000000000000000000000000000AA`）を使えば、認証を通過できる。
- メールを実際に送るには本物の `RESEND_API_KEY` が必要。ダミー値のままだと
  API が 502 を返し、フォームにエラーが表示される（そこまでの経路は確認できる）。

## Lint

```bash
npm run lint
```

## 環境変数

用途が2種類あり、置き場所が異なる。

### ビルド時に埋め込まれるもの（`NEXT_PUBLIC_` 系）

ローカルは `.env.example` をコピーして `.env.local` に、本番は Cloudflare Pages の
プロジェクト設定に登録する。

```bash
cp .env.example .env.local
```

| 変数名                           | 説明                                                        |
| -------------------------------- | ----------------------------------------------------------- |
| `NEXT_PUBLIC_MAINTENANCE_MODE`   | `true` のときだけ「リニューアル中」画面を全ページに表示する |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | Turnstile のサイトキー。未設定だとフォームは送信不可になる  |

静的書き出し（`output: "export"`）のため、これらはビルド時点の値がJSに焼き込まれる。
**変更した場合は再ビルド／再デプロイが必要**。

### Functions の実行時に読むもの（シークレット）

ローカルは `.dev.vars`、本番は Cloudflare Pages の Variables and Secrets に登録する。
**クライアントには露出しないため、コードに直接書かないこと。**

| 変数名                 | 説明                                        |
| ---------------------- | ------------------------------------------- |
| `RESEND_API_KEY`       | Resend のAPIキー（送信権限のみで十分）      |
| `TURNSTILE_SECRET_KEY` | Turnstile の検証用キー                      |
| `CONTACT_TO_EMAIL`     | 問い合わせ通知の宛先（`info@denpobee.com`） |

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
functions/
  api/        Cloudflare Pages Functions。contact.ts が問い合わせを受け付ける
public/
  logo/       ロゴ各種
  images/     写真素材
```

`functions/` は `out/` とは別に、リポジトリ直下が Cloudflare Pages に拾われる。
ファイルパスがそのままURLになり、`functions/api/contact.ts` は `/api/contact` として公開される。

## ドキュメント

サイトの設計方針・デザイントークン・コーディング規約は [CLAUDE.md](./CLAUDE.md) にまとめている。
コンポーネントを追加・変更する前に必ず参照すること。
