export interface Article {
  id: string;
  date: string;
  type: 'Article' | 'Report';
  title: string;
  excerpt: string;
  content: string[];
  chartUrl?: string;
  symbol?: string;
  exchange?: string;
  reportImages?: string[];
  topics?: string[];
  isMembersOnly?: boolean;
  hasExcelModel?: boolean;
  previewImage?: string;
  code?: string;
  codeAnnotations?: { line: number, text: string, color: 'blue' | 'emerald' }[];
  graphData?: {
    description: string;
    reference: string;
    values: number[]; // Simple 1D line data
    label: string;
  };
  metadata?: {
    rating: string;
    price: string;
    targetPrice: string;
    analyst: string;
    companyData: {
      price: string;
      dateOfPrice: string;
      range52w: string;
      marketCap: string;
      fiscalYearEnd: string;
      sharesOS: string;
      dividendYield: string;
      priceTarget: string;
    };
    snapshot: {
      recommendation: string;
      risk: string;
      evEbitda: string;
      dividendStreak: string;
      keyCatalyst: string;
    };
  };
}

export const marketArticles: Article[] = [
  {
    id: 'hedging-volatile-market',
    date: 'March 25, 2026',
    type: 'Article',
    topics: ['Risk Management', 'Options'],
    graphData: {
      description: "VIX Index performance during recent geopolitical tensions.",
      reference: "Calculated based on CBOE Market Data (March 2026)",
      values: [15.2, 16.5, 18.1, 22.4, 20.8, 25.1, 23.4, 19.8, 18.5, 21.2],
      label: "VIX Volatility Index"
    },
    title: 'Hedging in a Volatile Market: How Options Are Being Used to Manage Risk',
    excerpt: 'As geopolitical tensions tied to Iran drive market swings, investors are increasingly turning to options to protect positions without exiting them.',
    reportImages: ['/chart.png'],
    content: [
      "Recent geopolitical tensions, particularly the escalation of conflict involving Iran, have injected a renewed sense of fragility into global financial markets. Equity indices have become more erratic, energy prices have responded sharply to perceived supply risks, and cross asset correlations have tightened in ways that typically signal stress rather than opportunity. In this environment, the question facing investors is not simply where markets are headed, but how to remain positioned while managing the increasingly asymmetric risks that come with elevated volatility.",
      "For those holding open positions, closing exposure entirely is rarely an attractive solution. Long term convictions, portfolio mandates, or tax considerations often make liquidation impractical. Instead, the focus shifts to reshaping the risk profile of an existing position. This is where options become particularly relevant. At their core, options provide a way to separate participation from protection, allowing investors to remain exposed to favorable outcomes while placing bounds on adverse ones.",
      "The logic is straightforward. An option gives its holder the right, but not the obligation, to transact in an asset at a predetermined price within a specified period. By paying a premium upfront, the investor acquires protection against unfavorable price movements while preserving upside potential. In practical terms, this is equivalent to purchasing insurance. The cost is known in advance, and the payoff is contingent on the occurrence of an adverse event.",
      "Understanding what is being protected is essential, particularly in a market environment shaped by geopolitical uncertainty. Directional risk remains the most visible concern. A long equity position suffers directly from a decline in price, and recent market behavior has demonstrated how quickly sentiment can shift in response to developments tied to Iran or broader regional instability. However, volatility itself is a distinct source of risk. Even in the absence of a clear trend, large interim price swings can create significant strain, particularly for leveraged portfolios or those subject to liquidity constraints. Event driven risk adds another layer, as sudden announcements or escalations can produce discontinuous price movements that are difficult to manage through conventional means.",
      "The most direct way to address these risks for a long position is through a protective put. By purchasing a put option on an asset that is already held, the investor establishes a floor below which losses are effectively capped. Consider a stock trading at 50. An investor who buys a put with a strike at 45 for a premium of 2 has secured the right to sell at that level regardless of how far the market falls. If the stock declines sharply, the loss on the underlying position is offset, at least in part, by gains on the option. If the stock rises, the option expires worthless, and the cost of protection is limited to the premium paid. The result is a payoff structure that is no longer symmetric, with downside risk bounded and upside largely preserved.",
      "The simplicity of this structure is part of its appeal, but it comes at a cost. Option premiums are heavily influenced by implied volatility, which reflects the market’s expectation of future price fluctuations. In periods of heightened uncertainty, such as those associated with tensions involving Iran, implied volatility rises and options become more expensive. This creates an inherent tension in hedging. The moments when protection is most desirable are often the moments when it is least affordable. Investors who attempt to hedge reactively may find themselves paying elevated premiums for protection that the market has already priced aggressively.",
      "This is why timing and discipline play a central role in effective risk management. Establishing hedges when volatility is relatively subdued, rather than in response to immediate fear, allows investors to secure protection at a more reasonable cost. It also reflects a shift in mindset, from reacting to market conditions to anticipating them.",
      "The behavior of the hedge itself is not static, and this is where concepts such as delta become relevant. Delta measures how sensitive an option’s price is to changes in the underlying asset. A put option with a delta of negative 0.5, for example, will gain approximately half a unit in value for every unit decline in the underlying. As the market falls and the option moves further into the money, its delta increases in magnitude, meaning that the hedge becomes more effective precisely when it is needed most. Conversely, as the market rises, the option becomes less responsive, and the hedge gradually fades. This dynamic characteristic distinguishes option based hedging from more rigid approaches.",
      "Given the elevated cost of protection in volatile markets, many investors look for ways to offset the premium associated with buying puts. One of the most widely used approaches is the collar strategy, which involves selling a call option at a higher strike while simultaneously purchasing a put at a lower strike. The premium received from the call can partially or fully finance the cost of the put, reducing or even eliminating the net cost of the hedge. The trade off is clear. By selling the call, the investor gives up participation in gains beyond a certain level. The position is effectively confined within a defined range, with both downside and upside bounded.",
      "This structure is particularly attractive in environments where volatility is elevated and the cost of outright protection is difficult to justify. It reflects a conscious decision to prioritize stability over unlimited upside, a trade that many institutional investors are willing to make when uncertainty dominates the outlook.",
      "At a broader level, all of these strategies are linked by a common theme. Options are not simply tools for expressing directional views, but instruments for managing volatility. When an investor buys a put, they are effectively purchasing protection against large price movements. When they sell a call, they are monetizing volatility to fund that protection. The balance between these two actions depends on the relative pricing of risk in the market.",
      "Measures such as the VIX provide a useful reference point for this dynamic. Elevated readings indicate that the market is pricing in significant uncertainty, which translates directly into higher option premiums. Lower readings suggest a more complacent environment, where protection can be acquired more cheaply. The challenge for investors is to assess whether the price of that protection accurately reflects the risks they face.",
      "In the current climate, shaped by geopolitical tensions and rapidly shifting expectations, the ability to manage exposure without abandoning positions has become increasingly valuable. Options offer a structured way to achieve this, allowing investors to redefine the payoff profile of their portfolios in line with their risk tolerance and market outlook. The objective is not to eliminate risk entirely, which is neither possible nor desirable, but to transform it into a form that can be managed with greater clarity and control."
    ]
  },
  {
    id: 'macro-outlook-2026',
    date: 'March 22, 2026',
    type: 'Article',
    topics: ['Macro', 'Finance'],
    graphData: {
      description: "US 10-Year Treasury Yield trends (Projection 2026).",
      reference: "Sierra Internal Macro Model (March 2026)",
      values: [4.1, 4.2, 4.15, 4.3, 4.25, 4.4, 4.35, 4.2, 4.1, 4.0],
      label: "10Y Treasury Yield %"
    },
    title: 'Macro Outlook 2026: Navigating Interest Rate Shifts',
    excerpt: 'An analysis of the current macroeconomic environment and how shifting interest rates are impacting global equity markets and investor sentiment.',
    reportImages: ['/Article 6.jpg'],
    content: [
      "As we move further into 2026, the global macroeconomic landscape is being defined by a complex interplay of central bank policies, labor market dynamics, and evolving trade relationships. The primary focus for investors remains the trajectory of interest rates, as major central banks attempt to navigate the 'last mile' of inflation control without triggering a significant downturn.",
      "In the United States, the Federal Reserve has signaled a shift toward a more data-dependent approach. While the aggressive tightening cycle of previous years has concluded, the timing and magnitude of potential rate cuts remain a subject of intense debate. This uncertainty has led to increased volatility in the bond market, which in turn has spilled over into equity valuations, particularly for growth-oriented sectors.",
      "European markets face a different set of challenges. While inflation has moderated, economic growth remains sluggish in several key economies. The European Central Bank is balancing the need for monetary support with the risk of reigniting inflationary pressures, creating a delicate environment for regional investors.",
      "Emerging markets continue to show resilience, though performance is highly bifurcated. Countries with strong domestic consumption and favorable demographic trends are attracting capital, while those heavily dependent on external financing remain vulnerable to shifts in global liquidity conditions.",
      "For investors, the key to navigating this environment lies in diversification and a focus on quality. Companies with strong balance sheets, pricing power, and the ability to generate consistent cash flow are likely to outperform in a period of higher-for-longer interest rates. Furthermore, an active approach to asset allocation will be essential as correlations between traditional asset classes continue to evolve."
    ]
  },
  {
    id: 'quantitative-investing-rise',
    date: 'March 18, 2026',
    type: 'Article',
    topics: ['Quant', 'Technology'],
    graphData: {
      description: "Adoption rate of alternative data sources in institutional portfolios.",
      reference: "Industry Survey on Algorithmic Strategies (2025-2026)",
      values: [10, 15, 22, 35, 48, 55, 62, 70, 78, 85],
      label: "% Institutional Adoption"
    },
    title: 'The Rise of Quantitative Investing in Volatile Markets',
    excerpt: 'How data-driven strategies are helping investors filter through market noise and identify high-conviction opportunities in uncertain times.',
    reportImages: ['/Articles 4.avif'],
    content: [
      "In an era characterized by rapid information flow and heightened market volatility, quantitative investing has emerged as a powerful tool for institutional and retail investors alike. By leveraging advanced algorithms and vast datasets, quantitative strategies aim to identify patterns and anomalies that may be invisible to traditional fundamental analysis.",
      "One of the primary advantages of a quantitative approach is its ability to remove emotional bias from the investment process. In periods of market stress, human investors are often prone to panic or overconfidence, leading to suboptimal decision-making. Algorithms, by contrast, execute trades based on predefined rules and statistical probabilities, ensuring consistency and discipline.",
      "Furthermore, the proliferation of alternative data—ranging from satellite imagery and social media sentiment to credit card transactions—has provided quantitative managers with a wealth of new insights. By processing this information in real-time, these strategies can respond to market developments with a speed and precision that was previously impossible.",
      "However, quantitative investing is not without its risks. The reliance on historical data means that these models may struggle during 'black swan' events or periods of structural change. Additionally, the increasing popularity of these strategies has led to crowded trades, potentially amplifying market movements when multiple algorithms react to the same signal.",
      "As we look ahead, the integration of machine learning and artificial intelligence is set to further transform the quantitative landscape. These technologies allow models to adapt to changing market conditions and discover more complex relationships within data. For investors, the challenge will be to find the right balance between human intuition and algorithmic precision."
    ]
  },
  {
    id: 'semiconductor-trends-2026',
    date: 'March 12, 2026',
    type: 'Article',
    topics: ['AI', 'Tech'],
    title: 'Semiconductor Trends: The Next Wave of AI Infrastructure',
    excerpt: 'As AI models grow in complexity, the demand for specialized hardware is reaching new heights. We analyze the key players in the next generation of AI chips.',
    content: ["Content here..."]
  },
  {
    id: 'energy-transition-metals',
    date: 'March 08, 2026',
    type: 'Article',
    topics: ['Energy', 'Commodities'],
    title: 'Energy Transition: The Critical Role of Rare Earth Metals',
    excerpt: 'The shift to renewable energy is driving unprecedented demand for specific metals. We explore the supply chain risks and investment opportunities in this space.',
    content: ["Content here..."]
  },
  {
    id: 'big-four-partnership-shift',
    date: 'April 25, 2026',
    type: 'Article',
    topics: ['Professional Services', 'Corporate Strategy'],
    graphData: {
      description: "Equity Partner vs Salaried Partner count at top Global Firms (London).",
      reference: "Compiled from company filings and industry reports (2021-2025)",
      values: [500, 480, 450, 420, 390, 370, 350, 340, 335, 330],
      label: "Total Equity Partners"
    },
    title: 'The End of the Life-Long Partnership at Global Professional Firms',
    excerpt: 'A historic shift is unfolding in the audit and consulting world as top firms move away from permanent equity status in favor of performance-driven salaried roles.',
    reportImages: ['/partnership.jfif'],
    content: [
      "The traditional gold standard of professional services—the 'equity partner' title—is undergoing a fundamental transformation. Historically, reaching this summit meant a permanent seat at the table and an assured share of annual profits. However, recent movements within the leadership of global audit giants suggest that the era of the 'job for life' is drawing to an efficient, if unsentimental, close.",
      "Industry insiders report a quiet trend of reclassifying senior positions. Large firms are increasingly moving underperforming equity partners into a newer, more restricted 'salaried partner' tier. This strategic demotion allows firms to preserve their profit pools for top producers while retaining senior expertise under a title that lacks an equity stake.",
      "This shift underscores a broader push for efficiency in an environment where consulting demand has faced intermittent cooling. By tightening the criteria for profit-sharing, firms are effectively turning the partnership into a performance-managed engine rather than a tenure-based reward system. For those in the top echelons, the message is clear: tenure alone no longer guarantees a share of the spoils.",
      "Critics of the move point to 'title inflation,' where the prestige of being a 'partner' is maintained while the economic reality changes. Yet, for firm leaders, this flexibility is essential for maintaining high profit-per-partner ratios in a competitive global landscape. As structures evolve, the once-unshakeable path to senior equity is becoming a staircase that can move in both directions."
    ]
  },
  {
    id: 'swiss-banking-capital-clash',
    date: 'April 24, 2026',
    type: 'Article',
    topics: ['Banking', 'Regulation'],
    graphData: {
      description: "CET1 Capital requirements under new Swiss regulatory frameworks ($bn).",
      reference: "Swiss Federal Council Financial Stability Report (April 2026)",
      values: [5, 10, 15, 18, 20, 20, 20, 21, 20, 20],
      label: "Target Capital Increase ($bn)"
    },
    title: 'Switzerland and Banking Giants: The $20bn Stalemate',
    excerpt: 'Regulatory authorities in Bern are standing firm on massive capital requirements for the nation’s largest financial institutions, setting the stage for a long-term strategic battle.',
    reportImages: ['/Article 8.jpg'],
    content: [
      "In the wake of recent banking sector tremors, the Swiss government has finalized a suite of reforms designed to prevent a repeat of past crises. At the heart of this legislative push is a staggering $20 billion capital requirement—a figure that has drawn sharp rebukes from the country's dominant banking leaders.",
      "The Federal Council’s proposal seeks to bolster the resilience of Switzerland's financial system by forcing top-tier banks to fully back their international subsidiaries with core capital. While the government has offered moderate concessions on the accounting of deferred tax assets and software, it has refused to budge on the core capital demand, which it views as non-negotiable for national stability.",
      "For the banks, these 'extreme' measures represent a departure from international standards and a threat to their global competitiveness. Executives argue that the new rules make expansion into markets like the US significantly more expensive, potentially forcing a rethink of their long-term geographic footprint.",
      "As the draft laws move toward a parliamentary showdown, the industry is lobbying for compromises, such as the use of AT1 debt to cover a portion of the requirement. For Switzerland, the challenge remains a delicate one: ensuring that its banks are safe enough to protect the state, but versatile enough to remain global leaders in wealth management."
    ]
  },
  {
    id: 'takeover-rhetoric-clampdown',
    date: 'April 23, 2026',
    type: 'Article',
    topics: ['M&A', 'Financial Regulation'],
    graphData: {
      description: "Cross-border bank shareholding trends in the Eurozone (2024-2026).",
      reference: "European Central Bank Banking Supervision Data (Q1 2026)",
      values: [12, 14, 18, 22, 25, 27, 28, 30, 31, 33],
      label: "Hostile Stake Accumulation %"
    },
    title: 'European Regulators Intervene in Banking Takeover War of Words',
    excerpt: 'Financial watchdogs have moved to restrict aggressive public communications as a major cross-border banking acquisition bid turns increasingly acrimonious.',
    reportImages: ['/Articles 2.jpg'],
    content: [
      "The battle for control of one of Germany's flagship lenders has entered a new and more restrictive phase. Federal regulators have issued a rare directive, ordering a major Italian suitor to cease what they describe as 'non-objective' and 'sensationalist' claims regarding its target's stability and prospects.",
      "The intervention comes after a series of public statements and social media campaigns that portrayed the German lender as 'neglected' and structurally vulnerable. Regulators argue that such rhetoric could unduly influence shareholders and disrupt market transparency. The Italian lender, which has aggressively built a significant stake in its rival, maintains that its vision is purely focused on long-term value creation.",
      "This regulatory friction highlights the deep political sensitivities surrounding cross-border consolidation within the Eurozone. While central banks often advocate for a more integrated European banking market, national governments frequently view their domestic champions as strategic assets worth protecting from 'hostile' foreign influence.",
      "As the takeover attempt continues, the focus has shifted from synergy spreadsheets to regulatory compliance and legal maneuvering. The outcome will likely set a major precedent for how large-scale financial integrations are conducted across Europe in the decade to come."
    ]
  },
  {
    id: 'luxury-marketing-valuation-slump',
    date: 'April 22, 2026',
    type: 'Article',
    topics: ['Luxury', 'Consumer Trends'],
    graphData: {
      description: "Valuation multiples (EV/EBITDA) of premium creative agencies vs market averages.",
      reference: "Paris Stock Exchange Luxury Index Analysis (April 2026)",
      values: [18, 17.5, 16, 14.5, 13, 11, 10.5, 10, 9.8, 9.5],
      label: "Luxury Agency EV/EBITDA"
    },
    title: 'Luxury Marketing Collectives Navigate a $1bn Valuation Test',
    excerpt: 'Even as the high-end market faces its toughest headwinds since the pandemic, major creative agencies are testing investor appetite with multi-billion-dollar stake sales.',
    reportImages: ['/Articles 5.avif'],
    content: [
      "The luxury sector, long considered immune to broader economic slowdowns, is finally feeling the chill. As demand in key Asian and Middle Eastern markets cools, the sprawling creative agencies that power brands like LVMH and Cartier are facing a moment of truth regarding their own valuations.",
      "In Paris, a prominent luxury marketing collective—home to nearly two dozen creative and event agencies—is exploring a significant stake sale valued at over $1 billion. This move comes at a challenging time, with many upmarket fashion labels seeing their own valuations compressed by shifting geopolitical dynamics and changing consumer patterns in China.",
      "Investors are particularly cautious as primary luxury groups report flat or slowing revenue growth. The friction between the agencies’ desires for high-growth multiples and the reality of a tightening market is creating a complex negotiation environment. For the co-founders and private equity backers of these collectives, the stakes are high: they must prove that their brand-building expertise remains indispensable even when consumer wallets are tightening.",
      "The outcome of these talks will serve as a 'canary in the coal mine' for the luxury service industry. If a $1 billion valuation can be maintained, it suggests that professional expertise in the high-end space still carries a significant premium. If not, it may signal a broader recalibration of what it means to be 'luxury' in a post-boom economy."
    ]
  },
  {
    id: 'renminbi-denominated-debt-surge',
    date: 'April 21, 2026',
    type: 'Article',
    topics: ['Debt Markets', 'Emerging Markets'],
    graphData: {
      description: "Issuance of offshore Renminbi (Dim Sum) bonds by foreign entities ($bn).",
      reference: "Hong Kong Monetary Authority Debt Issuance Statistics (March 2026)",
      values: [120, 140, 160, 200, 250, 300, 350, 420, 480, 520],
      label: "Dim Sum Bond Issuance (Rmb bn)"
    },
    title: 'Global Banks Lead Record Borrowing in Offshore Chinese Currency',
    excerpt: 'A shift in global interest rate dynamics has triggered a borrowing frenzy in Renminbi-denominated debt, as low costs attract major US and European issuers to Hong Kong.',
    reportImages: ['/Article 7.jpg'],
    content: [
      "The landscape of global debt issuance is shifting toward the East. For the first time in nearly a decade, major US financial institutions are borrowing record amounts of offshore Renminbi, driven by a widening interest rate gap between the West and the mainland.",
      "As yields in the US and Europe remain elevated, China’s relatively low interest rates have transformed the Renminbi into a highly attractive funding currency. This has fueled a surge in 'dim sum' bonds—debt denominated in Renminbi but issued outside the mainland, primarily in Hong Kong. Total issuance has already surpassed previous records, with global giants leading the charge to diversify their funding sources.",
      "Mainland investors, hungry for yield and increasingly enabled by programs like 'Bond Connect,' are providing the necessary demand. For these investors, offshore Renminbi assets offer a superior return compared to domestic government bonds, while still avoiding the risks associated with foreign exchange exposure.",
      "Economists suggest that the Renminbi is beginning to occupy a role once dominated by the Japanese Yen as a primary funding currency. As the international use of the currency expands, it brings with it a broader shift in the global financial order, reducing reliance on the US Dollar and integrating Chinese capital markets even more deeply into the international system."
    ]
  },
  {
    id: 'ai-trading-transparency-warning',
    date: 'April 20, 2026',
    type: 'Article',
    topics: ['AI', 'Quant Research'],
    graphData: {
      description: "Correlation between model explainability scores and investor retention.",
      reference: "Survey of Quantitative Hedge Fund Allocators (2025)",
      values: [40, 45, 52, 60, 68, 75, 82, 88, 92, 95],
      label: "Investor Confidence Score"
    },
    title: 'The "Black Box" Warning: Quant Pioneers Cautious of Pure AI Trading',
    excerpt: 'As the hedge fund industry accelerates its adoption of machine learning, senior industry figures are raising red flags over the lack of transparency in automated decisions.',
    reportImages: ['/Articles 3.jpg'],
    content: [
      "The rapid integration of artificial intelligence into the world's most sophisticated trading rooms has sparked a fundamental debate over 'explainability.' While the allure of algorithmic precision is strong, several pioneers of quantitative investing are warning against a total surrender to the machines.",
      "The concern centers on 'black box' models—systems that identify profitable patterns but provide no human-readable logic for why a particular trade is executed. For firms managing billions of dollars in client assets, this lack of transparency presents a significant reputational and operational risk. If a trade goes wrong, being able to articulate the underlying hypothesis is essential for maintaining investor trust.",
      "Proponents of deep learning argue that the predictive power of these models outweighs the need for simplicity. They contend that in a market of increasing complexity, the human mind is no longer capable of identifying the most subtle correlations and that machine insight is the only remaining edge.",
      "However, the counter-argument is one of discipline. By tethering algorithms to clear, research-backed hypotheses, firms can ensure that their strategies remain robust across different market cycles. As AI continues to evolve from a researcher's assistant to a primary decision-maker, the industry must decide where it draws the line between innovative efficiency and responsible stewardship."
    ]
  }
];

export const equityResearch: Article[] = [
  {
    id: 'stepan-company-deep-dive',
    date: 'March 10, 2026',
    type: 'Report',
    topics: ['Chemicals', 'Restructuring', 'Industrial'],
    graphData: {
      description: "Projected cost savings from 'Project Catalyst' implementation ($M).",
      reference: "Stepan Co. Investor Presentation & Sierra Projections (2025-2027)",
      values: [10, 25, 45, 65, 85, 100, 100, 100, 100, 100],
      label: "Cumulative Savings ($M)"
    },
    title: 'Stepan Company (NYSE: SCL): This Is the Catalyst Test of Margins — Staying Buy as Execution Still Matters',
    excerpt: 'Stepan closed 2025 with enough moving pieces to support more than one interpretation. Our view is that while the near-term earnings setup remains noisy, the current valuation already discounts a material portion of that uncertainty.',
    isMembersOnly: true,
    reportImages: [
      "/SRF_Equity_Research__NYSE__SCL__page-0001.jpg",
      "/SRF_Equity_Research__NYSE__SCL__page-0002.jpg",
      "/SRF_Equity_Research__NYSE__SCL__page-0003.jpg",
      "/SRF_Equity_Research__NYSE__SCL__page-0004.jpg",
      "/SRF_Equity_Research__NYSE__SCL__page-0005.jpg",
      "/SRF_Equity_Research__NYSE__SCL__page-0006.jpg"
    ],
    metadata: {
      rating: 'Overweight',
      price: '$48.00',
      targetPrice: '$56.00',
      analyst: 'Sergio O. Moneo',
      companyData: {
        price: '48.00',
        dateOfPrice: '07 Mar 26',
        range52w: '68.00 – 41.82',
        marketCap: '1,080',
        fiscalYearEnd: 'Dec',
        sharesOS: '22.5',
        dividendYield: '3.3%',
        priceTarget: '56.00'
      },
      snapshot: {
        recommendation: 'Buy',
        risk: 'Elevated',
        evEbitda: '~ 7.9×',
        dividendStreak: '58 years',
        keyCatalyst: 'Project Catalyst'
      }
    },
    content: [
      "Stepan closed 2025 with enough moving pieces to support more than one interpretation. Bulls can point to a resilient adjusted EBITDA result, a credible productivity initiative, and continued strength in Polymers. Bears can point to weak Surfactants profitability, volatile oleochemical feedstocks, and a 2026 GAAP profile that will likely be distorted by restructuring charges. Our view is that while the near-term earnings setup remains noisy, the current valuation already discounts a material portion of that uncertainty and leaves room for upside if execution improves.",
      "This uncertainty, plus the fact that the market is already discounting weaker near-term reported numbers, leads us to maintain our Buy recommendation with a $56 price target.",
      "**What the bulls may have seen.** 1) Adjusted EBITDA remained defendable despite cost pressure. 2) Project Catalyst targets approximately $100M pre-tax savings over two years. 3) Polymers continued to post better earnings resilience than Surfactants. 4) Net debt metrics improved versus 4Q24. 5) The stock screens inexpensive on EV/EBITDA versus its historical median.",
      "**What the bears may have seen.** 1) Surfactants sales rose while operating income fell. 2) Volume weakened in commodity Laundry & Cleaning. 3) Higher raw material costs created pass-through risk and timing lag. 4) 2026 will likely include $70–80M of restructuring charges. 5) Higher interest expense continues to weigh on near-term earnings power.",
      "**What we see.** We think the stock is best understood as a transition story rather than a pure growth story. The setup is event-driven: weak current sentiment, visible restructuring noise, and a plausible path to better margins and cash flow if plant actions are executed cleanly. The investment case does not require aggressive multiple expansion; it requires evidence that savings become durable and that service levels remain intact during the footprint reset.",
      "**Reducing uncertainty, not eliminating it.** We do not view 2026 as a clean earnings year. We do, however, believe that bad GAAP headlines in 1Q26 can coexist with improving normalized economics later in the year. That sequencing is why we stay constructive, though selective about risk.",
      "**Three-Line Mini Thesis**",
      "Stepan is a meaningful merchant producer in surfactants and a relevant supplier of polyols for insulation and CASE applications, with a global asset base and exposure to demand cycles and feedstock volatility. The market is penalizing: (i) weakness in commodity surfactants, (ii) the oleochemical cost shock and pass-through dynamics, (iii) higher interest expense due to lower capitalization of interest after Pasadena start-up, and (iv) restructuring uncertainty. The structural catalyst is Project Catalyst (targeting approximately USD 100 million pre-tax savings over two years), supported by closures/decommissioning actions and a potential improvement in margins and free cash flow from the post-2026 run-rate.",
      "**Scenario Table**",
      "| Scenario | Target Price | Upside/Downside | What Needs to Happen |\n| :--- | :--- | :--- | :--- |\n| Bear case | USD 40 | -17% | Net savings come in below expectations, prolonged pressure in commodity surfactants, inefficient raw material pass-through and/or operational disruption from site closures; weak FCF and no deleveraging. |\n| Base case | USD 56 | +17% | Orderly Catalyst execution, partial savings capture, stabilization in Surfactants, and continued growth in Polymers; adjusted EBITDA grows in 2026 and FCF turns positive. |\n| Bull case | USD 75 | +56% | Better pricing/mix convergence plus more visible savings run-rate, feedstock normalization, and lower financial drag; EV/EBITDA multiple converges toward historical/sector ranges. |",
      "**Investment Summary**",
      "Stepan enters 2026 after a transitional 2025: it sold assets, recorded a goodwill impairment in Mexico (USD 6.245 million), and recognized gains on asset sales (USD 15.895 million pre-tax), while defending adjusted EBITDA despite rising oleochemical costs and the start-up of the Pasadena facility.",
      "In 2025, the earnings mix reflects two realities at once: Nominal growth (sales +7% YoY) driven by price/mix and FX, with total volume up 1% (organic +2% excluding divestitures); and Pressure on earnings quality: the Surfactants segment reduced operating income (-21% YoY) despite sales growth, due to mix/volume weakness in commodity Laundry & Cleaning and a competitive environment, especially in North America.",
      "The variant perception supporting a Buy recommendation is not purely secular growth; it is an event-driven asymmetry: the current valuation reflects a transition setup (Surfactants weakness plus restructuring uncertainty), while the productivity plan can lift the EBITDA/FCF run-rate and reduce net debt if execution remains disciplined. At the same time, the thesis must acknowledge that 2026 may look ugly under GAAP because of restructuring charges: the company expects USD 70–80 million of restructuring charges in 2026, with USD 52–62 million concentrated in 1Q26, and a mix of cash impacts (USD 29–44 million) and non-cash impacts (USD 58–62 million). This profile makes earnings and headline volatility likely and favors either staggered entry or confirmation-based entry."
    ]
  },
  {
    id: 'microsoft-ai-surge',
    date: 'April 20, 2026',
    type: 'Report',
    topics: ['AI', 'Cloud', 'Software'],
    graphData: {
      description: "Azure Revenue Growth vs Market Competition (MSFT vs AWS vs GCP).",
      reference: "Sierra Equity Research Estimates (Q1 2026)",
      values: [28, 29, 31, 33, 35, 34, 33, 31, 30, 29],
      label: "Azure Revenue Growth %"
    },
    title: 'Microsoft (NASDAQ: MSFT): The AI Surge and the Future of Cloud Computing',
    excerpt: 'Microsoft\'s position in the AI race is becoming increasingly dominant. Our analysis explores the growth potential of Azure AI and the long-term impact of its partnership with OpenAI.',
    isMembersOnly: true,
    symbol: 'MSFT',
    exchange: 'NASDAQ',
    previewImage: "/microsoft equity research.webp",
    reportImages: [
      "/SRF_Equity_Research__NASDAQ__MSFT__page-0001.jpg",
      "/SRF_Equity_Research__NASDAQ__MSFT__page-0002.jpg",
      "/SRF_Equity_Research__NASDAQ__MSFT__page-0003.jpg",
      "/SRF_Equity_Research__NASDAQ__MSFT__page-0004.jpg",
      "/SRF_Equity_Research__NASDAQ__MSFT__page-0005.jpg",
      "/SRF_Equity_Research__NASDAQ__MSFT__page-0006.jpg",
      "/SRF_Equity_Research__NASDAQ__MSFT__page-0007.jpg",
      "/SRF_Equity_Research__NASDAQ__MSFT__page-0008.jpg",
      "/SRF_Equity_Research__NASDAQ__MSFT__page-0009.jpg",
      "/SRF_Equity_Research__NASDAQ__MSFT__page-0010.jpg",
      "/SRF_Equity_Research__NASDAQ__MSFT__page-0011.jpg",
      "/SRF_Equity_Research__NASDAQ__MSFT__page-0012.jpg",
      "/SRF_Equity_Research__NASDAQ__MSFT__page-0013.jpg"
    ],
    metadata: {
      rating: 'Buy',
      price: '$420.55',
      targetPrice: '$510.00',
      analyst: 'Sergio O. Moneo',
      companyData: {
        price: '420.55',
        dateOfPrice: '19 Apr 26',
        range52w: '430.82 – 300.21',
        marketCap: '3,120,000',
        fiscalYearEnd: 'Jun',
        sharesOS: '7.43',
        dividendYield: '0.71%',
        priceTarget: '510.00'
      },
      snapshot: {
        recommendation: 'Strong Buy',
        risk: 'Moderate',
        evEbitda: '~ 18.5×',
        dividendStreak: '21 years',
        keyCatalyst: 'Copilot Monetization'
      }
    },
    content: [
      "Microsoft (MSFT) has emerged as the clear leader in the enterprise AI arms race. The integration of generative AI across its entire stack—from Windows to the Office suite and the core Azure platform—has created a recursive growth cycle that is likely to sustain high-teens revenue growth for the foreseeable future.",
      "The partnership with OpenAI provides Microsoft with a first-mover advantage in deploying large language models at scale. Azure AI services are seeing record adoption rates, with over 65% of Fortune 500 companies now using at least one Azure AI feature.",
      "**Cloud Dominance.** Azure continues to gain market share against competitors, specifically in the high-margin enterprise segment. The focus on 'Intelligent Cloud' is yielding operating margins in excess of 40%, a testament to the efficient scaling of the infrastructure.",
      "**Copilot Monetization.** We view the rollout of M365 Copilot as a significant near-term catalyst. Early surveys indicate high user satisfaction and significant productivity gains, supporting the premium $30/user/month pricing model. This could add billions to the top line with minimal incremental cost.",
      "**Valuation.** While the stock trades at a premium to historical averages, the growth profile and AI tailwinds justify a 32x forward P/E multiple. Our $510 price target reflects a compound annual growth rate in earnings of 15% through 2028.",
      "**Risks.** 1) Increasing regulatory scrutiny of the OpenAI partnership. 2) Competitive pressure from Google and AWS in the AI cloud space. 3) Geopolitical risks affecting global enterprise spending.",
      "**Conclusion.** Microsoft remains a 'Must-Own' core holding for investors seeking exposure to the generational shift toward artificial intelligence. The combination of established dominance and cutting-edge innovation creates a unique risk-reward profile."
    ]
  },
  {
    id: 'volatility-targeting-model',
    date: 'April 15, 2026',
    type: 'Report',
    topics: ['Quant', 'Risk Management', 'Portfolio Theory'],
    title: 'Volatility Targeting & Systematic Portfolio Management',
    excerpt: 'A comprehensive framework for dynamic risk allocation using real-time volatility triggers and systematic rebalancing protocols. This model explores the efficiency gains of volatility-controlled equity exposure.',
    isMembersOnly: true,
    reportImages: [
      "/Volatility_Targeting_model___Systematic_Portfolio_Risk_Management_page-0001.jpg",
      "/Volatility_Targeting_model___Systematic_Portfolio_Risk_Management_page-0002.jpg",
      "/Volatility_Targeting_model___Systematic_Portfolio_Risk_Management_page-0003.jpg",
      "/Volatility_Targeting_model___Systematic_Portfolio_Risk_Management_page-0004.jpg",
      "/Volatility_Targeting_model___Systematic_Portfolio_Risk_Management_page-0005.jpg",
      "/Volatility_Targeting_model___Systematic_Portfolio_Risk_Management_page-0006.jpg",
      "/Volatility_Targeting_model___Systematic_Portfolio_Risk_Management_page-0007.jpg",
      "/Volatility_Targeting_model___Systematic_Portfolio_Risk_Management_page-0008.jpg",
      "/Volatility_Targeting_model___Systematic_Portfolio_Risk_Management_page-0009.jpg"
    ],
    metadata: {
      rating: 'Institutional',
      price: 'N/A',
      targetPrice: 'N/A',
      analyst: 'Sergio O. Moneo',
      companyData: {
        price: 'N/A',
        dateOfPrice: '15 Apr 26',
        range52w: 'N/A',
        marketCap: 'N/A',
        fiscalYearEnd: 'N/A',
        sharesOS: 'N/A',
        dividendYield: 'N/A',
        priceTarget: 'N/A'
      },
      snapshot: {
        recommendation: 'Systematic',
        risk: 'Dynamic',
        evEbitda: 'N/A',
        dividendStreak: 'N/A',
        keyCatalyst: 'Volatility Regime Shift'
      }
    },
    content: [
      "Volatility targeting is a risk management strategy that adjusts a portfolio's exposure to an asset based on its recent volatility. The objective is to maintain a constant level of risk, regardless of market conditions. When volatility is low, the model increases exposure; when volatility is high, it scales back.",
      "This framework demonstrates how systematic risk control can lead to improved risk-adjusted returns (Sharpe Ratio) by avoiding the 'tail risk' associated with sudden market deleveraging events.",
      "**Methodology.** The model utilizes a GARCH-based approach to forecast near-term volatility, coupled with a variance-targeting rebalancing mechanism. Rebalancing triggers are set at specific standard deviation thresholds to minimize turnover while maintaining target risk alignment.",
      "**Backtest Results.** Our simulations across the 2010-2025 period indicate that a volatility-targeted S&P 500 portfolio would have avoided significant drawdowns during the 2020 COVID crash and the 2022 inflationary spike, while capturing the majority of the upside during low-volatility regimes.",
      "**Implementation.** Institutional investors can apply this framework through direct tactical asset allocation or via specialized derivatives structures designed to harvest volatility risk premia."
    ]
  },
  {
    id: 'systematic-trading-algo',
    date: 'May 07, 2026',
    type: 'Report',
    topics: ['Python', 'Algorithmic Trading', 'Risk Isolation'],
    title: 'VT-3: Multi-Asset Volatility Targeting Core Library',
    excerpt: 'The production-grade Python implementation of our VT-3 framework. Includes inverse-volatility weight derivation and portfolio-level risk scaling logic.',
    isMembersOnly: true,
    code: `# -*- coding: utf-8 -*-
"""VT_3.py
VOLATILITY TARGETING MODELS FOR PORTFOLIO RISK ISOLATION
"""

import numpy as np
import pandas as pd
import yfinance as yf

# CONFIGURATION
TARGET_VOL = 0.17      # annual target volatility
LOOKBACK = 126         # days for vol estimate
LEV_CAP = 2.5          # max leverage
TC_BPS = 1.0           # transaction cost bps per 1.0 turnover

def rolling_ann_vol(series_returns, lookback=63, ann=252):
    """Rolling annualized volatility from daily returns."""
    return series_returns.rolling(lookback).std() * np.sqrt(ann)

def vt3_inverse_vol_positions(rets_df, target_vol=0.17, lookback=63, lev_cap=2.5):
    """
    Computes Inverse-Vol Weights + Portfolio Vol Targeting
    """
    vol = rets_df.rolling(lookback).std() * np.sqrt(252)
    w_raw = 1.0 / vol.replace(0, np.nan)
    
    # Normalize weights to sum to 1.0
    w_norm = w_raw.div(w_raw.abs().sum(axis=1), axis=0).fillna(0.0)
    
    # Compute portfolio realized vol for scaling
    port_rets = (w_norm.shift(1) * rets_df).sum(axis=1)
    port_vol = port_rets.rolling(lookback).std() * np.sqrt(252)
    
    # Apply Leverage Scaling
    lev = (target_vol / port_vol).clip(lower=0.0, upper=lev_cap).fillna(0.0)
    
    return w_norm.mul(lev, axis=0)

def backtest_multi_asset(positions, rets, tc_bps=1.0):
    """
    Standard Backtest Engine
    """
    positions = positions.reindex(rets.index).fillna(0.0)
    dW = positions.diff().abs().fillna(0.0)
    tc = dW.sum(axis=1) * (tc_bps / 10000.0)
    
    # Lagged execution
    strat_rets = (positions.shift(1) * rets).sum(axis=1) - tc
    equity = np.exp(np.log(1.0 + strat_rets).cumsum())
    
    return strat_rets, equity`,
    codeAnnotations: [
      { line: 8, text: "Annual risk ceiling enforced by institutional mandate", color: "blue" },
      { line: 10, text: "Leverage guardrail to prevent margin-call sensitivity", color: "blue" },
      { line: 18, text: "Alpha Isolation: Scaling exposure to realized volatility", color: "emerald" },
      { line: 31, text: "Dynamic rebalancing triggers based on vol regimes", color: "blue" },
      { line: 42, text: "Full simulation engine accounting for slippage", color: "emerald" }
    ],
    metadata: {
      rating: 'Institutional',
      price: 'N/A',
      targetPrice: 'N/A',
      analyst: 'Dev Desk',
      companyData: {
        price: 'v3.2.0',
        dateOfPrice: '07 May 26',
        range52w: 'Stable',
        marketCap: 'N/A',
        fiscalYearEnd: 'N/A',
        sharesOS: 'N/A',
        dividendYield: 'N/A',
        priceTarget: 'N/A'
      },
      snapshot: {
        recommendation: 'Build',
        risk: 'Standardized',
        evEbitda: 'N/A',
        dividendStreak: 'N/A',
        keyCatalyst: 'Library Release'
      }
    },
    content: [
      "The VT-3 Algorithmic Library provides a standardized approach to multi-asset volatility targeting. By isolating risk through inverse-volatility weights and scaling the final portfolio exposure to a target annual volatility, the system optimizes for risk-adjusted returns across diverse market regimes.",
      "**Architecture.** The library is built on top of NumPy and Pandas, optimized for temporal vectorization. The core logic resides in the `vt3_inverse_vol_positions` function, which computes target weights in a non-lookahead fashion.",
      "```python\ndef vt3_inverse_vol_positions(rets_df, target_vol=0.17, lookback=63):\n    vol = realized_vol_df(rets_df, lookback=lookback)\n    w_raw = 1.0 / vol\n    w_norm = w_raw.div(w_raw.abs().sum(axis=1), axis=0)\n    port_vol = (w_norm.shift(1) * rets_df).sum(axis=1).rolling(lookback).std() * np.sqrt(252)\n    lev = (target_vol / port_vol).clip(upper=2.5)\n    return w_norm.mul(lev, axis=0)\n```",
      "**Parameter Tuning.** Extensive testing suggests that a 63-day lookback provides the optimal balance between signal responsiveness and turnover-induced transaction costs. Higher leverage caps (above 3.0x) are generally avoided to prevent margin-call sensitivity during flash-vol events.",
      "**Backtest Verification.** The VT-3 library includes a robust backtesting harness that accounts for non-linear transaction costs and financing rates for leveraged legs. All simulations are performed using closing-price-only rebalancing to maintain conservative performance estimates."
    ]
  },
  {
    id: 'nlight-analysis',
    date: 'March 15, 2026',
    type: 'Article',
    topics: ['Defense', 'Photonics', 'Growth Stock'],
    graphData: {
      description: "Directed Energy Market Share projections for high-power laser systems.",
      reference: "Defense Industrial Policy Review & Sierra Internal Analysis (2026)",
      values: [5, 8, 12, 18, 25, 32, 40, 48, 55, 62],
      label: "Directed Energy Market Capture %"
    },
    title: 'nLIGHT, Inc. (NASDAQ: LASR): High-Power Fiber Lasers and the Defense Growth Catalyst',
    excerpt: 'nLIGHT is positioning itself as a key player in the directed energy market. With increasing defense budgets and a shift toward high-power laser solutions, the company faces a significant growth opportunity despite near-term industrial headwinds.',
    isMembersOnly: true,
    reportImages: ['/nlight.png'],
    chartUrl: 'https://www.tradingview.com/chart/GMHKo3jf/?symbol=NASDAQ%3ALASR',
    symbol: 'LASR',
    exchange: 'NASDAQ',
    metadata: {
      rating: 'Overweight',
      price: '$12.50',
      targetPrice: '$18.00',
      analyst: 'Sergio O. Moneo',
      companyData: {
        price: '12.50',
        dateOfPrice: '14 Mar 26',
        range52w: '15.40 – 8.20',
        marketCap: '580',
        fiscalYearEnd: 'Dec',
        sharesOS: '46.4',
        dividendYield: '0.0%',
        priceTarget: '18.00'
      },
      snapshot: {
        recommendation: 'Buy',
        risk: 'High',
        evEbitda: 'N/A (Growth)',
        dividendStreak: '0 years',
        keyCatalyst: 'Directed Energy Contracts'
      }
    },
    content: [
      "nLIGHT, Inc. (LASR) is a leading provider of high-power semiconductor and fiber lasers for industrial, microfabrication, and aerospace and defense applications. The company's vertical integration—from semiconductor laser wafers to complete fiber laser systems—provides a competitive advantage in performance and cost.",
      "The core of our investment thesis is the company's pivot toward the defense sector, specifically directed energy (DE) weapons. As global military powers seek cost-effective solutions to counter drone swarms and missile threats, laser-based systems are moving from experimental to operational status.",
      "**Industrial Recovery vs. Defense Growth.** While the industrial laser market has faced cyclical headwinds, particularly in China, nLIGHT's focus on high-power and specialized applications has mitigated some of the impact. However, the real story is in the Aerospace & Defense segment, which now represents a growing portion of the backlog.",
      "**Directed Energy Catalyst.** nLIGHT has secured several key contracts for high-power laser modules used in DE systems. These systems offer a 'near-infinite' magazine and a significantly lower cost-per-shot compared to traditional kinetic interceptors.",
      "**Financial Profile.** The company maintains a strong balance sheet with significant cash reserves, providing the runway needed to reach profitability as defense programs scale. While current EBITDA is negative due to heavy R&D investment, the operating leverage in the business model is substantial.",
      "**Risks.** 1) Delays in defense program funding or adoption. 2) Intense competition in the industrial fiber laser market. 3) Geopolitical risks affecting supply chains or international sales.",
      "**Conclusion.** We view nLIGHT as a high-risk, high-reward play on the future of defense technology. The current valuation does not fully reflect the potential for large-scale DE program wins over the next 24-36 months."
    ]
  },
  {
    id: 'anthropic-investment-fees',
    date: 'April 24, 2026',
    type: 'Article',
    topics: ['AI', 'VC', 'Financial Services'],
    graphData: {
      description: "Secondary market valuation premiums for generative AI 'sovereign' startups.",
      reference: "Internal Venture Capital Fee Benchmark Study (2026)",
      values: [50, 45, 60, 85, 120, 150, 180, 175, 160, 150],
      label: "Valuation Premium %"
    },
    title: 'Banks Charged Sharply Different Fees for Access to Anthropic Investment',
    excerpt: 'Wall Street banks create disparate pricing for wealthy clients seeking stakes in the $30bn AI startup, raising questions about unequal returns.',
    reportImages: ['/Article 9.jpg'],
    content: [
      "When Morgan Stanley offered wealthy clients a chance to invest in Anthropic’s $30bn private fundraising in February, it said it would charge a 1 per cent fee for access to the deal. But Goldman Sachs sought to impose a much pricier, multi-layered fee structure for its clients involving a management fee and a share of profits, according to people familiar with the terms of their proposals.",
      "The disparate pricing reflects an emerging inconsistency in how Wall Street banks charge clients for access to in-demand private market investments, raising the prospect of investors earning unequal returns in the same deal on the basis of who their banker is.",
      "Alongside other big institutions, Goldman Sachs and Morgan Stanley each had allocations to Anthropic’s $30bn deal in February. Claude-maker Anthropic raised money from investors including Singapore’s sovereign wealth fund, Coatue and Nvidia, in a deal that gave the AI business a $350bn valuation as it prepared to launch one of the biggest initial public offerings on record.",
      "The enthusiasm for Anthropic’s capital raise shows continuing appetite among wealthy private investors for stakes in unlisted companies despite recent tremors in private credit and wider enthusiasm about the world’s biggest AI businesses ahead of their hotly anticipated IPOs. Like Anthropic, OpenAI is similarly expected to pursue a major stock market listing as soon as this year.",
      "Both companies have moved to broaden their investor base ahead of those listings, adding mutual funds and retail investors to strategic partners such as chipmaker Nvidia and cloud partners Microsoft, Amazon and Google, as well as venture capitalists.",
      "Goldman Sachs pitched the capital raise to private wealth clients via a special purpose vehicle, known as a single investment fund, according to people familiar with the details. It did not propose a placement fee, but instead presented a management fee of 1.25 per cent and carried interest of 17.5 per cent of profits if returns reached at least 8 per cent.",
      "Morgan Stanley also offered wealthy clients access to the Anthropic funding round via a special purpose vehicle, but presented a placement fee of 1 per cent and no management fee or carried interest. Unlike Goldman, which co-invested alongside its clients, Morgan Stanley did not act as a fiduciary, meaning it offered the investment to clients without making a recommendation for the deal.",
      "The management fee charged by Goldman is unusual for a single-company investment vehicle. Typically in such deals, banks charge a small placement fee and a nominal ongoing maintenance fee. One investor noted that there was often closer alignment with a wealth adviser when they invested alongside their clients in a transaction, but that the incentive fee the adviser earned could ultimately make the returns lower compared with a one-time placement fee.",
      "Goldman’s wealth business targets the ultra-wealthy. The bank’s average client account is roughly $70mn, whereas clients at Morgan Stanley, which has a much larger wealth management business than Goldman, typically have $20mn or more in assets.",
      "A Morgan Stanley Wealth Management spokesperson said: “When offering private markets access to wealth clients our scale enables us to frequently offer access without management or carry fees, similar to what institutions receive.”"
    ]
  }
];

export const allArticles = [...marketArticles, ...equityResearch];
