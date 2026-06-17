import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, User, Tag, ArrowRight } from 'lucide-react';
import PageHero from '../components/PageHero';

const tags = ['All', 'Software Development', 'Cloud', 'AI & ML', 'Cybersecurity', 'Digital Transformation', 'Career'];

const posts = [
  {
    title: 'How We Cut a Healthcare Client\'s AWS Bill by 52% Without Sacrificing Performance',
    excerpt: 'A detailed breakdown of the cloud cost optimization strategies we applied to a mid-sized hospital network — from rightsizing EC2 instances to implementing intelligent tiering on S3.',
    author: 'Emily Carter',
    date: 'June 12, 2026',
    readTime: '8 min read',
    tag: 'Cloud',
    featured: true,
    img: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Building Production-Ready RAG Systems: Lessons from 3 Enterprise Deployments',
    excerpt: 'Retrieval-Augmented Generation is everywhere. But getting it production-ready — with accurate retrieval, latency within SLA, and hallucination mitigation — is hard. Here\'s what we learned.',
    author: 'Priya Nair',
    date: 'May 28, 2026',
    readTime: '12 min read',
    tag: 'AI & ML',
    featured: true,
    img: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Why We Moved from REST to GraphQL for a FinTech Client (and What We\'d Do Differently)',
    excerpt: 'A candid retrospective on migrating a complex banking API from REST to GraphQL — the wins, the surprises, and the two things we\'d approach differently if we did it again.',
    author: 'Raj Patel',
    date: 'May 15, 2026',
    readTime: '10 min read',
    tag: 'Software Development',
    featured: false,
    img: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'The 5 Security Mistakes We See in Every Legacy Codebase',
    excerpt: 'After hundreds of security audits, certain vulnerabilities appear again and again. Here are the five most common — and how to fix them before they become incidents.',
    author: 'Marcus Johnson',
    date: 'April 30, 2026',
    readTime: '7 min read',
    tag: 'Cybersecurity',
    featured: false,
    img: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Digital Transformation That Actually Sticks: A Framework for Change Management',
    excerpt: 'Most digital transformation initiatives fail not because of technology, but because of people. Here\'s the change management framework we\'ve refined across 30+ enterprise transformations.',
    author: 'Arjun Mehta',
    date: 'April 18, 2026',
    readTime: '9 min read',
    tag: 'Digital Transformation',
    featured: false,
    img: 'https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'React vs Vue vs Angular in 2026: An Honest Assessment for Enterprise Projects',
    excerpt: 'We\'ve built large enterprise applications in all three frameworks. Here\'s an updated assessment of where each shines, where each struggles, and how we make the decision for new projects.',
    author: 'Emily Carter',
    date: 'April 5, 2026',
    readTime: '11 min read',
    tag: 'Software Development',
    featured: false,
    img: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'How to Evaluate a Software Development Partner: 12 Questions to Ask',
    excerpt: 'Choosing the wrong development partner is expensive. Here are the 12 questions we\'d ask if we were evaluating a firm — including some that most vendors won\'t be prepared for.',
    author: 'Marcus Johnson',
    date: 'March 22, 2026',
    readTime: '6 min read',
    tag: 'Career',
    featured: false,
    img: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Kubernetes at Scale: Lessons from Operating 200+ Microservices in Production',
    excerpt: 'After running large Kubernetes clusters in production for 5+ years, here are the non-obvious lessons that have saved us from costly outages and performance bottlenecks.',
    author: 'Raj Patel',
    date: 'March 10, 2026',
    readTime: '14 min read',
    tag: 'Cloud',
    featured: false,
    img: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
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

export default function BlogPage() {
  const [activeTag, setActiveTag] = useState('All');
  const ref = useRef<HTMLDivElement>(null);
  useScrollAnim(ref as React.RefObject<HTMLElement>);

  const featured = posts.filter((p) => p.featured);
  const filtered = activeTag === 'All'
    ? posts.filter((p) => !p.featured)
    : posts.filter((p) => p.tag === activeTag && !p.featured);

  return (
    <>
      <PageHero
        tag="Insights & Resources"
        title="From the Sonus Engineering Blog"
        subtitle="Technical deep-dives, industry perspectives, and practical guides from the engineers and architects building software every day."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Blog' }]}
      />

      <section className="py-24 bg-white" ref={ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured posts */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {featured.map((post, i) => (
              <div key={post.title} className="animate-on-scroll group rounded-3xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="relative h-60 overflow-hidden">
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 to-transparent" />
                  <span className="absolute top-4 left-4 bg-crimson-600 text-white text-xs font-bold px-3 py-1 rounded-full">Featured</span>
                </div>
                <div className="p-7">
                  <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-full mb-4">
                    <Tag size={10} /> {post.tag}
                  </span>
                  <h2 className="text-xl font-bold text-navy-900 mb-3 leading-tight group-hover:text-crimson-600 transition-colors">{post.title}</h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-gray-400 text-xs">
                      <span className="flex items-center gap-1"><User size={12} />{post.author}</span>
                      <span className="flex items-center gap-1"><Clock size={12} />{post.readTime}</span>
                    </div>
                    <span className="flex items-center gap-1.5 text-crimson-600 font-semibold text-sm group-hover:gap-2.5 transition-all">
                      Read <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${activeTag === tag ? 'bg-navy-900 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Post grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post, i) => (
              <div key={post.title} className="animate-on-scroll group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1" style={{ transitionDelay: `${i * 60}ms` }}>
                <div className="h-44 overflow-hidden">
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <span className="inline-flex items-center gap-1.5 bg-gray-100 text-gray-600 text-xs font-semibold px-2.5 py-1 rounded-full mb-3">
                    <Tag size={10} /> {post.tag}
                  </span>
                  <h3 className="font-bold text-navy-900 text-base mb-2 leading-snug group-hover:text-crimson-600 transition-colors line-clamp-2">{post.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span className="flex items-center gap-1"><User size={11} />{post.author}</span>
                    <span className="flex items-center gap-1"><Clock size={11} />{post.readTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link to="/contact" className="btn-primary">
              Subscribe to Our Newsletter <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
