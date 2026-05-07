import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { careersModules } from '../data/careersContent';
import { ArrowLeft, ChevronRight, ChevronLeft } from 'lucide-react';
import MembershipGate from '../components/MembershipGate';

export default function ModulePage() {
  const { id } = useParams<{ id: string }>();
  
  const currentIndex = careersModules.findIndex(m => m.id === id);
  
  if (currentIndex === -1) {
    return <Navigate to="/careers" replace />;
  }

  const module = careersModules[currentIndex];
  const prevModule = currentIndex > 0 ? careersModules[currentIndex - 1] : null;
  const nextModule = currentIndex < careersModules.length - 1 ? careersModules[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-white text-[#1a1a1a] p-8 md:p-16 pt-[112px] lg:pt-[128px] font-sans">
      <div className="max-w-4xl mx-auto">
        <Link 
          to="/careers" 
          className="inline-flex items-center text-[#1e2b85] hover:underline mb-8 font-medium"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Sierra Community
        </Link>
        
        <div className="mb-12">
          <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">
            Module {String(currentIndex + 1).padStart(2, '0')}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1e2b85] mt-2 mb-8">
            {module.title}
          </h1>
          
          <MembershipGate>
            {module.content}
          </MembershipGate>
        </div>

        {/* Navigation between modules */}
        <div className="flex justify-between items-center pt-8 border-t border-gray-200 mt-16">
          {prevModule ? (
            <Link 
              to={`/careers/${prevModule.id}`}
              className="group flex items-center text-[#1e2b85] hover:underline font-medium"
            >
              <ChevronLeft className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" />
              <div className="text-left">
                <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Previous</div>
                <div>{prevModule.title}</div>
              </div>
            </Link>
          ) : (
            <div></div>
          )}

          {nextModule ? (
            <Link 
              to={`/careers/${nextModule.id}`}
              className="group flex items-center text-[#1e2b85] hover:underline font-medium text-right"
            >
              <div className="text-right">
                <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Next</div>
                <div>{nextModule.title}</div>
              </div>
              <ChevronRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
}
