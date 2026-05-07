import React, { useEffect, useState, useRef } from 'react';
import { Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom';
import { ArrowRight, ChevronDown, LayoutDashboard } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { AuthProvider, useAuth } from './components/AuthContext';
import LearnSection from './components/LearnSection';
import MethodSection from './components/MethodSection';
import PortfolioSection from './components/PortfolioSection';
import ResearchSection from './components/ResearchSection';
import CTABox from './components/CTABox';
import Footer from './components/Footer';
import CFAPopup from './components/CFAPopup';
import JoinPage from './components/JoinPage';
import SignInPage from './components/SignInPage';
import AboutPage from './components/AboutPage';
import CareersPage from './pages/CareersPage';
import MarketFoundationsPage from './pages/MarketFoundationsPage';
import FundamentalAnalysisPage from './pages/FundamentalAnalysisPage';
import ModulePage from './pages/ModulePage';
import MarketModulePage from './pages/MarketModulePage';
import FundamentalModulePage from './pages/FundamentalModulePage';
import EventDrivenAnalysisPage from './pages/EventDrivenAnalysisPage';
import EventDrivenModulePage from './pages/EventDrivenModulePage';
import QuantitativeAnalysisPage from './pages/QuantitativeAnalysisPage';
import QuantitativeModulePage from './pages/QuantitativeModulePage';
import TechnicalAnalysisPage from './pages/TechnicalAnalysisPage';
import TechnicalModulePage from './pages/TechnicalModulePage';
import PortfolioPage from './pages/PortfolioPage';
import ResearchPage from './pages/ResearchPage';
import CFAPage from './pages/CFAPage';
import ArticlePage from './pages/ArticlePage';
import ReportViewerPage from './pages/ReportViewerPage';
import LegalPage from './pages/LegalPage';
import DashboardPage from './pages/DashboardPage';

import CFAFeatureSection from './components/CFAFeatureSection';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  
  if (loading) return null;
  if (!user) return <Navigate to="/signin" />;
  
  return <>{children}</>;
}

function AppContent() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, subscriptionTier, toggleSubscriptionTier } = useAuth();
  const [isLearnDropdownOpen, setIsLearnDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsLearnDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLearnDropdownOpen(false);
  }, [location.pathname]);

  const navigateToJoin = () => navigate(user ? '/dashboard' : '/join');
  const navigateToSignIn = () => navigate(user ? '/dashboard' : '/signin');
  const navigateToHome = () => navigate('/');
  const navigateToAbout = () => navigate('/about');
  const navigateToCareers = () => navigate('/careers');
  const navigateToPortfolio = () => navigate('/portfolio');
  const navigateToResearch = () => navigate('/research');
  const navigateToCFA = () => navigate('/cfa', { state: { resetHub: Date.now() } });
  const navigateToMicrosoftReport = () => navigate('/report/microsoft-ai-surge');
  const navigateToDashboard = () => navigate('/dashboard');

  return (
    <div className="min-h-screen w-full bg-white flex flex-col font-sans relative">
      {/* Membership Debug Toggle - Added for user convenience */}
      <div className="fixed bottom-6 left-6 z-[9999] flex flex-col items-start gap-2">
        <div className="bg-intense-indigo text-white px-3 py-1 rounded text-[10px] font-bold uppercase tracking-widest shadow-lg">
          Status: {subscriptionTier === 'pro' ? 'Sierra Member' : 'Free User'}
        </div>
        <button 
          onClick={toggleSubscriptionTier}
          className="bg-white border-2 border-intense-indigo text-intense-indigo px-4 py-2 rounded-full font-bold text-xs shadow-xl hover:bg-intense-indigo hover:text-white transition-all cursor-pointer active:scale-95"
        >
          Toggle Membership
        </button>
      </div>

      <div className="fixed top-0 left-0 right-0 z-50 w-full flex flex-col bg-[#0a0a0a]">
        {/* Announcement Bar */}
        <div className="announcement-bar shrink-0">
          <div className="announcement-content">
            <span className="announcement-text">
              <span className="font-bold">New</span> Equity Research on MSFT
            </span>
            <span className="announcement-divider">|</span>
            <a href="#" onClick={(e) => { e.preventDefault(); navigateToMicrosoftReport(); }} className="announcement-link">
              <span>Learn more</span>
              <span className="announcement-arrow">→</span>
            </a>
          </div>
        </div>
        {/* Navigation */}
        <nav className="w-full bg-white relative z-40 shrink-0">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[2cm]">
          <div className="flex justify-between items-center h-14 lg:h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={navigateToHome}>
              <div className="flex items-center">
                <img src="/logo.png" alt="Sierra Research Fund" className="h-8 lg:h-10 object-contain" onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }} />
                <div className="hidden flex items-center">
                  <svg className="h-8 w-8 lg:h-10 lg:w-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="ml-2 text-lg lg:text-xl font-bold text-intense-indigo">SIERRA<br/><span className="text-base lg:text-lg font-normal">Research Fund</span></span>
                </div>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              <div className="relative" ref={dropdownRef}>
                <button 
                  onClick={() => setIsLearnDropdownOpen(!isLearnDropdownOpen)}
                  className="flex items-center text-intense-indigo font-bold text-base lg:text-lg hover:opacity-80 cursor-pointer"
                >
                  Learn
                  <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-200 ${isLearnDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {isLearnDropdownOpen && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50 overflow-hidden"
                    >
                      {[
                        { name: 'Market Foundations', path: '/learn/market-foundations' },
                        { name: 'Fundamental Analysis', path: '/learn/fundamental-analysis' },
                        { name: 'Technical Analysis', path: '/learn/technical-analysis' },
                        { name: 'Event-driven Analysis', path: '/learn/event-driven-analysis' },
                        { name: 'Quantitative Analysis', path: '/learn/quantitative-analysis' }
                      ].map((item) => (
                        <button 
                          key={item.name}
                          onClick={() => {
                            if (item.path.startsWith('/#')) {
                              if (location.pathname === '/') {
                                document.getElementById(item.path.split('#')[1])?.scrollIntoView({ behavior: 'smooth' });
                              } else {
                                navigate('/');
                                setTimeout(() => {
                                  document.getElementById(item.path.split('#')[1])?.scrollIntoView({ behavior: 'smooth' });
                                }, 100);
                              }
                            } else {
                              navigate(item.path);
                            }
                            setIsLearnDropdownOpen(false);
                          }}
                          className="w-full text-left px-4 py-3 text-sm font-bold text-intense-indigo hover:bg-gray-50 transition-colors"
                        >
                          {item.name}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <a href="#" onClick={(e) => { e.preventDefault(); navigateToResearch(); }} className="text-intense-indigo font-bold text-base lg:text-lg hover:opacity-80">Research</a>
              <a href="#" onClick={(e) => { e.preventDefault(); navigateToCFA(); }} className="text-intense-indigo font-bold text-base lg:text-lg hover:opacity-80">CFA<sup>®</sup></a>
              <a href="#" onClick={(e) => { e.preventDefault(); navigateToPortfolio(); }} className="text-intense-indigo font-bold text-base lg:text-lg hover:opacity-80">Portfolio</a>
              <a href="#" onClick={(e) => { e.preventDefault(); navigateToCareers(); }} className="text-intense-indigo font-bold text-base lg:text-lg hover:opacity-80">Careers&Community</a>
              <a href="#" onClick={(e) => { e.preventDefault(); navigateToAbout(); }} className="text-intense-indigo font-bold text-base lg:text-lg hover:opacity-80">About</a>
            </div>

            {/* Join Button */}
            <div className="hidden md:flex items-center space-x-3">
              {user ? (
                <button onClick={navigateToDashboard} className="bg-intense-indigo text-white px-4 lg:px-5 py-1.5 rounded-full font-bold text-xs lg:text-sm hover:bg-opacity-90 transition-colors cursor-pointer">
                  ACCOUNT
                </button>
              ) : (
                <>
                  <button onClick={navigateToSignIn} className="text-intense-indigo font-bold text-sm hover:opacity-80 transition-opacity cursor-pointer">
                    Sign in
                  </button>
                  <button onClick={navigateToJoin} className="bg-intense-indigo text-white px-4 lg:px-5 py-1.5 rounded-full font-bold text-xs lg:text-sm hover:bg-opacity-90 transition-colors cursor-pointer">
                    JOIN
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
        {/* Shadow gradient below navbar */}
        <div className="h-4 w-full bg-gradient-to-b from-gray-200/60 to-transparent absolute -bottom-4 left-0 pointer-events-none"></div>
      </nav>
      </div>

      <div className="flex-grow flex flex-col">
        <AnimatePresence mode="wait">
          <Routes location={location}>
            <Route path="/portfolio" element={
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
                <PortfolioPage />
              </motion.div>
            } />
            <Route path="/research" element={
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
                <ResearchPage />
              </motion.div>
            } />
            <Route path="/cfa" element={
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
                <CFAPage key={location.key} />
              </motion.div>
            } />
            <Route path="/research/:articleId" element={
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
                <ArticlePage />
              </motion.div>
            } />
            <Route path="/report/:reportId" element={
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
                <ReportViewerPage />
              </motion.div>
            } />
            <Route path="/" element={
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
                {/* Main Content */}
                <main className="flex-grow flex flex-col max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[2cm] w-full pb-5 lg:pb-8 pt-[112px] lg:pt-[128px]">
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                      
                      {/* Left Column: Text */}
                      <div className="flex flex-col space-y-6 lg:space-y-8">
                        <h1 className="font-serif font-bold text-2xl md:text-3xl lg:text-4xl xl:text-[2.75rem] leading-[1.1] text-intense-indigo">
                          Learn finance the<br />
                          practical way — from<br />
                          theory to real portfolios
                        </h1>
                        
                        <p className="text-lg md:text-xl lg:text-2xl text-intense-indigo/60 font-medium leading-snug max-w-2xl">
                          Read and learn any <span className="font-bold text-intense-indigo/80">Financial Analysis</span>,<br />
                          and see how they are <span className="font-bold text-intense-indigo/80">Applied in the Market.</span>
                        </p>
                      </div>

                      {/* Right Column: Chart Image */}
                      <div className="flex justify-center lg:justify-end w-full">
                        <motion.img 
                          initial={{ scale: 0.95, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 0.4, duration: 0.8 }}
                          src="/chart.png" 
                          alt="Finance Chart" 
                          className="w-full max-w-xl xl:max-w-3xl max-h-[50vh] object-contain"
                        />
                      </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="mt-10 lg:mt-16 flex flex-col md:flex-row items-center gap-8 md:gap-16 w-full">
                      <div className="text-sm md:text-base lg:text-lg text-intense-indigo font-medium leading-relaxed max-w-3xl text-center md:text-left">
                        <p>
                          <span className="font-bold">Get early access</span> to portfolio updates, new Strategies, and Equity Research
                        </p>
                        <p>
                          <span className="font-bold">Join a growing community,</span> build your CV, get to know real experiences.
                        </p>
                      </div>

                      <div className="flex items-center gap-8 shrink-0">
                        <div className="relative group">
                          <button 
                            onClick={navigateToJoin} 
                            className="relative overflow-hidden bg-intense-indigo text-white px-8 py-4 rounded-full font-bold text-base lg:text-lg active:scale-95 transition-all shadow-xl shadow-blue-900/10 cursor-pointer"
                          >
                            {/* Shining Effect Overlay */}
                            <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent_35%,rgba(255,255,255,0.2)_50%,transparent_65%)] bg-[length:250%_100%] animate-shine pointer-events-none"></div>
                            Become a Member
                          </button>
                        </div>

                        <div className="flex flex-col items-start space-y-1">
                          <div className="flex -space-x-2">
                            {[1, 2, 3, 4].map((i) => (
                              <div key={i} className={`w-8 h-8 rounded-full border-2 border-white bg-intense-indigo/${10 * i} flex items-center justify-center text-[10px] font-bold text-white shadow-sm`}>
                                {i === 4 ? '+' : ''}
                              </div>
                            ))}
                          </div>
                          <div className="text-[10px] font-black uppercase tracking-widest text-intense-indigo/40">
                            15,000+ Enrolled
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </main>

                {/* Learn Section */}
                <LearnSection />

                {/* CFA Feature Section */}
                <CFAFeatureSection />

                {/* Portfolio Section */}
                <PortfolioSection onJoinClick={navigateToJoin} />

                {/* Research Section */}
                <ResearchSection onJoinClick={navigateToJoin} />

                {/* Method Section */}
                <MethodSection />

                {/* CTA Box Section */}
                <CTABox onJoinClick={navigateToJoin} fromColor="white" />
              </motion.div>
            } />
            <Route path="/join" element={
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <JoinPage onBack={navigateToHome} />
              </motion.div>
            } />
            <Route path="/signin" element={
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <SignInPage onBack={navigateToHome} onJoinClick={navigateToJoin} />
              </motion.div>
            } />
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <DashboardPage />
                </motion.div>
              </ProtectedRoute>
            } />
            <Route path="/about" element={
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <AboutPage onBack={navigateToHome} onJoinClick={navigateToJoin} />
              </motion.div>
            } />
            <Route path="/careers" element={
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <CareersPage />
              </motion.div>
            } />
            <Route path="/careers/:id" element={
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <ModulePage />
              </motion.div>
            } />
            <Route path="/learn/market-foundations" element={
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <MarketFoundationsPage />
              </motion.div>
            } />
            <Route path="/learn/market-foundations/:id" element={
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <MarketModulePage />
              </motion.div>
            } />
            <Route path="/learn/fundamental-analysis" element={
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <FundamentalAnalysisPage />
              </motion.div>
            } />
            <Route path="/learn/fundamental-analysis/:id" element={
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <FundamentalModulePage />
              </motion.div>
            } />
            <Route path="/learn/event-driven-analysis" element={
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <EventDrivenAnalysisPage />
              </motion.div>
            } />
            <Route path="/learn/event-driven-analysis/:id" element={
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <EventDrivenModulePage />
              </motion.div>
            } />
            <Route path="/learn/quantitative-analysis" element={
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <QuantitativeAnalysisPage />
              </motion.div>
            } />
            <Route path="/learn/quantitative-analysis/:id" element={
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <QuantitativeModulePage />
              </motion.div>
            } />
            <Route path="/learn/technical-analysis" element={
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <TechnicalAnalysisPage />
              </motion.div>
            } />
            <Route path="/learn/technical-analysis/:id" element={
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <TechnicalModulePage />
              </motion.div>
            } />
            <Route path="/legal" element={
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <LegalPage />
              </motion.div>
            } />
          </Routes>
        </AnimatePresence>
      </div>

      {/* Footer Section */}
      <Footer />
      <CFAPopup />
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}
