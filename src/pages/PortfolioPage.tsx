import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, RefreshCw, PieChart as PieChartIcon, TrendingUp, AlertTriangle, ArrowUpRight, ArrowDownRight, Globe, Settings, Calendar } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend, LineChart, Line, XAxis, YAxis, CartesianGrid, AreaChart, Area, ReferenceLine } from 'recharts';
import { motion, AnimatePresence } from 'motion/react';
import CTABox from '../components/CTABox';
import TradingViewDashboard from '../components/TradingViewDashboard';
import { useAuth } from '../components/AuthContext';
import MembershipModal from '../components/MembershipModal';

const assetsData = [
  { name: 'RSP', symbol: 'RSP', value: 15645.21, allocation: 16.28, gain: 644.31, color: '#3b82f6', logo: '/RSP.png' },
  { name: 'CADL', symbol: 'CADL', value: 15309.40, allocation: 15.93, gain: 5309.39, color: '#4fd1ed', logo: '/CADL.png' },
  { name: 'SX5E', symbol: 'SX5E', value: 11847.62, allocation: 12.33, gain: 479.90, color: '#1800ad' },
  { name: 'OKLO', symbol: 'OKLO', value: 11077.56, allocation: 11.53, gain: 1075.68, color: '#a855f7', logo: '/OKLO.jpg' },
  { name: 'TCHI', symbol: 'TCHI', value: 10410.50, allocation: 10.83, gain: 411.34, color: '#3b82f6', logo: '/TCHI.png' },
  { name: 'LASR', symbol: 'LASR', value: 10392.65, allocation: 10.81, gain: 392.73, color: '#1800ad', logo: '/LASR.webp' },
  { name: 'MSFT', symbol: 'MSFT', value: 10165.20, allocation: 10.58, gain: 166.79, color: '#a855f7', logo: '/MSFT.png' },
  { name: 'BTCUSD', symbol: 'BTC', value: 5867.14, allocation: 6.10, gain: 867.08, color: '#f59e0b', logo: '/BTC.png' },
  { name: 'VOO', symbol: 'VOO', value: 5390.26, allocation: 5.61, gain: 389.54, color: '#22c55e', logo: '/VOO.png' },
];

const assetTypesData = [
  { name: 'Stock', value: 46944.81, allocation: 48.86, gain: 6944.59, color: '#3b82f6' },
  { name: 'Fund', value: 31445.98, allocation: 32.73, gain: 1445.20, color: '#4fd1ed' },
  { name: 'Index', value: 11821.68, allocation: 12.31, gain: 453.96, color: '#f97316' },
  { name: 'Crypto', value: 5858.03, allocation: 6.10, gain: 857.97, color: '#eab308' },
];

const sectorsData = [
  { name: 'Miscellaneous', value: 31445.98, allocation: 32.72, gain: 1445.20, color: '#3b82f6' },
  { name: 'No sector', value: 17701.84, allocation: 18.42, gain: 1334.06, color: '#4fd1ed' },
  { name: 'Health Technology', value: 15309.40, allocation: 15.93, gain: 5309.39, color: '#f97316' },
  { name: 'Producer Manufacturing', value: 11077.56, allocation: 11.53, gain: 1075.68, color: '#a855f7' },
  { name: 'Electronic Technology', value: 10392.65, allocation: 10.82, gain: 392.73, color: '#eab308' },
  { name: 'Technology Services', value: 10165.20, allocation: 10.58, gain: 166.79, color: '#60a5fa' },
];

const currencyData = [
  { name: 'USD', value: 84247.31, allocation: 87.70, gain: 9246.26, color: '#3b82f6' },
  { name: 'EUR', value: 11814.72, allocation: 12.30, gain: 447.00, color: '#4fd1ed' },
];

interface RatioSliderProps {
  key?: number | string;
  title: string;
  subtitle: string;
  value: number;
  benchmark: number;
  max: number;
  benchmarkLabel: string;
  colorType: 'grey' | 'gradient';
}

const RatioSlider = ({ title, subtitle, value, benchmark, max, benchmarkLabel, colorType }: RatioSliderProps) => {
  const valuePos = (value / max) * 100;
  const benchPos = (benchmark / max) * 100;
  
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col">
        <h4 className="text-lg font-bold text-gray-900">{title}</h4>
        <p className="text-[11px] text-gray-500 font-medium leading-tight">{subtitle}</p>
      </div>
      
      <div className="relative pt-4 pb-3 px-1">
        {/* Track Label Min/Max */}
        <div className="absolute top-0 left-0 text-[9px] font-bold text-gray-400 opacity-70">0</div>
        <div className="absolute top-0 right-0 text-[9px] font-bold text-gray-400 opacity-70">{max}</div>
        
        {/* Value Marker Pill */}
        <div 
          className="absolute top-[-3px] transform -translate-x-1/2 z-10"
          style={{ left: `${valuePos}%` }}
        >
          <div className="bg-[#1a1a1a] text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow-lg border border-gray-800">
            {value.toFixed(3)}
          </div>
          <div className="w-1.5 h-1.5 bg-black rounded-full mx-auto mt-0.5 border border-white"></div>
        </div>

        {/* Benchmark Marker Below */}
        <div 
          className="absolute bottom-[-10px] transform -translate-x-1/2 flex flex-col items-center"
          style={{ left: `${benchPos}%` }}
        >
          <div className="w-1 h-1 bg-gray-400 rounded-full mb-0.5 border border-white"></div>
          <div className="bg-gray-100 text-gray-500 text-[7px] font-black px-1 py-0.5 rounded uppercase tracking-tighter shadow-sm border border-gray-200">
            {benchmarkLabel}
          </div>
        </div>
        
        {/* Main Slider Track */}
        <div className="w-full h-1 bg-gray-100 rounded-full relative overflow-hidden">
          {colorType === 'gradient' && (
            <div className="absolute inset-0 bg-gradient-to-r from-rose-500 via-orange-400 via-yellow-400 to-emerald-500 opacity-80"></div>
          )}
        </div>
      </div>
    </div>
  );
};

const ContinentMap = ({ data }: { data: { label: string, value: number }[] }) => {
  return (
    <div className="flex flex-row items-center gap-4">
      <div className="w-[140px] shrink-0">
        <img 
          src="/world-map-tech.png" 
          alt="Geographic Exposure Map" 
          className="w-full h-auto opacity-90 drop-shadow-[0_2px_4px_rgba(59,130,246,0.3)]"
          referrerPolicy="no-referrer"
          onError={(e) => {
            e.currentTarget.src = 'https://images.unsplash.com/photo-1589519160732-57fc498494f8?q=80&w=500&auto=format&fit=crop';
          }}
        />
      </div>
      
      <div className="flex-grow space-y-2">
        {data.map((item, idx) => (
          <div key={idx} className="flex justify-between items-center tabular-nums">
            <span className="text-[11px] font-semibold text-gray-500 leading-none">{item.label}</span>
            <span className="text-[11px] font-bold text-gray-800 leading-none">{item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#1a1a1a] p-3 rounded-xl shadow-2xl border border-gray-800">
        <p className="text-white font-bold text-sm">
          {payload[0].value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} <span className="text-gray-400 font-normal">USD</span>
        </p>
        <p className="text-gray-500 text-[11px] mt-1 font-medium">{label} '26</p>
      </div>
    );
  }
  return null;
};

export default function PortfolioPage() {
  const navigate = useNavigate();
  const { subscriptionTier } = useAuth();
  const [activeTab, setActiveTab] = React.useState<'assets' | 'types' | 'sectors' | 'currency'>('assets');
  const [showMembership, setShowMembership] = useState(false);
  
  const currentData = activeTab === 'assets' ? assetsData : 
                      activeTab === 'types' ? assetTypesData : 
                      activeTab === 'sectors' ? sectorsData : currencyData;
  
  const centerLabel = activeTab === 'assets' ? 'Assets' : 
                      activeTab === 'types' ? 'Types' : 
                      activeTab === 'sectors' ? 'Sectors' : 'Currencies';
  const centerValue = currentData.length;

  const profitChartData = [
    { date: "10 Mar", value: 0 },
    { date: "11 Mar", value: -1200 },
    { date: "12 Mar", value: -2200 },
    { date: "13 Mar", value: -2800 },
    { date: "14 Mar", value: -200 },
    { date: "15 Mar", value: 1200 },
    { date: "16 Mar", value: 1800 },
    { date: "17 Mar", value: -500 },
    { date: "18 Mar", value: -1500 },
    { date: "19 Mar", value: -4500 },
    { date: "20 Mar", value: -3000 },
    { date: "21 Mar", value: -3800 },
    { date: "22 Mar", value: -3200 },
    { date: "23 Mar", value: -2000 },
    { date: "24 Mar", value: -5000 },
    { date: "25 Mar", value: -6000 },
    { date: "26 Mar", value: -9000 },
    { date: "28 Mar", value: -11000 },
    { date: "1 Apr",  value: -6000 },
    { date: "3 Apr",  value: -5500 },
    { date: "5 Apr",  value: -5500 },
    { date: "7 Apr",  value: -6500 },
    { date: "8 Apr",  value: -4500 },
    { date: "10 Apr", value: -4800 },
    { date: "12 Apr", value: -3500 },
    { date: "15 Apr", value: 1000 },
    { date: "17 Apr", value: 3500 },
    { date: "18 Apr", value: 5500 },
    { date: "20 Apr", value: 7500 },
    { date: "21 Apr", value: 6500 },
    { date: "22 Apr", value: 10500 },
    { date: "23 Apr", value: 9644.43 },
  ];

  const riskFactors = [
    { name: 'Concentration', value: 65, color: '#f59e0b', description: 'High exposure to Tech' },
    { name: 'Volatility', value: 42, color: '#3b82f6', description: 'Moderate daily swings' },
    { name: 'Diversification', value: 78, color: '#10b981', description: 'Good sector spread' },
  ];

  const topGainers = [
    { symbol: 'SX5E', change: '+2.63%', price: '4,892.45' },
    { symbol: 'CADL', logo: '/CADL.png', change: '+1.86%', price: '$1.45' },
    { symbol: 'BTC', logo: '/BTC.png', change: '+1.75%', price: '$64,280' },
    { symbol: 'RSP', logo: '/RSP.png', change: '+0.79%', price: '$162.55' },
    { symbol: 'VOO', logo: '/VOO.png', change: '+0.78%', price: '$478.12' },
  ];

  const topLosers = [
    { symbol: 'LASR', logo: '/LASR.webp', change: '-3.54%', price: '$10.45' },
    { symbol: 'MSFT', logo: '/MSFT.png', change: '-0.54%', price: '$420.12' },
    { symbol: 'OKLO', logo: '/OKLO.jpg', change: '-0.32%', price: '$18.15' },
  ];

  const continentExposure = [
    { label: 'United States', value: 70.7 },
    { label: 'Europe', value: 12.3 },
    { label: 'Asia', value: 10.8 },
    { label: 'Global Crypto', value: 6.1 },
  ];

  const holdingsPerformanceData = [
    { name: 'CADL', symbol: 'CADL', logo: '/CADL.png', gain: 53.09 },
    { name: 'BTCUSD', symbol: 'BTC', logo: '/BTC.png', gain: 17.44 },
    { name: 'OKLO', symbol: 'OKLO', logo: '/OKLO.jpg', gain: 10.75 },
    { name: 'VOO', symbol: 'VOO', logo: '/VOO.png', gain: 7.79 },
    { name: 'RSP', symbol: 'RSP', logo: '/RSP.png', gain: 4.30 },
    { name: 'TCHI', symbol: 'TCHI', logo: '/TCHI.png', gain: 4.11 },
    { name: 'SX5E', symbol: 'SX5E', gain: 4.04 },
    { name: 'LASR', symbol: 'LASR', logo: '/LASR.webp', gain: 3.93 },
    { name: 'MSFT', symbol: 'MSFT', logo: '/MSFT.png', gain: 1.67 },
  ];

  const riskRatios = [
    { title: 'Beta', subtitle: 'More risks and more profitability', value: 1.261, benchmark: 1.0, max: 2, benchmarkLabel: 'MARKET', colorType: 'grey' as const },
    { title: 'Sharpe ratio', subtitle: 'Portfolio is alarming', value: 0.391, benchmark: 1.0, max: 3, benchmarkLabel: 'SPX', colorType: 'gradient' as const },
    { title: 'Sortino ratio', subtitle: 'Portfolio is alarming', value: 0.88, benchmark: 1.25, max: 5, benchmarkLabel: 'SPX', colorType: 'gradient' as const },
  ];

  const navigateToJoin = () => navigate('/join');

  return (
    <>
      <main className="flex-grow flex flex-col max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[2cm] w-full pb-5 lg:pb-8 pt-[112px] lg:pt-[128px] font-sans">
        <div className="w-full relative">
          {/* Background Decorative Graph */}
          <div className="absolute top-[-150px] left-[-2rem] right-[-2rem] h-[700px] overflow-hidden pointer-events-none z-0 opacity-[0.12] select-none">
            <svg width="100%" height="100%" viewBox="0 0 1200 400" preserveAspectRatio="none" className="text-intense-indigo">
              {/* Moving Averages */}
              <path 
                d="M0,280 Q150,320 300,220 T600,180 T900,260 T1200,120" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                className="opacity-40"
              />
              <path 
                d="M0,300 Q200,360 400,240 T800,200 T1200,280" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1" 
                className="opacity-20"
              />
              
              {/* Candlesticks */}
              {[...Array(48)].map((_, i) => {
                const x = i * 25;
                const seed = (i * 1337) % 100;
                const h = 15 + (seed % 40);
                const y = 180 + Math.sin(i * 0.3) * 60 + (seed % 30);
                const isUp = seed % 2 === 0;
                return (
                  <g key={i} className="opacity-60">
                    <line x1={x + 12} y1={y - 8} x2={x + 12} y2={y + h + 8} stroke="currentColor" strokeWidth="0.5" />
                    <rect x={x + 8} y={y} width="8" height={h} fill="currentColor" rx="1" />
                    {/* Markers */}
                    {i % 12 === 0 && (
                      <path 
                        d={isUp ? `M${x+12},${y-15} l-4,6 h8 z` : `M${x+12},${y+h+15} l-4,-6 h8 z`} 
                        fill="currentColor" 
                      />
                    )}
                  </g>
                );
              })}
            </svg>
          </div>

          <div className="relative z-10">
            {/* Header Section */}
            <div className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <h1 className="font-sans text-3xl md:text-5xl lg:text-6xl leading-[1] text-intense-indigo mb-6">
              <span className="font-bold">The Sierra Portfolio:</span> <span className="font-normal">real investments</span>
            </h1>
            <p className="text-lg md:text-xl text-intense-indigo/60 font-medium leading-relaxed">
              To prove our method we created a <span className="">Portfolio</span> with the stocks from our <span className="">Research</span>, following our <span className="">Strategies</span>
            </p>
          </div>
          <div className="flex flex-col items-start md:items-end shrink-0">
            <p className="text-xs md:text-sm text-intense-indigo font-bold mb-2 tracking-tight">
              Get notified for portfolio updates
            </p>
            <button 
              onClick={navigateToJoin}
              className="bg-intense-indigo text-white px-5 py-2 rounded-full font-bold text-[11px] hover:bg-opacity-90 transition-colors cursor-pointer uppercase tracking-wider"
            >
              REGISTER
            </button>
          </div>
        </div>

        {/* Portfolio Summary Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 relative z-30">
          {/* Card 1: Portfolio value */}
          <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-gray-100 shadow-xl">
            <div className="text-[10px] font-bold text-intense-indigo/30 uppercase tracking-[0.1em] mb-1.5">Portfolio value</div>
            <div className="flex items-baseline gap-1.5 mb-0.5">
              <span className="text-xl font-bold text-intense-indigo leading-tight">109,729.35</span>
              <span className="text-[9px] font-bold text-intense-indigo/30 uppercase">usd</span>
            </div>
            <div className="text-[11px] text-intense-indigo/50 font-semibold">Cash 13,631.23</div>
          </div>

          {/* Card 2: Unrealized gain */}
          <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-gray-100 shadow-xl">
            <div className="text-[10px] font-bold text-intense-indigo/30 uppercase tracking-[0.1em] mb-1.5">Unrealized gain</div>
            <div className="flex items-baseline gap-1.5 mb-0.5">
              <span className="text-xl font-bold text-emerald-600 leading-tight">+9,729.35</span>
              <span className="text-[9px] font-bold text-emerald-600/50 uppercase">usd</span>
              <span className="text-xs font-bold text-emerald-600 ml-auto">+11.26%</span>
            </div>
            <div className="text-[11px] font-semibold">
              <span className="text-intense-indigo/40 tracking-tight">Last day </span>
              <span className="text-emerald-600">+380.50 +0.40%</span>
            </div>
          </div>

          {/* Card 3: Realized gain */}
          <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-gray-100 shadow-xl">
            <div className="text-[10px] font-bold text-intense-indigo/30 uppercase tracking-[0.1em] mb-1.5">Realized gain</div>
            <div className="flex items-baseline gap-1.5 mb-0.5">
              <span className="text-xl font-bold text-intense-indigo leading-tight">0.00</span>
              <span className="text-[9px] font-bold text-intense-indigo/30 uppercase">usd</span>
            </div>
            <div className="text-[11px] text-intense-indigo/50 font-semibold">Total dividends 0.00 usd</div>
          </div>

          {/* Card 4: Total gain */}
          <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-gray-100 shadow-xl">
            <div className="text-[10px] font-bold text-intense-indigo/30 uppercase tracking-[0.1em] mb-1.5">Total gain</div>
            <div className="flex items-baseline gap-1.5 mb-0.5">
              <span className="text-xl font-bold text-emerald-600 leading-tight">+9,729.35</span>
              <span className="text-[9px] font-bold text-emerald-600/50 uppercase">usd</span>
              <span className="text-xs font-bold text-emerald-600 ml-auto">+9.27%</span>
            </div>
            <div className="text-[11px] text-intense-indigo/50 font-semibold leading-none">Annualized yield 79.96%</div>
          </div>
        </div>
        </div>
        </div>

        {/* Section 2: Dashboard Overview */}
        <div className="mb-12 md:mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Portfolio Performance Chart */}
            <div className="lg:col-span-8 bg-white/80 backdrop-blur-sm rounded-3xl p-4 md:p-5 border border-gray-100 shadow-xl relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Portfolio change</h2>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex bg-gray-100 p-0.5 rounded-lg text-[9px] font-bold">
                    <button className="px-2 py-1 rounded-md">Value</button>
                    <button className="px-2 py-1 rounded-md bg-white shadow-sm text-intense-indigo">Performance</button>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex rounded-md overflow-hidden text-[10px] font-bold shadow-sm">
                      <span className="bg-blue-500 text-white px-2.5 py-1">Portfolio</span>
                      <span className="bg-blue-100 text-blue-600 px-2.5 py-1 border-l border-blue-200">9.23%</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="h-[280px] w-full relative">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={profitChartData}>
                    <defs>
                      <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.2}/>
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis 
                      dataKey="date" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fontSize: 10, fill: '#111', fontWeight: 500 }}
                      dy={10}
                      ticks={["10 Mar", "13 Mar", "18 Mar", "23 Mar", "26 Mar", "1 Apr", "7 Apr", "10 Apr", "15 Apr", "20 Apr", "23 Apr"]}
                      tickFormatter={(val) => val === "1 Apr" ? "Apr" : val.split(" ")[0]}
                    />
                    <YAxis 
                      orientation="right"
                      axisLine={false} 
                      tickLine={false}
                      tick={{ fontSize: 10, fill: '#666', fontWeight: 500 }}
                      tickFormatter={(value) => value.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                      width={55}
                    />
                    <Tooltip 
                      content={<CustomTooltip />}
                      cursor={{ stroke: '#ddd', strokeWidth: 1 }}
                    />
                    <ReferenceLine y={0} stroke="#999" strokeWidth={1} />
                    <Area 
                      type="linear" 
                      dataKey="value" 
                      stroke="#3b82f6" 
                      strokeWidth={2} 
                      fillOpacity={1} 
                      fill="url(#colorProfit)" 
                      animationDuration={1500}
                      activeDot={{ r: 4, fill: '#3b82f6', stroke: '#fff', strokeWidth: 2 }}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              {/* Time Range Selectors */}
              <div className="grid grid-cols-6 gap-1 mt-4 pt-3 border-t border-gray-50">
                {[
                  { label: '1 month', value: '+2.37%', currency: '', color: 'text-emerald-500' },
                  { label: '3 months', value: '+9.23%', currency: '', color: 'text-emerald-500' },
                  { label: '6 months', value: '—', currency: '', color: 'text-gray-400' },
                  { label: 'Year to date', value: '—', currency: '', color: 'text-gray-400' },
                  { label: '1 year', value: '—', currency: '', color: 'text-gray-400' },
                  { label: 'All time', value: '+9.23%', currency: '', color: 'text-emerald-800 font-bold', active: true },
                ].map((tab, idx) => (
                  <div key={idx} className={`flex flex-col items-center justify-center p-1.5 rounded-lg transition-all cursor-pointer ${tab.active ? 'bg-gray-50' : 'hover:bg-gray-50/50'}`}>
                    <span className="text-[10px] font-medium text-gray-500 mb-0.5">{tab.label}</span>
                    <div className="flex items-baseline gap-1">
                      <span className={`text-[11px] font-bold ${tab.color}`}>{tab.value}</span>
                      {tab.currency && <span className="text-[7px] font-bold text-gray-300 uppercase">{tab.currency}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Risk Overview */}
            <div className="lg:col-span-4 bg-white/80 backdrop-blur-sm rounded-3xl p-4 md:p-5 border border-gray-100 shadow-xl flex flex-col relative z-10">
              <h2 className="text-xl font-bold text-intense-indigo flex items-center gap-2 mb-4">
                <AlertTriangle size={20} /> Risk Overview
              </h2>
              
              <div className="space-y-6 flex-grow">
                {/* Visual Ratios */}
                <div className="space-y-4">
                  {riskRatios.map((ratio, idx) => (
                    <RatioSlider 
                      key={idx} 
                      title={ratio.title}
                      subtitle={ratio.subtitle}
                      value={ratio.value}
                      benchmark={ratio.benchmark}
                      max={ratio.max}
                      benchmarkLabel={ratio.benchmarkLabel}
                      colorType={ratio.colorType}
                    />
                  ))}
                </div>

                {/* World Exposure */}
                <div className="pt-4 border-t border-gray-50">
                  <h3 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Globe size={14} className="text-blue-400" /> Geographic Exposure
                  </h3>
                  <ContinentMap data={continentExposure} />
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-50">
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-emerald-600 shadow-sm shrink-0">
                    <PieChartIcon size={16} />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-intense-indigo/40 uppercase tracking-wider">Health Score</div>
                    <div className="text-sm font-bold text-intense-indigo leading-tight">Efficient Frontier</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Daily Gainers & Losers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 relative z-10">
            {/* Top Gainers */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-4 md:p-5 border border-gray-100 shadow-xl">
              <h3 className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mb-3 flex items-center gap-2">
                <ArrowUpRight size={12} /> Top Daily Gainers
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {topGainers.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-2 rounded-xl bg-emerald-50/30 border border-emerald-100/50">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-white border border-emerald-100 flex items-center justify-center overflow-hidden shrink-0">
                        {item.logo ? (
                          <img src={item.logo} alt={item.symbol} className="w-4 h-4 object-contain" referrerPolicy="no-referrer" />
                        ) : (
                          <div className="text-[9px] font-bold text-emerald-300">{item.symbol.substring(0, 3)}</div>
                        )}
                      </div>
                      <div>
                        <div className="font-bold text-intense-indigo text-[11px]">{item.symbol}</div>
                        <div className="text-[9px] text-intense-indigo/40 font-bold">{item.price}</div>
                      </div>
                    </div>
                    <span className="text-emerald-600 font-bold text-[11px]">{item.change}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Losers */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-4 md:p-5 border border-gray-100 shadow-xl">
              <h3 className="text-[10px] font-bold text-rose-600 uppercase tracking-widest mb-3 flex items-center gap-2">
                <ArrowDownRight size={12} /> Top Daily Losers
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {topLosers.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-2 rounded-xl bg-rose-50/30 border border-rose-100/50">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-white border border-rose-100 flex items-center justify-center overflow-hidden shrink-0">
                        {item.logo ? (
                          <img src={item.logo} alt={item.symbol} className="w-4 h-4 object-contain" referrerPolicy="no-referrer" />
                        ) : (
                          <div className="text-[9px] font-bold text-rose-300">{item.symbol.substring(0, 3)}</div>
                        )}
                      </div>
                      <div>
                        <div className="font-bold text-intense-indigo text-[11px]">{item.symbol}</div>
                        <div className="text-[9px] text-intense-indigo/40 font-bold">{item.price}</div>
                      </div>
                    </div>
                    <span className="text-rose-600 font-bold text-[11px]">{item.change}</span>
                  </div>
                ))}
                {/* Placeholder if few losers */}
                {topLosers.length < 2 && (
                   <div className="flex items-center justify-center p-2 rounded-xl bg-gray-50 border border-gray-100 opacity-50">
                     <span className="text-[9px] font-bold text-gray-400">Stable Market</span>
                   </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Portfolio distribution */}
        <div className="mb-12 md:mb-16 relative z-10">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-4 md:p-6 border border-gray-100 shadow-xl w-full">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-intense-indigo mb-1">Portfolio distribution</h2>
                <p className="text-intense-indigo/60 text-xs md:text-sm">
                  <span className="">Strategic</span> allocation across categories.
                </p>
              </div>
              
              <div className="flex bg-gray-50 p-1 rounded-xl self-start border border-gray-100">
                {['assets', 'types', 'sectors', 'currency'].map((tab) => (
                  <button 
                    key={tab}
                    onClick={() => setActiveTab(tab as any)}
                    className={`px-2.5 py-1 text-[9px] font-bold rounded-lg transition-all uppercase tracking-wider ${activeTab === tab ? 'bg-white text-intense-indigo shadow-sm' : 'text-intense-indigo/30 hover:text-intense-indigo'}`}
                  >
                    {tab === 'types' ? 'Types' : tab}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
              {/* Chart Column */}
              <div className="lg:col-span-4 flex flex-col items-center justify-center relative">
                <div className="w-full h-[320px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={currentData}
                        cx="50%"
                        cy="50%"
                        innerRadius={85}
                        outerRadius={120}
                        paddingAngle={1}
                        dataKey="value"
                        stroke="none"
                      >
                        {currentData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip 
                        contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 25px rgba(0,0,0,0.05)', padding: '10px', backgroundColor: '#fff' }}
                        itemStyle={{ fontWeight: 'bold', color: '#1800ad', fontSize: '11px' }}
                        formatter={(value: number) => [`$${value.toLocaleString()} USD`, 'Value']}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                {/* Center Text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                  <span className="text-4xl font-sans text-intense-indigo">{centerValue}</span>
                  <span className="text-[9px] font-bold text-intense-indigo/30 uppercase tracking-[0.1em]">{centerLabel}</span>
                </div>
              </div>

              {/* Table Column */}
              <div className="lg:col-span-8 overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-gray-100">
                        <th className="py-2.5 text-[9px] font-bold text-intense-indigo/30 uppercase tracking-widest">
                          {activeTab === 'assets' ? 'Asset' : activeTab === 'types' ? 'Type' : activeTab === 'sectors' ? 'Sector' : 'Currency'}
                        </th>
                        <th className="py-2.5 text-[9px] font-bold text-intense-indigo/30 uppercase tracking-widest text-right">Value</th>
                        <th className="py-2.5 text-[9px] font-bold text-intense-indigo/30 uppercase tracking-widest text-right">Alloc.</th>
                        <th className="py-2.5 text-[9px] font-bold text-intense-indigo/30 uppercase tracking-widest text-right">Gain</th>
                      </tr>
                    </thead>
                  <tbody>
                    {currentData.map((item: any, index) => (
                      <tr key={index} className="border-b border-gray-50/50 hover:bg-gray-50/30 transition-colors group">
                        <td className="py-2 flex items-center gap-2">
                          <div className="w-7 h-7 rounded-full bg-white border border-gray-100 flex items-center justify-center overflow-hidden shrink-0">
                            {item.logo ? (
                              <img src={item.logo} alt={item.name} className="w-4 h-4 object-contain" referrerPolicy="no-referrer" />
                            ) : (
                              <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: item.color }}></div>
                            )}
                          </div>
                          <div className="min-w-0">
                            <div className="font-bold text-intense-indigo text-[11px] truncate leading-none">{item.name}</div>
                            {item.symbol && <div className="text-[8px] text-intense-indigo/40 font-bold uppercase tracking-tighter">{item.symbol}</div>}
                          </div>
                        </td>
                        <td className="py-1.5 text-right">
                          <span className="font-mono text-intense-indigo text-[11px]">{item.value.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</span>
                          <span className="text-[8px] font-bold text-intense-indigo/20 ml-0.5 uppercase">usd</span>
                        </td>
                        <td className="py-1.5 text-right">
                          <span className="font-mono text-intense-indigo text-[11px] font-bold">{item.allocation.toFixed(1)}%</span>
                        </td>
                        <td className="py-1.5 text-right">
                          <span className={`font-mono text-[11px] font-bold ${item.gain >= 0 ? 'text-emerald-600' : 'text-rose-600'}`}>
                            {item.gain >= 0 ? '+' : ''}{item.gain.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* TradingView Dashboard */}
        <TradingViewDashboard />

        {/* Section 3: Analysis & Holdings Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-12 md:mb-16 relative z-10">
          {/* Left: Analysis Portfolio */}
          <div className="relative rounded-2xl p-[1px] bg-[linear-gradient(110deg,#1800ad_35%,#3b82f6_50%,#1800ad_65%)] bg-[length:250%_100%] animate-shine-extra-slow overflow-hidden shadow-xl">
            <div className="relative bg-white/90 backdrop-blur-sm rounded-[calc(1rem-1px)] p-5 md:p-6 h-full min-h-[380px]">
              <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent_35%,rgba(59,130,246,0.05)_50%,transparent_65%)] bg-[length:250%_100%] animate-shine-extra-slow pointer-events-none"></div>
              <h2 className="text-xl md:text-2xl font-bold text-intense-indigo mb-1 text-center relative z-10">
                <span className="font-serif font-normal">Analysis</span> <span className="font-bold">Portfolio</span>
              </h2>
              <p className="text-intense-indigo/40 text-[10px] md:text-[11px] mb-6 text-center max-w-xs mx-auto relative z-10 uppercase tracking-widest font-bold">
                Daily Summary & Market Insights
              </p>
              
              <div className="space-y-2.5 max-w-md mx-auto relative z-10">
                <div className="flex items-start gap-4 p-3 rounded-xl bg-indigo-50/50 border border-indigo-100/30">
                  <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center text-indigo-500 shrink-0">
                    <PieChartIcon size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[11px] text-intense-indigo uppercase tracking-wider">Net Liquidity</h4>
                    <p className="text-[10px] text-intense-indigo/60 mt-0.5 font-medium leading-normal">Currently $109,729 USD, supporting high-conviction strategies.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-3 rounded-xl bg-indigo-50/50 border border-indigo-100/30">
                  <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center text-indigo-500 shrink-0">
                    <TrendingUp size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[11px] text-intense-indigo uppercase tracking-wider">Beta Profile</h4>
                    <p className="text-[10px] text-intense-indigo/60 mt-0.5 font-medium leading-normal">Total gain at +9.27%, maintaining resilience during recent dips.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-3 rounded-xl bg-indigo-50/50 border border-indigo-100/30">
                  <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center text-indigo-500 shrink-0">
                    <Globe size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[11px] text-intense-indigo uppercase tracking-wider">Allocation</h4>
                    <p className="text-[10px] text-intense-indigo/60 mt-0.5 font-medium leading-normal">Diversified across 9 assets; Stocks (49%) lead the exposure index.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-3 rounded-xl bg-indigo-50/50 border border-indigo-100/30">
                  <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center text-indigo-500 shrink-0">
                    <Calendar size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[11px] text-intense-indigo uppercase tracking-wider">Upcoming Events</h4>
                    <p className="text-[10px] text-intense-indigo/60 mt-0.5 font-medium leading-normal italic">
                      Earnings: CADL, LASR (May 7), OKLO (May 12). Dividend: MSFT (ex 21/5).
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-3 rounded-xl bg-indigo-50/50 border border-indigo-100/30">
                  <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center text-indigo-500 shrink-0">
                    <AlertTriangle size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[11px] text-intense-indigo uppercase tracking-wider">Quant Pulse</h4>
                    <p className="text-[10px] text-intense-indigo/60 mt-0.5 font-medium leading-normal">Fear & Greed Index at 72. Technical momentum remains bullish on high-conviction assets.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Holdings Performance */}
          <div className="relative rounded-2xl p-[1px] bg-[linear-gradient(110deg,#1800ad_35%,#3b82f6_50%,#1800ad_65%)] bg-[length:250%_100%] animate-shine-extra-slow overflow-hidden shadow-xl">
            <div className="relative bg-white/90 backdrop-blur-sm rounded-[calc(1rem-1px)] p-5 md:p-6 h-full min-h-[380px]">
              <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent_35%,rgba(59,130,246,0.05)_50%,transparent_65%)] bg-[length:250%_100%] animate-shine-extra-slow pointer-events-none"></div>
              <h2 className="text-xl md:text-2xl font-bold text-intense-indigo mb-1 text-center relative z-10">
                <span className="font-serif font-normal">Holdings</span> <span className="font-bold">Performance</span>
              </h2>
              <p className="text-intense-indigo/40 text-[10px] md:text-[11px] mb-6 text-center max-w-xs mx-auto relative z-10 uppercase tracking-widest font-bold">
                All time returns & Performance
              </p>
              
              <div className="space-y-2.5 relative z-10 overflow-hidden">
                {holdingsPerformanceData.map((item, idx) => (
                  <div key={idx} className="group flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full border border-gray-100 flex items-center justify-center overflow-hidden bg-white shrink-0 shadow-xs relative group-hover:scale-105 transition-transform">
                      {item.logo ? (
                        <img src={item.logo} alt={item.name} className="w-4 h-4 object-contain" referrerPolicy="no-referrer" />
                      ) : (
                        <div className="w-full h-full bg-blue-900 flex items-center justify-center text-[8px] font-bold text-white uppercase">{item.symbol === 'SX5E' ? '50' : item.symbol.substring(0,2)}</div>
                      )}
                    </div>
                    <div className="w-10 text-[9px] font-bold text-intense-indigo uppercase tracking-wider truncate">{item.symbol}</div>
                    <div className="flex-1 h-2 bg-gray-100/50 rounded-full overflow-hidden relative">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${(item.gain / 60) * 100}%` }}
                        transition={{ duration: 1.5, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute left-0 top-0 h-full bg-emerald-500 rounded-full shadow-xs"
                      />
                    </div>
                    <div className="w-10 text-right text-[10px] font-bold text-emerald-600">+{item.gain.toFixed(1)}%</div>
                  </div>
                ))}
                
                <div className="mt-3 flex items-center gap-3 border-t border-gray-50 pt-2.5">
                  <div className="w-7 shrink-0"></div>
                  <div className="w-10 shrink-0"></div>
                  <div className="flex-1 flex justify-between text-[8px] font-bold text-gray-400/60 uppercase tracking-widest px-0">
                    <span className="relative">
                      <span className="absolute left-0 bottom-full mb-1 w-px h-1 bg-gray-200"></span>
                      0%
                    </span>
                    <span className="relative">
                      <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-1 w-px h-1 bg-gray-200"></span>
                      20%
                    </span>
                    <span className="relative">
                      <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-1 w-px h-1 bg-gray-200"></span>
                      40%
                    </span>
                    <span className="relative text-gray-400 font-black">
                      <span className="absolute right-0 bottom-full mb-1 w-px h-1 bg-gray-300"></span>
                      60%
                    </span>
                  </div>
                  <div className="w-10 shrink-0"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: Microsoft Highlight & Link to Equity Research */}
        <div className="mb-12 md:mb-16 flex flex-col items-center relative z-10">
          <div className="w-full max-w-3xl bg-white/70 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-8 border border-gray-100 flex flex-col md:flex-row items-center gap-6 shadow-xl">
            <div className="w-24 h-24 md:w-32 md:h-32 shrink-0 rounded-xl overflow-hidden shadow-md">
              <img src="/MSFT.png" alt="Microsoft" className="w-full h-full object-contain p-4 bg-white" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="font-serif text-xl md:text-2xl font-bold text-intense-indigo mb-2">Featured: Microsoft (MSFT)</h3>
              <p className="text-intense-indigo/60 text-[11px] md:text-xs mb-4 leading-relaxed italic">
                Our analysis explores the dominant position of Microsoft in the AI race. NASDAQ-listed growth potential aligned with our core conviction.
              </p>
              <Link to="/report/microsoft-ai-surge" className="text-xs font-bold text-intense-indigo flex items-center justify-center md:justify-start gap-1.5 hover:underline">
                View Report <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          <Link to="/research" className="group flex items-center gap-3 bg-intense-indigo text-white px-6 py-3 rounded-full hover:bg-opacity-95 transition-all active:scale-95 shadow-lg shadow-indigo-100">
            <span className="font-bold text-[11px] md:text-xs uppercase tracking-[0.1em]">Explore Equity Research Database</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Disclaimer */}
        <div className="mb-16 md:mb-24 text-center max-w-4xl mx-auto">
          <p className="text-xs md:text-sm text-intense-indigo/50 italic">
            *All content is for educational purposes only and should not be considered financial advice; investing involves risk, including possible loss of capital.
          </p>
        </div>

      </main>
    
    {/* Section 5: Be the first to know */}
    <CTABox onJoinClick={navigateToJoin} fromColor="white" />

    {/* Membership Modal */}
    <AnimatePresence>
      {showMembership && (
        <MembershipModal onClose={() => setShowMembership(false)} />
      )}
    </AnimatePresence>
    </>
  );
}
