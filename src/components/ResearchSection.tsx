import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText, BarChart2, Lock } from 'lucide-react';
import { motion } from 'motion/react';
import { equityResearch, marketArticles } from '../data/articles';
import { useAuth } from './AuthContext';

export default function ResearchSection({ onJoinClick }: { onJoinClick?: () => void }) {
  const navigate = useNavigate();
  const { subscriptionTier } = useAuth();
  const isSierra = subscriptionTier === 'pro';
  const carouselRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (carouselRef.current) {
        // Since we double the cards, the loop point is half of the total scroll width
        setWidth(carouselRef.current.scrollWidth / 2);
      }
    };
    
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const anthropicArticle = marketArticles.find(a => a.id === 'anthropic-investment-fees') || marketArticles[0];
  const msftReport = equityResearch.find(a => a.id === 'microsoft-ai-surge') || equityResearch[1];
  const sclReport = equityResearch.find(a => a.id === 'stepan-company-deep-dive') || equityResearch[0];
  const nlightArticle = equityResearch.find(a => a.id === 'nlight-analysis') || equityResearch[2];

  const combinedCards = [
    {
      id: msftReport.id,
      type: "Equity Research",
      quote: msftReport.excerpt,
      title: msftReport.title,
      authorName: "Sierra Research Team",
      authorTitle: "High Conviction",
      logo: "/MSFT.png",
      bgImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: anthropicArticle.id,
      type: "Articles",
      quote: anthropicArticle.excerpt,
      title: anthropicArticle.title,
      authorName: "Sierra Research Team",
      authorTitle: "Market Strategy",
      ticker: "AI",
      bgImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: sclReport.id,
      type: "Equity Research",
      quote: sclReport.excerpt,
      title: sclReport.title,
      authorName: "Sergio O. Moneo",
      authorTitle: "Equity Research Analyst",
      logo: "/stepan.png",
      bgImage: "/industrialplant.jpg",
    },
    {
      id: nlightArticle.id,
      type: "Articles",
      quote: nlightArticle.excerpt,
      title: nlightArticle.title,
      authorName: "Sierra Research Team",
      authorTitle: "Tech & Defense",
      logo: "/nlight.png",
      bgImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop",
    }
  ];

  const handleCardClick = (card: typeof combinedCards[0]) => {
    if (card.type === 'Equity Research' && !isSierra) {
      navigate('/join');
      return;
    }
    
    if (card.type === 'Equity Research') {
      navigate(`/report/${card.id}`);
    } else {
      navigate(`/research/${card.id}`);
    }
  };

  return (
    <section className="w-full bg-white py-16 overflow-hidden font-sans relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[2cm] relative z-10">
        <div className="text-center mb-12 flex flex-col items-center">
          <h2 className="font-serif font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 tracking-tight mb-3">
            Read our Equity Research and Articles
          </h2>
          <p className="text-gray-600 text-base md:text-lg font-bold max-w-2xl">
            Don´t miss out on investment opportunities. Explore our quantitative models.
          </p>
        </div>
      </div>

      <style>{`
        @keyframes scroll-ltr {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
        .animate-scroll-ltr {
          animation: scroll-ltr 60s linear infinite;
          width: max-content;
        }
        .animate-scroll-ltr:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden flex items-center">
        {/* Left/Right Gradient Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-36 lg:w-48 bg-gradient-to-r from-white via-white/80 to-transparent z-30 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-36 lg:w-48 bg-gradient-to-l from-white via-white/80 to-transparent z-30 pointer-events-none" />

        <div className="w-full">
          <div className="animate-scroll-ltr flex gap-6 py-4">
            {/* Double the cards for seamless loop */}
            {[...combinedCards, ...combinedCards].map((card, index) => (
              <div
                key={`${index}-${card.id}`}
                onClick={() => handleCardClick(card)}
                className="relative w-[300px] md:w-[450px] lg:w-[550px] h-[280px] md:h-[330px] rounded-2xl overflow-hidden shadow-[0_2px_10px_rgb(0,0,0,0.04)] cursor-pointer border border-white/5 group shrink-0"
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src={card.bgImage} 
                    alt={card.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    draggable="false"
                  />
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black/70 transition-opacity duration-500 group-hover:bg-black/60"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
                </div>

                {/* Card Content */}
                <div className="relative z-10 w-full h-full flex flex-col justify-between p-5 md:p-6">
                  
                  {/* Top Row: Logo/Ticker & Type */}
                  <div className="flex justify-between items-start w-full">
                    {/* Top Left: Logo or Ticker */}
                    <div className="flex items-center justify-center">
                      {card.logo ? (
                        <img src={card.logo} alt="Company Logo" className="h-5 md:h-8 object-contain" />
                      ) : (
                        <span className="text-white font-bold text-base md:text-lg tracking-wider">
                          {card.ticker}
                        </span>
                      )}
                    </div>

                    {/* Top Right: Type */}
                    <div className="text-white/80 font-semibold text-xs md:text-sm uppercase tracking-widest flex items-center gap-1">
                      {card.type === 'Articles' ? <FileText size={16} /> : <BarChart2 size={16} />}
                      {card.type}
                    </div>
                  </div>

                  {/* Middle: Quote / Title */}
                  <div className="mt-auto mb-4 max-w-3xl">
                    <h3 className="text-white font-sans text-lg md:text-xl lg:text-2xl leading-[1.2] tracking-tight line-clamp-2">
                      {card.title}: <span className="font-sans text-white/80 text-sm md:text-base">{card.quote}</span>
                    </h3>
                  </div>

                  {/* Bottom Row: Author & Button */}
                  <div className="flex items-center justify-between">
                    {/* Author Info (No Image) */}
                    <div>
                      <div className="text-white font-semibold text-sm md:text-base">
                        {card.authorName}
                      </div>
                      <div className="text-gray-400 text-xs md:text-sm">
                        {card.authorTitle}
                      </div>
                    </div>

                    {/* Read Story Button */}
                    <div className="bg-white text-black font-semibold px-4 py-1.5 rounded-full text-xs md:text-sm transition-all duration-300 group-hover:shadow-[0_0_10px_rgba(255,255,255,0.4)] group-hover:bg-gray-100">
                      Read Story
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
