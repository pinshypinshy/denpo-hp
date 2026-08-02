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
        className={`text-3xl font-semibold leading-tight md:text-5xl ${
          inverse ? "text-white" : "text-black"
        }`}
      >
        {title}
      </h2>
      {children && (
        <div
          className={`mt-6 text-base leading-8 md:text-lg ${
            inverse ? "text-white/80" : "text-black/70"
          }`}
        >
          {children}
        </div>
      )}
    </div>
  );
}
