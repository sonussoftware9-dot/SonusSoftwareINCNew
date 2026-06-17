import { useEffect, useRef } from 'react';
import { CheckCircle2, Award, Globe2, TrendingUp } from 'lucide-react';

const highlights = [
  'ISO 9001:2015 certified development processes',
  'Agile & DevOps methodology for faster delivery',
  'Dedicated project managers & transparent reporting',
  'Post-launch support & maintenance included',
  'NDA-protected engagement for IP security',
  'Flexible engagement models — fixed, T&M, dedicated',
];

const pillars = [
  { icon: Award, label: 'Quality First', desc: 'Every deliverable goes through rigorous QA before it reaches you.' },
  { icon: Globe2, label: 'Global Reach', desc: 'Serving clients across North America, Europe, and Asia-Pacific.' },
  { icon: TrendingUp, label: 'Proven Growth', desc: 'Our clients average 3x faster time-to-market after partnering with us.' },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.animate-on-scroll, .animate-on-scroll-left, .animate-on-scroll-right').forEach((el, i) => {
              setTimeout(() => el.classList.add('is-visible'), i * 100);
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
    <section id="about" className="py-24 bg-navy-900 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-crimson-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left image */}
          <div className="animate-on-scroll-left relative">
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Sonus team at work"
                className="w-full h-[520px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-navy-900/60 to-transparent" />
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 -right-4 lg:right-auto lg:-left-6 bg-crimson-600 rounded-2xl p-5 text-white shadow-2xl">
              <p className="text-4xl font-black mb-0.5">15<span className="text-2xl">+</span></p>
              <p className="text-sm font-semibold opacity-90">Years Delivering<br />Software Excellence</p>
            </div>

            {/* Second floating card */}
            <div className="absolute top-6 -right-4 lg:-right-6 bg-white rounded-2xl p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-navy-900 border-2 border-white overflow-hidden">
                      <img
                        src={`https://images.pexels.com/photos/${[1181686, 774909, 1222271, 415829][i - 1]}/pexels-photo-${[1181686, 774909, 1222271, 415829][i - 1]}.jpeg?auto=compress&cs=tinysrgb&w=80`}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium">Our Team</p>
                  <p className="text-sm font-bold text-navy-900">150+ Experts</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right content */}
          <div className="animate-on-scroll-right">
            <span className="section-tag text-blue-400">
              <span className="w-6 h-0.5 bg-blue-400 inline-block" />
              About Sonus
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
              Driving Business Growth Through Innovative Technology
            </h2>
            <p className="text-white/60 leading-relaxed mb-6">
              Founded in 2009, Sonus Software Solutions Inc has grown from a boutique development shop into a full-service technology partner trusted by over 200 companies globally. We specialize in turning complex business challenges into elegant, scalable software solutions.
            </p>
            <p className="text-white/60 leading-relaxed mb-8">
              Our multidisciplinary teams bring deep technical expertise together with genuine business acumen — so every solution we build doesn't just work, it moves the needle.
            </p>

            {/* Checklist */}
            <div className="grid sm:grid-cols-2 gap-3 mb-10">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-white/70 text-sm">{item}</span>
                </div>
              ))}
            </div>

            {/* Pillars */}
            <div className="grid grid-cols-3 gap-4">
              {pillars.map((p) => (
                <div key={p.label} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                  <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center mx-auto mb-3">
                    <p.icon size={18} className="text-blue-400" />
                  </div>
                  <p className="text-white font-semibold text-sm mb-1">{p.label}</p>
                  <p className="text-white/40 text-xs leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
