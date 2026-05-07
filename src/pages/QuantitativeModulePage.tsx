import React, { useEffect } from 'react';
import { useParams, Link, Navigate, useNavigate } from 'react-router-dom';
import { quantitativeAnalysisModules } from '../data/quantitativeAnalysisContent';
import { ArrowLeft, ChevronRight, ChevronLeft } from 'lucide-react';
import ModuleCompletion from '../components/ModuleCompletion';
import ModuleQuiz from '../components/ModuleQuiz';
import MembershipGate from '../components/MembershipGate';

export default function QuantitativeModulePage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const currentIndex = quantitativeAnalysisModules.findIndex(m => m.id === id);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (currentIndex === -1) {
    return <Navigate to="/learn/quantitative-analysis" replace />;
  }

  const module = quantitativeAnalysisModules[currentIndex];
  const prevModule = currentIndex > 0 ? quantitativeAnalysisModules[currentIndex - 1] : null;
  const nextModule = currentIndex < quantitativeAnalysisModules.length - 1 ? quantitativeAnalysisModules[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-white text-[#1a1a1a] pt-[112px] lg:pt-[140px] font-sans">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[2cm] pb-24">
        <Link 
          to="/learn/quantitative-analysis" 
          className="inline-flex items-center text-intense-indigo/60 hover:text-intense-indigo mb-8 font-bold transition-colors group text-sm uppercase tracking-wider"
        >
          <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
          Back to Quantitative Analysis
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12 lg:gap-20">
          {/* Main Content */}
          <div className="w-full">
            <div className="mb-12">
              <span className="text-[10px] font-bold text-intense-indigo/40 uppercase tracking-[0.2em]">
                Module {String(currentIndex + 1).padStart(2, '0')}
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-intense-indigo mt-2 mb-8 leading-tight tracking-tight">
                {module.title}
              </h1>
              
              <MembershipGate>
                {module.content}
              </MembershipGate>
            </div>

            <ModuleCompletion moduleId={module.id} moduleTitle={module.title} />

            {/* Navigation between modules */}
            <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-gray-100 mt-16 gap-6">
              {prevModule ? (
                <Link 
                  to={`/learn/quantitative-analysis/${prevModule.id}`}
                  className="w-full sm:w-auto group flex items-center p-4 rounded-2xl border border-gray-100 hover:border-intense-indigo/20 hover:bg-gray-50 transition-all text-left"
                >
                  <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-white transition-colors mr-4">
                    <ChevronLeft className="w-5 h-5 text-intense-indigo/40 group-hover:text-intense-indigo transition-colors" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-intense-indigo/40 uppercase tracking-wider mb-1">Previous</div>
                    <div className="text-sm font-bold text-intense-indigo line-clamp-1">{prevModule.title}</div>
                  </div>
                </Link>
              ) : (
                <div className="hidden sm:block"></div>
              )}

              {nextModule ? (
                <Link 
                  to={`/learn/quantitative-analysis/${nextModule.id}`}
                  className="w-full sm:w-auto group flex items-center p-4 rounded-2xl border border-gray-100 hover:border-intense-indigo/20 hover:bg-gray-50 transition-all text-right"
                >
                  <div className="text-right ml-auto">
                    <div className="text-[10px] font-bold text-intense-indigo/40 uppercase tracking-wider mb-1">Next</div>
                    <div className="text-sm font-bold text-intense-indigo line-clamp-1">{nextModule.title}</div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-white transition-colors ml-4">
                    <ChevronRight className="w-5 h-5 text-intense-indigo/40 group-hover:text-intense-indigo transition-colors" />
                  </div>
                </Link>
              ) : (
                <div className="hidden sm:block"></div>
              )}
            </div>

            <ModuleQuiz moduleId={module.id} />
          </div>

          {/* Sidebar: Course Progress */}
          <div className="w-full">
            <div className="sticky top-32">
              <div className="bg-gray-50/50 rounded-2xl p-6 border border-gray-100">
                <h3 className="font-bold text-xs uppercase tracking-[0.2em] text-intense-indigo/40 mb-6">Course Progress</h3>
                <div className="space-y-3">
                  {quantitativeAnalysisModules.map((m, i) => (
                    <button
                      key={m.id}
                      onClick={() => navigate(`/learn/quantitative-analysis/${m.id}`)}
                      className={`w-full flex items-center gap-3 text-left group transition-colors ${m.id === id ? 'text-intense-indigo' : 'text-intense-indigo/40 hover:text-intense-indigo/60'}`}
                    >
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold border transition-colors ${m.id === id ? 'bg-intense-indigo text-white border-intense-indigo shadow-sm' : 'bg-white border-gray-100 group-hover:border-intense-indigo/20'}`}>
                        {i + 1}
                      </div>
                      <span className="text-xs font-bold line-clamp-1">{m.title}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
