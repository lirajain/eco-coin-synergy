
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface DashboardCardProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  glowEffect?: "green" | "blue" | "none";
  isHighlighted?: boolean;
  animate?: boolean;
}

const DashboardCard = ({
  title,
  subtitle,
  children,
  className,
  glowEffect = "none",
  isHighlighted = false,
  animate = false,
}: DashboardCardProps) => {
  return (
    <div
      className={cn(
        "rounded-xl overflow-hidden transition-all duration-300",
        isHighlighted ? "card-highlight" : "glass-card",
        glowEffect === "green" && "green-glow",
        glowEffect === "blue" && "blue-glow",
        animate && "hover:translate-y-[-5px]",
        className
      )}
    >
      <div className="px-6 py-5 border-b border-white/5">
        <h3 className="font-medium text-lg text-white">{title}</h3>
        {subtitle && <p className="text-white/60 text-sm mt-1">{subtitle}</p>}
      </div>
      <div className="p-6">{children}</div>
    </div>
  );
};

export default DashboardCard;
