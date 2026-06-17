import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Lightbulb, FileCode2, Palette, BarChart3 } from 'lucide-react';

const steps = [
  {
    num: '01',
    icon: Lightbulb,
    title: 'Discover & Strategize',
    desc: 'We deep-dive into your business, goals, and users to define a bulletproof strategy, feature roadmap, and technology stack.',
  },
  {
    num: '02',
    icon: Palette,
    title: 'Design & Prototype',
    desc: 'Our UX designers create intuitive wireframes and interactive prototypes that get validated before a single line of code is written.',
  },
  {
    num: '03',
    icon: FileCode2,
    title: 'Build & Test',
    desc: 'Agile sprints with continuous integration, automated testing, and transparent progress updates every step of the way.',
  },
  {
    num: '04',
    icon: BarChart3,
    title: 'Launch & Optimize',
    desc: 'We deploy to production, monitor performance, and continuously optimize — turning your launch into a growth engine.',
  },
];

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.animate-on-scroll').forEach((el, i) => {
              setTimeout(() => el.classList.add('is-visible'), i * 150);
            });
          }
        });
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="process" className="py-24 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <span className="section-tag">
            <span className="w-6 h-0.5 bg-crimson-600 inline-block" />
            How We Work
          </span>
          <h2 className="section-heading mb-4">
            A Proven Process Built for Results
          </h2>
          <p className="text-gray-500 text-lg">
            Our structured methodology ensures every project is delivered on time, on budget, and exceeds expectations.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line desktop */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-navy-200 via-crimson-200 to-navy-200" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className="animate-on-scroll relative text-center group"
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                {/* Number bubble */}
                <div className="relative mx-auto mb-6 w-16 h-16">
                  <div className="absolute inset-0 rounded-full bg-crimson-600/10 group-hover:bg-crimson-600/20 transition-colors duration-300" />
                  <div className="relative w-full h-full rounded-full bg-white border-2 border-navy-100 group-hover:border-crimson-600 flex items-center justify-center transition-colors duration-300 shadow-md">
                    <step.icon size={24} className="text-navy-700 group-hover:text-crimson-600 transition-colors duration-300" />
                  </div>
                  {/* Step number badge */}
                  <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-crimson-600 text-white text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>

                <div className="text-4xl font-black text-navy-100 mb-2 group-hover:text-crimson-100 transition-colors duration-300">
                  {step.num}
                </div>

                <h3 className="font-bold text-navy-900 text-lg mb-3 group-hover:text-crimson-600 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA banner */}
        <div className="mt-20 bg-navy-900 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 animate-on-scroll">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Ready to Build Something Great?
            </h3>
            <p className="text-white/60">
              Let's talk about your project and get started today.
            </p>
          </div>
          <Link
            to="/contact"
            className="flex-shrink-0 bg-crimson-600 hover:bg-crimson-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-lg hover:shadow-crimson-600/30 text-base"
          >
            Start Your Project
          </Link>
        </div>
      </div>
    </section>
  );
}
