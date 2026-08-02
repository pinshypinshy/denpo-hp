import type { ReactNode } from "react";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  children?: ReactNode;
};

/**
 * 下層ページ用の黒背景ヘッダー帯。
 * Header は absolute + 白文字のため、白背景のページでは
 * この帯を最上部に置いて可読性を確保する。
 */
export default function PageHeader({ eyebrow, title, children }: PageHeaderProps) {
  return (
    <section className="bg-[linear-gradient(180deg,#3B352A_0%,#222222_100%)] px-5 pb-20 pt-36 text-white sm:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="anim-fade-up mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#d6ad62]">
          {eyebrow}
        </p>
        <h1 className="anim-fade-up anim-delay-1 max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
          {title}
        </h1>
        {children && (
          <div className="anim-fade-up anim-delay-2 mt-6 max-w-2xl text-base leading-8 text-white/80 md:text-lg">
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
