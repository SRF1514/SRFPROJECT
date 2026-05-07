import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Lock, Zap, ArrowRight } from 'lucide-react';
import { useAuth } from './AuthContext';
import MembershipModal from './MembershipModal';

interface MembershipGateProps {
  children: string; // HTML string
}

export default function MembershipGate({ children }: MembershipGateProps) {
  return <div 
    className="prose prose-lg max-w-none text-intense-indigo/80 space-y-6 text-justify leading-relaxed"
    dangerouslySetInnerHTML={{ __html: children }} 
  />;
}
