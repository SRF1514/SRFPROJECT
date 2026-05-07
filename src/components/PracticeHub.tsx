import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Lock, 
  Database, 
  PenTool, 
  BarChart, 
  HelpCircle, 
  ArrowRight, 
  ArrowLeft,
  CheckCircle2, 
  ChevronRight,
  ShieldCheck,
  Star,
  Info,
  XCircle,
  Lightbulb,
  RotateCcw,
  Award,
  PieChart,
  Target,
  Zap,
} from 'lucide-react';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';
import { practiceStatsService } from '../services/practiceStatsService';
import { supabaseData } from '../services/supabaseData';
import { 
  batch1A, batch1B, batch1C, batch1D, batch1E, batch1F, batch1G, 
  batch2A, batch2B, batch2C, batch2D, batch2E, batch2F, batch2G, 
  batch3A, batch3B, batch4A, batch4B, batch5A, batch5B, batch6A, 
  batch6B, batch7A, batch7B, batch8A, batch8B, batch9, batch10, 
  batch11, batch12, batch13, batch14, finalExam2024, resitApril2024, 
  resitApril2024Open, resitApril2024MCQ, finalJan2025, resitApril2025, 
  resitApril2025Open, resitApril2025MCQ,
  mockSierra1, mockSierra2, mockSierra3, mockSierra4, mockSierra5,
  mockSierra6, mockSierra7, mockSierra8, mockSierra9, mockSierra10,
  mockSierra11, mockSierra12, mockSierra13,
  Question 
} from '../data/practiceQuestions';
import { useEffect, useMemo } from 'react';

interface PracticeHubProps {
  onBack?: () => void;
}

const getEstimatedTime = (batch: Question[]) => {
  const mcq = batch.filter(q => q.options && q.options.length > 0).length;
  const openEnded = batch.length - mcq;
  const totalMinutes = mcq * 3 + openEnded * 8;
  if (totalMinutes >= 60) {
    const hours = Math.floor(totalMinutes / 60);
    const mins = totalMinutes % 60;
    return mins > 0 ? `${hours}h ${mins}m Estimated` : `${hours}h Estimated`;
  }
  return `${totalMinutes}m Estimated`;
};

const PracticeHub: React.FC<PracticeHubProps> = ({ onBack }) => {
  const { user, subscriptionTier } = useAuth();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<'mcq' | 'open' | 'mocks'>('mcq');

  // Quiz State
  const [activeQuiz, setActiveQuiz] = useState<Question[] | null>(null);
  const [activeBatchName, setActiveBatchName] = useState<string>('');
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [showSolution, setShowSolution] = useState<Record<string, boolean>>({});

  const isSierra = subscriptionTier === 'pro';
  const [showUpgradePrompt, setShowUpgradePrompt] = useState(false);

  // Local state for statistics (would ideally come from a backend)
  const [stats, setStats] = useState(practiceStatsService.getStats());

  useEffect(() => {
    const fetchDBStats = async () => {
      const dbStats = await supabaseData.getPracticeStats();
      if (dbStats) {
        const mappedStats = {
          completedItems: dbStats.completed_items,
          mocksDone: dbStats.mocks_done,
          avgScore: dbStats.avg_score,
          readiness: dbStats.readiness,
          hoursPracticed: dbStats.hours_practiced,
          completedBatches: dbStats.completed_batches || []
        };
        setStats(mappedStats);
        // Also update localStorage to stay in sync
        localStorage.setItem('sierra_practice_stats', JSON.stringify(mappedStats));
      }
    };
    if (user) {
      fetchDBStats();
    }
  }, [user]);

  useEffect(() => {
    practiceStatsService.saveStats(stats);
  }, [stats]);

  const [activeMembers, setActiveMembers] = useState(1240);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMembers(prev => {
        const change = Math.floor(Math.random() * 100) + 1;
        const up = Math.random() > 0.5;
        const next = up ? prev + change : prev - change;
        return Math.max(100, Math.min(next, 5000));
      });
    }, 45000);
    return () => clearInterval(interval);
  }, []);

  const handleFinalSubmit = () => {
    setSubmitted(true);
    if (!activeQuiz) return;
    
    const mcqQuestions = activeQuiz.filter(q => q.options && q.options.length > 0);
    const score = calculateScore();
    const percent = mcqQuestions.length > 0 ? Math.round((score / mcqQuestions.length) * 100) : 100;
    
    setStats(prev => {
      const newCompleted = prev.completedItems + activeQuiz.length;
      const mcqCount = mcqQuestions.length;
      const openCount = activeQuiz.length - mcqCount;
      const hoursAdded = (mcqCount * 3 + openCount * 8) / 60;
      
      const newMocks = activeBatchName.toLowerCase().includes('mock') ? prev.mocksDone + 1 : prev.mocksDone;
      
      const newAvgScore = prev.completedItems === 0 
        ? percent 
        : Math.round((prev.avgScore * prev.completedItems + percent * activeQuiz.length) / newCompleted);

      const newReadiness = Math.round((newAvgScore * 0.7) + (Math.min(newCompleted / 482, 1) * 30));

      const newCompletedBatches = prev.completedBatches ? [...prev.completedBatches] : [];
      if (!newCompletedBatches.includes(activeBatchName)) {
        newCompletedBatches.push(activeBatchName);
      }

      return {
        completedItems: newCompleted,
        mocksDone: newMocks,
        avgScore: newAvgScore,
        readiness: Math.min(newReadiness, 100),
        hoursPracticed: Number((prev.hoursPracticed + hoursAdded).toFixed(1)),
        completedBatches: newCompletedBatches
      };
    });
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStartBatch = (batch: Question[], name: string, premium: boolean = false) => {
    if (premium && !isSierra) {
      setShowUpgradePrompt(true);
      return;
    }
    setActiveQuiz(batch);
    setActiveBatchName(name);
    setUserAnswers({});
    setSubmitted(false);
    setShowSolution({});
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const totalRequiredTime = useMemo(() => {
    // Basic calculation for entire bank: 331 MCQs (3m) + 151 Open (8m)
    const mcqTime = 331 * 3;
    const openTime = 151 * 8;
    return ((mcqTime + openTime) / 60).toFixed(1);
  }, []);

  const calculateScore = () => {
    if (!activeQuiz) return 0;
    return activeQuiz.reduce((acc, q) => acc + (userAnswers[q.id] === q.correctAnswer ? 1 : 0), 0);
  };

  if (!user || !isSierra) {
    return (
      <div className="min-h-screen bg-white py-24 flex items-center justify-center px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-xl w-full text-center space-y-8"
        >
          <div className="w-20 h-20 bg-intense-indigo/5 rounded-full flex items-center justify-center mx-auto text-intense-indigo mb-8">
            <Lock size={40} className="stroke-[1.5]" />
          </div>
          
          <div className="space-y-4">
            <h2 className="text-4xl font-bold tracking-tight text-intense-indigo italic">Sierra Practice Hub</h2>
            <p className="text-lg text-intense-indigo/60 font-medium leading-relaxed italic">
              The complete numerical question set: 331 multiple-choice questions, 151 open-ended questions, and 17 mock exams, all aligned with the latest 2026 curriculum. Includes detailed step-by-step solutions and explanations for every question.
            </p>
          </div>
          
          <div className="bg-gray-50 border border-gray-100 rounded-3xl p-10 text-left space-y-8">
            <h4 className="text-[11px] font-black uppercase tracking-widest text-intense-indigo/40">Exclusive Member Benefits</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: '482 Institutional Items', sub: 'Calibrated difficulty mapping the 2026 curve.' },
                { title: 'Real-time Logic Recovery', sub: 'Instant feedback with model answers and logic paths.' },
                { title: 'Proprietary Mock Series', sub: '17 high-stakes simulations updated for the 2026 standards.' },
                { title: 'Performance Intelligence', sub: 'Track readiness, average scores, and curriculum mastery.' }
              ].map((item, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex gap-3 items-center">
                    <div className="w-5 h-5 bg-intense-indigo/10 rounded-full flex items-center justify-center shrink-0">
                      <CheckCircle2 size={12} className="text-intense-indigo" />
                    </div>
                    <span className="block font-bold text-intense-indigo text-sm italic tracking-tight">{item.title}</span>
                  </div>
                  <p className="text-[11px] text-intense-indigo/50 italic leading-relaxed pl-8">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            {!user ? (
              <button 
                onClick={() => navigate('/signin')}
                className="w-full py-5 bg-intense-indigo text-white rounded-2xl font-black uppercase tracking-widest text-sm hover:scale-[1.02] transition-all shadow-xl shadow-indigo-500/20"
              >
                Sign In to Start
              </button>
            ) : (
              <button 
                onClick={() => navigate('/join')}
                className="w-full py-5 bg-intense-indigo text-white rounded-2xl font-black uppercase tracking-widest text-sm hover:scale-[1.02] transition-all shadow-xl shadow-indigo-500/20"
              >
                Upgrade to Sierra
              </button>
            )}
            <button 
              onClick={() => navigate(-1)}
              className="w-full py-5 border-2 border-intense-indigo/10 text-intense-indigo/60 font-black tracking-widest text-[10px] rounded-2xl hover:bg-gray-50 transition-all"
            >
              Back to Overview
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  if (activeQuiz) {
    const mcqQuestions = activeQuiz.filter(q => q.options && q.options.length > 0);
    const score = calculateScore();
    const percentage = mcqQuestions.length > 0 ? Math.round((score / mcqQuestions.length) * 100) : 0;
    const hasMcqs = mcqQuestions.length > 0;

    return (
      <div className="min-h-screen bg-white py-12 px-4 sm:px-8 lg:px-[2cm]">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Quiz Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-gray-100 pb-8">
            <div>
              <button 
                onClick={() => setActiveQuiz(null)}
                className="flex items-center gap-2 text-intense-indigo/40 hover:text-intense-indigo transition-colors mb-2"
              >
                <ArrowLeft size={16} />
                <span className="text-[10px] font-black tracking-widest">Redirect to Sierra Practice Hub</span>
              </button>
              <h2 className="text-3xl font-bold text-intense-indigo italic">{activeBatchName}</h2>
              <p className="text-intense-indigo/50 font-medium text-sm">2026 Core Curriculum • {activeQuiz.length} Questions • {getEstimatedTime(activeQuiz)}</p>
            </div>
            {submitted && hasMcqs && (
              <div className="bg-intense-indigo text-white px-8 py-4 rounded-2xl text-center">
                <div className="text-[10px] font-black uppercase tracking-widest opacity-60">Your Score</div>
                <div className="text-3xl font-bold">{percentage}%</div>
                <div className="text-[10px] font-medium opacity-60">{score}/{mcqQuestions.length} Correct</div>
              </div>
            )}
            {submitted && !hasMcqs && (
              <div className="bg-green-500 text-white px-8 py-4 rounded-2xl text-center">
                <CheckCircle2 className="mx-auto mb-1" size={20} />
                <div className="text-[10px] font-black uppercase tracking-widest opacity-90">Review Complete</div>
              </div>
            )}
          </div>

          {/* Question List */}
          <div className="space-y-16">
            {activeQuiz.map((q, idx) => (
              <div key={q.id} className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-intense-indigo/5 text-intense-indigo rounded-lg flex items-center justify-center shrink-0 font-extrabold">
                    {idx + 1}
                  </div>
                  <div className="space-y-6 w-full">
                    <p className="text-lg text-intense-indigo/80 font-medium leading-relaxed">
                      {q.question}
                    </p>

                    {/* Options */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {q.options ? q.options.map((option) => {
                        const isSelected = userAnswers[q.id] === option;
                        const isCorrect = option === q.correctAnswer;
                        const showResult = submitted;

                        let style = "border-gray-100 bg-white hover:border-intense-indigo/20";
                        if (isSelected) style = "border-intense-indigo bg-blue-50";
                        if (showResult) {
                          if (isCorrect) style = "border-green-500 bg-green-50";
                          else if (isSelected && !isCorrect) style = "border-red-500 bg-red-50";
                        }

                        return (
                          <button
                            key={option}
                            disabled={submitted}
                            onClick={() => setUserAnswers(prev => ({ ...prev, [q.id]: option }))}
                            className={`p-4 rounded-xl border-2 text-left transition-all ${style} flex justify-between items-center`}
                          >
                            <span className="text-sm font-bold text-intense-indigo">{option}</span>
                            {showResult && isCorrect && <CheckCircle2 size={16} className="text-green-600" />}
                            {showResult && isSelected && !isCorrect && <XCircle size={16} className="text-red-600" />}
                          </button>
                        );
                      }) : (
                        <div className="md:col-span-2 p-6 border-2 border-intense-indigo/10 rounded-2xl bg-gray-50/50 space-y-4">
                          <div className="flex justify-between items-center">
                            <p className="text-xs font-black uppercase tracking-widest text-intense-indigo/40">Numeric Goal / Self-Assessment</p>
                            {submitted && (
                               <div className="text-[10px] font-black uppercase tracking-widest text-green-600 bg-green-50 px-2 py-0.5 rounded">
                                 Compare with Solution below
                               </div>
                            )}
                          </div>
                          
                          <div className="relative">
                            <input 
                              type="text"
                              disabled={submitted}
                              placeholder="Insert your calculated value here..."
                              value={userAnswers[q.id] || ''}
                              onChange={(e) => setUserAnswers(prev => ({ ...prev, [q.id]: e.target.value }))}
                              className="w-full p-4 bg-white border-2 border-intense-indigo/10 rounded-xl focus:border-intense-indigo/30 focus:outline-none text-intense-indigo font-bold transition-all disabled:opacity-50"
                            />
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-intense-indigo/20 pointer-events-none">
                              <PenTool size={16} />
                            </div>
                          </div>

                          <p className="text-[10px] text-intense-indigo/40 font-medium">
                            Think through the full process, enter your final value, then use "View Solution" to verify.
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Action Bar */}
                    <div className="flex items-center gap-4">
                      {(submitted || !q.options) && (
                        <button 
                          onClick={() => setShowSolution(prev => ({ ...prev, [q.id]: !prev[q.id] }))}
                          className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-intense-indigo hover:opacity-70 transition-opacity"
                        >
                          <Lightbulb size={14} />
                          {showSolution[q.id] ? "Hide Solution" : "View Solution"}
                        </button>
                      )}
                    </div>

                    {/* Solution Display */}
                    <AnimatePresence>
                      {showSolution[q.id] && (
                        <motion.div 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 text-sm leading-relaxed text-intense-indigo/70 font-medium">
                            <span className="font-bold text-intense-indigo block mb-2 underline decoration-indigo-200">Solution Process:</span>
                            {q.process}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quiz Footer */}
          <div className="pt-12 border-t border-gray-100 flex gap-4">
            {!submitted ? (
              <button 
                onClick={handleFinalSubmit}
                className="px-12 py-5 bg-intense-indigo text-white rounded-2xl font-black uppercase tracking-widest shadow-xl shadow-indigo-500/20 hover:scale-[1.02] transition-all"
              >
                Submit All Answers
              </button>
            ) : (
              <button 
                onClick={() => handleStartBatch(activeQuiz, activeBatchName)}
                className="px-12 py-5 border-2 border-intense-indigo text-intense-indigo rounded-2xl font-black uppercase tracking-widest flex items-center gap-3 hover:bg-intense-indigo/5 transition-colors"
              >
                <RotateCcw size={18} />
                Reset & Retake
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <AnimatePresence>
        {showUpgradePrompt && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="bg-white rounded-[2rem] p-10 max-w-md w-full text-center space-y-6 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4">
                <button onClick={() => setShowUpgradePrompt(false)} className="text-gray-400 hover:text-black">
                  <XCircle size={24} />
                </button>
              </div>
              <div className="w-20 h-20 bg-intense-indigo text-white rounded-[2rem] flex items-center justify-center mx-auto shadow-xl">
                 <Lock size={40} />
              </div>
              <h2 className="text-3xl font-black text-intense-indigo italic tracking-tighter">Sierra Member Access</h2>
              <p className="text-gray-500 font-medium leading-relaxed">
                Update to unlock sierra member benefits. Access our premium mocks, advanced numeric simulations, and 2026-calibrated Case Studies.
              </p>
              <button 
                onClick={() => navigate('/upgrade')}
                className="w-full py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-xl hover:scale-105 transition-transform"
              >
                Upgrade to Sierra Pro
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Header */}
      <section className="bg-intense-indigo py-10 px-4 sm:px-8 lg:px-[2cm] text-white overflow-hidden relative">
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        
        <div className="relative z-10 max-w-6xl mx-auto">
          {onBack && (
            <button 
              onClick={onBack}
              className="flex items-center gap-2 text-white/40 hover:text-white transition-colors group mb-6"
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
              <span className="text-[9px] font-black tracking-widest">Return to Content Hub</span>
            </button>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-3">
                <div className="flex items-center gap-3">
                   <div className="px-3 py-0.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-[9px] font-black tracking-widest text-indigo-200">
                     Sierra Premium Access
                   </div>
                   <div className="flex -space-x-1.5">
                     {[1,2,3,4].map(i => <div key={i} className="w-5 h-5 rounded-full border-2 border-intense-indigo bg-gradient-to-br from-blue-400 to-indigo-600 shadow-lg" />)}
                   </div>
                   <motion.span 
                       key={activeMembers}
                       initial={{ opacity: 0, y: 5 }}
                       animate={{ opacity: 1, y: 0 }}
                       className="text-[8px] font-black tracking-[0.3em] text-white/20 italic"
                    >
                       {activeMembers} Members Live
                    </motion.span>
                </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[0.9] italic overflow-visible">
                The Practice <br /> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-white/40">Powerhouse.</span>
              </h1>
              <p className="text-lg md:text-xl text-white/60 leading-tight font-medium italic max-w-xl">
                Institutional-grade simulation. 482 items mapped to the 2026 Cfa Program curriculum.
              </p>
            </div>
            
            <div className="lg:col-span-4 self-center">
              <div className="bg-white/5 backdrop-blur-sm p-5 rounded-[1.2rem] border border-white/10 shadow-2xl relative overflow-hidden group/stats">
                 {!isSierra && (
                   <div className="absolute inset-0 z-20 bg-black/40 backdrop-blur-md flex flex-col items-center justify-center text-center p-5 space-y-3">
                      <Lock className="text-white/40 mb-1" size={24} />
                      <p className="text-[9px] font-black uppercase tracking-widest text-white leading-relaxed">
                        Update to unlock <br /> sierra benefits
                      </p>
                      <button 
                        onClick={() => setShowUpgradePrompt(true)}
                        className="px-3 py-1.5 bg-white text-intense-indigo rounded-lg text-[8px] font-black uppercase tracking-widest hover:scale-105 transition-transform"
                      >
                        Upgrade
                      </button>
                   </div>
                 )}
                 <div className="text-[9px] font-black tracking-widest text-indigo-300 mb-3">Progress Tracking</div>
                 <div className="space-y-3">
                    <div className="flex justify-between items-center text-xs font-bold">
                       <span>Curriculum Mastery</span>
                       <span className="text-emerald-400">{stats.readiness}%</span>
                    </div>
                    <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                       <motion.div initial={{ width: 0 }} animate={{ width: `${stats.readiness}%` }} transition={{ duration: 1.5, ease: "easeOut" }} className="h-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.5)]" />
                    </div>
                    <div className="flex justify-between items-end">
                      <p className="text-[8px] text-white/30 leading-tight max-w-[150px] font-medium italic">
                        {stats.completedItems > 0 
                          ? `${stats.completedItems} items completed.`
                          : "Begin your session to track progress."}
                      </p>
                      <div className="text-right">
                         <div className="text-[7px] font-black text-white/20">Avg Acc</div>
                         <div className="text-xs font-black text-white">{stats.avgScore}%</div>
                      </div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats/Overview */}
      <section className="py-8 border-b border-gray-100 bg-gray-50/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: 'Question Bank', value: '482+', icon: Database },
            { label: 'Avg. Accuracy', value: stats.completedItems > 0 ? `${stats.avgScore}%` : 'No Data', icon: BarChart },
            { label: 'Required Time', value: `${totalRequiredTime}h`, icon: HelpCircle },
            { label: 'Curriculum Year', value: '2026', icon: ShieldCheck },
          ].map((stat, i) => (
            <div key={i} className="flex gap-2.5 items-center relative">
              {!isSierra && (i === 1 || i === 3) && (
                <div className="absolute inset-0 z-10 bg-white/10 backdrop-blur-[1px] flex items-center justify-center rounded-lg">
                  <Lock size={10} className="text-intense-indigo/20" />
                </div>
              )}
              <div className="p-2 bg-intense-indigo/5 text-intense-indigo rounded-lg">
                <stat.icon size={16} />
              </div>
              <div>
                <div className="text-[8px] font-black uppercase tracking-widest text-intense-indigo/40">{stat.label}</div>
                <div className="text-base font-bold text-intense-indigo">{stat.value}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Main Content Layout */}
      <main className="max-w-6xl mx-auto py-8 px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left: Explanations & Methodology */}
        <div className="lg:col-span-4 space-y-12">
          <div className="space-y-6">
            <div className="w-12 h-1 bg-intense-indigo mb-6" />
            <h3 className="text-2xl font-bold text-intense-indigo">How to use this space</h3>
            <p className="text-intense-indigo/70 leading-relaxed font-medium italic">
              "Passing isn't about memorization; it's about the speed of your logic recovery."
            </p>
          </div>

          <div className="space-y-8">
            <div className="p-6 bg-gray-50 rounded-2xl space-y-4">
              <h4 className="flex items-center gap-2 font-bold text-intense-indigo">
                 <Info size={16} /> Question Types
              </h4>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                  <span className="text-[10px] font-black text-intense-indigo/50 uppercase block mb-1">Type A</span>
                  <span className="font-bold text-sm block">Multiple Choice (MCQ)</span>
                  <p className="text-xs text-gray-500 mt-2">
                    Used for speed of recall in Quantitative Methods and Economics. High density, immediate feedback.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                  <span className="text-[10px] font-black text-intense-indigo/50 uppercase block mb-1">Type B</span>
                  <span className="font-bold text-sm block">Open-Ended (Constructed)</span>
                  <p className="text-xs text-gray-500 mt-2">
                    Case study vignettes where you synthesize Portfolio Management reports. Manual grading tools included.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-intense-indigo">Success Roadmap</h4>
              {[
                'Foundations: Master MCQs first (300 questions)',
                'Integration: Move to Item Sets (Case style)',
                'Synthesis: Final Open-Ended Simulations',
                'Validation: 4-Hour Mock Marathon'
              ].map((step, i) => (
                <div key={i} className="flex gap-4 items-center group cursor-default">
                  <div className="w-6 h-6 border-2 border-intense-indigo/20 text-intense-indigo/40 rounded-full flex items-center justify-center text-[10px] font-black group-hover:border-intense-indigo group-hover:text-intense-indigo transition-colors">
                    {i + 1}
                  </div>
                  <span className="text-sm font-bold text-intense-indigo/60">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Question Selection/Preview */}
        <div className="lg:col-span-8 space-y-12">
          {/* Performance Metrics Section in Hub */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                { label: 'Questions Completed', value: stats.completedItems, unit: 'Items' },
                { label: 'Mocks Completed', value: stats.mocksDone, unit: 'Sets' },
                { label: 'Average Score', value: stats.completedItems > 0 ? `${stats.avgScore}%` : 'N/A', unit: '' },
                { label: 'Readiness for Exam', value: `${stats.readiness}%`, unit: 'Calculated' },
                { label: 'Hours Practiced', value: stats.hoursPracticed, unit: 'Hrs' },
              ].map((metric, i) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="p-3 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all group relative overflow-hidden flex flex-col justify-center h-[70px]"
                >
                  {!isSierra && (
                    <div className="absolute inset-0 z-10 bg-white/60 backdrop-blur-[1px] flex items-center justify-center">
                      <Lock size={16} className="text-intense-indigo/20" />
                    </div>
                  )}
                  <div className="text-[9px] font-black uppercase tracking-widest text-gray-400 mb-0.5">{metric.label}</div>
                  <div className="flex items-baseline gap-1">
                    <div className="text-lg font-black italic text-intense-indigo group-hover:scale-105 transition-transform duration-500">
                      {metric.value}
                    </div>
                    {metric.unit && <span className="text-[8px] font-bold opacity-40 uppercase">{metric.unit}</span>}
                  </div>
                </motion.div>
              ))}
          </div>

          {/* Category Tabs */}
          <div className="flex gap-8 border-b border-gray-100 pb-2 overflow-x-auto whitespace-nowrap">
            {(['mcq', 'open', 'mocks'] as const).map((cat) => {
              const isLockedCategory = cat === 'mocks' && !isSierra;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`relative pb-4 px-2 text-[11px] font-black uppercase tracking-[0.2em] transition-all flex items-center gap-2 ${
                    selectedCategory === cat ? 'text-intense-indigo opacity-100' : 'text-intense-indigo opacity-30 hover:opacity-100'
                  }`}
                >
                  {cat === 'mcq' ? 'Technical MCQs' : cat === 'open' ? 'Open-Ended Essays' : 'Full Mocks'}
                  {isLockedCategory && <Lock size={12} className="text-amber-500" />}
                  {selectedCategory === cat && (
                    <motion.div 
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-1 bg-intense-indigo"
                    />
                  )}
                </button>
              );
            })}
          </div>

          <div className={`grid gap-4 ${selectedCategory === 'mocks' ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'}`}>
            {selectedCategory === 'mcq' && (
              <>
                {/* Batch 1A */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -4 }}
                  onClick={() => handleStartBatch(batch1A, 'Asset Pricing & DCF (AAPL/MSFT Focus)')}
                  className={`group p-4 rounded-2xl border-2 transition-all cursor-pointer relative overflow-hidden ${
                    stats.completedBatches?.includes('Asset Pricing & DCF (AAPL/MSFT Focus)')
                    ? 'bg-blue-50 border-blue-200 shadow-indigo-500/5'
                    : 'bg-white border-intense-indigo/10 hover:border-intense-indigo/40 hover:shadow-xl hover:shadow-indigo-500/10'
                  }`}
                >
                  <div className="flex justify-between items-start mb-3">
                    <div className="p-1.5 rounded-lg bg-intense-indigo text-white">
                      <Star size={14} className="fill-white" />
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-intense-indigo mb-1 group-hover:text-blue-600 transition-colors italic leading-tight">
                    Asset Pricing Model <br /> & DCF (AAPL/MSFT)
                  </h4>
                  <p className="text-xs text-intense-indigo/50 font-medium mb-3">
                    {batch1A.length} Technical Questions • {getEstimatedTime(batch1A)}</p>
                  <div className="flex items-center justify-between pt-3 border-t border-gray-50 text-intense-indigo">
                     <span className="text-[9px] font-black uppercase tracking-widest">{stats.completedBatches?.includes('Asset Pricing & DCF (AAPL/MSFT Focus)') ? 'Retake & ' : ''}Start Practice Mode</span>
                     <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>

                {/* Batch 1B */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -4 }}
                  onClick={() => handleStartBatch(batch1B, 'Portfolio Analytics (Beta/CAPM Simulation)')}
                  className={`group p-4 rounded-2xl border-2 transition-all cursor-pointer relative overflow-hidden ${
                    stats.completedBatches?.includes('Portfolio Analytics (Beta/CAPM Simulation)')
                    ? 'bg-blue-50 border-blue-200 shadow-indigo-500/5'
                    : 'bg-white border-intense-indigo/10 hover:border-intense-indigo/40 hover:shadow-xl hover:shadow-indigo-500/10'
                  }`}
                >
                  <div className="flex justify-between items-start mb-3">
                    <div className="p-1.5 rounded-lg bg-intense-indigo text-white">
                      <BarChart size={14} />
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-intense-indigo mb-1 group-hover:text-blue-600 transition-colors italic leading-tight">
                    Portfolio Analytics <br /> & Beta (Simulation)
                  </h4>
                  <p className="text-xs text-intense-indigo/50 font-medium mb-3">
                    {batch1B.length} Technical Questions • {getEstimatedTime(batch1B)}</p>
                  <div className="flex items-center justify-between pt-3 border-t border-gray-50 text-intense-indigo">
                     <span className="text-[9px] font-black uppercase tracking-widest">{stats.completedBatches?.includes('Portfolio Analytics (Beta/CAPM Simulation)') ? 'Retake & ' : ''}Start Practice Mode</span>
                     <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>

                {/* Batch 1C */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -4 }}
                  onClick={() => handleStartBatch(batch1C, 'WACC & Market Risk (Efficiency Analysis)')}
                  className={`group p-4 rounded-2xl border-2 transition-all cursor-pointer relative overflow-hidden ${
                    stats.completedBatches?.includes('WACC & Market Risk (Efficiency Analysis)')
                    ? 'bg-blue-50 border-blue-200 shadow-indigo-500/5'
                    : 'bg-white border-intense-indigo/10 hover:border-intense-indigo/40 hover:shadow-xl hover:shadow-indigo-500/10'
                  }`}
                >
                  <div className="flex justify-between items-start mb-3">
                    <div className="p-1.5 rounded-lg bg-intense-indigo text-white">
                      <Database size={14} />
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-intense-indigo mb-1 group-hover:text-blue-600 transition-colors italic leading-tight">
                    WACC & Efficiency <br /> Analysis (Risk)
                  </h4>
                  <p className="text-xs text-intense-indigo/50 font-medium mb-3">
                    {batch1C.length} Multi-Choice Questions • {getEstimatedTime(batch1C)}</p>
                  <div className="flex items-center justify-between pt-3 border-t border-gray-50 text-intense-indigo">
                     <span className="text-[9px] font-black uppercase tracking-widest">{stats.completedBatches?.includes('WACC & Market Risk (Efficiency Analysis)') ? 'Retake & ' : ''}Start Practice Mode</span>
                     <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>

                {/* Batch 1D */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -4 }}
                  onClick={() => handleStartBatch(batch1D, 'Equity Valuation & Bond Pricing (TSLA/NVDA Analysis)')}
                  className={`group p-4 rounded-2xl border-2 transition-all cursor-pointer relative overflow-hidden ${
                    stats.completedBatches?.includes('Equity Valuation & Bond Pricing (TSLA/NVDA Analysis)')
                    ? 'bg-blue-50 border-blue-200 shadow-indigo-500/5'
                    : 'bg-white border-intense-indigo/10 hover:border-intense-indigo/40 hover:shadow-xl hover:shadow-indigo-500/10'
                  }`}
                >
                  <div className="flex justify-between items-start mb-3">
                    <div className="p-1.5 rounded-lg bg-intense-indigo text-white">
                      <Award size={14} />
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-intense-indigo mb-1 group-hover:text-blue-600 transition-colors italic leading-tight">
                    Equity Valuation & <br /> Bond Analysis
                  </h4>
                  <p className="text-xs text-intense-indigo/50 font-medium mb-3">
                    {batch1D.length} Multi-Choice Questions • {getEstimatedTime(batch1D)}</p>
                  <div className="flex items-center justify-between pt-3 border-t border-gray-50 text-intense-indigo">
                     <span className="text-[9px] font-black uppercase tracking-widest">{stats.completedBatches?.includes('Equity Valuation & Bond Pricing (TSLA/NVDA Analysis)') ? 'Retake & ' : ''}Start Practice Mode</span>
                     <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>

                {/* Batch 1E */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -4 }}
                  onClick={() => handleStartBatch(batch1E, 'Risk & Return Theory (Efficient Frontier Models)')}
                  className={`group p-4 rounded-2xl border-2 transition-all cursor-pointer relative overflow-hidden ${
                    stats.completedBatches?.includes('Risk & Return Theory (Efficient Frontier Models)')
                    ? 'bg-blue-50 border-blue-200 shadow-indigo-500/5'
                    : 'bg-white border-intense-indigo/10 hover:border-intense-indigo/40 hover:shadow-xl hover:shadow-indigo-500/10'
                  }`}
                >
                  <div className="flex justify-between items-start mb-3">
                    <div className="p-1.5 rounded-lg bg-intense-indigo text-white">
                      <PieChart size={14} />
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-intense-indigo mb-1 group-hover:text-blue-600 transition-colors italic leading-tight">
                    Risk & Return <br /> Portfolio Theory
                  </h4>
                  <p className="text-xs text-intense-indigo/50 font-medium mb-3">
                    {batch1E.length} Multi-Choice Questions • {getEstimatedTime(batch1E)}</p>
                  <div className="flex items-center justify-between pt-3 border-t border-gray-50 text-intense-indigo">
                     <span className="text-[9px] font-black uppercase tracking-widest">{stats.completedBatches?.includes('Risk & Return Theory (Efficient Frontier Models)') ? 'Retake & ' : ''}Start Practice Mode</span>
                     <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>

                {/* Batch 1F */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -4 }}
                  onClick={() => handleStartBatch(batch1F, 'Derivatives & Hedging Strategies (Option Greeks)')}
                  className={`group p-4 rounded-2xl border-2 transition-all cursor-pointer relative overflow-hidden ${
                    stats.completedBatches?.includes('Derivatives & Hedging Strategies (Option Greeks)')
                    ? 'bg-blue-50 border-blue-200 shadow-indigo-500/5'
                    : 'bg-white border-intense-indigo/10 hover:border-intense-indigo/40 hover:shadow-xl hover:shadow-indigo-500/10'
                  }`}
                >
                  <div className="flex justify-between items-start mb-3">
                    <div className="p-1.5 rounded-lg bg-intense-indigo text-white">
                      <ShieldCheck size={14} />
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-intense-indigo mb-1 group-hover:text-blue-600 transition-colors italic leading-tight">
                    Derivatives & <br /> Hedging Strategies
                  </h4>
                  <p className="text-xs text-intense-indigo/50 font-medium mb-3">
                    {batch1F.length} Thinking Questions • {getEstimatedTime(batch1F)}</p>
                  <div className="flex items-center justify-between pt-3 border-t border-gray-50 text-intense-indigo">
                     <span className="text-[9px] font-black uppercase tracking-widest">{stats.completedBatches?.includes('Derivatives & Hedging Strategies (Option Greeks)') ? 'Retake & ' : ''}Start Practice Mode</span>
                     <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>

                {/* Batch 2A-2G */}
                {[
                  { batch: batch2A, name: 'Valuation Fundamentals', icon: Database },
                  { batch: batch2B, name: 'Bond Pricing & TVM', icon: Star },
                  { batch: batch2C, name: 'Equity Models (NVDA)', icon: BarChart },
                  { batch: batch2D, name: 'Optimal Portfolios', icon: PieChart },
                  { batch: batch2E, name: 'WACC & Real Options', icon: ShieldCheck },
                  { batch: batch2F, name: 'Derivatives Logic', icon: Lightbulb },
                  { batch: batch2G, name: 'Full Syllabus Simulation', icon: Award, pro: true },
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -4 }}
                    onClick={() => handleStartBatch(item.batch, item.name)}
                    className={`group p-6 rounded-2xl border-2 transition-all cursor-pointer relative overflow-hidden ${
                      stats.completedBatches?.includes(item.name)
                      ? 'bg-blue-50 border-blue-200 shadow-indigo-500/5'
                      : 'bg-white border-intense-indigo/10 hover:border-intense-indigo/40 hover:shadow-2xl hover:shadow-indigo-500/10'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-2 rounded-lg bg-intense-indigo text-white">
                        <item.icon size={16} />
                      </div>
                    </div>
                    <h4 className="text-xl font-bold text-intense-indigo mb-1 group-hover:text-blue-600 transition-colors italic">
                      {item.name.includes(':') ? <>{item.name.split(':')[0]}:<br/>{item.name.split(':')[1]}</> : item.name}
                    </h4>
                    <p className="text-sm text-intense-indigo/50 font-medium mb-4">
                      {item.batch.length} High-Complexity Problems • {getEstimatedTime(item.batch)}
                    </p>
                    <div className="flex items-center justify-between pt-3 border-t border-gray-50 text-intense-indigo">
                       <span className="text-[10px] font-black uppercase tracking-widest">
                         {item.pro && !isSierra ? "Update to unlock sierra member benefits" : (stats.completedBatches?.includes(item.name) ? "Retake & Start Practice Mode" : "Start Practice Mode")}
                       </span>
                       {item.pro && !isSierra ? <Lock size={14} className="text-amber-500" /> : <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />}
                    </div>
                  </motion.div>
                ))}

                {/* Final Exam 2024 MCQ - REMOVED, merged to mocks */}

                {/* Resit April 2024 MCQ - REMOVED, merged to mocks */}

                {/* Final Jan 2025 MCQ - REMOVED, merged to mocks */}

                {/* Resit April 2025 MCQ - REMOVED, merged to mocks */}



                {/* Batch 9 */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -4 }}
                  onClick={() => handleStartBatch(batch9, '1,000+ Question Series: Part 1')}
                  className={`group p-6 rounded-2xl border-2 transition-all cursor-pointer relative overflow-hidden ${
                    stats.completedBatches?.includes('1,000+ Question Series: Part 1')
                    ? 'bg-blue-900 border-blue-400 shadow-purple-500/20'
                    : 'bg-gradient-to-br from-indigo-900 to-purple-900 border-white/10 hover:shadow-2xl hover:shadow-purple-500/20'
                  }`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-2 rounded-lg bg-white/10 text-white backdrop-blur-sm">
                      <Zap size={16} />
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-1 group-hover:text-purple-300 transition-colors italic">
                    Practice <br /> 50-Question Sprint
                  </h4>
                  <p className="text-sm text-white/60 font-medium mb-4">
                    {batch9.length} Generated High-Yield Items • {getEstimatedTime(batch9)}
                  </p>
                  <div className="flex items-center justify-between pt-3 border-t border-white/5 text-white">
                     <span className="text-[10px] font-black uppercase tracking-widest">{stats.completedBatches?.includes('1,000+ Question Series: Part 1') ? 'Retake & ' : ''}Grind Mode</span>
                     <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>

                {/* Batch 11 */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -4 }}
                  onClick={() => handleStartBatch(batch11, '1,000+ Question Series: Part 3 (Mix)')}
                  className={`group p-6 rounded-2xl border-2 transition-all cursor-pointer relative overflow-hidden ${
                    stats.completedBatches?.includes('1,000+ Question Series: Part 3 (Mix)')
                    ? 'bg-blue-50 border-blue-200 shadow-orange-500/10'
                    : 'bg-white border-orange-500/10 hover:border-orange-500/40 hover:shadow-2xl hover:shadow-orange-500/10'
                  }`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-2 rounded-lg bg-orange-500 text-white">
                      <Zap size={16} />
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-intense-indigo mb-1 group-hover:text-orange-600 transition-colors italic">
                    Corporate Finance <br /> & Derivatives Mix
                  </h4>
                  <p className="text-sm text-intense-indigo/50 font-medium mb-4">
                    {batch11.length} Technical Items • {getEstimatedTime(batch11)}
                  </p>
                  <div className="flex items-center justify-between pt-3 border-t border-gray-50 text-intense-indigo">
                     <span className="text-[10px] font-black uppercase tracking-widest">{stats.completedBatches?.includes('1,000+ Question Series: Part 3 (Mix)') ? 'Retake & ' : ''}Test Your Logic</span>
                     <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              </>
            )}

            {selectedCategory === 'open' && (
              <>
                {/* Batch 1G */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -4 }}
                  onClick={() => handleStartBatch(batch1G, 'Yield & Bond Price (Sensitivity/Delta)')}
                  className={`group p-6 rounded-2xl border-2 transition-all cursor-pointer relative overflow-hidden ${
                    stats.completedBatches?.includes('Yield & Bond Price (Sensitivity/Delta)')
                    ? 'bg-blue-50 border-blue-200 shadow-indigo-500/5'
                    : 'bg-white border-intense-indigo/10 hover:border-intense-indigo/40 hover:shadow-2xl hover:shadow-indigo-500/10'
                  }`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-2 rounded-lg bg-intense-indigo text-white">
                      <Info size={16} />
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-intense-indigo mb-1 group-hover:text-blue-600 transition-colors italic">
                    Yield & Bond Price <br /> Sensitivity (Delta)
                  </h4>
                  <p className="text-sm text-intense-indigo/50 font-medium mb-4">
                    Case Study Style • {getEstimatedTime(batch1G)}</p>
                  <div className="flex items-center justify-between pt-3 border-t border-gray-50 text-intense-indigo">
                     <span className="text-[10px] font-black uppercase tracking-widest">{stats.completedBatches?.includes('Yield & Bond Price (Sensitivity/Delta)') ? 'Retake & ' : ''}Open Problem Set</span>
                     <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>

                {/* Batch 3B - REMOVED, merged to mocks */}

                {/* Resit April 2024 Open - REMOVED, merged to mocks */}

                {/* Batch 5B - REMOVED, merged to mocks */}

                {/* Resit April 2025 Open - REMOVED, merged to mocks */}



                {/* Batch 10 */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -4 }}
                  onClick={() => handleStartBatch(batch10, 'Advanced Corporate Finance (Open-Ended Problem Set)')}
                  className={`group p-6 rounded-2xl border-2 transition-all cursor-pointer relative overflow-hidden ${
                    stats.completedBatches?.includes('Advanced Corporate Finance (Open-Ended Problem Set)')
                    ? 'bg-blue-600 border-blue-300 shadow-indigo-500/20'
                    : 'bg-gradient-to-br from-indigo-500 to-indigo-700 border-white/10 hover:shadow-2xl hover:shadow-indigo-500/20'
                  }`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-2 rounded-lg bg-white/10 text-white backdrop-blur-sm">
                      <Target size={16} />
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-1 group-hover:text-indigo-200 transition-colors italic">
                    Advanced Corp Fin <br /> (Open)
                  </h4>
                  <p className="text-sm text-white/60 font-medium mb-4">
                    {batch10.length} Core Calculation Tasks • {getEstimatedTime(batch10)}
                  </p>
                  <div className="flex items-center justify-between pt-3 border-t border-white/5 text-white">
                     <span className="text-[10px] font-black uppercase tracking-widest">{stats.completedBatches?.includes('Advanced Corporate Finance (Open-Ended Problem Set)') ? 'Retake & ' : ''}Master Calculations</span>
                     <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>

                {/* Batch 12 */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -4 }}
                  onClick={() => handleStartBatch(batch12, 'Mathematical Finance & Risk Logic (Mastery Series)')}
                  className={`group p-6 rounded-2xl border-2 transition-all cursor-pointer relative overflow-hidden ${
                    stats.completedBatches?.includes('Mathematical Finance & Risk Logic (Mastery Series)')
                    ? 'bg-blue-600 border-blue-300 shadow-emerald-500/20'
                    : 'bg-gradient-to-br from-emerald-500 to-emerald-700 border-white/10 hover:shadow-2xl hover:shadow-emerald-500/20'
                  }`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-2 rounded-lg bg-white/10 text-white backdrop-blur-sm">
                      <BarChart size={16} />
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-1 group-hover:text-emerald-200 transition-colors italic">
                    Math Finance <br /> Risk Mastery
                  </h4>
                  <p className="text-sm text-white/60 font-medium mb-4">
                    {batch12.length} Complex Calculations • {getEstimatedTime(batch12)}
                  </p>
                  <div className="flex items-center justify-between pt-3 border-t border-white/5 text-white">
                     <span className="text-[10px] font-black uppercase tracking-widest">{stats.completedBatches?.includes('Mathematical Finance & Risk Logic (Mastery Series)') ? 'Retake & ' : ''}Verify Results</span>
                     <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>

                {/* Batch 13 */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -4 }}
                  onClick={() => handleStartBatch(batch13, 'Enterprise Value & WACC (Deep-Dive Analysis)')}
                  className={`group p-6 rounded-2xl border-2 transition-all cursor-pointer relative overflow-hidden ${
                    stats.completedBatches?.includes('Enterprise Value & WACC (Deep-Dive Analysis)')
                    ? 'bg-blue-600 border-blue-300 shadow-orange-500/20'
                    : 'bg-gradient-to-br from-orange-500 to-orange-700 border-white/10 hover:shadow-2xl hover:shadow-orange-500/20'
                  }`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-2 rounded-lg bg-white/10 text-white backdrop-blur-sm">
                      <Zap size={16} />
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-1 group-hover:text-orange-200 transition-colors italic">
                    Enterprise Value <br /> & WACC Analytics
                  </h4>
                  <p className="text-sm text-white/60 font-medium mb-4">
                    {batch13.length} Logical Deep-Dives • {getEstimatedTime(batch13)}
                  </p>
                  <div className="flex items-center justify-between pt-3 border-t border-white/5 text-white">
                     <span className="text-[10px] font-black uppercase tracking-widest">{stats.completedBatches?.includes('Enterprise Value & WACC (Deep-Dive Analysis)') ? 'Retake & ' : ''}Master Calculations</span>
                     <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>

                {/* Batch 14 */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -4 }}
                  onClick={() => handleStartBatch(batch14, 'Mergers, Acquisitions & Synergies (M&A Strategy)')}
                  className={`group p-6 rounded-2xl border-2 transition-all cursor-pointer relative overflow-hidden ${
                    stats.completedBatches?.includes('Mergers, Acquisitions & Synergies (M&A Strategy)')
                    ? 'bg-blue-600 border-blue-300 shadow-indigo-500/20'
                    : 'bg-gradient-to-br from-indigo-500 to-indigo-700 border-white/10 hover:shadow-2xl hover:shadow-indigo-500/20'
                  }`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-2 rounded-lg bg-white/10 text-white backdrop-blur-sm">
                      <PieChart size={16} />
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-1 group-hover:text-indigo-200 transition-colors italic">
                    M&A Strategy <br /> & Synergy Valuation
                  </h4>
                  <p className="text-sm text-white/60 font-medium mb-4">
                    {batch14.length} Comprehensive Cases • {getEstimatedTime(batch14)}
                  </p>
                  <div className="flex items-center justify-between pt-3 border-t border-white/5 text-white">
                     <span className="text-[10px] font-black uppercase tracking-widest">{stats.completedBatches?.includes('Mergers, Acquisitions & Synergies (M&A Strategy)') ? 'Retake & ' : ''}Post-Theory Integration</span>
                     <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>

              </>
            )}

            {selectedCategory === 'mocks' && (
              <div className="space-y-8">
                {[
                  { batch: mockSierra1, name: 'Quantitative Equity Strategy', icon: PieChart, pro: true },
                  { batch: mockSierra2, name: 'Derivative Risk Management', icon: ShieldCheck, pro: true },
                  { batch: mockSierra3, name: 'Portfolio Efficient Frontier', icon: Target, pro: true },
                  { batch: mockSierra4, name: 'Fixed Income Value Logic', icon: Database, pro: true },
                  { batch: mockSierra5, name: 'Corporate Restructuring Analysis', icon: BarChart, pro: true },
                  { batch: mockSierra6, name: 'Equity Valuation Masterclass', icon: Star, pro: true },
                  { batch: mockSierra7, name: 'Advanced Asset Pricing', icon: Zap, pro: true },
                  { batch: mockSierra8, name: 'Capital Structure Optimization', icon: Award, pro: true },
                  { batch: mockSierra9, name: 'Strategic M&A Valuation', icon: PieChart, pro: true },
                  { batch: mockSierra10, name: 'Global Market Microstructure', icon: Target, pro: true },
                  { batch: mockSierra11, name: 'Alternative Investment Logic', icon: Star, pro: true },
                  { batch: mockSierra12, name: 'Institutional Portfolio Design', icon: Database, pro: true },
                  { batch: mockSierra13, name: 'Full Curriculum Final Prep', icon: Zap, pro: true },
                  { batch: finalExam2024, name: 'Comprehensive Financial Analysis', icon: Award, pro: true },
                  { batch: resitApril2024, name: 'Valuation & Portfolio Management', icon: RotateCcw, pro: true },
                  { batch: finalJan2025, name: 'Advanced Market Dynamics', icon: Target, pro: true },
                  { batch: resitApril2025, name: 'Integrated Scenario Analysis', icon: Zap, pro: true },
                ].map((mock, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    whileHover={{ scale: 1.01 }}
                    onClick={() => handleStartBatch(mock.batch, mock.name, mock.pro)}
                    className={`group p-8 border-2 rounded-[2rem] transition-all cursor-pointer relative overflow-hidden flex flex-col md:flex-row items-center gap-8 ${
                      mock.pro && !isSierra 
                      ? 'bg-gray-50 border-gray-200' 
                      : stats.completedBatches?.includes(mock.name)
                        ? 'bg-blue-50 border-blue-200 shadow-indigo-500/5'
                        : (i === 0 || i === 2) 
                          ? 'bg-gradient-to-br from-indigo-900 to-indigo-950 text-white border-white/5 shadow-xl' 
                          : 'bg-white border-intense-indigo/10 text-intense-indigo shadow-sm'
                    }`}
                  >
                    <div className="flex items-center gap-6 shrink-0 relative z-10 font-bold italic">
                      <div className={`w-20 h-20 rounded-3xl flex items-center justify-center shadow-xl ${
                        mock.pro && !isSierra ? 'bg-gray-200 text-gray-400' : 'bg-intense-indigo text-white shadow-indigo-500/20'
                      }`}>
                        <mock.icon size={40} />
                      </div>
                    </div>
                    <div className="flex-grow space-y-2 relative z-10">
                      <div className="flex items-center gap-3 mb-2">
                         {mock.pro && <span className={`text-[10px] font-black uppercase tracking-widest ${mock.pro && !isSierra ? 'text-amber-500' : ((i === 0 || i === 2) ? 'text-blue-300' : 'text-blue-600')}`}>
                           {mock.pro && !isSierra ? "Upgrade Required" : "Premium Content"}
                         </span>}
                      </div>
                      <h3 className={`text-3xl font-bold mb-3 italic leading-tight ${(i === 0 || i === 2) && !(mock.pro && !isSierra) ? 'text-white' : 'text-intense-indigo'}`}>
                        {mock.name}
                      </h3>
                      <div className={`flex flex-wrap gap-x-8 gap-y-2 pt-2 text-sm font-medium ${(i === 0 || i === 2) && !(mock.pro && !isSierra) ? 'text-white/50' : 'text-intense-indigo/60'}`}>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 size={16} />
                          {mock.batch.length} Questions (Full Simulation) • {getEstimatedTime(mock.batch)}
                        </div>
                        <div className="flex items-center gap-2">
                          <Target size={16} />
                          2026 Calibration Logic
                        </div>
                      </div>
                    </div>
                    <div className="shrink-0 relative z-10">
                       <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 ${
                         mock.pro && !isSierra 
                         ? 'bg-amber-50 text-amber-500' 
                         : (i === 0 || i === 2) 
                           ? 'bg-white/10 group-hover:bg-white group-hover:text-intense-indigo' 
                           : 'bg-intense-indigo/5 group-hover:bg-intense-indigo group-hover:text-white'
                       }`}>
                          {mock.pro && !isSierra ? <Lock size={28} /> : <ArrowRight size={28} />}
                       </div>
                    </div>
                    {mock.pro && !isSierra && (
                      <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px] flex items-center justify-center pointer-events-none">
                         <div className="bg-white/90 px-6 py-3 rounded-2xl shadow-xl flex items-center gap-3 border border-indigo-100 scale-90 group-hover:scale-100 transition-transform">
                            <Lock className="text-amber-500" size={18} />
                            <span className="text-xs font-black uppercase tracking-widest text-intense-indigo">Update to unlock sierra benefits</span>
                         </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            )}
          </div>

          {/* User Placeholder */}
          <div className="p-8 bg-intense-indigo/5 rounded-[2rem] border border-intense-indigo/10 flex flex-col items-center text-center space-y-4">
            <Database className="text-emerald-500" size={40} />
            <h3 className="text-xl font-bold text-intense-indigo italic tracking-tight">Question Bank Update Policy</h3>
            <p className="text-sm text-intense-indigo/60 max-w-md font-medium">
              We have newly updated contents including multiple choice questions and open questions to prepare for the upcoming exam. New questions and mocks will be updated soon. All items are calibrated to the latest 2026 curriculum standards.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PracticeHub;
