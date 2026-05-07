import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import { Loader2 } from 'lucide-react';
import MembershipComparisonTable from './MembershipComparisonTable';

interface JoinPageProps {
  onBack: () => void;
}

export default function JoinPage({ onBack }: JoinPageProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedTier, setSelectedTier] = useState<'free' | 'pro'>('pro');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      // Save selected tier to localStorage before redirecting
      localStorage.setItem('sierra_subscription_tier', selectedTier);
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: window.location.origin,
        },
      });
      if (error) throw error;
    } catch (err: any) {
      setError(err.message || 'An error occurred during Google sign in');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Save selected tier to localStorage
      localStorage.setItem('sierra_subscription_tier', selectedTier);
      
      const { data, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
      });

      if (signUpError) throw signUpError;

      if (data.session) {
        await supabase.auth.signOut();
      }

      navigate('/signin', { 
        state: { 
          email: email, 
          signupSuccess: true 
        } 
      });
    } catch (err: any) {
      setError(err.message || 'An error occurred during sign up');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white pt-20 pb-12 px-4 sm:px-8 lg:px-[2cm] flex flex-col items-center">
      <div className="w-full max-w-[1300px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
          {/* Left Side - Membership Comparison */}
          <div className="lg:w-7/12 flex flex-col h-full self-stretch relative py-8 lg:py-12">
            <div className="flex-grow">
              <MembershipComparisonTable 
                selectedTier={selectedTier} 
                onSelectTier={setSelectedTier} 
              />
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="py-8 lg:py-12 lg:w-5/12 flex flex-col justify-center">
            <h3 className="font-sans text-3xl md:text-5xl font-black text-intense-indigo mb-3 leading-[1.1] tracking-tight">Apply for Membership</h3>
            
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label htmlFor="firstName" className="text-xs font-bold text-intense-indigo/60 uppercase tracking-widest">First Name</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 focus:border-intense-indigo focus:ring-2 focus:ring-intense-indigo/20 outline-none transition-all bg-gray-50/50 focus:bg-white text-intense-indigo font-medium" 
                    placeholder="Benjamin" 
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="lastName" className="text-xs font-bold text-intense-indigo/60 uppercase tracking-widest">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 focus:border-intense-indigo focus:ring-2 focus:ring-intense-indigo/20 outline-none transition-all bg-gray-50/50 focus:bg-white text-intense-indigo font-medium" 
                    placeholder="Graham" 
                  />
                </div>
              </div>
              
              <div className="space-y-1">
                <label htmlFor="email" className="text-xs font-bold text-intense-indigo/60 uppercase tracking-widest">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 focus:border-intense-indigo focus:ring-2 focus:ring-intense-indigo/20 outline-none transition-all bg-gray-50/50 focus:bg-white text-intense-indigo font-medium" 
                  placeholder="sierraresearchfund@gmail.com" 
                  required 
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="password" className="text-xs font-bold text-intense-indigo/60 uppercase tracking-widest">Password</label>
                <input 
                  type="password" 
                  id="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 focus:border-intense-indigo focus:ring-2 focus:ring-intense-indigo/20 outline-none transition-all bg-gray-50/50 focus:bg-white text-intense-indigo font-medium" 
                  placeholder="••••••••" 
                  required 
                />
              </div>
              
              {error && (
                <p className={`text-xs font-bold text-center py-3 rounded-xl border ${typeof error === 'string' && error.includes('Check your email') ? 'text-emerald-600 bg-emerald-50 border-emerald-100' : 'text-rose-600 bg-rose-50 border-rose-100'}`}>
                  {error}
                </p>
              )}

              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-intense-indigo text-white font-black text-base py-4 rounded-xl hover:bg-opacity-90 transition-all mt-4 shadow-xl shadow-intense-indigo/20 hover:shadow-intense-indigo/40 hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50 uppercase tracking-widest"
              >
                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Submit Application'}
              </button>

              <button 
                type="button"
                onClick={handleGoogleLogin}
                className="w-full flex items-center justify-center gap-3 px-6 py-4 border border-gray-200 rounded-xl font-black text-intense-indigo hover:bg-gray-50 transition-all cursor-pointer uppercase tracking-widest text-xs shadow-sm mt-4"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285f4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34a853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#fbbc05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#ea4335"
                  />
                </svg>
                Continue with Google
              </button>

              <p className="text-center text-[10px] text-intense-indigo/30 font-bold uppercase tracking-widest mt-6">
                By joining, you agree to our <Link to="/legal" className="underline">Terms of Service</Link> & <Link to="/legal" className="underline">Privacy Policy</Link>
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-2">
                <Link to="/legal" className="text-[9px] font-bold text-intense-indigo/30 hover:text-intense-indigo transition-colors underline underline-offset-4 cursor-pointer uppercase tracking-widest">Billing Terms</Link>
                <Link to="/legal" className="text-[9px] font-bold text-intense-indigo/30 hover:text-intense-indigo transition-colors underline underline-offset-4 cursor-pointer uppercase tracking-widest">Help & Support</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
