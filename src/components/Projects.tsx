import { motion } from 'motion/react';
import { Sparkles, Code2, BookOpen, Globe, Layout, Download, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Saiful Islam Blogs',
    description: 'A modern blogging platform sharing insights, ideas, and reflections.',
    link: 'https://saiful-islam-scribe-ingd.vercel.app/',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800',
    tags: ['Next.js', 'Tailwind CSS', 'MDX'],
    icon: <Layout className="text-sky-400" size={20} />,
    isBengali: false,
  },
  {
    title: 'Rizq Planner',
    description: 'A productivity planner designed to help manage goals, habits, and daily Rizq mindset.',
    link: 'https://rizq-planner-app.vercel.app/',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=800',
    tags: ['React', 'TypeScript', 'Framer Motion'],
    icon: <Sparkles className="text-indigo-400" size={20} />,
    isBengali: false,
  },
  {
    title: 'Quran AI',
    description: 'An AI-powered Quran exploration tool that helps users understand deeper meanings.',
    link: 'https://quranic-insights-alpha.vercel.app/',
    image: 'https://images.unsplash.com/photo-1585036156171-384164a8c675?auto=format&fit=crop&q=80&w=800',
    tags: ['AI Integration', 'Next.js', 'OpenAI'],
    icon: <Code2 className="text-emerald-400" size={20} />,
    isBengali: false,
  },
  {
    title: 'দোয়া ও আমল',
    description: 'A collection of daily duas and Islamic practices for spiritual growth.',
    link: 'https://serene-dua-one.vercel.app/',
    image: 'https://images.unsplash.com/photo-1564683214965-3619addd900d?auto=format&fit=crop&q=80&w=800',
    tags: ['PWA', 'React', 'Tailwind'],
    icon: <BookOpen className="text-rose-400" size={20} />,
    isBengali: true,
  },
  {
    title: 'শব্দে শব্দে অর্থ',
    description: 'A word-by-word Quranic vocabulary learning platform.',
    link: 'https://divine-lexicon.vercel.app/',
    image: 'https://images.unsplash.com/photo-1519791883288-dc8bd696e667?auto=format&fit=crop&q=80&w=800',
    tags: ['Education', 'Next.js', 'Database'],
    icon: <Globe className="text-amber-400" size={20} />,
    isBengali: true,
  },
  {
    title: 'শব্দলেখা',
    description: 'A language learning tool focused on improving spelling and writing.',
    link: 'https://shuddholekha-language-lab-kpsu.vercel.app/',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=800',
    tags: ['Language', 'React', 'Gamification'],
    icon: <Layout className="text-purple-400" size={20} />,
    isBengali: true,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tighter mb-6">
            Featured <span className="text-gradient-accent">Projects</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
            A selection of my recent work, focusing on Islamic tools, productivity, and education.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex flex-col rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.1] hover:bg-white/[0.04] transition-all duration-500 overflow-hidden hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
            >
              {/* Subtle gradient spotlight on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              {/* Image Section - Bleeds to edges at top */}
              <div className="relative h-48 md:h-52 w-full overflow-hidden border-b border-white/[0.05]">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-[0.16,1,0.3,1]"
                  referrerPolicy="no-referrer"
                />
                
                {/* Floating Icon */}
                <div className="absolute top-4 left-4 z-20 w-10 h-10 rounded-xl bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-500">
                  {project.icon}
                </div>
              </div>

              {/* Content Section */}
              <div className="relative z-10 flex flex-col flex-grow p-6 md:p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-[11px] font-semibold tracking-wide uppercase text-slate-400 bg-white/[0.03] border border-white/[0.05] rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className={`text-2xl font-semibold text-white mb-3 group-hover:text-sky-400 transition-colors ${project.isBengali ? 'font-bengali tracking-normal' : 'font-display tracking-tight'}`}>
                  {project.title}
                </h3>
                <p className="text-slate-400 leading-relaxed text-sm mb-8 flex-grow">
                  {project.description}
                </p>

                {/* Action Buttons */}
                <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/[0.05]">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn flex-1 inline-flex items-center justify-center gap-2 py-2.5 bg-white text-black hover:bg-slate-200 rounded-lg font-medium transition-all text-sm active:scale-95"
                  >
                    <ExternalLink size={16} className="transition-transform group-hover/btn:scale-110" />
                    Visit
                  </a>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn flex-1 inline-flex items-center justify-center gap-2 py-2.5 bg-white/5 text-white hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-lg font-medium transition-all text-sm active:scale-95"
                  >
                    <Download size={16} className="transition-transform group-hover/btn:-translate-y-0.5" />
                    Install
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
