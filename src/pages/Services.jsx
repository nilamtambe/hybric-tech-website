import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  Shield,
  Monitor,
  Network,
  Server,
  FileText,
  ChevronRight,
  ArrowRight,
  Play,
  Award,
  Users,
  Target,
  Zap,
  CheckCircle2,
} from "lucide-react";

const Services = () => {
  const coreServices = [
    {
      title: "Biometric Systems Setup",
      desc: "Advanced biometric setup for secure access control and attendance tracking.",
      icon: <Shield className="w-6 h-6" />,
      color: "bg-blue-600",
    },
    {
      title: "CCTV Installation",
      desc: "High-definition surveillance solutions with remote monitoring and high-definition recording.",
      icon: <Shield className="w-6 h-6" />,
      color: "bg-indigo-500",
    },
    {
      title: "PC Setup & Maintenance",
      desc: "Expert workstation setup and ongoing hardware maintenance for peak performance.",
      icon: <Monitor className="w-6 h-6" />,
      color: "bg-cyan-500",
    },
    {
      title: "Data Wiring",
      desc: "Professional structured cabling and network wiring for reliable connectivity.",
      icon: <Network className="w-6 h-6" />,
      color: "bg-violet-500",
    },
    {
      title: "Network & Server Setup",
      desc: "Robust server configuration and enterprise-grade network infrastructure.",
      icon: <Server className="w-6 h-6" />,
      color: "bg-emerald-500",
    },
    {
      title: "Annual Maintenance Contracts (AMC)",
      desc: "Annual Maintenance Contracts to ensure your systems are always up and running.",
      icon: <FileText className="w-6 h-6" />,
      color: "bg-orange-500",
    },
  ];

  const awards = [
    {
      title: "2025 Innovation Award",
      org: "Tech Excellence Forum",
      desc: "Recognized for outstanding digital infrastructure solutions.",
      image:
        "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&q=80&w=400",
    },
    {
      title: "Best Managed Services",
      org: "Global IT Awards",
      desc: "Winner of the most reliable AMC provider category.",
      image:
        "https://images.unsplash.com/photo-1579165466541-74e214958042?auto=format&fit=crop&q=80&w=400",
    },
    {
      title: "Security Partner of the Year",
      org: "CyberSafe Network",
      desc: "Awarded for excellence in CCTV and security implementation.",
      image:
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=400",
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-[72px]">
      {/* Hero Section - Light Modern Layout */}
      <section className="relative min-h-[700px] flex items-center overflow-hidden bg-white">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:40px_40px]" />
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/5 via-transparent to-brand-blue/10" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-flex items-center gap-2 text-brand-blue font-bold tracking-widest uppercase text-xs mb-6 bg-brand-blue/5 px-3 py-1">
                <Zap className="w-3 h-3" /> Digital Infrastructure
              </span>
              <h1 className="text-5xl md:text-7xl font-bold text-brand-dark mb-8 leading-[1.1]">
                Our Technology <br />
                <span className="text-brand-blue">Services</span>
              </h1>
              <p className="text-xl text-brand-dark/60 mb-10 leading-relaxed max-w-xl">
              Reliable IT infrastructure, security systems, and maintenance solutions for modern businesses, powering your digital transformation.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-primary px-10 py-4">
                  Get Started
                </Link>
                <Link
                  to="/services"
                  className="px-10 py-4 font-bold text-brand-dark border border-brand-dark/10 hover:bg-brand-dark/5 transition-colors"
                >
                  Our Portfolio
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                {
                  label: "Reliability",
                  value: "99.9%",
                  icon: <CheckCircle2 className="w-5 h-5" />,
                },
                {
                  label: "Security",
                  value: "24/7",
                  icon: <Shield className="w-5 h-5" />,
                },
                {
                  label: "Support",
                  value: "Expert",
                  icon: <Users className="w-5 h-5" />,
                },
                {
                  label: "Scale",
                  value: "Global",
                  icon: <Target className="w-5 h-5" />,
                },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-brand-gray/30 border border-black/5 p-8 hover:bg-brand-gray/50 transition-colors group"
                >
                  <div className="text-brand-blue mb-4 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-brand-dark mb-1">
                    {stat.value}
                  </div>
                  <div className="text-brand-dark/40 text-xs uppercase tracking-widest font-bold">
                    {stat.label}
                  </div>
                </div>
              ))}
              <Link
                to="/contact"
                className="col-span-2 bg-brand-dark p-8 flex items-center justify-between group cursor-pointer"
              >
                <div>
                  <div className="text-white font-bold text-xl mb-1">
                    Ready to Modernize?
                  </div>
                  <div className="text-white/70 text-sm">
                    Consult with our technical experts today.
                  </div>
                </div>
                <div className="w-12 h-12 bg-white/10 flex items-center justify-center group-hover:translate-x-2 transition-transform">
                  <ArrowRight className="text-white" />
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Catalyst Section - Dark Contrast */}
      <section className="py-24 bg-[#0a1118] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-64 h-64 bg-brand-blue rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-blue rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
              Services are catalysts for innovation and growth
            </h2>
            <p className="text-lg text-white/60 mb-0 leading-relaxed">
              Recent industry studies reveal how services power modernization
              and unlock the full potential of technology. 85% of IT leaders
              cite the need for external expertise to drive business process
              change.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What We Offer - Split Layout */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold mb-6">What we offer</h2>
                <p className="text-lg text-brand-dark/60 mb-8 leading-relaxed">
                  Services designed to simplify the technology landscape and
                  cover your entire ecosystem. Unmatched scale, highly-trained
                  services experts, flexible engagement, and industry-leading
                  partnerships set us apart.
                </p>
                <Link to="/services" className="btn-primary">
                  Learn More
                </Link>
              </motion.div>
            </div>
            <div className="w-full lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="shadow-2xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000"
                  alt="Team Collaboration"
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Credits - Dark Blue Block */}
      <section className="bg-[#001e3c] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-stretch">
          <div className="w-full lg:w-1/2 py-20 pr-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">Service Credits</h2>
              <p className="text-lg text-white/70 mb-10 leading-relaxed">
                Prefund services and gain access to a deep portfolio of
                expertise without the hassle of lengthy procurement processes.
                Maximize your budget efficiency and agility.
              </p>
              <Link to="/contact" className="btn-primary">
                Contact Us
              </Link>
            </motion.div>
          </div>
          <div className="w-full lg:w-1/2 relative min-h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1000"
              alt="Business Meeting"
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Core Services Grid */}
      <section className="py-24 bg-brand-gray/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Core Expertise</h2>
            <p className="text-brand-dark/60 max-w-2xl mx-auto">
              From security to infrastructure, we provide end-to-end technology
              services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreServices.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="premium-card group"
              >
                <div
                  className={`w-12 h-12 ${service.color} rounded-none flex items-center justify-center text-white mb-6 shadow-lg shadow-blue-500/20`}
                >
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-brand-blue transition-colors">
                  {service.title}
                </h3>
                <p className="text-brand-dark/60 leading-relaxed mb-6">
                  {service.desc}
                </p>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 text-sm font-bold text-brand-blue hover:gap-3 transition-all"
                >
                  Learn More <ChevronRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Stories - Modern Staggered Layout */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                Customer Stories
              </h2>
              <p className="text-brand-dark/60">
                Real-world impact across diverse industries and complex digital
                ecosystems.
              </p>
            </div>
            <Link to="/services" className="btn-secondary hidden md:block">
              View All Case Studies
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-8 relative group overflow-hidden h-[500px]"
            >
              <img
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1200"
                alt="Customer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-dark/40 group-hover:bg-brand-dark/20 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 p-10 text-white max-w-2xl">
                <span className="bg-brand-blue px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4 inline-block">
                  Infrastructure
                </span>
                <h3 className="text-3xl font-bold mb-4">
                  Smart City Urban Management
                </h3>
                <p className="text-white/80 text-lg mb-6">
                  "Advanced GenAI integration for real-time urban monitoring and
                  automated response systems."
                </p>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 font-bold hover:gap-4 transition-all"
                >
                  Read Case Study <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>

            <div className="md:col-span-4 flex flex-col gap-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-brand-gray/50 p-8 flex flex-col justify-between h-full border-l-4 border-brand-blue"
              >
                <div>
                  <h4 className="text-xl font-bold mb-4">
                    Global Logistics Corp
                  </h4>
                  <p className="text-brand-dark/60 italic mb-6">
                    "Hybric transformed our network infrastructure, reducing
                    downtime by 40% in the first quarter."
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-none flex items-center justify-center font-bold text-brand-blue shadow-sm">
                    GL
                  </div>
                  <div>
                    <p className="font-bold text-sm">Marcus Chen</p>
                    <p className="text-xs text-brand-dark/40">
                      CTO, Global Logistics
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-brand-dark p-8 text-white flex flex-col justify-between h-full"
              >
                <div>
                  <h4 className="text-xl font-bold mb-4">FinTech Solutions</h4>
                  <p className="text-white/60 italic mb-6">
                    "The security audit and CCTV implementation provided us with
                    the compliance we needed for our new HQ."
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-none flex items-center justify-center font-bold text-brand-blue">
                    FS
                  </div>
                  <div>
                    <p className="font-bold text-sm">Sarah Williams</p>
                    <p className="text-xs text-white/40">Operations Director</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section - Clean Minimalist Grid */}
      <section className="py-24 bg-brand-gray/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Awards</h2>
            <p className="text-brand-dark/60">
              Recognized for excellence in digital infrastructure and security.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-black/5 border border-black/5">
            {[
              {
                title: "Innovation Award",
                org: "Tech Forum 2025",
                icon: <Award className="w-8 h-8" />,
              },
              {
                title: "Best Managed Services",
                org: "IT Global",
                icon: <Zap className="w-8 h-8" />,
              },
              {
                title: "Security Partner",
                org: "CyberSafe",
                icon: <Shield className="w-8 h-8" />,
              },
              {
                title: "Excellence in AMC",
                org: "Service Awards",
                icon: <Target className="w-8 h-8" />,
              },
            ].map((award, idx) => (
              <motion.div
                key={award.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-10 flex flex-col items-center text-center hover:bg-brand-blue hover:text-white transition-colors duration-500 group"
              >
                <div className="text-brand-blue mb-6 group-hover:text-white transition-colors">
                  {award.icon}
                </div>
                <h3 className="font-bold mb-2">{award.title}</h3>
                <p className="text-xs uppercase tracking-widest opacity-60">
                  {award.org}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-brand-blue text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8">Ready to modernize?</h2>
          <p className="text-xl text-white/80 mb-12">
            Contact our services experts today to discuss how we can help you
            achieve your business goals.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              to="/contact"
              className="bg-white text-brand-blue px-8 py-4 font-bold hover:bg-brand-gray transition-colors"
            >
              Contact Us
            </Link>
            <Link
              to="/services"
              className="border-2 border-white px-8 py-4 font-bold hover:bg-white/10 transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
