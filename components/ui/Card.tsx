import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-[18px] border border-[#E6DDCF] bg-[linear-gradient(180deg,#FFFDF8_0%,#F5EBDD_100%)] p-7 shadow-[0_12px_30px_rgba(59,53,42,0.08)] ${className}`.trim()}
    >
      {children}
    </div>
  );
}
