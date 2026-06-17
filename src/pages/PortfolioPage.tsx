import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';
import PageHero from '../components/PageHero';
import Contact from '../components/Contact';

const categories = ['All', 'Web App', 'Mobile', 'Cloud', 'AI & Data', 'Enterprise'];

const projects = [
  {
    title: 'HealthBridge Patient Portal',
    client: 'HealthBridge Inc.',
    category: 'Web App',
    industry: 'Healthcare',
    desc: 'A HIPAA-compliant patient management platform serving 500,000+ patients across 12 hospital networks. Integrated with Epic EHR via FHIR APIs.',
    impact: ['40% reduction in admin workload', '95% patient satisfaction score', '500K+ active users'],
    img: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800',
    tech: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
  },
  {
    title: 'FinVault Core Banking',
    client: 'FinVault Solutions',
    category: 'Enterprise',
    industry: 'Banking',
    desc: 'Complete core banking modernization from legacy COBOL to a cloud-native microservices architecture, handling $2B+ in daily transactions.',
    impact: ['99.99% uptime achieved', '60% faster transaction processing', '$2B+ daily volume'],
    img: 'https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg?auto=compress&cs=tinysrgb&w=800',
    tech: ['Java', 'Spring Boot', 'Kafka', 'Azure'],
  },
  {
    title: 'RetailMax Omnichannel Platform',
    client: 'RetailMax GmbH',
    category: 'Web App',
    industry: 'Retail',
    desc: 'A unified commerce platform connecting 200+ retail stores with a high-traffic e-commerce site and mobile app, all backed by real-time inventory sync.',
    impact: ['35% increase in online revenue', '200+ stores connected', '2M+ monthly visitors'],
    img: 'https://images.pexels.com/photos/5632379/pexels-photo-5632379.jpeg?auto=compress&cs=tinysrgb&w=800',
    tech: ['React', 'Next.js', 'Elasticsearch', 'GCP'],
  },
  {
    title: 'LogiFlow Route Optimizer',
    client: 'LogiFlow Express',
    category: 'AI & Data',
    industry: 'Logistics',
    desc: 'An ML-powered route optimization engine that processes 50,000+ daily deliveries, reducing fuel costs and improving on-time delivery rates dramatically.',
    impact: ['40% fuel cost reduction', '28% faster delivery times', '50K+ daily routes'],
    img: 'https://images.pexels.com/photos/1427107/pexels-photo-1427107.jpeg?auto=compress&cs=tinysrgb&w=800',
    tech: ['Python', 'TensorFlow', 'Redis', 'AWS'],
  },
  {
    title: 'EduReach Learning Platform',
    client: 'EduReach Platform',
    category: 'Web App',
    industry: 'Education',
    desc: 'A scalable LMS serving 50,000 concurrent students with live video, adaptive learning paths, AI-driven assessments, and real-time analytics for instructors.',
    impact: ['50K concurrent users', '92% course completion rate', '4.8/5 student rating'],
    img: 'https://images.pexels.com/photos/5212320/pexels-photo-5212320.jpeg?auto=compress&cs=tinysrgb&w=800',
    tech: ['React', 'WebRTC', 'Python', 'MongoDB'],
  },
  {
    title: 'ManufactX Smart Factory IoT',
    client: 'ManufactX Corp',
    category: 'Cloud',
    industry: 'Manufacturing',
    desc: 'End-to-end IoT platform connecting 1,200+ sensors across 4 production facilities, enabling predictive maintenance and real-time quality monitoring.',
    impact: ['$2.4M annual maintenance savings', '68% reduction in downtime', '1,200+ sensors connected'],
    img: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800',
    tech: ['Python', 'MQTT', 'TimescaleDB', 'Azure IoT'],
  },
  {
    title: 'SecurePay Mobile Wallet',
    client: 'SecurePay Inc.',
    category: 'Mobile',
    industry: 'FinTech',
    desc: 'A PCI-DSS Level 1 compliant mobile payment app with biometric authentication, instant peer-to-peer transfers, and integrated merchant QR payments.',
    impact: ['1M+ app downloads', '4.9 App Store rating', 'PCI-DSS Level 1 compliant'],
    img: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800',
    tech: ['React Native', 'Node.js', 'Stripe', 'AWS'],
  },
  {
    title: 'DataPulse Analytics Suite',
    client: 'DataPulse Analytics',
    category: 'AI & Data',
    industry: 'SaaS',
    desc: 'A self-serve business intelligence platform that lets non-technical users build dashboards, run cohort analyses, and get AI-generated insights from their data.',
    impact: ['300+ enterprise customers', '10M+ queries/day', '40% reduction in analyst workload'],
    img: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=800',
    tech: ['React', 'Python', 'ClickHouse', 'GCP'],
  },
  {
    title: 'UrbanGov Citizen Portal',
    client: 'City of Greenfield',
    category: 'Enterprise',
    industry: 'Government',
    desc: 'A unified digital portal replacing 14 separate government websites — enabling 400,000 residents to access permits, pay bills, and submit service requests online.',
    impact: ['80% reduction in in-person visits', '400K residents served', '$3.2M annual cost savings'],
    img: 'https://images.pexels.com/photos/2253832/pexels-photo-2253832.jpeg?auto=compress&cs=tinysrgb&w=800',
    tech: ['Vue.js', 'Python', 'PostgreSQL', 'AWS GovCloud'],
  },
];

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

export default function PortfolioPage() {
  const [active, setActive] = useState('All');
  const ref = useRef<HTMLDivElement>(null);
  useScrollAnim(ref as React.RefObject<HTMLElement>);

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <PageHero
        tag="Case Studies"
        title="Real Projects. Measurable Outcomes."
        subtitle="Every project we take on has a story of transformation behind it. Here are some of the ones we're most proud of."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Portfolio' }]}
      />

      <section className="py-24 bg-white" ref={ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  active === cat
                    ? 'bg-navy-900 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((project, i) => (
              <div
                key={project.title}
                className="animate-on-scroll group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                      {project.category}
                    </span>
                    <span className="bg-crimson-600/80 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                      {project.industry}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1">{project.client}</p>
                  <h3 className="font-bold text-navy-900 text-lg mb-2 group-hover:text-crimson-600 transition-colors">{project.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">{project.desc}</p>

                  {/* Impact */}
                  <div className="space-y-1.5 mb-5">
                    {project.impact.map((imp) => (
                      <div key={imp} className="flex items-center gap-2 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
                        <span className="text-gray-600 font-medium">{imp}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map((t) => (
                      <span key={t} className="bg-navy-50 text-navy-700 text-xs font-medium px-2 py-0.5 rounded">
                        {t}
                      </span>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 text-crimson-600 font-semibold text-sm hover:gap-2.5 transition-all"
                  >
                    Discuss Similar Project <ExternalLink size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-gray-500 mb-5">Want to see how we can deliver results for your business?</p>
            <Link to="/contact" className="btn-primary">
              Start a Conversation <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
}
