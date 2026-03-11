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
    <section id="skills" className="py-32 relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tighter mb-6">
            Technical <span className="text-gradient-accent">Arsenal</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            The tools and technologies I use to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/[0.07] transition-colors"
            >
              <h3 className="text-lg font-medium text-white mb-8 tracking-wide uppercase text-sm opacity-90">
                {category.title}
              </h3>
              <ul className="space-y-4">
                {category.skills.map((skill, index) => (
                  <motion.li
                    key={skill}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: categoryIndex * 0.1 + index * 0.05 }}
                    className="flex items-center text-slate-300 hover:text-sky-400 transition-colors group cursor-default"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500/30 mr-4 group-hover:bg-sky-400 transition-colors" />
                    <span className="text-lg tracking-wide">{skill}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
