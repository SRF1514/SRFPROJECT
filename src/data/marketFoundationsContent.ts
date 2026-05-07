export interface ModuleContent {
  id: string;
  title: string;
  content: string;
}

export const marketFoundationsModules: ModuleContent[] = [
  {
    id: 'instrument-basics',
    title: 'Instrument basics — stocks, bonds, ETFs (what you own)',
    content: `<div class="text-justify space-y-4">
<p>Establishing clear definitions for common instruments and wrappers so later concepts attach to the correct object.</p>

<h3 class="text-xl font-bold text-intense-indigo mt-8 mb-4">A) Instruments as claims</h3>
<p>Stocks, bonds, and funds are different claim types. A claim defines: seniority (who gets paid first), payout structure (how payments happen), and what can break (default risk, dilution, tracking issues, liquidity).</p>

<!-- Visual: Claims Hierarchy (Capital Structure Blueprint) -->
<div class="my-8 rounded-xl border border-[#e0e3eb] bg-white overflow-hidden shadow-2xl font-sans text-left">
  <div class="bg-[#f8f9fb] border-b border-[#e0e3eb] px-4 py-2 flex items-center justify-between font-mono">
    <div class="flex items-center gap-3">
        <span class="text-[12px] font-black text-[#131722]">CORPORATE STRUCTURE</span>
        <span class="px-1.5 py-0.5 bg-[#e0e3eb] text-[#787b86] text-[9px] font-bold rounded uppercase">Architecture</span>
    </div>
    <div class="flex gap-4">
        <span class="text-[10px] text-[#2962ff] font-black uppercase">Liquidation Seniority Map</span>
    </div>
  </div>

  <div class="p-8 bg-white grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    <div class="space-y-2">
      <div class="relative group">
        <div class="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-3/4 bg-[#089981] rounded-full"></div>
        <div class="p-3 bg-[#f0f3fa] border border-[#e0e3eb] rounded-lg">
          <div class="flex justify-between items-center mb-1">
            <span class="text-[9px] font-black text-[#787b86] uppercase tracking-tighter">01. SECURED DEBT</span>
            <span class="text-[9px] font-black text-[#089981]">MAX SENIORITY</span>
          </div>
          <div class="text-[11px] font-bold text-[#131722]">Collateralized claims on assets. Paid first in stress.</div>
        </div>
      </div>
      
      <div class="p-3 border border-[#e0e3eb] rounded-lg opacity-80">
        <div class="flex justify-between items-center mb-1">
          <span class="text-[9px] font-black text-[#787b86] uppercase tracking-tighter">02. UNSECURED DEBT</span>
        </div>
        <div class="text-[11px] font-bold text-[#131722]">General credit claims. Junior to secured holders.</div>
      </div>

      <div class="p-3 border border-[#e0e3eb] rounded-lg opacity-60">
        <div class="flex justify-between items-center mb-1">
          <span class="text-[9px] font-black text-[#787b86] uppercase tracking-tighter">03. PREFERRED EQUITY</span>
        </div>
        <div class="text-[11px] font-bold text-[#131722]">Hybrid tier. Fixed dividends, limited upside.</div>
      </div>

      <div class="p-3 bg-[#f23645]/5 border border-[#f23645]/20 rounded-lg">
        <div class="flex justify-between items-center mb-1">
          <span class="text-[9px] font-black text-[#f23645] uppercase tracking-tighter">04. COMMON EQUITY</span>
          <span class="text-[9px] font-black text-[#f23645]">RESIDUAL CLAIM</span>
        </div>
        <div class="text-[11px] font-bold text-[#131722]">Last in line for assets. Full claim on growth.</div>
      </div>
    </div>

    <div class="bg-[#131722] p-6 rounded-xl text-white relative overflow-hidden ring-1 ring-white/10">
      <div class="relative z-10">
        <div class="flex items-center gap-2 mb-4">
           <div class="w-8 h-8 rounded bg-[#2962ff] flex items-center justify-center">
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
           </div>
           <div>
             <span class="text-[9px] font-black text-white/50 uppercase tracking-[0.2em] block leading-none">The Asset Wrapper</span>
             <span class="text-[14px] font-black">ETF / FUND STRUCTURE</span>
           </div>
        </div>
        <p class="text-[10px] text-white/70 leading-relaxed font-medium">
          Orchestrates a diversified basket of the underlying claims above. 
          Managed via algorithmic rebalancing and structural indices.
        </p>
        <div class="mt-4 flex gap-2">
          <span class="px-1.5 py-0.5 bg-white/10 rounded text-[8px] font-bold text-white/50 uppercase">TER: 0.12%</span>
          <span class="px-1.5 py-0.5 bg-white/10 rounded text-[8px] font-bold text-white/50 uppercase">iNAV Live</span>
        </div>
      </div>
      <div class="absolute -right-4 -bottom-4 w-32 h-32 bg-[#2962ff] opacity-10 blur-3xl"></div>
    </div>
  </div>
  
  <div class="bg-[#f1f3f6] px-4 py-2 border-t border-[#e0e3eb] flex justify-between tracking-tighter">
    <p class="text-[9px] font-black uppercase text-[#787b86]">Structural Hierarchy: Claim Priority & Product Wrappers</p>
    <p class="text-[9px] font-black text-[#2962ff]">SIERRA CAPITAL MAP</p>
  </div>
</div>

<h3 class="text-xl font-bold text-intense-indigo mt-8 mb-4">B) Stocks: residual claims and uncertainty</h3>
<p>Stocks are residual claims: holders benefit if the business creates value, but they sit behind creditors. Outcomes depend on future cashflows, competition, and capital structure decisions (including dilution and buybacks).</p>

<h3 class="text-xl font-bold text-intense-indigo mt-8 mb-4">C) Bonds: contractual cashflows with issuer risk</h3>
<p>Bonds are contractual obligations with defined payment terms, but “defined” does not mean “guaranteed.” Key concepts include credit risk, duration (rate sensitivity), covenants, and liquidity.</p>

<h3 class="text-xl font-bold text-intense-indigo mt-8 mb-4">D) ETFs: wrapper mechanics (exposure + costs + rules)</h3>
<p>ETFs are traded fund shares. You are exposed to the underlying holdings and to fund mechanics: index methodology, rebalancing, tracking difference, securities lending policies, and fees.</p>

<div class="bg-gray-50 p-6 rounded-xl border border-gray-100 mt-8">
  <h4 class="font-bold text-intense-indigo mb-3 italic">Confirmation (what should be true if understood)</h4>
  <ul class="list-disc pl-5 space-y-2 text-sm">
    <li>You can state, in one paragraph, what a stock, bond, and ETF share represents as a claim.</li>
    <li>You can explain how each instrument can lose money via different mechanisms (business risk vs credit risk vs tracking/structure risk).</li>
    <li>You can identify the wrapper vs underlying exposure for a fund.</li>
  </ul>
</div>
</div>`
  },
  {
    id: 'risk-and-return',
    title: 'Risk and return — compounding, inflation, real vs nominal',
    content: `<div class="text-justify space-y-4">
<p>Build correct intuition for why returns exist, how compounding works, and why inflation changes what “growth” means.</p>

<h3 class="text-xl font-bold text-intense-indigo mt-8 mb-4">A) Risk as uncertainty with consequences</h3>
<p>Risk is not only day-to-day price movement. It includes permanent loss, inability to exit, and scenarios where a position behaves poorly when you need it most. Volatility is a surface symptom; it can be informative, but it is not a complete definition.</p>

<h3 class="text-xl font-bold text-intense-indigo mt-8 mb-4">B) Compounding as path-dependent growth</h3>
<p>Compounding means returns build on prior returns. The sequence of returns matters: large drawdowns require disproportionately large gains to recover. This is a structural reason drawdown control matters.</p>

<!-- Visual: Drawdown Recovery & Real Returns (Compounding Efficiency) -->
<div class="my-8 rounded-xl border border-[#e0e3eb] bg-white overflow-hidden shadow-2xl font-sans">
  <div class="bg-[#f8f9fb] border-b border-[#e0e3eb] px-4 py-2 flex items-center justify-between font-mono">
    <div class="flex items-center gap-3">
        <span class="text-[12px] font-black text-[#131722]">COMPOUNDING ENGINE</span>
        <span class="px-1.5 py-0.5 bg-[#e0e3eb] text-[#787b86] text-[9px] font-bold rounded uppercase">Systemic</span>
    </div>
    <div class="flex gap-4">
        <span class="text-[10px] text-[#f23645] font-black uppercase">Drawdown Asymmetry Model</span>
    </div>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-0 bg-white">
    <div class="md:col-span-2 p-6 border-b md:border-b-0 md:border-r border-[#e0e3eb]">
      <div class="flex justify-between items-center mb-6">
        <span class="text-[10px] font-black uppercase tracking-[0.1em] text-[#787b86]">The Recovery Gap Ratio</span>
        <span class="text-[8px] font-bold text-[#f23645] bg-[#f23645]/10 px-1.5 py-0.5 rounded">EXPONENTIAL DEFICIT</span>
      </div>
      <div class="aspect-[2/1] relative">
        <svg viewBox="0 0 400 180" class="w-full h-full">
          <g stroke="#f0f3fa" stroke-width="0.5">
            <line x1="0" y1="40" x2="400" y2="40" />
            <line x1="0" y1="90" x2="400" y2="90" />
            <line x1="0" y1="140" x2="400" y2="140" />
          </g>
          <!-- Recovery Curve -->
          <path d="M 40 150 Q 180 145 360 20" fill="none" stroke="#2962ff" stroke-width="2.5" />
          
          <g font-family="monospace" font-size="7" font-weight="900">
             <circle cx="80" cy="148" r="3" fill="#131722" />
             <text x="80" y="165" text-anchor="middle" fill="#787b86">-10%</text>
             <text x="80" y="138" text-anchor="middle" fill="#131722">+11%</text>

             <circle cx="200" cy="120" r="3" fill="#131722" />
             <text x="200" y="138" text-anchor="middle" fill="#787b86">-50%</text>
             <text x="200" y="110" text-anchor="middle" fill="#f23645">+100%</text>

             <circle cx="320" cy="45" r="4" fill="#f23645" />
             <text x="320" y="65" text-anchor="middle" fill="#787b86">-90%</text>
             <text x="320" y="32" text-anchor="middle" fill="#f23645">+900%</text>
          </g>
        </svg>
      </div>
    </div>
    
    <div class="p-6 bg-[#fcfdfe] space-y-6">
      <div>
        <span class="text-[9px] font-black uppercase text-[#787b86] block mb-4">Real Value Erosion</span>
        <div class="space-y-4">
           <div>
             <div class="flex justify-between text-[10px] font-bold mb-1">
               <span class="text-[#131722]">Nominal Growth</span>
               <span class="text-[#2962ff]">+8.2%</span>
             </div>
             <div class="h-2 bg-[#f0f3fa] rounded-full overflow-hidden">
               <div class="h-full bg-[#2962ff]" style="width: 82%"></div>
             </div>
           </div>
           <div>
             <div class="flex justify-between text-[10px] font-bold mb-1">
               <span class="text-[#131722]">Inflation Adjustment</span>
               <span class="text-[#f23645]">-5.0%</span>
             </div>
             <div class="h-2 bg-[#f0f3fa] rounded-full overflow-hidden">
               <div class="h-full bg-[#f23645]" style="width: 50%"></div>
             </div>
           </div>
           <div class="pt-2 border-t border-[#e0e3eb]">
             <div class="flex justify-between text-[12px] font-black">
               <span class="text-[#131722]">REAL RETURN</span>
               <span class="text-[#089981]">+3.2%</span>
             </div>
           </div>
        </div>
      </div>
      <div class="p-3 bg-white border border-[#e0e3eb] rounded-lg">
        <span class="text-[8px] font-black text-[#787b86] uppercase block mb-1 tracking-tighter">Insight Buffer</span>
        <p class="text-[9px] font-bold text-[#131722] leading-relaxed">Large drawdowns break the compounding path. Preserving capital is geometrically more efficient than chasing high-variance returns.</p>
      </div>
    </div>
  </div>

  <div class="bg-[#f1f3f6] px-4 py-2 border-t border-[#e0e3eb] flex justify-between tracking-tighter text-left">
    <p class="text-[9px] font-black uppercase text-[#787b86]">Path Dependency Mechanics: Growth, Loss, and Purchasing Power</p>
    <p class="text-[9px] font-black text-[#2962ff]">SIERRA ANALYTICS</p>
  </div>
</div>

<h3 class="text-xl font-bold text-intense-indigo mt-8 mb-4">C) Inflation: nominal vs real</h3>
<p>Nominal values are measured in currency; real values adjust for purchasing power. Comparing returns across time without inflation adjustment can create false confidence. <strong>Emphasis phrase: real vs nominal.</strong></p>

<h3 class="text-xl font-bold text-intense-indigo mt-8 mb-4">D) Risk premia (conceptual)</h3>
<p>Expected return is compensation for bearing certain risks. The point is not to memorize categories, but to recognize that “higher return” usually implies “harder to hold” in at least one scenario.</p>

<div class="bg-gray-50 p-6 rounded-xl border border-gray-100 mt-8">
  <h4 class="font-bold text-intense-indigo mb-3 italic">Confirmation (what should be true if understood)</h4>
  <ul class="list-disc pl-5 space-y-2 text-sm">
    <li>You can explain the difference between volatility and permanent loss using a simple example.</li>
    <li>You can compute (conceptually) why a drawdown requires a larger percentage gain to recover.</li>
    <li>You can explain real vs nominal and why inflation matters.</li>
  </ul>
</div>
</div>`
  },
  {
    id: 'diversification',
    title: 'Diversification — correlation, drawdowns, portfolio intuition',
    content: `<div class="text-justify space-y-4">
<p>Understand how portfolio behavior emerges from correlations, and why diversification is a drawdown tool, not a guarantee.</p>

<h3 class="text-xl font-bold text-intense-indigo mt-8 mb-4">A) Correlation is the engine</h3>
<p>Diversification works when parts of the portfolio do not move together in the same direction at the same time. The benefit is reduced drawdown severity and smoother paths, not necessarily higher returns.</p>

<!-- Visual: Correlation Mechanics (Diversification Interface) -->
<div class="my-8 rounded-xl border border-[#e0e3eb] bg-white overflow-hidden shadow-2xl font-sans">
  <div class="bg-[#f8f9fb] border-b border-[#e0e3eb] px-4 py-2 flex items-center justify-between font-mono">
    <div class="flex items-center gap-3">
        <span class="text-[12px] font-black text-[#131722]">PORTFOLIO SYNERGY</span>
        <span class="px-1.5 py-0.5 bg-[#e0e3eb] text-[#787b86] text-[9px] font-bold rounded uppercase">Analytics</span>
    </div>
    <div class="flex gap-4">
        <span class="text-[10px] text-[#2962ff] font-black uppercase">Correlation Impact Map</span>
    </div>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-0 bg-white">
    <div class="p-6 border-b md:border-b-0 md:border-r border-[#e0e3eb]">
       <span class="text-[9px] font-black uppercase text-[#787b86] block mb-4">Asset Correlation Matrix (Dynamic)</span>
       <div class="grid grid-cols-6 gap-1 bg-[#f0f3fa] p-1 rounded">
          ${[...Array(36)].map((_, i) => {
            const row = Math.floor(i / 6);
            const col = i % 6;
            const colors = ['#2962ff', '#089981', '#f23645', '#787b86'];
            const opacity = row === col ? 1 : Math.random() * 0.7 + 0.1;
            const color = row === col ? '#2962ff' : colors[Math.floor(Math.random() * colors.length)];
            return `<div class="aspect-square rounded-[1px]" style="background-color: ${color}; opacity: ${opacity}"></div>`;
          }).join('')}
       </div>
       <div class="flex justify-between mt-2 font-mono text-[7px] font-bold text-[#787b86] uppercase">
         <span>Asset Prime 01</span>
         <span>Asset Prime 06</span>
       </div>
    </div>

    <div class="p-6 bg-[#fcfdfe]">
      <span class="text-[9px] font-black uppercase text-[#787b86] block mb-4">Path Comparison: High vs. Low Correlation</span>
      <div class="h-32 w-full relative mb-4">
        <svg viewBox="0 0 400 160" class="w-full h-full overflow-visible">
          <g stroke="#f0f3fa" stroke-width="0.5">
            <line x1="0" y1="40" x2="400" y2="40" />
            <line x1="0" y1="80" x2="400" y2="80" />
            <line x1="0" y1="120" x2="400" y2="120" />
          </g>
          <!-- Concentrated/High Corr -->
          <path d="M 0 80 L 40 40 L 80 120 L 120 20 L 160 140 L 200 60 L 240 100 L 280 10 L 320 150 L 360 40 L 400 90" fill="none" stroke="#f23645" stroke-width="1" stroke-dasharray="2,2" opacity="0.4" />
          <!-- Diversified/Low Corr -->
          <path d="M 0 80 L 40 75 L 80 85 L 120 78 L 160 82 L 200 80 L 240 85 L 280 75 L 320 82 L 360 78 L 400 80" fill="none" stroke="#2962ff" stroke-width="2.5" />
        </svg>
      </div>
      <div class="flex gap-4">
        <div class="flex items-center gap-1.5">
          <div class="w-2 h-2 rounded-full bg-[#f23645] opacity-40"></div>
          <span class="text-[8px] font-black text-[#131722] uppercase tracking-tighter">High Concentration</span>
        </div>
        <div class="flex items-center gap-1.5">
          <div class="w-2 h-2 rounded-full bg-[#2962ff]"></div>
          <span class="text-[8px] font-black text-[#131722] uppercase tracking-tighter">Diversified Alpha</span>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-[#f1f3f6] px-4 py-2 border-t border-[#e0e3eb] flex justify-between tracking-tighter text-left">
    <p class="text-[9px] font-black uppercase text-[#787b86]">Portfolio Architecture: Smoothing Growth via Uncorrelated Exposure</p>
    <p class="text-[9px] font-black text-[#2962ff]">SIERRA TERMINAL</p>
  </div>
</div>

<h3 class="text-xl font-bold text-intense-indigo mt-8 mb-4">B) Concentration vs diversification</h3>
<p>Concentration increases dependence on a small number of outcomes. Diversification reduces dependence, but can also dilute exposure. The point is not “max diversification,” but “right-sized dependence for your constraints.”</p>

<h3 class="text-xl font-bold text-intense-indigo mt-8 mb-4">C) Why correlations change</h3>
<p>Correlation is not a constant. In stress, correlations can rise. That means diversification needs to be tested under adverse scenarios, not only in calm periods.</p>

<h3 class="text-xl font-bold text-intense-indigo mt-8 mb-4">D) Portfolio intuition: contribution to risk</h3>
<p>A position’s impact depends on its size and how it interacts with the rest of the portfolio. A small position that spikes in stress can be valuable; a large position highly correlated with existing risk can dominate portfolio drawdowns.</p>

<div class="bg-gray-50 p-6 rounded-xl border border-gray-100 mt-8">
  <h4 class="font-bold text-intense-indigo mb-3 italic">Confirmation (what should be true if understood)</h4>
  <ul class="list-disc pl-5 space-y-2 text-sm">
    <li>You can explain why “10 positions” is not automatically diversified.</li>
    <li>You can describe how correlation affects drawdowns in simple terms.</li>
    <li>You can identify at least two scenarios where correlations may rise.</li>
  </ul>
</div>
</div>`
  },
  {
    id: 'derivatives-and-greeks',
    title: 'Derivatives + the Greeks (intuition-first)',
    content: `<div class="text-justify space-y-4">
<p>Understand derivatives as payoff contracts and Greeks as sensitivities—while respecting that options are nonlinear and Greeks change.</p>

<h3 class="text-xl font-bold text-intense-indigo mt-8 mb-4">A) What a derivative is (contract over an underlying)</h3>
<p>A derivative’s value is derived from an underlying variable (price, rate, index, FX rate). The core concept is the payoff: what happens at different underlying outcomes, and how that differs from owning the underlying directly.</p>

<!-- Visual: Payoff Dynamics & Greek Sensitivities (Options Blueprint) -->
<div class="my-8 rounded-xl border border-[#e0e3eb] bg-white overflow-hidden shadow-2xl font-sans text-left">
  <div class="bg-[#f8f9fb] border-b border-[#e0e3eb] px-4 py-2 flex items-center justify-between font-mono">
    <div class="flex items-center gap-3">
        <span class="text-[12px] font-black text-[#131722]">DERIVATIVE ENGINE</span>
        <span class="px-1.5 py-0.5 bg-[#e0e3eb] text-[#787b86] text-[9px] font-bold rounded uppercase">Nonlinear</span>
    </div>
    <div class="flex gap-4">
        <span class="text-[10px] text-[#2962ff] font-black uppercase">Payoff & Sensitivity Map</span>
    </div>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-0 bg-white">
    <div class="p-6 border-b md:border-b-0 md:border-r border-[#e0e3eb]">
       <span class="text-[9px] font-black uppercase text-[#787b86] block mb-4">Vanilla Payoff Structures (at Expiry)</span>
       <div class="grid grid-cols-2 gap-4">
         <div class="aspect-square bg-white border border-[#e0e3eb] rounded p-2 relative">
           <span class="absolute top-1 left-1 text-[8px] font-black text-[#2962ff] uppercase">Bullish Call</span>
           <svg viewBox="0 0 100 100" class="w-full h-full">
             <line x1="10" y1="80" x2="50" y2="80" stroke="#787b86" stroke-width="1" stroke-dasharray="2,2" />
             <path d="M 10 80 L 50 80 L 90 20" fill="none" stroke="#131722" stroke-width="2.5" />
             <circle cx="50" cy="80" r="2" fill="#2962ff" />
           </svg>
         </div>
         <div class="aspect-square bg-white border border-[#e0e3eb] rounded p-2 relative">
           <span class="absolute top-1 left-1 text-[8px] font-black text-[#f23645] uppercase">Bearish Put</span>
           <svg viewBox="0 0 100 100" class="w-full h-full">
             <line x1="50" y1="80" x2="90" y2="80" stroke="#787b86" stroke-width="1" stroke-dasharray="2,2" />
             <path d="M 10 20 L 50 80 L 90 80" fill="none" stroke="#131722" stroke-width="2.5" />
             <circle cx="50" cy="80" r="2" fill="#f23645" />
           </svg>
         </div>
       </div>
    </div>

    <div class="p-6 bg-[#fcfdfe]">
      <span class="text-[9px] font-black uppercase text-[#787b86] block mb-4">Greeks Sensitivity Dashboard</span>
      <div class="grid grid-cols-2 gap-3">
        <div class="p-3 bg-white border border-[#e0e3eb] rounded-lg">
          <div class="flex justify-between items-center mb-2">
            <span class="text-[9px] font-black text-[#131722]">DELTA</span>
            <span class="text-[8px] font-bold text-[#2962ff]">0.52</span>
          </div>
          <div class="h-1.5 bg-[#f0f3fa] rounded-full overflow-hidden">
             <div class="h-full bg-[#2962ff]" style="width: 52%"></div>
          </div>
        </div>
        <div class="p-3 bg-white border border-[#e0e3eb] rounded-lg">
          <div class="flex justify-between items-center mb-2">
            <span class="text-[9px] font-black text-[#131722]">GAMMA</span>
            <span class="text-[8px] font-bold text-[#2962ff]">0.08</span>
          </div>
          <div class="h-1.5 bg-[#f0f3fa] rounded-full overflow-hidden">
             <div class="h-full bg-[#2962ff]" style="width: 25%"></div>
          </div>
        </div>
        <div class="p-3 bg-white border border-[#e0e3eb] rounded-lg">
          <div class="flex justify-between items-center mb-2">
            <span class="text-[9px] font-black text-[#131722]">THETA</span>
            <span class="text-[8px] font-bold text-[#f23645]">-12.4</span>
          </div>
          <div class="h-1.5 bg-[#f0f3fa] rounded-full overflow-hidden">
             <div class="h-full bg-[#f23645]" style="width: 40%"></div>
          </div>
        </div>
        <div class="p-3 bg-white border border-[#e0e3eb] rounded-lg">
          <div class="flex justify-between items-center mb-2">
            <span class="text-[9px] font-black text-[#131722]">VEGA</span>
            <span class="text-[8px] font-bold text-[#2962ff]">24.8</span>
          </div>
          <div class="h-1.5 bg-[#f0f3fa] rounded-full overflow-hidden">
             <div class="h-full bg-[#2962ff]" style="width: 65%"></div>
          </div>
        </div>
      </div>
      <p class="mt-4 text-[8px] font-bold text-[#787b86] italic leading-tight uppercase font-mono">Dynamic Greeks: Sensitivities iterate based on Price, Time, and Volatility adjustments.</p>
    </div>
  </div>

  <div class="bg-[#f1f3f6] px-4 py-2 border-t border-[#e0e3eb] flex justify-between tracking-tighter">
    <p class="text-[9px] font-black uppercase text-[#787b86]">Nonlinear Exposed: Payoff Symmetry & Active Sensitivity</p>
    <p class="text-[9px] font-black text-[#2962ff]">SIERRA DERIVATIVES</p>
  </div>
</div>

<h3 class="text-xl font-bold text-intense-indigo mt-8 mb-4">B) Options are nonlinear (why that matters)</h3>
<p>Options have convex payoffs: the relationship between underlying moves and option value is not constant. This nonlinearity is why small assumptions can have large consequences, and why “same direction” does not mean “same exposure.” <strong>Emphasis phrase: options are nonlinear.</strong></p>

<h3 class="text-xl font-bold text-intense-indigo mt-8 mb-4">C) Greeks as sensitivities (not constants)</h3>
<p>Greeks describe sensitivity of option value to changes in underlying variables:</p>
<ul class="list-disc pl-5 space-y-1">
  <li><strong>Delta:</strong> sensitivity to underlying price (first-order).</li>
  <li><strong>Gamma:</strong> how delta changes (second-order; curvature).</li>
  <li><strong>Vega:</strong> sensitivity to implied volatility.</li>
  <li><strong>Theta:</strong> sensitivity to time (time decay).</li>
  <li><strong>Rho:</strong> sensitivity to rates (often smaller but context-dependent).</li>
</ul>
<p>Key discipline: Greeks change with price, time, and volatility. A snapshot Greek is not a permanent property.</p>

<h3 class="text-xl font-bold text-intense-indigo mt-8 mb-4">D) Implied volatility intuition</h3>
<p>Implied volatility is a market-implied parameter that reflects expected variability and supply/demand for options. Higher implied volatility typically makes options more expensive, but it is not a direct forecast you can “take to the bank.”</p>

<div class="bg-gray-50 p-6 rounded-xl border border-gray-100 mt-8">
  <h4 class="font-bold text-intense-indigo mb-3 italic">Confirmation (what should be true if understood)</h4>
  <ul class="list-disc pl-5 space-y-2 text-sm">
    <li>You can sketch the payoff of a call/put at expiry in plain language.</li>
    <li>You can explain what each Greek measures as a sensitivity.</li>
    <li>You can explain why delta/gamma/theta/vega change as conditions change.</li>
  </ul>
</div>
</div>`
  },
  {
    id: 'where-and-how-to-trade',
    title: 'Where and how to trade — brokers, orders, execution, fees',
    content: `<div class="text-justify space-y-4">
<p>Reduce avoidable execution errors by understanding orders, market mechanics, and cost categories (without endorsing any broker).</p>

<h3 class="text-xl font-bold text-intense-indigo mt-8 mb-4">A) Broker as access layer (not strategy)</h3>
<p>A broker is an access and custody layer. The discipline is to understand what you are paying for (commissions, spreads, financing) and what constraints apply (available order types, trading hours, access to venues, reporting).</p>

<h3 class="text-xl font-bold text-intense-indigo mt-8 mb-4">B) Order types: market, limit, stop (core behaviors)</h3>
<p><strong>Market order:</strong> prioritizes execution, accepts uncertain price (slippage risk).<br/>
<strong>Limit order:</strong> prioritizes price, accepts non-execution or partial execution.<br/>
<strong>Stop order (and stop-limit):</strong> triggers based on price conditions; can behave differently in fast markets and gaps.</p>
<p>Core idea: order type is a trade-off between certainty of fill and certainty of price.</p>

<h3 class="text-xl font-bold text-intense-indigo mt-8 mb-4">C) Spreads, slippage, and partial fills</h3>
<p>The displayed price is not the price you necessarily receive. Spreads represent a cost of immediacy; slippage is the difference between expected and realized execution price. Partial fills occur when liquidity is limited; execution may occur in pieces at different prices.</p>

<h3 class="text-xl font-bold text-intense-indigo mt-8 mb-4">D) Trading hours, auctions, and market states</h3>
<p>Markets have open/close auctions, varying liquidity during the day, and different rules across venues. Execution quality can depend on timing and market state (calm vs fast).</p>

<h3 class="text-xl font-bold text-intense-indigo mt-8 mb-4">E) Fees: categories that matter</h3>
<p>Common categories include commissions, exchange/regulatory fees, spreads (implicit cost), financing/borrowing costs (for leverage or shorting), platform/data fees, and currency conversion fees. Even when “commission-free,” implicit costs can remain.</p>

<div class="bg-gray-50 p-6 rounded-xl border border-gray-100 mt-8">
  <h4 class="font-bold text-intense-indigo mb-3 italic">Confirmation (what should be true if understood)</h4>
  <ul class="list-disc pl-5 space-y-2 text-sm">
    <li>You can explain when a market order is appropriate and what cost it risks.</li>
    <li>You can explain why a limit order may not fill (or may partially fill).</li>
    <li>You can list the major explicit and implicit fee categories that affect outcomes.</li>
  </ul>
</div>
</div>`
  },
  {
    id: 'forex-basics',
    title: 'Forex basics — pairs, drivers, leverage, risk',
    content: `<div class="text-justify space-y-4">
<p>Understand FX quotation mechanics, what moves currencies, and why leverage can make FX appear “stable” until it isn’t.</p>

<h3 class="text-xl font-bold text-intense-indigo mt-8 mb-4">A) Pairs: base vs quote currency</h3>
<p>FX is quoted in pairs (e.g., BASE/QUOTE). The quote tells you how many units of the quote currency equal one unit of the base currency. This is a common source of confusion, especially when thinking about “up” and “down.”</p>

<!-- Visual: FX Pair Anatomy & Leverage Scalability (Currency Engine) -->
<div class="my-8 rounded-xl border border-[#e0e3eb] bg-white overflow-hidden shadow-2xl font-sans">
  <div class="bg-[#f8f9fb] border-b border-[#e0e3eb] px-4 py-2 flex items-center justify-between font-mono">
    <div class="flex items-center gap-3">
        <span class="text-[12px] font-black text-[#131722]">FOREIGN EXCHANGE</span>
        <span class="px-1.5 py-0.5 bg-[#e0e3eb] text-[#787b86] text-[9px] font-bold rounded uppercase">Global</span>
    </div>
    <div class="flex gap-4">
        <span class="text-[10px] text-[#2962ff] font-black uppercase">Quotation & Leverage Interface</span>
    </div>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-0 bg-white">
    <div class="p-8 flex flex-col justify-center items-center border-b md:border-b-0 md:border-r border-[#e0e3eb]">
       <div class="flex items-center gap-4 text-3xl font-black font-mono tracking-tighter">
         <span class="text-[#2962ff]">EUR</span>
         <span class="text-[#e0e3eb]">/</span>
         <span class="text-[#131722]">USD</span>
       </div>
       <div class="flex gap-12 mt-6">
          <div class="text-center">
            <span class="text-[9px] font-black text-[#787b86] uppercase block mb-1">BASE</span>
            <span class="px-3 py-1 bg-[#131722] text-white text-[10px] font-black rounded-sm">1.00 UNIT</span>
          </div>
          <div class="text-center">
            <span class="text-[9px] font-black text-[#787b86] uppercase block mb-1">QUOTE</span>
            <span class="px-3 py-1 border border-[#131722] text-[#131722] text-[10px] font-black rounded-sm">VARIABLE</span>
          </div>
       </div>
       <p class="mt-6 text-[10px] font-bold text-[#787b86] uppercase font-mono tracking-widest text-center">Relative Value: How many Dollars for 1 Euro?</p>
    </div>

    <div class="p-8 bg-[#fcfdfe] space-y-6">
       <span class="text-[9px] font-black uppercase text-[#787b86] block tracking-normal">Leverage Magnification Model (1% Spot Move)</span>
       <div class="space-y-4">
          <div class="flex items-center gap-4">
            <span class="text-[10px] font-black text-[#131722] w-8">1X</span>
            <div class="flex-1 h-3 bg-[#f0f3fa] rounded-sm overflow-hidden">
              <div class="h-full bg-[#089981]" style="width: 2%"></div>
            </div>
            <span class="text-[10px] font-black text-[#089981]">1% P&L</span>
          </div>
          <div class="flex items-center gap-4">
            <span class="text-[10px] font-black text-[#131722] w-8">20X</span>
            <div class="flex-1 h-3 bg-[#f0f3fa] rounded-sm overflow-hidden">
              <div class="h-full bg-[#2962ff]" style="width: 40%"></div>
            </div>
            <span class="text-[10px] font-black text-[#2962ff]">20% P&L</span>
          </div>
          <div class="flex items-center gap-4">
            <span class="text-[10px] font-black text-[#131722] w-8">50X</span>
            <div class="flex-1 h-3 bg-[#f0f3fa] rounded-sm overflow-hidden relative">
              <div class="h-full bg-[#f23645]" style="width: 100%"></div>
              <div class="absolute inset-0 flex items-center justify-center">
                <span class="text-[8px] font-black text-white uppercase tracking-widest">CRITICAL MARGIN</span>
              </div>
            </div>
            <span class="text-[10px] font-black text-[#f23645]">50% P&L</span>
          </div>
       </div>
    </div>
  </div>

  <div class="bg-[#f1f3f6] px-4 py-2 border-t border-[#e0e3eb] flex justify-between tracking-tighter">
    <p class="text-[9px] font-black uppercase text-[#787b86]">Exotic Relative Value: Quotation Mechanics & Notional Geometries</p>
    <p class="text-[9px] font-black text-[#2962ff]">SIERRA FOREX TERMINAL</p>
  </div>
</div>

<h3 class="text-xl font-bold text-intense-indigo mt-8 mb-4">B) FX returns are relative</h3>
<p>In FX, you are always comparing two currencies. A “strong” currency is strong only relative to another. This makes macro drivers (inflation differentials, growth, risk sentiment) particularly important.</p>

<h3 class="text-xl font-bold text-intense-indigo mt-8 mb-4">C) Drivers: rates, inflation, growth, risk sentiment</h3>
<p>Major drivers can include interest-rate differentials, inflation expectations, trade balances, capital flows, and risk-on/risk-off behavior. FX can also respond to policy communication and surprise events.</p>

<h3 class="text-xl font-bold text-intense-indigo mt-8 mb-4">D) Leverage risk and margin mechanics</h3>
<p>FX is often traded with leverage, which magnifies both gains and losses. Leverage turns small moves into large P&L swings relative to your capital and can force liquidation through margin calls.</p>

<h3 class="text-xl font-bold text-intense-indigo mt-8 mb-4">E) Why FX can look “stable” until it isn’t</h3>
<p>Daily FX moves can appear small, which can invite oversizing. But leveraged exposure converts small percentage changes into meaningful capital changes. Stress events can also produce rapid gaps and volatility spikes.</p>

<div class="bg-gray-50 p-6 rounded-xl border border-gray-100 mt-8">
  <h4 class="font-bold text-intense-indigo mb-3 italic">Confirmation (what should be true if understood)</h4>
  <ul class="list-disc pl-5 space-y-2 text-sm">
    <li>You can state which currency is base vs quote in a pair and what “up” means.</li>
    <li>You can explain why interest-rate differentials can influence FX.</li>
    <li>You can describe how leverage changes risk (including margin call mechanics) at a conceptual level.</li>
  </ul>
</div>
</div>`
  },
  {
    id: 'position-sizing',
    title: 'Position sizing and personal risk limits',
    content: `<div class="text-justify space-y-4">
<p>Translate understanding into controlled exposure using risk budgets, max-loss logic, and invalidation conditions (non-advisory).</p>

<h3 class="text-xl font-bold text-intense-indigo mt-8 mb-4">A) Risk budget as a constraint</h3>
<p>Sizing begins with constraints: how much loss (financial and behavioral) you can tolerate without breaking your process. A risk budget is the portion of capital and attention you can allocate to uncertainty without forcing impulsive decisions.</p>

<!-- Visual: Risk Budget Architecture (Scenario Mapping Interface) -->
<div class="my-8 rounded-xl border border-[#e0e3eb] bg-white overflow-hidden shadow-2xl font-sans text-left">
  <div class="bg-[#f8f9fb] border-b border-[#e0e3eb] px-4 py-2 flex items-center justify-between font-mono">
    <div class="flex items-center gap-3">
        <span class="text-[12px] font-black text-[#131722]">SURVIVABILITY ENGINE</span>
        <span class="px-1.5 py-0.5 bg-[#e0e3eb] text-[#787b86] text-[9px] font-bold rounded uppercase">Systematic</span>
    </div>
    <div class="flex gap-4">
        <span class="text-[10px] text-[#2962ff] font-black uppercase">Capital Allocation Limits</span>
    </div>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-0 bg-white">
    <div class="p-6 border-b md:border-b-0 md:border-r border-[#e0e3eb]">
       <span class="text-[9px] font-black uppercase text-[#787b86] block mb-4">Hard Risk Constraints</span>
       <div class="space-y-3">
          <div class="p-3 bg-[#f8f9fb] border border-[#e0e3eb] rounded-lg">
             <div class="flex justify-between items-center mb-1">
               <span class="text-[8px] font-black text-[#787b86] uppercase">Max Unit Loss</span>
               <span class="text-[10px] font-black text-[#f23645]">0.50% / EQ</span>
             </div>
             <div class="h-1 bg-[#e0e3eb] rounded-full overflow-hidden">
               <div class="h-full bg-[#f23645]" style="width: 25%"></div>
             </div>
          </div>
          <div class="p-3 bg-[#f8f9fb] border border-[#e0e3eb] rounded-lg">
             <div class="flex justify-between items-center mb-1">
               <span class="text-[8px] font-black text-[#787b86] uppercase">Max Portfolio VaR</span>
               <span class="text-[10px] font-black text-[#f23645]">2.20% / DAY</span>
             </div>
             <div class="h-1 bg-[#e0e3eb] rounded-full overflow-hidden">
               <div class="h-full bg-[#f23645]" style="width: 45%"></div>
             </div>
          </div>
          <div class="p-3 bg-[#f8f9fb] border border-[#e0e3eb] rounded-lg">
             <div class="flex justify-between items-center mb-1">
               <span class="text-[8px] font-black text-[#787b86] uppercase">Drawdown Kill-Switch</span>
               <span class="text-[10px] font-black text-[#131722]">15.00% / TOTAL</span>
             </div>
             <div class="h-1 bg-[#e0e3eb] rounded-full overflow-hidden">
               <div class="h-full bg-[#131722]" style="width: 75%"></div>
             </div>
          </div>
       </div>
    </div>

    <div class="p-6 bg-[#fcfdfe]">
      <span class="text-[9px] font-black uppercase text-[#787b86] block mb-4">Scenario Sizing Blueprint</span>
      <div class="space-y-1 font-mono">
        <div class="grid grid-cols-4 gap-2 text-[8px] font-black text-[#787b86] px-2 mb-2">
           <span>SCENARIO</span>
           <span>PROB</span>
           <span>OUTCOME</span>
           <span>EDGE</span>
        </div>
        <div class="grid grid-cols-4 gap-2 bg-white p-2 border border-[#e0e3eb] rounded text-[9px] font-bold items-center mb-1">
           <span class="text-[#089981]">OPTIMAL</span>
           <span>20%</span>
           <span class="text-[#089981]">+18.2%</span>
           <span class="text-[7px]">HIGH</span>
        </div>
        <div class="grid grid-cols-4 gap-2 bg-white p-2 border border-[#e0e3eb] rounded text-[9px] font-bold items-center mb-1">
           <span class="text-[#2962ff]">CENTRAL</span>
           <span>65%</span>
           <span class="text-[#2962ff]">+4.5%</span>
           <span class="text-[7px]">MEAN</span>
        </div>
        <div class="grid grid-cols-4 gap-2 bg-white p-2 border border-[#e0e3eb] rounded text-[9px] font-bold items-center">
           <span class="text-[#f23645]">STRESS</span>
           <span>15%</span>
           <span class="text-[#f23645]">-12.0%</span>
           <span class="text-[7px]">TAIL</span>
        </div>
      </div>
      <p class="mt-4 text-[8px] font-black text-[#787b86] uppercase tracking-tighter">Survivability Logic: Not forecasting outcomes, but mapping consequences.</p>
    </div>
  </div>

  <div class="bg-[#f1f3f6] px-4 py-2 border-t border-[#e0e3eb] flex justify-between tracking-tighter">
    <p class="text-[9px] font-black uppercase text-[#787b86]">Risk Engine Alpha: Quantitative Constraints & Tail Mitigation</p>
    <p class="text-[9px] font-black text-[#2962ff]">SIERRA RISK TERMINAL</p>
  </div>
</div>

<h3 class="text-xl font-bold text-intense-indigo mt-8 mb-4">B) Max-loss logic (conceptual)</h3>
<p>Max loss is not a prediction; it is a boundary for survivability. The discipline is to define “how bad can it get in plausible scenarios” and size so that scenario does not end your process.</p>

<h3 class="text-xl font-bold text-intense-indigo mt-8 mb-4">C) Invalidation logic: what would prove you wrong?</h3>
<p>Sizing is inseparable from invalidation. If you cannot state what would invalidate your thesis (or what would change the payoff model), you cannot size responsibly.</p>

<h3 class="text-xl font-bold text-intense-indigo mt-8 mb-4">D) Concentration vs diversification decisions</h3>
<p>Concentration can increase sensitivity to being right about one factor. Diversification can reduce drawdowns but may dilute impact. The sizing choice should be tied to the role of the position in the portfolio and the correlation profile.</p>

<h3 class="text-xl font-bold text-intense-indigo mt-8 mb-4">E) Scenario sizing (base / adverse / stress)</h3>
<p>Instead of a single-point estimate, use scenarios: <strong>Base</strong> (expected environment), <strong>Adverse</strong> (plausible negative path), <strong>Stress</strong> (low-probability but meaningful impact).</p>

<div class="bg-gray-50 p-6 rounded-xl border border-gray-100 mt-8">
  <h4 class="font-bold text-intense-indigo mb-3 italic">Confirmation (what should be true if understood)</h4>
  <ul class="list-disc pl-5 space-y-2 text-sm">
    <li>You can state a risk budget and explain why it is survivable.</li>
    <li>You can define a max-loss scenario and the pathway by which it occurs.</li>
    <li>You can articulate an invalidation condition that is not “price moved against me.”</li>
  </ul>
</div>
</div>`
  },
  {
    id: 'review-routine',
    title: 'A simple weekly/monthly review routine',
    content: `<div class="text-justify space-y-4">
<p>Create a sustainable routine that reduces drift, improves learning, and prioritizes process over outcome.</p>

<h3 class="text-xl font-bold text-intense-indigo mt-8 mb-4">A) Process over outcome (review what you controlled)</h3>
<p>Outcome alone is an unreliable teacher. Reviews should focus on what was controllable: clarity of assumptions, adherence to sizing rules, execution quality, and whether decisions were consistent with constraints. <strong>Emphasis phrase: process over outcome.</strong></p>

<!-- Visual: Review Cadence & Digital Journal (Process Audit Interface) -->
<div class="my-8 rounded-xl border border-[#e0e3eb] bg-white overflow-hidden shadow-2xl font-sans text-left">
  <div class="bg-[#f8f9fb] border-b border-[#e0e3eb] px-4 py-2 flex items-center justify-between font-mono">
    <div class="flex items-center gap-3">
        <span class="text-[12px] font-black text-[#131722]">PROCESS AUDIT</span>
        <span class="px-1.5 py-0.5 bg-[#e0e3eb] text-[#787b86] text-[9px] font-bold rounded uppercase">Reflective</span>
    </div>
    <div class="flex gap-4">
        <span class="text-[10px] text-[#2962ff] font-black uppercase">Review Cadence & Journaling</span>
    </div>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-0 bg-white">
    <div class="p-6 border-b md:border-b-0 md:border-r border-[#e0e3eb]">
       <span class="text-[9px] font-black uppercase text-[#787b86] block mb-6">Review Chronology: Periodic Checkpoints</span>
       <div class="relative h-24 flex items-center justify-center">
          <div class="absolute w-full h-px bg-[#e0e3eb]"></div>
          <div class="flex justify-between w-full relative z-10 px-4">
            <div class="flex flex-col items-center group">
               <div class="w-2.5 h-2.5 rounded-full bg-[#131722] border-2 border-white ring-1 ring-[#e0e3eb]"></div>
               <span class="text-[8px] font-black mt-2 text-[#787b86]">W1</span>
               <span class="text-[7px] font-bold opacity-0 group-hover:opacity-100 transition-opacity absolute -top-8 bg-[#131722] text-white px-1.5 py-0.5 rounded">EXPOSURE</span>
            </div>
            <div class="flex flex-col items-center group">
               <div class="w-2.5 h-2.5 rounded-full bg-[#131722] border-2 border-white ring-1 ring-[#e0e3eb]"></div>
               <span class="text-[8px] font-black mt-2 text-[#787b86]">W2</span>
               <span class="text-[7px] font-bold opacity-0 group-hover:opacity-100 transition-opacity absolute -top-8 bg-[#131722] text-white px-1.5 py-0.5 rounded">DRIFT</span>
            </div>
            <div class="flex flex-col items-center group">
               <div class="w-2.5 h-2.5 rounded-full bg-[#131722] border-2 border-white ring-1 ring-[#e0e3eb]"></div>
               <span class="text-[8px] font-black mt-2 text-[#787b86]">W3</span>
               <span class="text-[7px] font-bold opacity-0 group-hover:opacity-100 transition-opacity absolute -top-8 bg-[#131722] text-white px-1.5 py-0.5 rounded">HEDGING</span>
            </div>
            <div class="flex flex-col items-center relative">
               <div class="w-10 h-10 rounded-full bg-[#2962ff] border-4 border-white shadow-lg flex items-center justify-center text-white font-black text-[10px] -mt-4">MONTH</div>
               <span class="text-[8px] font-black mt-2 text-[#2962ff]">MASTER AUDIT</span>
            </div>
          </div>
       </div>
    </div>

    <div class="p-6 bg-[#fcfdfe]">
      <span class="text-[9px] font-black uppercase text-[#787b86] block mb-4">Post-Trade Review: The Structural Journal</span>
      <div class="space-y-2 bg-white p-4 border border-[#e0e3eb] rounded-lg shadow-sm">
         <div class="grid grid-cols-2 gap-4 border-b border-[#f0f3fa] pb-2">
            <div>
               <span class="text-[7px] font-black text-[#787b86] uppercase block">Instrument ID</span>
               <span class="text-[10px] font-black text-[#131722]">SPY_P_MAR26</span>
            </div>
            <div>
               <span class="text-[7px] font-black text-[#787b86] uppercase block">Payoff Group</span>
               <span class="text-[10px] font-black text-[#f23645]">CONVEX SHORT</span>
            </div>
         </div>
         <div class="space-y-1 pt-1">
            <span class="text-[7px] font-black text-[#787b86] uppercase block">Assumption Audit</span>
            <div class="flex items-center gap-2">
               <div class="w-1 h-1 rounded-full bg-[#089981]"></div>
               <p class="text-[9px] font-medium text-[#131722]">Volatility regime shift confirmed by VIX > 25.</p>
            </div>
            <div class="flex items-center gap-2">
               <div class="w-1 h-1 rounded-full bg-[#f23645]"></div>
               <p class="text-[9px] font-medium text-[#131722]">Exit delta-hedging logic failed at close.</p>
            </div>
         </div>
      </div>
    </div>
  </div>

  <div class="bg-[#f1f3f6] px-4 py-2 border-t border-[#e0e3eb] flex justify-between tracking-tighter">
    <p class="text-[9px] font-black uppercase text-[#787b86]">Iterative Refinement: Process Control vs. Outcome variance</p>
    <p class="text-[9px] font-black text-[#2962ff]">SIERRA SYSTEM LOGS</p>
  </div>
</div>

<h3 class="text-xl font-bold text-intense-indigo mt-8 mb-4">B) Decision journal: record to learn (not to justify)</h3>
<p>A journal is not a diary. It is a structured record of: the instrument, payoff logic, risks, assumptions, sizing rationale, execution plan, and what would invalidate the thesis. The point is to compare “what you thought” to “what happened,” without rewriting history.</p>

<h3 class="text-xl font-bold text-intense-indigo mt-8 mb-4">C) Weekly checklist: drift control</h3>
<p>Weekly review is lightweight: exposures, costs, planned actions, and whether anything changed that affects your assumptions. It prevents slow rule changes that only become obvious after damage.</p>

<h3 class="text-xl font-bold text-intense-indigo mt-8 mb-4">D) Monthly checklist: deeper audit</h3>
<p>Monthly review looks at patterns: repeated errors, cost leakage, concentration drift, and whether your process is stable under stress.</p>

<div class="bg-gray-50 p-6 rounded-xl border border-gray-100 mt-8">
  <h4 class="font-bold text-intense-indigo mb-3 italic">Confirmation (what should be true if understood)</h4>
  <ul class="list-disc pl-5 space-y-2 text-sm">
    <li>You can run a weekly review in under 20 minutes using a fixed checklist.</li>
    <li>You can run a monthly review that identifies repeated errors (not just “bad luck”).</li>
    <li>You can write journal entries that separate thesis, execution, and outcome.</li>
  </ul>
</div>
</div>`
  }
];
