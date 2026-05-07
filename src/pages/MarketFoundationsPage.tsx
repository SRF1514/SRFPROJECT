import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { marketFoundationsModules } from '../data/marketFoundationsContent';
import LearnPageHero from '../components/LearnPageHero';

export default function MarketFoundationsPage() {
  return (
    <div className="flex-grow flex flex-col w-full">
      <LearnPageHero 
        title="Market Foundations:"
        subtitle="learn the basics once—use them forever"
        description="This track builds the minimum financial toolkit so the rest of the site is easy to follow (and hard to misapply)."
        imageSrc="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070"
      />

      <main className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[2cm] w-full pb-16 lg:pb-24 font-sans mt-24 md:mt-32">
        <div className="w-full">

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-20 items-start">
          {/* Left Column: Modules Grid */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {marketFoundationsModules.map((module, index) => (
                <Link 
                  key={module.id}
                  to={`/learn/market-foundations/${module.id}`}
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
              <p className="text-justify text-intense-indigo/60 text-xs md:text-sm leading-tight">
                Explain how stocks, bonds, and ETFs deliver returns (and where risks live). Separate volatility from permanent loss; understand drawdowns and diversification. Understand derivatives at an intuition level (Greeks: what they measure, what moves them). Place orders correctly and reduce avoidable execution/fee mistakes. Build a simple review routine that prevents drift and impulsive decisions.
              </p>
            </section>
            <section className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <h2 className="text-base md:text-lg font-bold text-intense-indigo mb-2">How this track works</h2>
              <p className="text-justify text-intense-indigo/60 text-xs md:text-sm leading-tight">
                The track is ordered to build from “what is the object?” to “how do I operate?” to “how do I control risk and behavior over time.” You start with instruments (what you own) because everything else depends on the claim structure. Then risk/return and compounding (why returns exist and what they cost). Then diversification (how portfolio behavior differs from single-instrument behavior). Then derivatives (nonlinear payoffs and sensitivity mapping). Then execution (turning understanding into controlled action).
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
                  The foundational knowledge presented in this track isn't derived from fleeting market trends or retail-focused hype. Instead, it is rigorously synthesized from the academic and practitioner "canon"—the same curriculum taught in top-tier MBA programs and CFA® fellowships.
                </p>
                <p>
                  Our content generation process is anchored in the principles of modern financial theory and market microstructure, drawing directly from industry-standard texts:
                </p>
                <div className="grid grid-cols-1 gap-6 mt-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-1 h-auto bg-intense-indigo/20 rounded-full"></div>
                    <div>
                      <h4 className="font-bold text-intense-indigo text-sm">Investments — Bodie, Kane, & Marcus</h4>
                      <p className="text-xs mt-1">The primary source for portfolio theory and security valuation. It provides the framework for constructing optimal portfolios and understanding the trade-off between risk and return.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-1 h-auto bg-intense-indigo/20 rounded-full"></div>
                    <div>
                      <h4 className="font-bold text-intense-indigo text-sm">Trading and Exchanges — Larry Harris</h4>
                      <p className="text-xs mt-1">Focuses on market microstructure—the "plumbing" of the markets. It explains how trading happens, why markets exist, and how liquidity is provided and consumed.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-1 h-auto bg-intense-indigo/20 rounded-full"></div>
                    <div>
                      <h4 className="font-bold text-intense-indigo text-sm">A Random Walk Down Wall Street — Burton G. Malkiel</h4>
                      <p className="text-xs mt-1">A critical look at the Efficient Market Hypothesis (EMH). It challenges traditional analysis and highlights the long-term benefits of low-cost, diversified index investing.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-1 h-auto bg-intense-indigo/20 rounded-full"></div>
                    <div>
                      <h4 className="font-bold text-intense-indigo text-sm">Asset Pricing — John H. Cochrane</h4>
                      <p className="text-xs mt-1">Explores the deepest questions of why assets have the prices they do, focusing on factor models and the fundamental pricing identity that links risk to expected value.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-1 h-auto bg-intense-indigo/20 rounded-full"></div>
                    <div>
                      <h4 className="font-bold text-intense-indigo text-sm">Financial Markets and Institutions — Mishkin & Eakins</h4>
                      <p className="text-xs mt-1">Provides the macroeconomic context of the financial system, explaining the roles of central banks, commercial banks, and the flow of capital worldwide.</p>
                    </div>
                  </div>
                </div>
                <p className="mt-6 font-medium">
                  By distilling these complex academic frameworks into actionable intuition, we ensure that you are learning the structural mechanics of the markets—knowledge that remains true regardless of current sentiment or economic cycles.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="overflow-hidden">
                <img 
                  src="/Books market foundations.png" 
                  alt="Foundational Finance Literature" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <p className="mt-4 text-[10px] uppercase tracking-[0.2em] font-bold text-intense-indigo/30 text-center">
                Reference Material & Theoretical Foundations
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
    </div>
  );
}
