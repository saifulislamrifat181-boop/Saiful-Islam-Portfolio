import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Code2, BookOpen, Globe, Layout, Download, ExternalLink, X, ShieldAlert, Mic, Monitor, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Saiful Islam Blogs',
    description: 'একটি আধুনিক ব্লগিং প্ল্যাটফর্ম যেখানে বিভিন্ন চিন্তা, ধারণা এবং প্রতিফলন শেয়ার করা হয়।',
    link: 'https://saiful-islam-scribe-ingd.vercel.app/',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800',
    tags: ['Next.js', 'Tailwind CSS', 'MDX'],
    icon: <Layout className="text-sky-400" size={20} />,
    isBengali: false,
    size: 'large', // md:col-span-8
  },
  {
    title: 'Rizq Planner',
    description: 'একটি প্রোডাক্টিভিটি প্ল্যানার যা লক্ষ্য, অভ্যাস এবং দৈনন্দিন রিজিকের মানসিকতা বজায় রাখতে সাহায্য করে।',
    link: 'https://rizq-planner-app.vercel.app/',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=800',
    tags: ['React', 'TypeScript', 'Framer Motion'],
    icon: <Sparkles className="text-indigo-400" size={20} />,
    isBengali: false,
    size: 'small', // md:col-span-4
  },
  {
    title: 'Quran AI',
    description: 'একটি এআই-চালিত কুরআন এক্সপ্লোরেশন টুল যা ব্যবহারকারীদের গভীর অর্থ বুঝতে সাহায্য করে।',
    link: 'https://quranic-insights-alpha.vercel.app/',
    image: 'https://images.unsplash.com/photo-1585036156171-384164a8c675?auto=format&fit=crop&q=80&w=800',
    tags: ['AI Integration', 'Next.js', 'OpenAI'],
    icon: <Code2 className="text-emerald-400" size={20} />,
    isBengali: false,
    size: 'small', // md:col-span-4
  },
  {
    title: 'Dua & Amal',
    description: 'আধ্যাত্মিক উন্নতির জন্য প্রতিদিনের দোয়া এবং ইসলামিক আমলের একটি সংগ্রহ।',
    link: 'https://serene-dua-one.vercel.app/',
    image: 'https://images.unsplash.com/photo-1564683214965-3619addd900d?auto=format&fit=crop&q=80&w=800',
    tags: ['PWA', 'React', 'Tailwind'],
    icon: <BookOpen className="text-rose-400" size={20} />,
    isBengali: false,
    size: 'medium', // md:col-span-4
  },
  {
    title: 'শব্দে শব্দে অর্থ',
    description: 'কুরআনের শব্দভাণ্ডার শেখার জন্য একটি শব্দে শব্দে অর্থ শেখার প্ল্যাটফর্ম।',
    link: 'https://divine-lexicon.vercel.app/',
    image: 'https://images.unsplash.com/photo-1519791883288-dc8bd696e667?auto=format&fit=crop&q=80&w=800',
    tags: ['Education', 'Next.js', 'Database'],
    icon: <Globe className="text-amber-400" size={20} />,
    isBengali: true,
    size: 'medium', // md:col-span-4
  },
  {
    title: 'শব্দলেখা',
    description: 'বানান এবং লেখা উন্নত করার জন্য একটি ভাষা শেখার টুল।',
    link: 'https://shuddholekha-language-lab-vu1s.vercel.app/',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=800',
    tags: ['Language', 'React', 'Gamification'],
    icon: <Layout className="text-purple-400" size={20} />,
    isBengali: true,
    size: 'large', // md:col-span-8
  },
  {
    title: 'Speech Test Ai',
    description: 'একটি এআই-চালিত স্পিচ-টু-টেক্সট টুল যা ভয়েসকে নিখুঁতভাবে টেক্সটে রূপান্তর করতে সাহায্য করে।',
    link: 'https://sound-to-scribe-ai-4b2a4faa.vercel.app/',
    image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80&w=800',
    tags: ['AI', 'Speech', 'React'],
    icon: <Mic className="text-blue-400" size={20} />,
    isBengali: false,
    size: 'small', // md:col-span-4
  },
  {
    title: 'SecureGuard',
    description: 'ওয়েব নিরাপত্তার জন্য একটি ব্যাপক সিকিউরিটি স্ক্যানিং এবং সচেতনতামূলক প্ল্যাটফর্ম।',
    link: 'https://vigilant-vault-check-e979114a.vercel.app/',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
    tags: ['Security', 'React', 'Scanner'],
    icon: <ShieldAlert className="text-red-400" size={20} />,
    isBengali: false,
    size: 'small', // md:col-span-4
  },
  {
    title: 'RetroConvert Studio',
    description: 'একটি শক্তিশালী মিডিয়া কনভার্টার টুল যা ইমেজ এবং ভিডিওকে বিভিন্ন ফরম্যাটে রূপান্তর করতে সাহায্য করে।',
    link: 'https://retroconvert-studio-mdxg.vercel.app/',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800',
    tags: ['Converter', 'React', 'Media'],
    icon: <Monitor className="text-orange-400" size={20} />,
    isBengali: false,
    size: 'small', // md:col-span-4
  },
];

export default function Projects() {
  const [installModal, setInstallModal] = useState<{isOpen: boolean, project: typeof projects[0] | null}>({
    isOpen: false,
    project: null
  });

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8"
          >
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter mb-6">
                Selected <span className="text-gradient-accent">Works</span>
              </h2>
              <p className="text-xl text-slate-400 leading-relaxed">
                A collection of tools and platforms built with precision, focusing on Islamic education, productivity, and modern web tech.
              </p>
            </div>
            <div className="flex items-center gap-4 text-slate-500 text-sm font-medium tracking-widest uppercase">
              <span className="w-12 h-[1px] bg-slate-800" />
              <span>{projects.length} Projects</span>
            </div>
          </motion.div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {projects.map((project, index) => {
            const isLarge = project.size === 'large';
            const colSpan = isLarge ? 'md:col-span-8' : 'md:col-span-4';
            
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className={`${colSpan} group relative rounded-[2rem] overflow-hidden bg-[#0a0a0a] border border-white/5 hover:border-sky-500/30 transition-all duration-500 flex flex-col`}
              >
                {/* Image Container */}
                <div className={`relative overflow-hidden ${isLarge ? 'h-[300px] md:h-[400px]' : 'h-[250px]'}`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Floating Icon */}
                  <div className="absolute top-6 left-6 z-20 w-12 h-12 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center shadow-2xl">
                    {project.icon}
                  </div>

                  {/* Quick Action Link */}
                  <div className="absolute top-6 right-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-2xl bg-white text-black flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
                    >
                      <ArrowUpRight size={20} />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-2.5 py-0.5 text-[10px] font-bold tracking-widest uppercase text-sky-400/80 bg-sky-500/5 border border-sky-500/10 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className={`text-2xl font-bold text-white mb-3 ${project.isBengali ? 'font-bengali' : 'font-display tracking-tight'}`}>
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-400 leading-relaxed mb-8 font-bengali text-base line-clamp-2 group-hover:line-clamp-none transition-all duration-500">
                    {project.description}
                  </p>

                  <div className="mt-auto flex items-center gap-3">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 py-3 bg-white text-black hover:bg-sky-50 rounded-xl font-bold transition-all text-sm"
                    >
                      <ExternalLink size={16} />
                      Live Preview
                    </a>
                    <button
                      onClick={() => setInstallModal({ isOpen: true, project })}
                      className="w-12 h-12 flex items-center justify-center bg-white/5 text-white hover:bg-white/10 border border-white/10 rounded-xl font-bold transition-all"
                    >
                      <Download size={18} />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Install Instructions Modal */}
      <AnimatePresence>
        {installModal.isOpen && installModal.project && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setInstallModal({ isOpen: false, project: null })}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md bg-[#0a0a0a] border border-white/10 rounded-[2rem] p-8 shadow-2xl"
            >
              <button
                onClick={() => setInstallModal({ isOpen: false, project: null })}
                className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
              
              <div className="flex items-center gap-5 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
                  {installModal.project.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white font-bengali">কীভাবে ইন্সটল করবেন?</h3>
                  <p className="text-slate-400">{installModal.project.title}</p>
                </div>
              </div>

              <div className="space-y-5 mb-10">
                <p className="text-slate-300 leading-relaxed font-bengali text-lg">
                  এটি একটি Progressive Web App (PWA)। আপনার মোবাইলে বা কম্পিউটারে অ্যাপ হিসেবে ইন্সটল করতে নিচের ধাপগুলো অনুসরণ করুন:
                </p>
                <ol className="list-decimal list-inside space-y-4 text-slate-400 font-bengali">
                  <li>প্রথমে নিচের <strong className="font-sans text-white">Visit App</strong> বাটনে ক্লিক করে ওয়েবসাইটটি ওপেন করুন।</li>
                  <li>আপনার ব্রাউজারের মেনু <span className="inline-block px-2 py-1 bg-white/10 rounded text-xs font-sans text-white">⋮</span> ওপেন করুন।</li>
                  <li>সেখান থেকে <strong className="font-sans text-white">"Add to Home Screen"</strong> অপশনে ক্লিক করুন।</li>
                </ol>
              </div>

              <a
                href={installModal.project.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setInstallModal({ isOpen: false, project: null })}
                className="w-full inline-flex items-center justify-center gap-2 py-4 bg-white text-black hover:bg-slate-200 rounded-2xl font-bold transition-colors text-lg"
              >
                <ExternalLink size={20} />
                Visit App
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
