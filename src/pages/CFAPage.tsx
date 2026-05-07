import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, Award, Layers, Compass, LifeBuoy, Users, Globe, Briefcase, 
  ChevronRight, Download, GraduationCap, Clock, Monitor, BookOpen, Star, 
  CheckCircle2, Info, ArrowRight, Zap, ShieldCheck, Mail, ExternalLink,
  Check, List, LayoutGrid, HelpCircle, AlertCircle, FileText, BarChart3,
  Search, Shield, Map, Target, Lock, Database, PenTool, BarChart
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cfaContent, CFASection, CFASubTopic } from '../data/cfaContent';
import PracticeHub from '../components/PracticeHub';

// Icon Map for dynamic rendering
const IconMap: Record<string, any> = {
  Award,
  Layers,
  Compass,
  LifeBuoy,
  Users,
  Globe,
  Briefcase,
  GraduationCap,
  BookOpen,
  Shield,
  Clock,
  LayoutGrid,
  Map,
  Target,
  Database,
  Lock,
  PenTool,
  BarChart
};

// Visual Chart Components
const VisualChart = ({ type, chartId, isDark }: { type: string, chartId?: string, isDark: boolean }) => {
  const accentColor = isDark ? 'text-white' : 'text-intense-indigo';
  const mutedColor = isDark ? 'text-white/40' : 'text-intense-indigo/20';

  if (chartId === 'chart-1') {
    // CFA Program Level Progression
    const stages = [
      { label: 'Level I', focus: 'Foundational Knowledge', desc: 'Core investment tools & ethics' },
      { label: 'Level II', focus: 'Asset Valuation', desc: 'Scenario analysis & valuation' },
      { label: 'Level III', focus: 'Portfolio Management', desc: 'Wealth planning & integration' },
      { label: 'Membership', focus: 'Professional Status', desc: 'Work experience & references' },
      { label: 'Charter', focus: 'CFA® Charterholder', desc: 'Ongoing global community' }
    ];
    return (
      <div className="py-12 overflow-x-auto">
        <div className="min-w-[800px] flex items-start justify-between relative">
          <div className={`absolute top-6 left-0 right-0 h-[2px] ${mutedColor} z-0`} />
          {stages.map((stage, i) => (
            <div key={i} className="flex flex-col items-center gap-4 relative z-10 w-1/5 px-2">
              <div className={`w-12 h-12 rounded-full border-2 ${isDark ? 'bg-intense-indigo border-white' : 'bg-white border-intense-indigo'} flex items-center justify-center font-black text-xs`}>
                {i + 1}
              </div>
              <div className="text-center">
                <div className={`text-[10px] font-black uppercase tracking-widest ${accentColor} mb-1`}>{stage.label}</div>
                <div className="text-xs font-bold opacity-80 mb-2">{stage.focus}</div>
                <div className="text-[10px] opacity-60 leading-tight">{stage.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (chartId === 'chart-7') {
    // Sustainability Learning Map (Pyramid)
    const layers = [
      { t: 'Sustainable Investment Strategy', c: 'bg-emerald-600', w: 'w-[40%]' },
      { t: 'Stewardship & Reporting', c: 'bg-emerald-500', w: 'w-[55%]' },
      { t: 'Climate Risk & Valuation', c: 'bg-emerald-400', w: 'w-[70%]' },
      { t: 'ESG Integration', c: 'bg-emerald-300', w: 'w-[85%]' },
      { t: 'ESG Basics', c: 'bg-emerald-200', w: 'w-full' }
    ];
    return (
      <div className="flex flex-col items-center gap-2 py-8">
        {layers.map((layer, i) => (
          <div key={i} className={`${layer.w} ${layer.c} py-4 rounded-lg flex items-center justify-center text-white font-black text-[10px] uppercase tracking-widest shadow-lg shadow-emerald-500/10`}>
            {layer.t}
          </div>
        ))}
      </div>
    );
  }

  if (chartId === 'chart-6') {
    // Private Markets Map (Asset Class Tree)
    const assets = [
      { name: 'Private Equity', sub: 'Buyouts & Venture' },
      { name: 'Private Credit', sub: 'Direct Lending' },
      { name: 'Real Estate', sub: 'Commercial & Residential' },
      { name: 'Infrastructure', sub: 'Core & Essential Assets' },
      { name: 'Alternative Strategies', sub: 'Growth & Special Situations' }
    ];
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 py-8">
        {assets.map((asset, i) => (
          <motion.div 
            key={i} 
            whileHover={{ scale: 1.05, y: -4 }}
            className={`p-6 rounded-2xl border ${isDark ? 'bg-white/5 border-white/10' : 'bg-gray-50 border-gray-100'} text-center group cursor-default transition-colors duration-300`}
          >
            <div className={`w-2 h-2 rounded-full mx-auto mb-4 ${isDark ? 'bg-white' : 'bg-intense-indigo'}`} />
            <div className="font-bold text-sm mb-1">{asset.name}</div>
            <div className="text-[10px] opacity-60 uppercase tracking-tighter">{asset.sub}</div>
          </motion.div>
        ))}
      </div>
    );
  }

  if (chartId === 'chart-8') {
    // Membership Value Wheel
    const segments = ['Career', 'Learning', 'Research', 'Societies', 'Network', 'Volunteer', 'Ethics', 'Status'];
    return (
      <div className="relative py-12 flex items-center justify-center">
        <div className={`w-64 h-64 rounded-full border-4 ${mutedColor} flex items-center justify-center relative`}>
            <div className={`w-20 h-20 rounded-full ${isDark ? 'bg-white text-intense-indigo' : 'bg-intense-indigo text-white'} flex items-center justify-center text-[10px] font-black uppercase text-center p-2`}>
              CFA® Community
            </div>
            {segments.map((s, i) => {
              const angle = (i * 360) / segments.length;
              return (
                <div 
                  key={i} 
                  className="absolute"
                  style={{ transform: `rotate(${angle}deg) translateY(-144px)` }}
                >
                  <div className={`px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest ${isDark ? 'bg-white text-intense-indigo' : 'bg-intense-indigo text-white'} shadow-xl`}>
                    {s}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto h-48 bg-gray-200/20 rounded-2xl border border-dashed border-gray-400/30 flex items-center justify-center">
       <BarChart3 className={isDark ? 'text-white/40' : 'text-intense-indigo/20'} size={48} />
    </div>
  );
};

const EnhancedText = ({ text, isDark, onLinkClick }: { text: string, isDark: boolean, onLinkClick: (id: string) => void }) => {
  const parts = text.split(/(\[\[.*?\]\])/g);
  const mutedTextColor = isDark ? 'text-white/80' : 'text-intense-indigo/70';

  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith('[[') && part.endsWith(']]')) {
          const content = part.slice(2, -2);
          const [id, label] = content.includes('|') ? content.split('|') : [content, content];
          return (
            <button
              key={i}
              onClick={() => onLinkClick(id.trim())}
              className={`inline-flex items-center gap-1 font-bold underline decoration-2 underline-offset-4 hover:opacity-70 transition-opacity ${isDark ? 'text-white' : 'text-intense-indigo'}`}
            >
              <Zap size={14} className="opacity-40" />
              {label.trim()}
            </button>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
};

const TopicRenderer = ({ topic, isDark, onLinkClick, nextTopic, prevTopic, onNavTopic }: { 
  topic: CFASubTopic, 
  isDark: boolean, 
  onLinkClick: (id: string) => void,
  nextTopic?: CFASubTopic,
  prevTopic?: CFASubTopic,
  onNavTopic: (topic: CFASubTopic) => void
}) => {
  const mutedTextColor = isDark ? 'text-white/60' : 'text-intense-indigo/60';
  const accentColor = isDark ? 'bg-white/10' : 'bg-intense-indigo/5';

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      {topic.hero && (
        <div className="space-y-8">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
            {topic.hero.heading}
          </h2>
          <p className={`text-xl md:text-2xl ${mutedTextColor} max-w-3xl leading-relaxed`}>
            {topic.hero.subtitle}
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className={`px-8 py-3 ${isDark ? 'bg-white text-intense-indigo' : 'bg-intense-indigo text-white'} rounded-xl text-[11px] font-black uppercase tracking-widest transition-shadow shadow-lg hover:shadow-indigo-500/20`}
            >
              {topic.hero.primaryCTA}
            </motion.button>
            {topic.hero.secondaryCTA && (
              <button className={`px-8 py-3 ${isDark ? 'bg-white/10 text-white border border-white/20' : 'bg-intense-indigo/5 text-intense-indigo border border-intense-indigo/10'} rounded-xl text-[11px] font-black uppercase tracking-widest hover:bg-opacity-80 transition-all`}>
                {topic.hero.secondaryCTA}
              </button>
            )}
          </div>
        </div>
      )}

      {/* Summary Cards */}
      {topic.summaryCards && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {topic.summaryCards.map((card, idx) => {
            const Icon = IconMap[card.icon] || Info;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`${accentColor} p-6 rounded-2xl border ${isDark ? 'border-white/10' : 'border-intense-indigo/5'} h-full flex flex-col`}
              >
                <div className={`w-10 h-10 ${isDark ? 'bg-white/10 text-white' : 'bg-intense-indigo/10 text-intense-indigo'} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon size={20} />
                </div>
                <h4 className="text-lg font-bold mb-2">{card.title}</h4>
                <p className={`text-sm ${mutedTextColor} leading-relaxed`}>{card.description}</p>
              </motion.div>
            );
          })}
        </div>
      )}

      {/* Visual Component */}
      {topic.visualSuggestion && (
        <div className={`${isDark ? 'bg-white/5' : 'bg-gray-50'} p-8 md:p-12 rounded-3xl border ${isDark ? 'border-white/10' : 'border-gray-100'} text-center space-y-6 overflow-hidden`}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-[9px] font-black uppercase tracking-widest">
            <Zap size={12} /> Interactive Data Model
          </div>
          <h3 className="text-xl md:text-2xl font-bold">{topic.visualSuggestion.description}</h3>
          
          <VisualChart type={topic.visualSuggestion.type} chartId={topic.visualSuggestion.chartId} isDark={isDark} />
          
          <p className={`${mutedTextColor} max-w-xl mx-auto text-sm`}>
            * This diagram is updated in real-time based on the 2024 CFA Practice Guidelines.
          </p>
        </div>
      )}

      {/* Decision Support / Tables */}
      {topic.decisionSupport && topic.decisionSupport.type === 'table' && (
        <div className="space-y-8">
          <div className="flex items-center gap-3">
             <AlertCircle className="text-blue-500" size={24} />
             <h3 className="text-2xl font-bold">{topic.decisionSupport.title}</h3>
          </div>
          <div className={`overflow-x-auto rounded-2xl border ${isDark ? 'border-white/10' : 'border-gray-200 shadow-sm'}`}>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className={`${isDark ? 'bg-white/10' : 'bg-gray-50'} border-b ${isDark ? 'border-white/10' : 'border-gray-200'}`}>
                  {topic.decisionSupport.data.headers.map((header: string, i: number) => (
                    <th key={i} className="px-6 py-4 text-[10px] font-black uppercase tracking-widest opacity-60">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {topic.decisionSupport.data.rows.map((row: string[], i: number) => (
                  <tr key={i} className={`border-b ${isDark ? 'border-white/5' : 'border-gray-100 last:border-none hover:bg-gray-50/50'}`}>
                    {row.map((cell: string, j: number) => (
                      <td key={j} className={`px-6 py-4 text-sm font-medium ${j === 0 ? (isDark ? 'text-white' : 'text-intense-indigo') + ' font-bold' : mutedTextColor}`}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Main Sections */}
      {topic.mainSections && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {topic.mainSections.map((section, idx) => (
            <div key={idx} className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight border-l-4 border-intense-indigo/20 pl-6">
                {section.title}
              </h3>
              {section.content && (
                <p className={`text-lg ${mutedTextColor} leading-relaxed`}>
                  <EnhancedText text={section.content} isDark={isDark} onLinkClick={onLinkClick} />
                </p>
              )}
              {section.bullets && (
                <ul className="space-y-4">
                  {section.bullets.map((bullet, bidx) => (
                    <li key={bidx} className="flex gap-4 items-start">
                      <div className={`mt-1.5 w-1.5 h-1.5 rounded-full ${isDark ? 'bg-white' : 'bg-intense-indigo'} shrink-0`} />
                      <span className={`${mutedTextColor} font-medium`}>
                        <EnhancedText text={bullet} isDark={isDark} onLinkClick={onLinkClick} />
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Standard Content if no sections */}
      {!topic.mainSections && (
        <div className="flex flex-col gap-6">
          {!topic.hero && (
            <h2 className="text-xl md:text-3xl lg:text-4xl font-sans font-bold leading-tight tracking-tight max-w-5xl">
              {topic.title}
            </h2>
          )}
          <p className={`text-lg md:text-xl ${mutedTextColor} font-medium leading-relaxed max-w-4xl whitespace-pre-line`}>
            <EnhancedText text={topic.content || ''} isDark={isDark} onLinkClick={onLinkClick} />
          </p>
        </div>
      )}

      {/* Next Step Block if exists */}
      {topic.nextStep && (
        <div className="pt-12">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className={`whitespace-nowrap px-8 py-4 ${isDark ? 'bg-white text-intense-indigo' : 'bg-intense-indigo text-white'} rounded-xl text-[11px] font-black uppercase tracking-widest shadow-xl transition-shadow hover:shadow-indigo-500/20`}
          >
            {topic.nextStep.cta}
          </motion.button>
        </div>
      )}
    </div>
  );
};

export default function CFAPage() {
  const navigate = useNavigate();
  const [selectedSectionId, setSelectedSectionId] = useState<string | null>(null);
  const [selectedTopicId, setSelectedTopicId] = useState<string | null>(null);

  // Scroll to top when section changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [selectedSectionId, selectedTopicId]);

  const selectedSection = useMemo(() => 
    cfaContent.find(s => s.id === selectedSectionId),
    [selectedSectionId]
  );

  const selectedTopic = useMemo(() => {
    if (!selectedSection) return null;
    return selectedSection.subTopics.find(t => t.id === selectedTopicId) || selectedSection.subTopics[0];
  }, [selectedSection, selectedTopicId]);

  const handleNavTopic = (topic: CFASubTopic) => {
    setSelectedTopicId(topic.id);
    document.getElementById(topic.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleLinkClick = (id: string) => {
    // Search all sections for the topic ID
    const foundSection = cfaContent.find(s => s.subTopics.some(t => t.id === id));
    if (foundSection) {
      setSelectedSectionId(foundSection.id);
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 500);
    }
  };

  return (
    <main className="flex-grow flex flex-col w-full pb-16 lg:pb-24 pt-[112px] lg:pt-[128px] font-sans bg-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 bg-noise opacity-[0.02] pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-bl from-intense-indigo/5 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/3 bg-gradient-to-tr from-intense-indigo/5 to-transparent rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[2cm] w-full relative z-10">
        
        <AnimatePresence mode="wait">
          {selectedTopicId === 'sierra-practice-hub' ? (
            <motion.div
              key="practice-hub"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              className="w-full"
            >
              <PracticeHub onBack={() => setSelectedTopicId(null)} />
            </motion.div>
          ) : !selectedSectionId ? (
            <motion.div 
              key="hub"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-12"
            >
              {/* Hero Section */}
              <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-gray-100 pb-10">
                <div className="max-w-full">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-intense-indigo/5 text-intense-indigo text-[10px] font-black uppercase tracking-[0.2em] mb-4">
                    <Star className="w-3 h-3 fill-current" />
                    CFA Institute Roadmap
                  </div>
                  <h1 
                    onClick={() => {
                      setSelectedSectionId(null);
                      setSelectedTopicId(null);
                    }}
                    className="font-sans text-3xl md:text-5xl lg:text-7xl leading-[1.1] text-intense-indigo mb-4 tracking-tighter flex flex-col md:flex-row md:items-baseline gap-4 md:gap-6 cursor-pointer hover:opacity-80 transition-opacity"
                  >
                    <span className="font-bold">CFA Content Hub</span>
                    <span className="font-normal opacity-60 text-xl md:text-3xl lg:text-4xl">2026 Curriculum</span>
                  </h1>
                  <p className="text-lg md:text-xl text-intense-indigo/60 font-medium leading-relaxed max-w-2xl">
                    Institutional-grade financial education. From the flagship CFA® Program 
                    to specialized certificates in ESG, Private Markets, and Climate.
                  </p>
                </div>
                
                <div className="hidden lg:flex flex-col items-end gap-3 pb-2">
                  <div className="text-right">
                    <div className="text-[10px] font-bold text-intense-indigo/30 uppercase tracking-[0.2em]">Resource Status</div>
                    <div className="text-4xl font-sans font-bold text-intense-indigo">Live</div>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="flex -space-x-1">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className={`w-5 h-5 rounded-full border border-white bg-intense-indigo/${10 * i} flex items-center justify-center`}>
                          <div className="w-1.5 h-1.5 rounded-full bg-intense-indigo/40 animate-pulse" style={{ animationDelay: `${i * 150}ms` }} />
                        </div>
                      ))}
                    </div>
                    <div className="text-[10px] uppercase font-black text-intense-indigo/40 tracking-tighter ml-1">
                      Updating Regularly
                    </div>
                  </div>
                </div>
              </div>

              {/* Featured Section: Sierra CFA Practice Hub */}
              <div className="relative group overflow-hidden bg-intense-indigo rounded-[3rem] p-1 lg:p-1.5 shadow-[0_40px_80px_-20px_rgba(45,39,118,0.4)]">
                {/* Decorative Accents */}
                <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-white/20 to-transparent" />
                <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-white/20 to-transparent" />
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden rounded-[2.8rem] bg-intense-indigo border border-white/10 relative z-10">
                  <div className="lg:col-span-7 p-8 lg:p-10 flex flex-col justify-between relative overflow-hidden h-full">
                    {/* Background Glow */}
                    <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px]" />
                    
                    <div className="relative z-10">
                      <h2 className="text-4xl lg:text-7xl font-bold tracking-tighter text-white leading-[0.95] pr-12 overflow-visible mb-6 lg:mb-8">
                        Sierra CFA <br /> 
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-200 to-white">Practice Hub</span>
                      </h2>
                      <p className="text-xl text-white/60 font-medium leading-tight max-w-md">
                        The complete numerical question set: 331 multiple-choice questions, 151 open-ended questions, and 17 mock exams, all aligned with the latest 2026 curriculum. Includes detailed step-by-step solutions and explanations for every question.
                      </p>
                    </div>
                      
                    <div className="relative z-10 grid grid-cols-3 gap-8 pt-8 lg:pt-10 mt-auto">
                      <div>
                        <div className="text-3xl font-black text-white">482</div>
                        <div className="text-[10px] font-black text-white/30 uppercase tracking-widest mt-1">Active Items</div>
                      </div>
                      <div>
                        <div className="text-3xl font-black text-white">17</div>
                        <div className="text-[10px] font-black text-white/30 uppercase tracking-widest mt-1">Mock Exams</div>
                      </div>
                      <div>
                        <div className="text-3xl font-black text-white">2026</div>
                        <div className="text-[10px] font-black text-white/30 uppercase tracking-widest mt-1">Curriculum</div>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-5 relative bg-white/5 border-l border-white/5 p-8 lg:p-10 flex flex-col group/cta h-full">
                     <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent pointer-events-none" />
                     
                     <div className="relative z-10 w-full flex flex-col h-full justify-between">
                       <div>
                         <div className="hidden lg:block" aria-hidden="true">
                            <h2 className="text-4xl lg:text-7xl font-bold leading-[0.95] mb-6 lg:mb-12 opacity-0 select-none pointer-events-none">
                              Line 1 <br /> Line 2
                            </h2>
                         </div>

                         <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-white tracking-tight">
                               Ace your upcoming <br className="hidden lg:block" /> exam.
                            </h3>

                            <motion.button
                               whileHover={{ scale: 1.05 }}
                               whileTap={{ scale: 0.95 }}
                               onClick={() => setSelectedTopicId('sierra-practice-hub')}
                               className="w-full py-6 bg-white text-intense-indigo rounded-2xl font-black uppercase tracking-[0.2em] text-xs shadow-[0_20px_40px_-10px_rgba(255,255,255,0.2)] hover:bg-indigo-50 transition-colors flex items-center justify-center gap-3"
                            >
                               Enter The Vault <ArrowRight size={18} />
                            </motion.button>
                         </div>
                       </div>

                       <div className="pt-8 lg:pt-10 mt-auto">
                         <div className="text-3xl font-black opacity-0 select-none pointer-events-none hidden lg:block">-</div>
                         <p className="text-[10px] font-black text-white/30 uppercase tracking-widest mt-1 text-center lg:text-left">
                            CFA Level 1 - 3
                         </p>
                       </div>
                     </div>
                  </div>
                </div>
              </div>

              {/* Hub Cards Grid (Curriculum) */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="h-px flex-grow bg-gray-100" />
                  <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-intense-indigo/30">CFA Institute Programs</h3>
                  <div className="h-px flex-grow bg-gray-100" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {cfaContent.map((section, idx) => {
                    const Icon = IconMap[section.icon] || Award;
                    return (
                      <motion.div
                        key={section.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileHover={{ y: -5 }}
                        transition={{ 
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                          delay: idx * 0.05 
                        }}
                        onClick={() => setSelectedSectionId(section.id)}
                        className="group cursor-pointer bg-gray-50/30 hover:bg-white border border-gray-100 hover:border-intense-indigo/20 rounded-2xl p-8 hover:shadow-2xl hover:shadow-indigo-500/10 transition-colors duration-300 relative overflow-hidden will-change-transform"
                      >
                        <motion.div 
                          className="absolute top-0 left-0 w-full h-1 bg-intense-indigo"
                          initial={{ scaleX: 0 }}
                          whileHover={{ scaleX: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                        <div className="w-12 h-12 bg-intense-indigo/5 text-intense-indigo rounded-xl flex items-center justify-center mb-6 group-hover:bg-intense-indigo group-hover:text-white transition-colors">
                          <Icon size={24} />
                        </div>
                        <h3 className="text-2xl font-black text-intense-indigo mb-3 group-hover:translate-x-1 transition-transform">{section.title}</h3>
                        <p className="text-intense-indigo/60 font-medium text-sm leading-relaxed mb-8">
                          {section.description}
                        </p>
                        <div className="flex items-center text-intense-indigo font-black text-[10px] uppercase tracking-widest gap-2 group-hover:gap-3 transition-all">
                          Explore Curriculum <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Support Section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
                <div className="bg-emerald-50/30 rounded-[2rem] p-10 border border-emerald-100 relative overflow-hidden group">
                  <div className="relative z-10">
                    <span className="text-[10px] font-black text-emerald-600/40 uppercase tracking-[0.2em] mb-4 block">Candidate Support</span>
                    <h3 className="text-2xl font-sans font-bold text-intense-indigo mb-4">Study with Sierra</h3>
                    <p className="text-intense-indigo/60 text-sm mb-8 max-w-sm leading-relaxed">
                      Join our private groups for active candidates. Share resources, discuss mocks, and find accountability partners for your next level.
                    </p>
                    <button 
                      onClick={() => navigate('/join')}
                      className="inline-flex items-center gap-2 px-8 py-3 bg-white border border-emerald-100 rounded-xl text-[10px] font-black text-emerald-600 uppercase tracking-widest hover:bg-emerald-500 hover:text-white transition-all shadow-sm"
                    >
                      Join Community <ArrowRight size={14} />
                    </button>
                  </div>
                  <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-emerald-500/5 rounded-full group-hover:scale-110 transition-transform duration-700"></div>
                </div>

                <div className="bg-gray-50/80 p-10 rounded-[2rem] border border-gray-100 flex flex-col justify-center">
                   <h3 className="text-lg font-bold text-intense-indigo mb-4 flex items-center gap-2">
                     <BookOpen className="w-5 h-5" />
                     Education Policy & Updates
                   </h3>
                   <p className="text-intense-indigo/60 text-sm leading-relaxed mb-6">
                     We keep our hub aligned with the latest CFA Institute changes, including the new Practical Skills Modules and updated testing windows.
                   </p>
                   <div className="flex flex-wrap gap-4">
                     {['2026 Curriculum', 'Exam Windows', 'Ethics Update'].map((tag) => (
                       <span key={tag} className="px-3 py-1 bg-white border border-gray-100 rounded-full text-[9px] font-black text-intense-indigo/40 uppercase tracking-widest">
                         {tag}
                       </span>
                     ))}
                   </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="detail"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-0"
            >
              {/* Detail Header */}
              <div className="pb-12 border-b border-gray-100 mb-12 flex flex-col md:flex-row justify-between items-end gap-8">
                <div className="max-w-3xl">
                  <div className="flex items-center gap-3 mb-4 text-intense-indigo">
                    <button 
                      onClick={() => {
                        setSelectedSectionId(null);
                        setSelectedTopicId(null);
                      }}
                      className="w-10 h-10 bg-intense-indigo/5 text-intense-indigo rounded-lg flex items-center justify-center hover:bg-intense-indigo hover:text-white transition-all"
                      title="Back to Hub"
                    >
                      <ArrowLeft size={20} />
                    </button>
                    <button 
                      onClick={() => {
                        setSelectedSectionId(null);
                        setSelectedTopicId(null);
                      }}
                      className="text-[11px] font-black uppercase tracking-[0.4em] cursor-pointer hover:text-intense-indigo/60 transition-colors"
                    >
                      CFA HUB
                    </button>
                    <span className="text-[11px] opacity-20">/</span>
                    <span className="text-[11px] font-black uppercase tracking-[0.4em] opacity-40">{selectedSection?.title}</span>
                  </div>
                  <h1 className="font-sans text-3xl md:text-5xl lg:text-6xl leading-[1.1] text-intense-indigo mb-6 tracking-tighter flex flex-col md:flex-row md:items-baseline gap-4 md:gap-6">
                    <span className="font-bold">{selectedSection?.title}</span>
                  </h1>
                </div>

                <div className="pb-2">
                  <a 
                    href="https://www.cfainstitute.org" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-3 bg-intense-indigo text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-opacity-90 transition-all shadow-lg shadow-indigo-100"
                  >
                    Official Portal <ExternalLink size={14} />
                  </a>
                </div>
              </div>

              <div className="relative">
                {/* Fixed Contents Sidebar */}
                <div 
                  className="fixed left-0 top-1/2 -translate-y-1/2 w-3 hover:w-6 group/sidebar cursor-pointer h-48 flex items-center justify-center z-[100] transition-all"
                >
                  <div className="flex flex-col items-center gap-1 opacity-20 group-hover/sidebar:opacity-0 transition-opacity">
                    <div className="w-[1.5px] h-16 bg-intense-indigo rounded-full" />
                    <div className="text-[7px] font-black text-intense-indigo uppercase [writing-mode:vertical-lr] tracking-[0.4em] mt-3">Contents</div>
                  </div>

                  <div className="absolute left-[-300px] top-1/2 -translate-y-1/2 w-[260px] bg-white shadow-2xl border border-gray-100 group-hover/sidebar:left-0 transition-all duration-500 ease-out p-5 z-[101] rounded-r-2xl">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between border-b border-gray-50 pb-3">
                        <h4 className="text-[9px] font-black text-intense-indigo/20 uppercase tracking-[0.2em]">Module Index</h4>
                        <div className="w-1.5 h-1.5 rounded-full bg-intense-indigo animate-pulse" />
                      </div>
                      <nav className="flex flex-col gap-0">
                        {selectedSection?.subTopics.map((topic) => (
                          <button
                            key={topic.id}
                            onClick={() => handleNavTopic(topic)}
                            className="group flex items-center gap-2 py-1 px-3 rounded-lg text-left text-[11px] font-bold text-intense-indigo/50 hover:text-intense-indigo hover:bg-intense-indigo/5 transition-all w-full"
                          >
                            <div className="w-1 h-1 rounded-full bg-intense-indigo/10 group-hover:bg-intense-indigo transition-colors shrink-0"></div>
                            <span className="truncate">{topic.title}</span>
                          </button>
                        ))}
                      </nav>
                      <div className="pt-3 text-center border-t border-gray-50">
                        <p className="text-[7px] font-bold text-intense-indigo/10 uppercase tracking-[0.2em]">
                          Navigate with precision
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Main Content Sections */}
                <div className="space-y-0 -mx-4 sm:-mx-8 lg:-mx-[2cm]">
                  {selectedSection?.subTopics.map((topic, tidx) => {
                    const colors = [
                      'bg-intense-indigo text-white',
                      'bg-indigo-50/50 text-intense-indigo',
                      'bg-white text-intense-indigo',
                      'bg-gray-50 text-intense-indigo'
                    ];
                    const colorClass = colors[tidx % colors.length];
                    const isDark = colorClass.includes('bg-intense-indigo');
                    
                    const prevTopic = selectedSection.subTopics[tidx - 1];
                    const nextTopic = selectedSection.subTopics[tidx + 1];

                    return (
                      <section 
                        key={topic.id} 
                        id={topic.id}
                        className={`${colorClass} py-24 px-4 sm:px-8 lg:px-[2cm] transition-all duration-500`}
                      >
                        <div className="max-w-full">
                          <TopicRenderer 
                            topic={topic} 
                            isDark={isDark} 
                            onLinkClick={handleLinkClick}
                            prevTopic={prevTopic}
                            nextTopic={nextTopic}
                            onNavTopic={handleNavTopic}
                          />
                        </div>
                      </section>
                    );
                  })}

                  {/* Page-End Section Navigation */}
                  {(() => {
                    const currentIdx = cfaContent.findIndex(s => s.id === selectedSectionId);
                    const prevSection = cfaContent[currentIdx - 1];
                    const nextSection = cfaContent[currentIdx + 1];

                    return (
                      <section className="bg-white py-24 px-4 sm:px-8 lg:px-[2cm]">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          {prevSection ? (
                            <button 
                              onClick={() => setSelectedSectionId(prevSection.id)}
                              className="group p-10 bg-gray-50 rounded-[2rem] border border-gray-100 text-left hover:border-intense-indigo/20 transition-all"
                            >
                              <span className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40 mb-4 block">Previous Card</span>
                              <div className="flex items-center justify-between">
                                <h3 className="text-2xl font-bold text-intense-indigo">{prevSection.title}</h3>
                                <ArrowLeft className="text-intense-indigo group-hover:-translate-x-2 transition-transform" />
                              </div>
                            </button>
                          ) : <div />}
                          
                          {nextSection ? (
                            <button 
                              onClick={() => setSelectedSectionId(nextSection.id)}
                              className="group p-10 bg-intense-indigo rounded-[2rem] text-white text-right hover:shadow-2xl hover:shadow-indigo-500/20 transition-all border border-transparent"
                            >
                              <span className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40 mb-4 block">Next Card</span>
                              <div className="flex items-center justify-between">
                                <ArrowRight className="text-white group-hover:translate-x-2 transition-transform" />
                                <h3 className="text-2xl font-bold">{nextSection.title}</h3>
                              </div>
                            </button>
                          ) : (
                            <button 
                              onClick={() => setSelectedSectionId(null)}
                              className="group p-10 bg-intense-indigo rounded-[2rem] text-white text-center hover:shadow-2xl hover:shadow-indigo-500/20 transition-all"
                            >
                              <span className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40 mb-4 block">End of Hub</span>
                              <h3 className="text-2xl font-bold">Return to Content Grid</h3>
                            </button>
                          )}
                        </div>
                        <div className="mt-12 text-center">
                          <p className="text-[10px] font-black uppercase tracking-widest text-intense-indigo/30">
                            Sierra CFA Intelligence Hub • Fully calibrated for the latest 2026 Curriculum Logic
                          </p>
                        </div>
                      </section>
                    );
                  })()}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </main>
  );
}

