import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Code2, Smartphone, Cloud, Brain, Shield, Database,
  Users, Zap, ArrowRight, CheckCircle2
} from 'lucide-react';
import PageHero from '../components/PageHero';
import Process from '../components/Process';
import Contact from '../components/Contact';

const services = [
  {
    slug: 'custom-software',
    icon: Code2,
    title: 'Custom Software Development',
    tagline: 'Built exactly for you. Not for everyone.',
    desc: 'We design and develop tailor-made software solutions from the ground up — web platforms, desktop applications, APIs, and backend systems that fit your exact workflow.',
    features: ['Full-stack development (React, Node, Python, Java, .NET)', 'Microservices & monolith architectures', 'REST & GraphQL APIs', 'Legacy modernization & migration', 'Performance optimization', 'Automated testing & CI/CD'],
    img: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'bg-blue-500',
  },
  {
    slug: 'web-mobile',
    icon: Smartphone,
    title: 'Web & Mobile Applications',
    tagline: 'Seamless experiences across every screen.',
    desc: 'From pixel-perfect web apps to cross-platform mobile solutions, we build products that users love using and businesses rely on every day.',
    features: ['React, Angular, Vue.js SPAs', 'React Native & Flutter mobile', 'Progressive Web Apps (PWA)', 'App Store & Google Play submission', 'Offline-first architectures', 'Push notifications & real-time sync'],
    img: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'bg-purple-500',
  },
  {
    slug: 'cloud-solutions',
    icon: Cloud,
    title: 'Cloud Solutions',
    tagline: 'Scale without limits. Pay for what you use.',
    desc: 'Cloud-native development, infrastructure automation, and seamless migration strategies to help you unlock the full potential of AWS, Azure, and Google Cloud.',
    features: ['Cloud architecture & design', 'AWS / Azure / GCP migrations', 'Kubernetes & Docker orchestration', 'Infrastructure as Code (Terraform)', 'Cost optimization & FinOps', 'Managed cloud operations'],
    img: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'bg-cyan-500',
  },
  {
    slug: 'data-ai',
    icon: Brain,
    title: 'Data Analytics & AI',
    tagline: 'Turn data into your competitive edge.',
    desc: 'We build machine learning pipelines, real-time analytics dashboards, and AI-powered automation tools that help you make smarter decisions faster.',
    features: ['Machine learning model development', 'Natural language processing (NLP)', 'Computer vision systems', 'Real-time data pipelines (Kafka, Spark)', 'Business intelligence dashboards', 'Predictive analytics & forecasting'],
    img: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'bg-orange-500',
  },
  {
    slug: 'cybersecurity',
    icon: Shield,
    title: 'Cybersecurity',
    tagline: 'Protect what you\'ve built.',
    desc: 'Comprehensive security services from penetration testing and vulnerability assessments to SOC 2 compliance readiness and ongoing security monitoring.',
    features: ['Penetration testing & red teaming', 'SOC 2 & ISO 27001 readiness', 'Security code review', 'Identity & access management', 'Incident response planning', 'Security awareness training'],
    img: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'bg-red-500',
  },
  {
    slug: 'erp-crm',
    icon: Database,
    title: 'ERP & CRM Systems',
    tagline: 'Streamline operations from end to end.',
    desc: 'Custom ERP and CRM platforms — or expert implementation of Salesforce, SAP, HubSpot, and other leading solutions — configured precisely for your workflows.',
    features: ['Custom ERP development', 'Salesforce & HubSpot implementation', 'SAP customization & integration', 'Workflow automation', 'Reporting & analytics modules', 'Multi-system data integration'],
    img: 'https://images.pexels.com/photos/6804068/pexels-photo-6804068.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'bg-green-500',
  },
  {
    slug: 'it-consulting',
    icon: Users,
    title: 'IT Consulting',
    tagline: 'Strategy that drives real execution.',
    desc: "Our senior architects and CTO-for-hire consultants help you build the right technology roadmap, evaluate vendors, and make architectural decisions you won't regret.",
    features: ['Technology roadmap development', 'Architecture review & design', 'Digital strategy consulting', 'Vendor evaluation & selection', 'CTO-as-a-Service', 'Due diligence for M&A tech reviews'],
    img: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'bg-indigo-500',
  },
  {
    slug: 'digital-transformation',
    icon: Zap,
    title: 'Digital Transformation',
    tagline: 'Modernize the way you work.',
    desc: 'End-to-end digital transformation programs that replace legacy systems, automate manual processes, and help your entire organization work smarter.',
    features: ['Legacy system modernization', 'Process automation (RPA)', 'Digital workplace solutions', 'Change management support', 'Employee training & adoption', 'KPI-driven transformation roadmaps'],
    img: 'https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'bg-yellow-500',
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

export default function ServicesPage() {
  const listRef = useRef<HTMLDivElement>(null);
  const techRef = useRef<HTMLDivElement>(null);
  useScrollAnim(listRef as React.RefObject<HTMLElement>);
  useScrollAnim(techRef as React.RefObject<HTMLElement>);

  return (
    <>
      <PageHero
        tag="Our Services"
        title="Full-Spectrum Software Services for Every Stage of Growth"
        subtitle="Whether you're launching an MVP, modernizing legacy infrastructure, or scaling to millions of users — we have the expertise to get you there."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Services' }]}
      />

      {/* Service cards */}
      <section className="py-24 bg-white" ref={listRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {services.map((s, i) => (
            <div
              key={s.slug}
              className={`animate-on-scroll grid lg:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className={i % 2 !== 0 ? 'lg:order-2' : ''}>
                <div className={`inline-flex items-center gap-2 ${s.color} text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-5`}>
                  <s.icon size={13} />
                  {s.title}
                </div>
                <h2 className="text-3xl font-bold text-navy-900 mb-2">{s.title}</h2>
                <p className="text-crimson-600 font-semibold mb-4 text-lg italic">"{s.tagline}"</p>
                <p className="text-gray-500 leading-relaxed mb-6">{s.desc}</p>
                <div className="grid sm:grid-cols-2 gap-2 mb-7">
                  {s.features.map((f) => (
                    <div key={f} className="flex items-start gap-2">
                      <CheckCircle2 size={15} className="text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{f}</span>
                    </div>
                  ))}
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5 text-sm"
                >
                  Discuss This Service <ArrowRight size={15} />
                </Link>
              </div>
              <div className={`rounded-3xl overflow-hidden shadow-2xl ${i % 2 !== 0 ? 'lg:order-1' : ''}`}>
                <img src={s.img} alt={s.title} className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tech stack */}
      <section className="py-20 bg-gray-50" ref={techRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-on-scroll">
            <span className="section-tag"><span className="w-6 h-0.5 bg-crimson-600 inline-block" />Technology Stack</span>
            <h2 className="section-heading mb-4">We Use the Best Tools for Every Job</h2>
            <p className="text-gray-500 text-lg">Our engineers stay current with the latest technologies to ensure your solution is future-proof.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              'React', 'TypeScript', 'Node.js', 'Python', 'Java', '.NET',
              'AWS', 'Azure', 'GCP', 'Kubernetes', 'PostgreSQL', 'MongoDB',
              'React Native', 'Flutter', 'GraphQL', 'Terraform', 'Redis', 'Kafka',
            ].map((tech, i) => (
              <div
                key={tech}
                className="animate-on-scroll bg-white border border-gray-100 rounded-xl py-4 px-3 text-center hover:border-navy-300 hover:shadow-md transition-all duration-200 cursor-default"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                <p className="font-semibold text-navy-900 text-sm">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Process />
      <Contact />
    </>
  );
}
