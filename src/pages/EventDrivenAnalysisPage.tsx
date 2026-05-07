import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { eventDrivenAnalysisModules } from '../data/eventDrivenAnalysisContent';
import LearnPageHero from '../components/LearnPageHero';

export default function EventDrivenAnalysisPage() {
  return (
    <div className="flex-grow flex flex-col w-full">
      <LearnPageHero 
        title="Event-Driven Analysis:"
        subtitle="how catalysts become prices"
        description="Analysis of special situations including mergers, acquisitions, restructuring, and index rebalancing through an arbitrage lens."
        imageSrc="/Event driven analysis Learn page.webp"
      />

      <main className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[2cm] w-full pb-16 lg:pb-24 font-sans mt-24 md:mt-32">
        <div className="w-full">

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-20 items-start">
          {/* Left Column: Modules Grid */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {eventDrivenAnalysisModules.map((module, index) => (
                <Link 
                  key={module.id}
                  to={`/learn/event-driven-analysis/${module.id}`}
                  className="group bg-gray-50/50 hover:bg-intense-indigo/5 p-6 rounded-2xl border border-gray-100 hover:border-intense-indigo/20 transition-all duration-300 flex flex-col justify-between min-h-[140px]"
                >
                  <div>
                    <span className="text-[10px] font-bold text-intense-indigo/40 uppercase tracking-tighter mb-2 block">
                      Module {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className="text-lg font-bold text-intense-indigo group-hover:translate-x-1 transition-transform">
                      {module.title}
                    </h3>
                  </div>
                  <div className="flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="w-5 h-5 text-intense-indigo" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Right Column: Info */}
          <div className="space-y-6">
            <section className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <h2 className="text-base md:text-lg font-bold text-intense-indigo mb-2">What you will be able to do</h2>
              <ul className="list-disc pl-5 text-justify text-intense-indigo/60 text-xs md:text-sm leading-tight space-y-1">
                <li>Understand how events become prices: direction, magnitude, speed, duration, breadth, and overreaction vs delayed reaction.</li>
                <li>Define surprise using expectations, dispersion, implieds, and forecast error.</li>
                <li>Analyze microstructure around events: spreads widen, depth thins, liquidity gaps appear, and execution becomes a binding constraint.</li>
                <li>Identify internal catalysts and reflexivity: flows, stops, margin calls, forced selling, and cross-market spillover.</li>
                <li>Master a special-situations toolkit: merger arb, insiders, buybacks, SPACs, spinoffs, management changes.</li>
                <li>Implement risk control: scenario trees, gap risk, failure modes, and “what breaks the thesis”.</li>
              </ul>
            </section>
            <section className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <h2 className="text-base md:text-lg font-bold text-intense-indigo mb-2">How this track works</h2>
              <p className="text-justify text-intense-indigo/60 text-xs md:text-sm leading-tight">
                The track is a structural curriculum that moves from foundational mechanics to complex special situations. You start with how events are impounded into prices and event taxonomy because classification precedes interpretation. Then you master expectations framing, reaction dynamics, and microstructure reality. Next, you apply the method to specific event classes like policy, geopolitics, and disasters. Finally, you study internal catalysts and a complete special situations toolkit, integrating everything into a disciplined workflow and risk-control map.
              </p>
            </section>
          </div>
        </div>
        {/* Trustworthiness Section */}
        <div className="mt-16 pt-16 border-t border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="font-sans text-2xl md:text-3xl font-bold text-intense-indigo mb-6">
                Why this content is trustworthy
              </h2>
              <div className="space-y-4 text-intense-indigo/70 text-sm md:text-base leading-relaxed">
                <p>
                  Event-Driven analysis is the study of how information is impounded into prices. Our framework is built on the rigorous observation of market catalysts and special situations, drawing from the definitive literature on event arbitrage and price reaction mechanics.
                </p>
                <p>
                  The methodologies taught in this track are synthesized from these foundational books:
                </p>
                <div className="grid grid-cols-1 gap-6 mt-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-1 h-auto bg-intense-indigo/20 rounded-full"></div>
                    <div>
                      <h4 className="font-bold text-intense-indigo text-sm">The Event-Driven Edge in Investing — Asif Suria</h4>
                      <p className="text-xs mt-1">A comprehensive guide to special situations, covering merger arbitrage, spinoffs, and other catalysts that provide a structured edge in the markets.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-1 h-auto bg-intense-indigo/20 rounded-full"></div>
                    <div>
                      <h4 className="font-bold text-intense-indigo text-sm">Trading Catalysts — Robert I. Webb</h4>
                      <p className="text-xs mt-1">Explores how various events—from economic reports to geopolitical shocks—move markets and how traders can categorize and interpret these news-driven reactions.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-1 h-auto bg-intense-indigo/20 rounded-full"></div>
                    <div>
                      <h4 className="font-bold text-intense-indigo text-sm">Inside the House of Money — Steven Drobny</h4>
                      <p className="text-xs mt-1">Provides a glimpse into the minds of top hedge fund managers who specialize in global macro and event-driven strategies, highlighting the importance of expectations and framing.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-1 h-auto bg-intense-indigo/20 rounded-full"></div>
                    <div>
                      <h4 className="font-bold text-intense-indigo text-sm">Financial Risk Management — Jimmy Skoglund & Wei Chen</h4>
                      <p className="text-xs mt-1">A rigorous look at the measurement and management of risk in complex financial environments, essential for navigating the volatility associated with major event catalysts.</p>
                    </div>
                  </div>
                </div>
                <p className="mt-6 font-medium">
                  By understanding the mechanics of how catalysts interact with market structure, you learn to identify high-probability opportunities where the price transition is not yet complete.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="overflow-hidden">
                <img 
                  src="/books event driven analysis.png" 
                  alt="Foundational Event-Driven Analysis Literature" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <p className="mt-4 text-[10px] uppercase tracking-[0.2em] font-bold text-intense-indigo/30 text-center">
                The Literature of Catalysts and Special Situations
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
    </div>
  );
}
