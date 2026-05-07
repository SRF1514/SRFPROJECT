export interface ModuleContent {
  id: string;
  title: string;
  content: string;
}

export const eventDrivenAnalysisModules: ModuleContent[] = [
  {
    id: 'how-events-are-impounded',
    title: 'How Events Are Impounded Into Prices',
    content: `<div class="text-justify space-y-4">
<!-- Visual: The Event Repricing Engine (Relational Network Interface) -->
<div class="my-8 rounded-xl border border-[#e0e3eb] bg-white overflow-hidden shadow-2xl font-sans text-left">
  <div class="bg-[#f8f9fb] border-b border-[#e0e3eb] px-4 py-2 flex items-center justify-between font-mono">
    <div class="flex items-center gap-3">
        <span class="text-[12px] font-black text-[#131722]">EVENT REPRICING ENGINE</span>
        <span class="px-1.5 py-0.5 bg-[#e0e3eb] text-[#787b86] text-[9px] font-bold rounded uppercase">Logic Flow</span>
    </div>
    <div class="flex gap-4">
        <span class="text-[10px] text-[#2962ff] font-black uppercase">Impounding Mechanism</span>
    </div>
  </div>

  <div class="p-10 bg-white">
    <div class="w-full max-w-lg mx-auto relative flex flex-col items-center">
      <div class="w-32 h-32 rounded-full border-2 border-[#131722] flex flex-col items-center justify-center bg-[#f8f9fb] shadow-xl z-20 relative outline outline-8 outline-white">
         <span class="text-[9px] font-black text-[#787b86] uppercase mb-1 tracking-widest">CORE CATALYST</span>
         <span class="text-[13px] font-black text-[#131722] leading-none text-center px-4">EVENT<br/>STRUCTURE</span>
      </div>

      <div class="grid grid-cols-2 gap-24 mt-12 w-full relative z-10">
         <div class="flex flex-col items-center group">
            <div class="w-24 h-24 rounded-xl border border-[#e0e3eb] bg-white shadow-sm flex flex-col items-center justify-center p-3 text-center group-hover:border-[#2962ff]/30 transition-all">
               <span class="text-[7px] font-black text-[#2962ff] uppercase mb-2">INPUT A</span>
               <span class="text-[10px] font-black text-[#131722] leading-tight">EXPECTATION BASELINE</span>
            </div>
         </div>
         <div class="flex flex-col items-center group">
            <div class="w-24 h-24 rounded-xl border border-[#e0e3eb] bg-white shadow-sm flex flex-col items-center justify-center p-3 text-center group-hover:border-[#2962ff]/30 transition-all">
               <span class="text-[7px] font-black text-[#2962ff] uppercase mb-2">INPUT B</span>
               <span class="text-[10px] font-black text-[#131722] leading-tight">MICROSTRUCTURE DYNAMICS</span>
            </div>
         </div>
      </div>

      <svg class="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
         <line x1="50%" y1="64" x2="25%" y2="200" stroke="#e0e3eb" stroke-width="1" stroke-dasharray="4,2" />
         <line x1="50%" y1="64" x2="75%" y2="200" stroke="#e0e3eb" stroke-width="1" stroke-dasharray="4,2" />
         <line x1="25%" y1="200" x2="75%" y2="200" stroke="#e0e3eb" stroke-width="1" stroke-dasharray="4,2" />
      </svg>
    </div>
  </div>
  
  <div class="bg-[#f1f3f6] px-4 py-2 border-t border-[#e0e3eb] flex justify-between tracking-tighter shrink-0">
    <p class="text-[9px] font-black uppercase text-[#787b86]">Systemic Impounding: Reconciling surprise vs regime constraints</p>
    <p class="text-[9px] font-black text-[#2962ff]">SIERRA REPRICING v2.0</p>
  </div>
</div>

<p>Price impounding is how new information becomes a new equilibrium price through interpretation, aggregation, risk transfer, and execution. Event-driven analysis measures not just direction, but direction + magnitude + speed + duration + breadth.</p>

<p>A catalyst changes a distribution of outcomes: the market updates the mean, variance, and tail probabilities, then adjusts risk premia demanded to hold exposure. In stressed regimes, risk premia can move faster than fundamentals—creating large moves that look “headline-driven” but are structurally about discounting and constraints.</p>

<div class="bg-slate-50 p-6 rounded-xl border border-slate-200 mt-8">
  <h4 class="font-bold text-slate-800 mb-4 flex items-center gap-2 italic">
    <span class="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
    Confirmation (what must be observed)
  </h4>
  <ul class="space-y-3 text-sm text-slate-600">
    <li class="flex items-start gap-2">
      <span class="text-blue-600 font-bold mt-0.5">•</span>
      <span>Price change consistent with the stated channel.</span>
    </li>
    <li class="flex items-start gap-2">
      <span class="text-blue-600 font-bold mt-0.5">•</span>
      <span>Volatility response consistent with uncertainty update.</span>
    </li>
    <li class="flex items-start gap-2">
      <span class="text-blue-600 font-bold mt-0.5">•</span>
      <span>Cross-market behavior consistent with the transmission path.</span>
    </li>
    <li class="flex items-start gap-2">
      <span class="text-blue-600 font-bold mt-0.5">•</span>
      <span>Volume/spread behavior consistent with real repricing, not a single fragile print.</span>
    </li>
  </ul>
</div>
</div>`
  },
  {
    id: 'event-taxonomy',
    title: 'Event Taxonomy and Classification',
    content: `<div class="text-justify space-y-4">
<p>Event taxonomy prevents category errors by forcing the question: what kind of catalyst is this, structurally? Key axes include external vs internal, scheduled vs unscheduled, macro vs micro, company-specific vs cross-market, and information event vs constraint/flow event.</p>

<!-- Visual: Event Taxonomy Matrix (Quadrative Audit Interface) -->
<div class="my-8 rounded-xl border border-[#e0e3eb] bg-white overflow-hidden shadow-2xl font-sans text-left">
  <div class="bg-[#f8f9fb] border-b border-[#e0e3eb] px-4 py-2 flex items-center justify-between font-mono">
    <div class="flex items-center gap-3">
        <span class="text-[12px] font-black text-[#131722]">EVENT TAXONOMY</span>
        <span class="px-1.5 py-0.5 bg-[#e0e3eb] text-[#787b86] text-[9px] font-bold rounded uppercase">Classification</span>
    </div>
    <div class="flex gap-4">
        <span class="text-[10px] text-[#2962ff] font-black uppercase">Strategic Analysis Matrix</span>
    </div>
  </div>

  <div class="p-8 bg-white overflow-hidden relative">
    <div class="grid grid-cols-2 gap-4 w-full max-w-lg mx-auto relative z-10">
      ${[
        { t: 'SCHEDULED / EXTERNAL', items: ['CPI / JOBS DATA', 'CB POLICY MEETINGS'], c: 'bg-[#fcfdfe] border-[#e0e3eb] text-[#2962ff]' },
        { t: 'SCHEDULED / INTERNAL', items: ['EARNINGS REPORTS', 'INVESTOR SUMMITS'], c: 'bg-[#fcfdfe] border-[#e0e3eb] text-[#2962ff]' },
        { t: 'UNSCHEDULED / EXTERNAL', items: ['GEOPOLITICAL SHOCKS', 'NATURAL DISASTERS'], c: 'bg-[#f8f9fb] border-[#f23645]/20 text-[#f23645]' },
        { t: 'UNSCHEDULED / INTERNAL', items: ['FORCED LIQUIDATIONS', 'EXEC. RESIGNATIONS'], c: 'bg-[#f8f9fb] border-[#f23645]/20 text-[#f23645]' },
      ].map(q => `
        <div class="p-4 ${q.c} border rounded-xl shadow-sm hover:shadow-md transition-shadow h-32 flex flex-col justify-between">
          <span class="text-[9px] font-black uppercase tracking-widest leading-tight">${q.t}</span>
          <div class="space-y-1">
            ${q.items.map(i => `<div class="text-[10px] font-black text-[#131722]">• ${i}</div>`).join('')}
          </div>
        </div>
      `).join('')}
    </div>

    <!-- Axis Labels -->
    <div class="absolute inset-y-0 left-2 flex items-center pointer-events-none">
       <span class="text-[8px] font-black text-[#787b86] uppercase tracking-[0.4em] -rotate-90">TIMING HORIZON</span>
    </div>
    <div class="absolute bottom-2 inset-x-0 flex justify-center pointer-events-none">
       <span class="text-[8px] font-black text-[#787b86] uppercase tracking-[0.4em]">ORIGIN SOURCE</span>
    </div>
  </div>
  
  <div class="bg-[#f1f3f6] px-4 py-2 border-t border-[#e0e3eb] flex justify-between tracking-tighter">
    <p class="text-[9px] font-black uppercase text-[#787b86]">Taxonomy Scan: Categorizing catalysts to determine transmission probabilities</p>
    <p class="text-[9px] font-black text-[#2962ff]">SIERRA CLASSIFICATION ENGINE</p>
  </div>
</div>

<!-- Visual: Classification Flow (Logical Hierarchy Interface) -->
<div class="my-8 rounded-xl border border-[#e0e3eb] bg-white overflow-hidden shadow-2xl font-sans text-left">
  <div class="p-8 bg-white flex flex-col items-center">
    <div class="w-full max-w-sm space-y-4">
      ${[
        { t: 'MACRO VS MICRO', d: 'Top-down systemic shocks vs bottom-up company specific data.', icon: '🔭' },
        { t: 'COMPANY VS CROSS-MARKET', d: 'Isolating idiosyncratic alpha from broad beta linkages.', icon: '🏢' },
        { t: 'INFORMATION VS CONSTRAINT', d: 'Surprise in data vs stress in market plumbing / liquidity.', icon: '⚠️', c: 'bg-[#2962ff]/5 border-[#2962ff]/20' },
      ].map((step, i) => `
        <div class="flex flex-col items-center space-y-2">
           <div class="w-full p-4 ${step.c || 'bg-[#fcfdfe] border-[#e0e3eb]'} border rounded-xl flex items-center justify-between shadow-sm group hover:border-[#2962ff]/30 transition-all">
              <div class="flex flex-col">
                 <span class="text-[10px] font-black text-[#131722] uppercase tracking-widest mb-1">${step.t}</span>
                 <p class="text-[9px] text-[#787b86] font-medium leading-tight">${step.d}</p>
              </div>
              <span class="text-lg">${step.icon}</span>
           </div>
           ${i < 2 ? '<div class="h-6 w-px bg-gradient-to-b from-[#2962ff] to-transparent"></div>' : ''}
        </div>
      `).join('')}
    </div>
  </div>
  
  <div class="bg-[#f1f3f6] px-4 py-2 border-t border-[#e0e3eb] flex justify-between tracking-tighter shrink-0">
    <p class="text-[9px] font-black uppercase text-[#787b86]">Selection Matrix: Narrowing the search space for high-alpha events</p>
    <p class="text-[9px] font-black text-[#2962ff]">SIERRA FLOW AUDIT</p>
  </div>
</div>

<p>Classification predicts where information appears first, which participants dominate early trading, which linkages transmit the shock, and what confirmation to seek. A scheduled macro release is an expectations game; an internal liquidity break is a constraints game.</p>

<div class="bg-slate-50 p-6 rounded-xl border border-slate-200 mt-8">
  <h4 class="font-bold text-slate-800 mb-4 flex items-center gap-2 italic">
    <span class="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
    Confirmation (what must be observed)
  </h4>
  <ul class="space-y-3 text-sm text-slate-600">
    <li class="flex items-start gap-2">
      <span class="text-blue-600 font-bold mt-0.5">•</span>
      <span>Scheduled events show surprise as immediate repricing plus volatility pattern.</span>
    </li>
    <li class="flex items-start gap-2">
      <span class="text-blue-600 font-bold mt-0.5">•</span>
      <span>Unscheduled events show scenario repricing as skew/correlation shifts.</span>
    </li>
    <li class="flex items-start gap-2">
      <span class="text-blue-600 font-bold mt-0.5">•</span>
      <span>Internal events require flow evidence (volume, spreads, depth).</span>
    </li>
  </ul>
</div>
</div>`
  },
  {
    id: 'market-conditions-lens',
    title: 'Market Conditions and Sentiment as a Lens',
    content: `<div class="text-justify space-y-4">
<p>Market conditions are state variables that reshape reaction functions: risk appetite/aversion, volatility regime, breadth, correlation structure, leverage tolerance, and funding stress. Sentiment bias is the systematic skew in how information is interpreted in that regime.</p>

<!-- Visual: Same Surprise, Different Reaction (Regime Sensitivity Interface) -->
<div class="my-8 rounded-xl border border-[#e0e3eb] bg-white overflow-hidden shadow-2xl font-sans text-left">
  <div class="bg-[#f8f9fb] border-b border-[#e0e3eb] px-4 py-2 flex items-center justify-between font-mono">
    <div class="flex items-center gap-3">
        <span class="text-[12px] font-black text-[#131722]">SAME SURPRISE, DIFFERENT REACTION</span>
        <span class="px-1.5 py-0.5 bg-[#e0e3eb] text-[#787b86] text-[9px] font-bold rounded uppercase">State Dependent</span>
    </div>
    <div class="flex gap-4">
        <span class="text-[10px] text-[#2962ff] font-black uppercase">Regime Filter Analysis</span>
    </div>
  </div>

  <div class="p-8 bg-white">
    <div class="grid grid-cols-2 gap-6 w-full max-w-lg mx-auto">
      <!-- Scenario A -->
      <div class="p-4 bg-[#fcfdfe] border border-[#e0e3eb] rounded-xl flex flex-col space-y-4 shadow-sm group hover:border-[#f23645]/20">
         <div class="flex justify-between items-center">
            <span class="text-[9px] font-black text-[#787b86] uppercase tracking-widest">LOW-VOL / CROWDED</span>
            <span class="px-1.5 py-0.5 bg-[#f23645]/10 text-[#f23645] text-[7px] font-black rounded uppercase">FRAGILE</span>
         </div>
         <div class="h-20 w-full bg-white border border-[#e0e3eb] rounded p-2 overflow-hidden relative">
            <svg viewBox="0 0 100 40" class="w-full h-full">
              <path d="M 0 20 L 40 20 L 42 35 L 50 38 L 100 35" fill="none" stroke="#f23645" stroke-width="1.5" />
              <circle cx="42" cy="35" r="1.5" fill="#f23645" />
            </svg>
            <div class="absolute bottom-2 right-2 text-[8px] font-black text-[#f23645] uppercase italic">Cascade Risk</div>
         </div>
         <p class="text-[9px] text-[#787b86] font-medium leading-tight">Small disappointments trigger massive forced liquidations.</p>
      </div>

      <!-- Scenario B -->
      <div class="p-4 bg-[#fcfdfe] border border-[#e0e3eb] rounded-xl flex flex-col space-y-4 shadow-sm group hover:border-[#089981]/20">
         <div class="flex justify-between items-center">
            <span class="text-[9px] font-black text-[#787b86] uppercase tracking-widest">HIGH-VOL / DEFENSIVE</span>
            <span class="px-1.5 py-0.5 bg-[#089981]/10 text-[#089981] text-[7px] font-black rounded uppercase">STABLE</span>
         </div>
         <div class="h-20 w-full bg-white border border-[#e0e3eb] rounded p-2 overflow-hidden relative">
            <svg viewBox="0 0 100 40" class="w-full h-full">
              <path d="M 0 20 L 40 20 L 45 15 L 60 12 L 100 11" fill="none" stroke="#089981" stroke-width="1.5" />
              <circle cx="45" cy="15" r="1.5" fill="#089981" />
            </svg>
            <div class="absolute top-2 right-2 text-[8px] font-black text-[#089981] uppercase italic">Stabilization</div>
         </div>
         <p class="text-[9px] text-[#787b86] font-medium leading-tight">Bad news often ignored; modest good news leads to relief trade.</p>
      </div>
    </div>
  </div>
  
  <div class="bg-[#f1f3f6] px-4 py-2 border-t border-[#e0e3eb] flex justify-between tracking-tighter">
    <p class="text-[9px] font-black uppercase text-[#787b86]">Contextual Pricing: The same input yields different outputs based on regime state</p>
    <p class="text-[9px] font-black text-[#2962ff]">SIERRA REGIME MODEL</p>
  </div>
</div>

<!-- Visual: Regime Indicators Table (Active Monitoring Interface) -->
<div class="my-8 rounded-xl border border-[#e0e3eb] bg-white overflow-hidden shadow-2xl font-sans text-left">
  <div class="bg-[#f8f9fb] border-b border-[#e0e3eb] px-4 py-2 flex items-center justify-between font-mono">
    <div class="flex items-center gap-3">
        <span class="text-[12px] font-black text-[#131722]">REGIME INDICATORS</span>
        <span class="px-1.5 py-0.5 bg-[#e0e3eb] text-[#787b86] text-[9px] font-bold rounded uppercase">Systemic Scan</span>
    </div>
    <div class="flex gap-4">
        <span class="text-[10px] text-[#2962ff] font-black uppercase">Active Monitoring Table</span>
    </div>
  </div>

  <div class="p-0 bg-white overflow-x-auto">
    <table class="w-full text-left font-sans border-collapse">
      <thead>
        <tr class="bg-[#fcfdfe] border-b border-[#e0e3eb]">
          <th class="px-6 py-4 text-[10px] font-black text-[#787b86] uppercase tracking-widest border-r border-[#e0e3eb]">INDICATOR</th>
          <th class="px-6 py-4 text-[10px] font-black text-[#2962ff] uppercase tracking-widest border-r border-[#e0e3eb]">RISK-ON ENVIRONMENT</th>
          <th class="px-6 py-4 text-[10px] font-black text-[#f23645] uppercase tracking-widest">RISK-OFF REACTION</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-[#e0e3eb]">
        ${[
          { i: 'VIX / VOLATILITY', on: 'Mean-reverting; low realized vols.', off: 'Trending higher; convex expansion.' },
          { i: 'CREDIT SPREADS', on: 'Compressed; ignoring tail news.', off: 'Widening; extreme liquidity sensitivity.' },
          { i: 'CORRELATION', on: 'Idiosyncratic; low systemic link.', off: 'Converging to 1.0 (systemic lock).' },
        ].map(row => `
          <tr class="hover:bg-[#f8f9fb] transition-colors group">
            <td class="px-6 py-4 text-[10px] font-black text-[#131722] uppercase tracking-tighter border-r border-[#e0e3eb] whitespace-nowrap">${row.i}</td>
            <td class="px-6 py-4 text-[11px] font-medium text-[#787b86] border-r border-[#e0e3eb]">${row.on}</td>
            <td class="px-6 py-4 text-[11px] font-medium text-[#787b86]">${row.off}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  </div>
  
  <div class="bg-[#f1f3f6] px-4 py-2 border-t border-[#e0e3eb] flex justify-between tracking-tighter shrink-0">
    <p class="text-[9px] font-black uppercase text-[#787b86]">Status Audit: Determining the current baseline before applying catalyst logic</p>
    <p class="text-[9px] font-black text-[#2962ff]">SIERRA INDICATOR SUITE</p>
  </div>
</div>

<p>Two identical surprises can produce different reactions because positioning fragility and risk premia differ. In crowded, low-vol regimes, small disappointments can trigger large reversals; in defensive regimes, modestly good news may be treated as stabilization.</p>

<div class="bg-slate-50 p-6 rounded-xl border border-slate-200 mt-8">
  <h4 class="font-bold text-slate-800 mb-4 flex items-center gap-2 italic">
    <span class="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
    Confirmation (what must be observed)
  </h4>
  <ul class="space-y-3 text-sm text-slate-600">
    <li class="flex items-start gap-2">
      <span class="text-blue-600 font-bold mt-0.5">•</span>
      <span>Risk proxies align (credit spreads, vol indices/term structure).</span>
    </li>
    <li class="flex items-start gap-2">
      <span class="text-blue-600 font-bold mt-0.5">•</span>
      <span>Breadth confirms narrow vs systemic reaction.</span>
    </li>
    <li class="flex items-start gap-2">
      <span class="text-blue-600 font-bold mt-0.5">•</span>
      <span>Correlation structure shifts consistent with risk-on/risk-off.</span>
    </li>
  </ul>
</div>
</div>`
  },
  {
    id: 'expectations-vs-outcomes',
    title: 'Expectations vs Outcomes',
    content: `<div class="text-justify space-y-4">
<p>Outcomes matter only relative to the baseline the market priced before the event. Even small forecast errors can move price sharply when expectations are tight or valuation is stretched.</p>

<!-- Visual: Expectations vs Outcomes Scatter (Alpha Opportunity Hub) -->
<div class="my-8 rounded-xl border border-[#e0e3eb] bg-white overflow-hidden shadow-2xl font-sans text-left">
  <div class="bg-[#f8f9fb] border-b border-[#e0e3eb] px-4 py-2 flex items-center justify-between font-mono">
    <div class="flex items-center gap-3">
        <span class="text-[12px] font-black text-[#131722]">EXPECTATIONS GAP ANALYSIS</span>
        <span class="px-1.5 py-0.5 bg-[#e0e3eb] text-[#787b86] text-[9px] font-bold rounded uppercase">Alpha Engine</span>
    </div>
    <div class="flex gap-4">
        <span class="text-[10px] text-[#2962ff] font-black uppercase">Outcome Sensitivity Plot</span>
    </div>
  </div>

  <div class="p-8 bg-white">
    <div class="w-full max-w-lg mx-auto h-64 border-l border-b border-[#e0e3eb] relative p-4">
      <svg viewBox="0 0 100 100" class="w-full h-full overflow-visible">
        <!-- Regression Lines -->
        <line x1="0" y1="100" x2="100" y2="0" stroke="#2962ff" stroke-width="0.5" stroke-dasharray="2,2" />
        <line x1="0" y1="100" x2="100" y2="40" stroke="#787b86" stroke-width="0.5" stroke-dasharray="2,2" opacity="0.3" />
        
        <!-- Data points -->
        ${[
          { x: 20, y: 80 }, { x: 40, y: 65 }, { x: 60, y: 40 }, { x: 80, y: 25 }, { x: 90, y: 10 }
        ].map(p => `<circle cx="${p.x}" cy="${p.y}" r="1.5" fill="#131722" />`).join('')}

        <!-- Labels -->
        <text x="100" y="5" text-anchor="end" class="text-[4px] font-black fill-[#2962ff] uppercase italic animate-pulse">Priced for Perfection</text>
        <text x="100" y="45" text-anchor="end" class="text-[4px] font-black fill-[#787b86] uppercase italic">Defensive Regime</text>
      </svg>
      
      <!-- Axis Labels -->
      <div class="absolute -left-10 top-1/2 -rotate-90 text-[8px] font-black text-[#787b86] uppercase tracking-widest">PRICE REACTION</div>
      <div class="absolute -bottom-6 inset-x-0 text-center text-[8px] font-black text-[#787b86] uppercase tracking-widest">FORECAST ERROR MAGNITUDE</div>
    </div>
  </div>
  
  <div class="bg-[#f1f3f6] px-4 py-2 border-t border-[#e0e3eb] flex justify-between tracking-tighter">
    <p class="text-[9px] font-black uppercase text-[#787b86]">Sensitivity Matrix: Quantifying the convex response of stretched valuations to data misses</p>
    <p class="text-[9px] font-black text-[#2962ff]">SIERRA ALPHA HUB</p>
  </div>
</div>

<!-- Visual: Baseline Sources Matrix (Strategic Input Interface) -->
<div class="my-8 rounded-xl border border-[#e0e3eb] bg-white overflow-hidden shadow-2xl font-sans text-left">
  <div class="bg-[#f8f9fb] border-b border-[#e0e3eb] px-4 py-2 flex items-center justify-between font-mono">
    <div class="flex items-center gap-3">
        <span class="text-[12px] font-black text-[#131722]">BASELINE SOURCING</span>
        <span class="px-1.5 py-0.5 bg-[#e0e3eb] text-[#787b86] text-[9px] font-bold rounded uppercase">Data Integrity</span>
    </div>
    <div class="flex gap-4">
        <span class="text-[10px] text-[#2962ff] font-black uppercase">Expectation Feeds</span>
    </div>
  </div>

  <div class="p-0 bg-white overflow-x-auto">
    <table class="w-full text-left font-sans border-collapse">
      <thead>
        <tr class="bg-[#fcfdfe] border-b border-[#e0e3eb]">
          <th class="px-6 py-4 text-[10px] font-black text-[#787b86] uppercase tracking-widest border-r border-[#e0e3eb]">BASELINE INPUT</th>
          <th class="px-6 py-4 text-[10px] font-black text-[#787b86] uppercase tracking-widest border-r border-[#e0e3eb]">PRIMARY SOURCE</th>
          <th class="px-6 py-4 text-[10px] font-black text-[#2962ff] uppercase tracking-widest">STRATEGIC UTILITY</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-[#e0e3eb]">
        ${[
          { i: 'CONSENSUS FORECAST', s: 'SURVEY DATA / BBG TERM', u: 'SCHEDULED MACRO EVENTS' },
          { i: 'IMPLIED VOLATILITY', s: 'OPTIONS STRADDLE PARITY', u: 'EARNINGS / BINARY RISKS' },
          { i: 'CREDIT SPREADS', s: 'CDS / BOND BASIS DATA', u: 'CRISIS / SOLVENCY AUDITS' },
        ].map(row => `
          <tr class="hover:bg-[#f8f9fb] transition-colors">
            <td class="px-6 py-4 text-[10px] font-black text-[#131722] uppercase tracking-tighter border-r border-[#e0e3eb] whitespace-nowrap">${row.i}</td>
            <td class="px-6 py-4 text-[11px] font-medium text-[#787b86] border-r border-[#e0e3eb] whitespace-nowrap">${row.s}</td>
            <td class="px-6 py-4 text-[10px] font-black text-[#2962ff] uppercase tracking-widest leading-tight">${row.u}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  </div>
  
  <div class="bg-[#f1f3f6] px-4 py-2 border-t border-[#e0e3eb] flex justify-between tracking-tighter">
    <p class="text-[9px] font-black uppercase text-[#787b86]">Data Provenance: Ensuring reference points represent the actual institutional consensus</p>
    <p class="text-[9px] font-black text-[#2962ff]">SIERRA DATA LAYER</p>
  </div>
</div>

<p>For scheduled events, baseline often includes consensus plus dispersion and implied moves into the event window. For unscheduled events, baseline is scenario probabilities. For special situations, baseline often lives in spreads (probability-weighted outcomes).</p>

<div class="bg-slate-50 p-6 rounded-xl border border-slate-200 mt-8">
  <h4 class="font-bold text-slate-800 mb-4 flex items-center gap-2 italic">
    <span class="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
    Confirmation (what must be observed)
  </h4>
  <ul class="space-y-3 text-sm text-slate-600">
    <li class="flex items-start gap-2">
      <span class="text-blue-600 font-bold mt-0.5">•</span>
      <span>Surprise shows up in the lead market first.</span>
    </li>
    <li class="flex items-start gap-2">
      <span class="text-blue-600 font-bold mt-0.5">•</span>
      <span>Relative pricing changes (curves, spreads, skews), not just spot levels.</span>
    </li>
    <li class="flex items-start gap-2">
      <span class="text-blue-600 font-bold mt-0.5">•</span>
      <span>Persistence beyond initial liquidity shock suggests durable repricing.</span>
    </li>
  </ul>
</div>
</div>`
  },
  {
    id: 'reaction-mechanics',
    title: 'Reaction Mechanics and Half-Life',
    content: `<div class="text-justify space-y-4">
<p>Reaction mechanics describe the shape of the response: direction, magnitude, speed, duration (half-life), overshoot/overreaction, delayed reaction, and breadth.</p>

<!-- Visual: Reaction Archetypes (Temporal Dynamics Interface) -->
<div class="my-8 rounded-xl border border-[#e0e3eb] bg-white overflow-hidden shadow-2xl font-sans text-left">
  <div class="bg-[#f8f9fb] border-b border-[#e0e3eb] px-4 py-2 flex items-center justify-between font-mono">
    <div class="flex items-center gap-3">
        <span class="text-[12px] font-black text-[#131722]">REACTION ARCHETYPES</span>
        <span class="px-1.5 py-0.5 bg-[#e0e3eb] text-[#787b86] text-[9px] font-bold rounded uppercase">Velocity</span>
    </div>
    <div class="flex gap-4">
        <span class="text-[10px] text-[#2962ff] font-black uppercase">Decay & Drift Mechanics</span>
    </div>
  </div>

  <div class="p-8 bg-white">
    <div class="w-full max-w-lg mx-auto h-64 border-l border-b border-[#e0e3eb] relative p-4">
      <svg viewBox="0 0 400 200" class="w-full h-full overflow-visible">
        <!-- Event Marker -->
        <line x1="60" y1="0" x2="60" y2="200" stroke="#2962ff" stroke-width="1" stroke-dasharray="4,2" />
        <text x="65" y="20" class="text-[10px] font-black fill-[#2962ff] uppercase tracking-widest">Event T=0</text>
        
        <!-- Archetype A: Overshoot -->
        <path d="M 0 150 L 60 150 L 70 30 L 120 100 L 250 90 L 400 90" fill="none" stroke="#f23645" stroke-width="2" />
        <text x="80" y="50" class="text-[8px] font-black fill-[#f23645] uppercase italic">Overshoot & Revert</text>
        
        <!-- Archetype B: PEAD Drift -->
        <path d="M 0 150 L 60 150 L 120 120 L 250 80 L 400 70" fill="none" stroke="#2962ff" stroke-width="2" stroke-dasharray="4,2" />
        <text x="180" y="115" class="text-[8px] font-black fill-[#2962ff] uppercase italic">Slow Drift (PEAD)</text>
      </svg>
      
      <!-- Axis Labels -->
      <div class="absolute -bottom-6 inset-x-0 text-center text-[8px] font-black text-[#787b86] uppercase tracking-[0.4em]">TIME ELAPSED (CONVICTION WINDOW)</div>
    </div>
  </div>
  
  <div class="bg-[#f1f3f6] px-4 py-2 border-t border-[#e0e3eb] flex justify-between tracking-tighter">
    <p class="text-[9px] font-black uppercase text-[#787b86]">Temporal Decay: Designing trade duration around the informational half-life</p>
    <p class="text-[9px] font-black text-[#2962ff]">SIERRA TIMING ENGINE</p>
  </div>
</div>

<p>A useful model is multi-stage: the immediate move reprices the simplest channel (headline surprise), follow-through reflects second-order interpretation (path/implementation), and mean reversion occurs if the move was liquidity-dominated or misattributed.</p>

<p>The "half-life" of an event is the time it takes for 50% of the total price move to be realized. High-conviction, simple signals (like a clear earnings beat) have short half-lives; complex, ambiguous signals (like a nuanced policy shift) have longer half-lives as the market "digests" the implications.</p>

<div class="bg-slate-50 p-6 rounded-xl border border-slate-200 mt-8">
  <h4 class="font-bold text-slate-800 mb-4 flex items-center gap-2 italic">
    <span class="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
    Confirmation (what must be observed)
  </h4>
  <ul class="space-y-3 text-sm text-slate-600">
    <li class="flex items-start gap-2">
      <span class="text-blue-600 font-bold mt-0.5">•</span>
      <span>Price stabilizes, trends, or reverses within defined half-life windows.</span>
    </li>
    <li class="flex items-start gap-2">
      <span class="text-blue-600 font-bold mt-0.5">•</span>
      <span>Volume profile (front-loaded vs sustained) and volatility behavior (spike-and-fade vs sustained) align with the reaction type.</span>
    </li>
  </ul>
</div>
</div>`
  },
  {
    id: 'microstructure-around-events',
    title: 'Microstructure Around Events',
    content: `<div class="text-justify space-y-4">
<p>Microstructure is how trading happens: spreads, depth, liquidity provision, fragmentation, halts, auctions, and execution. Around catalysts, markets often exhibit volatility expansion, spread widening, liquidity gaps, and impaired execution (slippage, partial fills, halts).</p>

<!-- Visual: Microstructure Stress (Liquidity Fragility Interface) -->
<div class="my-8 rounded-xl border border-[#e0e3eb] bg-white overflow-hidden shadow-2xl font-sans text-left">
  <div class="bg-[#f8f9fb] border-b border-[#e0e3eb] px-4 py-2 flex items-center justify-between font-mono">
    <div class="flex items-center gap-3">
        <span class="text-[12px] font-black text-[#131722]">MICROSTRUCTURE STRESS</span>
        <span class="px-1.5 py-0.5 bg-[#e0e3eb] text-[#787b86] text-[9px] font-bold rounded uppercase">Fragility</span>
    </div>
    <div class="flex gap-4">
        <span class="text-[10px] text-[#2962ff] font-black uppercase">Execution Risk Auditor</span>
    </div>
  </div>

  <div class="p-8 bg-white grid grid-cols-2 gap-6">
    <div class="p-4 bg-[#fcfdfe] border border-[#e0e3eb] rounded-xl flex flex-col space-y-4">
       <span class="text-[9px] font-black text-[#787b86] uppercase tracking-widest">BID-ASK SPREAD EXPANSION</span>
       <div class="h-24 w-full bg-white border border-[#e0e3eb] rounded p-2 relative overflow-hidden">
          <svg viewBox="0 0 100 40" class="w-full h-full">
            <path d="M 0 35 L 40 35 L 45 10 L 55 12 L 65 25 L 100 30" fill="none" stroke="#f23645" stroke-width="1.5" />
            <line x1="45" y1="0" x2="45" y2="40" stroke="#e0e3eb" stroke-width="1" stroke-dasharray="2,2" />
          </svg>
       </div>
    </div>
    <div class="p-4 bg-[#fcfdfe] border border-[#e0e3eb] rounded-xl flex flex-col space-y-4">
       <span class="text-[9px] font-black text-[#787b86] uppercase tracking-widest">ORDER BOOK DEPTH DECAY</span>
       <div class="h-24 w-full bg-white border border-[#e0e3eb] rounded p-2 relative overflow-hidden">
          <svg viewBox="0 0 100 40" class="w-full h-full">
            <path d="M 0 10 L 40 10 L 48 35 L 60 33 L 70 15 L 100 12" fill="none" stroke="#2962ff" stroke-width="1.5" />
            <line x1="48" y1="0" x2="48" y2="40" stroke="#e0e3eb" stroke-width="1" stroke-dasharray="2,2" />
          </svg>
       </div>
    </div>
  </div>
  
  <div class="bg-[#f1f3f6] px-4 py-2 border-t border-[#e0e3eb] flex justify-between tracking-tighter">
    <p class="text-[9px] font-black uppercase text-[#787b86]">Mechanical Friction: Measuring the gap between informational alpha and realized execution</p>
    <p class="text-[9px] font-black text-[#2962ff]">SIERRA EXECUTION AUDIT</p>
  </div>
</div>

<!-- Visual: Event Timeline Mechanics (Phased Auction Interface) -->
<div class="my-8 rounded-xl border border-[#e0e3eb] bg-white overflow-hidden shadow-2xl font-sans text-left">
  <div class="p-8 bg-white flex flex-col items-center">
    <div class="w-full max-w-lg relative h-20 flex items-center justify-between px-6">
       <!-- Timeline Line -->
       <div class="absolute h-px bg-[#e0e3eb] left-6 right-6 top-1/2 -translate-y-1/2"></div>
       
       ${[
         { t: 'PRE-CATALYST', s: 'baseline', c: 'bg-[#787b86]' },
         { t: 'AUCTION OPEN', s: 'impact', c: 'bg-[#2962ff]' },
         { t: 'VOLATILITY HALT', s: 'stress', c: 'bg-[#f23645] animate-pulse' },
         { t: 'REOPEN / DRIFT', s: 'repricing', c: 'bg-[#089981]' },
       ].map(p => `
         <div class="relative flex flex-col items-center">
            <div class="w-3 h-3 rounded-full ${p.c} border-2 border-white shadow-sm z-10"></div>
            <div class="absolute top-6 whitespace-nowrap text-[8px] font-black text-[#131722] uppercase tracking-tighter">${p.t}</div>
            <div class="absolute -top-4 whitespace-nowrap text-[7px] font-bold text-[#787b86] uppercase tracking-[0.2em]">${p.s}</div>
         </div>
       `).join('')}
    </div>
  </div>
  
  <div class="bg-[#f1f3f6] px-4 py-2 border-t border-[#e0e3eb] flex justify-between tracking-tighter shrink-0">
    <p class="text-[9px] font-black uppercase text-[#787b86]">Auction Topology: Understanding the mechanical windows of event resolution</p>
    <p class="text-[9px] font-black text-[#2962ff]">SIERRA MARKET MECHANICS</p>
  </div>
</div>

<p>Liquidity providers widen spreads when uncertainty rises; depth can disappear precisely when the need to trade is greatest. As a result, early prints can be fragile, and apparent overreaction can be partly mechanical.</p>

<p>Understanding the auction mechanisms (opening, closing, and volatility halts) is critical for event-driven execution. These are the moments where the market attempts to find a single clearing price for the accumulated information.</p>

<div class="bg-slate-50 p-6 rounded-xl border border-slate-200 mt-8">
  <h4 class="font-bold text-slate-800 mb-4 flex items-center gap-2 italic">
    <span class="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
    Confirmation (what must be observed)
  </h4>
  <ul class="space-y-3 text-sm text-slate-600">
    <li class="flex items-start gap-2">
      <span class="text-blue-600 font-bold mt-0.5">•</span>
      <span>Spread behavior consistent with uncertainty.</span>
    </li>
    <li class="flex items-start gap-2">
      <span class="text-blue-600 font-bold mt-0.5">•</span>
      <span>Depth/volume shows real participation.</span>
    </li>
    <li class="flex items-start gap-2">
      <span class="text-blue-600 font-bold mt-0.5">•</span>
      <span>Volatility term structure shifts around event windows.</span>
    </li>
    <li class="flex items-start gap-2">
      <span class="text-blue-600 font-bold mt-0.5">•</span>
      <span>Cross-venue consistency.</span>
    </li>
  </ul>
</div>
</div>`
  },
  {
    id: 'economic-reports',
    title: 'Periodic Economic Reports (CPI, Jobs, Growth)',
    content: `<div class="text-justify space-y-4">
<p>Periodic macro reports are scheduled catalysts; structurally they are expectations games. The reaction is driven by surprise vs consensus, dispersion, and implied pre-positioning. The lead market is often rates first, with FX and equities reflecting second-order interpretation.</p>

<!-- Visual: Surprise vs. Return Dispersion (Alpha Probability Interface) -->
<div class="my-8 rounded-xl border border-[#e0e3eb] bg-white overflow-hidden shadow-2xl font-sans text-left">
  <div class="bg-[#f8f9fb] border-b border-[#e0e3eb] px-4 py-2 flex items-center justify-between font-mono">
    <div class="flex items-center gap-3">
        <span class="text-[12px] font-black text-[#131722]">SURPRISE VS. DISPERSION</span>
        <span class="px-1.5 py-0.5 bg-[#e0e3eb] text-[#787b86] text-[9px] font-bold rounded uppercase">Outlier Scan</span>
    </div>
    <div class="flex gap-4">
        <span class="text-[10px] text-[#2962ff] font-black uppercase">Probability Tail Analysis</span>
    </div>
  </div>

  <div class="p-8 bg-white">
    <div class="w-full max-w-lg mx-auto h-64 border border-[#e0e3eb] relative bg-[#fcfdfe] overflow-hidden">
      <!-- Grid -->
      <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
         <div class="w-full h-px bg-[#e0e3eb] opacity-30"></div>
         <div class="h-full w-px bg-[#e0e3eb] opacity-30"></div>
      </div>
      
      <svg viewBox="0 0 400 200" class="w-full h-full overflow-visible relative z-10">
        <!-- Dispersion Ellipse -->
        <ellipse cx="200" cy="100" rx="140" ry="70" fill="#2962ff" fill-opacity="0.03" stroke="#2962ff" stroke-width="0.5" stroke-dasharray="4,4" />
        
        <!-- Data Points -->
        ${[
          { x: 300, y: 50, s: 'Pos' }, { x: 340, y: 30, s: 'Pos' },
          { x: 100, y: 150, s: 'Neg' }, { x: 60, y: 170, s: 'Neg' },
          { x: 210, y: 90, s: 'Neut' }, { x: 190, y: 110, s: 'Neut' }
        ].map(p => `<circle cx="${p.x}" cy="${p.y}" r="2" fill="${p.s === 'Pos' ? '#089981' : p.s === 'Neg' ? '#f23645' : '#131722'}" />`).join('')}

        <text x="350" y="110" text-anchor="end" class="text-[6px] font-black fill-[#089981] uppercase tracking-[0.2em]">Positive Surprise</text>
        <text x="50" y="90" text-anchor="start" class="text-[6px] font-black fill-[#f23645] uppercase tracking-[0.2em]">Negative Surprise</text>
      </svg>
      
      <!-- Axis Labels -->
      <div class="absolute -left-12 top-1/2 -rotate-90 text-[8px] font-black text-[#787b86] uppercase tracking-widest">ASSET RETURN VARIANCE</div>
      <div class="absolute -bottom-6 inset-x-0 text-center text-[8px] font-black text-[#787b86] uppercase tracking-widest">EXPECTED VS ACTUAL DELTA</div>
    </div>
  </div>
  
  <div class="bg-[#f1f3f6] px-4 py-2 border-t border-[#e0e3eb] flex justify-between tracking-tighter">
    <p class="text-[9px] font-black uppercase text-[#787b86]">Variance Audit: Identifying where price deviates from Gaussian expectations during catalyst windows</p>
    <p class="text-[9px] font-black text-[#2962ff]">SIERRA DISPERSION HUB</p>
  </div>
</div>

<div class="bg-slate-50 p-6 rounded-xl border border-slate-200 mt-8">
  <h4 class="font-bold text-slate-800 mb-4 flex items-center gap-2 italic">
    <span class="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
    Confirmation (what must be observed)
  </h4>
  <ul class="space-y-3 text-sm text-slate-600">
    <li class="flex items-start gap-2">
      <span class="text-blue-600 font-bold mt-0.5">•</span>
      <span>Cross-market coherence (rates/FX reprice consistent with the proposed channel).</span>
    </li>
    <li class="flex items-start gap-2">
      <span class="text-blue-600 font-bold mt-0.5">•</span>
      <span>The market may trade components/path implications more than the headline.</span>
    </li>
  </ul>
</div>
</div>`
  },
  {
    id: 'policymaker-speech',
    title: 'Policymaker Speech and Interpretation Risk',
    content: `<div class="text-justify space-y-4">
<p>Policy communication is unique because the “data” is language. Meaning is interpreted, and credibility is part of the payload. The market often trades the reaction function and the path, not the headline phrasing.</p>

<!-- Visual: Yield Curve Shift (Macro Policy Interface) -->
<div class="my-8 rounded-xl border border-[#e0e3eb] bg-white overflow-hidden shadow-2xl font-sans text-left">
  <div class="bg-[#f8f9fb] border-b border-[#e0e3eb] px-4 py-2 flex items-center justify-between font-mono">
    <div class="flex items-center gap-3">
        <span class="text-[12px] font-black text-[#131722]">YIELD CURVE SHIFT</span>
        <span class="px-1.5 py-0.5 bg-[#e0e3eb] text-[#787b86] text-[9px] font-bold rounded uppercase">Rates Engine</span>
    </div>
    <div class="flex gap-4">
        <span class="text-[10px] text-[#2962ff] font-black uppercase">Term Structure Delta</span>
    </div>
  </div>

  <div class="p-8 bg-white">
    <div class="w-full max-w-lg mx-auto h-64 border-l border-b border-[#e0e3eb] relative p-4 bg-[#fcfdfe]">
      <svg viewBox="0 0 400 200" class="w-full h-full overflow-visible">
        <!-- Pre-Speech Curve -->
        <path d="M 0 160 Q 150 150, 400 120" fill="none" stroke="#787b86" stroke-width="1.5" opacity="0.3" stroke-dasharray="4,2" />
        <text x="300" y="145" class="text-[8px] font-black fill-[#787b86] uppercase">PRE-SPEECH BASELINE</text>
        
        <!-- Post-Speech Curve (Hawkish) -->
        <path d="M 0 110 Q 150 100, 400 90" fill="none" stroke="#2962ff" stroke-width="2" />
        <text x="300" y="80" class="text-[8px] font-black fill-[#2962ff] uppercase italic animate-pulse">POST-SPEECH HAWKISH SHIFT</text>

        <!-- Vectors -->
        <path d="M 100 155 L 100 120" stroke="#2962ff" stroke-width="1" fill="none" marker-end="url(#arrow-blue)" />
        <path d="M 300 135 L 300 110" stroke="#2962ff" stroke-width="1" fill="none" marker-end="url(#arrow-blue)" />
        
        <defs>
          <marker id="arrow-blue" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0,0 L0,6 L6,3 z" fill="#2962ff" />
          </marker>
        </defs>
      </svg>
      
      <!-- Axis Labels -->
      <div class="absolute -left-10 top-1/2 -rotate-90 text-[8px] font-black text-[#787b86] uppercase tracking-[0.4em]">YIELD (%)</div>
      <div class="absolute -bottom-6 inset-x-0 text-center text-[8px] font-black text-[#787b86] uppercase tracking-[0.4em]">TENOR (2Y → 30Y)</div>
    </div>
  </div>
  
  <div class="bg-[#f1f3f6] px-4 py-2 border-t border-[#e0e3eb] flex justify-between tracking-tighter">
    <p class="text-[9px] font-black uppercase text-[#787b86]">Policy Impact: Visualizing the parallel shift vs twist in the rate environment</p>
    <p class="text-[9px] font-black text-[#2962ff]">SIERRA CREDIT ANALYTICS</p>
  </div>
</div>

<p>Baseline is the implied path before the speech (futures/curve). Surprise is the delta in that implied path (tone, emphasis, reaction function), not word count.</p>

<div class="bg-slate-50 p-6 rounded-xl border border-slate-200 mt-8">
  <h4 class="font-bold text-slate-800 mb-4 flex items-center gap-2 italic">
    <span class="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
    Confirmation (what must be observed)
  </h4>
  <ul class="space-y-3 text-sm text-slate-600">
    <li class="flex items-start gap-2">
      <span class="text-blue-600 font-bold mt-0.5">•</span>
      <span>Rates lead; FX aligns.</span>
    </li>
    <li class="flex items-start gap-2">
      <span class="text-blue-600 font-bold mt-0.5">•</span>
      <span>Risk assets follow in a way consistent with growth shock vs policy shock.</span>
    </li>
  </ul>
</div>
</div>`
  },
  {
    id: 'geopolitics-elections',
    title: 'Geopolitics, Elections, and Terror Shocks',
    content: `<div class="text-justify space-y-4">
<p>Geopolitical catalysts are typically unscheduled and scenario-driven. Markets often reprice tails first (risk premia, vol, correlations) and then diverge across assets as second-order effects are priced (commodities, trade, policy response).</p>

<!-- Visual: Shock Transmission Flow (Causality Audit Interface) -->
<div class="my-8 rounded-xl border border-[#e0e3eb] bg-white overflow-hidden shadow-2xl font-sans text-left">
  <div class="px-8 py-10 bg-white flex flex-col items-center">
    <div class="w-full max-w-sm space-y-4">
      <div class="p-4 bg-[#131722] border border-[#131722] rounded-xl flex items-center justify-center shadow-xl">
         <span class="text-[12px] font-black text-white uppercase tracking-[0.3em]">GEOPOLITICAL EVENT</span>
      </div>
      <div class="flex flex-col items-center">
         <div class="h-6 w-px bg-gradient-to-b from-[#131722] to-[#2962ff]"></div>
         <div class="flex gap-4 w-full">
            <div class="flex-1 p-3 bg-[#f23645]/5 border border-[#f23645]/20 rounded-xl text-center shadow-sm">
               <span class="text-[9px] font-black text-[#f23645] uppercase tracking-tighter">ENERGY / SUPPLY SHOCK</span>
            </div>
            <div class="flex-1 p-3 bg-[#089981]/5 border border-[#089981]/20 rounded-xl text-center shadow-sm">
               <span class="text-[9px] font-black text-[#089981] uppercase tracking-tighter">SAFE HAVEN CAPITAL FLOW</span>
            </div>
         </div>
         <div class="h-6 w-px bg-gradient-to-b from-[#2962ff] to-transparent"></div>
         <div class="w-full p-4 bg-[#f8f9fb] border border-[#e0e3eb] rounded-xl text-center shadow-inner group hover:border-[#2962ff]/30 transition-all">
            <span class="text-[10px] font-black text-[#787b86] uppercase tracking-widest">CROSS-ASSET CONTAGION CHANNEL</span>
            <p class="text-[8px] text-[#787b86] font-bold mt-1">Measuring the speed of correlation convergence</p>
         </div>
      </div>
    </div>
  </div>
  
  <div class="bg-[#f1f3f6] px-4 py-2 border-t border-[#e0e3eb] flex justify-between tracking-tighter shrink-0">
    <p class="text-[9px] font-black uppercase text-[#787b86]">Transmission Scan: Mapping the propagation of external shocks through the financial plumbing</p>
    <p class="text-[9px] font-black text-[#2962ff]">SIERRA SHOCK AUDIT</p>
  </div>
</div>

<p>Baseline is scenario probability—not the intensity of headlines. Surprise is outcome and/or next-step path differing from what was implicitly priced.</p>

<div class="bg-slate-50 p-6 rounded-xl border border-slate-200 mt-8">
  <h4 class="font-bold text-slate-800 mb-4 flex items-center gap-2 italic">
    <span class="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
    Confirmation (what must be observed)
  </h4>
  <ul class="space-y-3 text-sm text-slate-600">
    <li class="flex items-start gap-2">
      <span class="text-blue-600 font-bold mt-0.5">•</span>
      <span>Coherent risk-off signatures across safe havens vs risk assets.</span>
    </li>
    <li class="flex items-start gap-2">
      <span class="text-blue-600 font-bold mt-0.5">•</span>
      <span>Regional vs global distinction.</span>
    </li>
    <li class="flex items-start gap-2">
      <span class="text-blue-600 font-bold mt-0.5">•</span>
      <span>Persistence beyond initial prints.</span>
    </li>
  </ul>
</div>
</div>`
  },
  {
    id: 'weather-disasters',
    title: 'Weather, Disasters, and Epidemics',
    content: `<div class="text-justify space-y-4">
<p>Disasters and epidemics are exogenous shocks with variable scope: localized operational disruption, regional economic impact, or global demand/supply rebalancing. Early estimates are revised; confidence bands are wide. The analyst’s job is to bound plausible ranges and specify what would narrow them.</p>

<!-- Visual: Disaster Response Phases (Lifecycle Status Interface) -->
<div class="my-8 rounded-xl border border-[#e0e3eb] bg-white overflow-hidden shadow-2xl font-sans text-left">
  <div class="p-10 bg-white flex flex-col items-center">
    <div class="w-full max-w-lg relative h-16 flex items-center justify-between px-8">
       <!-- Baseline -->
       <div class="absolute h-px bg-[#e0e3eb] left-8 right-8 top-1/2 -translate-y-1/2"></div>
       
       ${[
         { t: 'IMPACT', s: 'Initial Shock', c: 'bg-[#f23645]' },
         { t: 'ASSESSMENT', s: 'Scope Definition', c: 'bg-[#ff9800]' },
         { t: 'POLICY RESPONSE', s: 'Liquidity Injection', c: 'bg-[#2962ff]' },
         { x: 'RECOVERY', s: 'Mean Reversion', c: 'bg-[#089981]' },
       ].map(p => `
         <div class="relative flex flex-col items-center">
            <div class="w-2.5 h-2.5 rounded-full ${p.c} border-2 border-white shadow-sm z-10"></div>
            <div class="absolute top-6 whitespace-nowrap text-[8px] font-black text-[#131722] uppercase tracking-tighter">${p.t || p.x}</div>
            <div class="absolute -top-4 whitespace-nowrap text-[7px] font-black text-[#787b86] uppercase tracking-[0.1em]">${p.s}</div>
         </div>
       `).join('')}
    </div>
  </div>
  
  <div class="bg-[#f1f3f6] px-4 py-2 border-t border-[#e0e3eb] flex justify-between tracking-tighter shrink-0">
    <p class="text-[9px] font-black uppercase text-[#787b86]">Exogenous Risk Lifecycle: From initial assessment to structural stabilization</p>
    <p class="text-[9px] font-black text-[#2962ff]">SIERRA RISK MANAGER</p>
  </div>
</div>

<p>Transmission depends on geographic concentration, substitution and inventories, policy response, and duration uncertainty.</p>

<div class="bg-slate-50 p-6 rounded-xl border border-slate-200 mt-8">
  <h4 class="font-bold text-slate-800 mb-4 flex items-center gap-2 italic">
    <span class="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
    Confirmation (what must be observed)
  </h4>
  <ul class="space-y-3 text-sm text-slate-600">
    <li class="flex items-start gap-2">
      <span class="text-blue-600 font-bold mt-0.5">•</span>
      <span>Local vs global assets behave consistent with scope.</span>
    </li>
    <li class="flex items-start gap-2">
      <span class="text-blue-600 font-bold mt-0.5">•</span>
      <span>Supply-sensitive commodities respond consistent with disruption.</span>
    </li>
    <li class="flex items-start gap-2">
      <span class="text-blue-600 font-bold mt-0.5">•</span>
      <span>Secondary confirmation (shipping, insurance, production updates).</span>
    </li>
  </ul>
</div>
</div>`
  },
  {
    id: 'market-interventions',
    title: 'Market Interventions and Regime Shifts',
    content: `<div class="text-justify space-y-4">
<p>Interventions alter the payoff structure: rate decisions, liquidity facilities, guarantees, bailouts, capital controls, emergency fiscal measures, market-structure changes (short-sale bans, halts). Interventions often work through expectations about future support, not just today’s action.</p>

<!-- Visual: Intervention Stabilization (Regime Anchor Interface) -->
<div class="my-8 rounded-xl border border-[#e0e3eb] bg-white overflow-hidden shadow-2xl font-sans text-left">
  <div class="bg-[#f8f9fb] border-b border-[#e0e3eb] px-4 py-2 flex items-center justify-between font-mono">
    <div class="flex items-center gap-3">
        <span class="text-[12px] font-black text-[#131722]">INTERVENTION STABILIZATION</span>
        <span class="px-1.5 py-0.5 bg-[#e0e3eb] text-[#787b86] text-[9px] font-bold rounded uppercase">Market Backstop</span>
    </div>
    <div class="flex gap-4">
        <span class="text-[10px] text-[#2962ff] font-black uppercase">Tail Risk Compression</span>
    </div>
  </div>

  <div class="p-8 bg-white">
    <div class="w-full max-w-lg mx-auto h-64 border-l border-b border-[#e0e3eb] relative p-4 bg-[#fcfdfe]">
      <svg viewBox="0 0 400 200" class="w-full h-full overflow-visible">
        <!-- Stress Build-up -->
        <path d="M 0 150 L 50 140 L 100 40 L 110 30" fill="none" stroke="#f23645" stroke-width="2" />
        <text x="115" y="45" class="text-[8px] font-black fill-[#f23645] uppercase italic">MAX STRESS POINT</text>
        
        <!-- Intervention Trigger -->
        <line x1="110" y1="0" x2="110" y2="200" stroke="#2962ff" stroke-width="1.5" stroke-dasharray="8,4" />
        <text x="115" y="20" class="text-[10px] font-black fill-[#2962ff] uppercase tracking-widest">INTERVENTION</text>

        <!-- Stabilization Path -->
        <path d="M 110 30 Q 150 150, 400 160" fill="none" stroke="#089981" stroke-width="2.5" />
        <text x="250" y="145" class="text-[8px] font-black fill-[#089981] uppercase tracking-[0.2em]">STABILIZATION REGIME</text>
      </svg>
    </div>
  </div>
  
  <div class="bg-[#f1f3f6] px-4 py-2 border-t border-[#e0e3eb] flex justify-between tracking-tighter">
    <p class="text-[9px] font-black uppercase text-[#787b86]">Backstop Shield: Understanding how structural interventions cap downside vol and reset correlations</p>
    <p class="text-[9px] font-black text-[#2962ff]">SIERRA LIQUIDITY DESK</p>
  </div>
</div>

<p>Baseline is what level of support was already expected; surprise is size/scope/conditions/credibility.</p>

<div class="bg-slate-50 p-6 rounded-xl border border-slate-200 mt-8">
  <h4 class="font-bold text-slate-800 mb-4 flex items-center gap-2 italic">
    <span class="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
    Confirmation (what must be observed)
  </h4>
  <ul class="space-y-3 text-sm text-slate-600">
    <li class="flex items-start gap-2">
      <span class="text-blue-600 font-bold mt-0.5">•</span>
      <span>Funding/credit indicators stabilize.</span>
    </li>
    <li class="flex items-start gap-2">
      <span class="text-blue-600 font-bold mt-0.5">•</span>
      <span>Volatility compresses beyond the immediate event window.</span>
    </li>
    <li class="flex items-start gap-2">
      <span class="text-blue-600 font-bold mt-0.5">•</span>
      <span>Correlations normalize in a way consistent with reduced tail risk.</span>
    </li>
  </ul>
</div>
</div>`
  },
  {
    id: 'internal-catalysts-reflexivity',
    title: 'Internal Catalysts, Reflexivity, and Crisis Signatures',
    content: `<div class="text-justify space-y-4">
<p>Internal catalysts arise from market mechanics: forced liquidation, stop/margin cascades, dealer hedging feedback, thin-market liquidity withdrawal, rebalancing, accidental order events. Reflexivity is the feedback loop: price moves tighten constraints, constraints force flows, flows push price further.</p>

<!-- Visual: Reflexivity Feedback Loop (Circular Systemic Audit) -->
<div class="my-8 rounded-xl border border-[#e0e3eb] bg-white overflow-hidden shadow-2xl font-sans text-left">
  <div class="bg-[#f8f9fb] border-b border-[#e0e3eb] px-4 py-2 flex items-center justify-between font-mono">
    <div class="flex items-center gap-3">
        <span class="text-[12px] font-black text-[#131722]">REFLEXIVITY AUDIT</span>
        <span class="px-1.5 py-0.5 bg-[#e0e3eb] text-[#787b86] text-[9px] font-bold rounded uppercase">Feedback Loop</span>
    </div>
    <div class="flex gap-4">
        <span class="text-[10px] text-[#2962ff] font-black uppercase">Crisis Signature Scan</span>
    </div>
  </div>

  <div class="p-16 bg-white flex flex-col items-center relative overflow-hidden">
     <!-- Background Grid Decor -->
     <div class="absolute inset-0 grid grid-cols-6 pointer-events-none opacity-[0.03]">
        ${Array(6).fill('<div class="border-r border-[#131722]"></div>').join('')}
     </div>

     <div class="relative w-full max-w-sm aspect-square flex items-center justify-center">
        <!-- Loop Path -->
        <svg viewBox="0 0 100 100" class="absolute inset-0 w-full h-full rotate-45">
           <circle cx="50" cy="50" r="40" fill="none" stroke="#f23645" stroke-width="0.5" stroke-dasharray="4,2" opacity="0.3" />
        </svg>

        <!-- Nodes -->
        <div class="absolute top-0 w-32 p-3 bg-white border border-[#f23645]/30 rounded-xl shadow-xl flex flex-col items-center">
           <span class="text-[10px] font-black text-[#f23645] uppercase tracking-tighter">PRICE DROP</span>
           <span class="text-[7px] font-bold text-[#787b86] uppercase mt-1">VOLATILITY SPIKE</span>
        </div>
        <div class="absolute right-0 w-32 p-3 bg-white border border-[#f23645]/30 rounded-xl shadow-xl flex flex-col items-center">
           <span class="text-[10px] font-black text-[#f23645] uppercase tracking-tighter">MARGIN CALLS</span>
           <span class="text-[7px] font-bold text-[#787b86] uppercase mt-1">FORCED REDEMPTIONS</span>
        </div>
        <div class="absolute bottom-0 w-32 p-3 bg-white border border-[#f23645]/30 rounded-xl shadow-xl flex flex-col items-center">
           <span class="text-[10px] font-black text-[#f23645] uppercase tracking-tighter">LIQUIDATION</span>
           <span class="text-[7px] font-bold text-[#787b86] uppercase mt-1">MARKET GAPPING</span>
        </div>
        <div class="absolute left-0 w-32 p-3 bg-white border border-[#f23645]/30 rounded-xl shadow-xl flex flex-col items-center">
           <span class="text-[10px] font-black text-[#f23645] uppercase tracking-tighter">DELEVERAGING</span>
           <span class="text-[7px] font-bold text-[#787b86] uppercase mt-1">CONTAGION SPREAD</span>
        </div>
     </div>
  </div>
  
  <div class="bg-[#f1f3f6] px-4 py-2 border-t border-[#e0e3eb] flex justify-between tracking-tighter">
    <p class="text-[9px] font-black uppercase text-[#787b86]">Reflexivity Trap: Identifying the tipping point where mechanical flows override fundamental logic</p>
    <p class="text-[9px] font-black text-[#f23645]">SIERRA CRISIS MONITOR</p>
  </div>
</div>

<p>In crises, correlations rise, liquidity falls, and the marginal price becomes a function of who must transact—not who wants to transact. Baseline is not earnings forecasts; it is leverage, funding stability, and the distribution of forced sellers.</p>

<div class="bg-slate-50 p-6 rounded-xl border border-slate-200 mt-8">
  <h4 class="font-bold text-slate-800 mb-4 flex items-center gap-2 italic">
    <span class="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
    Confirmation (what must be observed)
  </h4>
  <ul class="space-y-3 text-sm text-slate-600">
    <li class="flex items-start gap-2">
      <span class="text-blue-600 font-bold mt-0.5">•</span>
      <span>Abnormal volume.</span>
    </li>
    <li class="flex items-start gap-2">
      <span class="text-blue-600 font-bold mt-0.5">•</span>
      <span>Spread widening and depth collapse.</span>
    </li>
    <li class="flex items-start gap-2">
      <span class="text-blue-600 font-bold mt-0.5">•</span>
      <span>Cross-asset correlation spikes.</span>
    </li>
    <li class="flex items-start gap-2">
      <span class="text-blue-600 font-bold mt-0.5">•</span>
      <span>Stabilization patterns consistent with “flow completion.”</span>
    </li>
  </ul>
</div>
</div>`
  },
  {
    id: 'accidental-catalyst',
    title: 'The Accidental Catalyst: Errors and Miscommunication',
    content: `<div class="text-justify space-y-4">
<p>Accidental catalysts include operational errors, miscommunication, translation failures, ambiguous reporting, unit mistakes, and rumor-driven misreads. They move markets by creating temporary informational asymmetry: participants must price both the content and the probability the content is wrong.</p>

<!-- Visual: Accidental Catalyst Unwind (Error Correction Interface) -->
<div class="my-8 rounded-xl border border-[#e0e3eb] bg-white overflow-hidden shadow-2xl font-sans text-left">
  <div class="p-10 bg-white flex flex-col items-center">
    <div class="w-full max-w-lg relative h-16 flex items-center justify-between px-8">
       <!-- Baseline -->
       <div class="absolute h-px bg-[#e0e3eb] left-8 right-8 top-1/2 -translate-y-1/2"></div>
       
       ${[
         { t: 'ERROR', s: 'Operational Delta', c: 'bg-[#f23645]' },
         { t: 'RUMOR', s: 'Info Asymmetry', c: 'bg-[#ff9800]' },
         { t: 'CLARIFICATION', s: 'Meta-Audit', c: 'bg-[#2962ff]' },
         { t: 'UNWIND', s: 'Value Restoration', c: 'bg-[#089981]' },
       ].map(p => `
         <div class="relative flex flex-col items-center">
            <div class="w-2.5 h-2.5 rounded-full ${p.c} border-2 border-white shadow-sm z-10"></div>
            <div class="absolute top-6 whitespace-nowrap text-[8px] font-black text-[#131722] uppercase tracking-tighter">${p.t}</div>
            <div class="absolute -top-4 whitespace-nowrap text-[7px] font-black text-[#787b86] uppercase tracking-[0.1em]">${p.s}</div>
         </div>
       `).join('')}
    </div>
  </div>
  
  <div class="bg-[#f1f3f6] px-4 py-2 border-t border-[#e0e3eb] flex justify-between tracking-tighter shrink-0">
    <p class="text-[9px] font-black uppercase text-[#787b86]">Normalization Trace: Tracking the statistical mean-reversion following operational distortion</p>
    <p class="text-[9px] font-black text-[#2962ff]">SIERRA ERROR AUDIT</p>
  </div>
</div>

<p>Baseline includes the market’s trust in the information channel and the perceived cost of being wrong. Confirmation often comes as meta-information: official clarification, corrected releases, authoritative follow-ups.</p>

<div class="bg-slate-50 p-6 rounded-xl border border-slate-200 mt-8">
  <h4 class="font-bold text-slate-800 mb-4 flex items-center gap-2 italic">
    <span class="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
    Confirmation (what must be observed)
  </h4>
  <ul class="space-y-3 text-sm text-slate-600">
    <li class="flex items-start gap-2">
      <span class="text-blue-600 font-bold mt-0.5">•</span>
      <span>Authoritative clarification.</span>
    </li>
    <li class="flex items-start gap-2">
      <span class="text-blue-600 font-bold mt-0.5">•</span>
      <span>Cross-market consistency (or lack of it).</span>
    </li>
    <li class="flex items-start gap-2">
      <span class="text-blue-600 font-bold mt-0.5">•</span>
      <span>Normalization pattern once uncertainty resolves.</span>
    </li>
  </ul>
</div>
</div>`
  },
  {
    id: 'special-situations-overview',
    title: 'Special Situations Overview: Event-Driven Investing',
    content: `<div class="text-justify space-y-4">
<p>Special situations embed explicit terms, conditions, and calendars. The market price reflects a probability-weighted mix of outcomes, so analysis revolves around mapping scenarios, identifying what updates scenario probabilities, and understanding who is forced to transact and when.</p>

<!-- Visual: Special Situation Lifecycle (Phased Milestone Interface) -->
<div class="my-8 rounded-xl border border-[#e0e3eb] bg-white overflow-hidden shadow-2xl font-sans text-left">
  <div class="p-10 bg-white flex flex-col items-center">
    <div class="w-full max-w-lg relative h-16 flex items-center justify-between px-8">
       <!-- Path -->
       <div class="absolute h-px bg-[#e0e3eb] left-8 right-8 top-1/2 -translate-y-1/2"></div>
       
       ${[
         { t: 'ANNOUNCEMENT', s: 'Terms defined', c: 'bg-[#787b86]' },
         { t: 'MILESTONES', s: 'Risk resolution', c: 'bg-[#2962ff]' },
         { t: 'CLOSING', s: 'Final settlement', c: 'bg-[#089981]' },
       ].map(p => `
         <div class="relative flex flex-col items-center">
            <div class="w-2.5 h-2.5 rounded-full ${p.c} border-2 border-white shadow-sm z-10"></div>
            <div class="absolute top-6 whitespace-nowrap text-[8px] font-black text-[#131722] uppercase tracking-tighter">${p.t}</div>
            <div class="absolute -top-4 whitespace-nowrap text-[7px] font-black text-[#787b86] uppercase tracking-[0.1em]">${p.s}</div>
         </div>
       `).join('')}
    </div>
  </div>
  
  <div class="bg-[#f1f3f6] px-4 py-2 border-t border-[#e0e3eb] flex justify-between tracking-tighter shrink-0">
    <p class="text-[9px] font-black uppercase text-[#787b86]">Arbitrage Lifecycle: Understanding the deterministic path of contractual catalysts</p>
    <p class="text-[9px] font-black text-[#2962ff]">SIERRA EVENT FLOW</p>
  </div>
</div>

<p>Unlike pure short-horizon catalyst trading, special situations often require multi-stage analysis and patience. Post-event pricing can be dominated by investor-base transitions and forced flows before fundamentals dominate.</p>

<div class="bg-gray-50 p-6 rounded-xl border border-gray-100 mt-8">
  <h4 class="font-bold text-intense-indigo mb-3 italic">Confirmation (what must be observed)</h4>
  <ul class="list-disc pl-5 space-y-2 text-sm">
    <li>Milestone progression.</li>
    <li>Stable financing.</li>
    <li>Regulatory developments.</li>
    <li>Spread/price behavior consistent with probability updates.</li>
  </ul>
</div>
</div>`
  },
  {
    id: 'merger-arbitrage',
    title: 'Merger Arbitrage / Risk Arbitrage',
    content: `<div class="text-justify space-y-4">
<p>Merger arbitrage interprets the spread between the target’s trading price and the deal consideration as compensation for time-to-close and failure risk. The spread reflects a probability-weighted mix of close, delay, renegotiation, and break, plus carry/time value and liquidity risk.</p>

<!-- Visual: Deal Spread Timeline (Deterministic Binary Interface) -->
<div class="my-8 rounded-xl border border-[#e0e3eb] bg-white overflow-hidden shadow-2xl font-sans text-left">
  <div class="bg-[#f8f9fb] border-b border-[#e0e3eb] px-4 py-2 flex items-center justify-between font-mono">
    <div class="flex items-center gap-3">
        <span class="text-[12px] font-black text-[#131722]">DEAL SPREAD DYNAMICS</span>
        <span class="px-1.5 py-0.5 bg-[#e0e3eb] text-[#787b86] text-[9px] font-bold rounded uppercase">Arbitrage Engine</span>
    </div>
    <div class="flex gap-4">
        <span class="text-[10px] text-[#2962ff] font-black uppercase">Probability Decay Map</span>
    </div>
  </div>

  <div class="p-8 bg-white">
    <div class="w-full max-w-lg mx-auto h-48 border-l border-b border-[#e0e3eb] relative p-4 bg-[#fcfdfe]">
      <svg viewBox="0 0 400 150" class="w-full h-full overflow-visible">
        <!-- Spread Path -->
        <path d="M 0 100 Q 150 80, 250 110 Q 350 90, 400 120" fill="none" stroke="#2962ff" stroke-width="2" />
        <path d="M 0 100 Q 150 80, 250 110 Q 350 90, 400 120" fill="none" stroke="#2962ff" stroke-width="12" opacity="0.05" />
        
        <!-- Milestones -->
        <circle cx="0" cy="100" r="3" fill="#131722" />
        <text x="0" y="80" class="text-[8px] font-black fill-[#131722] uppercase tracking-tighter">ANNOUNCED</text>
        
        <circle cx="200" cy="95" r="3" fill="#2962ff" />
        <text x="210" y="90" class="text-[8px] font-black fill-[#2962ff] uppercase italic animate-pulse">HSR CLEARANCE</text>
        
        <circle cx="400" cy="120" r="3" fill="#089981" />
        <text x="400" y="140" text-anchor="end" class="text-[8px] font-black fill-[#089981] uppercase tracking-tighter">CLOSING</text>
      </svg>
      
      <!-- Axis Labels -->
      <div class="absolute -left-10 top-1/2 -rotate-90 text-[8px] font-black text-[#787b86] uppercase tracking-widest">GROSS SPREAD (%)</div>
    </div>
  </div>
  
  <div class="bg-[#f1f3f6] px-4 py-2 border-t border-[#e0e3eb] flex justify-between tracking-tighter">
    <p class="text-[9px] font-black uppercase text-[#787b86]">Risk Arbitrage Trace: Mapping the probability-weighted return as milestones resolve</p>
    <p class="text-[9px] font-black text-[#2962ff]">SIERRA ARBITRAGE SUITE</p>
  </div>
</div>

<p>Baseline requires signed terms vs rumor, consideration type, closing conditions and outside date, regulatory path, and financing conditions.</p>

<div class="bg-gray-50 p-6 rounded-xl border border-gray-100 mt-8">
  <h4 class="font-bold text-intense-indigo mb-3 italic">Confirmation (what must be observed)</h4>
  <ul class="list-disc pl-5 space-y-2 text-sm">
    <li>Milestone-driven spread tightening/widening.</li>
    <li>Options/borrow signals (where observable) align with break risk.</li>
    <li>Newsflow maps to conditions (second requests, rulings, financing).</li>
  </ul>
</div>
</div>`
  },
  {
    id: 'insider-transactions',
    title: 'Insider Transactions and Management Signals',
    content: `<div class="text-justify space-y-4">
<p>Insider transactions can be informative but are context-sensitive. Insiders may have better operational visibility, but they also sell for non-informational reasons (taxes, diversification, planned programs). Clusters of insider activity can be more informative than single prints, but only when conditioned on constraints and context.</p>

<!-- Visual: Signal Strength Ladder (Selection Hierarchy Interface) -->
<div class="my-8 rounded-xl border border-[#e0e3eb] bg-white overflow-hidden shadow-2xl font-sans text-left">
  <div class="bg-[#f8f9fb] border-b border-[#e0e3eb] px-4 py-2 flex items-center justify-between font-mono">
    <div class="flex items-center gap-3">
        <span class="text-[12px] font-black text-[#131722]">INSIDER SIGNAL LADDER</span>
        <span class="px-1.5 py-0.5 bg-[#e0e3eb] text-[#787b86] text-[9px] font-bold rounded uppercase">Conviction Score</span>
    </div>
    <div class="flex gap-4">
        <span class="text-[10px] text-[#2962ff] font-black uppercase">Alpha Strength Auditor</span>
    </div>
  </div>

  <div class="p-8 bg-white flex flex-col items-center">
    <div class="w-full max-w-md space-y-3">
      ${[
        { t: 'STRONGEST', s: 'CEO/CFO OPEN MARKET PURCHASE (CLUSTERED)', c: 'bg-[#2962ff] text-white border-[#2962ff]', icon: '⚡' },
        { t: 'MODERATE', s: 'DIRECTOR PURCHASE (ISOLATED)', c: 'bg-white text-[#131722] border-[#e0e3eb]', icon: '⚖️' },
        { t: 'WEAK', s: 'SCHEDULED 10B5-1 PROGRAM SALE', c: 'bg-[#f8f9fb] text-[#787b86] border-[#e0e3eb] italic', icon: '📝' },
      ].map(row => `
        <div class="flex items-center gap-4 group">
          <div class="w-20 text-[8px] font-black text-[#787b86] uppercase tracking-widest leading-none">${row.t}</div>
          <div class="flex-1 p-3 border rounded-xl flex items-center justify-between shadow-sm ${row.c} group-hover:scale-[1.02] transition-transform">
             <span class="text-[10px] font-black tracking-tighter uppercase">${row.s}</span>
             <span class="text-xs opacity-70">${row.icon}</span>
          </div>
        </div>
      `).join('')}
    </div>
  </div>
  
  <div class="bg-[#f1f3f6] px-4 py-2 border-t border-[#e0e3eb] flex justify-between tracking-tighter shrink-0">
    <p class="text-[9px] font-black uppercase text-[#787b86]">Conviction Grading: Filtering noise from actionable management signals</p>
    <p class="text-[9px] font-black text-[#2962ff]">SIERRA SIGNAL ENGINE</p>
  </div>
</div>

<p>Baseline questions include: discretionary vs planned/forced, clustering, size relative to holdings, firm cycle context, and macro regime.</p>

<div class="bg-gray-50 p-6 rounded-xl border border-gray-100 mt-8">
  <h4 class="font-bold text-intense-indigo mb-3 italic">Confirmation (what must be observed)</h4>
  <ul class="list-disc pl-5 space-y-2 text-sm">
    <li>Slower, often fundamental—subsequent results/guidance align.</li>
    <li>Price reaction persists beyond a single day.</li>
    <li>Clustering continues into weakness (sell) or into stabilization (buy).</li>
  </ul>
</div>
</div>`
  },
  {
    id: 'corporate-actions',
    title: 'Corporate Actions: Buybacks, SPACs, Spinoffs',
    content: `<div class="text-justify space-y-4">
<p>Corporate actions can reprice equity through capital allocation (buybacks), structural vehicles (SPACs), and separation/forced flow mechanics (spinoffs). These are event classes with distinct baseline hinges and microstructure risks.</p>

<!-- Visual: Buyback Impact (Capital Allocation Interface) -->
<div class="my-8 rounded-xl border border-[#e0e3eb] bg-white overflow-hidden shadow-2xl font-sans text-left">
  <div class="p-8 bg-white grid grid-cols-2 gap-6">
    <div class="p-4 bg-[#fcfdfe] border border-[#e0e3eb] rounded-xl flex flex-col space-y-4 shadow-sm group hover:border-[#2962ff]/20">
       <span class="text-[9px] font-black text-[#787b86] uppercase tracking-widest">ANNOUNCEMENT IMPACT</span>
       <div class="h-24 w-full bg-white border border-[#e0e3eb] rounded p-2 overflow-hidden relative">
          <svg viewBox="0 0 100 40" class="w-full h-full">
            <path d="M 0 35 L 40 35 L 42 15 L 100 18" fill="none" stroke="#2962ff" stroke-width="1.5" />
            <circle cx="42" cy="15" r="1.5" fill="#2962ff" />
          </svg>
          <div class="absolute bottom-2 right-2 text-[7px] font-black text-[#2962ff] uppercase italic leading-none">SENTIMENT<br/>RE-RATING</div>
       </div>
    </div>
    <div class="p-4 bg-[#fcfdfe] border border-[#e0e3eb] rounded-xl flex flex-col space-y-4 shadow-sm group hover:border-[#089981]/20">
       <span class="text-[9px] font-black text-[#787b86] uppercase tracking-widest">EXECUTION SUPPORT</span>
       <div class="h-24 w-full bg-white border border-[#e0e3eb] rounded p-2 overflow-hidden relative">
          <svg viewBox="0 0 100 40" class="w-full h-full">
            <path d="M 0 30 L 100 10" fill="none" stroke="#089981" stroke-width="1.5" stroke-dasharray="4,2" />
            <text x="50" y="35" class="text-[6px] font-black fill-[#089981]" text-anchor="middle">RECURRENT VWAP SUPPORT</text>
          </svg>
          <div class="absolute top-2 right-2 text-[7px] font-black text-[#089981] uppercase italic leading-none">MECHANICAL<br/>FLOW FLOOR</div>
       </div>
    </div>
  </div>
  
  <div class="bg-[#f1f3f6] px-4 py-2 border-t border-[#e0e3eb] flex justify-between tracking-tighter shrink-0">
    <p class="text-[9px] font-black uppercase text-[#787b86]">Capital Reinvestment: Differentiating between signaling effects and actual demand flows</p>
    <p class="text-[9px] font-black text-[#2962ff]">SIERRA CAPITAL SCAN</p>
  </div>
</div>

<h4 class="font-bold text-intense-indigo mt-6 mb-2 italic">Buybacks (authorization vs execution)</h4>
<p>Announcements can signal perceived undervaluation or capital-return policy, but execution can differ materially from announcement. Method matters (open-market vs ASR vs tender) because it changes timing and certainty.</p>

<h4 class="font-bold text-intense-indigo mt-6 mb-2 italic">SPAC lifecycle / de-SPAC dynamics</h4>
<p>SPACs embed a redemption option and warrant optionality. The path includes IPO → target search → announcement → vote/redemption → de-SPAC → lockups/registration timing and post-combination float changes.</p>

<h4 class="font-bold text-intense-indigo mt-6 mb-2 italic">Spinoffs and forced flows</h4>
<p>Spinoffs can trigger forced selling (mandates/index constraints), followed by re-rating as the new entity’s fundamentals and investor base stabilize. Timing matters because forced flows often need time to clear.</p>

<div class="bg-gray-50 p-6 rounded-xl border border-gray-100 mt-8">
  <h4 class="font-bold text-intense-indigo mb-3 italic">Confirmation (what must be observed)</h4>
  <ul class="list-disc pl-5 space-y-2 text-sm">
    <li><strong>Buybacks:</strong> disclosed repurchase follow-through; price/volume consistent with real demand.</li>
    <li><strong>SPACs:</strong> redemption outcomes; float changes; behavior around lockups/registration.</li>
    <li><strong>Spinoffs:</strong> heavy turnover; stabilization after clearance; early reporting cadence.</li>
  </ul>
</div>
</div>`
  },
  {
    id: 'management-changes',
    title: 'Management Changes as Expectations Resets',
    content: `<div class="text-justify space-y-4">
<p>Management changes can reset expectations about strategy, capital allocation, operational discipline, and credibility. The catalyst is rarely “a new person” by itself; it is the market repricing the probability of strategic change and execution quality. Repricing often occurs in stages: appointment, early messaging, early proof points, capital allocation actions.</p>

<!-- Visual: Expectations Reset Chart (Strategic Re-rating Interface) -->
<div class="my-8 rounded-xl border border-[#e0e3eb] bg-white overflow-hidden shadow-2xl font-sans text-left">
  <div class="bg-[#f8f9fb] border-b border-[#e0e3eb] px-4 py-2 flex items-center justify-between font-mono">
    <div class="flex items-center gap-3">
        <span class="text-[12px] font-black text-[#131722]">EXPECTATIONS RESET</span>
        <span class="px-1.5 py-0.5 bg-[#e0e3eb] text-[#787b86] text-[9px] font-bold rounded uppercase">Management Change</span>
    </div>
    <div class="flex gap-4">
        <span class="text-[10px] text-[#2962ff] font-black uppercase">Strategic Beta Delta</span>
    </div>
  </div>

  <div class="p-8 bg-white">
    <div class="w-full max-w-lg mx-auto h-48 border-l border-b border-[#e0e3eb] relative p-4 bg-[#fcfdfe]">
      <svg viewBox="0 0 400 150" class="w-full h-full overflow-visible">
        <!-- Baseline -->
        <line x1="0" y1="120" x2="150" y2="120" stroke="#787b86" stroke-width="1.5" stroke-dasharray="4,2" opacity="0.3" />
        <text x="0" y="135" class="text-[8px] font-black fill-[#787b86] uppercase tracking-tighter">PREVIOUS STRATEGY CEILING</text>
        
        <!-- Appointment Marker -->
        <line x1="150" y1="0" x2="150" y2="150" stroke="#2962ff" stroke-width="1" />
        <div class="absolute left-[37%] top-2 text-[8px] font-black text-[#2962ff] uppercase tracking-widest bg-white px-2">APPOINTMENT</div>

        <!-- Re-rating Path -->
        <path d="M 150 120 L 220 90 L 320 50 L 400 40" fill="none" stroke="#2962ff" stroke-width="3" />
        <text x="320" y="40" class="text-[9px] font-black fill-[#2962ff] uppercase italic animate-pulse">STRATEGIC ALPHA RE-RATING</text>
      </svg>
    </div>
  </div>
  
  <div class="bg-[#f1f3f6] px-4 py-2 border-t border-[#e0e3eb] flex justify-between tracking-tighter shrink-0">
    <p class="text-[9px] font-black uppercase text-[#787b86]">Executive Arbitrage: Modeling the net present value of expected strategic shifts</p>
    <p class="text-[9px] font-black text-[#2962ff]">SIERRA MANAGEMENT AUDIT</p>
  </div>
</div>

<p>Baseline includes prior credibility, known strategic challenges, and what changes are realistically implementable given constraints.</p>

<div class="bg-gray-50 p-6 rounded-xl border border-gray-100 mt-8">
  <h4 class="font-bold text-intense-indigo mb-3 italic">Confirmation (what must be observed)</h4>
  <ul class="list-disc pl-5 space-y-2 text-sm">
    <li>Early actions aligned with narrative.</li>
    <li>Measurable milestones.</li>
    <li>Repricing persists past initial optimism.</li>
    <li>Coherence across credit/equity if balance sheet matters.</li>
  </ul>
</div>
</div>`
  },
  {
    id: 'integrated-workflow',
    title: 'Integrated Event-Driven Workflow',
    content: `<div class="text-justify space-y-4">
<p>The integrated workflow combines all elements: establishing the baseline, identifying the catalyst, assessing the reaction mechanics, and managing the position through its lifecycle. It is a continuous process of updating probabilities as new information arrives.</p>

<!-- Visual: Integrated Workflow Flowchart (Operational Logic Interface) -->
<div class="my-8 rounded-xl border border-[#e0e3eb] bg-white overflow-hidden shadow-2xl font-sans text-left">
  <div class="px-8 py-12 bg-white flex flex-col items-center">
    <div class="w-full max-w-sm space-y-4">
      ${[
        { t: '1. ESTABLISH BASELINE', d: 'Consensus scan & implied volatility audit.', c: 'bg-[#fcfdfe] text-[#131722]' },
        { t: '2. IDENTIFY CATALYST', d: 'Surprise delta & taxonomy classification.', c: 'bg-[#2962ff] text-white' },
        { t: '3. ASSESS REACTION', d: 'Execution mechanics & half-life timing.', c: 'bg-[#fcfdfe] text-[#131722]' },
        { t: '4. MANAGE LIFECYCLE', d: 'Milestone tracking & exit discipline.', c: 'bg-[#089981] text-white' },
      ].map((step, i) => `
        <div class="flex flex-col items-center space-y-2">
           <div class="w-full p-4 ${step.c} border border-[#e0e3eb] rounded-xl flex flex-col shadow-sm group hover:scale-[1.02] transition-transform">
              <span class="text-[10px] font-black uppercase tracking-widest mb-1">${step.t}</span>
              <p class="text-[9px] opacity-70 font-medium leading-tight">${step.d}</p>
           </div>
           ${i < 3 ? '<div class="h-6 w-px bg-gradient-to-b from-[#2962ff] to-transparent"></div>' : ''}
        </div>
      `).join('')}
    </div>
  </div>
  
  <div class="bg-[#f1f3f6] px-4 py-2 border-t border-[#e0e3eb] flex justify-between tracking-tighter shrink-0">
    <p class="text-[9px] font-black uppercase text-[#787b86]">Protocol Sequence: Mapping the institutional approach to event-driven alpha</p>
    <p class="text-[9px] font-black text-[#2962ff]">SIERRA WORKFLOW ENGINE</p>
  </div>
</div>

<p>Success in event-driven analysis requires discipline in separating what is known from what is speculated, and what is fundamental from what is mechanical.</p>

<div class="bg-gray-50 p-6 rounded-xl border border-gray-100 mt-8">
  <h4 class="font-bold text-intense-indigo mb-3 italic">Confirmation (what must be observed)</h4>
  <ul class="list-disc pl-5 space-y-2 text-sm">
    <li>Coherent narrative from baseline to exit.</li>
    <li>Risk-adjusted returns consistent with the identified edge.</li>
    <li>Continuous learning from both successes and failures.</li>
  </ul>
</div>
</div>`
  },
  {
    id: 'risk-control-map',
    title: 'Risk Control Map',
    content: `<div class="text-justify space-y-4">
<p>Risk control in event-driven trading involves managing both informational risk (being wrong about the event) and execution risk (being unable to transact at the desired price). The risk control map helps prioritize where to focus defensive measures.</p>

<!-- Visual: Risk Control Matrix (Exposure Governance Interface) -->
<div class="my-8 rounded-xl border border-[#e0e3eb] bg-white overflow-hidden shadow-2xl font-sans text-left">
  <div class="bg-[#f8f9fb] border-b border-[#e0e3eb] px-4 py-2 flex items-center justify-between font-mono">
    <div class="flex items-center gap-3">
        <span class="text-[12px] font-black text-[#131722]">RISK CONTROL MATRIX</span>
        <span class="px-1.5 py-0.5 bg-[#e0e3eb] text-[#787b86] text-[9px] font-bold rounded uppercase">Exposure Audit</span>
    </div>
    <div class="flex gap-4">
        <span class="text-[10px] text-[#2962ff] font-black uppercase">Position Governance</span>
    </div>
  </div>

  <div class="p-8 bg-white grid grid-cols-2 gap-4">
    ${[
      { t: 'LOW INFO / LOW EXEC', s: 'STANDARD TRADING', c: 'bg-[#fcfdfe] text-[#787b86]' },
      { t: 'HIGH INFO / LOW EXEC', s: 'EDGE EXPLOITATION', c: 'bg-[#2962ff]/5 text-[#2962ff] border-[#2962ff]/20' },
      { t: 'LOW INFO / HIGH EXEC', s: 'EXECUTION FRICTION', c: 'bg-[#ff9800]/5 text-[#ff9800] border-[#ff9800]/20' },
      { t: 'HIGH INFO / HIGH EXEC', s: 'DANGER ZONE', c: 'bg-[#f23645]/5 text-[#f23645] border-[#f23645]/40 animate-pulse' },
    ].map(m => `
      <div class="aspect-square border rounded-2xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow ${m.c}">
         <span class="text-[9px] font-black uppercase tracking-widest leading-tight">${m.t}</span>
         <span class="text-[11px] font-black italic tracking-tighter">${m.s}</span>
      </div>
    `).join('')}
  </div>

  <div class="bg-[#f1f3f6] px-4 py-2 border-t border-[#e0e3eb] flex justify-between tracking-tighter shrink-0">
    <div class="flex gap-4">
       <p class="text-[8px] font-black uppercase text-[#787b86]">INFO RISK →</p>
       <p class="text-[8px] font-black uppercase text-[#787b86]">EXEC RISK ↑</p>
    </div>
    <p class="text-[9px] font-black text-[#2962ff]">SIERRA RISK ENGINE</p>
  </div>
</div>

<p>Position sizing should be a function of the confidence in the informational edge and the liquidity available for exit. In high-execution-risk environments, smaller sizes and wider stops are mandatory.</p>

<div class="bg-gray-50 p-6 rounded-xl border border-gray-100 mt-8">
  <h4 class="font-bold text-intense-indigo mb-3 italic">Confirmation (what must be observed)</h4>
  <ul class="list-disc pl-5 space-y-2 text-sm">
    <li>Drawdowns within expected parameters.</li>
    <li>Slippage tracked and managed.</li>
    <li>Survival through tail events.</li>
  </ul>
</div>
</div>`
  }
];
