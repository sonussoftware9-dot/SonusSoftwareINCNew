import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

const services = [
  'Custom Software Development',
  'Web & Mobile Applications',
  'Cloud Solutions',
  'Data Analytics & AI',
  'Cybersecurity',
  'ERP & CRM Systems',
  'IT Consulting',
  'Digital Transformation',
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.animate-on-scroll, .animate-on-scroll-left, .animate-on-scroll-right').forEach((el, i) => {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass = 'w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3.5 text-white placeholder-white/30 focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-all duration-200 text-sm';
  const labelClass = 'block text-white/60 text-xs font-semibold uppercase tracking-wider mb-1.5';

  return (
    <section id="contact" className="py-24 bg-navy-900 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-flex items-center gap-2 text-blue-400 font-semibold text-sm uppercase tracking-widest mb-3">
            <span className="w-6 h-0.5 bg-blue-400 inline-block" />
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let's Build Something Great Together
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Tell us about your project and we'll get back to you within 4 business hours with a tailored response.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left: info */}
          <div className="lg:col-span-2 animate-on-scroll-left">
            <div className="space-y-8">
              {[
                {
                  icon: Phone,
                  label: 'Call Us',
                  value: '+1 (800) 766-8700',
                  sub: 'Mon–Fri, 9am–6pm EST',
                },
                {
                  icon: Mail,
                  label: 'Email Us',
                  value: 'hello@sonussoftware.com',
                  sub: 'Response within 4 hours',
                },
                {
                  icon: MapPin,
                  label: 'Headquarters',
                  value: '200 Park Avenue, Suite 1700',
                  sub: 'New York, NY 10166, USA',
                },
              ].map((item) => (
                <div key={item.label} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                    <item.icon size={20} className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs font-semibold uppercase tracking-wider mb-0.5">{item.label}</p>
                    <p className="text-white font-semibold text-sm">{item.value}</p>
                    <p className="text-white/40 text-xs">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Global offices */}
            <div className="mt-10 p-5 bg-white/5 border border-white/10 rounded-2xl">
              <p className="text-white font-semibold mb-4 text-sm">Global Offices</p>
              <div className="grid grid-cols-2 gap-3">
                {['New York, USA', 'London, UK', 'Toronto, Canada', 'Hyderabad, India', 'Sydney, Australia', 'Dubai, UAE'].map((city) => (
                  <div key={city} className="flex items-center gap-2 text-white/50 text-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0" />
                    {city}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3 animate-on-scroll-right">
            {submitted ? (
              <div className="bg-white/5 border border-white/10 rounded-3xl p-12 text-center h-full flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={32} className="text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Message Sent!</h3>
                <p className="text-white/60 text-base max-w-sm">
                  Thank you for reaching out. A member of our team will contact you within 4 business hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-blue-400 hover:text-blue-300 text-sm font-semibold transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white/5 border border-white/10 rounded-3xl p-8"
              >
                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className={labelClass}>Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="John Smith"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Work Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="john@company.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Company</label>
                    <input
                      type="text"
                      placeholder="Your Company"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className={labelClass}>Service Needed *</label>
                    <select
                      required
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className={`${inputClass} appearance-none`}
                    >
                      <option value="" disabled>Select a service</option>
                      {services.map((s) => (
                        <option key={s} value={s} className="bg-navy-900 text-white">
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className={labelClass}>Budget Range</label>
                    <select
                      value={form.budget}
                      onChange={(e) => setForm({ ...form, budget: e.target.value })}
                      className={`${inputClass} appearance-none`}
                    >
                      <option value="" className="bg-navy-900">Select budget</option>
                      {['< $25K', '$25K – $50K', '$50K – $100K', '$100K – $250K', '$250K+'].map((b) => (
                        <option key={b} value={b} className="bg-navy-900 text-white">{b}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label className={labelClass}>Tell Us About Your Project *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe your goals, challenges, and what you're hoping to build..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-crimson-600 hover:bg-crimson-700 text-white font-semibold py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-lg hover:shadow-crimson-600/30 flex items-center justify-center gap-2"
                >
                  Send Your Message
                  <Send size={16} />
                </button>

                <p className="text-white/30 text-xs text-center mt-4">
                  By submitting, you agree to our Privacy Policy. We never share your data.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
