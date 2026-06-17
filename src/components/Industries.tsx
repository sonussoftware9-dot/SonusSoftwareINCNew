import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const industries = [
  {
    title: 'Healthcare & Life Sciences',
    desc: 'HIPAA-compliant software for hospitals, clinics, and biotech firms.',
    img: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Banking & Finance',
    desc: 'Secure fintech platforms, payment gateways & compliance tools.',
    img: 'https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Retail & E-Commerce',
    desc: 'Scalable storefronts, inventory systems & omnichannel solutions.',
    img: 'https://images.pexels.com/photos/5632379/pexels-photo-5632379.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Manufacturing',
    desc: 'IoT-enabled factory automation, ERP, and quality management.',
    img: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Education & Ed-Tech',
    desc: 'LMS platforms, virtual classrooms, and student analytics tools.',
    img: 'https://images.pexels.com/photos/5212320/pexels-photo-5212320.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Logistics & Supply Chain',
    desc: 'Route optimization, tracking systems & warehouse management.',
    img: 'https://images.pexels.com/photos/1427107/pexels-photo-1427107.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export default function Industries() {
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
    <section id="industries" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <span className="section-tag">
            <span className="w-6 h-0.5 bg-crimson-600 inline-block" />
            Industries We Serve
          </span>
          <h2 className="section-heading mb-4">
            Deep Domain Expertise Across Key Sectors
          </h2>
          <p className="text-gray-500 text-lg">
            We bring industry-specific knowledge to every engagement, ensuring your software speaks the language of your business.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((item, i) => (
            <div
              key={item.title}
              className={`animate-on-scroll group relative rounded-2xl overflow-hidden cursor-pointer h-64 card-hover`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/40 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-3">{item.desc}</p>
                <span className="inline-flex items-center gap-1.5 text-crimson-400 text-sm font-semibold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  Learn more <ArrowRight size={14} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
