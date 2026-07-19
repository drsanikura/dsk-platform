import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({
  children,
  className = "",
}: CardProps) {
  return (
    <div
      className={`
        rounded-2xl
        border
        border-slate-800
        bg-slate-900
        p-6
        shadow-sm
        transition
        hover:border-emerald-400/40
        ${className}
      `}
    >
      {children}
    </div>
  );
}