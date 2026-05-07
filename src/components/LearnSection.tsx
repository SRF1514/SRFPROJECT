import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight, Activity, TrendingUp } from 'lucide-react';

const CardBackground = () => (
  <>
    {/* Base lighting gradient */}
    <div className="absolute inset-0 bg-gradient-to-b from-white/[0.08] to-transparent pointer-events-none" />
    
    {/* Noise Texture */}
    <div 
      className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none"
      style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
    />
    
    {/* Subtle inner top highlight */}
    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 pointer-events-none" />
    
    {/* Hover gradient */}
    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
  </>
);

export default function LearnSection() {
  const [tick, setTick] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setTick((prev) => prev + 1);
    }, 400);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="learn-section" className="w-full bg-white py-16 px-4 sm:px-8 lg:px-[2cm] relative overflow-hidden">
      {/* Primary Brand Glow */}
      <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-intense-indigo/15 blur-[160px] rounded-full pointer-events-none" />
      
      {/* Bottom Integration Gradient - Transparent bridge to the CFA section */}
      <div className="absolute bottom-0 left-0 right-0 h-[500px] bg-gradient-to-b from-transparent via-white/40 to-[#4F46E5]/10 pointer-events-none z-0" />
      
      <div className="max-w-[1440px] mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 flex flex-col items-center">
          <h2 className="font-serif font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-3 tracking-tight">
            Explore the 5 learning domains
          </h2>
          <p className="text-gray-600 text-base md:text-lg font-bold max-w-2xl">
            Choose a domain to access its modules, lessons, and core concepts.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
          
          {/* Card 1: Market Foundations */}
          <div 
            onClick={() => navigate('/learn/market-foundations')}
            className="bg-[#0A0E17] rounded-2xl p-4 lg:p-5 flex flex-col relative group overflow-hidden lg:col-span-2 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/5 hover:border-white/10 transition-colors cursor-pointer"
          >
            <CardBackground />
            
            {/* Subordinated Visual - Greeks Animation */}
            <div className="absolute inset-x-0 top-0 h-32 z-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none" style={{ maskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)' }}>
              <div className="absolute top-4 right-6 grid grid-cols-2 gap-x-6 gap-y-2 font-mono">
                <div className="flex flex-col">
                  <span className="text-[8px] text-gray-500 uppercase">Delta Δ</span>
                  <span className="text-xs text-emerald-400 transition-all duration-300">{(0.452 + (tick % 5) * 0.011).toFixed(3)}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[8px] text-gray-500 uppercase">Gamma Γ</span>
                  <span className="text-xs text-blue-400 transition-all duration-300">{(0.125 - (tick % 4) * 0.005).toFixed(3)}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[8px] text-gray-500 uppercase">Theta Θ</span>
                  <span className="text-xs text-red-400 transition-all duration-300">-{(0.045 + (tick % 3) * 0.002).toFixed(3)}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[8px] text-gray-500 uppercase">Vega ν</span>
                  <span className="text-xs text-purple-400 transition-all duration-300">{(0.210 + (tick % 2) * 0.015).toFixed(3)}</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col flex-grow">
              <div className="flex flex-wrap gap-1.5 mb-4">
                <span className="px-2 py-0.5 rounded-full bg-white/10 text-white text-[8px] font-semibold tracking-wide uppercase">8 modules</span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[8px] font-semibold tracking-wide uppercase">Best place to start</span>
              </div>

              <h3 className="text-white font-bold text-lg mb-2">Market Foundations</h3>
              <p className="text-gray-400 text-xs leading-relaxed mb-5">
                Build your investing base by learning instruments, risk, execution, and derivatives.
              </p>

              <div className="mt-auto mb-5">
                <div className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider mb-2.5">Modules Include</div>
                <ul className="space-y-2">
                  {['Instruments & Claims', 'Risk & Return', 'Diversification', 'Derivatives Basics'].map((mod, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-xs text-gray-300">
                      <div className="w-1 h-1 rounded-full bg-blue-500/50" />
                      {mod}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center gap-1.5 text-white font-medium text-xs group-hover:text-blue-400 transition-colors pt-3 border-t border-white/10 mt-auto">
                Explore modules <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          </div>

          {/* Card 2: Fundamental Analysis */}
          <div 
            onClick={() => navigate('/learn/fundamental-analysis')}
            className="bg-[#0A0E17] rounded-2xl p-4 lg:p-5 flex flex-col relative group overflow-hidden lg:col-span-2 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/5 hover:border-white/10 transition-colors cursor-pointer"
          >
            <CardBackground />
            
            {/* Subordinated Visual - Ratios Animation */}
            <div className="absolute inset-x-0 top-0 h-32 z-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none" style={{ maskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)' }}>
              <div className="absolute top-4 right-4 flex flex-col gap-2">
                <div className="bg-white/5 border border-white/10 rounded-lg p-2 w-24 backdrop-blur-sm">
                  <div className="text-[8px] text-gray-400 uppercase tracking-wider mb-0.5">P/E Ratio</div>
                  <div className="text-sm text-white font-mono font-light transition-all duration-300">{(14.2 + (tick % 4) * 0.3).toFixed(1)}x</div>
                  <div className={`text-[8px] mt-0.5 transition-colors duration-300 ${tick % 2 === 0 ? 'text-emerald-400' : 'text-red-400'}`}>{tick % 2 === 0 ? '↓ Undervalued' : '↑ Overvalued'}</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-2 w-24 backdrop-blur-sm">
                  <div className="text-[8px] text-gray-400 uppercase tracking-wider mb-0.5">FCF Yield</div>
                  <div className="text-sm text-white font-mono font-light transition-all duration-300">{(5.1 + (tick % 3) * 0.2).toFixed(1)}%</div>
                  <div className="text-[8px] text-emerald-400 mt-0.5">Strong Cashflow</div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col flex-grow">
              <div className="flex flex-wrap gap-1.5 mb-4">
                <span className="px-2 py-0.5 rounded-full bg-white/10 text-white text-[8px] font-semibold tracking-wide uppercase">17 modules</span>
              </div>

              <h3 className="text-white font-bold text-lg mb-2">Fundamental Analysis</h3>
              <p className="text-gray-400 text-xs leading-relaxed mb-5">
                Learn how to read financial statements and assess company health.
              </p>

              <div className="mt-auto mb-5">
                <div className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider mb-2.5">Modules Include</div>
                <ul className="space-y-2">
                  {['Macro Context', 'Core Drivers', 'Cycle Timing', 'Industry Structure'].map((mod, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-xs text-gray-300">
                      <div className="w-1 h-1 rounded-full bg-blue-500/50" />
                      {mod}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center gap-1.5 text-white font-medium text-xs group-hover:text-blue-400 transition-colors pt-3 border-t border-white/10 mt-auto">
                Explore modules <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          </div>

          {/* Card 3: Technical Analysis */}
          <div 
            onClick={() => navigate('/learn/technical-analysis')}
            className="bg-[#0A0E17] rounded-2xl p-4 lg:p-5 flex flex-col relative group overflow-hidden lg:col-span-2 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/5 hover:border-white/10 transition-colors cursor-pointer"
          >
            <CardBackground />
            
            {/* Subordinated Visual - Chart Animation */}
            <div className="absolute inset-x-0 top-0 h-32 z-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none" style={{ maskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)' }}>
              <svg viewBox="0 0 200 100" className="w-full h-full absolute top-2 right-0 opacity-60">
                {/* Candlesticks (static background) */}
                <rect x="120" y="40" width="4" height="20" fill="#ef4444" opacity="0.5" />
                <rect x="121.5" y="30" width="1" height="40" fill="#ef4444" opacity="0.5" />
                <rect x="140" y="50" width="4" height="15" fill="#10b981" opacity="0.5" />
                <rect x="141.5" y="45" width="1" height="30" fill="#10b981" opacity="0.5" />
                <rect x="160" y="35" width="4" height="25" fill="#10b981" opacity="0.5" />
                <rect x="161.5" y="20" width="1" height="45" fill="#10b981" opacity="0.5" />
                <rect x="180" y="25" width="4" height="15" fill="#ef4444" opacity="0.5" />
                <rect x="181.5" y="15" width="1" height="35" fill="#ef4444" opacity="0.5" />
                
                {/* Animated Moving Average */}
                <path d="M 100 60 Q 130 50 160 30 T 220 20" fill="none" stroke="#3b82f6" strokeWidth="2" strokeDasharray="200" strokeDashoffset={200 - (Math.floor(tick / 3) % 5) * 50} className="transition-all duration-1000 ease-linear" />
                
                {/* Animated RSI/MACD indicator box at bottom */}
                <rect x="100" y="80" width="90" height="20" fill="none" stroke="rgba(255,255,255,0.1)" />
                <path d="M 100 90 Q 140 80 160 95 T 200 85" fill="none" stroke="#8b5cf6" strokeWidth="1" strokeDasharray="100" strokeDashoffset={100 - (Math.floor(tick / 3) % 5) * 25} className="transition-all duration-1000 ease-linear" />
              </svg>
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col flex-grow">
              <div className="flex flex-wrap gap-1.5 mb-4">
                <span className="px-2 py-0.5 rounded-full bg-white/10 text-white text-[8px] font-semibold tracking-wide uppercase">15 modules</span>
              </div>

              <h3 className="text-white font-bold text-lg mb-2">Technical Analysis</h3>
              <p className="text-gray-400 text-xs leading-relaxed mb-5">
                Master market structure, trend framing, and classical formations.
              </p>

              <div className="mt-auto mb-5">
                <div className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider mb-2.5">Modules Include</div>
                <ul className="space-y-2">
                  {['Trend Framing', 'Support & Resistance', 'Trend Lines', 'Trading Ranges'].map((mod, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-xs text-gray-300">
                      <div className="w-1 h-1 rounded-full bg-blue-500/50" />
                      {mod}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center gap-1.5 text-white font-medium text-xs group-hover:text-blue-400 transition-colors pt-3 border-t border-white/10 mt-auto">
                Explore modules <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          </div>

          {/* Card 4: Event-Driven Analysis */}
          <div 
            onClick={() => navigate('/learn/event-driven-analysis')}
            className="bg-[#0A0E17] rounded-2xl p-4 lg:p-5 flex flex-col relative group overflow-hidden lg:col-span-3 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/5 hover:border-white/10 transition-colors cursor-pointer"
          >
            <CardBackground />
            
            {/* Subordinated Visual - Timeline Animation */}
            <div className="absolute inset-y-0 right-0 w-1/2 z-0 opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none hidden sm:block" style={{ maskImage: 'linear-gradient(to left, black 0%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to left, black 0%, transparent 100%)' }}>
              <div className="absolute top-8 right-16 bottom-8 w-px bg-white/10">
                <div className="absolute top-[10%] -left-1 w-2 h-2 rounded-full border border-white/30 bg-[#0A0E17]" />
                <div className={`absolute top-[8%] left-3 text-[8px] text-white whitespace-nowrap transition-opacity duration-1000 ${Math.floor(tick / 3) % 4 >= 0 ? 'opacity-100' : 'opacity-0'}`}>Catalyst Identified</div>

                <div className={`absolute top-[50%] -left-1 w-2 h-2 rounded-full border border-white/30 bg-[#0A0E17] transition-colors duration-1000 ${Math.floor(tick / 3) % 4 >= 1 ? 'border-blue-400 bg-blue-400/20 shadow-[0_0_8px_#3b82f6]' : ''}`} />
                <div className={`absolute top-[48%] left-3 text-[8px] text-white whitespace-nowrap transition-opacity duration-1000 ${Math.floor(tick / 3) % 4 >= 1 ? 'opacity-100' : 'opacity-0'}`}>Spread Widens</div>

                <div className={`absolute top-[90%] -left-1 w-2 h-2 rounded-full border border-white/30 bg-[#0A0E17] transition-colors duration-1000 ${Math.floor(tick / 3) % 4 >= 2 ? 'border-emerald-400 bg-emerald-400/20 shadow-[0_0_8px_#10b981]' : ''}`} />
                <div className={`absolute top-[88%] left-3 text-[8px] text-white whitespace-nowrap transition-opacity duration-1000 ${Math.floor(tick / 3) % 4 >= 2 ? 'opacity-100' : 'opacity-0'}`}>Arb Executed</div>
                
                {/* Animated line fill */}
                <div className="absolute top-0 left-0 w-full bg-blue-400 transition-all duration-1000" style={{ height: Math.floor(tick / 3) % 4 === 0 ? '10%' : Math.floor(tick / 3) % 4 === 1 ? '50%' : Math.floor(tick / 3) % 4 >= 2 ? '90%' : '0%' }}>
                  <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-2 bg-white shadow-[0_0_8px_2px_rgba(255,255,255,0.8)] rounded-full transition-opacity duration-1000 ${Math.floor(tick / 3) % 4 < 2 ? 'opacity-100' : 'opacity-0'}`} />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col flex-grow">
              <div className="flex flex-wrap gap-1.5 mb-4">
                <span className="px-2 py-0.5 rounded-full bg-white/10 text-white text-[8px] font-semibold tracking-wide uppercase">20 modules</span>
              </div>

              <h3 className="text-white font-bold text-lg mb-2">Event-Driven Analysis</h3>
              <p className="text-gray-400 text-xs leading-relaxed mb-5 max-w-sm">
                Study how news, earnings, mergers, and macro events affect prices.
              </p>

              <div className="mt-auto mb-5">
                <div className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider mb-2.5">Modules Include</div>
                <ul className="space-y-2">
                  {['Price Impounding', 'Event Taxonomy', 'Special Situations', 'Merger Arbitrage'].map((mod, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-xs text-gray-300">
                      <div className="w-1 h-1 rounded-full bg-blue-500/50" />
                      {mod}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center gap-1.5 text-white font-medium text-xs group-hover:text-blue-400 transition-colors pt-3 border-t border-white/10 mt-auto">
                Explore modules <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          </div>

          {/* Card 5: Quantitative Analysis */}
          <div 
            onClick={() => navigate('/learn/quantitative-analysis')}
            className="bg-[#0A0E17] rounded-2xl p-4 lg:p-5 flex flex-col relative group overflow-hidden lg:col-span-3 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/5 hover:border-white/10 transition-colors cursor-pointer"
          >
            <CardBackground />
            
            {/* Subordinated Visual - Python Code Animation */}
            <div className="absolute inset-y-0 right-0 w-1/2 z-0 opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none hidden sm:block" style={{ maskImage: 'linear-gradient(to left, black 0%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to left, black 0%, transparent 100%)' }}>
              <div className="absolute top-6 right-6 bottom-6 left-6 bg-[#0A0E17]/90 border border-white/10 rounded-lg p-3 font-mono text-[8px] text-emerald-400/80 overflow-hidden flex flex-col justify-start shadow-2xl">
                <div className="flex flex-col gap-1">
                  {[
                    "import pandas as pd",
                    "import numpy as np",
                    "from models import AlphaNet",
                    "# Initialize environment",
                    "env = TradingEnv(data='tick_data')",
                    "# Calculate signals",
                    "signals = env.get_momentum(21)",
                    "vol = env.get_volatility()",
                    "# Optimize portfolio",
                    "weights = optimize(signals)",
                    "env.execute(weights)",
                    ">> Execution complete. Sharpe: 2.1"
                  ].slice(0, (tick % 13)).map((line, i) => (
                    <div key={i} className={line.startsWith('#') ? 'text-gray-500' : line.startsWith('>>') ? 'text-blue-400 font-bold' : ''}>
                      {line}
                    </div>
                  ))}
                  <div className="w-1.5 h-2.5 bg-emerald-400/80 animate-pulse mt-0.5" />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col flex-grow">
              <div className="flex flex-wrap gap-1.5 mb-4">
                <span className="px-2 py-0.5 rounded-full bg-white/10 text-white text-[8px] font-semibold tracking-wide uppercase">14 modules</span>
              </div>

              <h3 className="text-white font-bold text-lg mb-2">Quantitative Analysis</h3>
              <p className="text-gray-400 text-xs leading-relaxed mb-5 max-w-sm">
                Learn how screens, models, and signals can inform decisions.
              </p>

              <div className="mt-auto mb-5">
                <div className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider mb-2.5">Modules Include</div>
                <ul className="space-y-2">
                  {['Sampling Taxonomy', 'Information Density', 'Data Engineering', 'Volatility Measures'].map((mod, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-xs text-gray-300">
                      <div className="w-1 h-1 rounded-full bg-blue-500/50" />
                      {mod}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center gap-1.5 text-white font-medium text-xs group-hover:text-blue-400 transition-colors pt-3 border-t border-white/10 mt-auto">
                Explore modules <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
