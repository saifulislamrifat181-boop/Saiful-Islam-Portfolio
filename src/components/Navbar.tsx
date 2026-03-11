import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Download } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [text, setText] = useState('');
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isInstallable, setIsInstallable] = useState(false);
  const fullText = "Saiful Islam";

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsInstallable(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      setIsInstallable(false);
    }
    setDeferredPrompt(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Typing animation effect
  useEffect(() => {
    let currentIndex = 0;
    let isDeleting = false;
    let timeoutId: NodeJS.Timeout;

    const type = () => {
      setText(fullText.slice(0, currentIndex));
      
      if (!isDeleting) {
        currentIndex++;
        if (currentIndex > fullText.length) {
          isDeleting = true;
          timeoutId = setTimeout(type, 2000); // Pause at end
        } else {
          timeoutId = setTimeout(type, 150); // Typing speed
        }
      } else {
        currentIndex--;
        if (currentIndex === 0) {
          isDeleting = false;
          timeoutId = setTimeout(type, 500); // Pause before typing again
        } else {
          timeoutId = setTimeout(type, 100); // Deleting speed
        }
      }
    };

    timeoutId = setTimeout(type, 150);
    return () => clearTimeout(timeoutId);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const menuVars = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.1,
        delayChildren: 0.1,
      }
    },
    exit: { 
      opacity: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.05,
        staggerDirection: -1,
        when: "afterChildren"
      }
    }
  };

  const linkVars = {
    initial: { opacity: 0, y: 40, rotateX: -20, transformPerspective: 1000 },
    animate: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    },
    exit: { 
      opacity: 0, 
      y: -20,
      transition: { duration: 0.4, ease: "easeIn" }
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/50 backdrop-blur-xl py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-xl md:text-2xl font-display font-bold tracking-widest uppercase relative z-50 flex items-center min-w-[120px] drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">{text}</span>
          <span className="text-sky-400 animate-pulse font-light ml-[2px]">|</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          {isInstallable && (
            <button
              onClick={handleInstallClick}
              className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full text-sm font-medium transition-colors border border-white/10"
            >
              <Download size={14} />
              Install App
            </button>
          )}
        </div>

        {/* Mobile Toggle & Install */}
        <div className="md:hidden flex items-center gap-4">
          {isInstallable && (
            <button
              onClick={handleInstallClick}
              className="flex items-center gap-2 px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded-full text-xs font-medium transition-colors border border-white/10"
            >
              <Download size={12} />
              Install
            </button>
          )}
          <button
            className="relative z-50 w-10 h-10 flex items-center justify-center text-slate-300 hover:text-white transition-colors outline-none focus:outline-none [-webkit-tap-highlight-color:transparent]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-center items-center">
              <span className={`absolute w-full h-[1.5px] bg-current transform transition-all duration-500 ease-in-out ${isOpen ? 'rotate-45' : '-translate-y-2'}`} />
              <span className={`absolute w-full h-[1.5px] bg-current transform transition-all duration-500 ease-in-out ${isOpen ? 'opacity-0 scale-x-0' : 'opacity-100'}`} />
              <span className={`absolute w-full h-[1.5px] bg-current transform transition-all duration-500 ease-in-out ${isOpen ? '-rotate-45' : 'translate-y-2'}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed inset-0 h-[100dvh] z-40 bg-[#050505] md:hidden flex flex-col justify-center px-8"
          >
            {/* Premium Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-sky-500/5 via-transparent to-indigo-500/5 pointer-events-none" />
            {/* Noise Overlay */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none" />
            
            <div className="relative z-10 flex flex-col gap-8">
              {navLinks.map((link) => (
                <div key={link.name} className="overflow-hidden py-1">
                  <motion.a
                    variants={linkVars}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-5xl font-display font-light text-slate-400 hover:text-white transition-colors flex items-center justify-between group block"
                  >
                    <span className="group-hover:translate-x-4 transition-transform duration-500">
                      {link.name}
                    </span>
                    <span className="text-sky-400 opacity-0 -translate-x-8 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 font-light">
                      →
                    </span>
                  </motion.a>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
