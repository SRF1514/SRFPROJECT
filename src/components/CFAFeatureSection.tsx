import React from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Star, Database, Award, Target } from 'lucide-react';

export default function CFAFeatureSection() {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-gradient-to-br from-intense-indigo via-[#0A0F2D] to-black py-24 relative overflow-hidden group font-sans">
      {/* Top integration gradient - Long, soft fade behind content */}
      <div className="absolute top-0 left-0 right-0 h-[600px] bg-gradient-to-b from-white via-transparent to-transparent opacity-30 pointer-events-none z-0" />
      
      {/* Background Visuals - Expanded to cover full section */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(99,102,241,0.25),transparent)]" />
        <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.15),transparent)]" />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[2cm] relative z-10">
        {/* Content Area */}
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
          {/* Left Side: Text and CTA */}
          <div className="w-full md:w-1/2 space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 backdrop-blur-xl border border-white/10 text-blue-300 text-[10px] font-black uppercase tracking-widest italic"
            >
              <Target size={12} className="fill-current" />
              2026 Curriculum Intelligence
            </motion.div>
            
            <h2 className="text-5xl lg:text-7xl font-bold text-white tracking-tighter italic leading-[0.95]">
              The Institutional <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-200 to-white/50">CFA® Strategy.</span>
            </h2>
            
            <p className="text-lg md:text-xl text-white/50 font-medium leading-relaxed italic max-w-xl">
              Master the 2026 CFA® curriculum with our proprietary calibration engine. 482+ institutional-grade questions mapping theory to alpha.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate('/cfa')}
                className="group px-10 py-5 bg-white text-intense-indigo rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] shadow-2xl flex items-center justify-center gap-3 transition-all italic"
              >
                Enter Practice Hub <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.button 
                whileHover={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
                onClick={() => navigate('/join')}
                className="px-8 py-5 border-2 border-white/10 text-white rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] transition-all italic"
              >
                View Membership
              </motion.button>
            </div>
          </div>

          {/* Right Side: Visual Metrics / Cards */}
          <div className="w-full md:w-1/2">
            <div className="grid grid-cols-2 gap-4 w-full">
              {[
                { title: 'Questions', value: '482+', icon: Database, color: 'text-blue-400' },
                { title: 'Calibration', value: '2026', icon: Target, color: 'text-emerald-400' },
                { title: 'Mock tests', value: '17', icon: Award, color: 'text-indigo-400' },
                { title: 'Number of Active users', value: '1,240+', icon: Star, color: 'text-yellow-400' }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -5, backgroundColor: 'rgba(255,255,255,0.05)' }}
                  className="p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/5 backdrop-blur-sm space-y-4 transition-all"
                >
                  <div className={`w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center ${item.color}`}>
                    <item.icon size={24} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-black uppercase tracking-[0.15em] text-white/40 mb-1">{item.title}</span>
                    <div className="text-xl font-black text-white italic tracking-tighter group-hover:scale-105 transition-transform duration-500">{item.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Ornaments */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-indigo-500/5 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Animated Corner accent */}
      <div className="absolute top-0 right-0 p-8 opacity-20">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <Database size={80} className="text-white" />
        </motion.div>
      </div>

      {/* Bottom Integration Gradient - Concentrated at the very bottom for a clean break */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-white pointer-events-none z-0" />
    </section>
  );
}
