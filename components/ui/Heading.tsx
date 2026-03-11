import React from "react";

interface HeadingProps {
  children: React.ReactNode;
  level?: "h1" | "h2" | "h3";
  className?: string;
  isInverse?: boolean;
}

export const Heading = ({
  children,
  level = "h2",
  className = "",
  isInverse = false,
}: HeadingProps) => {
  const Tag = level;
  const baseStyles =
    "font-heading uppercase font-extrabold leading-[0.9] tracking-tighter";
  const levelStyles = {
    h1: "text-4xl md:text-6xl",
    h2: "text-3xl md:text-5xl",
    h3: "text-2xl md:text-4xl",
  };
  const colorStyles = isInverse ? "text-brand-light" : "text-brand-green";

  return (
    <Tag
      className={`${baseStyles} ${levelStyles[level]} ${colorStyles} ${className}`}>
      {children}
    </Tag>
  );
};
