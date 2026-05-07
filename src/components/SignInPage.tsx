import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import { Loader2 } from 'lucide-react';

interface SignInPageProps {
  onBack: () => void;
  onJoinClick: () => void;
}

export default function SignInPage({ onBack, onJoinClick }: SignInPageProps) {
  const navigate = useNavigate();
  const location = useLocation();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGoogleLogin = async () => {
    try {
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

  useEffect(() => {
    if (location.state?.email) {
      setEmail(location.state.email);
    }
    if (location.state?.signupSuccess) {
      setSuccessMessage('Your account has been created. Please check your email and verify your address before logging in.');
    }
    
    // Clear state after reading it to avoid showing message on refresh/back
    window.history.replaceState({}, document.title);
  }, [location]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');
    setLoading(true);

    try {
      if (isChangingPassword) {
        // Change Password behavior as requested (save new password with account email)
        // Using resetPasswordForEmail is standard, but the user wants to directly set it.
        // For security, standard is to send a reset link. 
        // If the user wants to "set" it directly without being logged in, 
        // we normally need a token. 
        // I will implement a simpler "Forgot Password" flow that starts with an email.
        const { error: resetError } = await supabase.auth.resetPasswordForEmail(email, {
          redirectTo: window.location.origin + '/dashboard',
        });
        if (resetError) throw resetError;
        setSuccessMessage('Password reset link sent to your email.');
      } else {
        const { error: signInError } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (signInError) throw signInError;

        navigate('/dashboard');
      }
    } catch (err: any) {
      setError(err.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white pt-24 pb-12 px-4 sm:px-8 lg:px-[2cm] flex flex-col items-center justify-center">
      <div className="w-full max-w-md mx-auto bg-white p-8 rounded-2xl shadow-xl shadow-intense-indigo/5 border border-gray-100">
        <div className="flex flex-col items-center mb-5">
          <img 
            src="/logo.png" 
            alt="Sierra Research" 
            className="h-16 md:h-20 object-contain cursor-pointer" 
            onClick={onBack}
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextElementSibling?.classList.remove('hidden');
            }} 
          />
          <div className="hidden cursor-pointer" onClick={onBack}>
            <h2 className="font-sans text-3xl md:text-4xl font-bold leading-tight text-intense-indigo">SIERRA Research</h2>
          </div>
        </div>

        {isChangingPassword && (
          <h3 className="text-xl font-sans font-bold text-intense-indigo mb-6 text-center uppercase tracking-tight">
            Change Password
          </h3>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-1.5">
            <label htmlFor="email" className="text-xs font-bold text-intense-indigo/60">Email Address</label>
            <input 
              type="email" 
              id="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2.5 text-sm rounded-xl border border-gray-200 focus:border-intense-indigo focus:ring-2 focus:ring-intense-indigo/20 outline-none transition-all bg-gray-50/50 focus:bg-white text-intense-indigo" 
              placeholder="sierraresearchfund@gmail.com" 
              required 
            />
          </div>
          
          {!isChangingPassword ? (
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="text-xs font-bold text-intense-indigo/60">Password</label>
                <button 
                  type="button"
                  onClick={() => setIsChangingPassword(true)}
                  className="text-xs text-intense-indigo hover:underline"
                >
                  Forgot password?
                </button>
              </div>
              <input 
                type="password" 
                id="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2.5 text-sm rounded-xl border border-gray-200 focus:border-intense-indigo focus:ring-2 focus:ring-intense-indigo/20 outline-none transition-all bg-gray-50/50 focus:bg-white text-intense-indigo" 
                placeholder="••••••••" 
                required 
              />
            </div>
          ) : (
            <div className="space-y-4">
              <p className="text-[10px] text-intense-indigo/60 px-1 italic">
                Enter your email address and we'll send you a link to reset your password.
              </p>
              <button 
                type="button"
                onClick={() => setIsChangingPassword(false)}
                className="text-xs text-intense-indigo/40 hover:text-intense-indigo font-bold transition-colors"
              >
                ← Back to sign in
              </button>
            </div>
          )}

          {successMessage && (
            <p className="text-emerald-600 text-xs font-bold text-center bg-emerald-50 py-2 rounded-lg border border-emerald-100">
              {successMessage}
            </p>
          )}

          {error && (
            <p className="text-rose-600 text-xs font-bold text-center bg-rose-50 py-2 rounded-lg border border-rose-100">
              {error}
            </p>
          )}

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-intense-indigo text-white font-bold text-base py-3 rounded-xl hover:bg-opacity-90 transition-all shadow-lg shadow-intense-indigo/20 hover:shadow-intense-indigo/40 hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : (isChangingPassword ? 'Send Reset Link' : 'Sign in')}
          </button>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-intense-indigo/40 font-bold">Or continue with</span>
            </div>
          </div>

          <button 
            type="button"
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-200 rounded-xl font-bold text-intense-indigo hover:bg-gray-50 transition-all cursor-pointer"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            Continue with Google
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-intense-indigo/40">
          Don't have an account?{' '}
          <button onClick={onJoinClick} className="text-intense-indigo font-bold hover:underline cursor-pointer">
            Join now
          </button>
        </div>
      </div>
    </div>
  );
}
