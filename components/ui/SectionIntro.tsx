import type { ReactNode } from "react";

type SectionIntroProps = {
  eyebrow: string;
  title: string;
  children?: ReactNode;
  inverse?: boolean;
  className?: string;
};

export default function SectionIntro({
  eyebrow,
  title,
  children,
  inverse,
  className = "",
}: SectionIntroProps) {
  return (
    <div className={`max-w-3xl ${className}`.trim()}>
      <p
        className={`mb-4 text-xs font-semibold uppercase tracking-[0.28em] ${
          inverse ? "text-honey-soft" : "text-bark"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`text-4xl font-semibold leading-tight sm:text-5xl ${
          inverse ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {children && (
        <div className={`mt-6 text-base leading-8 ${inverse ? "text-white/80" : "text-ink-soft"}`}>
          {children}
        </div>
      )}
    </div>
  );
}
