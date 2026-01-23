'use client';

interface AboutProps {
  title?: string;
  content: string;
  image?: string;
  skills?: string[];
  layout?: 'left' | 'right';
}

export function About({
  title,
  content,
  image,
  skills = [],
  layout = 'left'
}: AboutProps) {
  const isImageLeft = layout === 'left';

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className={`grid md:grid-cols-2 gap-12 items-center ${isImageLeft ? '' : 'md:flex-row-reverse'}`}>
          {/* Image */}
          {image && (
            <div className={`${isImageLeft ? 'md:order-1' : 'md:order-2'}`}>
              <div className="aspect-square rounded-2xl overflow-hidden bg-white/5">
                <img
                  src={image}
                  alt={title || 'About'}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}

          {/* Content */}
          <div className={`${isImageLeft ? 'md:order-2' : 'md:order-1'}`}>
            {title && (
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                {title}
              </h2>
            )}
            
            <p className="text-lg opacity-80 mb-8 leading-relaxed">
              {content}
            </p>

            {skills.length > 0 && (
              <div>
                <h3 className="text-xl font-bold mb-4">Skills</h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
