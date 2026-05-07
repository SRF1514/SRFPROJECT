import React from 'react';

interface CTABoxProps {
  onJoinClick?: () => void;
  fromColor?: string;
}

export default function CTABox({ onJoinClick, fromColor = '#eff2ff' }: CTABoxProps) {
  return (
    <section className="relative w-full bg-[#030816] pt-[150px] pb-16 px-4 sm:px-8 lg:px-[2cm] flex flex-col items-center justify-center text-center overflow-hidden">
      
      {/* Top fade from specified color to darker indigo to dark blue to merge seamlessly with the page above */}
      <div 
        className="absolute top-0 left-0 right-0 h-[600px] z-0 pointer-events-none" 
        style={{ background: `linear-gradient(to bottom, ${fromColor} 0%, #1800ad 40%, #08003d 75%, #030816 100%)` }}
      />

      {/* Subtle inner glow for depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-white/5 blur-[100px] rounded-[100%] z-0 pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center gap-6">
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-tight">
          Be the first to know
        </h2>
        
        <p className="text-white/80 text-base md:text-lg mb-2">
          Get early access to our Equity Research and portfolio updates.
        </p>
        
        <form 
          className="relative flex items-center w-full max-w-md mx-auto mt-2"
          onSubmit={(e) => {
            e.preventDefault();
            onJoinClick?.();
          }}
        >
          <input 
            type="email" 
            placeholder="What's your email?" 
            className="w-full bg-white/10 border border-white/20 rounded-full py-3.5 pl-6 pr-[120px] text-white placeholder:text-white/60 outline-none focus:border-white/40 transition-colors shadow-inner"
            required
          />
          <button 
            type="submit" 
            className="absolute right-1.5 top-1.5 bottom-1.5 bg-white text-intense-indigo font-semibold px-6 rounded-full text-sm hover:bg-gray-50 transition-colors shadow-sm cursor-pointer"
          >
            Join us
          </button>
        </form>
      </div>
    </section>
  );
}
