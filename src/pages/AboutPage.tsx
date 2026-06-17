import { useEffect, useRef } from 'react';
import { CheckCircle2, Award, Globe2, TrendingUp, Users2, Clock3 } from 'lucide-react';
import PageHero from '../components/PageHero';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

const timeline = [
  { year: '2009', title: 'Founded in New York', desc: 'Sonus Software Solutions Inc was born with a vision to democratize enterprise-grade software for growing businesses.' },
  { year: '2011', title: 'First Enterprise Contract', desc: 'Secured our first Fortune 500 client, a healthcare network, proving our model at scale.' },
  { year: '2014', title: 'Opened London Office', desc: 'Expanded to the UK to serve our growing European client base with dedicated local support.' },
  { year: '2016', title: 'Cloud Practice Launched', desc: 'Established a dedicated cloud division to help clients migrate and modernize on AWS, Azure & GCP.' },
  { year: '2018', title: 'AI & Data Division', desc: 'Built an in-house Data Science team, delivering ML-powered solutions across finance, health, and retail.' },
  { year: '2020', title: 'Global Expansion', desc: 'Opened offices in Toronto, Hyderabad, Sydney, and Dubai — enabling 24/7 delivery across time zones.' },
  { year: '2022', title: '200th Client Milestone', desc: 'Celebrated serving our 200th long-term client, a testament to our retention-first philosophy.' },
  { year: '2024', title: 'ISO 27001 Certified', desc: 'Achieved ISO 27001 information security certification, reinforcing our commitment to data protection.' },
];

const leaders = [
  {
    name: 'Arjun Mehta', role: 'Chief Executive Officer', bio: '20+ years in enterprise software. Previously SVP at Oracle. MIT Computer Science graduate.',
    img: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    name: 'Emily Carter', role: 'Chief Technology Officer', bio: 'Former engineering lead at Google Cloud. Specializes in distributed systems and AI infrastructure.',
    img: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    name: 'Raj Patel', role: 'VP of Engineering', bio: '13 years building fintech platforms. Led teams at JPMorgan Chase and Goldman Sachs tech divisions.',
    img: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    name: 'Sophie Williams', role: 'Chief Design Officer', bio: 'Award-winning UX leader with design systems experience across healthcare, retail, and SaaS verticals.',
    img: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    name: 'Marcus Johnson', role: 'VP of Client Success', bio: 'Passionate about building long-term client partnerships. 98% retention rate under his leadership.',
    img: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    name: 'Priya Nair', role: 'Head of AI & Data', bio: 'PhD in Machine Learning from Stanford. Leads our AI practice delivering production ML systems at scale.',
    img: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
];

const values = [
  { icon: Award, title: 'Excellence in Craft', desc: 'We hold every deliverable to the highest standard — clean code, intuitive design, bulletproof infrastructure.' },
  { icon: Users2, title: 'Client Partnership', desc: 'We embed ourselves in your team. Your goals become our goals. Your success is our success.' },
  { icon: Globe2, title: 'Global Mindset', desc: 'We think globally and act locally — understanding the cultural and regulatory nuances of each market we serve.' },
  { icon: TrendingUp, title: 'Continuous Growth', desc: 'We invest in R&D and skills development so our clients always have access to the most current technologies.' },
  { icon: Clock3, title: 'Reliable Delivery', desc: 'Deadlines are commitments, not estimates. Our disciplined delivery process makes on-time the norm.' },
  { icon: CheckCircle2, title: 'Ethical Practice', desc: 'Transparency, fair pricing, NDA protection, and honest advice — even when it means saying hard truths.' },
];

function useScrollAnimation(ref: React.RefObject<HTMLElement>) {
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
}

export default function AboutPage() {
  const missionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);

  useScrollAnimation(missionRef as React.RefObject<HTMLElement>);
  useScrollAnimation(timelineRef as React.RefObject<HTMLElement>);
  useScrollAnimation(teamRef as React.RefObject<HTMLElement>);
  useScrollAnimation(valuesRef as React.RefObject<HTMLElement>);

  return (
    <>
      <PageHero
        tag="Our Story"
        title="Building Software That Moves the World Forward"
        subtitle="For 13 years, Sonus has been the technology partner that growing businesses trust to turn ambitious ideas into production-ready software."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'About Us' }]}
      />

      {/* Mission */}
      <section className="py-24 bg-white" ref={missionRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-on-scroll-left">
              <span className="section-tag">
                <span className="w-6 h-0.5 bg-crimson-600 inline-block" />
                Our Mission
              </span>
              <h2 className="section-heading mb-6">
                We Exist to Make Technology Work for You
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-6">
                Too many businesses struggle with software that was built for someone else — off-the-shelf tools that almost fit, expensive platforms that require years of customization, and contractors who disappear after launch.
              </p>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                Sonus was founded to change that. We build technology precisely matched to your business, delivered by a team that stays accountable long after go-live.
              </p>
              <div className="grid grid-cols-3 gap-6">
                {[
                  { n: '500+', l: 'Projects' },
                  { n: '15+', l: 'Years' },
                  { n: '98%', l: 'Retention' },
                ].map((s) => (
                  <div key={s.l} className="text-center">
                    <p className="text-3xl font-black text-navy-900">{s.n}</p>
                    <p className="text-gray-400 text-sm font-medium">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-on-scroll-right grid grid-cols-2 gap-4">
              <img src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=500" alt="Team collaboration" className="rounded-2xl w-full h-52 object-cover" />
              <img src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=500" alt="Office whiteboard" className="rounded-2xl w-full h-52 object-cover mt-8" />
              <img src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=500" alt="Developer working" className="rounded-2xl w-full h-52 object-cover" />
              <img src="https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=500" alt="Team meeting" className="rounded-2xl w-full h-52 object-cover mt-8" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gray-50" ref={valuesRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 animate-on-scroll">
            <span className="section-tag"><span className="w-6 h-0.5 bg-crimson-600 inline-block" />Our Values</span>
            <h2 className="section-heading mb-4">The Principles We Work By</h2>
            <p className="text-gray-500 text-lg">These aren't posters on a wall — they're the standards we hold each other to every day.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <div key={v.title} className="animate-on-scroll bg-white rounded-2xl p-7 border border-gray-100 group hover:border-navy-200 hover:shadow-lg transition-all duration-300" style={{ transitionDelay: `${i * 70}ms` }}>
                <div className="w-12 h-12 rounded-xl bg-navy-50 group-hover:bg-navy-900 flex items-center justify-center mb-5 transition-colors duration-300">
                  <v.icon size={22} className="text-navy-700 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-bold text-navy-900 mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-navy-900 overflow-hidden" ref={timelineRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <span className="inline-flex items-center gap-2 text-blue-400 font-semibold text-sm uppercase tracking-widest mb-4"><span className="w-6 h-0.5 bg-blue-400 inline-block" />Our Journey</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">13 Years of Building Excellence</h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">Every milestone on this timeline represents real people solving real challenges.</p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-white/10 transform -translate-x-1/2 hidden lg:block" />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <div
                  key={item.year}
                  className={`animate-on-scroll relative flex items-start gap-8 ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? 'lg:text-right' : ''}`}>
                    <div className={`inline-block bg-white/5 border border-white/10 rounded-2xl p-6 ${i % 2 === 0 ? '' : ''}`}>
                      <span className="text-crimson-400 font-black text-lg">{item.year}</span>
                      <h3 className="text-white font-bold mt-1 mb-2">{item.title}</h3>
                      <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                  <div className="hidden lg:flex w-8 h-8 rounded-full bg-crimson-600 border-4 border-navy-900 flex-shrink-0 mt-6 z-10 items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>
                  <div className="flex-1 hidden lg:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      {/* <section className="py-24 bg-white" ref={teamRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 animate-on-scroll">
            <span className="section-tag"><span className="w-6 h-0.5 bg-crimson-600 inline-block" />Leadership</span>
            <h2 className="section-heading mb-4">Meet the Team Behind Sonus</h2>
            <p className="text-gray-500 text-lg">Seasoned leaders who have built and scaled technology across every major industry.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {leaders.map((l, i) => (
              <div key={l.name} className="animate-on-scroll group text-center" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="relative mx-auto w-32 h-32 mb-5">
                  <img src={l.img} alt={l.name} className="w-full h-full rounded-2xl object-cover shadow-lg group-hover:shadow-xl transition-shadow" />
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-crimson-600 transition-colors duration-300" />
                </div>
                <h3 className="font-bold text-navy-900 text-base mb-0.5">{l.name}</h3>
                <p className="text-crimson-600 text-sm font-semibold mb-3">{l.role}</p>
                <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">{l.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <Testimonials />
      <Contact />
    </>
  );
}
