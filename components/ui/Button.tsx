import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;

  variant?: "hijau" | "kuning" | "outline";
  href?: string;
  className?: string;
}

export const Button = ({
  children,
  variant = "hijau",
  href,
  className = "",
  ...props
}: ButtonProps) => {
  const baseStyles =
    "inline-block px-8 py-4 font-heading text-lg border-3 border-black transition-all duration-75 text-center uppercase tracking-wider shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] active:bg-opacity-90";

  const variants = {
    hijau: "bg-(--color-primary) text-white",
    kuning: "bg-(--color-orange) text-black",
    outline: "bg-white text-black",
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
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
