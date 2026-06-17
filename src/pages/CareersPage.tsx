import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Briefcase, Clock, ArrowRight, Heart, Zap, Globe2, BookOpen, Coffee, Laptop } from 'lucide-react';
import PageHero from '../components/PageHero';

const benefits = [
  { icon: Heart, title: 'Health & Wellness', desc: 'Comprehensive medical, dental, and vision coverage for you and your family.' },
  { icon: Globe2, title: 'Remote Friendly', desc: 'Work from anywhere — we operate across 6 offices and fully remotely worldwide.' },
  { icon: Zap, title: 'Latest Equipment', desc: '$3,000 home office setup budget and top-tier MacBook Pro or equivalent.' },
  { icon: BookOpen, title: 'Learning Budget', desc: '$2,500 annual budget for courses, conferences, certifications, and books.' },
  { icon: Coffee, title: 'Flexible Hours', desc: 'Core hours with flexible scheduling. We measure output, not clock time.' },
  { icon: Laptop, title: 'Stock Options', desc: 'Meaningful equity for all full-time employees — we grow together.' },
];

const departments = ['All', 'Engineering', 'Design', 'Product', 'Data & AI', 'DevOps', 'Sales', 'Operations'];

const jobs = [
  { title: 'Senior Full-Stack Engineer', dept: 'Engineering', location: 'Remote / New York', type: 'Full-time', level: 'Senior' },
  { title: 'Staff Backend Engineer (Node.js)', dept: 'Engineering', location: 'Remote / London', type: 'Full-time', level: 'Staff' },
  { title: 'Lead Frontend Engineer (React)', dept: 'Engineering', location: 'Remote', type: 'Full-time', level: 'Lead' },
  { title: 'iOS/Android Engineer (React Native)', dept: 'Engineering', location: 'Remote / Toronto', type: 'Full-time', level: 'Mid-Senior' },
  { title: 'DevOps / Platform Engineer', dept: 'DevOps', location: 'Remote', type: 'Full-time', level: 'Senior' },
  { title: 'Cloud Solutions Architect', dept: 'DevOps', location: 'Remote / New York', type: 'Full-time', level: 'Principal' },
  { title: 'Senior UX/UI Designer', dept: 'Design', location: 'Remote / London', type: 'Full-time', level: 'Senior' },
  { title: 'Product Design Lead', dept: 'Design', location: 'Remote', type: 'Full-time', level: 'Lead' },
  { title: 'Senior Product Manager', dept: 'Product', location: 'Remote / New York', type: 'Full-time', level: 'Senior' },
  { title: 'ML / AI Engineer', dept: 'Data & AI', location: 'Remote', type: 'Full-time', level: 'Senior' },
  { title: 'Data Engineer (Kafka/Spark)', dept: 'Data & AI', location: 'Remote / Hyderabad', type: 'Full-time', level: 'Mid-Senior' },
  { title: 'Account Executive (US Market)', dept: 'Sales', location: 'New York', type: 'Full-time', level: 'Senior' },
  { title: 'Technical Project Manager', dept: 'Operations', location: 'Remote', type: 'Full-time', level: 'Senior' },
];

function useScrollAnim(ref: React.RefObject<HTMLElement>) {
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
}

export default function CareersPage() {
  const [activeDept, setActiveDept] = useState('All');
  const benefitsRef = useRef<HTMLDivElement>(null);
  const jobsRef = useRef<HTMLDivElement>(null);
  const cultureRef = useRef<HTMLDivElement>(null);
  useScrollAnim(benefitsRef as React.RefObject<HTMLElement>);
  useScrollAnim(jobsRef as React.RefObject<HTMLElement>);
  useScrollAnim(cultureRef as React.RefObject<HTMLElement>);

  const filtered = activeDept === 'All' ? jobs : jobs.filter((j) => j.dept === activeDept);

  return (
    <>
      <PageHero
        tag="Careers"
        title="Join a Team That's Building the Future"
        subtitle="We're always looking for exceptional engineers, designers, and problem-solvers who want to do the best work of their careers."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Careers' }]}
      />

      {/* Culture section */}
      <section className="py-24 bg-white" ref={cultureRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-on-scroll-left">
              <span className="section-tag"><span className="w-6 h-0.5 bg-crimson-600 inline-block" />Our Culture</span>
              <h2 className="section-heading mb-6">Work That Matters, with People Who Care</h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-5">
                At Sonus, we hire adults and treat them like adults. No micromanagement. No unnecessary meetings. Just a group of talented people solving hard problems together.
              </p>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                We invest heavily in our engineers' growth — through education budgets, conference attendance, and a culture of regular knowledge sharing and code review.
              </p>
              <div className="flex gap-6">
                {[{ n: '150+', l: 'Team members' }, { n: '18', l: 'Countries represented' }, { n: '4.8', l: 'Glassdoor rating' }].map((s) => (
                  <div key={s.l}>
                    <p className="text-3xl font-black text-navy-900">{s.n}</p>
                    <p className="text-gray-400 text-sm">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-on-scroll-right grid grid-cols-2 gap-4">
              {[
                'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=500',
                'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=500',
                'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=500',
                'https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=500',
              ].map((img, i) => (
                <img key={i} src={img} alt="Team culture" className={`rounded-2xl w-full h-44 object-cover ${i % 2 !== 0 ? 'mt-6' : ''}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-gray-50" ref={benefitsRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 animate-on-scroll">
            <span className="section-tag"><span className="w-6 h-0.5 bg-crimson-600 inline-block" />Benefits</span>
            <h2 className="section-heading mb-4">What We Offer</h2>
            <p className="text-gray-500 text-lg">Competitive compensation plus perks designed for how people actually live and work today.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <div key={b.title} className="animate-on-scroll bg-white rounded-2xl p-7 border border-gray-100 hover:shadow-lg hover:border-navy-100 transition-all" style={{ transitionDelay: `${i * 70}ms` }}>
                <div className="w-12 h-12 rounded-xl bg-navy-50 flex items-center justify-center mb-5">
                  <b.icon size={22} className="text-navy-700" />
                </div>
                <h3 className="font-bold text-navy-900 mb-2">{b.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open positions */}
      <section className="py-24 bg-white" ref={jobsRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 animate-on-scroll">
            <span className="section-tag"><span className="w-6 h-0.5 bg-crimson-600 inline-block" />Open Positions</span>
            <h2 className="section-heading mb-4">Find Your Role at Sonus</h2>
            <p className="text-gray-500 text-lg">{jobs.length} open roles across engineering, design, product, and more.</p>
          </div>

          {/* Filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setActiveDept(dept)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${activeDept === dept ? 'bg-navy-900 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              >
                {dept}
              </button>
            ))}
          </div>

          <div className="space-y-3">
            {filtered.map((job, i) => (
              <div
                key={job.title}
                className="animate-on-scroll group flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-gray-50 hover:bg-navy-900 rounded-2xl p-5 border border-gray-100 hover:border-navy-700 transition-all duration-300 cursor-pointer"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                <div>
                  <h3 className="font-bold text-navy-900 group-hover:text-white transition-colors">{job.title}</h3>
                  <div className="flex flex-wrap items-center gap-3 mt-1.5">
                    <span className="flex items-center gap-1 text-gray-400 group-hover:text-white/50 text-xs transition-colors"><Briefcase size={12} />{job.dept}</span>
                    <span className="flex items-center gap-1 text-gray-400 group-hover:text-white/50 text-xs transition-colors"><MapPin size={12} />{job.location}</span>
                    <span className="flex items-center gap-1 text-gray-400 group-hover:text-white/50 text-xs transition-colors"><Clock size={12} />{job.type}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <span className="bg-blue-50 group-hover:bg-white/10 text-blue-700 group-hover:text-blue-300 text-xs font-semibold px-3 py-1 rounded-full transition-colors">{job.level}</span>
                  <Link
                    to="/contact"
                    className="flex items-center gap-1.5 bg-crimson-600 hover:bg-crimson-700 text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors"
                  >
                    Apply <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-navy-900 rounded-3xl p-8 text-center animate-on-scroll">
            <h3 className="text-2xl font-bold text-white mb-2">Don't see the right role?</h3>
            <p className="text-white/50 mb-6 max-w-lg mx-auto">We're always interested in exceptional talent. Send us your resume and tell us what you'd like to build.</p>
            <Link to="/contact" className="btn-primary">
              Send Your Resume <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
