import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="pt-24 pb-12 bg-brand-gray/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-brand-blue rounded flex items-center justify-center">
                <Cpu className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight">Hybric<span className="text-brand-blue">Tech</span></span>
            </div>
            <p className="text-sm text-brand-dark/60 leading-relaxed mb-6">
              Professional IT infrastructure and digital security solutions provider serving the Mumbai Metropolitan Region.
            </p>
            <div className="flex gap-4">
              <a href="mailto:info@hybrictech.com" className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:text-brand-blue cursor-pointer transition-colors">
                <Mail className="w-4 h-4" />
              </a>
              <a href="tel:+919876543210" className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:text-brand-blue cursor-pointer transition-colors">
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-brand-dark/60">
              <li><Link to="/about" className="hover:text-brand-blue transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-brand-blue transition-colors">Our Services</Link></li>
              <li><Link to="/support" className="hover:text-brand-blue transition-colors">Support Hub</Link></li>
              <li><Link to="/contact" className="hover:text-brand-blue transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-brand-dark/60">
              <li><Link to="/services" className="hover:text-brand-blue transition-colors">Biometric Systems Setup</Link></li>
              <li><Link to="/services" className="hover:text-brand-blue transition-colors">CCTV Installation</Link></li>
              <li><Link to="/services" className="hover:text-brand-blue transition-colors">Network & Server Setup</Link></li>
              <li><Link to="/services" className="hover:text-brand-blue transition-colors">AMC Contracts</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Stay Updated</h4>
            <p className="text-xs text-brand-dark/40 mb-6 leading-relaxed">
              Subscribe to get the latest news on technology and security solutions.
            </p>
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full px-4 py-3 bg-white border border-black/5 text-xs outline-none focus:border-brand-blue transition-all"
              />
              <button className="w-full bg-brand-blue text-white py-3 text-[10px] font-bold tracking-widest uppercase hover:bg-blue-700 transition-all">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-brand-dark/40 font-medium">
            © 2026 Hybric Technology Digital Solutions. All rights reserved.
          </p>
          <div className="flex gap-8 text-xs text-brand-dark/40 font-medium">
            <Link to="/privacy" className="hover:text-brand-dark transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-brand-dark transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
