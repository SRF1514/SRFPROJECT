import React from 'react';

interface NewsletterSectionProps {
  onJoinClick?: () => void;
}

export default function NewsletterSection({ onJoinClick }: NewsletterSectionProps) {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-8 lg:px-[2cm] flex flex-col items-center justify-center">
      <div className="max-w-5xl mx-auto w-full">
        {/* Outer wrapper for the synced edge shine effect */}
        <div className="relative w-full rounded-3xl p-[2px] shadow-sm bg-[linear-gradient(110deg,#1800ad_35%,#3b82f6_50%,#1800ad_65%)] bg-[length:250%_100%] animate-shine">
          
          {/* Inner Box */}
          <div className="relative w-full bg-[#F8FAFC] rounded-[calc(1.5rem-2px)] p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden">
            
            {/* Box Background Shine Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent_35%,rgba(59,130,246,0.1)_50%,transparent_65%)] bg-[length:250%_100%] animate-shine pointer-events-none"></div>

            <div className="flex flex-col gap-1.5 text-center md:text-left flex-1 relative z-10">
              <h2 className="font-serif text-lg md:text-xl lg:text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-[linear-gradient(110deg,#1e293b_35%,#3b82f6_50%,#1e293b_65%)] bg-[length:250%_100%] animate-shine">
                Be the first to know
                <span className="block text-sm md:text-base mt-1 bg-clip-text text-transparent bg-[linear-gradient(110deg,#6B72D6_35%,#93c5fd_50%,#6B72D6_65%)] bg-[length:250%_100%] animate-shine">Get early access to our Equity Research and portfolio updates</span>
              </h2>
              <p className="text-intense-indigo/70 text-xs md:text-sm font-bold max-w-2xl leading-relaxed">
                New strategies in vanguard techniques, updates to our portfolio, and up-to-the-minute information for internship seasons.
              </p>
            </div>

            <button 
              onClick={onJoinClick}
              className="relative z-10 bg-intense-indigo hover:bg-opacity-90 text-white px-8 py-3 rounded-full font-bold text-sm tracking-wide transition-colors shrink-0 cursor-pointer"
            >
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
