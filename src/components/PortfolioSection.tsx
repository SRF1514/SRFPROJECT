import React from 'react';
import { History, MoreHorizontal } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PortfolioSectionProps {
  onJoinClick?: () => void;
}

export default function PortfolioSection({ onJoinClick }: PortfolioSectionProps) {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-8 lg:px-[2cm] font-sans">
      <div className="max-w-[1440px] mx-auto">
        <div className="relative rounded-[32px] overflow-hidden h-[500px] shadow-2xl">
          
          {/* Left Visual Area (Image Placeholder) */}
          <Link to="/portfolio" className="absolute inset-0 z-0 w-full h-full block group">
            <img 
              src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=2000&auto=format&fit=crop" 
              alt="Snowy mountain peak" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Subtle dark gradient overlay from bottom upward for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent"></div>
          </Link>

          {/* Text & Form Overlay */}
          <div className="absolute bottom-[40px] lg:bottom-[60px] left-[40px] md:left-[80px] max-w-[500px] z-10">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 tracking-tight leading-[1.1]">
              Sierra Portfolio
            </h2>
            <p className="text-white/90 text-sm md:text-base font-bold mb-6 leading-relaxed max-w-[440px]">
              Access our Portfolio, where knowledge meets practice. Explore vanguard strategies and real-time updates hedging against economic and geopolitical events.
            </p>
            
            <form 
              className="flex items-center bg-[#111114]/80 backdrop-blur-md border border-white/20 rounded-full p-1.5 max-w-[340px] shadow-xl"
              onSubmit={(e) => {
                e.preventDefault();
                onJoinClick?.();
              }}
            >
              <input 
                type="email" 
                placeholder="What's your email?" 
                className="flex-grow bg-transparent text-white placeholder:text-gray-400 px-3 outline-none text-xs md:text-sm w-full"
                required
              />
              <button 
                type="submit" 
                className="bg-white text-black font-semibold px-3 md:px-4 py-1.5 rounded-full text-xs md:text-sm hover:bg-gray-100 transition-colors shrink-0 cursor-pointer"
              >
                Get notified
              </button>
            </form>
          </div>

        {/* Right floating analytics card */}
        <div className="absolute hidden lg:flex flex-col right-[40px] bottom-[60px] w-[36%] h-[380px] bg-[#111114] rounded-[20px] shadow-[0_30px_60px_rgba(0,0,0,0.5)] border border-white/5 z-20 overflow-hidden">
          
          {/* Top metrics row */}
          <div className="p-5 pb-3 flex justify-between items-start shrink-0">
            <div className="flex gap-6">
              <div>
                <div className="text-white text-[20px] font-semibold tracking-tight leading-none mb-1">$194,614<span className="text-gray-400">.20</span></div>
                <div className="text-gray-500 text-[11px] font-medium">Portfolio value</div>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="text-white text-[20px] font-semibold tracking-tight leading-none">$125,565<span className="text-gray-400">.08</span></div>
                  <div className="bg-emerald-500/10 text-emerald-400 text-[9px] font-medium px-1.5 py-0.5 rounded-md">+64.52%</div>
                </div>
                <div className="text-gray-500 text-[11px] font-medium">Past year returns</div>
              </div>
            </div>
            
            {/* Minimal control cluster */}
            <div className="flex items-center gap-2">
              <div className="flex -space-x-1.5">
                <div className="w-5 h-5 rounded-full bg-lime-400 border-2 border-[#111114] flex items-center justify-center text-[8px]">🍃</div>
                <div className="w-5 h-5 rounded-full bg-blue-500 border-2 border-[#111114]"></div>
                <div className="w-5 h-5 rounded-full bg-white border-2 border-[#111114] flex items-center justify-center text-[8px] font-bold text-black">W</div>
              </div>
              <button className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white transition-colors">
                <MoreHorizontal size={12} />
              </button>
            </div>
          </div>

          {/* Main chart area */}
          <div className="relative w-full px-5 mt-1 h-[45%] shrink-0">
            {/* Y-axis labels */}
            <div className="absolute right-5 top-0 bottom-4 flex flex-col justify-between text-[9px] text-gray-500 text-right z-0 font-medium">
              <span>64%</span>
              <span>25%</span>
              <span>0%</span>
            </div>
            
            {/* Minimal grid */}
            <div className="absolute inset-x-5 top-2 bottom-4 flex flex-col justify-between z-0">
              <div className="border-t border-white/5 w-full"></div>
              <div className="border-t border-white/5 w-full"></div>
              <div className="border-t border-white/5 w-full"></div>
            </div>

            <svg viewBox="0 0 500 150" className="w-full h-full relative z-10" preserveAspectRatio="none">
              <defs>
                <pattern id="diagonalHatch" width="4" height="4" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
                  <line x1="0" y1="0" x2="0" y2="4" stroke="#34d399" strokeWidth="0.5" strokeOpacity="0.25" />
                </pattern>
              </defs>
              
              {/* Alpha Fill (Hatch) */}
              <path 
                d="M 0 110 L 20 105 L 40 115 L 60 100 L 80 105 L 100 85 L 120 90 L 140 70 L 160 80 L 180 100 L 200 105 L 220 85 L 240 90 L 260 60 L 280 70 L 300 40 L 320 50 L 340 30 L 360 40 L 380 20 L 400 30 L 420 15 L 440 25 L 460 10 L 480 20 L 500 5 L 500 50 L 480 65 L 460 60 L 440 70 L 420 65 L 400 75 L 380 70 L 360 85 L 340 80 L 320 90 L 300 85 L 280 105 L 260 100 L 240 120 L 220 115 L 200 130 L 180 125 L 160 110 L 140 105 L 120 120 L 100 115 L 80 128 L 60 125 L 40 135 L 20 128 L 0 130 Z" 
                fill="url(#diagonalHatch)" 
              />
              
              {/* Secondary line in soft white */}
              <path 
                d="M 0 130 L 20 128 L 40 135 L 60 125 L 80 128 L 100 115 L 120 120 L 140 105 L 160 110 L 180 125 L 200 130 L 220 115 L 240 120 L 260 100 L 280 105 L 300 85 L 320 90 L 340 80 L 360 85 L 380 70 L 400 75 L 420 65 L 440 70 L 460 60 L 480 65 L 500 50" 
                fill="none" 
                stroke="#ffffff" 
                strokeWidth="1.5" 
              />
              
              {/* Highlighted line in muted green */}
              <path 
                d="M 0 110 L 20 105 L 40 115 L 60 100 L 80 105 L 100 85 L 120 90 L 140 70 L 160 80 L 180 100 L 200 105 L 220 85 L 240 90 L 260 60 L 280 70 L 300 40 L 320 50 L 340 30 L 360 40 L 380 20 L 400 30 L 420 15 L 440 25 L 460 10 L 480 20 L 500 5" 
                fill="none" 
                stroke="#34d399" 
                strokeWidth="1.5" 
              />
            </svg>
          </div>

          {/* Legend and timeframe controls */}
          <div className="flex justify-between items-center px-5 py-3 border-b border-white/5 shrink-0">
            <div className="flex gap-4 text-[10px] font-medium">
              <div className="flex items-center gap-1.5 text-gray-400">
                <div className="w-0.5 h-2.5 bg-white rounded-full"></div>
                S&P 500
              </div>
              <div className="flex items-center gap-1.5 text-emerald-400">
                <div className="w-0.5 h-2.5 bg-emerald-400 rounded-full"></div>
                Performance
              </div>
              <div className="flex items-center gap-1.5 text-yellow-500">
                <div className="w-0.5 h-2.5 border-l-2 border-dotted border-yellow-500"></div>
                Alpha
              </div>
            </div>
            <div className="flex gap-2.5 text-[10px] font-medium text-gray-500">
              <span className="hover:text-white cursor-pointer transition-colors">1M</span>
              <span className="hover:text-white cursor-pointer transition-colors">3M</span>
              <span className="hover:text-white cursor-pointer transition-colors">YTD</span>
              <span className="text-white bg-white/10 px-1.5 py-0.5 rounded cursor-pointer">1Y</span>
              <span className="hover:text-white cursor-pointer transition-colors">2Y</span>
            </div>
          </div>

          {/* Lower activity panel */}
          <div className="p-5 flex-1 bg-[#151518]/30 flex flex-col justify-center">
            <div className="flex justify-between items-center mb-3">
              <span className="text-gray-500 text-[11px] font-medium">Recent activity (USD)</span>
              <History size={12} className="text-gray-500" />
            </div>
            
            <div className="flex flex-col gap-2.5">
              {/* Item 1 */}
              <div className="flex items-center justify-between text-[11px]">
                <div className="flex items-center gap-2 w-[35%]">
                  <span className="text-white font-semibold">AAPL</span>
                  <span className="text-gray-500">Market buy</span>
                </div>
                <div className="text-gray-500 w-[25%] text-right">Feb 4, 25</div>
                <div className="text-white font-medium w-[20%] text-right">$390.40</div>
                <div className="w-[20%] flex justify-end">
                  <span className="bg-emerald-500/10 text-emerald-400 text-[9px] font-medium px-2 py-0.5 rounded">Buy</span>
                </div>
              </div>
              <div className="h-px w-full bg-white/5"></div>
              
              {/* Item 2 */}
              <div className="flex items-center justify-between text-[11px]">
                <div className="flex items-center gap-2 w-[35%]">
                  <span className="text-white font-semibold">QQQ</span>
                  <span className="text-gray-500">Market buy</span>
                </div>
                <div className="text-gray-500 w-[25%] text-right">Jan 28, 25</div>
                <div className="text-white font-medium w-[20%] text-right">$488.14</div>
                <div className="w-[20%] flex justify-end">
                  <span className="bg-emerald-500/10 text-emerald-400 text-[9px] font-medium px-2 py-0.5 rounded">Buy</span>
                </div>
              </div>
              <div className="h-px w-full bg-white/5"></div>
              
              {/* Item 3 */}
              <div className="flex items-center justify-between text-[11px]">
                <div className="flex items-center gap-2 w-[35%]">
                  <span className="text-white font-semibold">NFLX</span>
                  <span className="text-gray-500">Market sell</span>
                </div>
                <div className="text-gray-500 w-[25%] text-right">Jan 28, 25</div>
                <div className="text-white font-medium w-[20%] text-right">$438.38</div>
                <div className="w-[20%] flex justify-end">
                  <span className="bg-red-500/10 text-red-400 text-[9px] font-medium px-2 py-0.5 rounded">Sell</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
);
}
