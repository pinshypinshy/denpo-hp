"use client";

import { useEffect, useRef, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /**
   * ラップする div に付与する追加クラス。
   * 既存の grid / mt-* などのレイアウト指定をそのまま渡し、
   * DOM構造を増やさずに置き換えられるようにしている。
   */
  className?: string;
  /** true にすると直下の子要素を順番にずらして表示する（カード一覧向け）。 */
  stagger?: boolean;
};

/**
 * スクロールで画面内に入ったときに一度だけフェードアップさせるラッパー。
 * 実際の見た目は globals.css の .reveal / .reveal-stagger 側で定義する。
 *
 * 表示状態は state ではなく classList で直接切り替える。
 * 再レンダリングが不要なうえ、サーバーとクライアントで同じマークアップになる。
 */
export default function Reveal({ children, className = "", stagger = false }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const reveal = () => element.classList.add("is-visible");

    // 非対応環境で隠したままにしない。
    if (typeof IntersectionObserver === "undefined") {
      reveal();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          reveal();
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const base = stagger ? "reveal-stagger" : "reveal";

  return (
    <div ref={ref} className={className ? `${base} ${className}` : base}>
      {children}
    </div>
  );
}
