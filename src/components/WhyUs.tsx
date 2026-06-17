import { useEffect, useRef } from 'react';
import { Target, Clock3, Layers, Users2, Sparkles, HeartHandshake } from 'lucide-react';

const reasons = [
  {
    icon: Target,
    title: 'Outcome-Focused',
    desc: 'We measure success by business results — not lines of code or hours billed.',
  },
  {
    icon: Clock3,
    title: 'On-Time Delivery',
    desc: '94% of our projects are delivered on schedule through disciplined Agile execution.',
  },
  {
    icon: Layers,
    title: 'Full-Stack Capability',
    desc: 'From UX research to cloud ops, we cover the entire software delivery lifecycle in-house.',
  },
  {
    icon: Users2,
    title: 'Dedicated Teams',
    desc: 'You get a stable, senior-heavy team — not a rotating pool of junior contractors.',
  },
  {
    icon: Sparkles,
    title: 'Innovation DNA',
    desc: 'We actively invest in emerging tech (AI, edge computing, WebAssembly) so our clients lead, not follow.',
  },
  {
    icon: HeartHandshake,
    title: 'Long-Term Partnerships',
    desc: '78% of our revenue comes from repeat clients — a testament to the trust we build.',
  },
];

export default function WhyUs() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.animate-on-scroll').forEach((el, i) => {
              setTimeout(() => el.classList.add('is-visible'), i * 80);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <span className="section-tag">
            <span className="w-6 h-0.5 bg-crimson-600 inline-block" />
            Why Sonus
          </span>
          <h2 className="section-heading mb-4">
            Why 200+ Companies Choose Sonus
          </h2>
          <p className="text-gray-500 text-lg">
            We combine the agility of a startup with the rigor of an enterprise, backed by 15 years of real-world delivery experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className="animate-on-scroll group relative bg-gray-50 hover:bg-navy-900 rounded-2xl p-7 border border-gray-100 hover:border-navy-700 transition-all duration-300 cursor-default overflow-hidden"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Background glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-crimson-600/0 group-hover:from-blue-600/10 group-hover:to-crimson-600/10 transition-all duration-500 rounded-2xl" />

              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-navy-100 group-hover:bg-white/10 flex items-center justify-center mb-5 transition-colors duration-300">
                  <r.icon size={22} className="text-navy-700 group-hover:text-blue-400 transition-colors duration-300" />
                </div>
                <h3 className="font-bold text-navy-900 group-hover:text-white text-base mb-2 transition-colors duration-300">
                  {r.title}
                </h3>
                <p className="text-gray-500 group-hover:text-white/60 text-sm leading-relaxed transition-colors duration-300">
                  {r.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
