import React, { useState, useEffect } from 'react';
import { useAuth } from '../components/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { LogOut, BookOpen, TrendingUp, CheckCircle2, ArrowRight, Loader2, Bell, CreditCard, Trophy, Coins, ShieldCheck, Info, Bookmark, ExternalLink, Settings, Wallet, ChevronRight, Target, Lock } from 'lucide-react';
import MembershipComparisonTable from '../components/MembershipComparisonTable';
import { supabase } from '../supabaseClient';
import { supabaseData, ModuleProgress, MinigameResult } from '../services/supabaseData';
import { marketFoundationsModules } from '../data/marketFoundationsContent';
import { fundamentalAnalysisModules } from '../data/fundamentalAnalysisContent';
import { technicalAnalysisModules } from '../data/technicalAnalysisContent';
import { eventDrivenAnalysisModules } from '../data/eventDrivenAnalysisContent';
import { quantitativeAnalysisModules } from '../data/quantitativeAnalysisContent';
import { savedArticlesService } from '../services/savedArticlesService';
import { allArticles } from '../data/articles';
import { practiceStatsService } from '../services/practiceStatsService';

export default function DashboardPage() {
  const { user, logout, subscriptionTier } = useAuth();
  const navigate = useNavigate();
  const [completedModules, setCompletedModules] = useState<ModuleProgress[]>([]);
  const [minigameResults, setMinigameResults] = useState<MinigameResult[]>([]);
  const [savedArticleIds, setSavedArticleIds] = useState<{id: string, savedAt: string}[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedVote, setSelectedVote] = useState<string | null>(null);
  const [notifications, setNotifications] = useState({
    portfolioUpdates: true,
    newResearch: true,
    newCFAContent: true,
    newQuantModel: true
  });
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [passwordStatus, setPasswordStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);
  const [passwordLoading, setPasswordLoading] = useState(false);
  const [showTable, setShowTable] = useState(false);

  const isMember = subscriptionTier === 'pro';

  const toggleNotification = (key: keyof typeof notifications) => {
    setNotifications(prev => ({ ...prev, [key]: !prev[key] }));
  };

  useEffect(() => {
    const fetchData = async () => {
      if (!user) return;
      try {
        setLoading(true);
        const [modules, games] = await Promise.all([
          supabaseData.getCompletedModules(),
          supabaseData.getMinigameResults()
        ]);
        setCompletedModules(modules);
        setMinigameResults(games);
        setSavedArticleIds(savedArticlesService.getSavedArticles());
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [user]);

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/signin');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  if (!user) {
    return null;
  }

  const domains = [
    { name: 'Market Foundations', modules: marketFoundationsModules },
    { name: 'Fundamental Analysis', modules: fundamentalAnalysisModules },
    { name: 'Technical Analysis', modules: technicalAnalysisModules },
    { name: 'Event-Driven Analysis', modules: eventDrivenAnalysisModules },
    { name: 'Quantitative Analysis', modules: quantitativeAnalysisModules },
  ];

  const totalModules = domains.reduce((acc, d) => acc + d.modules.length, 0);
  const completedCount = completedModules.length;
  const progressPercentage = totalModules > 0 ? (completedCount / totalModules) * 100 : 0;

  const modulePoints = completedCount * 100;
  const minigamePoints = minigameResults.reduce((acc, game) => acc + parseInt(game.score || '0'), 0);
  const totalPoints = modulePoints + minigamePoints;
  const currentLevel = Math.floor(totalPoints / 500) + 1;
  const pointsIntoCurrentLevel = totalPoints % 500;
  const levelProgress = (pointsIntoCurrentLevel / 500) * 100;

  const savedArticles = allArticles.filter(a => savedArticleIds.some(s => s.id === a.id));
  const displayName = user.user_metadata?.full_name || user.email?.split('@')[0] || 'User';

  const domainProgress = domains.map(domain => {
    const completedInDomain = domain.modules.filter(m => 
      completedModules.some(cm => cm.module_id === m.id)
    ).length;
    
    const domainModulePoints = completedInDomain * 100;
    const domainGamePoints = minigameResults
      .filter(game => game.game_name.toLowerCase().includes(domain.name.split(' ')[0].toLowerCase()))
      .reduce((acc, game) => acc + parseInt(game.score || '0'), 0);

    return {
      name: domain.name,
      completed: completedInDomain,
      total: domain.modules.length,
      points: domainModulePoints + domainGamePoints
    };
  });

  const practiceStats = practiceStatsService.getStats();

  const quizStats = domains.map(domain => {
    const domainModuleIds = domain.modules.map(m => m.id);
    const passedUniqueQuizzes = new Set(
      minigameResults
        .filter(result => {
          if (!result.game_name.startsWith('Quiz: ')) return false;
          const moduleId = result.game_name.replace('Quiz: ', '');
          return domainModuleIds.includes(moduleId) && parseInt(result.score || '0') > 0;
        })
        .map(result => result.game_name)
    );
    
    return {
      name: domain.name,
      correctCount: passedUniqueQuizzes.size,
      totalQuizzes: domainModuleIds.length
    };
  });

  const handlePasswordUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword.length < 6) {
      setPasswordStatus({ type: 'error', message: 'Password must be at least 6 characters' });
      return;
    }

    setPasswordLoading(true);
    setPasswordStatus(null);
    try {
      const { error } = await supabase.auth.updateUser({ password: newPassword });
      if (error) throw error;
      setPasswordStatus({ type: 'success', message: 'Password updated successfully' });
      setNewPassword('');
      setTimeout(() => {
        setShowPasswordModal(false);
        setPasswordStatus(null);
      }, 2000);
    } catch (err: any) {
      setPasswordStatus({ type: 'error', message: err.message || 'Error updating password' });
    } finally {
      setPasswordLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <Loader2 className="w-12 h-12 animate-spin text-intense-indigo" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-intense-indigo pt-[140px] pb-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Compact Header */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-intense-indigo/10 pb-6">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-16 h-16 rounded-2xl bg-intense-indigo flex items-center justify-center text-white shadow-xl rotate-3">
                <span className="font-sans text-xl font-bold tracking-tighter -rotate-3">
                  {displayName[0].toUpperCase()}
                </span>
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-white border border-gray-100 shadow-lg flex items-center justify-center">
                <ShieldCheck className="w-3 h-3 text-emerald-500" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-0.5">
                <h1 className="text-2xl font-sans font-bold text-intense-indigo tracking-tight">
                  {displayName}
                </h1>
                {isMember ? (
                  <span className="bg-emerald-50 text-emerald-700 px-2 py-0.5 text-[8px] font-black uppercase tracking-widest rounded-md border border-emerald-100">Sierra Member</span>
                ) : (
                  <div className="flex items-center gap-2">
                    <span className="bg-gray-50 text-gray-400 px-2 py-0.5 text-[8px] font-black uppercase tracking-widest rounded-md border border-gray-100">Free Member</span>
                    <button 
                      onClick={() => navigate('/join')}
                      className="bg-intense-indigo text-white px-3 py-1 text-[8px] font-black uppercase tracking-widest rounded-md hover:scale-105 transition-transform"
                    >
                      Upgrade
                    </button>
                  </div>
                )}
              </div>
              <p className="text-[10px] font-black text-intense-indigo/30 uppercase tracking-widest">{isMember ? 'Institutional-Grade Access' : 'Foundational Tier'}</p>
            </div>
          </div>

          <button 
            onClick={handleLogout}
            className="self-start sm:self-center px-4 py-2 rounded-xl border border-gray-200 text-[10px] font-black tracking-widest uppercase text-intense-indigo/60 hover:text-intense-indigo hover:bg-white hover:shadow-lg transition-all flex items-center gap-2 bg-white/50"
          >
            <LogOut size={12} />
            Sign Out
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Main Dashboard: High Information Density */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Mastery', value: `${Math.round(progressPercentage)}%`, color: 'text-indigo-600', icon: <Target size={14} /> },
                { label: 'Total Points', value: totalPoints.toLocaleString(), color: 'text-emerald-600', icon: <Coins size={14} /> },
                { label: 'Sierra Level', value: currentLevel, color: 'text-amber-600', icon: <Trophy size={14} /> },
                { label: 'Readiness', value: `${practiceStats.readiness}%`, color: 'text-blue-600', icon: <ShieldCheck size={14} /> },
              ].map((stat, i) => (
                <div key={i} className="bg-white border border-intense-indigo/5 p-4 rounded-2xl shadow-sm flex flex-col gap-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[9px] font-black uppercase tracking-widest text-intense-indigo/20">{stat.label}</span>
                    <span className={stat.color}>{stat.icon}</span>
                  </div>
                  <span className={`text-xl font-sans font-bold ${stat.color}`}>{stat.value}</span>
                </div>
              ))}
            </div>

            {/* CFA Practice Hub Metrics */}
            <div className="bg-gradient-to-br from-intense-indigo via-[#0A0E1A] to-[#050505] rounded-[2rem] p-6 relative overflow-hidden group shadow-2xl shadow-intense-indigo/20">
              <div className="relative z-20">
                <div className="flex items-center justify-between mb-6 pb-2 border-b border-white/5">
                  <div className="flex items-center gap-2">
                    <Target size={16} className="text-blue-400" />
                    <h3 className="text-sm font-sans font-black uppercase tracking-widest text-white">CFA Metrics</h3>
                  </div>
                  <Link to="/cfa" className="text-[9px] font-bold text-white/40 hover:text-white transition-colors">Hub</Link>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                  {[
                    { label: 'Items Done', value: practiceStats.completedItems },
                    { label: 'Mocks', value: practiceStats.mocksDone },
                    { label: 'Avg Score', value: `${practiceStats.avgScore}%` },
                    { label: 'Readiness', value: `${practiceStats.readiness}%` },
                    { label: 'Hours', value: practiceStats.hoursPracticed },
                  ].map((metric, i) => (
                    <div key={i} className="p-3 bg-white/5 border border-white/5 rounded-xl">
                      <p className="text-[8px] font-black uppercase tracking-widest text-white/30 mb-1">{metric.label}</p>
                      <p className="text-lg font-sans font-bold text-white italic">{metric.value}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-[60px] pointer-events-none" />
            </div>

            {/* Academic Curriculum: Compact Navigation */}
            <div>
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-intense-indigo/5">
                <h3 className="text-sm font-sans font-black uppercase tracking-widest text-intense-indigo">Academic Path</h3>
                <Link to="/curriculum" className="text-[9px] font-bold text-intense-indigo/40 hover:text-intense-indigo">Full View</Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {domainProgress.map((domain, index) => (
                  <motion.div 
                    key={domain.name}
                    className="bg-white border border-intense-indigo/5 p-4 rounded-2xl flex items-center justify-between group hover:shadow-md transition-all cursor-pointer"
                  >
                    <div className="flex-1 min-w-0 pr-4">
                      <h4 className="text-xs font-bold text-intense-indigo truncate group-hover:text-intense-indigo mb-1">{domain.name}</h4>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-1 bg-gray-50 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-intense-indigo/40 transition-all duration-500" 
                            style={{ width: `${(domain.completed / domain.total) * 100}%` }} 
                          />
                        </div>
                        <span className="text-[9px] font-black text-intense-indigo/20 whitespace-nowrap">{domain.completed}/{domain.total}</span>
                      </div>
                    </div>
                    <ChevronRight size={14} className="text-intense-indigo/10 group-hover:translate-x-0.5 transition-transform" />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Correct answers: Data-Rich Grid */}
            <div>
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-intense-indigo/5">
                <h3 className="text-sm font-sans font-black uppercase tracking-widest text-intense-indigo">Correct answers</h3>
              </div>
              <div className="bg-white border border-intense-indigo/5 p-6 rounded-[2rem] grid grid-cols-1 sm:grid-cols-3 gap-6">
                {quizStats.map((stat) => (
                  <div key={stat.name} className="space-y-2">
                    <div className="flex justify-between items-end">
                      <span className="text-[9px] font-black text-intense-indigo/30 uppercase tracking-widest truncate max-w-[70%]">{stat.name}</span>
                      <span className="text-[10px] font-bold text-emerald-600">{stat.correctCount}/{stat.totalQuizzes}</span>
                    </div>
                    <div className="h-1 bg-gray-50 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-emerald-500" 
                        style={{ width: `${stat.totalQuizzes > 0 ? (stat.correctCount / stat.totalQuizzes) * 100 : 0}%` }} 
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Contextual Sidebar: Tools & Intel */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Research Ledger & Access (Accessible to All) */}
            <div className="bg-white border border-intense-indigo/10 p-6 rounded-[2rem] shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xs font-black uppercase tracking-widest text-intense-indigo">Saved Library</h3>
                <Bookmark size={14} className="text-amber-500" />
              </div>
              
              <div className="space-y-2">
                {savedArticles.length === 0 ? (
                  <p className="text-[10px] py-4 text-center text-intense-indigo/30 bg-gray-50/50 rounded-xl italic">No papers bookmarked yet.</p>
                ) : (
                  savedArticles.slice(0, 4).map(article => (
                    <div key={article.id} className="p-2 rounded-xl border border-gray-50 hover:border-intense-indigo/10 transition-all cursor-pointer">
                      <p className="text-xs font-bold truncate">{article.title}</p>
                      <p className="text-[8px] font-black uppercase text-intense-indigo/20">{article.type}</p>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Voting Component */}
            {isMember && (
              <div className="bg-white border border-intense-indigo/10 p-6 rounded-[2rem]">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xs font-black uppercase tracking-widest text-intense-indigo">Vote the next Equity Research</h3>
                  <TrendingUp size={14} className="text-emerald-500" />
                </div>
                <div className="space-y-1.5">
                  {[
                    { id: 'vrt', label: 'Vertiv Holdings Co', ticker: 'VRT' },
                    { id: 'enr', label: 'Siemens Energy AG', ticker: 'ENR' },
                    { id: 'pep', label: 'PepsiCo, Inc.', ticker: 'PEP' }
                  ].map(option => (
                    <button
                      key={option.id}
                      onClick={() => setSelectedVote(option.id)}
                      className={`w-full p-2.5 rounded-xl border text-left flex items-center justify-between transition-all ${
                        selectedVote === option.id ? 'border-emerald-500 bg-emerald-50/30' : 'border-gray-50 hover:bg-gray-50'
                      }`}
                    >
                      <span className={`text-[10px] font-bold ${selectedVote === option.id ? 'text-emerald-700' : 'text-intense-indigo/80'}`}>{option.label}</span>
                      <span className="text-[8px] font-black opacity-20">{option.ticker}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Mini Settings / Notifications */}
            <div className="bg-gray-900 text-white p-6 rounded-[2rem] shadow-2xl">
              <div className="flex items-center gap-2 mb-4">
                <Settings size={14} className="text-intense-indigo" />
                <h3 className="text-[10px] font-black uppercase tracking-widest text-white/60">Notify when:</h3>
              </div>
              
              <div className="space-y-4">
                <div className="space-y-1.5">
                  {[
                    { id: 'portfolioUpdates' as const, label: 'Portfolio update' },
                    { id: 'newResearch' as const, label: 'Equity research' },
                    { id: 'newCFAContent' as const, label: 'CFA content' },
                    { id: 'newQuantModel' as const, label: 'Quant Model' }
                  ].map(pref => (
                    <div key={pref.id} className="flex items-center justify-between py-1 border-b border-white/5">
                      <span className="text-[10px] font-bold text-white/50">{pref.label}</span>
                      <button 
                        onClick={() => toggleNotification(pref.id)}
                        className={`w-6 h-3 rounded-full transition-all relative ${notifications[pref.id] ? 'bg-intense-indigo' : 'bg-white/10'}`}
                      >
                        <div className={`absolute top-0.5 w-2 h-2 bg-white rounded-full transition-all ${notifications[pref.id] ? 'left-3.5' : 'left-0.5'}`} />
                      </button>
                    </div>
                  ))}
                </div>
                
                <button 
                  onClick={() => setShowPasswordModal(true)}
                  className="w-full flex items-center justify-between p-2.5 rounded-xl bg-white/5 border border-white/10 text-[9px] font-black uppercase tracking-widest hover:bg-white/10 transition-all"
                >
                  <span>Change Password</span>
                  <ChevronRight size={10} />
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Membership Comparison Overlay */}
        <AnimatePresence>
          {showTable && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[110] flex items-center justify-center p-8 bg-white/95 backdrop-blur-md overflow-y-auto"
            >
              <div className="max-w-6xl w-full py-20 relative">
                <button 
                  onClick={() => setShowTable(false)}
                  className="fixed top-12 right-12 flex items-center gap-2 group"
                >
                  <div className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center bg-white shadow-xl group-hover:scale-110 transition-transform">
                    <LogOut size={16} className="rotate-180" />
                  </div>
                  <span className="text-[10px] font-black text-intense-indigo/40 uppercase tracking-widest group-hover:text-intense-indigo transition-colors">Return to Vault</span>
                </button>
                <MembershipComparisonTable />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Password Modal */}
        <AnimatePresence>
          {showPasswordModal && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-intense-indigo/10 backdrop-blur-sm"
              onClick={() => setShowPasswordModal(false)}
            >
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl border border-gray-100"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-xl bg-intense-indigo/5 flex items-center justify-center text-intense-indigo">
                    <Lock size={16} />
                  </div>
                  <h3 className="text-xl font-sans font-bold text-intense-indigo uppercase tracking-tight">Security <span className="font-normal text-intense-indigo/40 tracking-normal">Update</span></h3>
                </div>

                <form onSubmit={handlePasswordUpdate} className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-black text-intense-indigo/40 uppercase tracking-widest pl-1">New Password</label>
                    <input 
                      type="password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-intense-indigo/20 focus:border-intense-indigo outline-none transition-all text-sm font-medium"
                      placeholder="Enter new secure password"
                      required
                    />
                  </div>

                  {passwordStatus && (
                    <div className={`p-3 rounded-xl text-[10px] font-bold ${passwordStatus.type === 'success' ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' : 'bg-rose-50 text-rose-600 border border-rose-100'}`}>
                      {passwordStatus.message}
                    </div>
                  )}

                  <div className="flex gap-3 pt-2">
                    <button 
                      type="button"
                      onClick={() => setShowPasswordModal(false)}
                      className="flex-1 px-4 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest text-intense-indigo/40 hover:bg-gray-50 transition-colors"
                    >
                      Cancel
                    </button>
                    <button 
                      type="submit"
                      disabled={passwordLoading}
                      className="flex-1 px-4 py-3 bg-intense-indigo text-white rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-lg shadow-intense-indigo/20 hover:scale-105 active:scale-95 transition-all disabled:opacity-50 flex items-center justify-center"
                    >
                      {passwordLoading ? <Loader2 size={12} className="animate-spin" /> : 'Confirm'}
                    </button>
                  </div>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
