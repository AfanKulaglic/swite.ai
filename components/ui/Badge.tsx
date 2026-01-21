interface BadgeProps {
  children: React.ReactNode;
  variant?: "brand" | "blue" | "purple" | "muted";
}

export default function Badge({ children, variant = "brand" }: BadgeProps) {
  const variants = {
    brand: "bg-brand/10 text-brand border-brand/20",
    blue: "bg-accentBlue/10 text-accentBlue border-accentBlue/20",
    purple: "bg-accentPurple/10 text-accentPurple border-accentPurple/20",
    muted: "bg-white/5 text-muted border-white/10",
  };

  return (
    <span
      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border ${variants[variant]}`}
    >
      {children}
    </span>
  );
}
