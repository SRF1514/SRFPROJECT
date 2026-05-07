import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Linkedin, Instagram, Users, Globe, ExternalLink, ArrowRight, Briefcase, GraduationCap, X, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { careersModules } from '../data/careersContent';
import MembershipModal from '../components/MembershipModal';

export default function CareersPage() {
  const [showMembership, setShowMembership] = useState(false);

  return (
    <main className="flex-grow flex flex-col w-full pb-16 lg:pb-24 pt-[112px] lg:pt-[128px] font-sans bg-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 bg-noise opacity-[0.02] pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-bl from-intense-indigo/5 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/3 bg-gradient-to-tr from-intense-indigo/5 to-transparent rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>
      
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[2cm] w-full relative z-10">
        {/* Hero Section */}
        <div className="mb-12 md:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row justify-between items-end gap-8 border-b border-gray-100 pb-12"
          >
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-intense-indigo/5 text-intense-indigo text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                <Users className="w-3 h-3" />
                Network First
              </div>
              <h1 className="font-sans text-3xl md:text-5xl lg:text-6xl leading-[1] text-intense-indigo mb-6">
                <span className="font-bold">Sierra Community:</span><br />
                <span className="font-normal">Navigate the Landscape</span>
              </h1>
              <p className="text-lg md:text-xl text-intense-indigo/60 font-medium leading-relaxed">
                Connect with fellow analysts and learn a repeatable approach to breaking into finance. 
                From sectors and roles to building a profile that stands out.
              </p>
            </div>
            
            <div className="hidden lg:flex flex-col items-end gap-3 pb-2">
              <div className="text-right">
                <div className="text-[10px] font-bold text-intense-indigo/30 uppercase tracking-[0.2em]">Community Reach</div>
                <div className="text-4xl font-sans font-bold text-intense-indigo">Global</div>
              </div>
              <div className="flex items-center gap-1">
                <div className="flex -space-x-1">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-5 h-5 rounded-full border border-white bg-intense-indigo/10 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-intense-indigo/40 animate-pulse" style={{ animationDelay: `${i * 150}ms` }} />
                    </div>
                  ))}
                </div>
                <div className="text-[10px] uppercase font-black text-intense-indigo/40 tracking-tighter ml-1">
                  Active Now
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-20 items-start">
          {/* Left Column: Modules & Roadmap */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-xl md:text-2xl font-sans font-bold text-intense-indigo mb-8 flex items-center gap-3">
                <Briefcase className="w-6 h-6" />
                The Recruitment Roadmap
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {careersModules.map((module, index) => (
                  <Link 
                    key={module.id}
                    to={`/careers/${module.id}`}
                    className="group bg-gray-50/50 hover:bg-intense-indigo/5 p-6 rounded-2xl border border-gray-100 hover:border-intense-indigo/20 transition-all duration-300 flex flex-col justify-between min-h-[140px]"
                  >
                    <div>
                      <span className="text-[10px] font-black text-intense-indigo/40 uppercase tracking-widest mb-2 block">
                        Module {String(index + 1).padStart(2, '0')}
                      </span>
                      <h3 className="text-lg font-bold text-intense-indigo group-hover:translate-x-1 transition-transform">
                        {module.title}
                      </h3>
                    </div>
                    <div className="flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowRight className="w-5 h-5 text-intense-indigo" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-emerald-50/30 rounded-[2rem] p-8 border border-emerald-100 group overflow-hidden relative">
              <div className="relative z-10">
                <span className="text-[10px] font-black text-emerald-600/40 uppercase tracking-[0.2em] mb-4 block">Membership Tiers</span>
                <h3 className="text-xl font-sans font-bold text-intense-indigo mb-4">Elevate your Edge</h3>
                <ul className="space-y-3 mb-6">
                  {[
                    { icon: <Zap className="w-3 h-3" />, text: "Full Research (PDF + Excel)" },
                    { icon: <Users className="w-3 h-3" />, text: "Live Monthly Briefings" },
                    { icon: <ShieldCheck className="w-3 h-3" />, text: "Early access to new quant models" },
                    { icon: <Briefcase className="w-3 h-3" />, text: "Career Mentorship Rounds" }
                  ].map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs font-bold text-intense-indigo/60">
                      <span className="text-emerald-500">{benefit.icon}</span>
                      {benefit.text}
                    </li>
                  ))}
                </ul>
                <a 
                  href="mailto:sierraresearchfund@gmail.com"
                  className="w-full py-3 bg-white border border-emerald-100 rounded-xl text-[10px] font-black text-emerald-600 uppercase tracking-widest hover:bg-emerald-500 hover:text-white transition-all shadow-sm flex items-center justify-center mb-4"
                >
                  Contact us
                </a>
                <div className="text-center">
                  <Link 
                    to="/join"
                    className="text-[10px] font-bold text-emerald-600/60 hover:text-emerald-600 underline decoration-emerald-200 underline-offset-4 tracking-wider transition-colors"
                  >
                    ·Apply for membership·
                  </Link>
                </div>
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-emerald-500/5 rounded-full group-hover:scale-110 transition-transform duration-700"></div>
            </div>
          </motion.div>

          {/* Right Column: Socials & Support */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Social Connect Card */}
            <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-xl shadow-intense-indigo/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-intense-indigo/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <h3 className="text-xl font-sans font-bold text-intense-indigo mb-6 relative z-10">Follow the Journey</h3>
              <div className="space-y-4 relative z-10">
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl bg-[#0077b5]/5 border border-[#0077b5]/10 hover:bg-[#0077b5]/10 transition-colors group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#0077b5] flex items-center justify-center text-white">
                      <Linkedin className="w-5 h-5 fill-current" />
                    </div>
                    <div>
                      <div className="font-bold text-[#0077b5]">LinkedIn</div>
                      <div className="text-xs text-[#0077b5]/60 font-medium">Industry Insights</div>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-[#0077b5] group-hover:translate-x-1 transition-transform" />
                </a>

                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl bg-[#e1306c]/5 border border-[#e1306c]/10 hover:bg-[#e1306c]/10 transition-colors group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] flex items-center justify-center text-white">
                      <Instagram className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-[#e1306c]">Instagram</div>
                      <div className="text-xs text-[#e1306c]/60 font-medium">Inside the Fund</div>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-[#e1306c] group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            <section className="bg-gray-50/80 p-8 rounded-3xl border border-gray-100">
              <h2 className="text-lg font-bold text-intense-indigo mb-4 flex items-center gap-2">
                <GraduationCap className="w-5 h-5" />
                Educational Outcome
              </h2>
              <p className="text-intense-indigo/60 text-sm leading-relaxed mb-6">
                Classify different finance sectors and roles based on their culture and requirements. Mark key milestones in the recruiting timeline and prepare accordingly. 
              </p>
              <div className="space-y-3">
                {['Sector Classification', 'Recruitment Timeline', 'Narrative Building'].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs font-bold text-intense-indigo/40 uppercase tracking-tighter">
                    <div className="w-1 h-1 rounded-full bg-intense-indigo/20"></div>
                    {item}
                  </div>
                ))}
              </div>
            </section>

            <div className="p-8 rounded-3xl border border-dashed border-gray-200 text-center">
              <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-6 h-6 text-intense-indigo/20" />
              </div>
              <h4 className="font-bold text-intense-indigo mb-2">Need direct help?</h4>
              <p className="text-xs text-intense-indigo/40 mb-4">Our community leads are here to guide your transition into finance.</p>
              <a 
                href="mailto:sierraresearchfund@gmail.com"
                className="text-intense-indigo font-black text-[10px] uppercase tracking-widest hover:underline inline-block"
              >
                Contact Support
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {showMembership && (
          <MembershipModal onClose={() => setShowMembership(false)} />
        )}
      </AnimatePresence>
    </main>
  );
}
