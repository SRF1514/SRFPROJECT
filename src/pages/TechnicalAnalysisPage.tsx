import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { technicalAnalysisModules } from '../data/technicalAnalysisContent';
import LearnPageHero from '../components/LearnPageHero';

export default function TechnicalAnalysisPage() {
  return (
    <div className="flex-grow flex flex-col w-full">
      <LearnPageHero 
        title="Technical Analysis:"
        subtitle="read market structure, not just charts"
        description="A classical, method-first framework for reading trend, range, and formation structure—focused on confirmation, failure, and disciplined invalidation."
        imageSrc="/Technical analysis Learn page.webp"
      />

      <main className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[2cm] w-full pb-16 lg:pb-24 font-sans mt-24 md:mt-32">
        <div className="w-full">

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-20 items-start">
          {/* Left Column: Modules Grid */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {technicalAnalysisModules.map((module, index) => (
                <Link 
                  key={module.id}
                  to={`/learn/technical-analysis/${module.id}`}
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
                Classify market environments into trend, range, or transition regimes using Dow Theory. Identify and validate support and resistance zones based on trade memory and role reversal. Draw and interpret trend lines and channels with geometric precision. Recognize and confirm classical reversal and continuation formations (Head & Shoulders, Double Tops, Flags, Pennants). Use volume to contextualize price action and evaluate effort versus result. Implement disciplined invalidation maps and trailing stops based on swing structure.
              </p>
            </section>
            <section className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <h2 className="text-base md:text-lg font-bold text-intense-indigo mb-2">How this track works</h2>
              <p className="text-justify text-intense-indigo/60 text-xs md:text-sm leading-tight">
                The track is a structural curriculum that moves from foundational trend framing to complex formation analysis. You start with the Three-Trend Market and Dow Theory because classification precedes interpretation. Then you master the "laws of charts": support, resistance, trend lines, and ranges. Next, you learn to read auction evidence through candlesticks and volume. Finally, you study the classical catalog of formations and integrate everything into a structural playbook that prioritizes confirmation and invalidation over prediction.
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
                  Technical Analysis is often misunderstood as "fortune telling," but in its classical form, it is the study of market psychology and the auction process. Our curriculum strips away the noise and focus on the time-tested methodologies used by institutional technicians and professional traders.
                </p>
                <p>
                  This track is built upon the foundational principles established in these cornerstone texts:
                </p>
                <div className="grid grid-cols-1 gap-6 mt-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-1 h-auto bg-intense-indigo/20 rounded-full"></div>
                    <div>
                      <h4 className="font-bold text-intense-indigo text-sm">Charting and Technical Analysis — Fred McAllen</h4>
                      <p className="text-xs mt-1">Focuses on the core relationship between price and volume, teaching you how to recognize the footprints of institutional accumulation and distribution.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-1 h-auto bg-intense-indigo/20 rounded-full"></div>
                    <div>
                      <h4 className="font-bold text-intense-indigo text-sm">Technical Analysis Explained — Martin J. Pring</h4>
                      <p className="text-xs mt-1">A comprehensive guide that treats technical analysis as the art of identifying trend reversals at an early stage, rooted in investor psychology.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-1 h-auto bg-intense-indigo/20 rounded-full"></div>
                    <div>
                      <h4 className="font-bold text-intense-indigo text-sm">Getting Started in Technical Analysis — Jack D. Schwager</h4>
                      <p className="text-xs mt-1">Provides a practical, clutter-free perspective on charting, focusing on identifying high-probability setups and the critical importance of risk control.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-1 h-auto bg-intense-indigo/20 rounded-full"></div>
                    <div>
                      <h4 className="font-bold text-intense-indigo text-sm">Technical Analysis of the Financial Markets — John J. Murphy</h4>
                      <p className="text-xs mt-1">The definitive source for chart patterns and technical indicators, often referred to as the standard textbook for the CMT designation.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-1 h-auto bg-intense-indigo/20 rounded-full"></div>
                    <div>
                      <h4 className="font-bold text-intense-indigo text-sm">Encyclopedia of Chart Patterns — Thomas Bulkowski</h4>
                      <p className="text-xs mt-1">Offers a rigorous statistical analysis of chart patterns, moving beyond theory to provide concrete performance data and probability of success for each formation.</p>
                    </div>
                  </div>
                </div>
                <p className="mt-6 font-medium">
                  By learning the mechanics of market structure rather than just looking at "pictures," you develop a disciplined framework for identifying opportunity and managing risk.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="overflow-hidden">
                <img 
                  src="/Books technical analysis.png" 
                  alt="Foundational Technical Analysis Literature" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <p className="mt-4 text-[10px] uppercase tracking-[0.2em] font-bold text-intense-indigo/30 text-center">
                The Literature of Price Action and Market Structure
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
    </div>
  );
}
