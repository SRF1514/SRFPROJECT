import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { marketArticles, equityResearch, allArticles, type Article } from '../data/articles';
import CTABox from '../components/CTABox';
import { useAuth } from '../components/AuthContext';
import { Lock } from 'lucide-react';

export default function ResearchPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { subscriptionTier } = useAuth();
  const isSierra = subscriptionTier === 'pro';
  const navigateToJoin = () => navigate('/join');
  const navigateToArticle = (id: string) => navigate(`/research/${id}`);
  const navigateToReport = (id: string) => {
    navigate(`/report/${id}`);
  };

  useEffect(() => {
    if (location.hash === '#quant-models') {
      setTimeout(() => {
        const element = document.getElementById('quant-models');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  // Selection of articles for specific slots
  const heroMain = marketArticles.find(a => a.id === 'hedging-volatile-market') || marketArticles[0];
  const heroCenter = equityResearch.find(a => a.id === 'microsoft-ai-surge') || equityResearch[1];
  
  const editorsPicks = [
    marketArticles.find(a => a.id === 'anthropic-investment-fees'),
    equityResearch.find(a => a.id === 'nlight-analysis'),
    marketArticles.find(a => a.id === 'macro-outlook-2026')
  ].filter(Boolean) as Article[];

  const topStories = marketArticles.filter(a => [
    'big-four-partnership-shift',
    'takeover-rhetoric-clampdown',
    'ai-trading-transparency-warning',
    'quantitative-investing-rise'
  ].includes(a.id)).slice(0, 4);

  const researchSpotlight = [
    equityResearch.find(r => r.id === 'stepan-company-deep-dive'),
    equityResearch.find(r => r.id === 'microsoft-ai-surge')
  ].filter(Boolean) as Article[];

  // Remaining market articles for the bottom section
  const remainingMarket = marketArticles.filter(a => ![
    heroMain.id,
    ...editorsPicks.map(p => p.id),
    ...topStories.map(s => s.id)
  ].includes(a.id));

  return (
    <main className="min-h-screen bg-[#eff2ff] pt-32 pb-20 font-serif overflow-x-hidden">
      {/* Decorative hairline grid wrapper */}
      <div className="max-w-[1300px] mx-auto px-4 md:px-6">
        
        {/* HERO SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-b border-intense-indigo/10 pb-10">
          
          {/* Left Column: Featured Text-heavy */}
          <div className="lg:col-span-4 lg:pr-8 lg:border-r border-intense-indigo/10 pt-4 cursor-pointer group" onClick={() => navigateToArticle(heroMain.id)}>
            <span className="text-blue-600 text-[13px] font-bold uppercase tracking-tight block mb-3 font-sans">
              Strategic Risk
            </span>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-[38px] leading-[1.05] text-intense-indigo mb-6 group-hover:text-blue-700 transition-colors">
              {heroMain.title}
            </h1>
            <p className="text-intense-indigo/70 text-lg leading-relaxed mb-6 font-sans">
              {heroMain.excerpt}
            </p>
            <div className="flex items-center gap-2 mb-8">
              <span className="bg-intense-indigo text-white text-[10px] font-bold px-1 py-0.5 rounded-sm uppercase tracking-wider font-sans">New</span>
            </div>
            
            <div className="space-y-6 pt-6 border-t border-intense-indigo/10">
              <div className="group/item">
                <blockquote className="text-intense-indigo text-lg font-bold leading-tight mb-2 border-l-2 border-blue-600 pl-3 italic">
                  "Volatility is not just an obstacle; it's a strategic environment for those prepared."
                </blockquote>
                <span className="text-xs text-intense-indigo/60 uppercase font-sans font-bold">Sergio O. Moneo</span>
              </div>
              <h3 className="text-intense-indigo text-lg font-bold hover:text-blue-700 transition-colors leading-tight font-serif">
                How Jay Powell repelled Donald Trump's attacks on the Federal Reserve
              </h3>
            </div>
          </div>

          {/* Middle Column: Microsoft Equity Research - NEW STRUCTURE */}
          <div className="lg:col-span-6 lg:px-8 lg:border-r border-intense-indigo/10 pt-4 flex flex-col group cursor-pointer" onClick={() => navigateToReport(heroCenter.id)}>
            {/* Logo Header */}
            <div className="w-full aspect-[16/9] relative overflow-hidden shadow-sm bg-white border border-intense-indigo/5 flex items-center justify-center">
              <img 
                src={heroCenter.previewImage || heroCenter.reportImages?.[0]} 
                alt="Microsoft Research"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
            </div>
            {/* Colored Content Box */}
            <div className="bg-[#dee5ff] p-10 flex flex-col items-center text-center flex-grow border-b border-intense-indigo/5">
               <span className="text-blue-700 text-[13px] font-bold uppercase tracking-tight block mb-4 font-sans">Microsoft Corp (NASDAQ: MSFT)</span>
               <h2 className="font-serif text-2xl md:text-3xl lg:text-[32px] leading-[1.15] text-intense-indigo mb-6 group-hover:text-blue-900 transition-colors">
                 The AI Surge and the Future of Cloud Computing
               </h2>
               <p className="text-intense-indigo/70 text-lg font-serif italic mb-8 max-w-lg">
                 Our deep dive into the 2026 outlook for Azure AI and the long-term impact of its strategic partnerships.
               </p>
               <div className="mt-auto bg-white/50 text-intense-indigo/80 px-4 py-1 rounded text-[10px] font-bold uppercase tracking-[0.2em] font-sans border border-intense-indigo/10">
                 Exclusive
               </div>
            </div>
          </div>

          {/* Right Column: Editor's Picks Sidebar */}
          <div className="lg:col-span-2 lg:pl-8 pt-4">
            <h3 className="text-intense-indigo/40 text-sm font-bold uppercase tracking-[0.1em] mb-8 pb-2 border-b border-intense-indigo/10 w-fit font-sans">Editor's picks</h3>
            
            <div className="space-y-12">
              {editorsPicks.map((pick, idx) => (
                <div key={idx} className="group cursor-pointer flex flex-col" onClick={() => pick.type === 'Report' ? navigateToReport(pick.id) : navigateToArticle(pick.id)}>
                  <div className="aspect-[4/3] w-full mb-4 overflow-hidden rounded-lg shadow-sm bg-white/50 border border-intense-indigo/5">
                    <img 
                      src={pick.previewImage || pick.reportImages?.[0] || pick.chartUrl || "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=400"} 
                      alt="" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0"
                    />
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-intense-indigo text-lg font-bold leading-tight group-hover:text-blue-700 transition-colors font-serif">
                      {pick.title}
                    </h4>
                    <div className="flex items-center gap-2 pt-2 border-t border-intense-indigo/5">
                       <span className="text-[10px] font-bold text-intense-indigo/50 uppercase tracking-widest font-sans">
                         {idx === 0 ? 'Sergio O. Moneo' : idx === 1 ? 'Jaime de la Puente' : 'Sergio O. Moneo, Jaime de la Puente'}
                       </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="py-10 border-b border-intense-indigo/10">
          <div className="flex items-center justify-center mb-10 overflow-hidden relative">
            <div className="h-px bg-intense-indigo/10 w-full absolute top-1/2 -translate-y-1/2"></div>
            <h2 className="bg-[#eff2ff] relative z-10 px-6 text-xs font-bold text-intense-indigo/30 uppercase tracking-[0.4em] font-sans">Top Stories</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border-l border-intense-indigo/10">
            {topStories.map((story, idx) => (
              <div 
                key={idx} 
                className={`p-6 border-r border-b lg:border-b-0 border-intense-indigo/10 group cursor-pointer flex flex-col h-full hover:bg-white/40 transition-colors`}
                onClick={() => navigateToArticle(story.id)}
              >
                <div className="aspect-[16/9] mb-4 overflow-hidden bg-white/50 rounded-lg shadow-sm">
                  <img 
                    src={story.previewImage || story.reportImages?.[0] || `https://picsum.photos/seed/${story.id}/500/280`} 
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <span className="text-blue-600 text-[12px] font-bold uppercase tracking-tight block mb-2 font-sans">
                  {story.topics?.[0] || 'Market'}
                </span>
                <h3 className="font-serif text-xl leading-tight text-intense-indigo font-bold mb-3 group-hover:text-blue-700 transition-colors">
                  {story.title}
                </h3>
                {idx === 1 && (
                  <div className="inline-block self-start bg-blue-600 text-white text-[9px] font-bold px-1.5 py-0.5 uppercase tracking-widest mb-3 rounded font-sans">
                    Exclusive
                  </div>
                )}
                <p className="text-sm text-intense-indigo/60 line-clamp-3 mb-6 leading-relaxed font-sans">
                  {story.excerpt}
                </p>
                <div className="mt-auto pt-4 border-t border-intense-indigo/10">
                  <span className="text-[10px] font-bold text-intense-indigo/40 uppercase tracking-widest font-sans">{story.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* EQUITY RESEARCH SECTION - DOCUMENT PREVIEWS */}
        <div className="py-20 bg-white/30 -mx-4 md:-mx-6 px-4 md:px-6 mb-20 border-y border-intense-indigo/10">
          <div className="max-w-[1300px] mx-auto">
            <div className="flex items-center justify-between mb-16">
              <h2 className="text-xs font-bold text-intense-indigo/30 uppercase tracking-[0.4em] font-sans">Research Reports</h2>
              <div className="h-px bg-intense-indigo/10 flex-grow mx-8"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {researchSpotlight.map((report) => (
                <div key={report.id} className="flex gap-8 items-start group cursor-pointer font-serif" onClick={() => navigateToReport(report.id)}>
                  {/* PDF Preview Card */}
                  <div className="flex-shrink-0">
                    <div className="relative w-40 md:w-48 aspect-[1/1.414] bg-white rounded-sm shadow-xl overflow-hidden border border-gray-100 group-hover:-translate-y-2 group-hover:shadow-2xl transition-all duration-500">
                      <img 
                        src={report.reportImages?.[0] || report.previewImage || `https://picsum.photos/seed/${report.id}/400/560`} 
                        alt={report.title}
                        className="w-full h-full object-cover"
                      />
                      {/* Member Badge Overlay */}
                      {report.isMembersOnly && (
                        <div className="absolute top-2 right-2 flex gap-1">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse"></div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Report Text Content */}
                  <div>
                    <span className="text-blue-600 text-[11px] font-bold uppercase tracking-widest block mb-2 font-sans">Company Report</span>
                    <h3 className="font-serif text-2xl lg:text-3xl leading-[1.1] text-intense-indigo font-bold mb-4 group-hover:text-blue-700 transition-colors">
                      {report.title}
                    </h3>
                    <p className="text-intense-indigo/60 text-sm font-sans leading-relaxed line-clamp-4">
                      {report.excerpt}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* QUANT MODELS SECTION */}
        <div id="quant-models" className="py-20 -mx-4 md:-mx-6 px-4 md:px-6 mb-20">
          <div className="max-w-[1300px] mx-auto">
            <div className="flex items-center justify-between mb-16">
              <h2 className="text-xs font-bold text-intense-indigo/30 uppercase tracking-[0.4em] font-sans">Quant Models</h2>
              <div className="h-px bg-intense-indigo/10 flex-grow mx-8"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Quant models will be uploaded here later */}
            </div>
          </div>
        </div>

        {/* MORE CONTENT SECTION */}
        <div className="py-10">
          <div className="flex items-center justify-center mb-10 overflow-hidden relative">
            <div className="h-px bg-intense-indigo/10 w-full absolute top-1/2 -translate-y-1/2"></div>
            <h2 className="bg-[#eff2ff] relative z-10 px-6 text-xs font-bold text-intense-indigo/30 uppercase tracking-[0.4em] font-sans">Market Analysis</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {remainingMarket.map((article, idx) => (
              <div 
                key={idx} 
                className="group cursor-pointer flex flex-col p-4 rounded-2xl hover:bg-white/50 transition-colors"
                onClick={() => navigateToArticle(article.id)}
              >
                <div className="aspect-video mb-4 overflow-hidden rounded-xl bg-white/50 shadow-sm">
                  <img 
                    src={article.previewImage || article.reportImages?.[0] || `https://picsum.photos/seed/${article.id}/600/340`} 
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <span className="text-blue-600 text-[11px] font-bold uppercase tracking-widest mb-1 font-sans">
                  {article.topics?.[0] || 'Strategic Focus'}
                </span>
                <h3 className="font-serif text-lg font-bold text-intense-indigo leading-tight group-hover:text-blue-700 transition-colors mb-2">
                  {article.title}
                </h3>
                <p className="text-xs text-intense-indigo/60 line-clamp-2 leading-relaxed font-sans">
                  {article.excerpt}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
      <CTABox onJoinClick={navigateToJoin} />
    </main>
  );
}
