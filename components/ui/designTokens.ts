/**
 * 複数のセクションで共有するクラス列。
 *
 * 色と影の定義は app/globals.css の `@theme` が唯一の出所。
 * このファイルには 16進カラーを書かないこと（@theme と二重管理になる）。
 * ここに置くのは「同じ組み合わせが複数箇所に現れるまとまり」だけで、
 * 余白やグリッドなど各所で変わる指定は呼び出し側に残す。
 *
 * 使い方:
 *   <article className={`${brandCard} p-7`}>
 */

/** セクションの余白 */
export const brandSection = "px-5 py-24 sm:px-8";

/** セクション内のコンテナ幅 */
export const brandContainer = "mx-auto max-w-7xl";

/** 白背景セクションに置くカード（角丸16px） */
export const brandCard = "rounded-[16px] border border-line bg-white shadow-card-flat";

/** 淡色セクションに置くカード（角丸16px・クリーム地グラデーション） */
export const brandCardWarm =
  "rounded-[16px] border border-line bg-linear-to-b from-cream to-cream-deep shadow-card";

/** 大きなコンテナ（角丸24px・白地） */
export const brandPanel = "rounded-[24px] border border-line bg-white shadow-card";

/** 大きなコンテナ（角丸24px・クリーム地グラデーション） */
export const brandPanelWarm =
  "rounded-[24px] border border-line bg-linear-to-b from-cream to-cream-deep shadow-card";

/** 濃色帯（PageHeader / GiftStory / CorporateCases）の背景 */
export const brandDarkSurface = "bg-linear-to-b from-brown to-ink";
