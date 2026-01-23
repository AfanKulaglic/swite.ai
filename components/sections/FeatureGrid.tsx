'use client';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface FeatureGridProps {
  title?: string;
  subtitle?: string;
  features: Feature[];
  columns?: 2 | 3 | 4;
}

export function FeatureGrid({
  title,
  subtitle,
  features,
  columns = 3
}: FeatureGridProps) {
  const gridClasses = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-4'
  };

  const iconMap: Record<string, string> = {
    chart: '📊',
    shield: '🛡️',
    users: '👥',
    zap: '⚡',
    lock: '🔒',
    heart: '❤️',
    leaf: '🍃',
    check: '✓'
  };

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {(title || subtitle) && (
          <div className="text-center mb-16">
            {title && (
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-xl opacity-80 max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}

        <div className={`grid grid-cols-1 ${gridClasses[columns]} gap-8`}>
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all"
            >
              <div className="text-4xl mb-4">
                {iconMap[feature.icon] || '✨'}
              </div>
              <h3 className="text-2xl font-bold mb-3">
                {feature.title}
              </h3>
              <p className="opacity-80">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
