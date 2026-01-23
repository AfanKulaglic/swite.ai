'use client';

interface Project {
  title: string;
  category: string;
  image: string;
  link: string;
}

interface PortfolioProps {
  title?: string;
  subtitle?: string;
  projects: Project[];
  layout?: 'grid' | 'masonry';
  columns?: 2 | 3 | 4;
}

export function Portfolio({
  title,
  subtitle,
  projects,
  layout = 'grid',
  columns = 3
}: PortfolioProps) {
  const gridClasses = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-4'
  };

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
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

        <div className={`grid grid-cols-1 ${gridClasses[columns]} gap-6`}>
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              className="group relative aspect-square overflow-hidden rounded-2xl bg-white/5"
            >
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-sm opacity-80 mb-2">{project.category}</p>
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
