import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ServicesBar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const services = [
    "Biometric Systems",
    "CCTV Installation",
    "PC Setup",
    "Data Wiring",
    "Network & Server",
    "AMC Contracts"
  ];

  const handleServiceClick = (e) => {
    e.preventDefault();
    
    if (location.pathname !== '/') {
      navigate('/#services');
      return;
    }

    const element = document.getElementById('services');
    if (element) {
      const offset = 80; // Account for sticky navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-white/90 backdrop-blur-md border-b border-black/5 sticky top-[72px] z-40 hidden md:block shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-center gap-12 py-4 overflow-x-auto no-scrollbar">
          {services.map((service) => (
            <a
              key={service}
              href="#services"
              onClick={handleServiceClick}
              className="text-[11px] font-bold uppercase tracking-[0.15em] text-brand-dark/60 hover:text-brand-blue transition-colors whitespace-nowrap"
            >
              {service}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesBar;
