export interface ModuleContent {
  id: string;
  title: string;
  content: string;
}

export const quantitativeAnalysisModules: ModuleContent[] = [
  {
    id: 'market-data-taxonomy',
    title: 'Market Data Taxonomy and Sampling Schemes',
    content: `<div class="text-justify space-y-4">
<p>Market analysis begins with data types: transactions (executed trades), quotes (bid/ask and sizes), and, in some venues, order-book messages that can reconstruct the limit order book state. Transactions are the most direct record of execution; a limit order book is the set of outstanding buy/sell orders not yet executed; and market orders consume existing liquidity, potentially “walking the book” when size exceeds top-of-book depth.</p>

<p>Sampling schemes define what becomes an “observation.” A clock-time grid (e.g., every 5 seconds) is not the same as event time (every trade), price-change time (every k ticks), or quote update time. Different sampling schemes change the balance between information and microstructure contamination.</p>

<!-- Visual: Sampling Taxonomy (Information Architecture Interface) -->
<div class="my-8 rounded-xl border border-[#e0e3eb] bg-white overflow-hidden shadow-2xl font-sans text-left">
  <div class="bg-[#f8f9fb] border-b border-[#e0e3eb] px-4 py-2 flex items-center justify-between font-mono">
    <div class="flex items-center gap-3">
        <span class="text-[12px] font-black text-[#131722]">SAMPLING TAXONOMY</span>
        <span class="px-1.5 py-0.5 bg-[#e0e3eb] text-[#787b86] text-[9px] font-bold rounded uppercase">Data Schemes</span>
    </div>
    <div class="flex gap-4">
        <span class="text-[10px] text-[#2962ff] font-black uppercase">Information Density Audit</span>
    </div>
  </div>

  <div class="overflow-x-auto">
    <table class="w-full text-[11px] border-collapse bg-white">
      <thead>
        <tr class="bg-[#fcfdfe] border-b border-[#e0e3eb]">
          <th class="py-3 px-6 text-left font-black text-[#131722] uppercase tracking-widest">SCHEME</th>
          <th class="py-3 px-6 text-left font-black text-[#131722] uppercase tracking-widest">DEFINITION</th>
          <th class="py-3 px-6 text-left font-black text-[#131722] uppercase tracking-widest text-[#089981]">ADVANTAGES</th>
          <th class="py-3 px-6 text-left font-black text-[#131722] uppercase tracking-widest text-[#f23645]">PRIMARY RISKS</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-[#f1f3f6]">
        ${[
          { s: 'Clock Bars', d: 'Fixed time intervals (e.g., 5s, 1m)', a: 'Simple temporal alignment', r: 'Over-samples noise in lulls' },
          { s: 'Event Bars', d: 'Every n transactions (volume/tick)', a: 'Information-consistent flow', r: 'Sensitive to split/shred' },
          { s: 'Price Delta', d: 'Every |Pt - Pt-1| > δ', a: 'Filters micro-transients', r: 'Gaps during ranges' },
          { s: 'Quote L1/L2', d: 'Every m order book updates', a: 'Captures latent liquidity', r: 'Quote stuffing artifacts' }
        ].map(row => `
          <tr class="hover:bg-[#f8f9fb] transition-colors group">
            <td class="py-3 px-6 font-mono font-black text-[#131722] uppercase group-hover:text-[#2962ff]">${row.s}</td>
            <td class="py-3 px-6 text-[#787b86] font-medium leading-relaxed">${row.d}</td>
            <td class="py-3 px-6 text-[#089981] font-black uppercase tracking-tighter">${row.a}</td>
            <td class="py-3 px-6 text-[#f23645] font-black uppercase tracking-tighter">${row.r}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  </div>
</div>

<!-- Visual: Information Density (Sampling Efficiency Interface) -->
<div class="my-8 rounded-xl border border-[#e0e3eb] bg-white overflow-hidden shadow-2xl font-sans text-left">
  <div class="bg-[#f8f9fb] border-b border-[#e0e3eb] px-4 py-2 flex items-center justify-between font-mono">
    <div class="flex items-center gap-3">
        <span class="text-[12px] font-black text-[#131722]">INFORMATION DENSITY SCAN</span>
        <span class="px-1.5 py-0.5 bg-[#e0e3eb] text-[#787b86] text-[9px] font-bold rounded uppercase">Sampling Efficiency</span>
    </div>
    <div class="flex gap-4">
        <span class="text-[10px] text-[#2962ff] font-black uppercase">Time vs Event Delta</span>
    </div>
  </div>

  <div class="p-8 bg-white">
    <div class="w-full max-w-lg mx-auto h-48 border border-[#e0e3eb] relative bg-[#fcfdfe] overflow-hidden">
      <!-- Lane A: Time Bars -->
      <div class="absolute top-12 left-24 right-8 h-px bg-[#e0e3eb] opacity-40"></div>
      <div class="absolute top-8 left-4 text-[9px] font-black text-[#787b86] uppercase tracking-widest">CLOCK BARS (1-MIN)</div>
      <div class="absolute top-12 left-24 right-8 flex justify-between">
        ${[...Array(11)].map(() => `<div class="w-px h-4 bg-[#b2b5be] -mt-2"></div>`).join('')}
      </div>

      <!-- Lane B: Event Bars -->
      <div class="absolute top-28 left-24 right-8 h-px bg-[#e0e3eb] opacity-40"></div>
      <div class="absolute top-24 left-4 text-[9px] font-black text-[#2962ff] uppercase tracking-widest">EVENT BARS (TRADES)</div>
      <div class="absolute top-28 left-24 right-8">
        <!-- Clustered Open -->
        <div class="absolute left-[0%] flex gap-1 -mt-1.5 animate-pulse">
          ${[...Array(6)].map(() => `<div class="w-2 h-3 bg-[#2962ff] rounded-sm shadow-sm"></div>`).join('')}
        </div>
        <!-- Mid-day Lull -->
        <div class="absolute left-[30%] w-2 h-3 bg-[#131722] rounded-sm -mt-1.5 opacity-40"></div>
        <div class="absolute left-[55%] w-2 h-3 bg-[#131722] rounded-sm -mt-1.5 opacity-40"></div>
        <!-- News Burst -->
        <div class="absolute left-[80%] flex gap-1 -mt-1.5 animate-pulse">
          ${[...Array(8)].map(() => `<div class="w-2 h-3 bg-[#f23645] rounded-sm shadow-sm"></div>`).join('')}
        </div>
      </div>

      <!-- Temporal Markers -->
      <div class="absolute bottom-4 left-24 right-8 flex justify-between text-[8px] font-mono text-[#787b86]">
        <span>09:30</span>
        <span>10:00</span>
        <span>10:30</span>
        <span>11:00</span>
        <span>11:30</span>
        <span>12:00</span>
      </div>
    </div>
  </div>
  
  <div class="bg-[#f1f3f6] px-4 py-2 border-t border-[#e0e3eb] flex justify-between tracking-tighter">
    <p class="text-[9px] font-black uppercase text-[#787b86]">Sampling Efficiency: Event bars recover non-Gaussian features by densifying during information bursts</p>
    <p class="text-[9px] font-black text-[#2962ff]">SIERRA DATA GENESIS</p>
  </div>
</div>

<div class="bg-slate-50 p-6 rounded-xl border border-slate-200 mt-8">
  <div class="flex justify-between items-center mb-4">
    <h4 class="text-slate-800 font-bold text-sm">Python Implementation: Tick Sampling</h4>
    <span class="text-[10px] text-slate-400 font-mono">sampling.py</span>
  </div>
  <pre class="text-xs font-mono text-slate-700 leading-relaxed overflow-x-auto p-4 bg-white rounded-lg border border-slate-100">
<span class="text-slate-400"># Standard tick-bar sampling logic</span>
<span class="text-indigo-600">def</span> <span class="text-blue-600">get_tick_bars</span>(df, n_ticks):
    <span class="text-slate-400"># df contains 'price' and 'volume' indexed by timestamp</span>
    df[<span class="text-amber-600">'tick_group'</span>] = np.arange(len(df)) // n_ticks
    bars = df.groupby(<span class="text-amber-600">'tick_group'</span>).agg({
        <span class="text-amber-600">'price'</span>: [<span class="text-amber-600">'first'</span>, <span class="text-amber-600">'max'</span>, <span class="text-amber-600">'min'</span>, <span class="text-amber-600">'last'</span>],
        <span class="text-amber-600">'volume'</span>: <span class="text-amber-600">'sum'</span>,
        <span class="text-amber-600">'timestamp'</span>: <span class="text-amber-600">'last'</span>
    })
    <span class="text-indigo-600">return</span> bars</pre>
</div>
</div>`
  },
  {
    id: 'data-engineering-pipeline',
    title: 'Data Engineering Pipeline for Market Records',
    content: `<div class="text-justify space-y-4">
<p>A market-data pipeline is the reproducible sequence: ingestion → cleaning → alignment → feature construction → labeling, with every transformation logged and testable. The pipeline must be designed for high volume and high sensitivity to small errors: a few milliseconds of timestamp drift can change event ordering; small filtering choices can change measured noise properties.</p>

<!-- Visual: Data Engineering Pipeline (Quant Stack Interface) -->
<div class="my-8 rounded-xl border border-[#e0e3eb] bg-white overflow-hidden shadow-2xl font-sans text-left">
  <div class="bg-[#f8f9fb] border-b border-[#e0e3eb] px-4 py-2 flex items-center justify-between font-mono">
    <div class="flex items-center gap-3">
        <span class="text-[12px] font-black text-[#131722]">QUANT DATA PIPELINE</span>
        <span class="px-1.5 py-0.5 bg-[#e0e3eb] text-[#787b86] text-[9px] font-bold rounded uppercase">Pipeline Arch</span>
    </div>
    <div class="flex gap-4">
        <span class="text-[10px] text-[#2962ff] font-black uppercase">Ingestion to Alpha</span>
    </div>
  </div>

  <div class="p-8 bg-white overflow-x-auto">
    <div class="min-w-[800px] flex items-center justify-between gap-2 px-4 relative h-32">
      <!-- Connection Lines -->
      <div class="absolute inset-x-12 top-[40%] h-[2px] bg-[#e0e3eb] opacity-40 -translate-y-1/2 pointer-events-none"></div>

      ${[
        { l: 'INGEST', s: 'Raw T&Q', c: 'bg-[#131722] text-white' },
        { l: 'CLEAN', s: 'Outlier Filter', c: 'bg-[#fcfdfe] text-[#131722]' },
        { l: 'ALIGN', s: 'Asof Merge', c: 'bg-[#fcfdfe] text-[#131722]' },
        { l: 'FEATURE', s: 'Micro-Signals', c: 'bg-[#2962ff] text-white' },
        { l: 'LABEL', s: 'TBM Target', c: 'bg-[#fcfdfe] text-[#131722]' },
        { l: 'VALIDATE', s: 'W-F Audit', c: 'bg-[#089981] text-white' },
      ].map(node => `
        <div class="relative flex flex-col items-center group">
           <div class="w-24 p-3 ${node.c} border border-[#e0e3eb] rounded-xl flex flex-col items-center justify-center shadow-lg group-hover:scale-105 transition-transform z-10">
              <span class="text-[9px] font-black uppercase tracking-tighter">${node.l}</span>
           </div>
           <span class="absolute -bottom-6 whitespace-nowrap text-[8px] font-black text-[#787b86] uppercase italic tracking-widest">${node.s}</span>
        </div>
      `).join('')}
    </div>
  </div>
  
  <div class="bg-[#f1f3f6] px-4 py-2 border-t border-[#e0e3eb] flex justify-between tracking-tighter shrink-0">
    <p class="text-[9px] font-black uppercase text-[#787b86]">Reproducibility Audit: Every stage of the pipeline must survive backtest-to-production parity checks</p>
    <p class="text-[9px] font-black text-[#2962ff]">SIERRA PIPELINE ENGINE</p>
  </div>
</div>

<div class="bg-slate-50 p-6 rounded-xl border border-slate-200 mt-8">
  <div class="flex justify-between items-center mb-4">
    <h4 class="text-slate-800 font-bold text-sm">Python Implementation: Data Alignment</h4>
    <span class="text-[10px] text-slate-400 font-mono">pipeline.py</span>
  </div>
  <pre class="text-xs font-mono text-slate-700 leading-relaxed overflow-x-auto p-4 bg-white rounded-lg border border-slate-100">
<span class="text-slate-400"># Aligning asynchronous series using 'asof' merge</span>
<span class="text-indigo-600">def</span> <span class="text-blue-600">align_series</span>(primary_df, secondary_df):
    <span class="text-slate-400"># primary_df: target grid (e.g. trade times)</span>
    <span class="text-slate-400"># secondary_df: features (e.g. quote updates)</span>
    aligned = pd.merge_asof(
        primary_df.sort_index(), 
        secondary_df.sort_index(),
        left_index=<span class="text-indigo-600">True</span>, 
        right_index=<span class="text-indigo-600">True</span>,
        direction=<span class="text-amber-600">'backward'</span>
    )
    <span class="text-indigo-600">return</span> aligned</pre>
</div>
</div>`
  },
  {
    id: 'cleaning-transactions-quotes',
    title: 'Cleaning Transactions and Quotes',
    content: `<div class="text-justify space-y-4">
<p>Cleaning is the controlled removal or adjustment of records that are inconsistent with the intended observation model. In transaction/quote data, a central task is mapping a trade to the prevailing quote context and choosing filters that remove recording artifacts without deleting legitimate price-impact trades.</p>

<p>A practical example is filtering transactions using a quote envelope (e.g., best bid/ask) while recognizing that block trades or trades with price impact may legitimately occur outside the prevailing envelope and could be incorrectly excluded.</p>

<div class="bg-gray-50 p-6 rounded-xl border border-gray-100 mt-8">
  <h4 class="font-bold text-intense-indigo mb-3 italic">Confirmation (what must be observed)</h4>
  <ul class="list-disc pl-5 space-y-2 text-sm">
    <li>Construct best bid/ask and midpoint from prevailing quotes.</li>
    <li>Create parallel price series: unfiltered trades, filtered trades, and midpoint series, then compare estimator outputs across them.</li>
    <li>Handle duplicates, obvious recording errors, and session boundaries.</li>
  </ul>
</div>
</div>`
  },
  {
    id: 'alignment-asynchrony-covariance',
    title: 'Alignment, Asynchrony, and Covariance under Irregular Timing',
    content: `<div class="text-justify space-y-4">
<p>Cross-asset analysis is complicated by asynchronous observation times. Even if each asset is frequently observed, the two series are not observed at the same instants. Naïve synchronization (e.g., “refresh times”) can introduce substantial bias that worsens as the refresh grid approaches the underlying mesh of observations.</p>

<p>The Hayashi–Yoshida idea is to construct covariance using overlapping intervals so that the estimator effectively integrates over the full time window rather than an activity-defined subset.</p>

<!-- Visual: Walk-Forward Validation (Experimental Design Interface) -->
<div class="my-8 rounded-xl border border-[#e0e3eb] bg-white overflow-hidden shadow-2xl font-sans text-left">
  <div class="bg-[#f8f9fb] border-b border-[#e0e3eb] px-4 py-2 flex items-center justify-between font-mono">
    <div class="flex items-center gap-3">
        <span class="text-[12px] font-black text-[#131722]">WALK-FORWARD VALIDATION</span>
        <span class="px-1.5 py-0.5 bg-[#e0e3eb] text-[#787b86] text-[9px] font-bold rounded uppercase">Protocol</span>
    </div>
    <div class="flex gap-4">
        <span class="text-[10px] text-[#f23645] font-black uppercase">Leakage Audit</span>
    </div>
  </div>

  <div class="p-10 bg-white">
     <div class="w-full max-w-lg mx-auto relative h-32 flex items-center">
        <!-- Timeline Baseline -->
        <div class="absolute inset-x-0 h-4 bg-[#f1f3f6] rounded-full border border-[#e0e3eb]"></div>
        
        <!-- Train/Val/Test Blocks -->
        <div class="absolute left-0 w-[50%] h-10 bg-[#2962ff]/10 border-x border-[#2962ff]/30 flex flex-col items-center justify-center -translate-y-px">
           <span class="text-[9px] font-black text-[#2962ff] uppercase italic tracking-[0.2em]">TRAIN</span>
        </div>
        <div class="absolute left-[54%] w-[20%] h-10 bg-[#089981]/10 border-x border-[#089981]/30 flex flex-col items-center justify-center">
           <span class="text-[9px] font-black text-[#089981] uppercase italic tracking-[0.2em]">VAL</span>
        </div>
        <div class="absolute left-[78%] w-[20%] h-10 bg-[#131722]/5 border-x border-[#131722]/30 flex flex-col items-center justify-center">
           <span class="text-[9px] font-black text-[#131722] uppercase italic tracking-[0.2em]">TEST</span>
        </div>

        <!-- Purge Gap -->
        <div class="absolute left-[50%] w-[4%] h-12 bg-white flex items-center justify-center border-x border-[#f23645]/20">
           <div class="w-px h-full bg-[#f23645] opacity-20"></div>
        </div>

        <!-- Information Leakage (Forbidden Vector) -->
        <svg viewBox="0 0 400 100" class="absolute -top-16 inset-x-0 w-full h-24 overflow-visible pointer-events-none">
           <path d="M 360 80 Q 200 -20, 40 80" fill="none" stroke="#f23645" stroke-width="1.5" stroke-dasharray="6,3" />
           <circle cx="360" cy="80" r="3" fill="#f23645" />
           <path d="M 40 80 L 45 74 M 40 80 L 50 82" stroke="#f23645" stroke-width="1.5" />
           <text x="200" y="20" text-anchor="middle" class="text-[10px] font-black fill-[#f23645] uppercase tracking-[0.4em]">FORBIDDEN LEAKAGE CHANNEL</text>
        </svg>
     </div>
  </div>
  
  <div class="bg-[#f1f3f6] px-4 py-2 border-t border-[#e0e3eb] flex justify-between tracking-tighter">
    <p class="text-[9px] font-black uppercase text-[#787b86]">Guard-Rail Audit: Enforcing strict non-overlapping periods to prevent target contamination</p>
    <p class="text-[9px] font-black text-[#2962ff]">SIERRA BACKTEST SUITE</p>
  </div>
</div>

<div class="bg-slate-50 p-6 rounded-xl border border-slate-200 mt-8">
  <div class="flex justify-between items-center mb-4">
    <h4 class="text-slate-800 font-bold text-sm">Python Implementation: Walk-Forward Split</h4>
    <span class="text-[10px] text-slate-400 font-mono">validation.py</span>
  </div>
  <pre class="text-xs font-mono text-slate-700 leading-relaxed overflow-x-auto p-4 bg-white rounded-lg border border-slate-100">
<span class="text-slate-400"># Proper time-series splitting to avoid leakage</span>
<span class="text-indigo-600">from</span> sklearn.model_selection <span class="text-indigo-600">import</span> TimeSeriesSplit

tscv = TimeSeriesSplit(n_splits=<span class="text-blue-600">5</span>, gap=<span class="text-blue-600">100</span>)
<span class="text-indigo-600">for</span> train_index, test_index <span class="text-indigo-600">in</span> tscv.split(X):
    X_train, X_test = X.iloc[train_index], X.iloc[test_index]
    <span class="text-slate-400"># Normalize ONLY using training statistics</span>
    scaler = StandardScaler().fit(X_train)
    X_train_scaled = scaler.transform(X_train)
    X_test_scaled = scaler.transform(X_test)</pre>
</div>
</div>`
  },
  {
    id: 'microstructure-noise',
    title: 'Microstructure Noise as a Measurement Problem',
    content: `<div class="text-justify space-y-4">
<p>Microstructure noise refers to deviations between observed prices (transaction prices or even quotes) and the latent economic price process, arising from bid–ask effects, discreteness, recording error, and strategic trading frictions. In a stylized additive model, the observed log-price equals latent log-price plus noise; as sampling becomes finer, the fraction of observed return variance due to noise increases.</p>

<p>A key empirical signature is that high-frequency returns can be negatively autocorrelated at lag 1, consistent with bid–ask bounce in simple microstructure models, and can resemble an MA(1) pattern.</p>

<!-- Visual: Microstructure Noise (Signal Contamination Interface) -->
<div class="my-8 rounded-xl border border-[#e0e3eb] bg-white overflow-hidden shadow-2xl font-sans text-left">
  <div class="bg-[#f8f9fb] border-b border-[#e0e3eb] px-4 py-2 flex items-center justify-between font-mono">
    <div class="flex items-center gap-3">
        <span class="text-[12px] font-black text-[#131722]">MICROSTRUCTURE NOISE</span>
        <span class="px-1.5 py-0.5 bg-[#e0e3eb] text-[#787b86] text-[9px] font-bold rounded uppercase">Noise Engine</span>
    </div>
    <div class="flex gap-4">
        <span class="text-[10px] text-[#f23645] font-black uppercase">Signal vs Friction</span>
    </div>
  </div>

  <div class="p-8 bg-white">
    <div class="w-full max-w-lg mx-auto h-64 border-l border-b border-[#e0e3eb] relative p-4 bg-[#fcfdfe] overflow-hidden">
      <!-- Cross Pattern Grid -->
      <div class="absolute inset-0 opacity-10 pointer-events-none" style="background-image: radial-gradient(#131722 0.5px, transparent 0.5px); background-size: 16px 16px;"></div>
      
      <svg viewBox="0 0 400 200" class="w-full h-full overflow-visible relative z-10">
        <!-- Latent Process (Smooth Alpha) -->
        <path d="M 0 100 Q 100 80, 200 120 T 400 100" fill="none" stroke="#2962ff" stroke-width="3" stroke-linecap="round" />
        <text x="220" y="100" class="text-[9px] font-black fill-[#2962ff] uppercase italic">Latent Efficient Price (E*)</text>
        
        <!-- Observed Process (Jagged Friction) -->
        <path d="M 0 110 L 20 90 L 40 115 L 60 85 L 80 110 L 100 125 L 120 105 L 140 140 L 160 110 L 180 135 L 200 120 L 220 140 L 240 115 L 260 90 L 280 110 L 300 85 L 320 105 L 340 80 L 360 110 L 380 95 L 400 110" 
              fill="none" stroke="#131722" stroke-width="1.5" stroke-dasharray="2,2" opacity="0.4" />
        <text x="120" y="150" class="text-[8px] font-bold fill-[#131722] uppercase tracking-widest opacity-60">Observed Real-Time Print (Pr)</text>

        <!-- Friction Arrows -->
        <path d="M 140 140 L 140 120" stroke="#f23645" stroke-width="1.5" marker-end="url(#arrow-red)" />
        <text x="145" y="130" class="text-[9px] font-black fill-[#f23645] uppercase">BID-ASK BOUNCE</text>
        
        <defs>
          <marker id="arrow-red" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0,0 L0,6 L6,3 z" fill="#f23645" />
          </marker>
        </defs>
      </svg>
    </div>
  </div>
  
  <div class="bg-[#f1f3f6] px-4 py-2 border-t border-[#e0e3eb] flex justify-between tracking-tighter">
    <p class="text-[9px] font-black uppercase text-[#787b86]">Friction Audit: Separating latent information from discrete execution noise</p>
    <p class="text-[9px] font-black text-[#2962ff]">SIERRA MICRO-MODELER</p>
  </div>
</div>

<!-- Visual: ACF Diagnostic (Signal Decay Interface) -->
<div class="my-8 rounded-xl border border-[#e0e3eb] bg-white overflow-hidden shadow-2xl font-sans text-left">
  <div class="bg-[#f8f9fb] border-b border-[#e0e3eb] px-4 py-2 flex items-center justify-between font-mono">
    <div class="flex items-center gap-3">
        <span class="text-[12px] font-black text-[#131722]">SIGNAL AUTOCORRELATION (ACF)</span>
        <span class="px-1.5 py-0.5 bg-[#e0e3eb] text-[#787b86] text-[9px] font-bold rounded uppercase">Diagnostic</span>
    </div>
    <div class="flex gap-4">
        <span class="text-[10px] text-[#2962ff] font-black uppercase">Lag Variance Scan</span>
    </div>
  </div>

  <div class="p-8 bg-white overflow-hidden">
    <div class="h-48 w-full flex items-end gap-1.5 px-4 border-b border-[#e0e3eb] bg-[#fcfdfe] relative">
      <!-- Confidence Bands -->
      <div class="absolute inset-x-4 top-[50%] h-12 bg-[#2962ff]/5 border-y border-[#2962ff]/20 -translate-y-1/2 pointer-events-none"></div>

      ${[
        -0.45, 0.08, -0.04, 0.02, -0.05, 0.01, 0.03, -0.02, 0.02, 0.00,
        0.03, -0.01, 0.02, -0.04, 0.01, 0.00, -0.02, 0.01, -0.01, 0.00
      ].map((val, i) => `
        <div class="flex-1 flex flex-col items-center group relative h-full">
          <div 
            class="w-full rounded-sm transition-all duration-300 ${i === 0 ? 'bg-[#f23645] animate-pulse' : 'bg-[#2962ff]'} group-hover:opacity-100 opacity-80"
            style="height: ${Math.abs(val) * 180}px; margin-bottom: ${val < 0 ? 0 : 'auto'}; margin-top: ${val > 0 ? 0 : 'auto'}; position: absolute; bottom: ${val < 0 ? 'calc(50% - ' + (Math.abs(val) * 180) + 'px)' : '50%'}"
          ></div>
          ${i === 0 ? `
            <div class="absolute -top-10 text-center">
              <span class="text-[8px] font-black text-[#f23645] uppercase">Friction Spike</span>
            </div>
          ` : ''}
        </div>
      `).join('')}
      
      <!-- Center Line -->
      <div class="absolute left-0 right-0 top-1/2 h-px bg-[#131722] opacity-20"></div>
    </div>
    <div class="flex justify-between mt-3 text-[9px] font-black text-[#787b86] uppercase tracking-[0.3em]">
      <span>LAG 01</span>
      <span>LAG 20</span>
    </div>
  </div>
  
  <div class="bg-[#f1f3f6] px-4 py-2 border-t border-[#e0e3eb] flex justify-between tracking-tighter">
    <p class="text-[9px] font-black uppercase text-[#787b86]">Noise Identification: Strong negative Lag-1 ACF is the deterministic signature of the bid-ask bounce</p>
    <p class="text-[9px] font-black text-[#2962ff]">SIERRA STAT ENGINE</p>
  </div>
</div>

<div class="bg-slate-50 p-6 rounded-xl border border-slate-200 mt-8">
  <div class="flex justify-between items-center mb-4">
    <h4 class="text-slate-800 font-bold text-sm">Python Implementation: ACF Diagnostic</h4>
    <span class="text-[10px] text-slate-400 font-mono">diagnostics.py</span>
  </div>
  <pre class="text-xs font-mono text-slate-700 leading-relaxed overflow-x-auto p-4 bg-white rounded-lg border border-slate-100">
<span class="text-slate-400"># Detecting bid-ask bounce via autocorrelation</span>
<span class="text-indigo-600">import</span> statsmodels.api <span class="text-indigo-600">as</span> sm

<span class="text-indigo-600">def</span> <span class="text-blue-600">check_microstructure_noise</span>(returns):
    acf = sm.tsa.acf(returns, nlags=<span class="text-blue-600">20</span>)
    lag_1_acf = acf[<span class="text-blue-600">1</span>]
    <span class="text-indigo-600">if</span> lag_1_acf < <span class="text-blue-600">-0.3</span>:
        <span class="text-indigo-600">print</span>(<span class="text-amber-600">f"Strong noise signature detected: {lag_1_acf:.2f}"</span>)
    <span class="text-indigo-600">return</span> acf</pre>
</div>
</div>`
  },
  {
    id: 'volatility-quadratic-variation',
    title: 'Volatility as Quadratic Variation and Realized Measures',
    content: `<div class="text-justify space-y-4">
<p>In continuous-time econometrics, a central volatility target is integrated variance (quadratic variation over a window). Realized variance uses sums of squared high-frequency returns as a model-free estimator of quadratic variation under idealized observation assumptions.</p>

<p>At intraday horizons, realized measures allow ex post measurement; forecasting future volatility requires time-series modeling of those measures, often after adjusting for intraday seasonal patterns.</p>

<!-- Visual: Realized Variance Construction (Operational Flow Interface) -->
<div class="my-8 rounded-xl border border-[#e0e3eb] bg-white overflow-hidden shadow-2xl font-sans text-left">
  <div class="bg-[#f8f9fb] border-b border-[#e0e3eb] px-4 py-2 flex items-center justify-between font-mono">
    <div class="flex items-center gap-3">
        <span class="text-[12px] font-black text-[#131722]">REALIZED MEASURE CONSTRUCTION</span>
        <span class="px-1.5 py-0.5 bg-[#e0e3eb] text-[#787b86] text-[9px] font-bold rounded uppercase">Flow-Audit</span>
    </div>
    <div class="flex gap-4">
        <span class="text-[10px] text-[#2962ff] font-black uppercase">Estimator Logic</span>
    </div>
  </div>

  <div class="p-8 bg-white overflow-x-auto">
    <div class="min-w-[700px] flex items-center justify-between gap-4 py-8 relative">
       <!-- Path -->
       <div class="absolute inset-x-12 top-[40%] h-[2px] bg-[#e0e3eb] opacity-40 -translate-y-1/2 pointer-events-none"></div>

       ${[
         { t: 'PRICE PROXY', s: 'Mid/T-Price', c: 'bg-[#131722] text-white' },
         { t: 'SAMPLING', s: 'Freq Grid', c: 'bg-[#fcfdfe] text-[#131722]' },
         { t: 'RETURNS', s: 'Log Deltas', c: 'bg-[#fcfdfe] text-[#131722]' },
         { t: 'SQUARED', s: 'Measure (rt²)', c: 'bg-[#2962ff] text-white' },
         { t: 'SUMMATION', s: 'Σ Measures', c: 'bg-[#089981] text-white' },
       ].map(node => `
         <div class="relative flex flex-col items-center group">
            <div class="w-24 h-16 ${node.c} border border-[#e0e3eb] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform z-10">
               <span class="text-[9px] font-black uppercase tracking-tighter text-center px-1">${node.t}</span>
            </div>
            <span class="absolute -bottom-6 whitespace-nowrap text-[8px] font-black text-[#787b86] uppercase tracking-[0.1em]">${node.s}</span>
         </div>
       `).join('')}
    </div>
  </div>
  
  <div class="bg-[#f1f3f6] px-4 py-2 border-t border-[#e0e3eb] flex justify-between tracking-tighter">
    <p class="text-[9px] font-black uppercase text-[#787b86]">RV Protocol: Recovering quadratic variation through high-frequency sampling</p>
    <p class="text-[9px] font-black text-[#2962ff]">SIERRA VOL ENGINE</p>
  </div>
</div>

<!-- Visual: U-Shape Seasonality (Temporal Volatility Interface) -->
<div class="my-8 rounded-xl border border-[#e0e3eb] bg-white overflow-hidden shadow-2xl font-sans text-left">
  <div class="bg-[#f8f9fb] border-b border-[#e0e3eb] px-4 py-2 flex items-center justify-between font-mono">
    <div class="flex items-center gap-3">
        <span class="text-[12px] font-black text-[#131722]">INTRADAY VOL SEASONALITY</span>
        <span class="px-1.5 py-0.5 bg-[#e0e3eb] text-[#787b86] text-[9px] font-bold rounded uppercase">U-Curve</span>
    </div>
    <div class="flex gap-4">
        <span class="text-[10px] text-[#2962ff] font-black uppercase">Deterministic Audit</span>
    </div>
  </div>

  <div class="p-8 bg-white">
    <div class="w-full max-w-lg mx-auto h-64 border-l border-b border-[#e0e3eb] relative p-4 bg-[#fcfdfe] overflow-hidden">
      <!-- Grid -->
      <div class="absolute inset-0 pointer-events-none opacity-5" style="background-image: linear-gradient(#131722 1px, transparent 1px), linear-gradient(90deg, #131722 1px, transparent 1px); background-size: 40px 40px;"></div>
      
      <svg viewBox="0 0 400 200" class="w-full h-full overflow-visible relative z-10">
        <!-- U-Curve Path -->
        <path d="M 0 20 Q 50 180, 200 180 T 400 20" fill="none" stroke="#2962ff" stroke-width="3" />
        
        <!-- Annotations -->
        <text x="10" y="40" class="text-[9px] font-black fill-[#2962ff] uppercase italic">MARKET OPEN (MAX GAMMA)</text>
        <text x="390" y="40" text-anchor="end" class="text-[9px] font-black fill-[#2962ff] uppercase italic">MARKET CLOSE (REBALANCING)</text>
        <text x="200" y="160" text-anchor="middle" class="text-[9px] font-black fill-[#787b86] uppercase opacity-40">MIDDAY LULL</text>
      </svg>

      <!-- Axis Labels -->
      <div class="absolute -left-12 top-1/2 -rotate-90 text-[8px] font-black text-[#787b86] uppercase tracking-[0.4em]">REALIZED VOLATILITY</div>
      <div class="absolute -bottom-6 inset-x-0 text-center text-[8px] font-black text-[#787b86] uppercase tracking-[0.4em]">NORMALIZED SESSION TIME</div>
    </div>
  </div>
  
  <div class="bg-[#f1f3f6] px-4 py-2 border-t border-[#e0e3eb] flex justify-between tracking-tighter">
    <p class="text-[9px] font-black uppercase text-[#787b86]">Temporal Archetype: Identifying the mechanical peak activity periods of the trading session</p>
    <p class="text-[9px] font-black text-[#2962ff]">SIERRA SESSION SCAN</p>
  </div>
</div>

<div class="bg-slate-50 p-6 rounded-xl border border-slate-200 mt-8">
  <div class="flex justify-between items-center mb-4">
    <h4 class="text-slate-800 font-bold text-sm">Python Implementation: Realized Variance</h4>
    <span class="text-[10px] text-slate-400 font-mono">volatility.py</span>
  </div>
  <pre class="text-xs font-mono text-slate-700 leading-relaxed overflow-x-auto p-4 bg-white rounded-lg border border-slate-100">
<span class="text-slate-400"># Simple Realized Variance (RV) calculation</span>
<span class="text-indigo-600">def</span> <span class="text-blue-600">calculate_rv</span>(prices):
    <span class="text-slate-400"># prices: Series of log-prices sampled at fixed interval</span>
    returns = prices.diff().dropna()
    rv = (returns**<span class="text-blue-600">2</span>).sum()
    <span class="text-indigo-600">return</span> rv

<span class="text-slate-400"># Annualized Volatility</span>
ann_vol = np.sqrt(calculate_rv(log_prices) * <span class="text-blue-600">252</span>)</pre>
</div>
</div>`
  },
  {
    id: 'noise-robust-volatility',
    title: 'Noise-Robust Volatility Estimation',
    content: `<div class="text-justify space-y-4">
<p>Noise-robust estimators are designed to recover integrated variance when observed prices are contaminated by microstructure noise. Practical approaches include sub-sampling and bias correction logic (two-scale ideas), kernel-based methods, and pre-averaging methods; the key is to reduce the influence of noise while retaining information from the latent process.</p>

<p>A practical warning is that estimators designed for very high-frequency settings can over-correct when the raw data frequency is not sufficiently high; estimator choice must match the observed sampling regime.</p>

<!-- Visual: Volatility Signature (Estimator Convergence Interface) -->
<div class="my-8 rounded-xl border border-[#e0e3eb] bg-white overflow-hidden shadow-2xl font-sans text-left">
  <div class="bg-[#f8f9fb] border-b border-[#e0e3eb] px-4 py-2 flex items-center justify-between font-mono">
    <div class="flex items-center gap-3">
        <span class="text-[12px] font-black text-[#131722]">VOLATILITY SIGNATURE SCAN</span>
        <span class="px-1.5 py-0.5 bg-[#e0e3eb] text-[#787b86] text-[9px] font-bold rounded uppercase">Bias Audit</span>
    </div>
    <div class="flex gap-4">
        <span class="text-[10px] text-[#2962ff] font-black uppercase">Sampling Interval Delta</span>
    </div>
  </div>

  <div class="p-8 bg-white">
    <div class="w-full max-w-lg mx-auto h-64 border-l border-b border-[#e0e3eb] relative p-4 bg-[#fcfdfe] overflow-hidden">
      <svg viewBox="0 0 400 200" class="w-full h-full overflow-visible relative z-10">
        <!-- Naive RV (Blow-up at High Freq) -->
        <path d="M 0 20 L 40 40 L 80 80 L 160 120 L 300 135 L 400 140" fill="none" stroke="#f23645" stroke-width="2.5" />
        <text x="10" y="20" class="text-[9px] font-black fill-[#f23645] uppercase italic">Microstructure Distortion (Naive RV)</text>
        
        <!-- Noise-Robust Estimator (TSRV/Kernel) -->
        <rect x="0" y="115" width="400" height="20" fill="#089981" fill-opacity="0.05" />
        <path d="M 0 125 L 400 125" fill="none" stroke="#089981" stroke-width="2.5" stroke-dasharray="8,4" />
        <text x="240" y="110" class="text-[9px] font-black fill-[#089981] uppercase italic">Latent Variance Plateau (Robust)</text>
      </svg>

      <!-- Labels -->
      <div class="absolute -bottom-6 inset-x-0 flex justify-between text-[8px] font-black text-[#787b86] uppercase tracking-[0.2em]">
        <span>HIGHEST FREQ (1s)</span>
        <span>LOWEST FREQ (30m)</span>
      </div>
    </div>
  </div>
  
  <div class="bg-[#f1f3f6] px-4 py-2 border-t border-[#e0e3eb] flex justify-between tracking-tighter">
    <p class="text-[9px] font-black uppercase text-[#787b86]">Convergence Audit: Identifying the optimal sampling mesh where signal outweighs infrastructure noise</p>
    <p class="text-[9px] font-black text-[#2962ff]">SIERRA ROBUST ESTIMATOR</p>
  </div>
</div>

<!-- Visual: Estimator Tuning (Parameter Sensitivity Interface) -->
<div class="my-8 rounded-xl border border-[#e0e3eb] bg-white overflow-hidden shadow-2xl font-sans text-left">
  <div class="bg-[#f8f9fb] border-b border-[#e0e3eb] px-4 py-2 flex items-center justify-between font-mono">
    <div class="flex items-center gap-3">
        <span class="text-[12px] font-black text-[#131722]">TUNING SENSITIVITY GRID</span>
        <span class="px-1.5 py-0.5 bg-[#e0e3eb] text-[#787b86] text-[9px] font-bold rounded uppercase">Optimizer</span>
    </div>
    <div class="flex gap-4">
        <span class="text-[10px] text-[#089981] font-black uppercase">Alpha Stability Plateau</span>
    </div>
  </div>

  <div class="p-8 bg-[#fcfdfe]">
    <div class="grid grid-cols-12 gap-1.5 h-32 w-full">
      ${[...Array(144)].map((_, i) => {
        const isStable = (i > 40 && i < 60) || (i > 80 && i < 100);
        return `<div class="rounded-sm shadow-inner ${isStable ? 'bg-[#089981] opacity-90 scale-110' : 'bg-[#131722] opacity-5'} transition-all hover:scale-125 cursor-crosshair"></div>`;
      }).join('')}
    </div>
    <div class="mt-6 flex items-center justify-between">
      <div class="flex items-center gap-3">
         <div class="w-3 h-3 bg-[#089981] rounded-sm shadow-sm ring-1 ring-[#e0e3eb]"></div>
         <span class="text-[10px] font-black text-[#131722] uppercase tracking-widest">Optimal Constraint Space (Bias-Variance Swap)</span>
      </div>
      <span class="text-[9px] font-mono text-[#787b86] italic tracking-tighter">Hyper-parameter Grid: Bandwidth (h) x Kernel (K)</span>
    </div>
  </div>
  
  <div class="bg-[#f1f3f6] px-4 py-2 border-t border-[#e0e3eb] flex justify-between tracking-tighter">
    <p class="text-[9px] font-black uppercase text-[#787b86]">Sensitivity Audit: Robustness is only achieved when the estimator output remains invariant to small window shifts</p>
    <p class="text-[9px] font-black text-[#2962ff]">SIERRA TUNING LAB</p>
  </div>
</div>

<div class="bg-slate-50 p-6 rounded-xl border border-slate-200 mt-8">
  <div class="flex justify-between items-center mb-4">
    <h4 class="text-slate-800 font-bold text-sm">Python Implementation: Two-Scale Realized Variance</h4>
    <span class="text-[10px] text-slate-400 font-mono">robust_vol.py</span>
  </div>
  <pre class="text-xs font-mono text-slate-700 leading-relaxed overflow-x-auto p-4 bg-white rounded-lg border border-slate-100">
<span class="text-slate-400"># TSRV logic (Zhang, Mykland, Ait-Sahalia)</span>
<span class="text-indigo-600">def</span> <span class="text-blue-600">calculate_tsrv</span>(prices, k_slow):
    rv_fast = calculate_rv(prices)
    <span class="text-slate-400"># Sub-sample at k_slow frequency</span>
    sub_samples = [prices.iloc[i::k_slow] <span class="text-indigo-600">for</span> i <span class="text-indigo-600">in</span> <span class="text-blue-600">range</span>(k_slow)]
    rv_slow_avg = np.mean([calculate_rv(s) <span class="text-indigo-600">for</span> s <span class="text-indigo-600">in</span> sub_samples])
    
    <span class="text-slate-400"># Bias correction</span>
    n_fast, n_slow = <span class="text-blue-600">len</span>(prices), n_fast / k_slow
    tsrv = rv_slow_avg - (n_slow / n_fast) * rv_fast
    <span class="text-indigo-600">return</span> tsrv</pre>
</div>
</div>`
  },
  {
    id: 'jumps-discontinuities',
    title: 'Jumps, Discontinuities, and Robust Variation',
    content: `<div class="text-justify space-y-4">
<p>Price processes can include discontinuities (“jumps”), which affect realized measures and the interpretation of volatility. Robust variation methods—such as multipower and truncated approaches—aim to separate continuous variation from jump contributions, often with associated limit theory and tests.</p>

<p>In multivariate settings, joint jump behavior (co-jumps) introduces additional complexity: limiting distributions for certain statistics can be non-Gaussian and require conservative testing strategies or alternative standardization.</p>

<!-- Visual: Jump Detection (Discontinuity Audit Interface) -->
<div class="my-8 rounded-xl border border-[#e0e3eb] bg-white overflow-hidden shadow-2xl font-sans text-left">
  <div class="bg-[#f8f9fb] border-b border-[#e0e3eb] px-4 py-2 flex items-center justify-between font-mono">
    <div class="flex items-center gap-3">
        <span class="text-[12px] font-black text-[#131722]">JUMP DETECTION PROTOCOL</span>
        <span class="px-1.5 py-0.5 bg-[#e0e3eb] text-[#787b86] text-[9px] font-bold rounded uppercase">Discontinuity Audit</span>
    </div>
    <div class="flex gap-4">
        <span class="text-[10px] text-[#f23645] font-black uppercase">Discrete Event Trigger</span>
    </div>
  </div>

  <div class="p-8 bg-white overflow-hidden">
     <div class="relative h-64 border border-[#e0e3eb] bg-[#fcfdfe] p-4 flex flex-col gap-6">
        <!-- Panel 1: Price Discontinuity -->
        <div class="flex-1 relative border-b border-[#e0e3eb]/50">
           <span class="absolute top-0 left-0 text-[8px] font-black text-[#787b86] uppercase tracking-widest">Path Analysis</span>
           <svg viewBox="0 0 400 60" class="w-full h-full overflow-visible">
              <path d="M 0 40 Q 50 35, 100 45 L 140 40 L 140 10 L 180 15 L 240 20 L 280 15 L 280 40 L 400 35" fill="none" stroke="#2962ff" stroke-width="2.5" />
              <!-- Markers -->
              <circle cx="140" cy="25" r="4" fill="none" stroke="#f23645" stroke-width="1.5" stroke-dasharray="2,2" />
              <text x="145" y="10" class="text-[9px] font-black fill-[#f23645] uppercase italic">GAP UP</text>
           </svg>
        </div>

        <!-- Panel 2: Volatility Threshold -->
        <div class="flex-1 relative">
           <span class="absolute top-0 left-0 text-[8px] font-black text-[#787b86] uppercase tracking-widest">Return Threshold Audit</span>
           <div class="absolute inset-x-0 top-1/2 h-[2px] bg-[#131722] opacity-10"></div>
           <div class="absolute inset-x-0 top-[20%] h-px bg-[#f23645] opacity-20 border-t border-dashed border-[#f23645]"></div>
           <div class="absolute inset-x-0 top-[80%] h-px bg-[#f23645] opacity-20 border-t border-dashed border-[#f23645]"></div>

           <div class="flex items-end justify-between h-full px-12 pb-2">
              ${[
                10, 15, -12, 10, -8, 80, -10, 15, -20, 12, 15, -90, 10, -12, 18
              ].map(val => `
                <div 
                  class="w-1.5 rounded-sm transition-all ${Math.abs(val) > 50 ? 'bg-[#f23645] shadow-[0_0_12px_rgba(242,54,69,0.4)] animate-pulse' : 'bg-[#131722] opacity-20'}"
                  style="height: ${Math.abs(val)}%"
                ></div>
              `).join('')}
           </div>
        </div>
     </div>
  </div>
  
  <div class="bg-[#f1f3f6] px-4 py-2 border-t border-[#e0e3eb] flex justify-between tracking-tighter">
    <p class="text-[9px] font-black uppercase text-[#787b86]">Jump Audit: Truncated variation methods filter these spikes to recover continuous volatility components</p>
    <p class="text-[9px] font-black text-[#2962ff]">SIERRA JUMP-MODELER</p>
  </div>
</div>

<!-- Visual: Co-Jump Identification (Cross-Asset Audit Interface) -->
<div class="my-8 rounded-xl border border-[#e0e3eb] bg-white overflow-hidden shadow-2xl font-sans text-left">
  <div class="bg-[#f8f9fb] border-b border-[#e0e3eb] px-4 py-2 flex items-center justify-between font-mono">
    <div class="flex items-center gap-3">
        <span class="text-[12px] font-black text-[#131722]">CO-JUMP ARCHITECTURE</span>
        <span class="px-1.5 py-0.5 bg-[#e0e3eb] text-[#787b86] text-[9px] font-bold rounded uppercase">Joint Audit</span>
    </div>
    <div class="flex gap-4">
        <span class="text-[10px] text-[#2962ff] font-black uppercase">Multi-Asset Synchrony</span>
    </div>
  </div>

  <div class="p-8 bg-white h-48 flex flex-col justify-center gap-4">
    ${[
      { l: 'CORRELATED CORE', s: 'T-Delta [0.2ms]', c: '#089981' },
      { l: 'ASYNC TRANSIENT', s: 'T-Delta [8.5ms]', c: '#f23645' },
    ].map(node => `
      <div class="relative h-10 w-full bg-[#fcfdfe] border border-[#e0e3eb] rounded-lg overflow-hidden flex items-center">
         <div class="w-24 px-4 h-full bg-[#f1f3f6] border-r border-[#e0e3eb] flex items-center shrink-0">
            <span class="text-[8px] font-black text-[#131722] uppercase tracking-tighter">${node.l}</span>
         </div>
         <div class="flex-1 relative flex items-center justify-center">
            <div class="absolute left-[30%] w-1 h-12 rotate-12 opacity-80" style="background: ${node.c}"></div>
            <div class="absolute left-[32%] w-1 h-12 rotate-12 opacity-80" style="background: ${node.c}"></div>
            <span class="text-[8px] font-black uppercase italic ml-48" style="color: ${node.c}">${node.s}</span>
         </div>
      </div>
    `).join('')}
  </div>
  
  <div class="bg-[#f1f3f6] px-4 py-2 border-t border-[#e0e3eb] flex justify-between tracking-tighter">
    <p class="text-[9px] font-black uppercase text-[#787b86]">Synchronicity Audit: Estimating co-jump intensity requires sub-millisecond precision alignment</p>
    <p class="text-[9px] font-black text-[#2962ff]">SIERRA CO-JUMP ANALYZER</p>
  </div>
</div>

<div class="bg-slate-50 p-6 rounded-xl border border-slate-200 mt-8">
  <div class="flex justify-between items-center mb-4">
    <h4 class="text-slate-800 font-bold text-sm">Python Implementation: Jump Test</h4>
    <span class="text-[10px] text-slate-400 font-mono">jump_test.py</span>
  </div>
  <pre class="text-xs font-mono text-slate-700 leading-relaxed overflow-x-auto p-4 bg-white rounded-lg border border-slate-100">
<span class="text-slate-400"># Bipower Variation (BPV) vs Realized Variance (RV)</span>
<span class="text-indigo-600">def</span> <span class="text-blue-600">calculate_bpv</span>(returns):
    <span class="text-slate-400"># BPV is robust to jumps</span>
    n = <span class="text-blue-600">len</span>(returns)
    abs_ret = np.abs(returns)
    bpv = (np.pi / <span class="text-blue-600">2</span>) * (n / (n - <span class="text-blue-600">1</span>)) * np.sum(abs_ret[:-<span class="text-blue-600">1</span>] * abs_ret[<span class="text-blue-600">1</span>:])
    <span class="text-indigo-600">return</span> bpv

<span class="text-slate-400"># Jump component estimate</span>
jump_comp = np.maximum(<span class="text-blue-400">0</span>, calculate_rv(returns) - calculate_bpv(returns))</pre>
</div>
</div>`
  },
  {
    id: 'liquidity-measurement',
    title: 'Liquidity Measurement: Spreads, Depth, and Impact',
    content: `<div class="text-justify space-y-4">
<p>Liquidity is multi-dimensional: immediacy costs (spreads), available quantity (depth), resiliency, and price impact. High-frequency econometrics treats liquidity measurement as estimation from quotes, transactions, and (when available) order-book states. A structured treatment includes spread measures, price-impact measures, volume-based measures, and depth modeling approaches.</p>

<p>Order-book mechanics matter: limit order priority rules and the ability of market orders to “walk the book” connect depth to execution price paths.</p>

<!-- Visual: Liquidity Geometry (Cost Basis Interface) -->
<div class="my-8 rounded-xl border border-[#e0e3eb] bg-white overflow-hidden shadow-2xl font-sans text-left">
  <div class="bg-[#f8f9fb] border-b border-[#e0e3eb] px-4 py-2 flex items-center justify-between font-mono">
    <div class="flex items-center gap-3">
        <span class="text-[12px] font-black text-[#131722]">LIQUIDITY GEOMETRY SCAN</span>
        <span class="px-1.5 py-0.5 bg-[#e0e3eb] text-[#787b86] text-[9px] font-bold rounded uppercase">Execution Audit</span>
    </div>
    <div class="flex gap-4">
        <span class="text-[10px] text-[#2962ff] font-black uppercase">Slippage Mapping</span>
    </div>
  </div>

  <div class="p-8 bg-white h-48 relative flex items-center justify-center">
     <div class="w-full max-w-lg h-2.5 bg-[#f1f3f6] rounded-full relative flex items-center overflow-visible">
        <!-- Spreads -->
        <div class="absolute left-[20%] -top-6 flex flex-col items-center">
           <div class="w-1.5 h-14 bg-[#089981] rounded-full shadow-lg"></div>
           <span class="text-[9px] font-black text-[#089981] uppercase mt-2">BID</span>
        </div>
        <div class="absolute left-[80%] -top-6 flex flex-col items-center">
           <div class="w-1.5 h-14 bg-[#f23645] rounded-full shadow-lg"></div>
           <span class="text-[9px] font-black text-[#f23645] uppercase mt-2">ASK</span>
        </div>

        <!-- Midpoint -->
        <div class="absolute left-[50%] h-12 border-l-2 border-dashed border-[#131722]/30 flex flex-col items-center">
           <span class="absolute -bottom-8 text-[9px] font-black text-[#787b86] uppercase tracking-widest">MIDPOINT (m)</span>
        </div>

        <!-- Execution Impact -->
        <div class="absolute left-[72%] -top-10 flex flex-col items-center group cursor-help">
           <div class="w-5 h-5 bg-[#2962ff] rounded-full shadow-[0_0_20px_rgba(41,98,255,0.6)] flex items-center justify-center animate-bounce">
              <div class="w-1.5 h-1.5 bg-white rounded-full"></div>
           </div>
           <span class="text-[9px] font-black text-[#2962ff] uppercase mt-1">REALIZED PRINT</span>
           <span class="text-[8px] font-black text-[#f23645] uppercase italic">Effective Cost Spike</span>
        </div>
     </div>
  </div>
  
  <div class="bg-[#f1f3f6] px-4 py-2 border-t border-[#e0e3eb] flex justify-between tracking-tighter">
    <p class="text-[9px] font-black uppercase text-[#787b86]">Friction Audit: Effective spread analysis captures the true cost of immediacy vs midpoint benchmark</p>
    <p class="text-[9px] font-black text-[#2962ff]">SIERRA LIQUIDITY DESK</p>
  </div>
</div>

<!-- Visual: Liquidity Seasonality (Temporal Friction Interface) -->
<div class="my-8 rounded-xl border border-[#e0e3eb] bg-white overflow-hidden shadow-2xl font-sans text-left">
  <div class="bg-[#f8f9fb] border-b border-[#e0e3eb] px-4 py-2 flex items-center justify-between font-mono">
    <div class="flex items-center gap-3">
        <span class="text-[12px] font-black text-[#131722]">LIQUIDITY SEASONALITY SCAN</span>
        <span class="px-1.5 py-0.5 bg-[#e0e3eb] text-[#787b86] text-[9px] font-bold rounded uppercase">Intraday Archetype</span>
    </div>
    <div class="flex gap-4">
        <span class="text-[10px] text-[#2962ff] font-black uppercase">Friction vs Depth</span>
    </div>
  </div>

  <div class="p-8 bg-white grid md:grid-cols-2 gap-6">
     <!-- Costs Lane -->
     <div class="h-48 border border-[#e0e3eb] bg-[#fcfdfe] relative rounded-xl overflow-hidden p-4">
        <span class="absolute top-2 left-4 text-[8px] font-black text-[#f23645] uppercase tracking-widest">Execution Friction (Spreads)</span>
        <svg viewBox="0 0 400 200" class="w-full h-full">
           <path d="M 0 40 Q 50 180, 200 180 T 400 40" fill="none" stroke="#f23645" stroke-width="3" />
           <text x="200" y="150" text-anchor="middle" class="text-[10px] font-black fill-[#f23645]/40 uppercase tracking-[0.2em]">TIGHTEST REGIME</text>
        </svg>
     </div>
     <!-- Depth Lane -->
     <div class="h-48 border border-[#e0e3eb] bg-[#fcfdfe] relative rounded-xl overflow-hidden p-4">
        <span class="absolute top-2 left-4 text-[8px] font-black text-[#089981] uppercase tracking-widest">Order Book Depth (Inventory)</span>
        <svg viewBox="0 0 400 200" class="w-full h-full">
           <path d="M 0 160 Q 50 20, 200 20 T 400 160" fill="none" stroke="#089981" stroke-width="3" />
           <text x="200" y="90" text-anchor="middle" class="text-[10px] font-black fill-[#089981]/40 uppercase tracking-[0.2em]">PEAK INVENTORY</text>
        </svg>
     </div>
  </div>
  
  <div class="bg-[#f1f3f6] px-4 py-2 border-t border-[#e0e3eb] flex justify-between tracking-tighter shrink-0">
    <p class="text-[9px] font-black uppercase text-[#787b86]">Mechanical Audit: Market open/close exhibit peak spreads while midday provides inventory stability</p>
    <p class="text-[9px] font-black text-[#2962ff]">SIERRA SESSION SCANNER</p>
  </div>
</div>

<div class="bg-slate-50 p-6 rounded-xl border border-slate-200 mt-8">
  <div class="flex justify-between items-center mb-4">
    <h4 class="text-slate-800 font-bold text-sm">Python Implementation: Spread Metrics</h4>
    <span class="text-[10px] text-slate-400 font-mono">liquidity.py</span>
  </div>
  <pre class="text-xs font-mono text-slate-700 leading-relaxed overflow-x-auto p-4 bg-white rounded-lg border border-slate-100">
<span class="text-slate-400"># Effective vs Quoted Spread</span>
<span class="text-indigo-600">def</span> <span class="text-blue-600">calculate_spreads</span>(trade_price, bid, ask):
    mid = (bid + ask) / <span class="text-blue-400">2</span>
    quoted_spread = ask - bid
    <span class="text-slate-400"># Effective spread: 2 * distance from mid</span>
    effective_spread = <span class="text-blue-400">2</span> * np.abs(trade_price - mid)
    
    <span class="text-slate-400"># Realized spread (requires future mid)</span>
    <span class="text-slate-400"># realized_spread = 2 * q * (trade_price - mid_future)</span>
    <span class="text-indigo-600">return</span> quoted_spread, effective_spread</pre>
</div>
</div>`
  },
  {
    id: 'durations-intensity',
    title: 'Durations and Intensity: Point-Process Foundations',
    content: `<div class="text-justify space-y-4">
<p>Many market events are better modeled as point processes than as regularly spaced time series. Durations (time between events) and intensities (event rates conditional on history) provide a framework to model trades, quote updates, and price changes. Financial durations often exhibit intraday periodicities, requiring explicit seasonality components.</p>

<p>In duration models, it is common to decompose durations into deterministic seasonal components and stochastic components, often in multiplicative form, and to estimate seasonality using flexible deterministic functions (including Fourier-type representations).</p>

<!-- Visual: Point Processes (Temporal Intensity Interface) -->
<div class="my-8 rounded-xl border border-[#e0e3eb] bg-white overflow-hidden shadow-2xl font-sans text-left">
  <div class="bg-[#f8f9fb] border-b border-[#e0e3eb] px-4 py-2 flex items-center justify-between font-mono">
    <div class="flex items-center gap-3">
        <span class="text-[12px] font-black text-[#131722]">POINT PROCESS MONITOR</span>
        <span class="px-1.5 py-0.5 bg-[#e0e3eb] text-[#787b86] text-[9px] font-bold rounded uppercase">Durations</span>
    </div>
    <div class="flex gap-4">
        <span class="text-[10px] text-[#089981] font-black uppercase">Intensity Scan λ(t)</span>
    </div>
  </div>

  <div class="p-8 bg-white overflow-hidden">
     <div class="h-48 border-b border-[#e0e3eb] bg-[#fcfdfe] relative p-4">
        <!-- Baseline -->
        <div class="absolute bottom-12 inset-x-8 h-px bg-[#131722] opacity-20"></div>
        
        <svg viewBox="0 0 400 150" class="w-full h-full overflow-visible relative z-10">
           <!-- Intensity λ(t) Curve -->
           <path d="M 0 100 Q 50 20, 100 80 T 200 40 T 300 90 T 400 20" fill="none" stroke="#089981" stroke-width="2.5" stroke-dasharray="4,2" />
           <text x="320" y="30" class="text-[9px] font-black fill-[#089981] uppercase italic">Intensity λ(t)</text>
           
           <!-- Events (Ticks) -->
           ${[40, 60, 90, 110, 130, 180, 220, 240, 255, 310, 360, 375].map(x => `
             <line x1="${x}" y1="120" x2="${x}" y2="140" stroke="#131722" stroke-width="2" />
           `).join('')}

           <!-- Duration Annotation -->
           <line x1="180" y1="110" x2="220" y2="110" stroke="#2962ff" stroke-width="1.5" marker-start="url(#dot-blue)" marker-end="url(#dot-blue)" />
           <text x="200" y="100" text-anchor="middle" class="text-[9px] font-black fill-[#2962ff] uppercase">Duration (xᵢ)</text>

           <defs>
             <marker id="dot-blue" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="3" markerHeight="3">
               <circle cx="5" cy="5" r="5" fill="#2962ff" />
             </marker>
           </defs>
        </svg>
     </div>
  </div>
  
  <div class="bg-[#f1f3f6] px-4 py-2 border-t border-[#e0e3eb] flex justify-between tracking-tighter">
    <p class="text-[9px] font-black uppercase text-[#787b86]">Temporal Audit: Modeling market events as irregular point processes recovers clustering dynamics</p>
    <p class="text-[9px] font-black text-[#2962ff]">SIERRA POINT-ENGINE</p>
  </div>
</div>

<div class="bg-slate-50 p-6 rounded-xl border border-slate-200 mt-8">
  <div class="flex justify-between items-center mb-4">
    <h4 class="text-slate-800 font-bold text-sm">Python Implementation: Duration Analysis</h4>
    <span class="text-[10px] text-slate-400 font-mono">durations.py</span>
  </div>
  <pre class="text-xs font-mono text-slate-700 leading-relaxed overflow-x-auto p-4 bg-white rounded-lg border border-slate-100">
<span class="text-slate-400"># Calculating durations from timestamps</span>
<span class="text-indigo-600">def</span> <span class="text-blue-600">get_durations</span>(timestamps):
    <span class="text-slate-400"># timestamps: Series of event times</span>
    durations = timestamps.diff().dropna()
    <span class="text-slate-400"># Filter out session gaps if necessary</span>
    <span class="text-indigo-600">return</span> durations

<span class="text-slate-400"># Basic intensity proxy (rolling count)</span>
intensity_proxy = durations.rolling(window=<span class="text-blue-400">100</span>).mean()**<span class="text-blue-400">-1</span></pre>
</div>
</div>`
  },
  {
    id: 'self-exciting-intensity-models',
    title: 'Self-Exciting and Multivariate Intensity Models',
    content: `<div class="text-justify space-y-4">
<p>Self-exciting processes model the idea that events cluster: an event increases the probability of subsequent events for some time. Hawkes processes formalize this by specifying intensity as a baseline plus a weighted contribution from past events; the weights typically decay over time and can be interpreted as an impulse-response-like influence of past events on current intensity.</p>

<p>Multivariate intensity models extend this to multiple event types or multiple assets, capturing cross-excitation and contemporaneous dependence.</p>

<!-- Visual: Hawkes Process (Self-Excitation Interface) -->
<div class="my-8 rounded-xl border border-[#e0e3eb] bg-white overflow-hidden shadow-2xl font-sans text-left">
  <div class="bg-[#f8f9fb] border-b border-[#e0e3eb] px-4 py-2 flex items-center justify-between font-mono">
    <div class="flex items-center gap-3">
        <span class="text-[12px] font-black text-[#131722]">SELF-EXCITING HAWKES LOGIC</span>
        <span class="px-1.5 py-0.5 bg-[#e0e3eb] text-[#787b86] text-[9px] font-bold rounded uppercase">Cluster Audit</span>
    </div>
    <div class="flex gap-4">
        <span class="text-[10px] text-[#f23645] font-black uppercase">Reflexive Intensity</span>
    </div>
  </div>

  <div class="p-8 bg-white">
    <div class="w-full max-w-lg mx-auto h-64 border-l border-b border-[#e0e3eb] relative p-4 bg-[#fcfdfe] overflow-hidden">
      <!-- Grid -->
      <div class="absolute inset-0 pointer-events-none opacity-5" style="background-image: linear-gradient(#131722 1px, transparent 1px); background-size: 100% 40px;"></div>
      
      <svg viewBox="0 0 400 200" class="w-full h-full overflow-visible relative z-10">
        <!-- Baseline mu -->
        <line x1="0" y1="160" x2="400" y2="160" stroke="#131722" stroke-width="1.5" stroke-dasharray="8,4" opacity="0.2" />
        <text x="320" y="155" class="text-[8px] font-black fill-[#787b86] uppercase">Baseline (μ)</text>

        <!-- Intensity Curve λ(t) -->
        <path d="M 0 160 L 50 160 L 50 40 Q 80 155, 120 155 L 120 70 Q 140 155, 170 155 L 170 30 Q 210 120, 240 120 L 240 50 Q 280 160, 400 160" 
              fill="none" stroke="#2962ff" stroke-width="2.5" />
        
        <!-- Decay Callout -->
        <path d="M 60 70 Q 100 100, 110 140" fill="none" stroke="#089981" stroke-width="1.5" marker-end="url(#arrow-green)" />
        <text x="70" y="90" class="text-[9px] font-black fill-[#089981] uppercase italic">Stochastic Decay</text>

        <!-- Event Ticks -->
        ${[50, 120, 170, 240].map(x => `
          <line x1="${x}" y1="170" x2="${x}" y2="190" stroke="#131722" stroke-width="2" />
        `).join('')}

        <defs>
          <marker id="arrow-green" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0,0 L0,6 L6,3 z" fill="#089981" />
          </marker>
        </defs>
      </svg>

      <div class="absolute -bottom-6 inset-x-0 text-center text-[8px] font-black text-[#787b86] uppercase tracking-[0.4em]">HAWKES RELATIVE TIME GRID</div>
    </div>
  </div>
  
  <div class="bg-[#f1f3f6] px-4 py-2 border-t border-[#e0e3eb] flex justify-between tracking-tighter">
    <p class="text-[9px] font-black uppercase text-[#787b86]">Cluster Audit: Modeling 'reflexivity' where one trade print increases the conditional intensity of the next</p>
    <p class="text-[9px] font-black text-[#2962ff]">SIERRA RECURSIVE ENGINE</p>
  </div>
</div>

<div class="bg-slate-50 p-6 rounded-xl border border-slate-200 mt-8">
  <div class="flex justify-between items-center mb-4">
    <h4 class="text-slate-800 font-bold text-sm">Python Implementation: Hawkes Intensity</h4>
    <span class="text-[10px] text-slate-400 font-mono">hawkes.py</span>
  </div>
  <pre class="text-xs font-mono text-slate-700 leading-relaxed overflow-x-auto p-4 bg-white rounded-lg border border-slate-100">
<span class="text-slate-400"># Intensity calculation for Hawkes process with exponential kernel</span>
<span class="text-indigo-600">def</span> <span class="text-blue-600">hawkes_intensity</span>(t, event_times, mu, alpha, beta):
    <span class="text-slate-400"># mu: baseline, alpha: jump size, beta: decay rate</span>
    relevant_events = event_times[event_times < t]
    excitation = np.sum(alpha * np.exp(-beta * (t - relevant_events)))
    <span class="text-indigo-600">return</span> mu + excitation</pre>
</div>
</div>`
  },
  {
    id: 'predictive-modeling-baselines',
    title: 'Predictive Modeling Baselines and Regularization',
    content: `<div class="text-justify space-y-4">
<p>Predictive modeling in markets should begin with transparent baselines (linear models, autoregressive structures) and only then consider regularization or higher-dimensional predictors when the feature space demands it. Regularization methods (ridge, lasso, elastic net) trade bias for variance reduction; lasso can reduce mean squared error in settings where variance dominates, but can introduce coefficient bias.</p>

<p>For volatility forecasting, a practical workflow is often: measure ex post variance (realized measure) then model it as a time series with persistence and intraday seasonality adjustments.</p>

<div class="bg-gray-50 p-6 rounded-xl border border-gray-100 mt-8">
  <h4 class="font-bold text-intense-indigo mb-3 italic">Confirmation (what must be observed)</h4>
  <ul class="list-disc pl-5 space-y-2 text-sm">
    <li>Strict time ordering for features and labels; no use of future information.</li>
    <li>Label definition: horizon, overlap policy, and whether the label is a return, variance, intensity, or liquidity change.</li>
    <li>Standardization and stability checks across regimes.</li>
  </ul>
</div>
</div>`
  },
  {
    id: 'implementation-lens',
    title: 'Implementation Lens: Costs, Constraints, and Why Backtests Fail',
    content: `<div class="text-justify space-y-4">
<p>Implementation discipline treats trading as an execution process constrained by costs, liquidity, and timing. Even if a forecast has statistical value, turning it into a tradable process requires modeling transaction costs, slippage, and market impact proxies, and imposing realistic execution constraints (latency, order types, participation limits).</p>

<div class="bg-gray-50 p-6 rounded-xl border border-gray-100 mt-8">
  <h4 class="font-bold text-intense-indigo mb-3 italic">Confirmation (what must be observed)</h4>
  <ul class="list-disc pl-5 space-y-2 text-sm">
    <li>Time-stamped quotes and trades aligned to estimate effective spreads and slippage-like proxies.</li>
    <li>If using order book, ensure reconstruction accuracy and consistent taxonomy.</li>
  </ul>
</div>
</div>`
  },
  {
    id: 'monitoring-drift',
    title: 'Monitoring, Drift, and Post-Mortem Review',
    content: `<div class="text-justify space-y-4">
<p>Models and estimators degrade because markets change: trading rules evolve, liquidity regimes shift, and the observation process (data feeds, timestamp precision, venue coverage) can change. Monitoring is the practice of detecting drift in inputs and outputs and triggering recalibration or invalidation when assumptions no longer hold.</p>

<!-- Visual: Post-Analysis Review (Operational Governance Interface) -->
<div class="my-8 rounded-xl border border-[#e0e3eb] bg-white overflow-hidden shadow-2xl font-sans text-left">
  <div class="bg-[#f8f9fb] border-b border-[#e0e3eb] px-4 py-2 flex items-center justify-between font-mono text-[10px]">
    <div class="flex items-center gap-3">
        <span class="text-[12px] font-black text-[#131722]">POST-ANALYSIS GOVERNANCE</span>
        <span class="px-1.5 py-0.5 bg-[#e0e3eb] text-[#787b86] font-bold rounded uppercase tracking-wider">Audit Template</span>
    </div>
    <div class="flex gap-4 items-center">
        <span class="text-[#f23645] font-black uppercase">Critical Review Required</span>
        <div class="w-2.5 h-2.5 rounded-full bg-[#f23645] animate-pulse"></div>
    </div>
  </div>

  <div class="p-8 bg-white overflow-hidden">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      ${[
        { l: 'DATASET VERSION', v: 'v4.2.1-SIGMA-CLEAN', c: 'border-l-2 border-[#131722]' },
        { l: 'SAMPLING SCHEME', v: '10,000-TICK ADAPTIVE', c: 'border-l-2 border-[#2962ff]' },
        { l: 'MODEL REGIME', v: 'CROSS-ASSET EXCITATION', c: 'border-l-2 border-[#089981]' },
        { l: 'SLIPPAGE PROXY', v: '0.5BPS + IMPACT-K', c: 'border-l-2 border-[#f23645]' },
        { l: 'TUNING PLATEAU', v: 'STABLE [λ=0.04, K=12]', c: 'border-l-2 border-[#131722]' },
        { l: 'DRIFT THRESHOLD', v: 'PSI > 0.25 TRIGGER', c: 'border-l-2 border-[#131722]' }
      ].map(field => `
        <div class="p-4 bg-[#fcfdfe] border border-[#e0e3eb] rounded-lg shadow-sm group hover:border-[#2962ff] transition-colors ${field.c}">
           <p class="text-[8px] font-black text-[#787b86] uppercase tracking-[0.2em] mb-1.5">${field.l}</p>
           <p class="text-[10px] font-black text-[#131722] opacity-80 group-hover:opacity-100">${field.v}</p>
        </div>
      `).join('')}

      <div class="md:col-span-3 space-y-2 mt-4">
        <div class="flex items-center justify-between">
           <span class="text-[8px] font-black text-[#131722] uppercase tracking-[0.4em]">CRITICAL FAILURES & EDGE CASES</span>
           <span class="text-[8px] font-black text-[#f23645] uppercase italic font-mono animate-pulse">Live Delta Monitoring Active</span>
        </div>
        <div class="w-full h-24 bg-[#fcfdfe] border border-[#e0e3eb] rounded-xl p-4 font-mono text-[10px] text-[#787b86] leading-relaxed italic group hover:border-[#f23645]/40 transition-colors">
          SYSTEM_LOG: Identifying non-stationarity in the tail residual distribution at high execution frequencies. Recalibration of the impact-decay kernel recommended if PSI exceeds 0.2 threshold in next session...
        </div>
      </div>
    </div>
  </div>
  
  <div class="bg-[#f1f3f6] px-4 py-2 border-t border-[#e0e3eb] flex justify-between tracking-tighter">
    <p class="text-[9px] font-black uppercase text-[#787b86]">Governance Protocol: Systematic post-mortem review is mandatory for all production-grade quantitative architectures</p>
    <p class="text-[9px] font-black text-[#2962ff]">SIERRA SYSTEM QUALITY CONTROL</p>
  </div>
</div>

<div class="bg-slate-50 p-6 rounded-xl border border-slate-200 mt-8">
  <div class="flex justify-between items-center mb-4">
    <h4 class="text-slate-800 font-bold text-sm">Python Implementation: Drift Detection</h4>
    <span class="text-[10px] text-slate-400 font-mono">monitoring.py</span>
  </div>
  <pre class="text-xs font-mono text-slate-700 leading-relaxed overflow-x-auto p-4 bg-white rounded-lg border border-slate-100">
<span class="text-slate-400"># Simple Population Stability Index (PSI) for drift</span>
<span class="text-indigo-600">def</span> <span class="text-blue-600">calculate_psi</span>(expected, actual, buckets=<span class="text-blue-600">10</span>):
    <span class="text-slate-400"># expected: baseline distribution</span>
    <span class="text-slate-400"># actual: current distribution</span>
    e_percents = np.histogram(expected, buckets)[<span class="text-blue-600">0</span>] / <span class="text-blue-600">len</span>(expected)
    a_percents = np.histogram(actual, buckets)[<span class="text-blue-600">0</span>] / <span class="text-blue-600">len</span>(actual)
    
    psi = np.sum((a_percents - e_percents) * np.log(a_percents / e_percents))
    <span class="text-indigo-600">return</span> psi</pre>
</div>
</div>`
  }
];
