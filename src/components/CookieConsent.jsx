import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, X } from 'lucide-react';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'true');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md z-50"
        >
          <div className="bg-white border border-black/5 shadow-2xl p-6 rounded-2xl">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-brand-blue/10 text-brand-blue rounded-full flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-brand-dark">Privacy Preference</h4>
                  <button onClick={() => setIsVisible(false)} className="text-brand-dark/40 hover:text-brand-dark">
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-xs text-brand-dark/60 leading-relaxed mb-6">
                  We use cookies to enhance your experience, analyze site traffic, and serve personalized content. By clicking "Accept All", you consent to our use of cookies.
                </p>
                <div className="flex gap-3">
                  <button 
                    onClick={handleAccept}
                    className="flex-grow bg-brand-blue text-white py-2.5 rounded-lg text-xs font-bold hover:bg-blue-700 transition-colors"
                  >
                    Accept All
                  </button>
                  <button 
                    onClick={() => setIsVisible(false)}
                    className="px-6 py-2.5 border border-black/10 text-brand-dark text-xs font-bold rounded-lg hover:bg-brand-gray/50 transition-colors"
                  >
                    Decline
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
