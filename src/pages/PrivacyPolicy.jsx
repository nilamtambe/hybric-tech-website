import React from 'react';
import { motion } from 'motion/react';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white pt-[72px]">
      {/* Hero Section */}
      <section className="bg-brand-gray/20 py-20 border-b border-black/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-16 h-16 bg-brand-blue/10 text-brand-blue rounded-full flex items-center justify-center mx-auto mb-8"
          >
            <Shield className="w-8 h-8" />
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6 tracking-tight">Privacy Policy</h1>
          <p className="text-brand-dark/50 max-w-2xl mx-auto leading-relaxed">
            Last updated: March 11, 2026. Your privacy and data security are our top priorities.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 prose prose-slate prose-lg">
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Eye className="w-6 h-6 text-brand-blue" /> 1. Information We Collect
              </h2>
              <p className="text-brand-dark/60 leading-relaxed">
                We collect information that you provide directly to us, such as when you create an account, request support, or sign up for our newsletter. This may include your name, email address, phone number, and company details.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Lock className="w-6 h-6 text-brand-blue" /> 2. How We Use Your Data
              </h2>
              <p className="text-brand-dark/60 leading-relaxed">
                Your information is used to provide, maintain, and improve our services, communicate with you about products and updates, and ensure the security of our platform. We do not sell your personal data to third parties.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <FileText className="w-6 h-6 text-brand-blue" /> 3. Data Security
              </h2>
              <p className="text-brand-dark/60 leading-relaxed">
                We implement industry-standard security measures to protect your data from unauthorized access, disclosure, or alteration. However, no method of transmission over the internet is 100% secure.
              </p>
            </div>

            <div className="bg-brand-gray/30 p-8 rounded-2xl border border-black/5">
              <h3 className="text-xl font-bold mb-4">Contact Us Regarding Privacy</h3>
              <p className="text-sm text-brand-dark/60 mb-4">
                If you have any questions about our privacy practices or would like to request access to your data, please contact our privacy team.
              </p>
              <p className="text-brand-blue font-bold">privacy@hybric.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
