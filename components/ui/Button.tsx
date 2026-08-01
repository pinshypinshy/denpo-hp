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
  "relative inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.24em] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(0,0,0,0.16)] active:translate-y-0 active:bg-[#b97a14] focus:outline-none disabled:cursor-not-allowed disabled:opacity-60";

const variantClassName = {
  primary:
    "border border-black bg-black text-white hover:bg-[#D89B1D] hover:border-[#D89B1D] active:bg-[#b97a14]",
  secondary:
    "border border-black bg-white text-black hover:bg-[#D89B1D] hover:border-[#D89B1D] hover:text-white active:bg-[#b97a14]",
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
