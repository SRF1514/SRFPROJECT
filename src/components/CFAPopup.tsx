import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Bell, X, ArrowRight } from 'lucide-react';

export default function CFAPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsVisible(false);
  };

  const handleNavigate = () => {
    navigate('/join');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          onClick={handleNavigate}
          className="fixed bottom-6 right-6 z-[100] w-[320px] bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.12)] border border-indigo-50 p-5 cursor-pointer group overflow-hidden"
        >
          {/* Accent blur */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-intense-indigo/5 rounded-full blur-2xl -mr-12 -mt-12 transition-transform group-hover:scale-150 duration-700" />
          
          <div className="flex gap-4 relative z-10">
            <div className="flex-shrink-0 w-10 h-10 bg-intense-indigo text-white rounded-xl flex items-center justify-center shadow-lg shadow-indigo-100">
              <Bell size={18} className="animate-bounce" />
            </div>
            
            <div className="flex-grow pr-2">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-bold text-intense-indigo uppercase tracking-tighter">CFA<sup>®</sup> Program</span>
                <button 
                  onClick={handleDismiss}
                  className="p-1 hover:bg-gray-100 rounded-lg transition-colors -mr-2 -mt-1"
                >
                  <X size={14} className="text-gray-400 hover:text-gray-600" />
                </button>
              </div>
              <h4 className="text-sm font-bold text-gray-900 leading-tight mb-2">
                CFA® Prep: Newly Updated
              </h4>
              <p className="text-[11px] text-gray-500 leading-relaxed font-medium mb-3">
                Master the 2026 curriculum with hundreds of new technical questions, full mock exams, and our complete study roadmap.
              </p>
              
              <div className="flex items-center gap-1 text-intense-indigo text-[10px] font-bold uppercase tracking-tighter group-hover:translate-x-1 transition-transform">
                Sign up now
                <ArrowRight size={12} />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
