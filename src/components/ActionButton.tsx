
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ActionButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  disabled?: boolean;
}

const ActionButton = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className,
  icon,
  iconPosition = 'left',
  fullWidth = false,
  disabled = false,
}: ActionButtonProps) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'bg-gradient-to-r from-yuzn-green to-yuzn-blue text-white hover:from-yuzn-green-dark hover:to-yuzn-blue-dark shadow-lg shadow-yuzn-blue/20';
      case 'secondary':
        return 'bg-yuzn-dark-light border border-white/10 text-white hover:bg-yuzn-dark-lightest';
      case 'outline':
        return 'bg-transparent border border-white/10 text-white hover:bg-white/5';
      default:
        return 'bg-gradient-to-r from-yuzn-green to-yuzn-blue text-white hover:from-yuzn-green-dark hover:to-yuzn-blue-dark';
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'py-1.5 px-3 text-sm';
      case 'md':
        return 'py-2.5 px-5 text-base';
      case 'lg':
        return 'py-3 px-6 text-lg';
      default:
        return 'py-2.5 px-5 text-base';
    }
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        'relative rounded-lg font-medium transition-all duration-300 overflow-hidden inline-flex items-center justify-center',
        getVariantClasses(),
        getSizeClasses(),
        fullWidth && 'w-full',
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
    >
      {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
      <span className="relative z-10">{children}</span>
      {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
      
      {variant === 'primary' && (
        <div className="absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 bg-shimmer animate-shimmer"></div>
        </div>
      )}
    </button>
  );
};

export default ActionButton;
