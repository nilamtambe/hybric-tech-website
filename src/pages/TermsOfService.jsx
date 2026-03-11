import React from 'react';
import { motion } from 'motion/react';
import { Scale, FileCheck, AlertCircle, Info } from 'lucide-react';

const TermsOfService = () => {
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
            <Scale className="w-8 h-8" />
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6 tracking-tight">Terms of Service</h1>
          <p className="text-brand-dark/50 max-w-2xl mx-auto leading-relaxed">
            Please read these terms carefully before using our services. By accessing Hybric, you agree to be bound by these terms.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 prose prose-slate prose-lg">
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Info className="w-6 h-6 text-brand-blue" /> 1. Acceptance of Terms
              </h2>
              <p className="text-brand-dark/60 leading-relaxed">
                By using the Hybric Technology Digital Solutions website and services, you signify your agreement to these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <FileCheck className="w-6 h-6 text-brand-blue" /> 2. Use of Services
              </h2>
              <p className="text-brand-dark/60 leading-relaxed">
                You agree to use our services only for lawful purposes and in accordance with these Terms. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <AlertCircle className="w-6 h-6 text-brand-blue" /> 3. Limitation of Liability
              </h2>
              <p className="text-brand-dark/60 leading-relaxed">
                Hybric Technology Digital Solutions shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the services.
              </p>
            </div>

            <div className="bg-brand-blue/5 p-8 rounded-2xl border border-brand-blue/10">
              <h3 className="text-xl font-bold mb-4">Updates to Terms</h3>
              <p className="text-sm text-brand-dark/60">
                We reserve the right to modify these terms at any time. We will notify users of any significant changes by posting the new terms on this site.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;
