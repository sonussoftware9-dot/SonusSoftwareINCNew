import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import PageHero from '../components/PageHero';
import Contact from '../components/Contact';

const industries = [
  {
    title: 'Healthcare & Life Sciences',
    desc: 'HIPAA-compliant patient portals, EHR integrations, telemedicine platforms, clinical trial management, and medical device software — built to the highest safety standards.',
    solutions: ['Patient management systems', 'EHR/EMR integration (HL7, FHIR)', 'Telemedicine platforms', 'Clinical trial software', 'Medical billing & coding tools', 'Health data analytics'],
    img: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800',
    stat: '40+ healthcare clients',
  },
  {
    title: 'Banking & Financial Services',
    desc: 'PCI-DSS compliant fintech platforms, payment processing, core banking modernization, lending automation, and wealth management tools for banks, credit unions, and fintechs.',
    solutions: ['Core banking modernization', 'Payment gateway integration', 'Loan origination systems', 'Fraud detection & AML', 'Wealth management platforms', 'Open banking APIs'],
    img: 'https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg?auto=compress&cs=tinysrgb&w=800',
    stat: '35+ fintech clients',
  },
  {
    title: 'Retail & E-Commerce',
    desc: 'Omnichannel commerce platforms, inventory management, personalization engines, POS systems, and supply chain visibility tools that help retailers compete and grow.',
    solutions: ['Custom e-commerce platforms', 'Omnichannel POS systems', 'Inventory & warehouse management', 'Personalization & recommendation engines', 'Loyalty & rewards programs', 'Retail analytics dashboards'],
    img: 'https://images.pexels.com/photos/5632379/pexels-photo-5632379.jpeg?auto=compress&cs=tinysrgb&w=800',
    stat: '50+ retail clients',
  },
  {
    title: 'Manufacturing & Industry',
    desc: 'IoT-enabled factory floor systems, predictive maintenance, quality management, production planning, and ERP solutions for discrete and process manufacturers.',
    solutions: ['Manufacturing Execution Systems (MES)', 'IoT sensor integration', 'Predictive maintenance AI', 'Quality management systems', 'Production planning & scheduling', 'Supply chain visibility'],
    img: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800',
    stat: '30+ manufacturing clients',
  },
  {
    title: 'Education & Ed-Tech',
    desc: 'Learning management systems, virtual classrooms, student information systems, adaptive learning platforms, and institutional analytics for K-12, higher ed, and corporate training.',
    solutions: ['Learning Management Systems (LMS)', 'Virtual classroom platforms', 'Student Information Systems', 'Adaptive learning engines', 'Certification & credentialing tools', 'Education analytics'],
    img: 'https://images.pexels.com/photos/5212320/pexels-photo-5212320.jpeg?auto=compress&cs=tinysrgb&w=800',
    stat: '25+ education clients',
  },
  {
    title: 'Logistics & Supply Chain',
    desc: 'End-to-end supply chain visibility, route optimization, warehouse management, fleet tracking, and last-mile delivery solutions for logistics companies and shippers.',
    solutions: ['Transportation Management Systems', 'Warehouse management software', 'Real-time fleet tracking', 'Route optimization algorithms', 'Last-mile delivery apps', 'Customs & trade compliance tools'],
    img: 'https://images.pexels.com/photos/1427107/pexels-photo-1427107.jpeg?auto=compress&cs=tinysrgb&w=800',
    stat: '20+ logistics clients',
  },
  {
    title: 'Government & Public Sector',
    desc: 'FedRAMP-ready citizen-facing portals, case management systems, permitting software, and data sharing platforms that make government more efficient and accessible.',
    solutions: ['Citizen service portals', 'Case management systems', 'Permitting & licensing software', 'GIS & mapping applications', 'Public data platforms', 'E-government document workflows'],
    img: 'https://images.pexels.com/photos/2253832/pexels-photo-2253832.jpeg?auto=compress&cs=tinysrgb&w=800',
    stat: '15+ government contracts',
  },
  {
    title: 'Real Estate & PropTech',
    desc: 'Property listing platforms, tenant management systems, smart building software, and real estate analytics tools for developers, agents, and property managers.',
    solutions: ['Property listing & search platforms', 'Tenant & lease management', 'Smart building IoT integration', 'Real estate CRM systems', 'Investment analysis tools', 'Virtual tour technology'],
    img: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
    stat: '20+ real estate clients',
  },
];

function useScrollAnim(ref: React.RefObject<HTMLElement>) {
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
}

export default function IndustriesPage() {
  const gridRef = useRef<HTMLDivElement>(null);
  useScrollAnim(gridRef as React.RefObject<HTMLElement>);

  return (
    <>
      <PageHero
        tag="Industries"
        title="Deep Expertise Across the Sectors That Matter Most"
        subtitle="We don't just understand code — we understand your industry, its regulations, its workflows, and its competitive pressures."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Industries' }]}
      />

      <section className="py-24 bg-white" ref={gridRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {industries.map((ind, i) => (
            <div
              key={ind.title}
              className={`animate-on-scroll grid lg:grid-cols-5 gap-10 items-center bg-gray-50 rounded-3xl overflow-hidden border border-gray-100`}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className={`lg:col-span-2 h-72 lg:h-full ${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
                <img src={ind.img} alt={ind.title} className="w-full h-full object-cover" />
              </div>
              <div className={`lg:col-span-3 p-8 ${i % 2 !== 0 ? 'lg:order-1' : ''}`}>
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="text-2xl font-bold text-navy-900">{ind.title}</h2>
                  <span className="text-xs font-semibold bg-crimson-50 text-crimson-600 px-3 py-1 rounded-full">{ind.stat}</span>
                </div>
                <p className="text-gray-500 leading-relaxed mb-5">{ind.desc}</p>
                <div className="grid sm:grid-cols-2 gap-2 mb-6">
                  {ind.solutions.map((sol) => (
                    <div key={sol} className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{sol}</span>
                    </div>
                  ))}
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-white font-semibold px-5 py-2.5 rounded-lg transition-all duration-200 text-sm"
                >
                  Discuss Your Project <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Contact />
    </>
  );
}
