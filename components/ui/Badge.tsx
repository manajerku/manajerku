import { RiStarFill } from "react-icons/ri";
import Magnetic from "./Magnetic";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  icon?: boolean;
  variant?: "hijau" | "hitam" | "brick" | "mustard" | "outline";
}

export const Badge = ({
  children,
  className = "",
  icon = true,
  variant = "hijau",
}: BadgeProps) => {
  const baseStyles =
    "inline-flex items-center gap-1.5 w-fit border-[var(--bw)] border-[var(--color-neo-black)] px-4 py-1.5 text-sm font-heading font-bold uppercase tracking-wider shadow-[4px_4px_0px_0px_var(--color-neo-black)]";

  const variants: Record<string, string> = {
    hijau: "bg-[var(--color-neo-green)] text-[var(--color-neo-cream)]",
    hitam: "bg-[var(--color-neo-black)] text-[var(--color-neo-cream)]",
    brick: "bg-[var(--color-neo-brick)] text-white",
    mustard: "bg-[var(--color-neo-mustard)] text-[var(--color-neo-black)]",
    outline: "bg-[var(--color-neo-cream)] text-[var(--color-neo-black)]",
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  return (
    <Magnetic>
      <div className={combinedClasses}>
        {icon && <RiStarFill size={14} className="shrink-0" />}
        <span>{children}</span>
      </div>
    </Magnetic>
  );
};
