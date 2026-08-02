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
          inverse ? "text-[#d6ad62]" : "text-[#8a6333]"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`text-4xl font-semibold leading-tight sm:text-5xl ${
          inverse ? "text-white" : "text-[#222222]"
        }`}
      >
        {title}
      </h2>
      {children && (
        <div
          className={`mt-6 text-base leading-8 ${
            inverse ? "text-white/80" : "text-[#5F584F]"
          }`}
        >
          {children}
        </div>
      )}
    </div>
  );
}
