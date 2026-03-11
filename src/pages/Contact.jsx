import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Mail, Phone, MapPin, Send, Clock, 
  MessageSquare, Search, RotateCcw, 
  ChevronDown, Headphones, UserCheck,
  ChevronRight, Globe, ShieldCheck,
  Zap, ArrowRight
} from 'lucide-react';

const Contact = () => {
  const [activeTab, setActiveTab] = useState('support');

  const tabs = [
    { id: 'support', label: 'Product Help & Support' },
    { id: 'sales', label: 'Sales Enquiry' },
    { id: 'orders', label: 'Order Support' },
    { id: 'corporate', label: 'Corporate & Partners' },
  ];

  const supportCards = [
    {
      icon: <Headphones className="w-5 h-5" />,
      title: "Technical Support",
      description: "Get expert help for your devices and infrastructure.",
      buttons: [
        { text: "Contact Support", primary: true, to: "/contact" },
        { text: "Service Centers", primary: false, to: "/contact" }
      ]
    },
    {
      icon: <MessageSquare className="w-5 h-5" />,
      title: "Sales Chat",
      description: "Talk to our specialists about new products.",
      buttons: [
        { text: "Start Chat", primary: true, to: "/contact" },
        { text: "WhatsApp", primary: false, to: "/contact" }
      ]
    },
    {
      icon: <Search className="w-5 h-5" />,
      title: "Order Tracking",
      description: "Check the status of your recent purchases.",
      buttons: [
        { text: "Track Order", primary: true, to: "/contact" }
      ]
    },
    {
      icon: <UserCheck className="w-5 h-5" />,
      title: "Sales Callback",
      description: "Request a call from our business team.",
      buttons: [
        { text: "Get Callback", primary: true, to: "/contact" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-[72px]">
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-brand-dark/40">
            <Link to="/" className="hover:text-brand-blue cursor-pointer">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-brand-dark">Support</span>
          </div>
        </div>
      </div>

      {/* Hero Section - Centered Banner */}
      <section className="relative h-[350px] flex items-center justify-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=1600" 
          alt="Contact Us Banner" 
          className="absolute inset-0 w-full h-full object-cover opacity-80 blur-[1px]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-white/60" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-medium text-brand-dark tracking-tight">
            Contact Us
          </h1>
        </motion.div>
      </section>

      {/* Blocky Tabbed Navigation */}
      <nav className="bg-white sticky top-[72px] z-40 border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-px bg-black/5 border-x border-black/5">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-12 px-6 text-sm font-bold transition-all flex items-center justify-center text-center ${
                  activeTab === tab.id 
                    ? 'bg-[#EAEAEA] text-brand-dark' 
                    : 'bg-[#F4F4F4] text-brand-dark/50 hover:bg-[#EAEAEA] hover:text-brand-dark'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
        >
          {activeTab === 'support' && (
            <>
              {/* Simplified Support Section */}
              <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                  <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">How can we help?</h2>
                    <p className="text-lg text-brand-dark/60 leading-relaxed">
                      Select a support category below to get started. Our specialized teams are ready to assist you with any inquiry.
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {supportCards.map((card, idx) => (
                      <div key={idx} className="premium-card group hover:border-brand-blue transition-all duration-300">
                        <div className="w-14 h-14 bg-brand-blue/5 text-brand-blue flex items-center justify-center mb-8 group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
                          {card.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-4">{card.title}</h3>
                        <p className="text-sm text-brand-dark/60 mb-8 leading-relaxed">
                          {card.description}
                        </p>
                        <div className="space-y-3 mt-auto">
                          {card.buttons.map((btn, bIdx) => (
                            btn.to ? (
                              <Link 
                                key={bIdx}
                                to={btn.to}
                                className={`w-full py-3 text-[10px] font-bold tracking-widest uppercase transition-all flex items-center justify-center gap-2 ${
                                  btn.primary 
                                    ? 'bg-brand-blue text-white hover:bg-blue-700' 
                                    : 'border border-black/10 text-brand-dark hover:bg-brand-gray/50'
                                }`}
                              >
                                {btn.text}
                              </Link>
                            ) : (
                              <button 
                                key={bIdx}
                                className={`w-full py-3 text-[10px] font-bold tracking-widest uppercase transition-all flex items-center justify-center gap-2 ${
                                  btn.primary 
                                    ? 'bg-brand-blue text-white hover:bg-blue-700' 
                                    : 'border border-black/10 text-brand-dark hover:bg-brand-gray/50'
                                }`}
                              >
                                {btn.text}
                              </button>
                            )
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Quick Resources - Simple & Clean */}
              <section className="py-24 bg-brand-gray/20">
                <div className="max-w-7xl mx-auto px-6">
                  <div className="mb-16">
                    <h2 className="text-3xl font-bold mb-2">Quick resources</h2>
                    <p className="text-brand-dark/40">Essential tools to help you move forward.</p>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                      { title: "Returns", icon: <RotateCcw />, desc: "Start a return or check policy." },
                      { title: "Warranty", icon: <ShieldCheck />, desc: "Check your coverage status." },
                      { title: "Repair Status", icon: <Zap />, desc: "Track your ongoing service." },
                      { title: "Downloads", icon: <ArrowRight />, desc: "Latest drivers & firmware." }
                    ].map((item, idx) => (
                      <div key={idx} className="bg-white p-8 rounded-xl border border-black/5 hover:shadow-xl transition-all duration-300 group cursor-pointer">
                        <div className="w-12 h-12 rounded-full bg-brand-blue/5 text-brand-blue flex items-center justify-center mb-6 group-hover:bg-brand-blue group-hover:text-white transition-all">
                          {React.cloneElement(item.icon, { className: "w-5 h-5" })}
                        </div>
                        <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                        <p className="text-sm text-brand-dark/40 mb-4">
                          {item.desc}
                        </p>
                        <Link to="/services" className="flex items-center gap-2 text-xs font-bold text-brand-blue opacity-0 group-hover:opacity-100 transition-opacity">
                          Explore <ChevronRight className="w-3 h-3" />
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </>
          )}

          {activeTab === 'sales' && (
            <section className="py-24">
              <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <div>
                    <h2 className="text-4xl font-bold mb-8">Talk to our sales experts</h2>
                    <p className="text-lg text-brand-dark/60 mb-12 leading-relaxed">
                      Whether you're looking for a single device or a complete enterprise solution, our team is here to help you find the right technology.
                    </p>
                    
                    <div className="space-y-8">
                      <div className="flex items-start gap-6 p-6 bg-brand-gray/50 border border-black/5">
                        <div className="w-12 h-12 bg-brand-blue text-white flex items-center justify-center shrink-0">
                          <Zap className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="font-bold mb-2">Business Solutions</h4>
                          <p className="text-sm text-brand-dark/60">Custom configurations and volume pricing for organizations of all sizes.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-6 p-6 bg-brand-gray/50 border border-black/5">
                        <div className="w-12 h-12 bg-brand-blue text-white flex items-center justify-center shrink-0">
                          <ShieldCheck className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="font-bold mb-2">Government & Education</h4>
                          <p className="text-sm text-brand-dark/60">Specialized procurement programs for public sector and educational institutions.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-black/5 p-10 shadow-2xl">
                    <h3 className="text-2xl font-bold mb-8">Request a Quote</h3>
                    <form className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <input type="text" placeholder="First Name" className="w-full px-6 py-4 bg-brand-gray/50 border border-transparent focus:border-brand-blue outline-none transition-all" />
                        <input type="text" placeholder="Last Name" className="w-full px-6 py-4 bg-brand-gray/50 border border-transparent focus:border-brand-blue outline-none transition-all" />
                      </div>
                      <input type="email" placeholder="Business Email" className="w-full px-6 py-4 bg-brand-gray/50 border border-transparent focus:border-brand-blue outline-none transition-all" />
                      <input type="text" placeholder="Company Name" className="w-full px-6 py-4 bg-brand-gray/50 border border-transparent focus:border-brand-blue outline-none transition-all" />
                      <textarea rows="4" placeholder="Tell us about your requirements..." className="w-full px-6 py-4 bg-brand-gray/50 border border-transparent focus:border-brand-blue outline-none transition-all resize-none"></textarea>
                      <button className="btn-primary w-full py-4">Submit Request</button>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          )}

          {activeTab === 'orders' && (
            <section className="py-24 bg-brand-gray/20">
              <div className="max-w-3xl mx-auto px-6 text-center">
                <div className="w-20 h-20 bg-brand-blue/10 text-brand-blue rounded-full flex items-center justify-center mx-auto mb-8">
                  <Search className="w-10 h-10" />
                </div>
                <h2 className="text-4xl font-bold mb-6">Track your order</h2>
                <p className="text-lg text-brand-dark/60 mb-12">Enter your order number and email address to see the latest status of your purchase.</p>
                
                <div className="bg-white p-10 border border-black/5 shadow-xl max-w-xl mx-auto">
                  <div className="space-y-6">
                    <input type="text" placeholder="Order Number" className="w-full px-6 py-4 bg-brand-gray/50 border border-transparent focus:border-brand-blue outline-none transition-all" />
                    <input type="email" placeholder="Email Address" className="w-full px-6 py-4 bg-brand-gray/50 border border-transparent focus:border-brand-blue outline-none transition-all" />
                    <button className="btn-primary w-full py-4">Find My Order</button>
                  </div>
                </div>
              </div>
            </section>
          )}

          {activeTab === 'corporate' && (
            <section className="py-24">
              <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    { title: "Partner Program", icon: <Globe />, desc: "Join our network of authorized resellers and service providers.", to: "/contact" },
                    { title: "Media Relations", icon: <MessageSquare />, desc: "Contact our press team for news, assets, and media inquiries.", to: "/contact" },
                    { title: "Investors", icon: <ArrowRight />, desc: "Access financial reports, stock info, and investor presentations.", to: "/about" }
                  ].map((item, idx) => (
                    <Link key={idx} to={item.to} className="premium-card group cursor-pointer">
                      <div className="w-12 h-12 bg-brand-blue/10 text-brand-blue flex items-center justify-center mb-6 group-hover:bg-brand-blue group-hover:text-white transition-all">
                        {item.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                      <p className="text-sm text-brand-dark/60 mb-6 leading-relaxed">{item.desc}</p>
                      <span className="text-brand-blue font-bold text-sm flex items-center gap-2">
                        Learn More <ChevronRight className="w-4 h-4" />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Sales Hours Section */}
      <section className="py-24 border-t border-black/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl font-bold mb-12">Sales hours of operation</h2>
              
              <div className="space-y-12">
                <div>
                  <h4 className="text-xl font-bold mb-4 flex items-center gap-3">
                    <MessageSquare className="w-5 h-5 text-brand-blue" /> Chat with sales
                  </h4>
                  <div className="space-y-2 text-brand-dark/60">
                    <p>For Consumer: Mon-Fri, 9am to 6pm</p>
                    <p>For Business: Mon-Fri, 9am to 6pm</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold mb-4 flex items-center gap-3">
                    <Phone className="w-5 h-5 text-brand-blue" /> Call sales: 1800-571-4002
                  </h4>
                  <div className="space-y-2 text-brand-dark/60">
                    <p>For Consumer: Mon-Fri, 9am to 6pm</p>
                    <p>For Business: Mon-Fri, 9am to 6pm</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <img 
                src="https://images.unsplash.com/photo-1549923746-c502d488b3ea?auto=format&fit=crop&q=80&w=1000" 
                alt="Sales Support Team" 
                className="w-full h-[400px] object-cover rounded-none shadow-xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
