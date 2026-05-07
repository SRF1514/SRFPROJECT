import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Share2, Bookmark, BookmarkCheck, Check, Maximize2, Minimize2, Lock } from 'lucide-react';
import { allArticles } from '../data/articles';
import CTABox from '../components/CTABox';
import { savedArticlesService } from '../services/savedArticlesService';
import { useAuth } from '../components/AuthContext';

export default function ArticlePage() {
  const { articleId } = useParams<{ articleId: string }>();
  const navigate = useNavigate();
  const { user, subscriptionTier } = useAuth();
  const article = allArticles.find((a) => a.id === articleId);
  const [isSaved, setIsSaved] = useState(false);
  const [showCopied, setShowCopied] = useState(false);
  const [saveError, setSaveError] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (articleId) {
      setIsSaved(savedArticlesService.isSaved(articleId));
    }
  }, [articleId]);

  if (!article) {
    return (
      <div className="flex-grow flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-4xl font-sans text-intense-indigo mb-4">Article not found</h1>
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

  const isPro = subscriptionTier === 'pro';
  const isLocked = article.isMembersOnly && !isPro;

  const navigateToJoin = () => navigate('/join');

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
      savedArticlesService.unsaveArticle(article.id);
    } else {
      savedArticlesService.saveArticle(article.id);
    }
    setIsSaved(!isSaved);
  };

  return (
    <>
      <main className="flex-grow bg-white text-[#1a1a1a] transition-all duration-500 p-8 md:p-16 pt-[112px] lg:pt-[128px] font-sans relative">
        <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <button 
                onClick={() => navigate('/research')}
                className="inline-flex items-center text-[#1e2b85] hover:underline font-medium group"
              >
                <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
                Back to Research
              </button>
              <div className="flex gap-4">
                <button 
                  onClick={handleShare}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-50 border border-gray-100 text-[10px] font-bold text-intense-indigo uppercase tracking-widest hover:bg-white hover:shadow-md transition-all relative"
                >
                  {showCopied ? (
                    <>
                      <Check size={14} className="text-emerald-600" />
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
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl border text-[10px] font-bold uppercase tracking-widest transition-all ${isSaved ? 'bg-intense-indigo text-white border-intense-indigo shadow-md' : 'bg-gray-50 border-gray-100 text-intense-indigo hover:bg-white hover:shadow-md'}`}
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

          <div className="mb-12">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">
                {article.date} • {article.type}
              </span>
              {article.topics && article.topics.map((topic, i) => (
                <span key={i} className="bg-intense-indigo text-white px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.1em] rounded flex items-center">
                  {topic}
                </span>
              ))}
              {article.isMembersOnly && (
                <span className="bg-emerald-500 text-white px-2 py-0.5 text-[9px] font-black uppercase tracking-[0.1em] rounded">
                  Sierra Member
                </span>
              )}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1e2b85] mt-2 mb-8">
              {article.title}
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 font-medium leading-relaxed mb-12 text-justify">
              {article.excerpt}
            </p>

            <div className="prose prose-lg max-w-none text-gray-800 space-y-6">
              {isLocked ? (
                <div className="bg-gray-50 border border-gray-100 rounded-3xl p-12 text-center my-12 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-700"></div>
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl text-emerald-500">
                    <Lock size={32} />
                  </div>
                  <h3 className="text-2xl font-sans font-bold text-intense-indigo mb-4">This Insight is for Members only</h3>
                  <p className="text-intense-indigo/60 font-medium max-w-md mx-auto mb-8">
                    Upgrade to Sierra Member to unlock the "Full Stack" Research and our live monthly briefings.
                  </p>
                  <button 
                    onClick={navigateToJoin}
                    className="bg-emerald-500 text-white px-8 py-3 rounded-full font-black text-xs uppercase tracking-widest hover:bg-emerald-600 transition-all shadow-lg"
                  >
                    Unlock Full Research <span>→</span>
                  </button>
                </div>
              ) : (
                article.content.map((paragraph, i) => (
                  <p key={i} className="text-justify">{paragraph}</p>
                ))
              )}
            </div>
          </div>

          {!isLocked && (
            <div className="mt-20 pt-12 border-t border-gray-200 flex flex-col items-center text-center">
              <p className="text-[#1e2b85] font-bold mb-6">
                Want more insights like this?
              </p>
              <button 
                onClick={navigateToJoin}
                className="bg-intense-indigo text-white px-10 py-4 rounded-full font-bold text-base hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl"
              >
                REGISTER FOR EARLY ACCESS
              </button>
            </div>
          )}
        </div>
      </main>
      
      <CTABox onJoinClick={navigateToJoin} fromColor="white" />
    </>
  );
}
