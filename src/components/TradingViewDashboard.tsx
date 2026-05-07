import React, { useState, useEffect } from 'react';
import TradingViewWidget from './TradingViewWidget';
import { Loader2 } from 'lucide-react';

const TABS = [
  'Overview', 'Financials', 'News', 'Technicals', 'Forecasts'
];

const RECENT_BUYS = [
  { 
    name: 'nLIGHT, Inc.', 
    symbol: 'LASR', 
    exchange: 'NASDAQ', 
    logo: '/LASR.webp', 
    type: 'stock'
  },
  { name: 'Microsoft Corp.', symbol: 'MSFT', exchange: 'NASDAQ', logo: '/MSFT.png', type: 'stock' },
  { name: 'Bitcoin', symbol: 'BTCUSD', exchange: 'BITSTAMP', logo: '/BTC.png', type: 'crypto' },
  { name: 'Vanguard S&P 500', symbol: 'VOO', exchange: 'AMEX', logo: '/VOO.png', type: 'etf' },
  { name: 'Oklo Inc.', symbol: 'OKLO', exchange: 'NYSE', logo: '/OKLO.jpg', type: 'stock' },
  { name: 'Invesco RSP', symbol: 'RSP', exchange: 'AMEX', logo: '/RSP.png', type: 'etf' },
  { name: 'iShares China', symbol: 'TCHI', exchange: 'NASDAQ', logo: '/TCHI.png', type: 'etf' },
  { name: 'Candel Therapeutics', symbol: 'CADL', exchange: 'NASDAQ', logo: '/CADL.png', type: 'stock' },
];

export default function TradingViewDashboard() {
  const [activeTab, setActiveTab] = useState('Overview');
  const [activeStock, setActiveStock] = useState<any>(RECENT_BUYS[0]);

  const getWidgetType = (tab: string): any => {
    switch (tab) {
      case 'Overview': return 'chart';
      case 'Financials': return 'financials';
      case 'News': return 'news';
      case 'Technicals': return 'technical';
      case 'Forecasts': return 'profile';
      default: return 'chart';
    }
  };

  return (
    <div className="mb-12 md:mb-16 relative z-10">
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-4 md:p-6 border border-gray-100 shadow-xl w-full">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-intense-indigo mb-1">Recent Buys Analysis</h2>
            <p className="text-intense-indigo/60 text-xs md:text-sm">
              <span className="italic">Technical</span> analysis of recent acquisitions.
            </p>
          </div>
          
          <div className="flex flex-wrap bg-gray-50 p-1 rounded-xl self-start border border-gray-100 max-w-full">
            {RECENT_BUYS.map((stock) => (
              <button 
                key={stock.symbol}
                onClick={() => setActiveStock(stock)}
                className={`px-3 py-1.5 text-[9px] font-bold rounded-lg transition-all uppercase tracking-wider ${
                  activeStock.symbol === stock.symbol 
                    ? 'bg-white text-intense-indigo shadow-sm' 
                    : 'text-intense-indigo/30 hover:text-intense-indigo'
                }`}
              >
                {stock.symbol}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col mb-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center overflow-hidden shrink-0 shadow-sm">
                <img src={activeStock.logo} alt={activeStock.name} className="w-8 h-8 object-contain" referrerPolicy="no-referrer" />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-intense-indigo leading-tight">{activeStock.name}</h2>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="px-1.5 py-0.5 bg-intense-indigo/5 text-intense-indigo/60 text-[10px] font-bold rounded uppercase tracking-wider">{activeStock.symbol}</span>
                  <span className="text-[10px] text-intense-indigo/20">•</span>
                  <span className="text-[10px] font-medium text-intense-indigo/40">{activeStock.exchange}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 md:gap-6 border-b border-gray-100">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-[11px] font-bold pb-2.5 border-b-2 transition-all relative ${
                  activeTab === tab 
                    ? 'border-intense-indigo text-intense-indigo' 
                    : 'border-transparent text-intense-indigo/30 hover:text-intense-indigo/60'
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-intense-indigo"></span>
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="h-[500px] w-full relative overflow-hidden bg-gray-50 rounded-xl border border-gray-100">
          <div className="w-full h-full">
            <TradingViewWidget 
              key={`${activeStock.symbol}-${activeTab}`}
              widgetType={getWidgetType(activeTab)}
              symbol={activeStock.symbol}
              exchange={activeStock.exchange}
            />
          </div>
        </div>
        
        <div className="mt-4 flex items-center justify-between text-[9px] font-bold text-intense-indigo/20 uppercase tracking-[0.2em]">
          <span>Real-time Market Intelligence</span>
          <span>Powered by TradingView</span>
        </div>
      </div>
    </div>
  );
}
