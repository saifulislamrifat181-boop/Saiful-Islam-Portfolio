import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const steps = [60, 100];
    let stepIndex = 0;
    
    const nextStep = () => {
      if (stepIndex < steps.length) {
        setProgress(steps[stepIndex]);
        stepIndex++;
        
        if (stepIndex === steps.length) {
          // Stay at 100% for a moment before exiting
          setTimeout(() => setLoading(false), 300);
        } else {
          // Pause at each step
          setTimeout(nextStep, 300); 
        }
      }
    };
    
    // Initial delay before first step
    const initialTimeout = setTimeout(nextStep, 200);

    return () => clearTimeout(initialTimeout);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div 
          key="loading-screen"
          className="fixed inset-0 z-[10000] flex flex-col overflow-hidden pointer-events-none"
        >
          {/* Split Reveal Background Panels */}
          <motion.div
            initial={{ y: 0 }}
            exit={{ 
              y: '-100%',
              transition: { duration: 1.5, ease: [0.19, 1, 0.22, 1] }
            }}
            className="absolute top-0 left-0 w-full h-1/2 bg-[#030303] z-0"
          />
          <motion.div
            initial={{ y: 0 }}
            exit={{ 
              y: '100%',
              transition: { duration: 1.5, ease: [0.19, 1, 0.22, 1] }
            }}
            className="absolute bottom-0 left-0 w-full h-1/2 bg-[#030303] z-0"
          />

            {/* Content Container */}
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ 
              opacity: 0, 
              scale: 0.95, 
              filter: 'blur(10px)',
              transition: { duration: 0.8, ease: "easeInOut" } 
            }}
            className="relative z-10 flex-1 flex flex-col items-center justify-center pointer-events-auto"
          >
            {/* Premium Background Elements - More organic and atmospheric */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.04] mix-blend-overlay" />
              
              {/* Deeper Ambient Glows */}
              <motion.div 
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.03, 0.08, 0.03],
                  rotate: [0, 45, 0]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-sky-500/10 blur-[180px] rounded-full"
              />
              <motion.div 
                animate={{ 
                  scale: [1.2, 1, 1.2],
                  opacity: [0.02, 0.06, 0.02],
                  rotate: [0, -45, 0]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-indigo-500/5 blur-[200px] rounded-full"
              />
            </div>

            <div className="relative z-10 flex flex-col items-center">
              {/* Circular Progress Indicator - Organic & Premium */}
              <div className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center mb-12">
                {/* Outer Glow Ring */}
                <svg className="absolute inset-0 w-full h-full -rotate-90">
                  <circle
                    cx="50%"
                    cy="50%"
                    r="48%"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    className="text-white/5"
                  />
                  <motion.circle
                    cx="50%"
                    cy="50%"
                    r="48%"
                    fill="none"
                    stroke="url(#loadingGradient)"
                    strokeWidth="2"
                    strokeDasharray="100 100"
                    initial={{ strokeDashoffset: 100 }}
                    animate={{ strokeDashoffset: 100 - progress }}
                    strokeLinecap="round"
                    className="drop-shadow-[0_0_8px_rgba(56,189,248,0.4)]"
                  />
                  <defs>
                    <linearGradient id="loadingGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#0ea5e9" />
                      <stop offset="100%" stopColor="#6366f1" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Inner Pulsing Core */}
                <motion.div 
                  animate={{ 
                    scale: [0.95, 1.05, 0.95],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-8 rounded-full bg-gradient-to-br from-sky-500/10 to-indigo-500/10 blur-xl"
                />

                {/* Percentage Text */}
                <div className="relative flex flex-col items-center">
                  <motion.span 
                    className="text-2xl md:text-3xl font-mono text-white font-light tracking-tighter tabular-nums"
                  >
                    {Math.round(progress)}
                  </motion.span>
                  <span className="text-[8px] tracking-[0.4em] text-sky-500/60 uppercase font-bold mt-1">
                    Loading
                  </span>
                </div>
              </div>

              {/* Name Section - Single Line Responsive */}
              <div className="overflow-hidden w-full flex justify-center px-6">
                <motion.h1
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  className="text-2xl sm:text-4xl md:text-7xl font-display font-bold tracking-[0.3em] sm:tracking-[0.4em] uppercase text-white text-center whitespace-nowrap"
                >
                  Saiful <span className="text-sky-500">Islam</span>
                </motion.h1>
              </div>
            </div>

            {/* Ambient Scanning Line - More subtle */}
            <motion.div
              animate={{ y: ['-20vh', '120vh'] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-sky-500/10 to-transparent z-20 blur-sm"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
