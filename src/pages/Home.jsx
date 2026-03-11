import React from "react";
import { motion } from "motion/react";
import ServicesBar from "../components/ServicesBar";
import { Link } from "react-router-dom";
import {
  Shield,
  Camera,
  Monitor,
  Network,
  Server,
  FileText,
  ChevronRight,
  MapPin,
  ArrowRight,
  CheckCircle2,
  Clock,
  Award,
  Zap,
  Users,
  Phone,
  Mail,
} from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-12 pb-20 md:pt-24 md:pb-32 overflow-hidden">
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-brand-gray/50 hidden lg:block" />
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block py-1 px-3 bg-brand-blue/10 text-brand-blue text-xs font-bold rounded-none mb-6 uppercase tracking-wider">
            Digital Infrastructure Excellence
          </span>
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-8">
            Smart Systems <br />
            <span className="text-brand-blue">& Proven Security</span>
          </h1>
          <p className="text-lg text-brand-dark/60 mb-10 max-w-lg leading-relaxed">
            Hybric Technology Digital Solutions provides premium IT
            infrastructure, security systems, and maintenance services tailored
            for modern businesses.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/services"
              className="btn-primary flex items-center gap-2"
            >
              Explore Services <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/contact" className="btn-secondary">
              Contact Support
            </Link>
          </div>

          {/* <div className="mt-12 flex items-center gap-8 grayscale opacity-50">
            <div className="font-bold text-xl tracking-widest">HP</div>
            <div className="font-bold text-xl tracking-widest">DELL</div>
            <div className="font-bold text-xl tracking-widest">CISCO</div>
          </div> */}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 rounded-none overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000"
              alt="Server Room"
              className="w-full h-auto"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-none shadow-xl z-20 hidden md:block border border-black/5">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle2 className="text-green-600 w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-brand-dark/50 font-bold uppercase tracking-wider">
                  System Status
                </p>
                <p className="font-bold">All Systems Operational</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Biometric Systems Setup",
      desc: "Advanced biometric setup for secure access control and attendance tracking.",
      icon: <Shield className="w-6 h-6" />,
      color: "bg-blue-500",
    },
    {
      title: "CCTV Installation",
      desc: "High-definition surveillance solutions for comprehensive security monitoring.",
      icon: <Camera className="w-6 h-6" />,
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

  return (
    <section id="services" className="py-24 bg-brand-gray/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Core Services</h2>
          <p className="text-brand-dark/60 max-w-2xl mx-auto">
            Comprehensive technology solutions designed to secure and optimize
            your business infrastructure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
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
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm font-bold text-brand-blue hover:gap-3 transition-all"
              >
                Learn More <ChevronRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SupportSection = () => {
  return (
    <section id="support" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4 pt-12">
              <div className="rounded-none overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=500"
                  alt="Support"
                  className="w-full h-64 object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="bg-brand-blue p-8 rounded-none text-white">
                <Users className="w-8 h-8 mb-4" />
                <h4 className="text-xl font-bold mb-2">Manpower Support</h4>
                <p className="text-white/80 text-sm">
                  Expert technicians at your service.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-brand-dark p-8 rounded-none text-white">
                <Monitor className="w-8 h-8 mb-4" />
                <h4 className="text-xl font-bold mb-2">Software Support</h4>
                <p className="text-white/80 text-sm">
                  Comprehensive software troubleshooting.
                </p>
              </div>
              <div className="rounded-none overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=500"
                  alt="Hardware"
                  className="w-full h-64 object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Additional Support & Offerings
            </h2>
            <p className="text-brand-dark/60 mb-8 leading-relaxed">
              Beyond core infrastructure, we provide end-to-end support to
              ensure your business operations never face a technical hurdle.
            </p>

            <div className="space-y-6">
              {[
                {
                  title: "Ground & Software Support",
                  desc: "On-site assistance and remote software management.",
                },
                {
                  title: "Manpower Service Support",
                  desc: "Dedicated technical staff for long-term projects.",
                },
                {
                  title: "Custom IT Solutions",
                  desc: "Tailored strategies for your unique business needs.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-blue/10 flex items-center justify-center mt-1">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">{item.title}</h4>
                    <p className="text-sm text-brand-dark/60">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/services">
              <button className="btn-primary mt-10">
                Get Full Service List
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Expert Technicians",
      desc: "Our team consists of certified professionals with years of experience in IT infrastructure.",
      icon: <Award className="w-6 h-6 text-brand-blue" />,
    },
    {
      title: "24/7 Support",
      desc: "We provide round-the-clock technical support to ensure your business never stops.",
      icon: <Clock className="w-6 h-6 text-brand-blue" />,
    },
    {
      title: "Quick Response",
      desc: "We value your time and guarantee rapid response for all critical technical issues.",
      icon: <Zap className="w-6 h-6 text-brand-blue" />,
    },
    {
      title: "Quality Assurance",
      desc: "We use only premium hardware and follow industry best practices for all installations.",
      icon: <Shield className="w-6 h-6 text-brand-blue" />,
    },
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Why choose us</h2>
            <p className="text-brand-dark/60 mb-10 leading-relaxed">
              We don't just provide services; we build long-term partnerships.
              Our commitment to excellence and customer satisfaction sets us
              apart in the digital solutions landscape.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              {reasons.map((reason) => (
                <div key={reason.title}>
                  <div className="w-12 h-12 bg-brand-blue/10 rounded-none flex items-center justify-center mb-4">
                    {reason.icon}
                  </div>
                  <h4 className="font-bold mb-2">{reason.title}</h4>
                  <p className="text-sm text-brand-dark/60 leading-relaxed">
                    {reason.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-none overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1000"
                alt="Team working"
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-6 -right-6 bg-white p-6 rounded-none shadow-xl border border-black/5 hidden md:block">
              <p className="text-3xl font-bold text-brand-blue">100%</p>
              <p className="text-xs font-bold text-brand-dark/50 uppercase tracking-widest">
                Client Satisfaction
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Areas = () => {
  const areas = [
    { name: "Mumbai", status: "Full Coverage" },
    { name: "Thane", status: "Full Coverage" },
    { name: "Navi Mumbai (Limited)", status: "Limited Coverage" },
    { name: "Main Western Line", status: "Main Line Coverage" },
  ];

  return (
    <section
      id="areas"
      className="py-24 bg-brand-dark text-white overflow-hidden relative"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/20 blur-[120px] rounded-full -mr-48 -mt-48" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Service Areas Covered</h2>
            <p className="text-white/60 mb-10 leading-relaxed max-w-lg">
              We are strategically positioned to serve the major commercial and
              residential hubs across the Mumbai Metropolitan Region.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {areas.map((area) => (
                <div
                  key={area.name}
                  className="bg-white/5 border border-white/10 p-6 rounded-none hover:bg-white/10 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <MapPin className="w-5 h-5 text-brand-blue" />
                    <span className="font-bold">{area.name}</span>
                  </div>
                  <span className="text-xs text-white/40 uppercase tracking-widest font-bold">
                    {area.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-white/5 rounded-full flex items-center justify-center border border-white/10">
              <div className="aspect-square w-3/4 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
                <div className="aspect-square w-1/2 bg-brand-blue rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(0,97,255,0.4)]">
                  <MapPin className="w-12 h-12 text-white" />
                </div>
              </div>
            </div>
            {/* Floating labels */}
            <div className="absolute top-1/4 -left-4 bg-white text-brand-dark py-2 px-4 rounded-full text-sm font-bold shadow-xl">
              Mumbai
            </div>
            <div className="absolute bottom-1/4 -right-4 bg-white text-brand-dark py-2 px-4 rounded-full text-sm font-bold shadow-xl">
              Thane
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="py-24 bg-brand-blue relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white blur-[100px] rounded-full -ml-48 -mt-48" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white blur-[100px] rounded-full -mr-48 -mb-48" />
      </div>
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
          Ready to Secure Your Digital Future?
        </h2>
        <p className="text-white/80 text-lg mb-12 leading-relaxed">
          Join hundreds of businesses that trust Hybric Technology for their IT
          infrastructure and security needs. Get a free consultation today.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <Link
            to="/contact"
            className="bg-white text-brand-blue px-8 py-4 rounded-none font-bold hover:bg-brand-gray transition-colors shadow-xl"
          >
            Schedule a Consultation
          </Link>
          <Link
            to="/services"
            className="border-2 border-white text-white px-8 py-4 rounded-none font-bold hover:bg-white/10 transition-colors"
          >
            View Case Studies
          </Link>
        </div>
      </div>
    </section>
  );
};

const ContactForm = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold mb-6">Get a Free Consultation</h2>
            <p className="text-brand-dark/60 mb-10 leading-relaxed">
              Ready to upgrade your IT infrastructure? Fill out the form and our
              technical team will get back to you within 24 hours.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold">Call Us</h4>
                  <p className="text-brand-dark/60">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold">Email Us</h4>
                  <p className="text-brand-dark/60">info@hybrictech.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-brand-gray/30 p-8 md:p-12 border border-black/5">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-brand-dark/40">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white border border-black/5 outline-none focus:border-brand-blue transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-brand-dark/40">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-white border border-black/5 outline-none focus:border-brand-blue transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-brand-dark/40">
                  Service Required
                </label>
                <select className="w-full px-4 py-3 bg-white border border-black/5 outline-none focus:border-brand-blue transition-all">
                  <option>Biometric Systems Setup</option>
                  <option>CCTV Installation</option>
                  <option>PC Setup & Maintenance</option>
                  <option>Network & Server Setup</option>
                  <option>AMC Contracts</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-brand-dark/40">
                  Message
                </label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-3 bg-white border border-black/5 outline-none focus:border-brand-blue transition-all"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button className="w-full btn-primary py-4">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Consultation",
      desc: "We analyze your current infrastructure and identify gaps.",
    },
    {
      number: "02",
      title: "Strategy",
      desc: "Our experts design a tailored solution for your specific needs.",
    },
    {
      number: "03",
      title: "Deployment",
      desc: "Precision installation and configuration by certified technicians.",
    },
    {
      number: "04",
      title: "Maintenance",
      desc: "Ongoing AMC support to ensure 100% uptime and security.",
    },
  ];

  return (
    <section className="py-24 bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Professional Process</h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            A systematic approach to delivering excellence in every project we
            undertake.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative p-8 border border-white/10 hover:border-brand-blue/50 transition-colors group"
            >
              <span className="text-6xl font-black text-white/5 absolute top-4 right-4 group-hover:text-brand-blue/10 transition-colors">
                {step.number}
              </span>
              <h4 className="text-xl font-bold mb-4 relative z-10">
                {step.title}
              </h4>
              <p className="text-white/60 text-sm leading-relaxed relative z-10">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <ProcessSection />
      <SupportSection />
      <WhyChooseUs />
      <Areas />
      <ContactForm />
      <CTASection />
    </>
  );
};

export default Home;
