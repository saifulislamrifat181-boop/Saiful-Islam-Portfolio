import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center"
      >
        <motion.div
          variants={itemVariants}
          className="mb-8 relative group"
        >
          {/* Subtle elegant glow */}
          <div className="absolute inset-0 bg-sky-500/20 blur-[50px] rounded-full pointer-events-none" />
          
          {/* Floating profile picture with premium thin rings */}
          <motion.div 
            animate={{ y: [-8, 8, -8] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative p-3 rounded-full will-change-transform"
          >
            {/* Animated Background Glows */}
            <div className="absolute inset-0 z-0">
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-sky-500/20 via-indigo-500/20 to-purple-500/20 blur-2xl rounded-full"
              />
              <motion.div
                animate={{ 
                  scale: [1.2, 1, 1.2],
                  rotate: [360, 180, 0],
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-10%] bg-gradient-to-l from-sky-400/10 via-transparent to-indigo-400/10 blur-3xl rounded-full"
              />
            </div>

            {/* Outer rotating thin ring */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-white/10 border-t-sky-400/60 border-r-indigo-400/60 z-10"
            />
            
            {/* Inner glass container */}
            <div className="relative p-2 rounded-full bg-white/[0.02] backdrop-blur-md border border-white/10 shadow-[0_0_30px_rgba(56,189,248,0.15)] z-20">
              <img
                src="https://i.ibb.co.com/B5Z7JPdr/1758978825142-2.jpg"
                alt="Saiful Islam"
                className="relative w-40 h-40 md:w-48 md:h-48 rounded-full object-cover z-10"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6"
        >
          <span className="text-sm font-medium text-slate-300">Available for new opportunities</span>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mb-4"
        >
          <h1 className="text-3xl md:text-6xl font-display font-bold tracking-tighter text-gradient">
            Creative Developer
          </h1>
        </motion.div>

        <motion.h2
          variants={itemVariants}
          className="text-xl md:text-3xl font-medium text-slate-300 mb-8"
        >
          Developer & Creator of <br className="hidden md:block" />
          <span className="text-gradient-accent">Islamic Productivity Apps</span>
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          "Building meaningful digital tools that combine technology with knowledge."
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black rounded-full font-medium transition-all hover:scale-105 active:scale-95 shadow-lg shadow-black/10"
          >
            View My Projects
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-medium backdrop-blur-md transition-all hover:bg-white/10 hover:scale-105 active:scale-95"
          >
            <Mail size={18} />
            Contact Me
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
