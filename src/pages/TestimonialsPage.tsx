import { useEffect, useRef } from 'react';
import { Star, Quote } from 'lucide-react';
import PageHero from '../components/PageHero';
import Contact from '../components/Contact';

const testimonials = [
  {
    name: 'Michael Torres', role: 'CTO, HealthBridge Inc.', industry: 'Healthcare',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=120',
    quote: 'Sonus delivered a HIPAA-compliant patient management platform in record time. Their team asked the right questions from day one and built exactly what we needed. Post-launch support has been exceptional. I would not hesitate to recommend them to any healthcare organization looking for a serious technology partner.',
    project: 'Patient Management Portal',
    result: '40% reduction in admin workload',
    rating: 5,
  },
  {
    name: 'Sarah Chen', role: 'VP of Engineering, FinVault', industry: 'FinTech',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=120',
    quote: "We engaged Sonus for a complete core banking modernization. Their architects brought depth of knowledge I haven't seen elsewhere. On time, under budget, zero production incidents at launch. The transition was seamless and our customers didn't feel a thing. Truly world-class execution.",
    project: 'Core Banking Modernization',
    result: '99.99% uptime since launch',
    rating: 5,
  },
  {
    name: 'James Okafor', role: 'CEO, LogiTech Express', industry: 'Logistics',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=120',
    quote: 'Our warehouse management system was a tangle of legacy code. Sonus untangled it, rebuilt it on modern cloud infrastructure, and cut our operational costs by 40%. Their project management was tight and communication was transparent at every stage.',
    project: 'Warehouse Management System',
    result: '40% operational cost reduction',
    rating: 5,
  },
  {
    name: 'Priya Sharma', role: 'Director of Technology, EduReach', industry: 'Education',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=120',
    quote: "Sonus built our entire e-learning platform from scratch in 6 months. The UX is beautiful and the system handles 50,000 concurrent students without a hiccup. It's been a game-changer for our institution. Students love it, instructors love it, and our support tickets dropped by 70%.",
    project: 'Learning Management System',
    result: '50K concurrent users supported',
    rating: 5,
  },
  {
    name: 'David Müller', role: 'Head of IT, RetailMax GmbH', industry: 'Retail',
    avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=120',
    quote: "From ERP integration to a custom e-commerce engine, Sonus handled everything with professionalism. They're proactive communicators and genuinely care about the outcome of your business. The platform they built handles peak sales days without any performance degradation.",
    project: 'Omnichannel Commerce Platform',
    result: '35% increase in online revenue',
    rating: 5,
  },
  {
    name: 'Amanda Reyes', role: 'COO, ManufactX Corp', industry: 'Manufacturing',
    avatar: 'https://images.pexels.com/photos/1197132/pexels-photo-1197132.jpeg?auto=compress&cs=tinysrgb&w=120',
    quote: 'IoT integration across 12 production lines in 4 plants — Sonus made it look easy. Real-time dashboards, predictive maintenance alerts, the works. ROI was clear within the first quarter. The system has paid for itself several times over already.',
    project: 'Smart Factory IoT Platform',
    result: '$2.4M annual maintenance savings',
    rating: 5,
  },
  {
    name: 'Robert Kim', role: 'Founder & CEO, SecurePay Inc.', industry: 'FinTech',
    avatar: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=120',
    quote: 'Building a PCI-DSS Level 1 compliant payment app from scratch is not for the faint of heart. Sonus guided us through every compliance requirement, every edge case, and every security audit. We launched with a 4.9 App Store rating and 1M downloads in the first 6 months.',
    project: 'Mobile Payment Application',
    result: '1M+ downloads in first 6 months',
    rating: 5,
  },
  {
    name: 'Linda Hernandez', role: 'CIO, City of Greenfield', industry: 'Government',
    avatar: 'https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=120',
    quote: 'Government technology projects are notoriously difficult. Budget overruns, scope creep, vendor lock-in. Sonus delivered on time, on budget, with clean handoff documentation. Our residents can now access 14 services in one place. The cost savings have been remarkable.',
    project: 'Citizen Services Portal',
    result: '80% reduction in in-person visits',
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

function useScrollAnim(ref: React.RefObject<HTMLElement>) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.animate-on-scroll').forEach((el, i) => {
              setTimeout(() => el.classList.add('is-visible'), i * 70);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
}

export default function TestimonialsPage() {
  const ref = useRef<HTMLDivElement>(null);
  useScrollAnim(ref as React.RefObject<HTMLElement>);

  return (
    <>
      <PageHero
        tag="Client Stories"
        title="What Our Clients Say About Working With Sonus"
        subtitle="Over 200 businesses have trusted us with their most important technology projects. Here's what they have to say."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Testimonials' }]}
      />

      {/* Stats bar */}
      <section className="bg-gray-50 border-b border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { n: '200+', l: 'Clients Served' },
              { n: '98%', l: 'Client Retention' },
              { n: '4.9/5', l: 'Average Rating' },
              { n: '500+', l: 'Projects Delivered' },
            ].map((s) => (
              <div key={s.l}>
                <p className="text-4xl font-black text-navy-900 mb-1">{s.n}</p>
                <p className="text-gray-400 font-medium text-sm">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials grid */}
      <section className="py-24 bg-white" ref={ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className="animate-on-scroll bg-gray-50 rounded-3xl p-8 border border-gray-100 relative hover:shadow-xl hover:border-gray-200 transition-all duration-300"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <Quote size={48} className="absolute top-6 right-6 text-gray-100" />
                <div className="mb-5">
                  <Stars count={t.rating} />
                </div>
                <p className="text-gray-600 leading-relaxed mb-6 relative z-10 text-base">
                  "{t.quote}"
                </p>
                {/* Result callout */}
                <div className="bg-green-50 border border-green-100 rounded-xl px-4 py-2.5 mb-6 inline-block">
                  <p className="text-green-700 font-semibold text-sm">
                    Key Result: {t.result}
                  </p>
                </div>
                <div className="flex items-center justify-between pt-5 border-t border-gray-100">
                  <div className="flex items-center gap-3">
                    <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-xl object-cover" />
                    <div>
                      <p className="font-bold text-navy-900">{t.name}</p>
                      <p className="text-gray-400 text-sm">{t.role}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-400 font-medium mb-0.5">Project</p>
                    <p className="text-xs font-semibold text-navy-700">{t.project}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
}
