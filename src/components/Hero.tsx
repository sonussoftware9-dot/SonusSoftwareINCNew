import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, ChevronDown } from 'lucide-react';

const stats = [
  { value: 500, suffix: '+', label: 'Projects Delivered' },
  { value: 15, suffix: '+', label: 'Years of Excellence' },
  { value: 200, suffix: '+', label: 'Global Clients' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
];

function CountUp({ end, suffix }: { end: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const step = end / (duration / 16);
          let current = 0;
          const timer = setInterval(() => {
            current = Math.min(current + step, end);
            setCount(Math.floor(current));
            if (current >= end) clearInterval(timer);
          }, 16);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Hero() {
  const [videoModal, setVideoModal] = useState(false);

  return (
    <section className="relative min-h-screen bg-navy-900 flex flex-col justify-center overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
        {/* Gradient orbs */}
        <div className="absolute top-1/4 -left-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-crimson-600/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-navy-700/30 rounded-full blur-3xl" />
      </div>

      {/* Hero image */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Team collaboration"
          className="w-full h-full object-cover opacity-10"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-white/80 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Trusted Software Partner Since 2009
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-[3.5rem] xl:text-6xl font-bold text-white leading-[1.1] mb-6">
              Empowering Businesses with{' '}
              <span className="relative inline-block">
                <span className="gradient-text">Smart Software</span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 12"
                  preserveAspectRatio="none"
                  fill="none"
                >
                  <path d="M2 10C50 4 150 1 298 8" stroke="#dc2626" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>{' '}
              Solutions
            </h1>

            <p className="text-lg text-white/70 mb-10 leading-relaxed max-w-xl">
              Sonus Software Solutions Inc builds high-performance custom software, web & mobile apps, cloud infrastructure, and AI-driven tools — tailored to accelerate your growth.
            </p>

            <div className="flex flex-wrap gap-4 mb-16">
              <Link to="/contact" className="btn-primary text-base">
                Start Your Project
                <ArrowRight size={18} />
              </Link>
              <button
                onClick={() => setVideoModal(true)}
                className="inline-flex items-center gap-3 text-white font-semibold group"
              >
                <span className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:bg-crimson-600 transition-colors duration-200">
                  <Play size={16} className="ml-0.5" fill="white" />
                </span>
                Watch Our Story
              </button>
            </div>

            {/* Trusted by */}
            <div>
              <p className="text-white/40 text-xs uppercase tracking-widest font-semibold mb-3">Trusted by industry leaders</p>
              <div className="flex flex-wrap gap-6 items-center">
                {['TechCorp', 'HealthPlus', 'FinServe', 'RetailMax', 'LogiFlow'].map((brand) => (
                  <span key={brand} className="text-white/30 font-bold text-sm tracking-wide hover:text-white/60 transition-colors cursor-default">
                    {brand}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Stats card */}
          <div className="lg:flex justify-end hidden">
            <div className="relative">
              {/* Main image card */}
              <div className="rounded-3xl overflow-hidden shadow-2xl w-[420px] h-[480px]">
                <img
                  src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Software development team"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-900/20 to-transparent rounded-3xl" />
              </div>

              {/* Floating stats card */}
              <div className="absolute -bottom-6 -left-12 bg-white rounded-2xl p-5 shadow-2xl w-64">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                      <polyline points="16 7 22 7 22 13" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">Project Success Rate</p>
                    <p className="text-lg font-bold text-navy-900">98.5%</p>
                  </div>
                </div>
                <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 rounded-full" style={{ width: '98.5%' }} />
                </div>
              </div>

              {/* Experience badge */}
              <div className="absolute -top-4 -right-4 bg-crimson-600 text-white rounded-2xl p-4 shadow-xl">
                <p className="text-3xl font-black">13+</p>
                <p className="text-xs font-semibold opacity-90">Years<br />Experience</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-white/10 pt-10">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl md:text-4xl font-black text-white mb-1">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-white/50 text-sm font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <ChevronDown size={16} className="animate-bounce" />
      </div>

      {/* Video modal */}
      {videoModal && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setVideoModal(false)}
        >
          <div className="bg-navy-900 rounded-2xl p-6 max-w-2xl w-full text-center">
            <h3 className="text-white text-xl font-bold mb-2">Our Story</h3>
            <p className="text-white/60 text-sm mb-4">Delivering software excellence since 2009</p>
            <div className="bg-navy-800 rounded-xl aspect-video flex items-center justify-center">
              <p className="text-white/40 text-sm">Video coming soon</p>
            </div>
            <button
              onClick={() => setVideoModal(false)}
              className="mt-4 text-white/60 hover:text-white text-sm transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
