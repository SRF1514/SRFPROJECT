import React from 'react';
import CTABox from './CTABox';

interface AboutPageProps {
  onBack: () => void;
  onJoinClick?: () => void;
}

export default function AboutPage({ onBack, onJoinClick }: AboutPageProps) {
  return (
    <>
      <div className="min-h-screen bg-white pt-[112px] pb-12 px-4 sm:px-8 lg:px-[2cm] flex flex-col items-center">
        <div className="w-full max-w-[1440px] mx-auto">
          {/* Heading matching "Learn finance the practical way" */}
          <div className="mb-12 md:mb-16 text-left">
            <h1 className="font-sans font-bold text-3xl md:text-5xl lg:text-6xl leading-[1] text-intense-indigo mb-6">
              The end of Generic Financial Education
            </h1>
            <p className="text-lg md:text-xl text-intense-indigo/60 font-medium leading-relaxed max-w-3xl">
              Bridging the gap between academic theory and market reality.
            </p>
          </div>

        {/* Skyscrapers Image */}
        <div className="w-full mb-16 md:mb-24 rounded-2xl overflow-hidden shadow-xl shadow-intense-indigo/10">
          <img 
            src="/skyscrapers.jpg" 
            alt="Skyscrapers" 
            className="w-full h-auto object-cover max-h-[800px]"
            onError={(e) => {
              // Fallback if image not found
              e.currentTarget.src = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop";
            }}
          />
        </div>

        {/* Quote Section */}
        <div className="w-full max-w-5xl mx-auto mb-20 md:mb-32 flex flex-col md:flex-row items-start gap-6 md:gap-8 px-4 md:px-0">
          <svg className="w-12 h-12 md:w-16 md:h-16 text-intense-indigo shrink-0 mt-1 md:mt-2" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 8H4v10h5c0 2.76-2.24 5-5 5v3c4.42 0 8-3.58 8-8V8zm14 0H18v10h5c0 2.76-2.24 5-5 5v3c4.42 0 8-3.58 8-8V8z" />
          </svg>
          <p className="text-2xl md:text-3xl lg:text-[2rem] font-sans font-bold text-intense-indigo leading-[1.4]">
            At Sierra, we're building a new category of financial education that recognizes the fundamental differences between academic theory and market reality. We combine the reliability of traditional banking principles with industry-specific optimization.
          </p>
        </div>

        {/* The Team Section */}
        <div className="mb-20 md:mb-32">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-sans font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight text-intense-indigo mb-6">
              The Team
            </h2>
            <p className="font-sans text-lg md:text-xl font-bold text-intense-indigo/60 max-w-3xl mx-auto">
              Meet the founders building the future of financial education.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 bg-gradient-to-br from-intense-indigo to-blue-900 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <span className="font-sans text-8xl text-white/10 font-bold z-10">S</span>
              </div>
              <div className="p-6 lg:p-8 flex flex-col flex-grow">
                <h3 className="font-sans font-bold text-2xl text-intense-indigo mb-1">Sergio Moneo</h3>
                <p className="text-blue-600 text-xs font-bold tracking-wider uppercase mb-6">CO-FOUNDER</p>
                
                <div className="mb-6">
                  <h4 className="text-gray-500 text-xs font-bold tracking-wider uppercase mb-2">INTERESTS</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Event-driven analysis, macroeconomics, data analytics, and systems automation.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-gray-500 text-xs font-bold tracking-wider uppercase mb-2">FOCUS</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Sergio focuses on publishing new equity research and articles, creating content for the Technical Analysis, Event-Driven Analysis, Quantitative Analysis, and CFA sections, contributing to website coding and design, and supporting backend operations.
                  </p>
                </div>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 bg-gradient-to-br from-intense-indigo to-blue-900 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <span className="font-sans text-8xl text-white/10 font-bold z-10">G</span>
              </div>
              <div className="p-6 lg:p-8 flex flex-col flex-grow">
                <h3 className="font-sans font-bold text-2xl text-intense-indigo mb-1">Guillermo García</h3>
                <p className="text-blue-600 text-xs font-bold tracking-wider uppercase mb-6">CO-FOUNDER</p>
                
                <div className="mb-6">
                  <h4 className="text-gray-500 text-xs font-bold tracking-wider uppercase mb-2">INTERESTS</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Financial engineering and modelling, system dynamics, supply chain and geopolitics
                  </p>
                </div>
                
                <div>
                  <h4 className="text-gray-500 text-xs font-bold tracking-wider uppercase mb-2">FOCUS</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Guillermo focuses on creating research articles, portfolio optimization, market analysis, and investment strategy development. He also contributes to data-driven research, performance evaluation, and the refinement of portfolio construction processes.
                  </p>
                </div>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 bg-gradient-to-br from-intense-indigo to-blue-900 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <span className="font-sans text-8xl text-white/10 font-bold z-10">J</span>
              </div>
              <div className="p-6 lg:p-8 flex flex-col flex-grow">
                <h3 className="font-sans font-bold text-2xl text-intense-indigo mb-1">Jaime de la Puente</h3>
                <p className="text-blue-600 text-xs font-bold tracking-wider uppercase mb-6">CO-FOUNDER</p>
                
                <div className="mb-6">
                  <h4 className="text-gray-500 text-xs font-bold tracking-wider uppercase mb-2">INTERESTS</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Quantitative finance, wealth management, portfolio analysis, and financial modelling.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-gray-500 text-xs font-bold tracking-wider uppercase mb-2">FOCUS</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Jaime focuses on publishing new equity research and articles, creating content for the Fundamental Analysis and Market Foundations sections, managing the Sierra portfolio, and leading the quantitative modeling team.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Story Section */}
        <div className="mb-20 md:mb-32">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="font-sans font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight text-intense-indigo mb-6">
              Our story
            </h2>
            <p className="font-sans text-lg md:text-xl font-bold text-intense-indigo/60 max-w-3xl mx-auto">
              From a student project to a real-world professional platform.
            </p>
          </div>
          
          <div className="relative max-w-5xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 transform -translate-x-1/2 hidden md:block"></div>
            
            {/* 2024 */}
            <div className="flex flex-col md:flex-row items-center justify-between mb-16 md:mb-24 relative">
              <div className="w-full md:w-[45%] text-center md:text-right mb-8 md:mb-0 pr-0 md:pr-12">
                <h3 className="text-4xl md:text-5xl font-bold text-intense-indigo/20 mb-4">2024</h3>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                  We founded Sierra with a bold ambition: to bridge the gap between engineering students and the financial world. Born within the Faculty of Science and Engineering, we set out to connect technical minds with the complex mechanisms of capital markets.
                </p>
              </div>
              
              {/* Timeline Dot */}
              <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-blue-500 border-4 border-white shadow-sm z-10"></div>
              
              <div className="w-full md:w-[45%] pl-0 md:pl-12">
                <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
                  <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" alt="Students collaborating" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            {/* 2025 */}
            <div className="flex flex-col md:flex-row-reverse items-center justify-between mb-16 md:mb-24 relative">
              <div className="w-full md:w-[45%] text-center md:text-left mb-8 md:mb-0 pl-0 md:pl-12">
                <h3 className="text-4xl md:text-5xl font-bold text-intense-indigo/20 mb-4">2025</h3>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                  We dedicated this year to development, creating rigorous educational content and forging a robust network of industry professionals. This foundational work transformed our vision from a student project into a real-world professional experience.
                </p>
              </div>
              
              {/* Timeline Dot */}
              <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-blue-500 border-4 border-white shadow-sm z-10"></div>
              
              <div className="w-full md:w-[45%] pr-0 md:pr-12">
                <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
                  <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" alt="Global network" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            {/* 2026 */}
            <div className="flex flex-col md:flex-row items-center justify-between relative">
              <div className="w-full md:w-[45%] text-center md:text-right mb-8 md:mb-0 pr-0 md:pr-12">
                <h3 className="text-4xl md:text-5xl font-bold text-intense-indigo/20 mb-4">2026</h3>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                  Marking a new era, we launched our digital platform and began sharing our knowledge at scale. We are now expanding throughout the Netherlands and Spain, organizing exclusive events and talks designed to propel your career in finance.
                </p>
              </div>
              
              {/* Timeline Dot */}
              <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-blue-500 border-4 border-white shadow-sm z-10"></div>
              
              <div className="w-full md:w-[45%] pl-0 md:pl-12">
                <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
                  <img src="https://images.unsplash.com/photo-1539037116277-4db20889f2d4?q=80&w=2070&auto=format&fit=crop" alt="Madrid cityscape" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sierra Matters Section */}
        <div className="mb-20 md:mb-32 max-w-6xl mx-auto">
          <div className="mb-12 md:mb-16 text-center">
            <h2 className="font-sans font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight text-intense-indigo mb-6">
              Sierra matters most for your career trajectory
            </h2>
            <p className="font-sans text-lg md:text-xl font-bold text-intense-indigo/60 max-w-3xl mx-auto">
              Make high-stakes decisions with confidence and clarity.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 (Dark) */}
            <div className="bg-intense-indigo text-white rounded-2xl p-8 flex flex-col justify-between min-h-[240px] md:min-h-[280px]">
              <h3 className="text-xl md:text-2xl font-medium mb-8 flex items-center gap-2">
                Theory becomes practice <span className="text-lg">→</span>
              </h3>
              <p className="text-sm md:text-base opacity-80 leading-relaxed">
                Move beyond textbook models and apply rigorous financial analysis to real-world market scenarios.
              </p>
            </div>
            
            {/* Card 2 (Light) */}
            <div className="bg-[#F5F3EF] text-intense-indigo rounded-2xl p-8 flex flex-col justify-between min-h-[240px] md:min-h-[280px]">
              <h3 className="text-xl md:text-2xl font-medium mb-8 flex items-center gap-2">
                Recruiting season is approaching <span className="text-lg">→</span>
              </h3>
              <p className="text-sm md:text-base opacity-80 leading-relaxed">
                Make smart preparation, networking, and interview decisions <span className="font-bold">before</span> application deadlines for top-tier banks.
              </p>
            </div>
            
            {/* Card 3 (Light) */}
            <div className="bg-[#F5F3EF] text-intense-indigo rounded-2xl p-8 flex flex-col justify-between min-h-[240px] md:min-h-[280px]">
              <h3 className="text-xl md:text-2xl font-medium mb-8 flex items-center gap-2">
                Your technical skills need financial context <span className="text-lg">→</span>
              </h3>
              <p className="text-sm md:text-base opacity-80 leading-relaxed">
                New roles, internships, or shifting from engineering to finance changes how you approach problem-solving.
              </p>
            </div>
          </div>
        </div>

        {/* How We Add Value Section */}
        <div className="mb-12 md:mb-20 max-w-6xl mx-auto">
          <div className="mb-12 md:mb-16 text-center">
            <h2 className="font-sans font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight text-intense-indigo mb-6">
              How we add value
            </h2>
            <p className="font-sans text-lg md:text-xl font-bold text-intense-indigo/60 max-w-3xl mx-auto">
              We provide the context and tools you need to succeed.
            </p>
          </div>
          
          <div className="flex flex-col">
            {/* Item 1 */}
            <div className="flex flex-col md:flex-row py-8 border-b border-gray-200 gap-6 md:gap-12 items-start">
              <div className="flex items-center gap-6 md:w-1/2">
                <div className="w-12 h-12 rounded-lg border border-gray-200 flex items-center justify-center font-mono text-lg shrink-0 text-intense-indigo">
                  1
                </div>
                <h3 className="text-xl font-bold text-intense-indigo">Bridge the knowledge gap</h3>
              </div>
              <div className="md:w-1/2">
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  We come prepared. Before any interview or case study, we build a complete view of your financial acumen - valuation, modeling, and market awareness - so critical concepts aren't missed.
                </p>
              </div>
            </div>
            
            {/* Item 2 */}
            <div className="flex flex-col md:flex-row py-8 border-b border-gray-200 gap-6 md:gap-12 items-start">
              <div className="flex items-center gap-6 md:w-1/2">
                <div className="w-12 h-12 rounded-lg border border-gray-200 flex items-center justify-center font-mono text-lg shrink-0 text-intense-indigo">
                  2
                </div>
                <h3 className="text-xl font-bold text-intense-indigo">Move before windows close</h3>
              </div>
              <div className="md:w-1/2">
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  We focus on time-sensitive, hard-to-reverse decisions like internship applications, networking events, or career pivots, before deadlines pass or opportunities expire.
                </p>
              </div>
            </div>
            
            {/* Item 3 */}
            <div className="flex flex-col md:flex-row py-8 border-b border-gray-200 gap-6 md:gap-12 items-start">
              <div className="flex items-center gap-6 md:w-1/2">
                <div className="w-12 h-12 rounded-lg border border-gray-200 flex items-center justify-center font-mono text-lg shrink-0 text-intense-indigo">
                  3
                </div>
                <h3 className="text-xl font-bold text-intense-indigo">Make tradeoffs consciously</h3>
              </div>
              <div className="md:w-1/2">
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  When it's time to choose a path, we help you execute with full context - coordinating technical skills, financial knowledge, and industry expectations so tradeoffs are intentional, not accidental.
                </p>
              </div>
            </div>
            
            {/* Item 4 */}
            <div className="flex flex-col md:flex-row py-8 border-b border-gray-200 gap-6 md:gap-12 items-start">
              <div className="flex items-center gap-6 md:w-1/2">
                <div className="w-12 h-12 rounded-lg border border-gray-200 flex items-center justify-center font-mono text-lg shrink-0 text-intense-indigo">
                  4
                </div>
                <h3 className="text-xl font-bold text-intense-indigo">Adapt without starting over</h3>
              </div>
              <div className="md:w-1/2">
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  As your career goals, market conditions, or complexity changes, we adjust your learning path with the same context. Not reactively, and not from scratch.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <CTABox onJoinClick={onJoinClick} fromColor="white" />
    </>
  );
}
