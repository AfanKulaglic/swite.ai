'use client';

interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar?: string;
}

interface TestimonialsProps {
  title?: string;
  subtitle?: string;
  testimonials: Testimonial[];
  columns?: 1 | 2 | 3;
}

export function Testimonials({
  title,
  subtitle,
  testimonials,
  columns = 3
}: TestimonialsProps) {
  const gridClasses = {
    1: 'md:grid-cols-1',
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3'
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
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
            >
              <p className="text-lg mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4">
                {testimonial.avatar && (
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                )}
                <div>
                  <div className="font-bold">{testimonial.name}</div>
                  <div className="text-sm opacity-70">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
