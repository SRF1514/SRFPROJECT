import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { quantitativeAnalysisModules } from '../data/quantitativeAnalysisContent';
import LearnPageHero from '../components/LearnPageHero';

export default function QuantitativeAnalysisPage() {
  return (
    <div className="flex-grow flex flex-col w-full">
      <LearnPageHero 
        title="Quantitative Analysis:"
        subtitle="from microstructure to models"
        description="Master the mathematical and statistical frameworks that drive modern algorithmic trading and systemic portfolio management."
        imageSrc="/Quantitative trading learn page.png"
      />

      <main className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[2cm] w-full pb-16 lg:pb-24 font-sans mt-24 md:mt-32">
        <div className="w-full">

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-20 items-start">
          {/* Left Column: Modules Grid */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {quantitativeAnalysisModules.map((module, index) => (
                <Link 
                  key={module.id}
                  to={`/learn/quantitative-analysis/${module.id}`}
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
                <li>Understand how market mechanisms generate data (trades, quotes, books).</li>
                <li>Clean and engineer transaction and quote series (filters, bouncebacks, NBBO checks).</li>
                <li>Measure volatility as quadratic variation and implement noise-robust estimators.</li>
                <li>Analyze liquidity through spreads, depth proxies, and price-impact concepts.</li>
                <li>Model event clustering using point processes and Hawkes intensity models.</li>
                <li>Validate predictive models using walk-forward design and leakage control.</li>
                <li>Account for implementation constraints like transaction costs and execution slippage.</li>
              </ul>
            </section>
            <section className="bg-gradient-to-br from-indigo-600 via-blue-600 to-indigo-800 p-8 rounded-3xl border border-white/20 relative overflow-hidden group shadow-[0_20px_60px_-15px_rgba(59,130,246,0.5)] transform hover:-translate-y-1 transition-all duration-300">
               <div className="absolute inset-0 bg-black/10 pointer-events-none" />
               <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
               <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-400/20 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />
               
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="flex items-start justify-between mb-6">
                    <h2 className="text-xl md:text-2xl font-black text-white tracking-tight leading-tight">Access our<br />Quant Models</h2>
                    <div className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-white shadow-xl">Free Access</div>
                  </div>
                  <p className="text-white/90 text-sm md:text-base leading-relaxed mb-8 font-medium">
                    We develop complex models that measure market chaos to base our portfolio strategies. From Black-Scholes and Monte Carlo simulations to factor models.
                  </p>
                </div>
                <Link 
                  to="/research#quant-models" 
                  className="inline-flex items-center justify-center gap-3 w-full py-4 bg-white text-indigo-700 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl hover:bg-gray-50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                >
                  <span>Explore models</span>
                  <ArrowRight size={18} />
                </Link>
              </div>
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
                  Quantitative modeling in finance is often reduced to "black boxes" and curve-fitting. This track takes the opposite approach, focusing on the rigorous econometric foundations required to measure and model high-frequency data without falling into common statistical traps.
                </p>
                <p>
                  The curriculum is deeply informed by the specialized literature of financial econometrics and data engineering:
                </p>
                <div className="grid grid-cols-1 gap-6 mt-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-1 h-auto bg-intense-indigo/20 rounded-full"></div>
                    <div>
                      <h4 className="font-bold text-intense-indigo text-sm">Econometrics for Financial Applications — Ly H. Anh, et al.</h4>
                      <p className="text-xs mt-1">Provides the bridge between theoretical computational intelligence and practical econometrics, focusing on how to apply complex models to real-world financial time series.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-1 h-auto bg-intense-indigo/20 rounded-full"></div>
                    <div>
                      <h4 className="font-bold text-intense-indigo text-sm">Econometrics of Financial High-Frequency Data — Nikolaus Hautsch</h4>
                      <p className="text-xs mt-1">The definitive source for modeling irregularly spaced transaction data, covering point processes, intensity modeling, and the structural analysis of order book dynamics.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-1 h-auto bg-intense-indigo/20 rounded-full"></div>
                    <div>
                      <h4 className="font-bold text-intense-indigo text-sm">High-Frequency Financial Econometrics — Yacine Aït-Sahalia & Jean Jacod</h4>
                      <p className="text-xs mt-1">A rigorous mathematical treatment of volatility and jump estimation. It teaches how to measure the continuous and discontinuous components of price processes under market microstructure noise.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-1 h-auto bg-intense-indigo/20 rounded-full"></div>
                    <div>
                      <h4 className="font-bold text-intense-indigo text-sm">Statistics and Data Analysis for Financial Engineering — David Ruppert & David S. Matteson</h4>
                      <p className="text-xs mt-1">A comprehensive guide to the statistical toolbox required for modern quantitative finance, from heavy-tailed distributions and GARCH models to factor analysis and regularization.</p>
                    </div>
                  </div>
                </div>
                <p className="mt-6 font-medium">
                  By building from first principles, you learn to distinguish between genuine signal and microstructure noise, ensuring your models are both statistically sound and practically tradable.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="overflow-hidden">
                <img 
                  src="/Books Quantitative analysis.png" 
                  alt="Foundational Quantitative Analysis Literature" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <p className="mt-4 text-[10px] uppercase tracking-[0.2em] font-bold text-intense-indigo/30 text-center">
                The Mathematical Foundations of Quantitative Finance
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
    </div>
  );
}
