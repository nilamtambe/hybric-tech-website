import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from 'motion/react';
import { 
  Search, Download, BookOpen, HelpCircle, 
  MessageSquare, Phone, ChevronRight, Zap,
  ShieldCheck, RotateCcw
} from 'lucide-react';

const Support = () => {
const [openIndex, setOpenIndex] = useState(null);

const toggleFAQ = (index) => {
  setOpenIndex(openIndex === index ? null : index);
};

  const faqs = [
  {
    question: "How do I track my service request?",
    answer: "You can track your service request through our support portal using your request ID."
  },
  {
    question: "What is covered under the standard AMC?",
    answer: "AMC covers system maintenance, troubleshooting, and technical support."
  },
  {
    question: "How can I upgrade my existing CCTV system?",
    answer: "Our team can upgrade cameras, storage, and remote monitoring capabilities."
  },
  {
    question: "Where can I find the latest firmware for my biometric device?",
    answer: "Firmware updates are available through our support team or official device website."
  }
];

  return (
    <div className="min-h-screen bg-white pt-[72px]">
      {/* Search Hero */}
      <section className="bg-brand-dark py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-blue via-transparent to-transparent" />
        </div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">Support Center</h1>
          <div className="relative max-w-2xl mx-auto">
            <input 
              type="text" 
              placeholder="Search for drivers, manuals, or help articles..." 
              className="w-full px-8 py-5 bg-white rounded-none outline-none text-brand-dark shadow-2xl"
            />
            <button className="absolute right-2 top-2 bottom-2 px-6 bg-brand-blue text-white font-bold hover:bg-blue-700 transition-colors">
              <Search className="w-5 h-5" />
            </button>
          </div>
          <p className="text-white/40 mt-6 text-sm">Popular: Windows 11 drivers, CCTV setup guide, AMC renewal</p>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-20 border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Drivers & Software", icon: <Download />, desc: "Get the latest updates for your hardware." },
              { title: "Product Manuals", icon: <BookOpen />, desc: "Step-by-step guides for all our products." },
              { title: "Knowledge Base", icon: <HelpCircle />, desc: "Find answers to common technical questions." }
            ].map((item, idx) => (
              <Link key={idx} to="/support" className="p-10 bg-brand-gray/30 hover:bg-brand-blue/5 transition-all group cursor-pointer border border-transparent hover:border-brand-blue/10">
                <div className="w-12 h-12 bg-brand-blue/10 text-brand-blue flex items-center justify-center mb-6 group-hover:bg-brand-blue group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-sm text-brand-dark/50 leading-relaxed mb-6">{item.desc}</p>
                <div className="flex items-center gap-2 text-xs font-bold text-brand-blue">
                  Explore <ChevronRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
     <section className="py-24">
  <div className="max-w-3xl mx-auto px-6">

    <h2 className="text-3xl font-bold mb-12 text-center">
      Frequently Asked Questions
    </h2>

    <div className="space-y-6">

      {faqs.map((faq, idx) => (

        <div
          key={idx}
          className="p-6 border border-black/5 rounded-lg transition-all"
        >

          <button
            onClick={() => toggleFAQ(idx)}
            className="w-full flex justify-between items-center text-left group"
          >

            <span className="font-medium text-brand-dark/80 group-hover:text-brand-dark">
              {faq.question}
            </span>

            <ChevronDown
              className={`w-5 h-5 transition-transform ${
                openIndex === idx ? "rotate-180 text-brand-blue" : "text-brand-dark/20"
              }`}
            />

          </button>

          {openIndex === idx && (
            <p className="mt-4 text-sm text-gray-600">
              {faq.answer}
            </p>
          )}

        </div>

      ))}

    </div>

  </div>
</section>

      {/* Contact Support */}
      <section className="py-24 bg-brand-gray/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">Still need help?</h2>
              <p className="text-lg text-brand-dark/60 mb-12">Our technical experts are available 24/7 to assist you with any complex issues.</p>
              
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <Phone className="w-5 h-5 text-brand-blue" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-brand-dark/40 uppercase">Call Us</p>
                    <p className="font-bold">1800-571-4002</p>
                  </div>
                </div>
                <Link to="/contact" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:bg-brand-blue group-hover:text-white transition-all">
                    <MessageSquare className="w-5 h-5 text-brand-blue group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-brand-dark/40 uppercase">Live Chat</p>
                    <p className="font-bold">Start Conversation</p>
                  </div>
                </Link>
              </div>
            </div>
            
            <div className="bg-white p-12 shadow-2xl border border-black/5">
              <h3 className="text-2xl font-bold mb-8">Submit a Ticket</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input type="text" placeholder="Full Name" className="w-full px-6 py-4 bg-brand-gray/50 outline-none focus:border-brand-blue border border-transparent transition-all" />
                  <input type="text" placeholder="Product Serial No." className="w-full px-6 py-4 bg-brand-gray/50 outline-none focus:border-brand-blue border border-transparent transition-all" />
                </div>
                <select className="w-full px-6 py-4 bg-brand-gray/50 outline-none focus:border-brand-blue border border-transparent transition-all">
                  <option>Select Issue Category</option>
                  <option>Hardware Failure</option>
                  <option>Software/Driver Issue</option>
                  <option>Installation Request</option>
                  <option>Other</option>
                </select>
                <textarea rows="4" placeholder="Describe your issue..." className="w-full px-6 py-4 bg-brand-gray/50 outline-none focus:border-brand-blue border border-transparent transition-all resize-none"></textarea>
                <button className="btn-primary w-full py-4">Submit Ticket</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Support;
