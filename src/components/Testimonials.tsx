import { useEffect, useRef, useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Michael Torres',
    role: 'CTO, HealthBridge Inc.',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=120',
    industry: 'Healthcare',
    quote: 'Sonus delivered a HIPAA-compliant patient management platform in record time. Their team asked the right questions from day one and built exactly what we needed. Post-launch support has been exceptional.',
    rating: 5,
  },
  {
    name: 'Sarah Chen',
    role: 'VP of Engineering, FinVault',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=120',
    industry: 'FinTech',
    quote: "We engaged Sonus for a complete core banking modernization. Their architects brought depth of knowledge I haven't seen elsewhere. On time, under budget, zero production incidents at launch.",
    rating: 5,
  },
  {
    name: 'James Okafor',
    role: 'CEO, LogiTech Express',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=120',
    industry: 'Logistics',
    quote: 'Our warehouse management system was a tangle of legacy code. Sonus untangled it, rebuilt it on modern cloud infrastructure, and cut our operational costs by 40%. Remarkable outcome.',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    role: 'Director of Technology, EduReach',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=120',
    industry: 'Education',
    quote: "Sonus built our entire e-learning platform from scratch in 6 months. The UX is beautiful and the system handles 50,000 concurrent students without a hiccup. It's been a game-changer for us.",
    rating: 5,
  },
  {
    name: 'David Müller',
    role: 'Head of IT, RetailMax GmbH',
    avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=120',
    industry: 'Retail',
    quote: "From ERP integration to a custom e-commerce engine, Sonus handled everything with professionalism. They're proactive communicators and genuinely care about the outcome of your business.",
    rating: 5,
  },
  {
    name: 'Amanda Reyes',
    role: 'COO, ManufactX Corp',
    avatar: 'https://images.pexels.com/photos/1197132/pexels-photo-1197132.jpeg?auto=compress&cs=tinysrgb&w=120',
    industry: 'Manufacturing',
    quote: 'IoT integration across 12 production lines in 4 plants — Sonus made it look easy. Real-time dashboards, predictive maintenance alerts, the works. ROI was clear within the first quarter.',
    rating: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.animate-on-scroll').forEach((el, i) => {
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

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [autoPlay]);

  const prev = () => {
    setAutoPlay(false);
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  };
  const next = () => {
    setAutoPlay(false);
    setCurrent((c) => (c + 1) % testimonials.length);
  };

  const visibleCount = 3;
  const visible = Array.from({ length: visibleCount }, (_, i) =>
    testimonials[(current + i) % testimonials.length]
  );

  return (
    <section id="testimonials" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="animate-on-scroll">
            <span className="section-tag">
              <span className="w-6 h-0.5 bg-crimson-600 inline-block" />
              Client Stories
            </span>
            <h2 className="section-heading mb-3">What Our Clients Say</h2>
            <p className="text-gray-500 text-lg max-w-lg">
              Real results, real relationships. Here's what the people we've worked with have to say.
            </p>
          </div>
          <div className="flex gap-3 animate-on-scroll">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full border-2 border-gray-200 hover:border-navy-900 hover:bg-navy-900 hover:text-white flex items-center justify-center transition-all duration-200 text-gray-600"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              className="w-11 h-11 rounded-full border-2 border-gray-200 hover:border-navy-900 hover:bg-navy-900 hover:text-white flex items-center justify-center transition-all duration-200 text-gray-600"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {visible.map((t, i) => (
            <div
              key={`${t.name}-${i}`}
              className={`animate-on-scroll bg-gray-50 rounded-2xl p-7 border border-gray-100 relative ${i === 1 ? 'md:bg-navy-900 md:border-navy-800' : ''}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <Quote
                size={40}
                className={`absolute top-6 right-6 ${i === 1 ? 'text-white/10' : 'text-gray-100'}`}
              />
              <div className="mb-4">
                <Stars count={t.rating} />
              </div>
              <p className={`text-sm leading-relaxed mb-6 relative z-10 ${i === 1 ? 'text-white/80' : 'text-gray-600'}`}>
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover"
                />
                <div>
                  <p className={`font-bold text-sm ${i === 1 ? 'text-white' : 'text-navy-900'}`}>{t.name}</p>
                  <p className={`text-xs ${i === 1 ? 'text-white/50' : 'text-gray-400'}`}>{t.role}</p>
                </div>
                <span className={`ml-auto text-xs font-semibold px-2.5 py-1 rounded-full ${i === 1 ? 'bg-white/10 text-white/60' : 'bg-navy-50 text-navy-600'}`}>
                  {t.industry}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => { setAutoPlay(false); setCurrent(i); }}
              className={`transition-all duration-200 rounded-full ${
                i === current ? 'w-6 h-2 bg-crimson-600' : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
