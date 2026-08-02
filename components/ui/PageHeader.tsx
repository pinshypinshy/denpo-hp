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
    <section className="bg-black px-5 pb-20 pt-36 text-white sm:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#d6ad62]">
          {eyebrow}
        </p>
        <h1 className="max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
          {title}
        </h1>
        {children && (
          <div className="mt-6 max-w-2xl text-base leading-8 text-white/80 md:text-lg">
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
