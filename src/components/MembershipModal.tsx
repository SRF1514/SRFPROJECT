import React from 'react';
import { motion } from 'motion/react';
import { X, Check, ArrowRight, Zap, Target, BookOpen, UserPlus, Star } from 'lucide-react';
import { useAuth } from './AuthContext';
import MembershipComparisonTable from './MembershipComparisonTable';

export default function MembershipModal({ onClose }: { onClose: () => void }) {
  const { upgradeToPro, subscriptionTier } = useAuth();

  const tiers = [
    {
      name: 'Free Access',
      price: '€0',
      description: 'Foundational insights for retail investors.',
      features: [
        { text: 'Sierra community: Full access to recruitment roadmap', included: true },
        { text: 'Learning Curriculum: Partial access to learning materials', included: true },
        { text: 'Sierra portfolio: Delayed overview', included: true }
      ],
      buttonText: 'Current Plan',
      isPro: false
    },
    {
      name: 'Sierra Member',
      price: '€39',
      period: '/ month',
      description: 'Institutional-grade research & active community access.',
      features: [
        { text: 'Early access to new quant models', included: true },
        { text: 'Learning Curriculum: 100% of learning materials and Equity Research', included: true },
        { text: 'CFA® Level I/II Prep Material', included: true },
        { text: 'Sierra Active Portfolio: Real-time rationales', included: true },
        { text: 'Exclusive Live Quant Signals & DCF Models', included: true },
        { text: 'Direct Q&A access to Senior Analysts', included: true },
      ],
      buttonText: 'Upgrade to Sierra Member',
      isPro: true
    }
  ];

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6 md:p-8">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-intense-indigo/90 backdrop-blur-md"
        onClick={onClose}
      />
      
      <motion.div 
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        className="bg-white rounded-[2.5rem] w-full max-w-5xl max-h-[90vh] overflow-y-auto relative z-10 p-8 md:p-12 shadow-2xl"
      >
        <button 
          onClick={onClose}
          className="absolute top-8 right-8 w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-intense-indigo hover:bg-gray-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-black uppercase tracking-[0.2em] mb-4">
            <Star className="w-3 h-3 fill-current" />
            Pricing Plans
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-intense-indigo mb-4">Choose your level of access</h2>
          <p className="text-intense-indigo/60 font-medium max-w-xl mx-auto">
            Unlock the full potential of Sierra's institutional-grade research and educational roadmap.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {tiers.map((tier) => (
            <div 
              key={tier.name}
              className={`p-8 rounded-[2rem] border transition-all duration-500 relative flex flex-col h-full ${
                tier.isPro 
                  ? 'border-emerald-200 bg-emerald-50/10 shadow-xl shadow-emerald-500/5' 
                  : 'border-gray-100 bg-white'
              }`}
            >
              {tier.isPro && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-emerald-500 text-white text-[10px] font-black rounded-full uppercase tracking-widest shadow-lg">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className={`text-xl font-serif font-bold mb-2 ${tier.isPro ? 'text-emerald-700' : 'text-intense-indigo'}`}>
                  {tier.name}
                </h3>
                <p className="text-sm text-intense-indigo/50 mb-6">{tier.description}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-serif font-bold text-intense-indigo">{tier.price}</span>
                  {tier.period && <span className="text-sm font-bold text-intense-indigo/40">{tier.period}</span>}
                </div>
              </div>

              <div className="space-y-4 mb-10 flex-grow">
                {tier.features.map((feature, fIdx) => (
                  <div key={fIdx} className={`flex items-start gap-3 text-sm ${feature.included ? 'text-intense-indigo' : 'text-intense-indigo/30'}`}>
                    <div className={`mt-0.5 shrink-0 w-4 h-4 rounded-full flex items-center justify-center ${feature.included ? 'bg-emerald-100 text-emerald-600' : 'bg-gray-100 text-gray-400'}`}>
                      {feature.included ? <Check className="w-2.5 h-2.5 stroke-[3]" /> : <X className="w-2.5 h-2.5" />}
                    </div>
                    <span className={feature.included ? 'font-bold' : 'font-medium'}>{feature.text}</span>
                  </div>
                ))}
              </div>

              <button 
                disabled={(subscriptionTier === 'pro' && tier.isPro) || (subscriptionTier === 'free' && !tier.isPro)}
                onClick={() => {
                  if (tier.isPro && subscriptionTier === 'free') {
                    upgradeToPro();
                    onClose();
                  }
                }}
                className={`w-full py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all ${
                  tier.isPro 
                    ? 'bg-emerald-500 text-white hover:bg-emerald-600 shadow-lg shadow-emerald-500/25' 
                    : 'bg-intense-indigo/5 text-intense-indigo hover:bg-intense-indigo/10'
                } disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                {subscriptionTier === 'pro' && tier.isPro ? 'Activated' : 
                 subscriptionTier === 'free' && !tier.isPro ? 'Current Plan' : 
                 tier.buttonText}
              </button>
            </div>
          ))}
        </div>

        {/* Benefits Detail Table (Mobile Hidden or Condensed) */}
        <div className="hidden md:block">
          <MembershipComparisonTable />
        </div>
      </motion.div>
    </div>
  );
}
