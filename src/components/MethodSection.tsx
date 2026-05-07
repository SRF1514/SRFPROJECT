import React from 'react';
import { motion } from 'motion/react';

export default function MethodSection() {
  return (
    <section className="w-full bg-gradient-to-b from-white via-[#F3F5F9] to-white py-16 px-4 sm:px-8 lg:px-[2cm] overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-12 flex flex-col items-center">
          <h2 className="font-serif font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-3 tracking-tight">
            Our Method
          </h2>
          <p className="text-gray-600 text-base md:text-lg font-bold max-w-2xl">
            A synthesis of classical theory and modern market microstructure
          </p>
        </div>

        <div className="mb-12">
          <motion.img 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            src="/Our method books.png" 
            alt="Foundational Finance and Investing Literature" 
            className="w-full h-auto object-cover rounded-2xl shadow-xl grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <motion.div 
            whileHover={{ y: -8 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-[#0A0E17] rounded-3xl p-6 md:p-8 relative overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/5 hover:border-white/10 transition-colors group cursor-pointer flex flex-col gap-4"
          >
            {/* Watermark Visual 1 */}
            <div className="absolute -right-10 -top-10 z-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none" style={{ maskImage: 'radial-gradient(circle at center, black 0%, transparent 70%)', WebkitMaskImage: 'radial-gradient(circle at center, black 0%, transparent 70%)' }}>
              <svg className="w-48 h-48 text-blue-400 animate-[spin_60s_linear_infinite]" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 4" />
                <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="1" />
                <path d="M50,10 L50,90 M10,50 L90,50" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
              </svg>
            </div>

            <div className="relative z-10 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-lg shrink-0 group-hover:bg-blue-500/20 transition-colors">
                1
              </div>
              <h3 className="text-white font-sans font-bold text-lg md:text-xl leading-tight">Foundation in proven theory</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed relative z-10">
              We study and extract principles from renowned investing and behavioral finance books, academic research, and long-term market evidence.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            whileHover={{ y: -8 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-[#0A0E17] rounded-3xl p-6 md:p-8 relative overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/5 hover:border-white/10 transition-colors group cursor-pointer flex flex-col gap-4"
          >
            {/* Watermark Visual 2 */}
            <div className="absolute -right-10 -top-10 z-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none" style={{ maskImage: 'radial-gradient(circle at center, black 0%, transparent 70%)', WebkitMaskImage: 'radial-gradient(circle at center, black 0%, transparent 70%)' }}>
              <svg className="w-48 h-48 text-emerald-400" viewBox="0 0 100 100">
                <path d="M20,50 L50,20 L80,50 L50,80 Z" fill="none" stroke="currentColor" strokeWidth="1" className="animate-[pulse_4s_ease-in-out_infinite]" />
                <path d="M35,35 L65,65 M35,65 L65,35" fill="none" stroke="currentColor" strokeWidth="1" className="animate-[pulse_4s_ease-in-out_infinite_1s]" />
                <circle cx="50" cy="20" r="3" fill="currentColor" />
                <circle cx="80" cy="50" r="3" fill="currentColor" />
                <circle cx="50" cy="80" r="3" fill="currentColor" />
                <circle cx="20" cy="50" r="3" fill="currentColor" />
                <circle cx="50" cy="50" r="4" fill="currentColor" />
              </svg>
            </div>

            <div className="relative z-10 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-lg shrink-0 group-hover:bg-emerald-500/20 transition-colors">
                2
              </div>
              <h3 className="text-white font-sans font-bold text-lg md:text-xl leading-tight">Turning ideas into frameworks</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed relative z-10">
              Theory alone isn’t useful — so we translate core concepts into clear frameworks, repeatable strategies, and practical decision models learners can actually apply.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            whileHover={{ y: -8 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-[#0A0E17] rounded-3xl p-6 md:p-8 relative overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/5 hover:border-white/10 transition-colors group cursor-pointer flex flex-col gap-4"
          >
            {/* Watermark Visual 3 */}
            <div className="absolute -right-10 -top-10 z-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none" style={{ maskImage: 'radial-gradient(circle at center, black 0%, transparent 70%)', WebkitMaskImage: 'radial-gradient(circle at center, black 0%, transparent 70%)' }}>
              <svg className="w-48 h-48 text-purple-400" viewBox="0 0 100 100">
                <path d="M10,80 Q25,60 40,70 T70,40 T90,20" fill="none" stroke="currentColor" strokeWidth="2" className="animate-[pulse_3s_ease-in-out_infinite]" />
                <path d="M10,80 L10,90 L90,90 L90,20" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
                <circle cx="40" cy="70" r="2" fill="currentColor" />
                <circle cx="70" cy="40" r="2" fill="currentColor" />
                <circle cx="90" cy="20" r="2" fill="currentColor" />
              </svg>
            </div>

            <div className="relative z-10 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center font-bold text-lg shrink-0 group-hover:bg-purple-500/20 transition-colors">
                3
              </div>
              <h3 className="text-white font-sans font-bold text-lg md:text-xl leading-tight">Transparent testing & iteration</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed relative z-10">
              We apply these frameworks in a public, continuously tracked portfolio, documenting outcomes, lessons learned, and adjustments along the way.
            </p>
          </motion.div>
        </div>

        <div className="mt-12 flex justify-center">
          <p className="text-gray-500 text-sm max-w-5xl leading-relaxed text-center">
            *All content is for educational purposes only and should not be considered financial advice; investing involves risk, including possible loss of capital.
          </p>
        </div>
      </div>
    </section>
  );
}
