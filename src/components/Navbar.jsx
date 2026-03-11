import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Cpu, Menu, X, Search, User } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const handleLinkClick = (e, href) => {
    if (href.startsWith('/#')) {
      if (location.pathname === '/') {
        e.preventDefault();
        const id = href.split('#')[1];
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-brand-blue rounded-none flex items-center justify-center">
            <Cpu className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-bold tracking-tight text-brand-dark">Hybric<span className="text-brand-blue">Tech</span></span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href} 
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`text-sm font-medium transition-colors ${
                location.pathname === link.href 
                  ? 'text-brand-blue' 
                  : 'text-brand-dark/70 hover:text-brand-blue'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center gap-6 ml-4 border-l border-black/5 pl-6">
            <button className="text-brand-dark/60 hover:text-brand-blue transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="text-brand-dark/60 hover:text-brand-blue transition-colors">
              <User className="w-5 h-5" />
            </button>
          </div>
          <Link to="/contact" className="btn-primary text-sm py-2 px-5 ml-2">Get a Quote</Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-brand-dark" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-black/5 p-6 md:hidden shadow-xl"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.href} 
                  className="text-lg font-medium"
                  onClick={(e) => {
                    handleLinkClick(e, link.href);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/contact" className="btn-primary w-full text-center">Get a Quote</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
