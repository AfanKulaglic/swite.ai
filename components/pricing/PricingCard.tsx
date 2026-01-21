import Button from "@/components/ui/Button";

interface PricingCardProps {
  name: string;
  price: string;
  period: string;
  features: string[];
  recommended?: boolean;
}

export default function PricingCard({
  name,
  price,
  period,
  features,
  recommended = false,
}: PricingCardProps) {
  return (
    <div
      className={`relative rounded-3xl p-8 ${
        recommended
          ? "bg-brand text-black scale-105"
          : "bg-white/5 border border-white/10"
      }`}
    >
      {recommended && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accentBlue text-white px-6 py-2 rounded-full text-xs font-bold uppercase">
          Recommended
        </div>
      )}

      <h3 className="text-2xl font-black uppercase mb-2">{name}</h3>
      <div className="mb-8">
        <span className="text-5xl font-black">{price}</span>
        <span className="text-muted ml-2">/{period}</span>
      </div>

      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className={recommended ? "text-black" : "text-brand"}>✓</span>
            <span className={recommended ? "text-black" : "text-white"}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <Button
        href="/signup"
        variant={recommended ? "secondary" : "primary"}
        className="w-full"
      >
        Get Started
      </Button>
    </div>
  );
}
