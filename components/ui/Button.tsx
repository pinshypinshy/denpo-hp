import Link from "next/link";
import type { ReactNode } from "react";
import { brandColors } from "@/components/ui/designTokens";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  className?: string;
  variant?: "primary" | "secondary";
  external?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

const octagonStyle = {
  clipPath:
    "polygon(12px 0, calc(100% - 12px) 0, 100% 12px, 100% calc(100% - 12px), calc(100% - 12px) 100%, 12px 100%, 0 calc(100% - 12px), 0 12px)",
};

const baseClassName =
  "relative inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.24em] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_24px_rgba(59,53,42,0.12)] active:translate-y-0 focus:outline-none disabled:cursor-not-allowed disabled:opacity-60";

const variantClassName = {
  primary: `border border-[${brandColors.accentBeige}] bg-[${brandColors.accentBeige}] text-white hover:bg-[${brandColors.accentHoney}] hover:border-[${brandColors.accentHoney}] active:bg-[#b97a14]`,
  secondary: `border border-[${brandColors.border}] bg-[${brandColors.cream}] text-[${brandColors.text}] hover:bg-[${brandColors.accentHoney}] hover:border-[${brandColors.accentHoney}] hover:text-white active:bg-[#b97a14]`,
};

export default function Button({
  children,
  href,
  className = "",
  variant = "primary",
  external = false,
  onClick,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const sharedClassName = `${baseClassName} ${variantClassName[variant]} ${className}`.trim();

  if (href) {
    return (
      <Link
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        onClick={onClick}
        className={sharedClassName}
        style={octagonStyle}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={sharedClassName}
      style={octagonStyle}
    >
      {children}
    </button>
  );
}
