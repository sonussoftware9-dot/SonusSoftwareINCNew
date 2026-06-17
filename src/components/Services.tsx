import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Code2, Smartphone, Cloud, Brain, Shield, Database,
  Users, Zap, ArrowRight
} from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Custom Software Development',
    desc: 'Tailor-made software solutions built to fit your exact business needs — from MVPs to enterprise-scale platforms.',
    color: 'bg-blue-50 text-blue-600',
    accent: 'group-hover:bg-blue-600',
  },
  {
    icon: Smartphone,
    title: 'Web & Mobile Applications',
    desc: 'Modern, performant web and native mobile apps that deliver seamless user experiences across all devices.',
    color: 'bg-purple-50 text-purple-600',
    accent: 'group-hover:bg-purple-600',
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    desc: 'Scalable cloud architecture, migration services, and managed infrastructure on AWS, Azure & Google Cloud.',
    color: 'bg-cyan-50 text-cyan-600',
    accent: 'group-hover:bg-cyan-600',
  },
  {
    icon: Brain,
    title: 'Data Analytics & AI',
    desc: 'Turn raw data into actionable insights with ML models, dashboards, and AI-powered automation pipelines.',
    color: 'bg-orange-50 text-orange-600',
    accent: 'group-hover:bg-orange-600',
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    desc: 'Protect your digital assets with comprehensive security audits, threat detection, and compliance frameworks.',
    color: 'bg-red-50 text-red-600',
    accent: 'group-hover:bg-red-600',
  },
  {
    icon: Database,
    title: 'ERP & CRM Systems',
    desc: 'Streamline operations with integrated ERP and CRM platforms — custom-built or expertly configured.',
    color: 'bg-green-50 text-green-600',
    accent: 'group-hover:bg-green-600',
  },
  {
    icon: Users,
    title: 'IT Consulting',
    desc: 'Strategic technology guidance from seasoned experts to align your IT roadmap with business objectives.',
    color: 'bg-indigo-50 text-indigo-600',
    accent: 'group-hover:bg-indigo-600',
  },
  {
    icon: Zap,
    title: 'Digital Transformation',
    desc: 'End-to-end digital transformation programs that modernize legacy systems and redefine business processes.',
    color: 'bg-yellow-50 text-yellow-600',
    accent: 'group-hover:bg-yellow-600',
  },
];

export default function Services() {
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
    <section id="services" className="py-24 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <span className="section-tag">
            <span className="w-6 h-0.5 bg-crimson-600 inline-block" />
            What We Do
          </span>
          <h2 className="section-heading mb-4">
            Comprehensive Software Solutions for Modern Businesses
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            From strategy to deployment, we offer a full spectrum of technology services designed to help your business thrive in the digital era.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`animate-on-scroll group bg-white rounded-2xl p-6 border border-gray-100 cursor-pointer card-hover`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div
                className={`w-12 h-12 rounded-xl ${service.color} flex items-center justify-center mb-5 transition-all duration-300 ${service.accent} group-hover:text-white`}
              >
                <service.icon size={22} />
              </div>
              <h3 className="font-bold text-navy-900 mb-2 text-base leading-snug group-hover:text-crimson-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.desc}</p>
              <span className="inline-flex items-center gap-1 text-crimson-600 text-sm font-semibold opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-1 transition-all duration-200">
                Learn more <ArrowRight size={14} />
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 animate-on-scroll">
          <Link to="/services" className="btn-primary">
            Explore All Services
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
