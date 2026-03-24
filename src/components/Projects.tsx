import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring } from 'motion/react';
import { Sparkles, Code2, BookOpen, Globe, Layout, Download, ExternalLink, X, ShieldAlert, Mic, Monitor, ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
  {
    title: 'Saiful Islam Blogs',
    description: 'একটি আধুনিক ব্লগিং প্ল্যাটফর্ম যেখানে বিভিন্ন চিন্তা, ধারণা এবং প্রতিফলন শেয়ার করা হয়।',
    link: 'https://saiful-islam-scribe-ingd.vercel.app/',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800',
    tags: ['Next.js', 'Tailwind CSS', 'MDX'],
    icon: <Layout className="text-sky-400" size={20} />,
    isBengali: false,
  },
  {
    title: 'Rizq Planner',
    description: 'একটি প্রোডাক্টিভিটি প্ল্যানার যা লক্ষ্য, অভ্যাস এবং দৈনন্দিন রিজিকের মানসিকতা বজায় রাখতে সাহায্য করে।',
    link: 'https://rizq-planner-app.vercel.app/',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=800',
    tags: ['React', 'TypeScript', 'Framer Motion'],
    icon: <Sparkles className="text-indigo-400" size={20} />,
    isBengali: false,
  },
  {
    title: 'Quran AI',
    description: 'একটি এআই-চালিত কুরআন এক্সপ্লোরেশন টুল যা ব্যবহারকারীদের গভীর অর্থ বুঝতে সাহায্য করে।',
    link: 'https://quranic-insights-alpha.vercel.app/',
    image: 'https://images.unsplash.com/photo-1585036156171-384164a8c675?auto=format&fit=crop&q=80&w=800',
    tags: ['AI Integration', 'Next.js', 'OpenAI'],
    icon: <Code2 className="text-emerald-400" size={20} />,
    isBengali: false,
  },
  {
    title: 'Dua & Amal',
    description: 'আধ্যাত্মিক উন্নতির জন্য প্রতিদিনের দোয়া এবং ইসলামিক আমলের একটি সংগ্রহ।',
    link: 'https://serene-dua-one.vercel.app/',
    image: 'https://images.unsplash.com/photo-1564683214965-3619addd900d?auto=format&fit=crop&q=80&w=800',
    tags: ['PWA', 'React', 'Tailwind'],
    icon: <BookOpen className="text-rose-400" size={20} />,
    isBengali: false,
  },
  {
    title: 'শব্দে শব্দে অর্থ',
    description: 'কুরআনের শব্দভাণ্ডার শেখার জন্য একটি শব্দে শব্দে অর্থ শেখার প্ল্যাটফর্ম।',
    link: 'https://divine-lexicon.vercel.app/',
    image: 'https://images.unsplash.com/photo-1519791883288-dc8bd696e667?auto=format&fit=crop&q=80&w=800',
    tags: ['Education', 'Next.js', 'Database'],
    icon: <Globe className="text-amber-400" size={20} />,
    isBengali: true,
  },
  {
    title: 'শব্দলেখা',
    description: 'বানান এবং লেখা উন্নত করার জন্য একটি ভাষা শেখার টুল।',
    link: 'https://shuddholekha-language-lab-vu1s.vercel.app/',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=800',
    tags: ['Language', 'React', 'Gamification'],
    icon: <Layout className="text-purple-400" size={20} />,
    isBengali: true,
  },
  {
    title: 'Speech Test Ai',
    description: 'একটি এআই-চালিত স্পিচ-টু-টেক্সট টুল যা ভয়েসকে নিখুঁতভাবে টেক্সটে রূপান্তর করতে সাহায্য করে।',
    link: 'https://sound-to-scribe-ai-4b2a4faa.vercel.app/',
    image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80&w=800',
    tags: ['AI', 'Speech', 'React'],
    icon: <Mic className="text-blue-400" size={20} />,
    isBengali: false,
  },
  {
    title: 'SecureGuard',
    description: 'ওয়েব নিরাপত্তার জন্য একটি ব্যাপক সিকিউরিটি স্ক্যানিং এবং সচেতনতামূলক প্ল্যাটফর্ম।',
    link: 'https://vigilant-vault-check-e979114a.vercel.app/',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
    tags: ['Security', 'React', 'Scanner'],
    icon: <ShieldAlert className="text-red-400" size={20} />,
    isBengali: false,
  },
  {
    title: 'RetroConvert Studio',
    description: 'একটি শক্তিশালী মিডিয়া কনভার্টার টুল যা ইমেজ এবং ভিডিওকে বিভিন্ন ফরম্যাটে রূপান্তর করতে সাহায্য করে।',
    link: 'https://retroconvert-studio-mdxg.vercel.app/',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800',
    tags: ['Converter', 'React', 'Media'],
    icon: <Monitor className="text-orange-400" size={20} />,
    isBengali: false,
  },
];

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [installModal, setInstallModal] = useState<{isOpen: boolean, project: typeof projects[0] | null}>({
    isOpen: false,
    project: null
  });

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  // Auto-rotation
  useEffect(() => {
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="projects" className="py-32 relative overflow-hidden min-h-[900px] flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tighter mb-6">
            Featured <span className="text-gradient-accent">Projects</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            A selection of my recent work, focusing on Islamic tools, productivity, and education.
          </p>
        </motion.div>
      </div>

      {/* Circular Orbit Container */}
      <div className="relative h-[500px] w-full flex items-center justify-center perspective-[2000px]">
        <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
          <AnimatePresence mode="popLayout">
            {projects.map((project, index) => {
              // Calculate relative position in the circle
              let relativeIndex = (index - activeIndex + projects.length) % projects.length;
              
              // Normalize relative index to be centered around 0
              if (relativeIndex > projects.length / 2) {
                relativeIndex -= projects.length;
              }

              // Calculate 3D transformation values
              const isCenter = relativeIndex === 0;
              const xOffset = relativeIndex * 320; // Horizontal spread
              const zOffset = Math.abs(relativeIndex) * -250; // Depth
              const rotationY = relativeIndex * -25; // Curved rotation
              const scale = 1 - Math.abs(relativeIndex) * 0.15;
              const opacity = 1 - Math.abs(relativeIndex) * 0.4;
              const blur = Math.abs(relativeIndex) * 4;

              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.5, z: -500 }}
                  animate={{ 
                    opacity: opacity > 0 ? opacity : 0,
                    x: xOffset,
                    z: zOffset,
                    rotateY: rotationY,
                    scale: scale,
                    filter: `blur(${blur}px)`,
                    zIndex: 100 - Math.abs(relativeIndex) * 10,
                  }}
                  exit={{ opacity: 0, scale: 0.5, z: -500 }}
                  transition={{ 
                    duration: 1.2, 
                    ease: [0.16, 1, 0.3, 1] 
                  }}
                  className={`absolute w-[300px] md:w-[380px] h-auto pointer-events-auto ${isCenter ? 'cursor-default' : 'cursor-pointer'}`}
                  onClick={() => !isCenter && setActiveIndex(index)}
                >
                  <div className={`group relative flex flex-col rounded-3xl bg-white/[0.02] border border-white/[0.05] ${isCenter ? 'border-sky-500/40 bg-white/[0.05] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)]' : 'opacity-60'} transition-all duration-500 overflow-hidden`}>
                    {/* Image Section */}
                    <div className="relative h-40 md:h-48 w-full overflow-hidden border-b border-white/[0.05]">
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 z-10" />
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-[0.22,1,0.36,1]"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-4 left-4 z-20 w-10 h-10 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center shadow-lg">
                        {project.icon}
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="relative z-10 flex flex-col p-6">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.tags.slice(0, 2).map((tag) => (
                          <span key={tag} className="px-2 py-0.5 text-[9px] font-bold tracking-widest uppercase text-sky-400/80 bg-sky-500/5 border border-sky-500/10 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <h3 className={`text-xl font-semibold text-white mb-2 ${project.isBengali ? 'font-bengali' : 'font-display tracking-tight'}`}>
                        {project.title}
                      </h3>
                      <p className="text-slate-400 leading-relaxed text-xs mb-6 font-bengali line-clamp-2">
                        {project.description}
                      </p>

                      {/* Action Buttons */}
                      <div className={`flex items-center gap-2 mt-auto pt-4 border-t border-white/[0.05] transition-opacity duration-500 ${isCenter ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-2 py-2 bg-white text-black hover:bg-sky-50 rounded-lg font-bold transition-all text-xs"
                        >
                          <ExternalLink size={14} />
                          Visit
                        </a>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            setInstallModal({ isOpen: true, project });
                          }}
                          className="flex-1 inline-flex items-center justify-center gap-2 py-2 bg-white/5 text-white hover:bg-white/10 border border-white/10 rounded-lg font-bold transition-all text-xs"
                        >
                          <Download size={14} />
                          Install
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Navigation Controls */}
        <div className="absolute bottom-[-60px] left-1/2 -translate-x-1/2 flex items-center gap-6 z-30">
          <button 
            onClick={handlePrev}
            className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-white/10 hover:border-sky-500/50 transition-all active:scale-90"
          >
            <ChevronLeft size={24} />
          </button>
          <div className="flex gap-2">
            {projects.map((_, i) => (
              <div 
                key={i} 
                className={`h-1 rounded-full transition-all duration-500 ${i === activeIndex ? 'w-8 bg-sky-400' : 'w-2 bg-white/20'}`}
              />
            ))}
          </div>
          <button 
            onClick={handleNext}
            className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-white/10 hover:border-sky-500/50 transition-all active:scale-90"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Install Instructions Modal */}
      <AnimatePresence>
        {installModal.isOpen && installModal.project && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setInstallModal({ isOpen: false, project: null })}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 shadow-2xl"
            >
              <button
                onClick={() => setInstallModal({ isOpen: false, project: null })}
                className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                  {installModal.project.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white font-bengali">কীভাবে ইন্সটল করবেন?</h3>
                  <p className="text-sm text-slate-400">{installModal.project.title}</p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <p className="text-slate-300 text-sm leading-relaxed font-bengali">
                  এটি একটি Progressive Web App (PWA)। আপনার মোবাইলে বা কম্পিউটারে অ্যাপ হিসেবে ইন্সটল করতে নিচের ধাপগুলো অনুসরণ করুন:
                </p>
                <ol className="list-decimal list-inside space-y-3 text-sm text-slate-400 font-bengali">
                  <li>প্রথমে নিচের <strong className="font-sans">Visit App</strong> বাটনে ক্লিক করে ওয়েবসাইটটি ওপেন করুন।</li>
                  <li>আপনার ব্রাউজারের মেনু <span className="inline-block px-1.5 py-0.5 bg-white/10 rounded text-xs font-sans">⋮</span> (থ্রি-ডট বা থ্রি-লাইন) ওপেন করুন।</li>
                  <li>সেখান থেকে <strong className="font-sans">"Add to Home Screen"</strong> অপশনে ক্লিক করলে অ্যাপ ইন্সটল করার অপশন আসবে।</li>
                </ol>
              </div>

              <div className="flex gap-3">
                <a
                  href={installModal.project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setInstallModal({ isOpen: false, project: null })}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 bg-white text-black hover:bg-slate-200 rounded-xl font-medium transition-colors"
                >
                  <ExternalLink size={18} />
                  Visit App
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
