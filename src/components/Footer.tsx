import React from 'react';
import { Mail, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white pt-20 pb-0 overflow-hidden relative border-t border-gray-200">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[2cm] relative z-10">
        <div className="flex flex-col lg:flex-row justify-between gap-12 mb-20">
          
          {/* Links Columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12 w-full lg:w-3/4">
            {/* Learn */}
            <div className="flex flex-col gap-4">
              <h4 className="font-medium text-gray-900 mb-2">Learn</h4>
              <Link to="/learn/market-foundations" className="text-gray-500 hover:text-gray-900 text-sm transition-colors">Market Foundations</Link>
              <Link to="/learn/fundamental-analysis" className="text-gray-500 hover:text-gray-900 text-sm transition-colors">Fundamental Analysis</Link>
              <Link to="/learn/technical-analysis" className="text-gray-500 hover:text-gray-900 text-sm transition-colors">Technical Analysis</Link>
              <Link to="/learn/event-driven-analysis" className="text-gray-500 hover:text-gray-900 text-sm transition-colors">Event-driven Analysis</Link>
              <Link to="/learn/quantitative-analysis" className="text-gray-500 hover:text-gray-900 text-sm transition-colors">Quantitative Analysis</Link>
            </div>

            {/* Research */}
            <div className="flex flex-col gap-4">
              <h4 className="font-medium text-gray-900 mb-2">Research</h4>
              <Link to="/research" className="text-gray-500 hover:text-gray-900 text-sm transition-colors">Equity Research</Link>
              <Link to="/research" className="text-gray-500 hover:text-gray-900 text-sm transition-colors">Market Articles</Link>
            </div>

            {/* Portfolio */}
            <div className="flex flex-col gap-4">
              <h4 className="font-medium text-gray-900 mb-2">Portfolio</h4>
              <Link to="/portfolio" className="text-gray-500 hover:text-gray-900 text-sm transition-colors">Tracked Portfolio</Link>
              <Link to="/portfolio" className="text-gray-500 hover:text-gray-900 text-sm transition-colors">Performance Notes</Link>
            </div>

            {/* Sierra Community */}
            <div className="flex flex-col gap-4">
              <h4 className="font-medium text-gray-900 mb-2">Sierra Community</h4>
              <Link to="/careers" className="text-gray-500 hover:text-gray-900 text-sm transition-colors">Breaking into finance</Link>
              <Link to="/careers" className="text-gray-500 hover:text-gray-900 text-sm transition-colors">CV & Interviews</Link>
              <Link to="/careers" className="text-gray-500 hover:text-gray-900 text-sm transition-colors">Internship Resources</Link>
            </div>

            {/* Legal & Privacy */}
            <div className="flex flex-col gap-4">
              <h4 className="font-medium text-gray-900 mb-2">Legal & Privacy</h4>
              <Link to="/legal" className="text-gray-500 hover:text-gray-900 text-sm transition-colors">Terms & Conditions</Link>
              <Link to="/legal" className="text-gray-500 hover:text-gray-900 text-sm transition-colors">Privacy Policy</Link>
              <Link to="/legal" className="text-gray-500 hover:text-gray-900 text-sm transition-colors">Billing Terms</Link>
              <Link to="/about" className="text-gray-500 hover:text-gray-900 text-sm transition-colors">About Company</Link>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col items-start lg:items-end gap-6 lg:w-1/4">
            <h3 className="text-xl md:text-2xl text-gray-900 font-medium text-left lg:text-right">
              Accelerate your career in finance with us.
            </h3>
            <div className="flex items-center gap-5">
              <a 
                href="mailto:sierraresearchfund@gmail.com" 
                className="text-gray-400 hover:text-intense-indigo transition-colors cursor-pointer" 
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
              <a 
                href="https://www.linkedin.com/company/105088637/admin/dashboard/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-intense-indigo transition-colors cursor-pointer" 
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="https://www.instagram.com/sierraresearchfund/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-intense-indigo transition-colors cursor-pointer" 
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* System Status & Copyright */}
        <div className="border-t border-gray-200 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 font-bold uppercase">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              SYSTEM STATUS: <span className="text-gray-900">OPERATIONAL</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 ml-1"></span>
            </div>
            <div className="h-4 w-px bg-gray-200" />
            <div className="flex items-center gap-2">
               APP VERSION: <span className="text-intense-indigo">V2.2.1</span>
            </div>
          </div>
          <div>
            © 2026 SIERRA RESEARCH. <span className="text-gray-300 ml-2">SYNCED: {new Date().toLocaleDateString()}</span>
          </div>
        </div>
      </div>

      {/* Giant Text Background */}
      <div className="w-full overflow-hidden flex justify-center items-end mt-0 leading-none select-none pointer-events-none">
        <svg 
          viewBox="0 0 2200 560" 
          className="w-full h-auto translate-y-[25%]"
          preserveAspectRatio="xMidYMax slice"
        >
          <text 
            x="50%" 
            y="540" 
            textAnchor="middle" 
            fontSize="560" 
            fontWeight="400" 
            fontFamily='"Helvetica World", "Helvetica Neue", Helvetica, Arial, sans-serif'
            letterSpacing="0.08em"
            fill="transparent" 
            stroke="rgba(0, 0, 0, 0.15)" 
            strokeWidth="2.5"
          >
            sierra
          </text>
        </svg>
      </div>
    </footer>
  );
}
