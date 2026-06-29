import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant?:
    | "hijau"
    | "brick"
    | "mustard"
    | "hitam"
    | "outline"
    | "outline-hijau"
    | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  className?: string;
  target?: string;
}

export const Button = ({
  children,
  variant = "hijau",
  size = "md",
  href,
  target,
  className = "",
  ...props
}: ButtonProps) => {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-heading font-bold border-[var(--bw)] border-[var(--color-neo-black)] transition-all duration-100 text-center uppercase tracking-wide active:scale-[0.98] cursor-none";

  const sizes = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-8 py-4 text-base md:text-lg",
    lg: "px-10 py-5 text-lg md:text-xl",
  };

  const variants: Record<string, string> = {
    hijau:
      "bg-[var(--color-neo-green)] text-[var(--color-neo-cream)] shadow-[var(--shadow)] hover:shadow-none hover:translate-x-[5px] hover:translate-y-[5px] hover:bg-[var(--color-neo-green-dark)]",
    brick:
      "bg-[var(--color-neo-brick)] text-white shadow-[var(--shadow)] hover:shadow-none hover:translate-x-[5px] hover:translate-y-[5px] hover:bg-[#a3543b]",
    mustard:
      "bg-[var(--color-neo-mustard)] text-[var(--color-neo-black)] shadow-[var(--shadow)] hover:shadow-none hover:translate-x-[5px] hover:translate-y-[5px] hover:bg-[#b8902f]",
    hitam:
      "bg-[var(--color-neo-black)] text-[var(--color-neo-cream)] shadow-[var(--shadow)] hover:shadow-none hover:translate-x-[5px] hover:translate-y-[5px] hover:bg-[#222222]",
    outline:
      "bg-[var(--color-neo-cream)] text-[var(--color-neo-black)] shadow-[var(--shadow)] hover:shadow-none hover:translate-x-[5px] hover:translate-y-[5px]",
    "outline-hijau":
      "bg-[var(--color-neo-cream)] text-[var(--color-neo-black)] border-[var(--color-neo-green)] shadow-[var(--shadow-green)] hover:shadow-none hover:translate-x-[5px] hover:translate-y-[5px] hover:bg-[var(--color-neo-green)] hover:text-[var(--color-neo-cream)]",
    ghost:
      "bg-transparent text-[var(--color-neo-black)] hover:bg-[var(--color-neo-black)] hover:text-[var(--color-neo-cream)]",
  };

  const combinedClasses = `${baseStyles} ${sizes[size]} ${variants[variant]} ${className}`;

  if (href) {
    const isExternal = target === "_blank";
    return (
      <Link
        href={href}
        className={combinedClasses}
        target={target}
        rel={isExternal ? "noopener noreferrer" : undefined}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};
