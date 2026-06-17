interface PageHeroProps {
  tag?: string;
  title: string;
  subtitle?: string;
  breadcrumbs?: { label: string; href?: string }[];
}

export default function PageHero({ tag, title, subtitle, breadcrumbs }: PageHeroProps) {
  return (
    <section className="relative bg-navy-900 pt-36 pb-20 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] bg-crimson-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {breadcrumbs && (
          <div className="flex items-center justify-center gap-2 text-white/40 text-sm mb-6">
            {breadcrumbs.map((crumb, i) => (
              <span key={crumb.label} className="flex items-center gap-2">
                {i > 0 && <span>/</span>}
                {crumb.href ? (
                  <a href={crumb.href} className="hover:text-white/70 transition-colors">
                    {crumb.label}
                  </a>
                ) : (
                  <span className="text-white/70">{crumb.label}</span>
                )}
              </span>
            ))}
          </div>
        )}
        {tag && (
          <span className="inline-flex items-center gap-2 text-blue-400 font-semibold text-sm uppercase tracking-widest mb-4">
            <span className="w-6 h-0.5 bg-blue-400 inline-block" />
            {tag}
          </span>
        )}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
          {title}
        </h1>
        {subtitle && (
          <p className="text-white/55 text-xl max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
