import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

// Icons using SVG to avoid extra dependencies if lucide/mui not handy, but using simple SVG for standard look
const UserIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 text-white"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

const BrainIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-10 w-10 text-white"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
    <path d="M12 8v-1" />
    <path d="M12 16v1" />
    <path d="M16 12h1" />
    <path d="M8 12h-1" />
    <path d="M12 2a10 10 0 0 1 10 10c0 1.5-.3 2.9-.8 4.2" />
    <path d="M12 22a10 10 0 0 0 10-10" />
    <path d="M2 12a10 10 0 0 1 10-10" />
    <path d="M22 12c0 1.5-.3 2.9-.8 4.2" />
  </svg>
);

const DbIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 text-white"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
  </svg>
);

const ResultIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 text-white"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
  </svg>
);

const AgentAnimation = () => {
  const { t } = useTranslation('technology');
  const [step, setStep] = useState(0);

  // Animation Sequence Loop
  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev + 1) % 5);
    }, 2000); // 2 seconds per step
    return () => clearInterval(timer);
  }, []);

  // Step Content Map
  const stepContent = {
    0: {
      label: t('agentDemo.step1'),
      desc: t('agentDemo.userQuery'),
      activeNode: 'user',
    },
    1: {
      label: t('agentDemo.step2'),
      desc: t('agentDemo.agent'),
      activeNode: 'agent',
    },
    2: {
      label: t('agentDemo.toolAction'),
      desc: t('agentDemo.tool'),
      activeNode: 'tool',
    },
    3: {
      label: t('agentDemo.step3'),
      desc: t('agentDemo.agent'),
      activeNode: 'agent',
    },
    4: {
      label: t('agentDemo.resultText'),
      desc: t('agentDemo.result'),
      activeNode: 'result',
    },
  };

  // Safe accessor in case translation fails or is loading
  const currentStep = (stepContent as any)[step];

  // Helper for dot position to avoid nested ternaries
  const getDotPosition = (s: number) => {
    if (s === 0) return { cx: '50%', cy: '20%' };
    if (s === 1) return { cx: '50%', cy: '50%' };
    if (s === 2) return { cx: '30%', cy: '75%' };
    if (s === 3) return { cx: '50%', cy: '50%' };
    return { cx: '70%', cy: '75%' };
  };

  const dotPos = getDotPosition(step);

  return (
    <div className="relative h-96 w-full overflow-hidden rounded-xl border border-indigo-700 bg-indigo-900 shadow-inner">
      <div className="absolute inset-0 z-0 bg-[url('/images/grid.svg')] opacity-10"></div>

      {/* Connection Lines (SVG) with Active State */}
      <svg className="pointer-events-none absolute inset-0 z-10 h-full w-full">
        {/* User to Agent */}
        <motion.line
          x1="50%"
          y1="20%"
          x2="50%"
          y2="50%"
          stroke={step >= 1 ? '#4ade80' : '#6366f1'}
          strokeWidth={step >= 1 ? '3' : '2'}
          strokeDasharray={step >= 1 ? '0' : '5,5'}
          animate={{ stroke: step >= 1 ? '#4ade80' : '#6366f1' }}
        />
        {/* Agent to Tool */}
        <motion.line
          x1="50%"
          y1="50%"
          x2="30%"
          y2="75%"
          stroke={step === 2 || step === 3 ? '#4ade80' : '#6366f1'}
          strokeWidth={step === 2 || step === 3 ? '3' : '2'}
          strokeDasharray={step === 2 || step === 3 ? '0' : '5,5'}
          animate={{ stroke: step === 2 || step === 3 ? '#4ade80' : '#6366f1' }}
        />
        {/* Agent to Result */}
        <motion.line
          x1="50%"
          y1="50%"
          x2="70%"
          y2="75%"
          stroke={step === 4 ? '#4ade80' : '#6366f1'}
          strokeWidth={step === 4 ? '3' : '2'}
          strokeDasharray={step === 4 ? '0' : '5,5'}
          animate={{ stroke: step === 4 ? '#4ade80' : '#6366f1' }}
        />

        {/* Moving Dot Animation */}
        <motion.circle
          r="8"
          fill="#ffffff"
          filter="url(#glow)"
          animate={{
            cx: dotPos.cx,
            cy: dotPos.cy,
          }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        />
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>

      {/* Nodes */}

      {/* User Node (Top) - Moved down slightly */}
      <div className="absolute top-[20%] left-1/2 z-20 -translate-x-1/2 -translate-y-1/2 text-center">
        <motion.div
          animate={{ scale: step === 0 ? 1.2 : 1 }}
          className={`flex h-16 w-16 items-center justify-center rounded-full border-2 ${
            step === 0
              ? 'border-green-400 bg-indigo-600 shadow-[0_0_15px_rgba(74,222,128,0.5)]'
              : 'border-indigo-500 bg-indigo-800'
          }`}
        >
          <UserIcon />
        </motion.div>
        <p className="absolute -right-28 top-4 w-28 text-left text-xs font-semibold text-indigo-300">
          {t('agentDemo.user')}
        </p>
      </div>

      {/* Agent Node (Center) */}
      <div className="absolute top-[50%] left-1/2 z-20 -translate-x-1/2 -translate-y-1/2 text-center">
        <motion.div
          animate={{
            scale: step === 1 || step === 3 ? 1.2 : 1,
            rotate: step === 1 || step === 3 ? [0, 5, -5, 0] : 0,
          }}
          className={`flex h-28 w-28 items-center justify-center rounded-full border-2 ${
            step === 1 || step === 3
              ? 'border-green-400 bg-indigo-600 shadow-[0_0_20px_rgba(74,222,128,0.6)]'
              : 'border-indigo-400 bg-indigo-700'
          }`}
        >
          <BrainIcon />
        </motion.div>
        <p className="mt-2 text-xs font-bold tracking-widest text-indigo-200">
          CORE
        </p>
      </div>

      {/* Tool Node (Bottom Left) - Moved inward */}
      <div className="absolute bottom-[25%] left-[30%] z-20 -translate-x-1/2 text-center">
        <motion.div
          animate={{ scale: step === 2 ? 1.2 : 1 }}
          className={`flex h-20 w-20 items-center justify-center rounded-full border-2 ${
            step === 2
              ? 'border-green-400 bg-indigo-600 shadow-[0_0_15px_rgba(74,222,128,0.5)]'
              : 'border-indigo-500 bg-indigo-800'
          }`}
        >
          <DbIcon />
        </motion.div>
        <p className="absolute -left-28 top-6 w-28 text-right text-xs font-semibold text-indigo-300">
          {t('agentDemo.tool')}
        </p>
      </div>

      {/* Result Node (Bottom Right) - Moved inward */}
      <div className="absolute bottom-[25%] right-[30%] z-20 translate-x-1/2 text-center">
        <motion.div
          animate={{ scale: step === 4 ? 1.2 : 1 }}
          className={`flex h-20 w-20 items-center justify-center rounded-full border-2 ${
            step === 4
              ? 'border-green-400 bg-indigo-600 shadow-[0_0_15px_rgba(74,222,128,0.5)]'
              : 'border-indigo-500 bg-indigo-800'
          }`}
        >
          <ResultIcon />
        </motion.div>
        <p className="absolute -right-28 top-6 w-28 text-left text-xs font-semibold text-indigo-300">
          {t('agentDemo.result')}
        </p>
      </div>

      {/* Dynamic Status Banner */}
      <div className="absolute bottom-4 left-1/2 z-30 w-auto min-w-[300px] -translate-x-1/2 rounded-full border border-indigo-500 bg-indigo-900/95 py-2 px-6 text-center shadow-lg backdrop-blur-sm">
        <p className="text-[10px] uppercase tracking-widest text-indigo-400">
          System Status
        </p>
        <p className="animate-pulse text-base font-bold text-white">
          {currentStep?.label}
        </p>
      </div>
    </div>
  );
};

export default AgentAnimation;
