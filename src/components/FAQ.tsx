import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: 'How long does a typical software project take?',
    a: 'It depends on scope and complexity. A simple web app MVP can take 6–10 weeks. Mid-scale enterprise systems typically range from 3–6 months. We provide a detailed project timeline after our discovery phase, and our Agile approach keeps you informed throughout.',
  },
  {
    q: 'What engagement models do you offer?',
    a: 'We offer three flexible models: Fixed Price (for well-defined projects), Time & Material (for evolving requirements), and Dedicated Team (for ongoing development). We work with you to choose the model that best fits your goals and budget.',
  },
  {
    q: 'Do you provide post-launch support and maintenance?',
    a: 'Absolutely. All our projects include a warranty period post-launch. We also offer structured SLA-backed maintenance plans covering bug fixes, security patches, performance monitoring, and feature updates.',
  },
  {
    q: 'How do you ensure data security and IP protection?',
    a: 'We sign mutual NDAs before any engagement begins. Our development infrastructure follows SOC 2 security standards. Source code ownership transfers to you upon project completion, and we never reuse client code.',
  },
  {
    q: 'Can you work with our existing development team?',
    a: 'Yes. We can operate as an extension of your in-house team, providing specific skill sets (e.g., backend engineers, UX designers) or taking ownership of entire modules while your team focuses elsewhere.',
  },
  {
    q: 'What technologies do you specialize in?',
    a: 'Our core stack includes React, Angular, Vue (frontend), Node.js, Python, Java, .NET (backend), React Native & Flutter (mobile), and AWS / Azure / GCP (cloud). We select the best tool for each job, not the most familiar one.',
  },
  {
    q: 'How do you handle projects across different time zones?',
    a: 'We have delivery centers across multiple time zones and use asynchronous-first communication practices. Dedicated project managers ensure you always have a point of contact within your business hours.',
  },
  {
    q: 'What is your quality assurance process?',
    a: 'Our QA is built into every sprint — not bolted on at the end. We use automated unit, integration, and end-to-end testing alongside manual exploratory testing. Code reviews and CI/CD pipelines ensure quality at every commit.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.animate-on-scroll').forEach((el, i) => {
              setTimeout(() => el.classList.add('is-visible'), i * 60);
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
    <section className="py-24 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div className="animate-on-scroll lg:sticky lg:top-32">
            <span className="section-tag">
              <span className="w-6 h-0.5 bg-crimson-600 inline-block" />
              FAQ
            </span>
            <h2 className="section-heading mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              Can't find what you're looking for? Our team is just a message away.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 text-sm"
            >
              Ask a Question
            </Link>

            {/* Quick stats */}
            <div className="mt-10 grid grid-cols-2 gap-4">
              {[
                { n: '< 4h', l: 'Average Response Time' },
                { n: '98%', l: 'Client Retention Rate' },
                { n: 'NDA', l: 'Protected Engagement' },
                { n: '24/7', l: 'Emergency Support' },
              ].map((s) => (
                <div key={s.l} className="bg-white rounded-xl p-4 border border-gray-100">
                  <p className="text-2xl font-black text-navy-900 mb-1">{s.n}</p>
                  <p className="text-gray-500 text-xs font-medium">{s.l}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Accordion */}
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`animate-on-scroll bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-300 ${open === i ? 'shadow-md' : ''}`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-start justify-between gap-4 p-5 text-left hover:bg-gray-50/50 transition-colors"
                >
                  <span className={`font-semibold text-sm leading-relaxed ${open === i ? 'text-crimson-600' : 'text-navy-900'}`}>
                    {faq.q}
                  </span>
                  <span className={`w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center transition-colors duration-200 ${open === i ? 'bg-crimson-600 text-white' : 'bg-gray-100 text-gray-500'}`}>
                    {open === i ? <Minus size={12} /> : <Plus size={12} />}
                  </span>
                </button>
                {open === i && (
                  <div className="px-5 pb-5">
                    <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
