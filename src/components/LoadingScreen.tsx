import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
          }}
          className="fixed inset-0 z-[10000] bg-[#030303] flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Cinematic Background Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-sky-500/10 blur-[150px] rounded-full"
            />
          </div>

          <div className="relative z-10 flex flex-col items-center">
            {/* Logo/Name Animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="mb-12"
            >
              <h1 className="text-4xl md:text-6xl font-display font-bold tracking-[0.2em] uppercase text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                Saiful <span className="text-sky-400">Islam</span>
              </h1>
            </motion.div>

            {/* Progress Bar Container */}
            <div className="w-64 md:w-80 h-[2px] bg-white/10 rounded-full overflow-hidden relative">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                className="absolute inset-0 bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-500"
              />
            </div>

            {/* Percentage Counter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-4 font-mono text-xs tracking-[0.3em] text-slate-500 uppercase"
            >
              Loading {progress}%
            </motion.div>
          </div>

          {/* Decorative Lines */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"
          />
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
