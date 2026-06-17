import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import logo from '../assets/Sonus.png'; // Adjust the path to your logo

const services = [
  { label: 'Custom Software Development', href: '/services' },
  { label: 'Web & Mobile Applications', href: '/services' },
  { label: 'Cloud Solutions', href: '/services' },
  { label: 'IT Consulting', href: '/services' },
  { label: 'Data Analytics & AI', href: '/services' },
  { label: 'Cybersecurity', href: '/services' },
  { label: 'ERP & CRM Systems', href: '/services' },
  { label: 'Digital Transformation', href: '/services' },
];

const industries = [
  { label: 'Healthcare & Life Sciences', href: '/industries' },
  { label: 'Banking & Finance', href: '/industries' },
  { label: 'Retail & E-Commerce', href: '/industries' },
  { label: 'Manufacturing', href: '/industries' },
  { label: 'Education & Ed-Tech', href: '/industries' },
  { label: 'Logistics & Supply Chain', href: '/industries' },
  { label: 'Government & Public Sector', href: '/industries' },
  { label: 'Real Estate & Construction', href: '/industries' },
];

const portfolio = [
  { label: 'Case Studies', href: '/portfolio' },
  { label: 'Client Testimonials', href: '/testimonials' },
];

type NavLink = { label: string; href?: string; dropdown?: { label: string; href: string }[] };

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const isHomePage = location.pathname === '/';

  const navLinks: NavLink[] = [
    { label: 'About', href: '/about' },
    { label: 'Services', dropdown: services },
    { label: 'Industries', dropdown: industries },
    { label: 'Portfolio', dropdown: portfolio },
    { label: 'Blog', href: '/blog' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/contact' },
  ];

  const isActive = (href?: string) => href && location.pathname === href;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !isHomePage
          ? 'bg-navy-900 shadow-2xl py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            {/* <SonusLogo variant="light" className="h-12 w-auto" /> */}
            <img src={logo} alt="Sonus Logo" className="h-12 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="flex items-center gap-1 text-white/90 hover:text-white font-medium px-3 py-2 rounded-lg hover:bg-white/10 transition-all duration-150 text-sm">
                    {link.label}
                    <ChevronDown
                      size={13}
                      className={`transition-transform duration-200 ${activeDropdown === link.label ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {activeDropdown === link.label && (
                    <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden">
                      <div className="py-2">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.label}
                            to={item.href}
                            className="block px-4 py-2.5 text-sm text-navy-900 hover:bg-navy-50 hover:text-crimson-600 transition-colors font-medium"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  to={link.href!}
                  className={`font-medium px-3 py-2 rounded-lg transition-all duration-150 text-sm ${
                    isActive(link.href)
                      ? 'text-white bg-white/15'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+18017703133"
              className="hidden xl:flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium transition-colors"
            >
              <Phone size={14} />
              +1-801-770-3133
            </a>
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center bg-crimson-600 hover:bg-crimson-700 text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-all duration-200 shadow-lg hover:-translate-y-0.5"
            >
              Get a Quote
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden mt-3 bg-navy-900/98 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
            <div className="p-4 space-y-1">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div key={link.label}>
                    <button
                      onClick={() =>
                        setActiveDropdown(activeDropdown === link.label ? null : link.label)
                      }
                      className="flex items-center justify-between w-full text-white/90 font-semibold px-4 py-3 rounded-lg hover:bg-white/10 transition-colors text-sm"
                    >
                      {link.label}
                      <ChevronDown
                        size={14}
                        className={`transition-transform ${activeDropdown === link.label ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {activeDropdown === link.label && (
                      <div className="ml-4 mt-1 space-y-1 border-l-2 border-crimson-600/50 pl-3">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.label}
                            to={item.href}
                            className="block text-white/70 hover:text-white text-sm py-2 px-2 hover:bg-white/5 rounded transition-colors"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    to={link.href!}
                    className={`block font-semibold px-4 py-3 rounded-lg transition-colors text-sm ${
                      isActive(link.href)
                        ? 'bg-white/15 text-white'
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              )}
              <div className="pt-2 border-t border-white/10">
                <Link
                  to="/contact"
                  className="block text-center bg-crimson-600 hover:bg-crimson-700 text-white font-semibold px-5 py-3 rounded-lg transition-colors text-sm"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
