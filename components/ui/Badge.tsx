import { RiStarFill } from "react-icons/ri";
import Magnetic from "./Magnetic";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export const Badge = ({ children, className = "" }: BadgeProps) => {
  return (
    <Magnetic>
      <div
        className={`inline-flex items-center gap-1.5 w-fit bg-(--color-accent) border-2 border-black px-4 py-1 text-sm font-heading shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] ${className}`}>
        <RiStarFill size={12} />
        {children}
      </div>
    </Magnetic>
  );
};
