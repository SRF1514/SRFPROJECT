import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Share2, Bookmark, BookmarkCheck, Check, Lock, FileSpreadsheet, Terminal } from 'lucide-react';
import { allArticles } from '../data/articles';
import CTABox from '../components/CTABox';
import { useAuth } from '../components/AuthContext';
import { savedArticlesService } from '../services/savedArticlesService';
import { motion } from 'motion/react';

export default function ReportViewerPage() {
  const { reportId } = useParams<{ reportId: string }>();
  const navigate = useNavigate();
  const { user, subscriptionTier } = useAuth();
  const report = allArticles.find((a) => a.id === reportId);
  const [isSaved, setIsSaved] = useState(false);
  const [showCopied, setShowCopied] = useState(false);
  const [saveError, setSaveError] = useState(false);

  const isPro = subscriptionTier === 'pro';
  const isLocked = report?.isMembersOnly && !isPro;

  // ... (keeping existing useEffect and handlers)

  useEffect(() => {
    window.scrollTo(0, 0);
    if (reportId) {
      setIsSaved(savedArticlesService.isSaved(reportId));
    }
  }, [reportId]);

  if (!report || !report.metadata) {
    return (
      <div className="flex-grow flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-4xl font-sans text-intense-indigo mb-4">Report not found</h1>
          <button 
            onClick={() => navigate('/research')}
            className="text-intense-indigo font-bold flex items-center gap-2 mx-auto hover:opacity-70"
          >
            <ArrowLeft size={20} /> Back to Research
          </button>
        </div>
      </div>
    );
  }

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setShowCopied(true);
    setTimeout(() => setShowCopied(false), 2000);
  };

  const handleSave = () => {
    if (!user) {
      setSaveError(true);
      setTimeout(() => setSaveError(false), 3000);
      return;
    }

    if (isSaved) {
      savedArticlesService.unsaveArticle(report.id);
    } else {
      savedArticlesService.saveArticle(report.id);
    }
    setIsSaved(!isSaved);
  };

  const reportImages = report.reportImages || [];

  return (
    <>
      <main className={`flex-grow min-h-screen pt-[112px] lg:pt-[128px] pb-20 overflow-y-auto ${report.code ? 'bg-[#050505]' : 'bg-[#525659]'}`}>
        <div className="max-w-[1200px] mx-auto px-4 py-8">
          <div className={`flex justify-between items-center mb-8 p-4 rounded-2xl border backdrop-blur-md ${report.code ? 'bg-white/5 border-white/10' : 'bg-white/10 border-white/10'}`}>
            <button 
              onClick={() => navigate('/research')}
              className="inline-flex items-center text-white hover:underline font-medium group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
              Back to Research
            </button>
            
            <div className="flex gap-4 items-center">
              <button 
                onClick={handleShare}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-[10px] font-bold text-white uppercase tracking-widest hover:bg-white/20 transition-all"
              >
                {showCopied ? (
                  <>
                    <Check size={14} className="text-emerald-400" />
                    Copied
                  </>
                ) : (
                  <>
                    <Share2 size={14} />
                    Share
                  </>
                )}
              </button>
              <button 
                onClick={handleSave}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl border text-[10px] font-bold uppercase tracking-widest transition-all ${isSaved ? 'bg-intense-indigo text-white border-intense-indigo shadow-md' : 'bg-white/10 border-white/20 text-white hover:bg-white/20'}`}
              >
                {isSaved ? (
                  <>
                    <BookmarkCheck size={14} />
                    Saved
                  </>
                ) : (
                  <>
                    <Bookmark size={14} />
                    Save
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-8 items-center">
            {report.code ? (
              <div className="w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                   {/* Code Section */}
                   <div className="lg:col-span-8">
                      <div className="relative bg-[#0a0a0a] rounded-2xl border border-white/10 shadow-2xl overflow-hidden font-mono text-[14px]">
                        <div className="bg-white/5 px-6 py-4 flex items-center justify-between border-b border-white/5">
                           <div className="flex items-center gap-2">
                             <Terminal size={16} className="text-blue-400" />
                             <span className="text-[11px] text-white/40 italic ml-2">VT_3_Source_Library_v3.2.0.py</span>
                           </div>
                           <div className="text-[10px] text-blue-400 font-bold tracking-widest uppercase">Institutional Library</div>
                        </div>
                        
                        <div className="p-8 md:p-12 leading-relaxed overflow-x-auto">
                           {report.code.split('\n').map((line, i) => (
                              <div key={i} className="flex gap-8 group/line relative">
                                <span className="text-white/10 select-none w-6 text-right flex-shrink-0">{i + 1}</span>
                                <span className="text-white/90 whitespace-pre">
                                  {line.includes('import') || line.includes('def ') || line.includes('return ') ? (
                                    <span className="text-purple-400">{line}</span>
                                  ) : line.includes('#') ? (
                                    <span className="text-blue-400/60">{line}</span>
                                  ) : (
                                    line
                                  )}
                                </span>
                                
                                {report.codeAnnotations?.find(a => a.line === i + 1) && (
                                   <div className={`absolute -left-12 top-0 w-[4px] h-full shadow-[0_0_15px_rgba(59,130,246,0.3)] ${report.codeAnnotations.find(a => a.line === i + 1)?.color === 'emerald' ? 'bg-emerald-500' : 'bg-blue-500'}`} />
                                )}
                              </div>
                           ))}
                        </div>
                      </div>
                   </div>

                   {/* Annotation Logic Section */}
                   <div className="lg:col-span-4 space-y-8">
                      <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm">
                         <h3 className="font-serif text-2xl font-bold italic text-white mb-6">Algorithm Protocol</h3>
                         <div className="space-y-12">
                            {report.codeAnnotations?.map((anno, idx) => (
                               <motion.div 
                                 key={idx}
                                 initial={{ opacity: 0, x: 20 }}
                                 animate={{ opacity: 1, x: 0 }}
                                 transition={{ delay: idx * 0.1 }}
                                 className="space-y-3"
                               >
                                 <div className={`text-[10px] font-black uppercase tracking-widest flex items-center gap-2 ${anno.color === 'emerald' ? 'text-emerald-400' : 'text-blue-400'}`}>
                                    <div className={`w-1.5 h-1.5 rounded-full ${anno.color === 'emerald' ? 'bg-emerald-400' : 'bg-blue-400'}`} />
                                    Line {anno.line}
                                 </div>
                                 <p className="text-sm text-white/60 leading-relaxed font-sans italic">
                                   {anno.text}
                                 </p>
                               </motion.div>
                            ))}
                         </div>
                         
                         <div className="mt-12 pt-8 border-t border-white/5 flex flex-col gap-4">
                            <div className="text-[10px] font-black text-white/20 uppercase tracking-[0.2em] italic">Systematic Implementation Guardrails</div>
                            <button 
                              onClick={() => navigate('/join')}
                              className="w-full py-4 bg-white text-intense-indigo rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-50 transition-colors shadow-2xl shadow-white/5"
                            >
                               {isPro ? 'Download Source (.py)' : 'Unlock Full Library Access'}
                            </button>
                         </div>
                      </div>
                   </div>
                </div>
              </div>
            ) : reportImages.length > 0 ? (
              <>
                {/* Always show the first page */}
                <div className="bg-white shadow-[0_0_20px_rgba(0,0,0,0.4)] rounded-sm overflow-hidden w-full relative">
                  <img 
                    src={reportImages[0]} 
                    alt="Page 1" 
                    className="w-full h-auto block"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-4 right-4 bg-black/50 text-white text-[10px] px-2 py-1 rounded backdrop-blur-sm font-bold">
                    Page 1
                  </div>
                </div>

                {/* Show the rest if not locked, otherwise show lock screen */}
                {!isLocked ? (
                  reportImages.slice(1).map((src, index) => (
                    <div 
                      key={index + 1}
                      className="bg-white shadow-[0_0_20px_rgba(0,0,0,0.4)] rounded-sm overflow-hidden w-full relative"
                    >
                      <img 
                        src={src} 
                        alt={`Page ${index + 2}`} 
                        className="w-full h-auto block"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute bottom-4 right-4 bg-black/50 text-white text-[10px] px-2 py-1 rounded backdrop-blur-sm font-bold">
                        Page {index + 2}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="bg-white rounded-3xl p-16 text-center shadow-2xl w-full max-w-2xl relative overflow-hidden group mt-4">
                    <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-700"></div>
                    <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-intense-indigo">
                      <Lock size={32} />
                    </div>
                    <h3 className="text-3xl font-sans font-bold text-intense-indigo mb-4">Sierra Member Research</h3>
                    <p className="text-intense-indigo/60 font-medium mb-12 max-w-md mx-auto">
                      Members get full institutional-grade reports ({reportImages.length} pages), sensitivity analyses, and financial models.
                    </p>
                    <button 
                      onClick={() => navigate('/join')}
                      className="bg-intense-indigo text-white px-10 py-4 rounded-full font-black text-xs uppercase tracking-widest hover:bg-opacity-90 transition-all shadow-xl"
                    >
                      Upgrade to Sierra Member to unlock full research <span>→</span>
                    </button>
                  </div>
                )}
              </>
            ) : isLocked ? (
              <div className="bg-white rounded-3xl p-16 text-center shadow-2xl w-full max-w-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-700"></div>
                <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-intense-indigo">
                  <Lock size={32} />
                </div>
                <h3 className="text-3xl font-sans font-bold text-intense-indigo mb-4">Sierra Member Research</h3>
                <p className="text-intense-indigo/60 font-medium mb-12 max-w-md mx-auto">
                  Unlock full institutional-grade reports, sensitivity analyses, and financial models.
                </p>
                <button 
                  onClick={() => navigate('/join')}
                  className="bg-intense-indigo text-white px-10 py-4 rounded-full font-black text-xs uppercase tracking-widest hover:bg-opacity-90 transition-all shadow-xl"
                >
                  Upgrade to Sierra Member to unlock full research <span>→</span>
                </button>
              </div>
            ) : (
              <div className="text-white text-center py-20 bg-white/5 rounded-3xl border border-white/10 w-full">
                <p className="text-xl font-sans text-white/60">Viewing digital report content...</p>
              </div>
            )}
          </div>
        </div>
      </main>
      
      {!isLocked && <CTABox onJoinClick={() => navigate('/join')} fromColor="white" />}
    </>
  );
}
