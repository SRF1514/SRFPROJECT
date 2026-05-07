import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import { User } from '@supabase/supabase-js';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  logout: () => Promise<void>;
  subscriptionTier: 'free' | 'pro';
  upgradeToPro: () => void;
  toggleSubscriptionTier: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [subscriptionTier, setSubscriptionTier] = useState<'free' | 'pro'>(() => {
    const saved = localStorage.getItem('sierra_subscription_tier');
    return (saved as 'free' | 'pro') || 'free';
  });

  useEffect(() => {
    // Check active sessions and sets the user
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    // Listen for changes on auth state (logged in, signed out, etc.)
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const logout = async () => {
    await supabase.auth.signOut();
  };

  const upgradeToPro = () => {
    setSubscriptionTier('pro');
    localStorage.setItem('sierra_subscription_tier', 'pro');
  };

  const toggleSubscriptionTier = () => {
    const newTier = subscriptionTier === 'free' ? 'pro' : 'free';
    setSubscriptionTier(newTier);
    localStorage.setItem('sierra_subscription_tier', newTier);
  };

  return (
    <AuthContext.Provider value={{ user, loading, logout, subscriptionTier, upgradeToPro, toggleSubscriptionTier }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
