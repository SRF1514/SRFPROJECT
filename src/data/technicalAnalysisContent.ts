export interface ModuleContent {
  id: string;
  title: string;
  content: string;
}

export const technicalAnalysisModules: ModuleContent[] = [
  {
    id: 'trend-framing',
    title: 'Trend Framing and the Three-Trend Market',
    content: `<div class="text-justify space-y-4">
<p><strong>Concept definition (classical):</strong> Trend framing is the disciplined act of classifying price movement into a hierarchy—primary, secondary, and minor—and then describing the dominant direction using swing structure rather than opinion. The point is not to forecast; it is to standardize language. When two analysts agree on what constitutes a swing high, a swing low, and a decisive break, they can evaluate the same evidence without drifting into narrative.</p>

<p><strong>Structural logic (cause/effect):</strong> The structural logic of a trend is rooted in where transactions consistently clear. In an uptrend, the market demonstrates that declines are being absorbed at progressively higher levels: reaction lows hold above prior significant lows, and subsequent rallies succeed in reaching new swing highs. In a downtrend, the inverse holds: rallies are rejected below prior significant highs, and subsequent declines print lower swing lows. This is not a claim about value; it is a claim about dominance. It also explains why counter-moves are expected: a secondary reaction can retrace a meaningful portion of the impulse and still leave the primary structure intact. The framework treats this as normal behavior until the structure is damaged.</p>

<p><strong>Confirmation criteria (what must be observed):</strong> Trend confirmation is observed, not assumed. A primary uptrend is confirmed when the larger-horizon structure shows higher highs and higher lows, and when pullbacks fail to violate the most recent significant swing low that defines the uptrend boundary. A primary downtrend is confirmed when the larger-horizon structure shows lower highs and lower lows, and when rallies fail to reclaim the most recent significant swing high that defines the downtrend boundary. Secondary trend confirmation is more conditional: it is recognized as a multi-swing move counter to the primary that retraces meaningfully but does not break the primary’s defining swing point. When the horizon is ambiguous—mixed swings, heavy overlap, inconsistent closes around key pivots—the correct statement is not an improvised label. It is: Structural conditions remain inconclusive, and the missing confirmation is typically either a decisive swing break (of a prior significant low/high) or acceptance beyond a range boundary that clearly changes the classification.</p>

<p><strong>Failure / invalidation conditions:</strong> Invalidation is the formal boundary of truth for the classification. If an uptrend requires higher lows, then a decisive violation of the defining prior significant swing low invalidates the uptrend classification and forces a re-evaluation (trend damage, transition, or reversal candidate). If a downtrend requires lower highs, then a decisive violation of the defining prior significant swing high invalidates that downtrend classification. A key operational point is to define what counts as decisive: many environments require close-based acceptance (multiple closes beyond a level) rather than wick-based penetration to avoid labeling noise as regime change.</p>

<p><strong>Common misreads:</strong> Trend framing errors usually come from collapsing horizons and confusing local drama with structural change. One common misread is treating a one- or two-bar reversal as a primary trend shift without a swing break. Another is allowing a lagging tool (for example, a single moving average crossover) to override swing structure. A third is labeling every pullback in an uptrend as “distribution” without evidence of boundary failure. A final misread is overfitting: redrawing structure to match the most recent bars instead of anchoring to significant swings and letting the market prove a change.</p>

<!-- Visual: Decision Flowchart -->
<div class="my-8 p-6 bg-white rounded-2xl border border-slate-200 flex flex-col items-center shadow-sm">
  <div class="w-full max-w-2xl space-y-4">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl text-center shadow-sm">
        <span class="text-[10px] font-bold text-blue-600 uppercase tracking-widest">1. Classify</span>
        <p class="text-[11px] text-slate-600 mt-1 font-medium">Trend Up / Down / Range</p>
      </div>
      <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl text-center shadow-sm">
        <span class="text-[10px] font-bold text-blue-600 uppercase tracking-widest">2. Mark Levels</span>
        <p class="text-[11px] text-slate-600 mt-1 font-medium">Significant Swings & Zones</p>
      </div>
      <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl text-center shadow-sm">
        <span class="text-[10px] font-bold text-blue-600 uppercase tracking-widest">3. Identify</span>
        <p class="text-[11px] text-slate-600 mt-1 font-medium">Candidate Structure</p>
      </div>
    </div>
    <div class="flex justify-center py-2">
      <div class="h-8 w-px bg-slate-200"></div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl text-center shadow-sm">
        <span class="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">4. Define Trigger</span>
        <p class="text-[11px] text-slate-600 mt-1 font-medium">Confirmation Event</p>
      </div>
      <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl text-center shadow-sm">
        <span class="text-[10px] font-bold text-rose-600 uppercase tracking-widest">5. Define Invalidation</span>
        <p class="text-[11px] text-slate-600 mt-1 font-medium">Premise Failure Point</p>
      </div>
    </div>
    <div class="flex justify-center py-2">
      <div class="h-8 w-px bg-slate-200"></div>
    </div>
    <div class="p-4 bg-slate-100 border border-slate-200 rounded-xl text-center">
      <div class="flex justify-around text-[9px] font-bold uppercase tracking-tighter">
        <span class="text-emerald-600">Confirmed</span>
        <span class="text-slate-400">Inconclusive</span>
        <span class="text-rose-600">Failed</span>
      </div>
    </div>
  </div>
  <p class="mt-6 text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold">Integrated Decision Flow</p>
</div>

<!-- Visual: Weekly Trend Chart (Professional Trading Platform Style) -->
<div class="my-8 rounded-xl border border-[#e0e3eb] bg-white overflow-hidden shadow-2xl font-sans">
  <!-- Chart Header (UI Overlay) -->
  <div class="bg-[#f1f3f6] border-b border-[#e0e3eb] px-4 py-2 flex items-center justify-between">
    <div class="flex items-center gap-4">
      <div class="flex items-center gap-2">
        <span class="text-[13px] font-black text-[#131722]">BTCUSD</span>
        <span class="px-1.5 py-0.5 bg-[#e0e3eb] text-[#787b86] text-[10px] font-bold rounded">1W</span>
        <span class="text-[10px] text-[#787b86] font-medium uppercase tracking-wider">Index</span>
      </div>
      <div class="hidden md:flex items-center gap-3 border-l border-[#d1d4dc] pl-4">
          <span class="text-[10px] text-[#787b86]">MA 20 <span class="text-[#2962ff]">54120.30</span></span>
          <span class="text-[10px] text-[#787b86]">MA 10 <span class="text-[#ff9800]">48210.15</span></span>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <div class="flex items-center gap-2">
        <span class="text-[10px] text-[#089981] font-bold">O 42.5k</span>
        <span class="text-[10px] text-[#089981] font-bold">H 68.2k</span>
        <span class="text-[10px] text-[#f23645] font-bold">L 41.2k</span>
        <span class="text-[10px] text-[#089981] font-bold">C 67.5k</span>
      </div>
    </div>
  </div>
  
  <div class="w-full aspect-[21/9] md:aspect-[2.5/1] relative bg-white overflow-hidden p-0">
    <svg viewBox="0 0 800 320" class="w-full h-full">
      <!-- Watermark -->
      <text x="400" y="160" text-anchor="middle" fill="#f1f3f6" font-size="60" font-weight="900" transform="rotate(-15 400 160)" pointer-events="none">SIERRA ANALYSIS</text>

      <!-- Grid System -->
      <g stroke="#f0f3fa" stroke-width="1">
        <line x1="0" y1="40" x2="740" y2="40" />
        <line x1="0" y1="80" x2="740" y2="80" />
        <line x1="0" y1="120" x2="740" y2="120" />
        <line x1="0" y1="160" x2="740" y2="160" />
        <line x1="0" y1="200" x2="740" y2="200" />
        <line x1="0" y1="240" x2="740" y2="240" />
        <line x1="0" y1="280" x2="740" y2="280" />
        
        <line x1="100" y1="0" x2="100" y2="300" />
        <line x1="220" y1="0" x2="220" y2="300" />
        <line x1="340" y1="0" x2="340" y2="300" />
        <line x1="460" y1="0" x2="460" y2="300" />
        <line x1="580" y1="0" x2="580" y2="300" />
        <line x1="700" y1="0" x2="700" y2="300" />
      </g>

      <!-- Axes Borders -->
      <line x1="740" y1="0" x2="740" y2="300" stroke="#d1d4dc" stroke-width="1" />
      <line x1="0" y1="300" x2="740" y2="300" stroke="#d1d4dc" stroke-width="1" />
      
      <!-- Right Axis Labels -->
      <text x="745" y="45" fill="#787b86" font-size="9" font-family="monospace">75k</text>
      <text x="745" y="85" fill="#787b86" font-size="9" font-family="monospace">70k</text>
      <text x="745" y="125" fill="#787b86" font-size="9" font-family="monospace">65k</text>
      <text x="745" y="165" fill="#787b86" font-size="9" font-family="monospace">60k</text>
      <text x="745" y="205" fill="#787b86" font-size="9" font-family="monospace">55k</text>
      <text x="745" y="245" fill="#787b86" font-size="9" font-family="monospace">50k</text>
      <text x="745" y="285" fill="#787b86" font-size="9" font-family="monospace">45k</text>

      <!-- Bottom Axis Labels -->
      <text x="90" y="315" fill="#787b86" font-size="9" font-family="monospace">SEP</text>
      <text x="210" y="315" fill="#787b86" font-size="9" font-family="monospace">OCT</text>
      <text x="330" y="315" fill="#787b86" font-size="9" font-family="monospace">NOV</text>
      <text x="450" y="315" fill="#787b86" font-size="9" font-family="monospace">DEC</text>
      <text x="570" y="315" fill="#787b86" font-size="9" font-family="monospace">JAN '24</text>

      <!-- Indicators -->
      <!-- SMA 20 (Lagging path) -->
      <path d="M 50 260 C 150 220 200 240 300 160 S 500 180 740 40" fill="none" stroke="#2962ff" stroke-width="1.5" stroke-opacity="0.8" />
      <!-- SMA 10 (Faster path) -->
      <path d="M 50 255 C 150 180 200 210 320 120 S 480 140 740 25" fill="none" stroke="#ff9800" stroke-width="1.5" stroke-opacity="0.8" />

      <!-- Candlesticks (Uptrend Structure) -->
      <!-- Bar 1 -->
      <line x1="50" y1="240" x2="50" y2="280" stroke="#089981" stroke-width="1" />
      <rect x="46" y="250" width="8" height="20" fill="#089981" />
      
      <!-- Bar 2 -->
      <line x1="100" y1="210" x2="100" y2="250" stroke="#089981" stroke-width="1" />
      <rect x="96" y="220" width="8" height="25" fill="#089981" />

      <!-- Swing High 1 -->
      <line x1="150" y1="130" x2="150" y2="180" stroke="#089981" stroke-width="1" />
      <rect x="146" y="140" width="8" height="30" fill="#089981" />
      <text x="150" y="120" text-anchor="middle" fill="#2962ff" font-size="9" font-weight="900">HH</text>

      <!-- Reaction Low 1 -->
      <line x1="200" y1="190" x2="200" y2="230" stroke="#f23645" stroke-width="1" />
      <rect x="196" y="200" width="8" height="25" fill="#f23645" />
      <text x="200" y="245" text-anchor="middle" fill="#089981" font-size="9" font-weight="900">HL</text>

      <!-- Bar 5 -->
      <line x1="250" y1="150" x2="250" y2="200" stroke="#089981" stroke-width="1" />
      <rect x="246" y="160" width="8" height="30" fill="#089981" />

      <!-- Bar 6 -->
      <line x1="300" y1="100" x2="300" y2="160" stroke="#089981" stroke-width="1" />
      <rect x="296" y="110" width="8" height="40" fill="#089981" />

      <!-- Swing High 2 -->
      <line x1="350" y1="60" x2="350" y2="120" stroke="#089981" stroke-width="1" />
      <rect x="346" y="70" width="8" height="40" fill="#089981" />
      <text x="350" y="50" text-anchor="middle" fill="#2962ff" font-size="9" font-weight="900">HH</text>

      <!-- Reaction Low 2 -->
      <line x1="400" y1="120" x2="400" y2="160" stroke="#f23645" stroke-width="1" />
      <rect x="396" y="130" width="8" height="20" fill="#f23645" />
      <text x="400" y="175" text-anchor="middle" fill="#089981" font-size="9" font-weight="900">HL</text>

      <!-- Bar 9 -->
      <line x1="450" y1="80" x2="450" y2="140" stroke="#089981" stroke-width="1" />
      <rect x="446" y="90" width="8" height="40" fill="#089981" />

      <!-- Bar 10 -->
      <line x1="500" y1="40" x2="500" y2="100" stroke="#089981" stroke-width="1" />
      <rect x="496" y="50" width="8" height="40" fill="#089981" />

      <!-- Swing High 3 -->
      <line x1="600" y1="20" x2="600" y2="70" stroke="#089981" stroke-width="1" />
      <rect x="596" y="30" width="8" height="30" fill="#089981" />
      <text x="600" y="15" text-anchor="middle" fill="#2962ff" font-size="9" font-weight="900">HH</text>

      <!-- Reaction Low 3 -->
      <line x1="650" y1="90" x2="650" y2="130" stroke="#f23645" stroke-width="1" />
      <rect x="646" y="100" width="8" height="20" fill="#f23645" />
      <text x="650" y="145" text-anchor="middle" fill="#089981" font-size="9" font-weight="900">HL (Defining Low)</text>

      <!-- Bar 13 -->
      <line x1="700" y1="40" x2="700" y2="100" stroke="#089981" stroke-width="1" />
      <rect x="696" y="50" width="8" height="40" fill="#089981" />

      <!-- Bar 14 -->
      <line x1="740" y1="10" x2="740" y2="60" stroke="#089981" stroke-width="1" />
      <rect x="736" y="20" width="8" height="30" fill="#089981" />

      <!-- Invalidation Level -->
      <line x1="640" y1="100" x2="770" y2="100" stroke="#f23645" stroke-width="1" stroke-dasharray="3,2" />
      <rect x="740" y="92" width="55" height="16" rx="2" fill="#f23645" />
      <text x="767.5" y="103" text-anchor="middle" fill="white" font-size="7" font-weight="bold" font-family="monospace">INVALIDATION</text>
      
      <!-- Current Price Tag -->
      <rect x="740" y="42" width="40" height="16" rx="2" fill="#089981" />
      <text x="760" y="53" text-anchor="middle" fill="white" font-size="8" font-family="monospace" font-weight="bold">67.5k</text>

      <!-- Volume Pane -->
      <g opacity="0.4">
        <rect x="46" y="280" width="8" height="20" fill="#089981" />
        <rect x="96" y="270" width="8" height="30" fill="#089981" />
        <rect x="146" y="240" width="8" height="60" fill="#089981" />
        <rect x="196" y="280" width="8" height="20" fill="#f23645" />
        <rect x="246" y="270" width="8" height="30" fill="#089981" />
        <rect x="296" y="250" width="8" height="50" fill="#089981" />
        <rect x="346" y="240" width="8" height="60" fill="#089981" />
        <rect x="396" y="275" width="8" height="25" fill="#f23645" />
        <rect x="446" y="260" width="8" height="40" fill="#089981" />
        <rect x="496" y="250" width="8" height="50" fill="#089981" />
        <rect x="596" y="230" width="8" height="70" fill="#089981" />
        <rect x="646" y="260" width="8" height="40" fill="#f23645" />
        <rect x="696" y="240" width="8" height="60" fill="#089981" />
        <rect x="736" y="220" width="8" height="80" fill="#089981" />
      </g>
    </svg>
  </div>
  <div class="bg-gray-50 px-4 py-2 flex items-center justify-between border-t border-[#e0e3eb]">
    <span class="text-[9px] font-black uppercase tracking-widest text-[#787b86]">Institutional Trend Hierarchy Map</span>
    <div class="flex items-center gap-3">
       <span class="flex items-center gap-1.5 text-[9px] font-bold text-[#787b86]"><div class="w-2 h-2 rounded-full bg-[#089981]"></div> Bullish Volume</span>
       <span class="flex items-center gap-1.5 text-[9px] font-bold text-[#787b86]"><div class="w-2 h-2 rounded-full bg-[#f23645]"></div> Distribution</span>
    </div>
  </div>
</div>
</div>`
  },
  {
    id: 'support-resistance',
    title: 'Support, Resistance, and Role Reversal',
    content: `<div class="text-justify space-y-4">
<p><strong>Concept definition (classical):</strong> Support and resistance are not mystical lines; they are zones where the market has repeatedly demonstrated a change in behavior. Support is the area where declines repeatedly stall and reverse, indicating that demand absorbs supply at that region. Resistance is the area where advances repeatedly stall, indicating that supply absorbs demand. The classical framing is explicit about two things: first, these are zones rather than ticks; second, their meaning is conditional on how the market behaves when the zone is tested.</p>

<p><strong>Structural logic (cause/effect):</strong> Support and resistance form because prior trade creates memory and inventory. Participants who previously transacted near a level often respond differently when price returns. Buyers who endured drawdowns after buying near resistance may sell when price revisits that area. Sellers who sold near support may buy back when price returns, especially if they missed subsequent movement. This is not psychology for its own sake; it is an explanation for why the market can repeatedly respond near the same area. Role reversal—resistance becoming support or support becoming resistance—occurs when the market demonstrates acceptance on the far side of the boundary and then successfully defends it on a retest. The key is that role reversal is not “declared”; it is demonstrated.</p>

<p><strong>Confirmation criteria (what must be observed):</strong> A support zone is confirmed when price tests the area and fails to achieve decisive acceptance below it, then rallies in a way that produces a higher swing or at minimum restores containment back into the prior structure. A resistance zone is confirmed when tests fail to achieve decisive acceptance above it and are followed by renewed decline. Role reversal is confirmed by sequence and acceptance: the market breaks the boundary with a decisive close, holds outside the prior containment, and then retests the zone from the other side and holds it. If price breaks a level intrabar but immediately returns and accepts inside the prior area, the correct statement is: Structural conditions remain inconclusive. The missing confirmation is acceptance—multiple closes or a clear break–retest outcome demonstrating control.</p>

<p><strong>Failure / invalidation conditions:</strong> Support fails when the market achieves sustained acceptance below the support zone and cannot reclaim it; what was previously a floor becomes overhead supply. Resistance fails when the market achieves sustained acceptance above the resistance zone and cannot fall back beneath it; what was previously a ceiling becomes a platform. Role reversal fails when the retest penetrates and price re-accepts back into the old range. In practice, role reversal failure is one of the clearest “trap” diagnostics because it reveals that the breakout did not create durable acceptance.</p>

<p><strong>Common misreads:</strong> Most misreads come from false precision and premature labeling. Treating support/resistance as an exact price rather than a zone causes analysts to label normal noise as “failure.” Declaring role reversal without a retest event is another common error; without a retest, the market has not demonstrated defense. A third misread is ignoring trend context: a “support bounce” in a primary downtrend may be only a secondary reaction unless it produces swing and boundary acceptance that changes classification. Finally, drawing levels from isolated spikes rather than repeated trade clusters weakens structural relevance.</p>

<!-- Visual: Role Reversal (Resistance to Support) -->
<div class="my-8 rounded-xl border border-[#e0e3eb] bg-white overflow-hidden shadow-2xl font-sans">
  <!-- Chart Header -->
  <div class="bg-[#f8f9fb] border-b border-[#e0e3eb] px-4 py-2 flex items-center justify-between">
    <div class="flex items-center gap-3">
        <span class="text-[12px] font-bold text-[#131722]">APPLE INC</span>
        <span class="px-1.5 py-0.5 bg-[#e0e3eb] text-[#787b86] text-[9px] font-bold rounded uppercase">Daily</span>
    </div>
    <div class="flex gap-4">
        <span class="text-[10px] text-[#787b86]">MA 50 <span class="text-[#2962ff]">182.40</span></span>
        <span class="text-[10px] text-[#2962ff] font-bold">Structural Role Reversal Observed</span>
    </div>
  </div>

  <div class="w-full aspect-[2.5/1] relative bg-white overflow-hidden">
    <svg viewBox="0 0 800 240" class="w-full h-full">
      <!-- Grid -->
      <g stroke="#f0f3fa" stroke-width="1">
        <line x1="0" y1="40" x2="740" y2="40" />
        <line x1="0" y1="90" x2="740" y2="90" />
        <line x1="0" y1="140" x2="740" y2="140" />
        <line x1="0" y1="190" x2="740" y2="190" />
        <line x1="150" y1="0" x2="150" y2="240" />
        <line x1="350" y1="0" x2="350" y2="240" />
        <line x1="550" y1="0" x2="550" y2="240" />
      </g>

      <!-- Resistance Zone -->
      <rect x="0" y="80" width="740" height="25" fill="#2962ff" fill-opacity="0.08" />
      <line x1="0" y1="80" x2="740" y2="80" stroke="#2962ff" stroke-width="1" stroke-dasharray="4,4" opacity="0.4" />
      <line x1="0" y1="105" x2="740" y2="105" stroke="#2962ff" stroke-width="1" stroke-dasharray="4,4" opacity="0.4" />
      
      <!-- Right Axis -->
      <line x1="740" y1="0" x2="740" y2="240" stroke="#d1d4dc" stroke-width="1" />
      <text x="745" y="45" fill="#787b86" font-size="8" font-family="monospace">195.00</text>
      <text x="745" y="95" fill="#787b86" font-size="8" font-family="monospace">190.00</text>
      <text x="745" y="145" fill="#787b86" font-size="8" font-family="monospace">185.00</text>
      <text x="745" y="195" fill="#787b86" font-size="8" font-family="monospace">180.00</text>

      <!-- Candlesticks -->
      <!-- Test 1 -->
      <line x1="150" y1="80" x2="150" y2="130" stroke="#f23645" stroke-width="1" />
      <rect x="146" y="90" width="8" height="30" fill="#f23645" />
      
      <!-- Test 2 -->
      <line x1="300" y1="85" x2="300" y2="110" stroke="#f23645" stroke-width="1" />
      <rect x="296" y="90" width="8" height="15" fill="#f23645" />

      <!-- Breakout -->
      <line x1="500" y1="50" x2="500" y2="90" stroke="#089981" stroke-width="1" />
      <rect x="496" y="60" width="8" height="30" fill="#089981" />
      
      <!-- Retest -->
      <line x1="580" y1="85" x2="580" y2="120" stroke="#089981" stroke-width="1" />
      <rect x="576" y="90" width="8" height="20" fill="white" stroke="#089981" />

      <!-- Continuation -->
      <line x1="680" y1="30" x2="680" y2="70" stroke="#089981" stroke-width="1" />
      <rect x="676" y="40" width="8" height="30" fill="#089981" />

      <!-- Annotations -->
      <text x="10" y="75" fill="#2962ff" font-size="9" font-weight="900" class="uppercase tracking-widest">Resistance Zone</text>
      <path d="M 505 55 L 530 35" fill="none" stroke="#089981" stroke-width="1" />
      <text x="535" y="35" fill="#089981" font-size="9" font-weight="900">BREAKOUT</text>
      
      <path d="M 585 105 L 610 130" fill="none" stroke="#2962ff" stroke-width="1" />
      <text x="615" y="135" fill="#2962ff" font-size="9" font-weight="900">RETEST AS SUPPORT</text>
      
      <text x="685" y="55" fill="#089981" font-size="9" font-weight="900">ACCEPTANCE</text>
    </svg>
  </div>
  <div class="bg-gray-50 border-t border-[#e0e3eb] px-4 py-2">
    <p class="text-[9px] font-black uppercase tracking-[0.2em] text-[#787b86]">Role Reversal Principle: Resistance → Support Transition</p>
  </div>
</div>

<!-- Visual: Role Reversal (Support to Resistance) -->
<div class="my-8 rounded-xl border border-[#e0e3eb] bg-white overflow-hidden shadow-2xl font-sans">
  <!-- Chart Header -->
  <div class="bg-[#f8f9fb] border-b border-[#e0e3eb] px-4 py-2 flex items-center justify-between">
    <div class="flex items-center gap-3">
        <span class="text-[12px] font-bold text-[#131722]">TESLA INC</span>
        <span class="px-1.5 py-0.5 bg-[#e0e3eb] text-[#787b86] text-[9px] font-bold rounded uppercase">Daily</span>
    </div>
    <div class="flex gap-4">
        <span class="text-[10px] text-[#787b86]">VOL <span class="text-[#f23645]">12.4M</span></span>
        <span class="text-[10px] text-[#f23645] font-bold">Distribution Breakdown Confirmed</span>
    </div>
  </div>

  <div class="w-full aspect-[2.5/1] relative bg-white overflow-hidden">
    <svg viewBox="0 0 800 240" class="w-full h-full">
      <!-- Grid -->
      <g stroke="#f0f3fa" stroke-width="1">
        <line x1="0" y1="60" x2="740" y2="60" />
        <line x1="0" y1="110" x2="740" y2="110" />
        <line x1="0" y1="160" x2="740" y2="160" />
        <line x1="0" y1="210" x2="740" y2="210" />
      </g>

      <!-- Support Zone -->
      <rect x="0" y="110" width="740" height="25" fill="#f23645" fill-opacity="0.08" />
      <line x1="0" y1="110" x2="740" y2="110" stroke="#f23645" stroke-width="1" stroke-dasharray="4,4" opacity="0.4" />
      <line x1="0" y1="135" x2="740" y2="135" stroke="#f23645" stroke-width="1" stroke-dasharray="4,4" opacity="0.4" />
      
      <!-- Right Axis -->
      <line x1="740" y1="0" x2="740" y2="240" stroke="#d1d4dc" stroke-width="1" />
      <text x="745" y="65" fill="#787b86" font-size="8" font-family="monospace">240.00</text>
      <text x="745" y="115" fill="#787b86" font-size="8" font-family="monospace">220.00</text>
      <text x="745" y="165" fill="#787b86" font-size="8" font-family="monospace">200.00</text>

      <!-- Candlesticks -->
      <!-- Support Hold -->
      <line x1="150" y1="110" x2="150" y2="150" stroke="#089981" stroke-width="1" />
      <rect x="146" y="115" width="8" height="20" fill="white" stroke="#089981" />
      
      <!-- Breakdown -->
      <line x1="450" y1="130" x2="450" y2="180" stroke="#f23645" stroke-width="1" />
      <rect x="446" y="140" width="8" height="30" fill="#f23645" />

      <!-- Retest -->
      <line x1="550" y1="115" x2="550" y2="150" stroke="#f23645" stroke-width="1" />
      <rect x="546" y="115" width="8" height="20" fill="#f23645" />

      <!-- Annotations -->
      <text x="10" y="105" fill="#f23645" font-size="9" font-weight="900" class="uppercase tracking-widest">Support Zone</text>
      <text x="460" y="170" fill="#f23645" font-size="9" font-weight="900">BREAKDOWN</text>
      <text x="560" y="110" fill="#2962ff" font-size="9" font-weight="900">RETEST AS RESISTANCE</text>
    </svg>
  </div>
  <div class="bg-gray-50 border-t border-[#e0e3eb] px-4 py-2 text-center">
    <p class="text-[9px] font-black uppercase tracking-[0.2em] text-[#787b86]">Structural Role Reversal: Support → Resistance Failure</p>
  </div>
</div>
</div>`
  },
  {
    id: 'trend-lines-channels',
    title: 'Trend Lines, Channels, and Break Geometry',
    content: `<div class="text-justify space-y-4">
<p><strong>Concept definition (classical):</strong> A trend line is a geometric expression of swing structure: it connects rising reaction lows in an uptrend or falling reaction highs in a downtrend to define the boundary where control has repeatedly asserted itself. A channel pairs that line with a parallel boundary to capture the opposing extremes. The objective is to define where the market has historically “respected” a boundary and to create a consistent way to describe breaks and tests.</p>

<p><strong>Structural logic (cause/effect):</strong> Trend lines and channels matter because they express rate and containment. In an uptrend, pullbacks that repeatedly stop near a rising trend line indicate that buyers defend progressively higher prices at a consistent rate. In a downtrend, rallies that repeatedly fail near a falling trend line indicate persistent supply at a consistent rate. Channels add a second layer: they show whether the trend’s progress remains proportional. When price begins to “ride” the channel boundary without expanding progress, the market may be approaching a transition. When volatility expands and price stops respecting the channel, the environment may have changed; that does not “invalidate” the method, it requires re-anchoring to the new swing structure.</p>

<p><strong>Confirmation criteria (what must be observed):</strong> A trend line gains credibility when it aligns with meaningful swing points and is respected multiple times without decisive acceptance beyond it. Breaks are treated as meaningful only when they meet acceptance standards: close-based penetration beyond the line, followed by continued acceptance or by a failed attempt to reclaim the prior side. Many markets will “probe” a trend line with wicks; the structural question is whether those probes achieve acceptance. Without acceptance and follow-through, a line break is not a conclusion; Structural conditions remain inconclusive.</p>

<p><strong>Failure / invalidation conditions:</strong> A trend line claim fails when price achieves sustained acceptance beyond the boundary and then behaves consistently on the new side (for example, a formerly supportive uptrend line becomes overhead resistance on a retest). Conversely, a claimed break can fail if price quickly re-accepts back into the prior channel and resumes respecting the old boundary. When channels are repeatedly violated on both sides and no longer contain price, the analyst must stop forcing the channel and instead re-anchor to the next higher-order structure (range boundaries, swing pivots, or a newly forming channel).</p>

<p><strong>Common misreads:</strong> The most common error is anchoring lines to convenient points rather than to significant swings. Another is labeling any intraday poke as a break. A third is assuming that a line must remain relevant even as the market transitions to a new volatility regime; stubbornness produces overfitting. Finally, drawing many lines until something “fits” defeats the purpose of structural discipline.</p>

<!-- Visual: Trend Line and Channel Geometry (Professional Chart) -->
<div class="my-8 rounded-xl border border-[#e0e3eb] bg-white overflow-hidden shadow-2xl font-sans">
  <!-- Chart Header -->
  <div class="bg-[#f8f9fb] border-b border-[#e0e3eb] px-4 py-2 flex items-center justify-between">
    <div class="flex items-center gap-3">
        <span class="text-[12px] font-bold text-[#131722]">NASDAQ 100</span>
        <span class="px-1.5 py-0.5 bg-[#e0e3eb] text-[#787b86] text-[9px] font-bold rounded uppercase">Weekly</span>
    </div>
    <div class="flex gap-4 items-center">
        <span class="text-[9px] text-[#2962ff] font-black uppercase tracking-tighter border border-[#2962ff]/20 px-2 py-0.5 rounded">Channel Validity High</span>
        <span class="text-[10px] text-[#787b86] font-bold">Trend Boundary Breakdown Geometry</span>
    </div>
  </div>

  <div class="w-full aspect-[2.5/1] relative bg-white overflow-hidden">
    <svg viewBox="0 0 800 240" class="w-full h-full">
      <!-- Watermark -->
      <text x="400" y="120" text-anchor="middle" fill="#f8f9fb" font-size="40" font-weight="900" transform="rotate(-15 400 120)" pointer-events="none">SIERRA ANALYSIS</text>
      
      <!-- Grid -->
      <g stroke="#f0f3fa" stroke-width="1">
        <line x1="0" y1="40" x2="740" y2="40" />
        <line x1="0" y1="90" x2="740" y2="90" />
        <line x1="0" y1="140" x2="740" y2="140" />
        <line x1="0" y1="190" x2="740" y2="190" />
        <line x1="200" y1="0" x2="200" y2="240" />
        <line x1="400" y1="0" x2="400" y2="240" />
        <line x1="600" y1="0" x2="600" y2="240" />
      </g>

      <!-- Trend Line (Defining Boundary) -->
      <line x1="50" y1="220" x2="650" y2="70" stroke="#2962ff" stroke-width="1.5" stroke-dasharray="4,4" />
      <!-- Channel Top Line (Opposing Extreme) -->
      <line x1="150" y1="120" x2="750" y2="-30" stroke="#787b86" stroke-width="1" stroke-dasharray="2,2" opacity="0.6" />
      
      <!-- Right Axis -->
      <line x1="740" y1="0" x2="740" y2="240" stroke="#d1d4dc" stroke-width="1" />
      <text x="745" y="45" fill="#787b86" font-size="8" font-family="monospace">16,200</text>
      <text x="745" y="95" fill="#787b86" font-size="8" font-family="monospace">15,800</text>
      <text x="745" y="145" fill="#787b86" font-size="8" font-family="monospace">15,400</text>
      <text x="745" y="195" fill="#787b86" font-size="8" font-family="monospace">15,000</text>

      <!-- Candlesticks Structure -->
      <!-- Test 1 -->
      <line x1="250" y1="170" x2="250" y2="200" stroke="#089981" stroke-width="1" />
      <rect x="246" y="175" width="8" height="15" fill="white" stroke="#089981" />
      
      <!-- Test 2 -->
      <line x1="450" y1="110" x2="450" y2="150" stroke="#089981" stroke-width="1" />
      <rect x="446" y="115" width="8" height="20" fill="white" stroke="#089981" />

      <!-- Decisive Break -->
      <line x1="650" y1="60" x2="650" y2="110" stroke="#f23645" stroke-width="1" />
      <rect x="646" y="70" width="8" height="30" fill="#f23645" />
      
      <!-- Retest Failure -->
      <line x1="700" y1="80" x2="700" y2="110" stroke="#f23645" stroke-width="1" />
      <rect x="696" y="85" width="8" height="15" fill="white" stroke="#f23645" />

      <!-- Annotations -->
      <text x="255" y="215" fill="#2962ff" font-size="8" font-weight="900" font-family="monospace">BOUNDARY DEFENSE</text>
      <text x="455" y="160" fill="#2962ff" font-size="8" font-weight="900" font-family="monospace">BOUNDARY DEFENSE</text>
      
      <rect x="620" y="45" width="60" height="15" rx="2" fill="#f23645" fill-opacity="0.1" stroke="#f23645" stroke-width="0.5" />
      <text x="650" y="55" text-anchor="middle" fill="#f23645" font-size="7" font-weight="900">BREAKDOWN</text>
      
      <text x="705" y="120" fill="#787b86" font-size="7" font-weight="900">RETEST AS RESISTANCE</text>
      <path d="M 700 112 L 720 130" fill="none" stroke="#d1d4dc" stroke-width="0.5" />
    </svg>
  </div>
  <div class="bg-gray-50 border-t border-[#e0e3eb] px-4 py-2 text-center text-[8px] font-bold text-[#787b86] uppercase tracking-[0.3em]">
    Structural Validity through Repeated Tangency and Acceptance
  </div>
</div>
</div>`
  },
  {
    id: 'trading-ranges',
    title: 'Trading Ranges and Breakouts',
    content: `<div class="text-justify space-y-4">
<p><strong>Concept definition (classical):</strong> A trading range is a prolonged period where price is contained between a lower support zone and an upper resistance zone. The range is a state of relative balance: neither side can achieve sustained acceptance beyond the boundary. A breakout is the structural event where price achieves decisive acceptance outside that containment, potentially initiating a trend or a new range at a different level.</p>

<p><strong>Structural logic (cause/effect):</strong> Ranges matter because they define where the market repeatedly clears transactions without directional progress. They accumulate “memory” and inventory. The longer and more clearly defined the range, the more informative the eventual resolution can be, because repeated failures at boundaries imply that overcoming those boundaries requires meaningful imbalance. Breakouts are important because they indicate that one side has, at least temporarily, overwhelmed the other. However, classical analysis treats the first move outside the range as a hypothesis until acceptance is demonstrated.</p>

<p><strong>Confirmation criteria (what must be observed):</strong> A breakout is confirmed when the market achieves a decisive close beyond the range boundary and then demonstrates acceptance outside the old range. Acceptance can be shown through follow-through (additional closes outside) or through a retest that holds on the breakout side (role reversal). Without those elements, a move outside the boundary may be only a probe. In that case, the correct statement is: Structural conditions remain inconclusive. The missing confirmation is acceptance, not excitement.</p>

<p><strong>Failure / invalidation conditions:</strong> False breakouts are diagnosed structurally: price breaks beyond the boundary but cannot hold, returns into the prior range, and then accepts back within it. A second failure mode occurs when price breaks out but immediately stalls and compresses without establishing new swing structure; this often evolves into a larger range. Invalidation mapping is straightforward: the breakout thesis is invalidated when the market re-accepts back inside the range and cannot reclaim the breakout side.</p>

<p><strong>Common misreads:</strong> Common misreads include treating the first boundary touch as predictive, expecting every range to resolve into a sustained trend, and labeling breakouts based on wicks rather than closes and acceptance. Another misread is ignoring range widening, where volatility expansion causes boundaries to shift; in such cases, the “old range” may no longer be the correct structure.</p>

<!-- Visual: Range Breakout Geometry (Professional Comparison) -->
<div class="my-8 rounded-xl border border-[#e0e3eb] bg-white overflow-hidden shadow-2xl font-sans">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-0 w-full font-sans">
    <!-- Successful Breakout -->
    <div class="flex flex-col border-r border-[#e0e3eb]">
      <div class="bg-[#f8f9fb] px-4 py-1.5 border-b border-[#e0e3eb] flex justify-between items-center">
        <span class="text-[10px] font-black text-[#131722] uppercase tracking-tighter">Case A: Verified Expansion</span>
        <span class="text-[9px] text-[#089981] font-bold">Acceptance Confirmed</span>
      </div>
      <div class="w-full aspect-[4/3] md:aspect-[1.5/1] relative p-0 overflow-hidden">
        <svg viewBox="0 0 400 240" class="w-full h-full">
           <g stroke="#f0f3fa" stroke-width="1">
             <line x1="0" y1="40" x2="400" y2="40" />
             <line x1="0" y1="100" x2="400" y2="100" />
             <line x1="0" y1="160" x2="400" y2="160" />
             <line x1="0" y1="220" x2="400" y2="220" />
           </g>
           
           <rect x="50" y="80" width="250" height="80" fill="#2962ff" fill-opacity="0.04" stroke="#2962ff" stroke-width="1" stroke-dasharray="3,3" opacity="0.3" />
           
           <!-- Candles in Range -->
           <line x1="100" y1="90" x2="100" y2="120" stroke="#f23645" stroke-width="1" />
           <rect x="97" y="100" width="6" height="15" fill="#f23645" />

           <line x1="200" y1="110" x2="200" y2="150" stroke="#089981" stroke-width="1" />
           <rect x="197" y="120" width="6" height="20" fill="#089981" />

           <!-- Breakout -->
           <line x1="320" y1="40" x2="320" y2="90" stroke="#089981" stroke-width="2" />
           <rect x="316" y="50" width="8" height="30" fill="#089981" />
           
           <!-- Acceptance -->
           <rect x="345" y="42" width="45" height="14" rx="2" fill="#089981" />
           <text x="367.5" y="52" text-anchor="middle" fill="white" font-size="7" font-weight="900" font-family="monospace">EXPANSION</text>
        </svg>
      </div>
    </div>
    
    <!-- Failed Breakout -->
    <div class="flex flex-col">
      <div class="bg-[#f8f9fb] px-4 py-1.5 border-b border-[#e0e3eb] flex justify-between items-center">
        <span class="text-[10px] font-black text-[#131722] uppercase tracking-tighter">Case B: Trap Mechanism</span>
        <span class="text-[9px] text-[#f23645] font-bold">Failure Confirmed</span>
      </div>
      <div class="w-full aspect-[4/3] md:aspect-[1.5/1] relative p-0 overflow-hidden">
        <svg viewBox="0 0 400 240" class="w-full h-full">
           <g stroke="#f0f3fa" stroke-width="1">
             <line x1="0" y1="40" x2="400" y2="40" />
             <line x1="0" y1="100" x2="400" y2="100" />
             <line x1="0" y1="160" x2="400" y2="160" />
             <line x1="0" y1="220" x2="400" y2="220" />
           </g>
           
           <rect x="50" y="80" width="250" height="80" fill="#f23645" fill-opacity="0.04" stroke="#f23645" stroke-width="1" stroke-dasharray="3,3" opacity="0.3" />
           
           <!-- Probe -->
           <line x1="320" y1="40" x2="320" y2="100" stroke="#f23645" stroke-width="1" />
           <rect x="316" y="60" width="8" height="20" fill="white" stroke="#f23645" />

           <!-- Failure -->
           <line x1="360" y1="100" x2="360" y2="160" stroke="#f23645" stroke-width="2" />
           <rect x="356" y="110" width="8" height="40" fill="#f23645" />

           <rect x="330" y="42" width="45" height="14" rx="2" fill="#f23645" />
           <text x="352.5" y="52" text-anchor="middle" fill="white" font-size="7" font-weight="900" font-family="monospace">FAILURE</text>
        </svg>
      </div>
    </div>
  </div>
  <div class="bg-[#f1f3f6] px-4 py-2 border-t border-[#e0e3eb] text-center">
    <p class="text-[9px] font-black uppercase tracking-[0.2em] text-[#787b86]">Range Mechanics: Strategic Context of Boundary Resolution</p>
  </div>
</div>
</div>`
  },
  {
    id: 'candlestick-structure',
    title: 'Candlestick Structure as Auction Evidence',
    content: `<div class="text-justify space-y-4">
<p><strong>Concept definition (classical):</strong> Candlesticks describe the open, high, low, and close of a period. In a classical structural curriculum, candlesticks are treated as auction evidence rather than standalone “signals.” Their value comes from what they reveal about range expansion or contraction, close location (where the market agreed to end the period), overlap or displacement, and how these features behave at key structural levels.</p>

<p><strong>Structural logic (cause/effect):</strong> A wide-range bar indicates that the market explored more price territory in that period, which can occur during breakouts, climaxes, or transitions. Close location matters because it reveals whether the market accepted prices near the highs (demand dominance) or near the lows (supply dominance). Overlap across consecutive bars indicates balance and two-sided trade; displacement with minimal overlap indicates imbalance. None of these properties “predict” on their own; they increase or decrease the plausibility of a structural claim only when they occur at meaningful boundaries.</p>

<p><strong>Confirmation criteria (what must be observed):</strong> Candlestick evidence is structurally confirmatory when it participates in boundary interaction. For example, a wide-range rejection bar at resistance becomes meaningful only if the next swings confirm rejection (failure to accept above resistance and subsequent decline). Likewise, a wide-range breakout bar is meaningful only if acceptance persists outside the boundary. If a dramatic candlestick occurs mid-range with no level interaction and no follow-through, it should be treated as low-information noise. In those conditions, Structural conditions remain inconclusive because the missing requirement is follow-through that changes swing structure or boundary acceptance.</p>

<p><strong>Failure / invalidation conditions:</strong> Candlestick-based inferences fail when the market immediately negates them. If a “rejection” bar is followed by acceptance through the level it supposedly rejected, the bar is reclassified as a failed attempt. If a “breakout” bar is followed by immediate range re-entry, it is treated as a false breakout regardless of how impressive the bar appears. The invalidation is always structural: acceptance on the wrong side.</p>

<p><strong>Common misreads:</strong> The primary misread is isolating a candle from context. Another is treating long wicks as automatic reversal proof, ignoring that wicks can represent routine probing in volatile environments. A third is over-reading intrabar emotion: classical analysis privileges closes and acceptance. Finally, many misreads come from ignoring trend hierarchy; a reversal-looking bar on a minor horizon may be irrelevant to the primary structure.</p>

<!-- Visual: Candlestick Auction Evidence (Professional Structure) -->
<div class="my-8 rounded-xl border border-[#e0e3eb] bg-white overflow-hidden shadow-2xl font-sans">
  <div class="bg-[#f8f9fb] border-b border-[#e0e3eb] px-4 py-2 flex items-center justify-between">
    <div class="flex items-center gap-3">
        <span class="text-[12px] font-bold text-[#131722]">MICROSOFT CORP</span>
        <span class="px-1.5 py-0.5 bg-[#e0e3eb] text-[#787b86] text-[9px] font-bold rounded uppercase tracking-tighter">Day</span>
    </div>
    <div class="flex gap-4">
        <span class="text-[10px] text-[#2962ff] font-bold">Auction Logic Interface</span>
    </div>
  </div>

  <div class="w-full aspect-[2.5/1] relative bg-white overflow-hidden">
    <svg viewBox="0 0 800 240" class="w-full h-full">
      <!-- Grid -->
      <g stroke="#f0f3fa" stroke-width="0.5">
        <line x1="0" y1="40" x2="740" y2="40" />
        <line x1="0" y1="120" x2="740" y2="120" />
        <line x1="0" y1="200" x2="740" y2="200" />
        <line x1="380" y1="0" x2="380" y2="240" stroke-width="1.5" stroke="#e0e3eb" stroke-dasharray="4,2" />
      </g>

      <!-- Label Sectors -->
      <text x="180" y="30" text-anchor="middle" fill="#787b86" font-size="9" font-weight="900" class="uppercase">Consolidation Pane</text>
      <text x="560" y="30" text-anchor="middle" fill="#089981" font-size="9" font-weight="900" class="uppercase">Displacement Pane</text>
      
      <!-- Balance Group -->
      <g opacity="0.6">
        <line x1="100" y1="100" x2="100" y2="140" stroke="#787b86" stroke-width="1" />
        <rect x="97" y="110" width="6" height="15" fill="white" stroke="#787b86" />
        <line x1="130" y1="110" x2="130" y2="150" stroke="#787b86" stroke-width="1" />
        <rect x="127" y="120" width="6" height="20" fill="#787b86" />
        <line x1="160" y1="105" x2="160" y2="135" stroke="#787b86" stroke-width="1" />
        <rect x="157" y="115" width="6" height="10" fill="white" stroke="#787b86" />
        <line x1="190" y1="115" x2="190" y2="155" stroke="#787b86" stroke-width="1" />
        <rect x="187" y="125" width="6" height="20" fill="#787b86" />
      </g>

      <!-- Impulsive Group -->
      <g>
        <line x1="420" y1="120" x2="420" y2="70" stroke="#089981" stroke-width="2" />
        <rect x="415" y="80" width="10" height="35" fill="#089981" />
        
        <line x1="460" y1="80" x2="460" y2="30" stroke="#089981" stroke-width="2" />
        <rect x="455" y="40" width="10" height="35" fill="#089981" />
        
        <line x1="500" y1="40" x2="500" y2="-10" stroke="#089981" stroke-width="2" />
        <rect x="495" y="0" width="10" height="35" fill="#089981" />
      </g>

      <!-- Structural Change Marker -->
      <path d="M 380 120 L 405 85" fill="none" stroke="#2962ff" stroke-width="2" stroke-linecap="round" />
      <circle cx="380" cy="120" r="4" fill="#2962ff" />
      <text x="390" y="140" fill="#2962ff" font-size="8" font-weight="900" font-family="monospace">VOLATILITY EXPANSION</text>
    </svg>
  </div>
  <div class="bg-gray-50 border-t border-[#e0e3eb] px-4 py-2 flex justify-between">
    <p class="text-[8px] font-black uppercase tracking-[0.2em] text-[#787b86]">Evidence Hierarchy: Balance (Quiet) vs Displacement (Loud)</p>
    <p class="text-[8px] font-black text-[#787b86]">SIERRA TERMINAL v4.2</p>
  </div>
</div>
</div>`
  },
  {
    id: 'reversal-hs',
    title: 'Head & Shoulders',
    content: `<div class="text-justify space-y-4">
<p><strong>Concept definition (classical):</strong> The Head & Shoulders formation is a classical reversal structure that typically appears after an advance. It comprises a left shoulder peak, a higher head peak, and a right shoulder peak that fails to exceed the head. A neckline is drawn through the reaction lows between these peaks. The structure is not considered reversed until the neckline is decisively broken and the market demonstrates acceptance below it.</p>

<p><strong>Structural logic (cause/effect):</strong> The structure describes waning upside effectiveness. The head represents the last successful push to a new extreme. The right shoulder, by failing to reach a new high, shows that demand is no longer able to press through prior supply. The neckline represents the level where prior reactions were contained. When the neckline breaks with acceptance, it indicates that sellers have achieved control through a previously defended zone, converting what was “normal reaction” into structural damage.</p>

<p><strong>Confirmation criteria (what must be observed):</strong> Confirmation begins with context: there must be a meaningful prior uptrend; otherwise, the shape may be a range rather than a reversal. The neckline should be treated as a zone, not an exact line, since reaction lows usually cluster. The trigger is a decisive close below the neckline followed by acceptance—either follow-through or a retest that fails to reclaim the neckline. If the neckline is not broken, the correct statement is: Structural conditions remain inconclusive. The missing confirmation is the trigger itself. Visual similarity is not confirmation.</p>

<p><strong>Failure / invalidation conditions:</strong> A candidate Head & Shoulders fails if the neckline break cannot hold and price re-accepts above the neckline. It also fails if the right shoulder evolves into a new high, deforming the structure into continuation. Another failure mode is a neckline break that produces minimal progress and then compresses back into a range; this indicates the break did not create durable dominance and must be treated cautiously.</p>

<p><strong>Common misreads:</strong> The most common misread is labeling any three peaks as Head & Shoulders without confirming prior trend context. Another is using wick penetration as “break” without close-based acceptance rules. A third is ignoring the retest; many structural failures occur when the market retests the neckline from below and reclaims it. Finally, misreads often come from drawing the neckline too precisely; the classical approach prioritizes zones and acceptance.</p>

<!-- Visual: Head & Shoulders Reversal (Technical Blueprint) -->
<div class="my-8 rounded-xl border border-[#e0e3eb] bg-white overflow-hidden shadow-2xl font-sans">
  <div class="bg-[#f8f9fb] border-b border-[#e0e3eb] px-4 py-2 flex items-center justify-between font-mono">
    <div class="flex items-center gap-3">
        <span class="text-[12px] font-black text-[#131722]">EURUSD</span>
        <span class="px-1.5 py-0.5 bg-[#e0e3eb] text-[#787b86] text-[9px] font-bold rounded uppercase">Weekly</span>
    </div>
    <div class="flex gap-4">
        <span class="text-[10px] text-[#787b86]">MA 200 <span class="text-[#2962ff]">1.0845</span></span>
        <span class="text-[10px] text-[#f23645] font-bold uppercase tracking-tight">Regime Change Logic</span>
    </div>
  </div>

  <div class="w-full aspect-[21/9] md:aspect-[3/1] relative bg-white overflow-hidden">
    <svg viewBox="0 0 800 240" class="w-full h-full">
      <g stroke="#f0f3fa" stroke-width="1">
        <line x1="0" y1="40" x2="800" y2="40" />
        <line x1="0" y1="100" x2="800" y2="100" />
        <line x1="0" y1="160" x2="800" y2="160" />
        <line x1="0" y1="220" x2="800" y2="220" />
      </g>

      <!-- Neckline Zone -->
      <rect x="0" y="160" width="800" height="20" fill="#f23645" fill-opacity="0.05" />
      <line x1="0" y1="170" x2="800" y2="170" stroke="#f23645" stroke-width="1" stroke-dasharray="4,4" opacity="0.4" />
      
      <!-- H&S Structure -->
      <!-- Left Shoulder -->
      <g>
        <line x1="150" y1="100" x2="150" y2="150" stroke="#089981" stroke-width="1" />
        <rect x="146" y="110" width="8" height="30" fill="white" stroke="#089981" />
        <text x="150" y="90" text-anchor="middle" fill="#787b86" font-size="8" font-weight="900">LEFT SHOULDER</text>
      </g>

      <!-- Head -->
      <g>
        <line x1="350" y1="40" x2="350" y2="100" stroke="#089981" stroke-width="1.5" />
        <rect x="345" y="50" width="10" height="40" fill="white" stroke="#089981" />
        <text x="350" y="30" text-anchor="middle" fill="#131722" font-size="10" font-weight="900">HEAD</text>
      </g>

      <!-- Right Shoulder (Lower Peak) -->
      <g>
        <line x1="550" y1="110" x2="550" y2="170" stroke="#f23645" stroke-width="1" />
        <rect x="546" y="120" width="8" height="30" fill="#f23645" />
        <text x="550" y="100" text-anchor="middle" fill="#f23645" font-size="8" font-weight="900">RIGHT SHOULDER</text>
      </g>

      <!-- Breakdown -->
      <g>
        <line x1="650" y1="170" x2="650" y2="230" stroke="#f23645" stroke-width="2" />
        <rect x="645" y="180" width="10" height="40" fill="#f23645" />
        <path d="M 640 170 L 620 150" fill="none" stroke="#f23645" stroke-width="1.5" />
        <text x="615" y="145" text-anchor="end" fill="#f23645" font-size="9" font-weight="900">NECKLINE BREAK</text>
      </g>

    </svg>
  </div>
  <div class="bg-[#f1f3f6] px-4 py-2 border-t border-[#e0e3eb] flex justify-between">
    <p class="text-[9px] font-black uppercase tracking-[0.2em] text-[#787b86]">Standard Structural Reversal Protocol</p>
    <p class="text-[9px] font-black text-[#2962ff] italic font-serif">Sierra Precision Charts</p>
  </div>
</div>
      <text x="130" y="140" fill="#64748b" font-size="9" font-weight="bold">Left Shoulder</text>
      <text x="380" y="70" fill="#64748b" font-size="9" font-weight="bold">Head (Extreme)</text>
      <text x="630" y="150" fill="#e11d48" font-size="9" font-weight="bold">Right Shoulder (Lower High)</text>
      <text x="10" y="200" fill="#e11d48" font-size="9" font-weight="bold" class="uppercase tracking-widest">Neckline Zone</text>
      
      <text x="710" y="270" fill="#059669" font-size="9" font-weight="bold">Confirmation (Close Below)</text>
      <text x="630" y="230" fill="#2563eb" font-size="9" font-weight="bold">Retest Failure</text>
      
      <!-- Markers -->
      <circle cx="150" cy="150" r="3" fill="#94a3b8" />
      <circle cx="400" cy="80" r="3" fill="#94a3b8" />
      <circle cx="650" cy="160" r="3" fill="#f43f5e" />
      <circle cx="750" cy="250" r="3" fill="#10b981" />
      <circle cx="700" cy="210" r="3" fill="#3b82f6" />
    </svg>
  </div>
  <p class="mt-4 text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold">Head & Shoulders: Structural Invalidation</p>
</div>
</div>`
  },
  {
    id: 'reversal-double',
    title: 'Double Tops/Bottoms',
    content: `<div class="text-justify space-y-4">
<p><strong>Concept definition (classical):</strong> A Double Top is a classical reversal formation after an advance where the market tests a similar high zone twice and fails, and then confirms reversal by breaking the intervening reaction low (the “valley”). A Double Bottom is the mirror image after a decline, confirmed by breaking the intervening reaction high.</p>

<p><strong>Structural logic (cause/effect):</strong> The structural logic is repeated rejection. The first test establishes a supply zone; the intervening decline establishes where demand previously regained control. The second test demonstrates whether demand can overcome the established supply. When the market breaks the intervening swing (valley low for a double top), it signals that the prior demand defense is no longer effective—an explicit transition from “two failures at the high” to “damage at the swing that matters.”</p>

<p><strong>Confirmation criteria (what must be observed):</strong> Context is mandatory: a double top is a reversal only if it follows an uptrend; within a range, similar highs may be routine. The two tests need not match perfectly; the classical approach treats them as zones. The decisive element is the intervening swing: confirmation is a decisive close beyond that intervening level with acceptance. If the intervening swing is not broken, Structural conditions remain inconclusive regardless of visual symmetry.</p>

<p><strong>Failure / invalidation conditions:</strong> A confirmed break can fail if price immediately reclaims the intervening level and accepts back above it; this reclassifies the break as false. The formation also fails if the second top becomes a continuation move to new highs. In both cases, the invalidation is structural: acceptance on the wrong side of the intervening boundary.</p>

<p><strong>Common misreads:</strong> Misreads include labeling two nearby peaks separated by minimal reaction as a double top, forcing “perfect” symmetry expectations, and ignoring that double formations require a meaningful intervening swing to define the trigger. Another misread is calling confirmation on intrabar penetration without close-based acceptance rules.</p>

<!-- Visual: Double Top Reversal (Professional Structure) -->
<div class="my-8 rounded-xl border border-[#e0e3eb] bg-white overflow-hidden shadow-2xl font-sans">
  <div class="bg-[#f8f9fb] border-b border-[#e0e3eb] px-4 py-2 flex items-center justify-between">
    <div class="flex items-center gap-3">
        <span class="text-[12px] font-bold text-[#131722]">NVIDIA CORP</span>
        <span class="px-1.5 py-0.5 bg-[#e0e3eb] text-[#787b86] text-[9px] font-bold rounded uppercase">Daily</span>
    </div>
    <div class="flex gap-4">
        <span class="text-[10px] text-[#2962ff] font-bold tracking-tight uppercase">High-Volume Rejection Trace</span>
    </div>
  </div>

  <div class="w-full aspect-[21/9] md:aspect-[3/1] relative bg-white overflow-hidden">
    <svg viewBox="0 0 800 240" class="w-full h-full">
      <g stroke="#f0f3fa" stroke-width="1">
        <line x1="0" y1="50" x2="800" y2="50" />
        <line x1="0" y1="110" x2="800" y2="110" />
        <line x1="0" y1="170" x2="800" y2="170" />
      </g>

      <!-- Resistance Zone -->
      <rect x="0" y="45" width="800" height="20" fill="#2962ff" fill-opacity="0.05" />
      <line x1="0" y1="55" x2="800" y2="55" stroke="#2962ff" stroke-width="1" stroke-dasharray="4,4" opacity="0.3" />
      
      <!-- Valley Boundary -->
      <line x1="300" y1="170" x2="800" y2="170" stroke="#f23645" stroke-width="1" stroke-dasharray="3,3" />

      <!-- Double Top Sequence -->
      <!-- Test 1 -->
      <g>
        <line x1="200" y1="50" x2="200" y2="100" stroke="#089981" stroke-width="1" />
        <rect x="196" y="55" width="8" height="20" fill="white" stroke="#089981" />
        <text x="200" y="40" text-anchor="middle" fill="#787b86" font-size="8" font-weight="900">TEST 1</text>
      </g>

      <!-- Valley -->
      <g>
        <line x1="350" y1="150" x2="350" y2="190" stroke="#f23645" stroke-width="1" />
        <rect x="346" y="160" width="8" height="20" fill="#f23645" />
        <text x="350" y="210" text-anchor="middle" fill="#131722" font-size="8" font-weight="900">VALLEY LOW</text>
      </g>

      <!-- Test 2 -->
      <g>
        <line x1="500" y1="60" x2="500" y2="110" stroke="#089981" stroke-width="1" />
        <rect x="496" y="65" width="8" height="25" fill="white" stroke="#089981" />
        <text x="500" y="50" text-anchor="middle" fill="#787b86" font-size="8" font-weight="900">TEST 2 (LOWER)</text>
      </g>

      <!-- Breakdown -->
      <g>
        <line x1="600" y1="170" x2="600" y2="230" stroke="#f23645" stroke-width="2" />
        <rect x="595" y="180" width="10" height="40" fill="#f23645" />
        <text x="615" y="165" fill="#f23645" font-size="9" font-weight="900">VALLEY BREAK</text>
      </g>
    </svg>
  </div>
  <div class="bg-gray-50 border-t border-[#e0e3eb] px-4 py-2 flex justify-between">
    <p class="text-[8px] font-black uppercase tracking-[0.2em] text-[#787b86]">Structural Failure Sequence: Double Tap Reject</p>
    <p class="text-[8px] font-black text-[#2962ff]">SIERRA TERMINAL v4.2</p>
  </div>
</div>
</div>`
  },
  {
    id: 'reversal-rounding-spike',
    title: 'Rounding, Saucers, Spikes',
    content: `<div class="text-justify space-y-4">
<p><strong>Concept definition (classical):</strong> Rounding formations (often called saucers) describe gradual transitions where downside effectiveness diminishes over time and upside responses become increasingly constructive, typically after a decline. Spikes describe abrupt extremes followed by sharp reversals, often associated with urgency and volatility. Both are best treated as transition candidates rather than automatic reversals, because their structural confirmation still requires a boundary break and acceptance.</p>

<p><strong>Structural logic (cause/effect):</strong> A rounding bottom reflects time-based transfer: supply continues to appear, but each new low becomes less effective, and the market increasingly holds support zones. This can be observed as decreasing downside follow-through and improving response to demand. A spike low reflects a different mechanism: the market explores dramatically lower prices, but that exploration is rejected sharply, often leaving a wide-range reversal. In both cases, the structural question is the same: does the market establish acceptance beyond a boundary that changes the classification from decline/range to a new trend regime?</p>

<p><strong>Confirmation criteria (what must be observed):</strong> For rounding structures, the confirmation typically requires a clearly defined resistance “cap” that has repeatedly limited rallies. A structural reversal is confirmed when price breaks above that cap with acceptance and, ideally, holds it on a retest (role reversal). For spikes, confirmation requires more than a dramatic bar: it requires subsequent swing structure improvement (for example, a higher low after the spike low and a break above a meaningful reaction high), and it requires that the market cannot easily revisit and accept below the spike extreme. If those follow-through conditions do not appear, Structural conditions remain inconclusive.</p>

<p><strong>Failure / invalidation conditions:</strong> Rounding formations fail when the cap break cannot hold and price re-accepts back into the base, revealing that the market was not ready to sustain a transition. Spike reversals fail when the market quickly exceeds the spike extreme in the original direction and accepts there, showing that the apparent reversal was only a pause or temporary dislocation.</p>

<p><strong>Common misreads:</strong> A frequent misread is labeling any gentle curvature as a saucer without a defined cap and without a breakout. Another is labeling any wide-range bar as a spike reversal without requiring swing confirmation. Many misreads come from impatience: transitions often take longer than expected, and until a cap/floor breaks with acceptance, the correct classification is still range or decline.</p>

<!-- Visual: Rounding Bottom vs Spike Reversal (Market Transitions) -->
<div class="my-8 rounded-xl border border-[#e0e3eb] bg-white overflow-hidden shadow-2xl font-sans">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-0 w-full">
    <!-- Rounding Bottom -->
    <div class="flex flex-col border-r border-[#e0e3eb]">
      <div class="bg-[#f8f9fb] px-4 py-1.5 border-b border-[#e0e3eb] flex justify-between items-center">
        <span class="text-[10px] font-black text-[#131722] uppercase tracking-tighter">Transition: Rounding Base</span>
        <span class="text-[9px] text-[#2962ff] font-bold">Time-Based Transfer</span>
      </div>
      <div class="w-full aspect-[1.5/1] relative p-0 overflow-hidden">
        <svg viewBox="0 0 400 240" class="w-full h-full">
           <g stroke="#f0f3fa" stroke-width="1">
             <line x1="0" y1="60" x2="400" y2="60" />
             <line x1="0" y1="120" x2="400" y2="120" />
             <line x1="0" y1="180" x2="400" y2="180" />
           </g>
           
           <line x1="0" y1="100" x2="400" y2="100" stroke="#2962ff" stroke-width="1" stroke-dasharray="3,3" opacity="0.4" />
           
           <!-- Curve Path Simulation using Candles -->
           <line x1="50" y1="110" x2="50" y2="150" stroke="#f23645" stroke-width="1" />
           <rect x="47" y="120" width="6" height="15" fill="#f23645" />

           <line x1="120" y1="150" x2="120" y2="190" stroke="#f23645" stroke-width="1" />
           <rect x="117" y="160" width="6" height="20" fill="#f23645" />

           <line x1="200" y1="170" x2="200" y2="210" stroke="#787b86" stroke-width="1" />
           <rect x="197" y="180" width="6" height="15" fill="white" stroke="#787b86" />

           <line x1="280" y1="140" x2="280" y2="180" stroke="#089981" stroke-width="1" />
           <rect x="277" y="150" width="6" height="15" fill="#089981" />

           <line x1="350" y1="80" x2="350" y2="120" stroke="#089981" stroke-width="2" />
           <rect x="346" y="90" width="8" height="25" fill="#089981" />
           
           <text x="5" y="95" fill="#2962ff" font-size="7" font-weight="900">RESISTANCE CAP</text>
           <text x="360" y="85" fill="#089981" font-size="8" font-weight="900">BREAK</text>
        </svg>
      </div>
    </div>
    
    <!-- Spike Reversal -->
    <div class="flex flex-col">
      <div class="bg-[#f8f9fb] px-4 py-1.5 border-b border-[#e0e3eb] flex justify-between items-center">
        <span class="text-[10px] font-black text-[#131722] uppercase tracking-tighter">Transition: Volatility Spike</span>
        <span class="text-[9px] text-[#f23645] font-bold">Panic-Induced Rejection</span>
      </div>
      <div class="w-full aspect-[1.5/1] relative p-0 overflow-hidden">
        <svg viewBox="0 0 400 240" class="w-full h-full">
           <g stroke="#f0f3fa" stroke-width="1">
             <line x1="0" y1="60" x2="400" y2="60" />
             <line x1="0" y1="120" x2="400" y2="120" />
             <line x1="0" y1="180" x2="400" y2="180" />
           </g>
           
           <line x1="150" y1="120" x2="150" y2="180" stroke="#f23645" stroke-width="1" />
           <rect x="147" y="140" width="6" height="30" fill="#f23645" />

           <!-- Spike Candle -->
           <line x1="200" y1="140" x2="200" y2="230" stroke="#f23645" stroke-width="2" />
           <rect x="196" y="200" width="8" height="15" fill="#089981" />
           <text x="210" y="225" fill="#f23645" font-size="8" font-weight="900">SPIKE REJECTION</text>

           <!-- Higher Low -->
           <line x1="280" y1="150" x2="280" y2="190" stroke="#089981" stroke-width="1" />
           <rect x="277" y="160" width="6" height="10" fill="white" stroke="#089981" />
           <text x="290" y="155" fill="#089981" font-size="8" font-weight="900">HL TEST</text>
        </svg>
      </div>
    </div>
  </div>
  <div class="bg-[#f1f3f6] px-4 py-2 border-t border-[#e0e3eb] text-center">
    <p class="text-[9px] font-black uppercase tracking-[0.2em] text-[#787b86]">Transition Morphology: Time vs. Price Urgency</p>
  </div>
</div>
</div>`
  },
  {
    id: 'continuation-patterns',
    title: 'Flags, Pennants, Wedges, Triangles',
    content: `<div class="text-justify space-y-4">
<p><strong>Concept definition (classical):</strong> Continuation formations are pauses within a trend that may resolve in the direction of the prior movement when confirmed. Flags are short countertrend channels; pennants are short converging consolidations; wedges are converging patterns with drift; triangles are contracting ranges. A key classical constraint applies to all of them: direction is conditional on the breakout and acceptance, not assumed by the name.</p>

<p><strong>Structural logic (cause/effect):</strong> A strong impulse move creates displacement—price relocates quickly, often leaving participants offside. Consolidations are the market’s method of digesting that displacement. In a healthy trend, the consolidation should not destroy the trend’s defining swing structure, and it should exhibit containment. A continuation is not “guaranteed”; it is the hypothesis that the trend remains dominant. Confirmation is the market proving dominance again by breaking the consolidation boundary with acceptance.</p>

<p><strong>Confirmation criteria (what must be observed):</strong> A continuation candidate requires a clear impulse leading into the formation (structurally, a displacement). Then the formation itself must be well-contained by boundaries drawn from meaningful swings. Confirmation requires a decisive close beyond the formation boundary in the direction consistent with the prior trend and, preferably, acceptance shown via follow-through or a retest that holds. If the pattern is still forming and has not broken, Structural conditions remain inconclusive. The missing confirmation is the breakout and acceptance, not more labeling.</p>

<p><strong>Failure / invalidation conditions:</strong> A continuation breakout fails when price breaks but returns into the formation and accepts there; this is structurally analogous to a false breakout from a range. A second failure mode is a break against the prior trend that achieves acceptance; in that case, the interpretation shifts from “failed continuation” to “possible trend change evidence,” subject to higher-horizon confirmation. Finally, if a consolidation becomes too long or too wide, it often ceases to be a continuation structure and becomes a larger trading range.</p>

<p><strong>Common misreads:</strong> A common misread is calling a flag or pennant without a preceding impulse; without displacement, many consolidations are just ranges. Another misread is treating all wedges as continuation patterns; wedges can appear at extremes and function as reversal structures depending on context. Triangles are frequently misused as predictive: classical practice treats them as conditional, requiring the breakout to determine relevance. Finally, analysts often mistake normal volatility for a break; close-based acceptance rules reduce this error.</p>

<!-- Visual: Continuation Formations (Trend Maintenance Blueprint) -->
<div class="my-8 rounded-xl border border-[#e0e3eb] bg-white overflow-hidden shadow-2xl font-sans">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-0 w-full">
    <!-- Bull Flag -->
    <div class="flex flex-col border-r border-[#e0e3eb]">
      <div class="bg-[#f8f9fb] px-4 py-1.5 border-b border-[#e0e3eb] flex justify-between items-center">
        <span class="text-[10px] font-black text-[#131722] uppercase tracking-tighter">Structure: Bull Flag</span>
        <span class="text-[9px] text-[#089981] font-bold">High-Displacement Pause</span>
      </div>
      <div class="w-full aspect-[1.5/1] relative p-0 overflow-hidden">
        <svg viewBox="0 0 400 240" class="w-full h-full">
           <g stroke="#f0f3fa" stroke-width="1">
             <line x1="0" y1="40" x2="400" y2="40" />
             <line x1="0" y1="120" x2="400" y2="120" />
             <line x1="0" y1="200" x2="400" y2="200" />
           </g>
           
           <!-- Impulse (Pole) -->
           <path d="M 50 200 L 120 80 L 150 40" fill="none" stroke="#089981" stroke-width="3" stroke-opacity="0.1" />
           
           <!-- Wide Range Bars -->
           <line x1="80" y1="120" x2="80" y2="60" stroke="#089981" stroke-width="2" />
           <rect x="75" y="70" width="10" height="40" fill="#089981" />
           <line x1="120" y1="70" x2="120" y2="20" stroke="#089981" stroke-width="2" />
           <rect x="115" y="30" width="10" height="30" fill="#089981" />

           <!-- Flag Consoldiation -->
           <g transform="rotate(15 140 40)">
             <rect x="140" y="40" width="80" height="40" fill="#2962ff" fill-opacity="0.05" />
             <line x1="140" y1="40" x2="220" y2="40" stroke="#2962ff" stroke-width="0.5" stroke-dasharray="2,2" />
             <line x1="140" y1="80" x2="220" y2="80" stroke="#2962ff" stroke-width="0.5" stroke-dasharray="2,2" />
           </g>

           <!-- Expansion -->
           <line x1="280" y1="20" x2="280" y2="70" stroke="#089981" stroke-width="2" />
           <rect x="275" y="30" width="10" height="30" fill="#089981" />
           
           <text x="50" y="215" fill="#787b86" font-size="7" font-weight="900">PRIOR IMPULSE</text>
        </svg>
      </div>
    </div>
    
    <!-- Pennant/Triangle -->
    <div class="flex flex-col">
      <div class="bg-[#f8f9fb] px-4 py-1.5 border-b border-[#e0e3eb] flex justify-between items-center">
        <span class="text-[10px] font-black text-[#131722] uppercase tracking-tighter">Structure: Symmetrical Pennant</span>
        <span class="text-[9px] text-[#787b86] font-bold">Volatility Compression</span>
      </div>
      <div class="w-full aspect-[1.5/1] relative p-0 overflow-hidden">
        <svg viewBox="0 0 400 240" class="w-full h-full">
           <g stroke="#f0f3fa" stroke-width="1">
             <line x1="0" y1="60" x2="400" y2="60" />
             <line x1="0" y1="120" x2="400" y2="120" />
             <line x1="0" y1="180" x2="400" y2="180" />
           </g>
           
           <!-- Convergence Lines -->
           <line x1="100" y1="60" x2="300" y2="120" stroke="#787b86" stroke-width="1" stroke-dasharray="3,3" />
           <line x1="100" y1="180" x2="300" y2="120" stroke="#787b86" stroke-width="1" stroke-dasharray="3,3" />

           <!-- Internal Zig Zag -->
           <path d="M 100 180 L 150 90 L 200 150 L 250 110 L 320 60" fill="none" stroke="#131722" stroke-width="1.5" />
           
           <rect x="330" y="52" width="60" height="14" rx="2" fill="#089981" />
           <text x="360" y="62" text-anchor="middle" fill="white" font-size="7" font-weight="900" font-family="monospace">RESOLUTION</text>
        </svg>
      </div>
    </div>
  </div>
  <div class="bg-[#f1f3f6] px-4 py-2 border-t border-[#e0e3eb] text-center">
    <p class="text-[9px] font-black uppercase tracking-[0.2em] text-[#787b86]">Continuation Mechanics: Impulse-Pause-Impulse</p>
  </div>
</div>
</div>`
  },
  {
    id: 'gaps-reversals',
    title: 'Gaps and Key Reversal Days',
    content: `<div class="text-justify space-y-4">
<p><strong>Concept definition (classical):</strong> A gap is a price interval where no trade occurs between periods. A key reversal day (or wide-range reversal logic) is a session that makes a new extreme in the direction of the preceding move and then reverses to close in the opposite direction, often with an expanded range. Classical analysis treats both as context-dependent structural events: they matter most when they occur at boundaries, late in extended moves, or as part of a breakout attempt.</p>

<p><strong>Structural logic (cause/effect):</strong> Gaps represent abrupt repricing: the market moves from one area of value to another without trading through the intervening prices. That can occur at breakouts (acceptance into a new area), or near exhaustion (a last push that cannot sustain). Key reversals represent auction failure: the market explores new extremes and is rejected, implying that the side that dominated earlier in the session could not hold control into the close. Importantly, neither event overrides structure by itself; both require follow-through and acceptance behavior to earn structural weight.</p>

<p><strong>Confirmation criteria (what must be observed):</strong> For gaps, confirmation depends on whether the market holds the new area or quickly returns. A gap that holds outside prior value for multiple sessions behaves like acceptance; a gap that fills quickly and returns into prior containment loses structural significance. For key reversal days, confirmation requires follow-through: a subsequent break of a minor swing point, or a failure to reclaim the reversal day’s extreme, indicating that the reversal was not immediately negated. If follow-through is absent, Structural conditions remain inconclusive; the missing confirmation is the next-swing structural response.</p>

<p><strong>Failure / invalidation conditions:</strong> A gap event fails structurally when it fills and the market accepts back into the prior range, indicating the repricing was not durable. A key reversal fails when the market immediately continues to new extremes in the original direction and accepts there, negating the reversal’s implication.</p>

<p><strong>Common misreads:</strong> Misreads include treating any gap as “breakaway” without context, treating reversals in the middle of ranges as major signals, and expecting one-day events to override multi-week structure without swing confirmation. Another common error is ignoring the trend hierarchy: what looks dramatic on a minor horizon may be routine within a primary trend.</p>

<!-- Visual: Gaps and Reversals (Sudden Imbalance Triggers) -->
<div class="my-8 rounded-xl border border-[#e0e3eb] bg-white overflow-hidden shadow-2xl font-sans">
  <div class="bg-[#f8f9fb] border-b border-[#e0e3eb] px-4 py-2 flex items-center justify-between font-mono">
    <div class="flex items-center gap-3">
        <span class="text-[12px] font-black text-[#131722]">APPLE INC</span>
        <span class="px-1.5 py-0.5 bg-[#e0e3eb] text-[#787b86] text-[9px] font-bold rounded uppercase">Daily</span>
    </div>
    <div class="flex gap-4">
        <span class="text-[10px] text-[#f23645] font-black uppercase">Exhaustion & Gap Mechanics</span>
    </div>
  </div>

  <div class="w-full aspect-[21/9] md:aspect-[3/1] relative bg-white overflow-hidden">
    <svg viewBox="0 0 800 240" class="w-full h-full">
      <g stroke="#f0f3fa" stroke-width="0.5">
        <line x1="0" y1="40" x2="800" y2="40" />
        <line x1="0" y1="120" x2="800" y2="120" />
        <line x1="0" y1="200" x2="800" y2="200" />
      </g>
      <!-- Key Reversal -->
      <g>
        <line x1="150" y1="40" x2="150" y2="150" stroke="#f23645" stroke-width="1.5" />
        <rect x="146" y="130" width="8" height="15" fill="#f23645" />
        <text x="150" y="30" text-anchor="middle" fill="#f23645" font-size="8" font-weight="900">REVERSAL DAY (TRAP)</text>
      </g>
      <!-- Breakaway Gap -->
      <g>
        <rect x="350" y="140" width="120" height="60" fill="#787b86" fill-opacity="0.05" stroke="#787b86" stroke-width="1" stroke-dasharray="2,2" />
        <line x1="420" y1="160" x2="420" y2="200" stroke="#089981" stroke-width="1.5" />
        <rect x="416" y="170" width="8" height="15" fill="white" stroke="#089981" />
        <line x1="500" y1="40" x2="500" y2="100" stroke="#089981" stroke-width="1.5" />
        <rect x="496" y="50" width="8" height="30" fill="#089981" />
        <rect x="440" y="85" width="80" height="15" rx="2" fill="#2962ff" />
        <text x="480" y="95" text-anchor="middle" fill="white" font-size="7" font-weight="900" font-family="monospace">BREAKAWAY GAP</text>
      </g>
    </svg>
  </div>
  <div class="bg-gray-50 border-t border-[#e0e3eb] px-4 py-2 flex justify-between tracking-tighter">
    <p class="text-[8px] font-black uppercase text-[#787b86]">Structural Event Logic: Abrupt Imbalance & Acceptance</p>
    <p class="text-[8px] font-black text-[#787b86]">SIERRA TERMINAL ALPHA</p>
  </div>
</div>
</div>`
  },
  {
    id: 'retracements',
    title: 'Percentage Retracements and Reaction Structure',
    content: `<div class="text-justify space-y-4">
<p><strong>Concept definition (classical):</strong> Percentage retracements provide a classical reference framework for describing how far a reaction move has traveled relative to the preceding impulse. They are not treated as deterministic “must-hold” levels. Their role is comparative: to help classify whether a reaction is shallow, moderate, or deep—and to integrate that observation with swing structure and support/resistance.</p>

<p><strong>Structural logic (cause/effect):</strong> Trends persist through impulses and reactions. Reactions occur due to profit-taking, counter-trend testing, and the market’s tendency to seek balance after displacement. A shallow reaction suggests that the dominant side remains strong and that counter-moves are being absorbed quickly. A deep reaction suggests either increasing opposition or waning dominance. The classical structural point is not the exact percentage; it is the relationship between reaction depth and the integrity of the swing structure that defined the trend.</p>

<p><strong>Confirmation criteria (what must be observed):</strong> Retracement analysis begins by defining a clear impulse swing (from swing low to swing high in an uptrend, or from swing high to swing low in a downtrend). If the impulse swing is ambiguous—heavy overlap, no clear displacement—Structural conditions remain inconclusive because the measurement itself lacks a stable reference. Once defined, the retracement zones become a map of where stabilization might occur. Trend resilience is confirmed when price stabilizes in or near a retracement zone and holds a structural support/resistance area and then resumes the trend via a swing break in the trend direction. Without those elements, retracement percentages remain descriptive, not confirmatory.</p>

<p><strong>Failure / invalidation conditions:</strong> A reaction becomes structurally damaging when it breaks prior significant swing structure that defined the trend. Another failure mode is repeated rebound attempts that fail at a retracement-area resistance/support zone and roll over again, indicating that the trend is no longer resuming effectively.</p>

<p><strong>Common misreads:</strong> Common misreads include measuring from arbitrary points rather than clear swing extremes, treating a percentage zone as a mechanical “rule,” and ignoring regime context: ranges often do not respect trend-style retracement behavior. Another misread is failing to pair retracement with support/resistance and swing confirmation, leading to premature conclusions.</p>

<!-- Visual: Retracement Geometry (Reaction Depth Logic) -->
<div class="my-8 rounded-xl border border-[#e0e3eb] bg-white overflow-hidden shadow-2xl font-sans">
  <div class="bg-[#f8f9fb] border-b border-[#e0e3eb] px-4 py-2 flex items-center justify-between font-mono">
    <div class="flex items-center gap-3">
        <span class="text-[12px] font-bold text-[#131722]">S&P 500 INDEX</span>
        <span class="px-1.5 py-0.5 bg-[#e0e3eb] text-[#787b86] text-[9px] font-bold rounded uppercase">Daily</span>
    </div>
    <div class="flex gap-4">
        <span class="text-[10px] text-[#2962ff] font-black uppercase">Measured Impulse Interface</span>
    </div>
  </div>

  <div class="w-full aspect-[21/9] md:aspect-[3/1] relative bg-white overflow-hidden">
    <svg viewBox="0 0 800 240" class="w-full h-full">
      <g stroke="#f0f3fa" stroke-width="1">
        <line x1="0" y1="40" x2="800" y2="40" />
        <line x1="0" y1="90" x2="800" y2="90" />
        <line x1="0" y1="140" x2="800" y2="140" />
        <line x1="0" y1="190" x2="800" y2="190" />
      </g>
      <!-- Measured Move -->
      <line x1="100" y1="200" x2="400" y2="50" stroke="#089981" stroke-width="1.5" stroke-dasharray="4,2" />
      <path d="M 100 200 L 150 170 L 200 130 L 250 100 L 300 80 L 400 50" fill="none" stroke="#131722" stroke-width="2" />
      <!-- Retracement Rulers -->
      <g font-family="monospace" font-size="7" font-weight="900">
        <line x1="400" y1="50" x2="700" y2="50" stroke="#787b86" stroke-width="0.5" stroke-dasharray="2,2" />
        <text x="710" y="53" fill="#787b86">0.0% (4530)</text>
        <line x1="400" y1="100" x2="700" y2="100" stroke="#2962ff" stroke-width="0.5" stroke-dasharray="4,4" />
        <text x="710" y="103" fill="#2962ff">33.3% (SHALLOW)</text>
        <line x1="400" y1="125" x2="700" y2="125" stroke="#2962ff" stroke-width="1" />
        <text x="710" y="128" fill="#2962ff">50.0% (MEAN)</text>
        <line x1="400" y1="150" x2="700" y2="150" stroke="#2962ff" stroke-width="0.5" stroke-dasharray="4,4" />
        <text x="710" y="153" fill="#2962ff">66.6% (DEEP)</text>
      </g>
      <!-- Reaction Example -->
      <path d="M 400 50 L 450 100 L 500 125 L 530 115" fill="none" stroke="#f23645" stroke-width="2" />
      <circle cx="500" cy="125" r="4" fill="white" stroke="#2962ff" stroke-width="1.5" />
      <text x="510" y="145" fill="#2962ff" font-size="8" font-weight="900">STRUCTURAL DEFENSE AREA</text>
    </svg>
  </div>
  <div class="bg-[#f1f3f6] px-4 py-2 border-t border-[#e0e3eb] flex justify-between">
    <p class="text-[9px] font-black uppercase tracking-[0.2em] text-[#787b86]">Resilience Benchmark: Reaction Depth vs. Trend Integrity</p>
    <p class="text-[9px] font-black text-[#2962ff]">SIERRA ANALYTICS</p>
  </div>
</div>
</div>`
  },
  {
    id: 'volume',
    title: 'Volume Interpretation: Confirmation and Effort vs Result',
    content: `<div class="text-justify space-y-4">
<p><strong>Concept definition (classical):</strong> Volume is interpreted as a measure of participation and urgency. Classically, volume does not “command” price; it contextualizes price. The method uses volume primarily for confirmation: to evaluate whether boundary events (breakouts, climaxes, retests) appear supported by participation, and to evaluate effort versus result—whether high participation produces limited progress or whether low participation produces outsized movement.</p>

<p><strong>Structural logic (cause/effect):</strong> When a market attempts to break a boundary, participation often increases because more participants are compelled to transact: breakout traders, trapped participants exiting, and counter-parties absorbing. If participation increases and price achieves acceptance beyond the boundary, the structural story is coherent. If participation increases but price cannot progress, it can indicate absorption: effort is high but result is low. Conversely, if price moves far on low participation, it may reflect thin conditions or temporary imbalance. These interpretations remain subordinate to price confirmation; volume strengthens or weakens the case but cannot replace acceptance and swing structure.</p>

<p><strong>Confirmation criteria (what must be observed):</strong> For breakouts, relative volume expansion supports the claim that acceptance has broad participation, especially when paired with range expansion and closes beyond the boundary. For retests, reduced volume during pullbacks combined with renewed activity on resumption is a classical supportive pattern. For climaxes, unusually high volume near extremes can mark exhaustion only if followed by structural confirmation (swing change, boundary reclaim). If volume is unavailable, distorted, or not comparable, explicitly state: Structural conditions remain inconclusive with respect to volume confirmation, and rely on price structure alone.</p>

<p><strong>Failure / invalidation conditions:</strong> Volume-confirmed events can still fail if price fails. A high-volume breakout that immediately collapses back into the range is still a false breakout; the failure is more informative because it implies trapped participation. Rising volume during a pullback that breaks key support can confirm damage. Persistent high volume without directional progress often signals transition into a range; the structure must be re-evaluated.</p>

<p><strong>Common misreads:</strong> A common misread is treating all high volume as bullish; high volume can occur at distribution or capitulation. Another is ignoring location; volume is most meaningful at boundaries. Another is forcing volume to “confirm” a conclusion when price has not met acceptance rules. Finally, some instruments have fragmented or synthetic volume; the analyst must document reliability limitations.</p>

<!-- Visual: Volume Interpretation (Participation Blueprint) -->
<div class="my-8 rounded-xl border border-[#e0e3eb] bg-white overflow-hidden shadow-2xl font-sans">
  <div class="bg-[#f8f9fb] border-b border-[#e0e3eb] px-4 py-2 flex items-center justify-between">
    <div class="flex items-center gap-3">
        <span class="text-[12px] font-bold text-[#131722]">BTC/USD</span>
        <span class="px-1.5 py-0.5 bg-[#e0e3eb] text-[#787b86] text-[9px] font-bold rounded uppercase">Weekly</span>
    </div>
    <div class="flex gap-4">
        <span class="text-[10px] text-[#089981] font-black uppercase">Expansion Confirmation Logic</span>
    </div>
  </div>

  <div class="w-full aspect-[2.5/1] relative bg-white overflow-hidden flex flex-col">
    <!-- Price Pane -->
    <div class="flex-1 border-b border-[#f1f3f6] relative">
      <svg viewBox="0 0 800 160" class="w-full h-full">
         <g stroke="#f0f3fa" stroke-width="0.5">
           <line x1="0" y1="40" x2="800" y2="40" />
           <line x1="0" y1="80" x2="800" y2="80" />
           <line x1="0" y1="120" x2="800" y2="120" />
         </g>
         <!-- Breakout Candles -->
         <line x1="100" y1="100" x2="100" y2="40" stroke="#089981" stroke-width="2" />
         <rect x="95" y="50" width="10" height="40" fill="#089981" />
         <line x1="150" y1="60" x2="150" y2="10" stroke="#089981" stroke-width="2" />
         <rect x="145" y="20" width="10" height="30" fill="#089981" />
      </svg>
    </div>
    <!-- Volume Pane -->
    <div class="h-16 relative bg-[#fcfdfe]">
      <svg viewBox="0 0 800 40" class="w-full h-full">
         <!-- Volume Bars -->
         <rect x="95" y="10" width="10" height="30" fill="#089981" opacity="0.8" />
         <rect x="145" y="5" width="10" height="35" fill="#089981" opacity="0.8" />
         <text x="160" y="25" fill="#089981" font-size="7" font-weight="900" font-family="monospace">HIGH VOLUME CONFIRMATION</text>
         
         <rect x="300" y="30" width="10" height="10" fill="#787b86" opacity="0.5" />
         <rect x="350" y="32" width="10" height="8" fill="#787b86" opacity="0.5" />
         <text x="365" y="25" fill="#787b86" font-size="7" font-weight="900" font-family="monospace">LOW ENERGY CONSOLIDATION</text>
      </svg>
    </div>
  </div>
  <div class="bg-gray-50 border-t border-[#e0e3eb] px-4 py-2 flex justify-between tracking-tighter">
    <p class="text-[8px] font-black uppercase text-[#787b86]">Effort vs. Result: Structural alignment of participation</p>
    <p class="text-[8px] font-black text-[#787b86]">SIERRA TERMINAL</p>
  </div>
</div>
</div>`
  },
  {
    id: 'moving-averages',
    title: 'Moving Averages: Context, Alignment, and Lag',
    content: `<div class="text-justify space-y-4">
<p><strong>Concept definition (classical):</strong> A moving average is a smoothing of price used to reduce noise and provide context. Classically, moving averages are treated as lagging descriptors: they help clarify whether the market has generally been trading above or below a reference and whether multiple horizons appear aligned. They are not treated as primary triggers that override swing structure or boundary acceptance.</p>

<p><strong>Structural logic (cause/effect):</strong> Because moving averages are computed from past prices, they respond after the market has already moved. This lag is not a flaw; it is the definition of smoothing. The structural use is to support environmental classification. In sustained uptrends, price often holds above a relevant moving average and finds support near it during reactions. In sustained downtrends, price often remains below and finds resistance near it. When price whipsaws across an average repeatedly, it suggests balance or transition rather than trend, and the analyst should elevate horizontal boundaries and swing pivots over the moving average.</p>

<p><strong>Confirmation criteria (what must be observed):</strong> Moving average “confirmation” is contextual: it is supportive when it agrees with swing structure and boundary behavior. For example, higher highs/higher lows combined with price holding above a rising moving average supports an uptrend classification. However, if swing structure is mixed and price crosses the average repeatedly, Structural conditions remain inconclusive for trend classification until swing and acceptance evidence clarifies. The analyst must explicitly note lag: an average does not validate a new regime at the moment it crosses; it describes a regime that has already been underway.</p>

<p><strong>Failure / invalidation conditions:</strong> A moving average context can become invalid when price decisively violates the average and swing structure breaks, especially when former average support becomes resistance on retests. Prolonged flat averages with repeated crossovers usually indicate range behavior; treating such conditions as trend signals is a structural mismatch.</p>

<p><strong>Common misreads:</strong> Common misreads include treating a single crossover as a regime change without any swing confirmation, using the average as an exact level rather than a zone, and ignoring that range regimes inherently create crossovers. Another misread is failing to state the lag explicitly, leading to conclusions that the indicator “predicted” rather than followed.</p>

<!-- Visual: Moving Average Context (Horizon Alignment) -->
<div class="my-8 rounded-xl border border-[#e0e3eb] bg-white overflow-hidden shadow-2xl font-sans">
  <div class="bg-[#f8f9fb] border-b border-[#e0e3eb] px-4 py-2 flex items-center justify-between font-mono">
    <div class="flex items-center gap-3">
        <span class="text-[12px] font-black text-[#131722]">MSFT</span>
        <span class="px-1.5 py-0.5 bg-[#e0e3eb] text-[#787b86] text-[9px] font-bold rounded uppercase">Daily</span>
    </div>
    <div class="flex gap-4">
        <span class="text-[10px] text-[#2962ff] font-bold">SMA Alignment Check</span>
    </div>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-0 w-full bg-white">
    <div class="border-b md:border-b-0 md:border-r border-[#e0e3eb]">
      <div class="bg-gray-50 px-3 py-1 border-b border-[#e0e3eb]">
        <span class="text-[8px] font-black uppercase text-[#2962ff]">Trend Regime: Alignment Observed</span>
      </div>
      <div class="aspect-[1.5/1] relative">
        <svg viewBox="0 0 400 240" class="w-full h-full">
           <g stroke="#f0f3fa" stroke-width="0.5">
             <line x1="0" y1="60" x2="400" y2="60" />
             <line x1="0" y1="120" x2="400" y2="120" />
           </g>
           <!-- MAs -->
           <path d="M 50 200 Q 150 180 350 40" fill="none" stroke="#2962ff" stroke-width="2" />
           <path d="M 50 170 Q 150 140 350 10" fill="none" stroke="#ff9800" stroke-width="1.5" />
           <!-- Price -->
           <path d="M 50 160 L 100 130 L 150 150 L 250 80 L 350 20" fill="none" stroke="#131722" stroke-width="1" opacity="0.3" />
        </svg>
      </div>
    </div>
    <div>
      <div class="bg-gray-50 px-3 py-1 border-b border-[#e0e3eb]">
        <span class="text-[8px] font-black uppercase text-[#f23645]">Range Regime: Structural Whipsaw</span>
      </div>
      <div class="aspect-[1.5/1] relative">
        <svg viewBox="0 0 400 240" class="w-full h-full">
           <g stroke="#f0f3fa" stroke-width="0.5">
             <line x1="0" y1="60" x2="400" y2="60" />
             <line x1="0" y1="120" x2="400" y2="120" />
           </g>
           <!-- Flat MAs -->
           <line x1="50" y1="120" x2="350" y2="120" stroke="#2962ff" stroke-width="1.5" stroke-dasharray="4,2" />
           <line x1="50" y1="125" x2="350" y2="125" stroke="#ff9800" stroke-width="1.5" stroke-dasharray="4,2" />
           <!-- Whipsaw Price -->
           <path d="M 50 100 L 100 150 L 150 90 L 200 160 L 350 110" fill="none" stroke="#131722" stroke-width="1.5" />
        </svg>
      </div>
    </div>
  </div>
  <div class="bg-[#f1f3f6] px-4 py-2 border-t border-[#e0e3eb] flex justify-between">
    <p class="text-[9px] font-black uppercase tracking-[0.2em] text-[#787b86]">Descriptive Smoothing: Trend vs. Range Context</p>
    <p class="text-[9px] font-black text-[#2962ff]">SIERRA INDICATORS</p>
  </div>
</div>
</div>`
  },
  {
    id: 'stops-invalidation',
    title: 'Stops and Trailing Stops as Structural Invalidation',
    content: `<div class="text-justify space-y-4">
<p><strong>Concept definition (classical):</strong> A stop loss is an invalidation mechanism: it defines the price condition under which the structural premise is proven wrong. A trailing stop is the systematic tightening of that invalidation boundary as the market forms new, confirmed swing structure. In a classical structural framework, stops are derived from chart structure—zones, boundaries, and swing points—rather than arbitrary distances.</p>

<p><strong>Structural logic (cause/effect):</strong> Structural analysis is only complete when it states what would falsify it. If a claim depends on support holding, then decisive acceptance below that support falsifies the claim. If a claim depends on a breakout holding above a range boundary, then re-acceptance inside the old range falsifies the claim. Trailing stops express a second structural principle: as the market prints new higher lows in an uptrend, the “point of wrongness” can move upward to the newest confirmed swing low. This reduces exposure to a regime change without assuming it cannot occur.</p>

<p><strong>Confirmation criteria (what must be observed):</strong> A valid invalidation level must be logically tied to the structure and must change the classification if broken. For example, placing invalidation beyond a support zone makes sense if a break would transform an uptrend into damage/transition. Trailing should occur only after a new swing has formed and is confirmed, not during unfinished price noise. If structure is unclear—no stable swings, overlapping range—Structural conditions remain inconclusive, and any invalidation mapping must either widen to accommodate noise or be deferred until boundaries clarify.</p>

<p><strong>Failure / invalidation conditions:</strong> Invalidation mapping fails when it is placed inside normal volatility, producing repeated false invalidations. It also fails when the invalidation point is moved away from the structural boundary, effectively refusing falsification. Another failure is ignoring zone width: placing a stop exactly on an obvious level invites noise-driven violations that do not represent acceptance.</p>

<p><strong>Common misreads:</strong> Common misreads include using fixed-percentage stops divorced from structure, placing stops directly on a level without accounting for zone width, tightening invalidation before a new swing is confirmed, and confusing “tight invalidation” with “better structure.” Classical discipline prioritizes correctness of the boundary over comfort.</p>

<!-- Visual: Structural Invalidation (Trailing Stop Mechanics) -->
<div class="my-8 rounded-xl border border-[#e0e3eb] bg-white overflow-hidden shadow-2xl font-sans tracking-tight">
  <div class="bg-[#f8f9fb] border-b border-[#e0e3eb] px-4 py-2 flex items-center justify-between font-mono">
    <div class="flex items-center gap-3">
        <span class="text-[12px] font-black text-[#131722]">TRADING PLAN AB01</span>
        <span class="px-1.5 py-0.5 bg-[#e0e3eb] text-[#787b86] text-[9px] font-bold rounded uppercase">Systematic</span>
    </div>
    <div class="flex gap-4">
        <span class="text-[10px] text-[#f23645] font-black uppercase">Risk Boundary Map</span>
    </div>
  </div>

  <div class="w-full aspect-[21/9] md:aspect-[3/1] relative bg-white overflow-hidden">
    <svg viewBox="0 0 800 240" class="w-full h-full">
      <g stroke="#f0f3fa" stroke-width="0.5">
        <line x1="0" y1="40" x2="800" y2="40" />
        <line x1="0" y1="120" x2="800" y2="120" />
        <line x1="0" y1="200" x2="800" y2="200" />
      </g>
      
      <!-- Price Path -->
      <path d="M 50 200 L 150 120 L 200 150 L 350 80 L 400 110 L 550 40 L 600 70 L 750 20" fill="none" stroke="#131722" stroke-width="1.5" />
      
      <!-- Stop Levels -->
      <g font-family="monospace" font-size="7" font-weight="900">
        <!-- Trail 1 -->
        <line x1="200" y1="150" x2="780" y2="150" stroke="#2962ff" stroke-width="1" stroke-dasharray="4,2" />
        <rect x="740" y="142" width="55" height="16" rx="2" fill="#2962ff" />
        <text x="767.5" y="153" text-anchor="middle" fill="white">TRAIL 1</text>
        
        <!-- Trail 2 -->
        <line x1="400" y1="110" x2="780" y2="110" stroke="#2962ff" stroke-width="1" stroke-dasharray="4,2" />
        <rect x="740" y="102" width="55" height="16" rx="2" fill="#2962ff" />
        <text x="767.5" y="113" text-anchor="middle" fill="white">TRAIL 2</text>

        <!-- Initial -->
        <line x1="50" y1="210" x2="780" y2="210" stroke="#f23645" stroke-width="1" />
        <rect x="740" y="202" width="55" height="16" rx="2" fill="#f23645" />
        <text x="767.5" y="213" text-anchor="middle" fill="white">INITIAL</text>
      </g>
      <text x="350" y="70" fill="#089981" font-size="8" font-weight="900">HH CONFIRMS HL</text>
      <text x="550" y="30" fill="#089981" font-size="8" font-weight="900">HH CONFIRMS HL</text>
    </svg>
  </div>
  <div class="bg-gray-50 border-t border-[#e0e3eb] px-4 py-2 flex justify-between tracking-tighter">
    <p class="text-[8px] font-black uppercase text-[#787b86]">Invalidation Strategy: Price-Based Boundary Tightening</p>
    <p class="text-[8px] font-black text-[#787b86]">SIERRA RISK ENGINE</p>
  </div>
</div>
</div>`
  },
  {
    id: 'playbook-bear-market',
    title: 'Integrated Structural Analysis Playbook & Bear Market Structure',
    content: `<div class="text-justify space-y-4">
<h3 class="text-xl font-bold text-intense-indigo mt-8 mb-4">Integrated Structural Analysis Playbook</h3>
<p>A disciplined structural analysis process follows a specific sequence: classify the environment, mark the levels, identify the candidate structure, define the trigger, and define the invalidation. This playbook ensures that every analytical claim is grounded in observable price behavior rather than narrative.</p>

<h3 class="text-xl font-bold text-intense-indigo mt-8 mb-4">Bear Market Structure and Trading the Declines</h3>
<p>Bear markets are not just "falling prices"; they are structural regimes defined by lower highs and lower lows. Rallies in bear markets are typically fast and violent, often referred to as "bear market rallies," but they are structurally secondary reactions until they reclaim a significant swing high. Trading declines requires a different posture: prioritizing capital preservation, using tighter invalidation, and recognizing that supply becomes increasingly dominant at every prior support zone (role reversal).</p>

<h3 class="text-xl font-bold text-intense-indigo mt-8 mb-4">Pattern Atlas Summary</h3>
<p>The Pattern Atlas serves as a reference for the classical formations covered in this curriculum. Each pattern is defined by its type (reversal or continuation), required prior trend context, construction rules, confirmation trigger, and failure implications. The atlas reinforces the core principle: do not label early—without a confirmed trigger, structural conditions remain inconclusive.</p>

<!-- Visual: Playbook Flowchart -->
<div class="my-8 p-8 bg-white rounded-2xl border border-slate-200 shadow-sm">
  <div class="flex flex-col space-y-6 max-w-3xl mx-auto font-sans">
    <div class="flex items-center space-x-4">
      <div class="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 font-bold text-xs">01</div>
      <div class="flex-grow p-4 bg-slate-50 rounded-xl border border-slate-100">
        <p class="text-xs font-bold text-slate-700 uppercase tracking-widest">Classify Environment</p>
        <p class="text-[10px] text-slate-500 mt-1">Primary Trend (Up/Down/Range) + Volatility Regime</p>
      </div>
    </div>
    <div class="ml-4 w-px h-6 bg-slate-200"></div>
    <div class="flex items-center space-x-4">
      <div class="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 font-bold text-xs">02</div>
      <div class="flex-grow p-4 bg-slate-50 rounded-xl border border-slate-100">
        <p class="text-xs font-bold text-slate-700 uppercase tracking-widest">Mark Structural Levels</p>
        <p class="text-[10px] text-slate-500 mt-1">Support/Resistance Zones + Swing Pivots + Trend Boundaries</p>
      </div>
    </div>
    <div class="ml-4 w-px h-6 bg-slate-200"></div>
    <div class="flex items-center space-x-4">
      <div class="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 font-bold text-xs">03</div>
      <div class="flex-grow p-4 bg-slate-50 rounded-xl border border-slate-100">
        <p class="text-xs font-bold text-slate-700 uppercase tracking-widest">Identify Candidate Structure</p>
        <p class="text-[10px] text-slate-500 mt-1">Pattern Recognition (H&S, Flags, etc.) + Auction Evidence</p>
      </div>
    </div>
    <div class="ml-4 w-px h-6 bg-slate-200"></div>
    <div class="flex items-center space-x-4">
      <div class="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 font-bold text-xs">04</div>
      <div class="flex-grow p-4 bg-slate-50 rounded-xl border border-slate-100">
        <p class="text-xs font-bold text-slate-700 uppercase tracking-widest">Define Trigger & Invalidation</p>
        <p class="text-[10px] text-slate-500 mt-1">Acceptance Criteria (Closes) + Point of Falsification</p>
      </div>
    </div>
    <div class="ml-4 w-px h-6 bg-slate-200"></div>
    <div class="flex items-center space-x-4">
      <div class="flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 font-bold text-xs">05</div>
      <div class="flex-grow p-4 bg-slate-50 rounded-xl border border-slate-100">
        <p class="text-xs font-bold text-slate-700 uppercase tracking-widest">Execution & Review</p>
        <p class="text-[10px] text-slate-500 mt-1">Discipline Check + Post-Trade Structural Audit</p>
      </div>
    </div>
  </div>
  <p class="mt-8 text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold text-center">Integrated Structural Analysis Playbook: Execution Loop</p>
</div>
</div>`
  }
];
