import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Share2, Bookmark, BookmarkCheck, Check, Lock, FileSpreadsheet } from 'lucide-react';
import { allArticles } from '../data/articles';
import CTABox from '../components/CTABox';
import { useAuth } from '../components/AuthContext';
import { savedArticlesService } from '../services/savedArticlesService';

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
      <main className="flex-grow bg-[#525659] min-h-screen pt-[112px] lg:pt-[128px] pb-20 overflow-y-auto">
        <div className="max-w-[1000px] mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-8 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10">
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
            {reportImages.length > 0 ? (
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
