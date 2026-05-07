import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface LearnPageHeroProps {
  title: string;
  subtitle: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
}

export default function LearnPageHero({ 
  title, 
  subtitle, 
  description, 
  imageSrc = "https://images.unsplash.com/photo-1611974717482-1dd034988f7b?auto=format&fit=crop&q=80&w=2070", 
  imageAlt = "Finance Education" 
}: LearnPageHeroProps) {
  return (
    <section className="relative w-full min-h-[350px] lg:min-h-[450px] overflow-hidden flex flex-col lg:flex-row bg-intense-indigo">
      {/* Left Panel: Content */}
      <div className="relative z-20 w-full lg:w-1/2 flex flex-col px-6 sm:px-12 lg:px-[2cm] pt-[140px] lg:pt-[180px] pb-12 lg:pb-16 text-white text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-xl"
        >
          <h1 className="font-sans text-2xl md:text-4xl lg:text-4xl xl:text-5xl leading-[1.05] tracking-tight mb-2">
            <span className="font-bold block text-white">{title}</span>
            <span className="font-normal opacity-60 block">{subtitle}</span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mt-4 text-base md:text-lg text-white/50 font-medium leading-normal max-w-lg"
          >
            {description}
          </motion.p>
        </motion.div>
      </div>

      {/* Right Panel: Image & Curve */}
      <div className="relative w-full lg:w-1/2 min-h-[250px] lg:min-h-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={imageSrc} 
            alt={imageAlt}
            className="w-full h-full object-cover"
          />
          {/* Subtle overlay for better blending */}
          <div className="absolute inset-0 bg-intense-indigo/10 mix-blend-overlay" />
        </div>

        {/* SVG Curve Divider */}
        <div className="absolute top-0 left-0 h-full w-[150px] hidden lg:block z-10">
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="h-full w-full fill-intense-indigo"
          >
            <path d="M0,0 Q100,50 0,100 Z" />
          </svg>
        </div>

        {/* Mobile Curve Divider */}
        <div className="absolute top-0 left-0 w-full h-[80px] lg:hidden z-10">
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="h-full w-full fill-intense-indigo"
          >
            <path d="M0,0 Q50,100 100,0 Z" />
          </svg>
        </div>
      </div>
    </section>
  );
}
