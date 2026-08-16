import Link from "next/link";
import type { ReactNode } from "react";

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
  "relative inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.24em] transition-all duration-300 hover:-translate-y-1 hover:shadow-lift active:translate-y-0 focus:outline-none disabled:cursor-not-allowed disabled:opacity-60";

/**
 * クラス名は必ずリテラルで書く。
 * Tailwind はソースをテキストとして走査するため、`bg-[${color}]` のように
 * テンプレートリテラルで組み立てるとCSSが生成されず、背景が透明になる。
 */
const variantClassName = {
  primary:
    "border border-brown bg-brown text-white hover:bg-honey hover:border-honey hover:text-brown-deep active:bg-honey-deep active:border-honey-deep",
  secondary:
    "border border-brown/35 bg-cream text-brown hover:bg-brown hover:border-brown hover:text-white active:bg-brown-deep",
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
