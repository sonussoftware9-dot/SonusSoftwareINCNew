import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Facebook, Github, Mail, ArrowRight, Phone, MapPin } from 'lucide-react';
import logo from '../assets/Sonus.png'; // Adjust the path to your logo

const footerLinks = {
  Services: [
    { label: 'Custom Software Development', href: '/services' },
    { label: 'Web & Mobile Applications', href: '/services' },
    { label: 'Cloud Solutions', href: '/services' },
    { label: 'Data Analytics & AI', href: '/services' },
    { label: 'Cybersecurity', href: '/services' },
    { label: 'ERP & CRM Systems', href: '/services' },
  ],
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Leadership Team', href: '/about' },
    { label: 'Careers', href: '/careers' },
    { label: 'Blog & Insights', href: '/blog' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'FAQ', href: '/faq' },
  ],
  Industries: [
    { label: 'Healthcare', href: '/industries' },
    { label: 'Banking & Finance', href: '/industries' },
    { label: 'Retail & E-Commerce', href: '/industries' },
    { label: 'Manufacturing', href: '/industries' },
    { label: 'Education', href: '/industries' },
    { label: 'Logistics', href: '/industries' },
  ],
  Portfolio: [
    { label: 'Case Studies', href: '/portfolio' },
    { label: 'Testimonials', href: '/testimonials' },
    { label: 'Our Process', href: '/#process' },
    { label: 'Privacy Policy', href: '/contact' },
    { label: 'Terms of Service', href: '/contact' },
    { label: 'Sitemap', href: '/contact' },
  ],
};

const socials = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Github, href: '#', label: 'GitHub' },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      {/* Newsletter bar */}
      <div className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-bold text-white mb-1">Stay ahead of the curve</h3>
              <p className="text-white/40 text-sm">Get tech insights and company news delivered monthly.</p>
            </div>
            <div className="flex w-full sm:w-auto gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 sm:w-72 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-blue-500 text-sm"
              />
              <button className="bg-crimson-600 hover:bg-crimson-700 text-white px-5 py-3 rounded-xl transition-colors flex items-center gap-1.5 text-sm font-semibold flex-shrink-0">
                Subscribe <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-6 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link to="/">
              <img src={logo} alt="Sonus Logo" className="h-10 w-auto mb-4" />
            </Link>
            <p className="text-white/40 text-sm leading-relaxed mb-6 max-w-xs">
              Delivering enterprise-grade software solutions that power growth for 200+ businesses across 13+ countries since 2013.
            </p>
            <div className="flex gap-3 mb-6">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all duration-200"
                >
                  <s.icon size={15} />
                </a>
              ))}
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-white/40 text-sm">
                <Mail size={13} />
                <a href="mailto:info@sonussoftwareinc.com" className="hover:text-white transition-colors">
                  info@sonussoftwareinc.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-white/40 text-sm">
                <Phone size={13} />
                <a href="tel:+18017703133" className="hover:text-white transition-colors">
                  +1-801-770-3133
                </a>
              </div>
              <div className="flex items-start gap-2 text-white/40 text-sm">
                <MapPin size={13} className="mt-0.5 flex-shrink-0" />
                <span>504 W 800 N, Orem<br/> UT 84057, United States of America</span>
              </div>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-white font-semibold text-sm mb-5">{heading}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-white/40 hover:text-white text-sm transition-colors leading-none"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} Sonus Software Solutions Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {[
              { label: 'Privacy Policy', href: '/contact' },
              { label: 'Terms of Service', href: '/contact' },
              { label: 'Cookie Policy', href: '/contact' },
            ].map((item) => (
              <Link key={item.label} to={item.href} className="text-white/30 hover:text-white text-xs transition-colors">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
