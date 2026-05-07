import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle, Check, Lock } from 'lucide-react';
import { supabaseData } from '../services/supabaseData';
import { useAuth } from './AuthContext';

interface ModuleCompletionProps {
  moduleId: string;
  moduleTitle: string;
}

export default function ModuleCompletion({ moduleId, moduleTitle }: ModuleCompletionProps) {
  const { user } = useAuth();
  const [isCompleted, setIsCompleted] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkCompletion = async () => {
      if (!user) {
        setLoading(false);
        return;
      }
      try {
        setLoading(true);
        const completedModules = await supabaseData.getCompletedModules();
        const isAlreadyCompleted = completedModules.some(m => m.module_id === moduleId);
        setIsCompleted(isAlreadyCompleted);
      } catch (error) {
        console.error('Error checking module completion:', error);
      } finally {
        setLoading(false);
      }
    };
    checkCompletion();
  }, [moduleId, user]);

  const handleComplete = async () => {
    if (!user) return;
    try {
      setLoading(true);
      await supabaseData.markModuleCompleted(moduleId);
      setIsCompleted(true);
    } catch (error) {
      console.error('Error marking module as completed:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading && !isCompleted) return (
    <div className="mt-12 mb-8 flex justify-center">
      <div className="animate-pulse bg-gray-100 h-14 w-64 rounded-2xl"></div>
    </div>
  );

  if (!user) {
    return (
      <div className="mt-12 mb-8 flex justify-center">
        <div className="flex items-center gap-3 bg-gray-50 border-2 border-gray-200 text-gray-500 px-8 py-4 rounded-2xl font-medium">
          <Lock className="w-4 h-4" />
          Sign in to track your progress
        </div>
      </div>
    );
  }

  return (
    <div className="mt-12 mb-8 flex justify-center">
      <AnimatePresence mode="wait">
        {!isCompleted ? (
          <motion.button
            key="incomplete"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            onClick={handleComplete}
            className="group flex items-center gap-3 bg-white border-2 border-intense-indigo text-intense-indigo px-8 py-4 rounded-2xl font-bold hover:bg-intense-indigo hover:text-white transition-all shadow-sm hover:shadow-md cursor-pointer"
          >
            <div className="w-6 h-6 rounded-full border-2 border-current flex items-center justify-center group-hover:bg-white group-hover:text-intense-indigo transition-colors">
              <Check className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            Mark "{moduleTitle}" as Completed
          </motion.button>
        ) : (
          <motion.div
            key="completed"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-3 bg-green-50 border-2 border-green-500 text-green-700 px-8 py-4 rounded-2xl font-bold shadow-sm"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.1 }}
            >
              <CheckCircle className="w-6 h-6" />
            </motion.div>
            "{moduleTitle}" Completed!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
