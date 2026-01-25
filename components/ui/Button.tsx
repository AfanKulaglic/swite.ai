import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  onClick?: () => void;
  className?: string;
  size?: "sm" | "md" | "lg";
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function Button({
  children,
  href,
  variant = "primary",
  onClick,
  className = "",
  size = "md",
  type = "button",
  disabled = false,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-200 relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed";
  
  const sizeStyles = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-base",
  };

  const variants = {
    primary: "bg-white text-black hover:bg-white/90 shadow-md hover:shadow-lg",
    secondary: "bg-white/10 text-white hover:bg-white/15 border border-white/20",
    outline: "bg-transparent text-white hover:bg-white/10 border-2 border-white/40 hover:border-white/60",
    ghost: "bg-transparent text-white/70 hover:text-white hover:bg-white/5",
  };

  const classes = `${baseStyles} ${sizeStyles[size]} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        <span className="relative z-10">{children}</span>
      </Link>
    );
  }

  return (
    <button onClick={onClick} type={type} disabled={disabled} className={classes}>
      <span className="relative z-10">{children}</span>
    </button>
  );
}
