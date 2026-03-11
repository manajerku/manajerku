interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export const Badge = ({ children, className = "" }: BadgeProps) => {
  return (
    <div
      className={`inline-block w-fit bg-(--color-accent) border-2 border-black px-4 py-1 text-sm font-heading shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] ${className}`}>
      ✦ {children}
    </div>
  );
};
