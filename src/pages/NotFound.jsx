import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-[12rem] font-bold text-brand-blue/10 leading-none mb-8"
        >
          404
        </motion.div>
        <h1 className="text-4xl font-bold text-brand-dark mb-4">Page not found</h1>
        <p className="text-brand-dark/50 mb-12 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="btn-primary flex items-center justify-center gap-2">
            <Home className="w-4 h-4" /> Back to Home
          </Link>
          <button 
            onClick={() => window.history.back()} 
            className="px-8 py-4 border border-black/10 text-brand-dark font-bold rounded-lg hover:bg-brand-gray/50 transition-all flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" /> Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
