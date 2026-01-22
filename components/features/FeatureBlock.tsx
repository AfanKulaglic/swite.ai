interface FeatureBlockProps {
  title: string;
  description: string;
  icon: string;
  reverse?: boolean;
  details?: string[];
}

export default function FeatureBlock({
  title,
  description,
  icon,
  reverse = false,
  details = [],
}: FeatureBlockProps) {
  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
        reverse ? "lg:flex-row-reverse" : ""
      }`}
    >
      <div className={reverse ? "lg:order-2" : ""}>
        <div className="text-6xl mb-6">{icon}</div>
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-6">
          {title}
        </h2>
        <p className="text-lg text-muted max-w-xl leading-relaxed mb-6">{description}</p>
        
        {details.length > 0 && (
          <div className="space-y-3">
            {details.map((detail, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <span className="text-brand text-lg mt-1">→</span>
                <span className="text-white">{detail}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className={reverse ? "lg:order-1" : ""}>
        <div className="w-full h-80 rounded-3xl bg-gradient-to-br from-accentBlue/20 to-accentPurple/20 border border-white/10 p-8 flex items-center justify-center">
          <div className="text-center">
            <div className="text-8xl mb-4 opacity-50">{icon}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
