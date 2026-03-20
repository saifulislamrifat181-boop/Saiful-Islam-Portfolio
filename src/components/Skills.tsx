import { motion } from 'motion/react';

const skillCategories = [
  {
    title: 'Frontend Development',
    skills: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    title: 'Backend & Database',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'MongoDB', 'Firebase'],
  },
  {
    title: 'Tools & Design',
    skills: ['Git & GitHub', 'Vercel', 'UI/UX Design', 'Figma', 'AI Integration'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 relative overflow-hidden border-t border-white/5">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24 flex flex-col md:flex-row items-end justify-between gap-8"
        >
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-8 leading-[0.9]">
              Technical <br />
              <span className="text-gradient">Arsenal</span>
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed font-light">
              A curated selection of tools and technologies I've mastered to build 
              high-performance digital experiences.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="text-[10px] uppercase tracking-[0.4em] text-slate-500 font-bold mb-2">Capabilities</div>
            <div className="h-[1px] w-40 bg-gradient-to-r from-sky-400/50 to-transparent" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/10 backdrop-blur-md hover:bg-white/[0.07] hover:border-sky-500/40 transition-all duration-500"
            >
              {/* Premium Card Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/[0.05] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[2.5rem] pointer-events-none" />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-10">
                  <h3 className="text-2xl font-display font-bold text-white tracking-tight">
                    {category.title}
                  </h3>
                  <span className="text-[10px] font-mono text-sky-400 font-bold px-2 py-1 bg-sky-500/10 rounded-md border border-sky-500/20">
                    0{categoryIndex + 1}
                  </span>
                </div>

                <ul className="space-y-5">
                  {category.skills.map((skill, index) => (
                    <motion.li
                      key={skill}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.4, 
                        delay: categoryIndex * 0.1 + index * 0.05,
                      }}
                      className="flex items-center group/item"
                    >
                      <div className="w-2 h-2 rounded-full bg-sky-500/30 mr-4 group-hover/item:bg-sky-400 group-hover/item:scale-125 transition-all duration-300 shadow-[0_0_10px_rgba(56,189,248,0)] group-hover/item:shadow-[0_0_10px_rgba(56,189,248,0.5)]" />
                      <span className="text-lg font-medium text-slate-200 group-hover/item:text-white transition-colors duration-300">
                        {skill}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
