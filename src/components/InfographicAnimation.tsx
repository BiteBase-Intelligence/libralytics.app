import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

// Custom Polished SVG Symbols
const Symbols = {
  Grab: () => (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 sm:h-8 sm:w-8">
      <path
        d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM15.5 13.5C15.5 14.8807 14.3807 16 13 16H10C8.89543 16 8 15.1046 8 14V11H13V13H10V14H13C13.2761 14 13.5 13.7761 13.5 13.5V12H15.5V13.5Z"
        fill="white"
      />
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="#00B14F"
        strokeWidth="2"
        strokeOpacity="0.5"
      />
    </svg>
  ),
  Foodpanda: () => (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 sm:h-8 sm:w-8">
      <path
        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM15.5 11C15.5 13.4853 13.4853 15.5 11 15.5C8.51472 15.5 6.5 13.4853 6.5 11C6.5 8.51472 8.51472 6.5 11 6.5C13.4853 6.5 15.5 8.51472 15.5 11ZM16.5 16.5C16.2239 16.5 16 16.2761 16 16V15C16 14.7239 16.2239 14.5 16.5 14.5C17.7701 14.5 18.8 15.5299 18.8 16.8C18.8 18.0701 17.7701 19.1 16.5 19.1C15.2299 19.1 14.2 18.0701 14.2 16.8C14.2 16.5239 14.4239 16.3 14.7 16.3H16.5"
        fill="white"
      />
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="#D70F64"
        strokeWidth="2"
        strokeOpacity="0.5"
      />
    </svg>
  ),
  Lineman: () => (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 sm:h-8 sm:w-8">
      <path
        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11 17L6 12L7.41 10.59L11 14.17L16.59 8.58L18 10L11 17Z"
        fill="white"
      />
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="#00C300"
        strokeWidth="2"
        strokeOpacity="0.5"
      />
    </svg>
  ),
  Shopee: () => (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 sm:h-8 sm:w-8">
      <path
        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16 17H8V16H16V17ZM13 14V13H16V12H13V11H16V10H13V9H16V8L11 8V15H16V14H13Z"
        fill="white"
      />
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="#EE4D2D"
        strokeWidth="2"
        strokeOpacity="0.5"
      />
    </svg>
  ),
};

const ProcessLabel = ({ text, active }: { text: string; active: boolean }) => (
  <motion.div
    animate={{ opacity: active ? 1 : 0.4, scale: active ? 1.05 : 1 }}
    className={`rounded-full border px-3 py-1 text-[8px] font-bold uppercase tracking-widest sm:text-[10px] ${
      active
        ? 'border-emerald-400 bg-emerald-400/20 text-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.3)]'
        : 'border-white/10 bg-white/5 text-white/30'
    }`}
  >
    {text}
  </motion.div>
);

const InfographicAnimation = () => {
  const [step, setStep] = useState(0);
  const [feedItems, setFeedItems] = useState([
    { id: 1, text: 'Grab: +120 prices updated' },
    { id: 2, text: 'Lineman: 45 new stores' },
  ]);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev + 1) % 3);

      const platforms = ['Grab', 'Lineman', 'Shopee', 'Foodpanda'];
      const actions = ['price update', 'new store', 'promo change'];
      const newMsg = `${platforms[Math.floor(Math.random() * 4)]}: ${
        actions[Math.floor(Math.random() * 3)]
      }`;
      setFeedItems((prev) => [
        { id: Date.now(), text: newMsg },
        ...prev.slice(0, 2),
      ]);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[380px] w-full overflow-hidden rounded-3xl border border-indigo-500/20 bg-slate-900 shadow-2xl sm:h-[500px]">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-indigo-900/40 via-slate-900 to-emerald-900/20"></div>

      {/* Connection Lines (SVG) */}
      <svg className="pointer-events-none absolute inset-0 z-10 h-full w-full">
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#10b981" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0.2" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Input Lines - Adjusted Control Points */}
        {[
          { x: '15%', y: '25%' },
          { x: '15%', y: '45%' },
          { x: '15%', y: '65%' },
          { x: '15%', y: '85%' },
        ].map((line, i) => (
          <motion.path
            key={i}
            d={`M ${line.x} ${line.y} Q 40% ${line.y} 50% 50%`}
            stroke="url(#lineGrad)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: step === 0 ? [0, 1] : 1,
              opacity: step === 0 ? [0, 1] : 0.25,
            }}
            transition={{ duration: 1.5, delay: i * 0.15 }}
          />
        ))}

        {/* Output Lines - Adjusted Control Points */}
        {[
          { x: '85%', y: '30%' },
          { x: '85%', y: '50%' },
          { x: '85%', y: '70%' },
        ].map((line, i) => (
          <motion.path
            key={i + 10}
            d={`M 50% 50% Q 60% ${line.y} ${line.x} ${line.y}`}
            stroke="url(#lineGrad)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: step === 2 ? [0, 1] : 1,
              opacity: step === 2 ? [0, 1] : 0.25,
            }}
            transition={{ duration: 1.5, delay: i * 0.2 }}
          />
        ))}
      </svg>

      {/* 1. SOURCE NODES (Left) */}
      <div className="absolute top-[10%] left-[5%] z-20 flex flex-col gap-4 sm:top-[12%] sm:left-[8%]">
        <p className="text-[7px] font-black uppercase tracking-[0.4em] text-indigo-400 opacity-60">
          Source Streams
        </p>
        <div className="flex flex-col gap-6 sm:gap-8">
          {(['Grab', 'Lineman', 'Shopee', 'Foodpanda'] as const).map((p, _) => (
            <motion.div
              key={p}
              animate={{
                x: step === 0 ? [0, 8, 0] : 0,
                opacity: step === 0 ? 1 : 0.5,
                scale: step === 0 ? 1.1 : 1,
              }}
              className="group flex items-center gap-3"
            >
              <div className="relative">
                <div className="absolute inset-0 hidden animate-ping rounded-full bg-white/10 opacity-20 group-hover:block" />
                {React.createElement(Symbols[p])}
              </div>
              <div className="hidden flex-col sm:flex">
                <span className="text-[11px] font-black text-white/90">
                  {p} Food
                </span>
                <span className="text-[8px] font-medium uppercase text-emerald-400/60">
                  Market Active
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 2. CENTRAL CORE (Processing) */}
      <div className="absolute top-1/2 left-1/2 z-30 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
        <div className="relative">
          {/* External rotating ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            className="absolute -inset-6 rounded-full border border-dashed border-indigo-400/20"
          />

          <motion.div
            animate={{
              boxShadow:
                step === 1
                  ? '0 0 60px rgba(16,185,129,0.5)'
                  : '0 0 30px rgba(79,70,229,0.2)',
            }}
            className={`relative flex h-32 w-32 items-center justify-center rounded-[2.5rem] border-2 transition-all duration-700 sm:h-44 sm:w-44 ${
              step === 1
                ? 'border-emerald-400 bg-emerald-900/40'
                : 'border-indigo-500/40 bg-indigo-900/30 shadow-inner'
            }`}
          >
            <AnimatePresence mode="wait">
              {step === 1 ? (
                <motion.div
                  key="active"
                  initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 1.5 }}
                  className="flex flex-col items-center gap-2"
                >
                  <svg
                    className="h-12 w-12 text-emerald-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                  <span className="text-[10px] font-black tracking-tighter text-emerald-400">
                    SECURE AI
                  </span>
                </motion.div>
              ) : (
                <motion.div
                  key="idle"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="h-10 w-10 sm:h-14 sm:w-14"
                >
                  <svg
                    className="h-full w-full text-indigo-400/80"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path
                      d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07l14.14-14.14"
                      strokeOpacity="0.3"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="4"
                      fill="currentColor"
                      fillOpacity="0.1"
                    />
                  </svg>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Labels below core */}
        <div className="mt-8 flex gap-2">
          <ProcessLabel text="Scrape" active={step === 0} />
          <ProcessLabel text="Normalize" active={step === 1} />
          <ProcessLabel text="Attribute" active={step === 1} />
          <ProcessLabel text="Intel" active={step === 2} />
        </div>
        <p className="mt-3 text-[9px] font-black uppercase tracking-[0.5em] text-white/20">
          Core Data Engine
        </p>
      </div>

      {/* 3. OUTPUT NODES (Right) */}
      <div className="absolute top-[18%] right-[5%] z-20 flex flex-col gap-6 sm:top-[22%] sm:right-[8%] sm:gap-10">
        <p className="text-right text-[7px] font-black uppercase tracking-[0.4em] text-emerald-400 opacity-60">
          Insight Deliverables
        </p>
        {[
          {
            label: 'Dynamic Pricing',
            desc: 'Competitor Parity',
            color: 'emerald',
          },
          { label: 'Demand Mapping', desc: 'Zone Density', color: 'indigo' },
          {
            label: 'Growth Strategies',
            desc: 'ROI Projections',
            color: 'emerald',
          },
        ].map((item, _) => (
          <motion.div
            key={item.label}
            animate={{
              x: step === 2 ? [0, -10, 0] : 0,
              opacity: step === 2 ? 1 : 0.4,
              scale: step === 2 ? 1.05 : 1,
            }}
            className="group flex items-center gap-4 text-right"
          >
            <div className="flex flex-col">
              <span className="text-[11px] font-black text-white/90 sm:text-sm">
                {item.label}
              </span>
              <span className="text-[8px] font-bold uppercase tracking-tighter text-white/30">
                {item.desc}
              </span>
            </div>
            <div
              className={`flex h-12 w-12 items-center justify-center rounded-2xl border bg-slate-800 shadow-xl transition-all ${
                step === 2
                  ? 'border-emerald-400 shadow-emerald-500/20'
                  : 'border-white/5'
              }`}
            >
              <svg
                className={`h-6 w-6 ${
                  step === 2 ? 'text-emerald-400' : 'text-white/20'
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 4. ACTIVITY FEED */}
      <div className="absolute bottom-4 left-4 z-40 hidden flex-col gap-3 sm:flex">
        <div className="flex items-center gap-3">
          <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">
            Real-time Network
          </span>
        </div>
        <div className="flex w-56 flex-col gap-2">
          <AnimatePresence mode="popLayout">
            {feedItems.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, x: 20 }}
                className="rounded-lg border border-white/5 bg-slate-800/60 py-2 px-4 text-[10px] font-bold text-emerald-400 shadow-sm backdrop-blur-md"
              >
                <span className="mr-2 font-mono opacity-40">{'>'}</span>
                {item.text}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Floating ROI Bubble - Moved to top for clarity */}
      <AnimatePresence>
        {step === 2 && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="absolute top-[8%] left-1/2 z-50 -translate-x-1/2 rounded-full border border-emerald-400/50 bg-emerald-500 px-6 py-2 text-[12px] font-black italic text-slate-900 shadow-[0_0_30px_rgba(16,185,129,0.4)]"
          >
            TRANSFORMATION COMPLETE: +32% EFFICIENCY
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default InfographicAnimation;
