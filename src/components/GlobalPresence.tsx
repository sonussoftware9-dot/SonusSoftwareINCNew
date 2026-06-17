import { useEffect, useRef } from 'react';

const offices = [
  { city: 'New York', country: 'USA', flag: '🇺🇸', primary: true },
  { city: 'London', country: 'UK', flag: '🇬🇧', primary: false },
  { city: 'Toronto', country: 'Canada', flag: '🇨🇦', primary: false },
  { city: 'Hyderabad', country: 'India', flag: '🇮🇳', primary: false },
  { city: 'Sydney', country: 'Australia', flag: '🇦🇺', primary: false },
  { city: 'Dubai', country: 'UAE', flag: '🇦🇪', primary: false },
];

export default function GlobalPresence() {
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
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Map visual */}
          <div className="animate-on-scroll order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden bg-navy-50 p-2">
              <img
                src="https://images.pexels.com/photos/269633/pexels-photo-269633.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="World map showing global presence"
                className="w-full h-72 object-cover rounded-2xl opacity-70"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-5xl font-black text-navy-900">6</p>
                  <p className="text-navy-600 font-semibold">Global Offices</p>
                </div>
              </div>
              {/* Pin dots overlay */}
              {[
                { x: '20%', y: '35%' },
                { x: '44%', y: '28%' },
                { x: '28%', y: '25%' },
                { x: '62%', y: '42%' },
                { x: '78%', y: '65%' },
                { x: '66%', y: '30%' },
              ].map((pos, i) => (
                <div
                  key={i}
                  className="absolute w-3 h-3 rounded-full bg-crimson-600 border-2 border-white shadow-lg animate-pulse"
                  style={{ left: pos.x, top: pos.y }}
                />
              ))}
            </div>
          </div>

          {/* Text content */}
          <div className="animate-on-scroll order-1 lg:order-2">
            <span className="section-tag">
              <span className="w-6 h-0.5 bg-crimson-600 inline-block" />
              Our Reach
            </span>
            <h2 className="section-heading mb-4">
              Global Presence, Local Expertise
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              With offices across 6 countries and development teams in 4 time zones, Sonus delivers round-the-clock service without sacrificing the personalized touch of a local partner.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {offices.map((office, i) => (
                <div
                  key={office.city}
                  className={`animate-on-scroll p-4 rounded-xl border transition-all duration-200 cursor-default hover:-translate-y-1 ${
                    office.primary
                      ? 'bg-navy-900 border-navy-700 text-white'
                      : 'bg-gray-50 border-gray-100 text-navy-900'
                  }`}
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <div className="text-2xl mb-2">{office.flag}</div>
                  <p className={`font-bold text-sm ${office.primary ? 'text-white' : 'text-navy-900'}`}>
                    {office.city}
                  </p>
                  <p className={`text-xs ${office.primary ? 'text-white/50' : 'text-gray-400'}`}>
                    {office.country}
                    {office.primary && (
                      <span className="ml-1.5 text-green-400 font-semibold">HQ</span>
                    )}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
