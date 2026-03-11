import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Shield, Users, Target, Award, CheckCircle2, ArrowRight } from 'lucide-react';
import ServicesBar from '../components/ServicesBar';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Dell-Inspired Split Hero */}
      <section className="relative pt-12 pb-20 md:pt-24 md:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-brand-gray/50 hidden lg:block" />
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-3 bg-brand-blue/10 text-brand-blue text-xs font-bold rounded-none mb-6 uppercase tracking-wider">
              Our Mission & Vision
            </span>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-8">
              About Us
            </h1>
            <p className="text-lg text-brand-dark/60 mb-10 max-w-lg leading-relaxed">
              We are a team of technology experts united under a single purpose: to drive human progress through the power of digital infrastructure.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#our-story" className="btn-primary flex items-center gap-2">
                Our Story <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#our-leadership" className="btn-secondary">Meet the Team</a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-none overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
                alt="Modern Office" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating Corner Image */}
            <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-none overflow-hidden shadow-2xl z-20 hidden md:block border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=400" 
                alt="Team working" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -top-6 -right-6 bg-white p-6 rounded-none shadow-xl z-20 hidden md:block border border-black/5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-none flex items-center justify-center">
                  <Users className="text-brand-blue w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-brand-dark/50 font-bold uppercase tracking-wider">Our Impact</p>
                  <p className="font-bold">500+ Global Clients</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Secondary Navigation */}
      <nav className="sticky top-[72px] z-40 bg-white border-b border-black/5 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <ul className="flex gap-12 py-4">
            {['Our Story', 'Our Values', 'Our Leadership'].map((item, idx) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className={`text-sm font-medium transition-colors ${idx === 0 ? 'text-brand-blue border-b-2 border-brand-blue pb-4' : 'text-brand-dark/60 hover:text-brand-blue'}`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Our Story Section - Balanced Grid Layout */}
      <section id="our-story" className="py-32 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-none overflow-hidden shadow-2xl relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" 
                  alt="Our Heritage" 
                  className="w-full h-[600px] object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Decorative element to fill space */}
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-blue/5 -z-0 hidden lg:block" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-brand-blue font-bold uppercase tracking-widest text-sm mb-4 block">Our Heritage</span>
              <h2 className="text-4xl lg:text-6xl font-bold mb-8 text-brand-dark leading-tight">The Hybric story: A decade of innovation</h2>
              <div className="space-y-6 text-lg text-brand-dark/70 leading-relaxed">
                <p>
                  Our story began with the unwavering belief that every business deserves access to the best technology. For over a decade, that idea has fueled Hybric Technology Digital Solutions into becoming a regional leader in digital infrastructure.
                </p>
                <p>
                  What started as a small team of passionate engineers has grown into a powerhouse of innovation, serving hundreds of clients across various industries. We don't just provide services; we build the foundations for future growth.
                </p>
              </div>
              <div className="mt-10">
                <a href="#our-story" className="inline-flex items-center gap-3 text-brand-blue font-bold group">
                  Explore our full timeline 
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section - Color Block Layout */}
      <section id="our-values" className="py-20 bg-brand-gray/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row-reverse items-stretch">
            {/* Image Side */}
            <div className="w-full lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000" 
                alt="Our Values" 
                className="w-full h-full object-cover min-h-[400px]"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Text Side - Premium Dark Navy Block */}
            <div className="w-full lg:w-1/2 bg-[#001e3c] p-12 lg:p-20 flex flex-col justify-center text-white">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl lg:text-5xl font-bold mb-8">Committed to people</h2>
                <p className="text-xl text-white/80 leading-relaxed mb-10">
                  We're committed to creating a productive and safe work environment that empowers team members every day. Our values are the foundation of everything we build.
                </p>
                <a href="#our-values" className="inline-flex items-center gap-2 text-white font-bold border-b border-white/30 pb-1 hover:border-white transition-all">
                  Learn About Our Values <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Reused from previous but styled cleaner */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { label: "Years Experience", value: "12+", icon: <Award className="w-6 h-6" /> },
              { label: "Happy Clients", value: "500+", icon: <Users className="w-6 h-6" /> },
              { label: "Projects Completed", value: "1.2k", icon: <Target className="w-6 h-6" /> },
              { label: "Security Experts", value: "25+", icon: <Shield className="w-6 h-6" /> }
            ].map((stat, idx) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="text-brand-blue mb-4">
                  {stat.icon}
                </div>
                <p className="text-4xl font-bold mb-2 text-brand-dark">{stat.value}</p>
                <p className="text-sm font-medium text-brand-dark/50 uppercase tracking-widest">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="our-leadership" className="py-24 bg-brand-dark text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8">Join our journey</h2>
          <p className="text-xl text-white/60 mb-12">
            We are always looking for passionate individuals and forward-thinking partners to join us in shaping the future of technology.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/contact" className="btn-primary">View Careers</Link>
            <Link to="/contact" className="btn-secondary text-white border-white/20 hover:bg-white/10">Partner with Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
