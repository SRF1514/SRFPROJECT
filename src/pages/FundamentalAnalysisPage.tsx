import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { fundamentalAnalysisModules } from '../data/fundamentalAnalysisContent';
import LearnPageHero from '../components/LearnPageHero';

export default function FundamentalAnalysisPage() {
  return (
    <div className="flex-grow flex flex-col w-full">
      <LearnPageHero 
        title="Fundamental Analysis:"
        subtitle="evaluate businesses, not just prices"
        description="Determine the intrinsic value of companies by analyzing economic indicators, industry dynamics, and financial statements."
        imageSrc="/Fundamental analysis learn page.jpg"
      />

      <main className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[2cm] w-full pb-16 lg:pb-24 font-sans mt-24 md:mt-32">
        <div className="w-full">

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-20 items-start">
          {/* Left Column: Modules Grid */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {fundamentalAnalysisModules.map((module, index) => (
                <Link 
                  key={module.id}
                  to={`/learn/fundamental-analysis/${module.id}`}
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
                Master the art of evaluating a security by examining the underlying economic and financial factors that determine its true worth. Perform top-down and bottom-up analysis to identify undervalued opportunities. Read and interpret all three financial statements in unison. Calculate and apply key valuation ratios (P/E, EV/EBITDA, ROIC, WACC). Build and sensitize DCF models and perform relative valuation using comps and precedent transactions. Identify red flags in corporate governance and financial reporting.
              </p>
            </section>
            <section className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <h2 className="text-base md:text-lg font-bold text-intense-indigo mb-2">How this track works</h2>
              <p className="text-justify text-intense-indigo/60 text-xs md:text-sm leading-tight">
                The track is structured to move from the broad environment to the specific business and finally to the valuation. You start with Macroeconomic Analysis (the context) because the environment shifts what matters. Then you move to Industry and Sector Analysis (the structure) to understand where profits pool and how competitive forces shape margins. Next is Company Analysis (the granular level) where you deep-dive into business models, financial statements, and management quality. Finally, you reach Valuation (the judgment) where you triangulate between multiple methods to estimate intrinsic value and apply a margin of safety.
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
                  Fundamental Analysis is the bedrock of intelligent investing. Our curriculum is not based on "hot tips" or social media trends, but on the classical value investing framework and modern valuation techniques established by the world's most respected financial educators and practitioners.
                </p>
                <p>
                  The content is carefully synthesized from these seminal works:
                </p>
                <div className="grid grid-cols-1 gap-6 mt-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-1 h-auto bg-intense-indigo/20 rounded-full"></div>
                    <div>
                      <h4 className="font-bold text-intense-indigo text-sm">The Intelligent Investor — Benjamin Graham</h4>
                      <p className="text-xs mt-1">The definitive book on value investing. It introduces the concepts of "Mr. Market," "Margin of Safety," and the distinction between investment and speculation.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-1 h-auto bg-intense-indigo/20 rounded-full"></div>
                    <div>
                      <h4 className="font-bold text-intense-indigo text-sm">Security Analysis — Graham & Dodd</h4>
                      <p className="text-xs mt-1">The professional's guide to analyzing assets. It provides the rigorous methodology for examining financial statements and assessing the earnings power of a company.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-1 h-auto bg-intense-indigo/20 rounded-full"></div>
                    <div>
                      <h4 className="font-bold text-intense-indigo text-sm">Financial Statement Analysis and Security Valuation — Stephen H. Penman</h4>
                      <p className="text-xs mt-1">Bridges the gap between accounting and valuation. It teaches how to extract business value from financial reports using the residual income model.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-1 h-auto bg-intense-indigo/20 rounded-full"></div>
                    <div>
                      <h4 className="font-bold text-intense-indigo text-sm">Investment Valuation — Aswath Damodaran</h4>
                      <p className="text-xs mt-1">The "Dean of Valuation" provides a comprehensive look at valuing everything from early-stage startups to mature, global conglomerates using DCF and relative methods.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-1 h-auto bg-intense-indigo/20 rounded-full"></div>
                    <div>
                      <h4 className="font-bold text-intense-indigo text-sm">Valuation: Measuring and Managing the Value of Companies — Koller, Goedhart, & Wessels (McKinsey & Co.)</h4>
                      <p className="text-xs mt-1">The industry standard for corporate practitioners. It focuses on how companies create value through ROIC and growth, providing a deep dive into cash flow and capital structure.</p>
                    </div>
                  </div>
                </div>
                <p className="mt-6 font-medium">
                  By mastering these frameworks, you move beyond looking at stock prices and begin to evaluate the actual businesses behind them.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="overflow-hidden">
                <img 
                  src="/Books fundamental analysis.png" 
                  alt="Foundational Fundamental Analysis Literature" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <p className="mt-4 text-[10px] uppercase tracking-[0.2em] font-bold text-intense-indigo/30 text-center">
                The Pillars of Fundamental Valuation
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
    </div>
  );
}
