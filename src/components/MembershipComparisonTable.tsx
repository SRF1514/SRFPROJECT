import React from 'react';
import { Check, Mail, Linkedin, Instagram } from 'lucide-react';

interface PlanCardProps {
  key?: React.Key;
  name: string;
  price: string;
  description: string;
  features: { text: string; sub?: string }[];
  isRecommended?: boolean;
  isSelected?: boolean;
  buttonText: string;
  theme: 'dark' | 'indigo';
  onSelect: () => void;
}

function PlanCard({ name, price, description, features, isRecommended, isSelected, buttonText, theme, onSelect }: PlanCardProps) {
  const isIndigo = theme === 'indigo';
  
  return (
    <div 
      onClick={onSelect}
      className={`relative flex flex-col p-6 rounded-[2rem] border transition-all duration-500 cursor-pointer ${
      isIndigo 
        ? `bg-gradient-to-br from-intense-indigo via-[#1e1b4b] to-black text-white shadow-2xl scale-[1.02] z-10 ${isSelected ? 'border-emerald-400 ring-2 ring-emerald-400/50' : 'border-white/10'}` 
        : `bg-white text-intense-indigo hover:shadow-xl ${isSelected ? 'border-intense-indigo ring-2 ring-intense-indigo/20' : 'border-gray-100'}`
    } h-full`}>
      {isRecommended && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-6 py-1.5 bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-400 rounded-full text-[9px] font-black uppercase tracking-[0.15em] text-white shadow-xl border border-emerald-300/30 whitespace-nowrap">
          Most Popular
        </div>
      )}
      
      <div className="mb-6">
        <h3 className={`text-xl font-sans font-black mb-1 ${isIndigo ? 'text-white' : 'text-intense-indigo'}`}>
          {name}
        </h3>
        <div className="flex items-baseline gap-1">
          <span className={`text-3xl font-black tracking-tighter ${isIndigo ? 'text-white' : 'text-intense-indigo'}`}>{price}</span>
          {price !== 'Free' && <span className={`text-[10px] font-black uppercase tracking-widest ${isIndigo ? 'text-white/40' : 'text-intense-indigo/30'}`}>/ mo</span>}
        </div>
      </div>

      <div className={`w-full py-3 px-4 rounded-2xl text-[9px] font-black uppercase tracking-[0.2em] mb-6 transition-all border-2 text-center ${
        isSelected 
          ? 'bg-emerald-500 border-emerald-500 text-white'
          : isIndigo
            ? 'bg-white text-intense-indigo hover:bg-emerald-50 border-white hover:scale-[1.02] shadow-lg active:scale-[0.98]'
            : 'bg-intense-indigo text-white hover:bg-opacity-90 border-intense-indigo hover:shadow-lg'
      }`}>
        {isSelected ? 'Selected Plan' : buttonText}
      </div>

      <div className="space-y-3 flex-grow">
        <p className={`text-[9px] font-black uppercase tracking-[0.2em] ${isIndigo ? 'text-white/30' : 'text-intense-indigo/20'}`}>Member Benefits:</p>
        <ul className="space-y-1.5">
          {features.map((feature, idx) => (
            <li key={idx} className="flex gap-2.5 items-start">
              <div className={`shrink-0 w-4 h-4 rounded-full flex items-center justify-center ${isIndigo ? 'bg-emerald-400/10' : 'bg-intense-indigo/5'}`}>
                <Check className={`w-2.5 h-2.5 ${isIndigo ? 'text-emerald-400' : 'text-intense-indigo/40'}`} />
              </div>
              <div className="space-y-0.5">
                <p className={`text-xs font-bold leading-tight ${isIndigo ? 'text-white/90' : 'text-intense-indigo/80'}`}>{feature.text}</p>
                {feature.sub && (
                  <p className={`text-[10px] font-medium leading-tight ${isIndigo ? 'text-white/40' : 'text-intense-indigo/30'}`}>{feature.sub}</p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

interface MembershipComparisonTableProps {
  selectedTier?: 'free' | 'pro';
  onSelectTier?: (tier: 'free' | 'pro') => void;
}

export default function MembershipComparisonTable({ selectedTier, onSelectTier }: MembershipComparisonTableProps) {
  const plans: (any)[] = [
    {
      id: 'free',
      name: "Free Access",
      price: "Free",
      description: "Essential insights for retail investors.",
      buttonText: "Start for Free",
      theme: 'dark',
      features: [
        { text: "Sierra community", sub: "Full access to recruitment roadmap" },
        { text: "Learning Curriculum", sub: "Partial access to learning materials" },
        { text: "Sierra portfolio", sub: "Delayed overview" }
      ]
    },
    {
      id: 'pro',
      name: "Sierra Member",
      price: "€39",
      description: "Cancel anytime. Institutional-grade research & community.",
      buttonText: "Join Sierra Community",
      isRecommended: true,
      theme: 'indigo',
      features: [
        { text: "Early access to new quant models", sub: "Priority model releases" },
        { text: "Learning Curriculum", sub: "100% of learning materials and Equity Research" },
        { text: "CFA Study Material", sub: "Comprehensive prep guide" },
        { text: "Active Portfolio", sub: "Real-time rationales & holdings" },
        { text: "Quant & DCF Models", sub: "Institutional-grade valuation tools" },
        { text: "Exclusive Quant Signals", sub: "Live dashboard indicators" }
      ]
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto py-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {plans.map((plan, idx) => (
          <PlanCard 
            key={idx}
            name={plan.name}
            price={plan.price}
            description={plan.description}
            features={plan.features}
            isRecommended={plan.isRecommended}
            isSelected={selectedTier === plan.id}
            buttonText={plan.buttonText}
            theme={plan.theme}
            onSelect={() => onSelectTier?.(plan.id)}
          />
        ))}
      </div>

      <div className="flex items-center justify-center gap-12 mt-8 py-4">
        <a href="mailto:sierraresearchfund@gmail.com" className="text-intense-indigo/20 hover:text-intense-indigo transition-all hover:-translate-y-1 cursor-pointer" aria-label="Email">
          <Mail className="w-14 h-14" />
        </a>
        <a href="https://www.linkedin.com/company/105088637/admin/dashboard/" target="_blank" rel="noopener noreferrer" className="text-intense-indigo/20 hover:text-intense-indigo transition-all hover:-translate-y-1 cursor-pointer" aria-label="LinkedIn">
          <Linkedin className="w-14 h-14" />
        </a>
        <a href="https://www.instagram.com/sierraresearchfund/" target="_blank" rel="noopener noreferrer" className="text-intense-indigo/20 hover:text-intense-indigo transition-all hover:-translate-y-1 cursor-pointer" aria-label="Instagram">
          <Instagram className="w-14 h-14" />
        </a>
      </div>
    </div>
  );
}
