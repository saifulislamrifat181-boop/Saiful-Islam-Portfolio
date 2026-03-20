import { motion } from 'motion/react';
import { Code2, Heart, Lightbulb } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <Code2 className="text-sky-400" size={32} />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code that stands the test of time.',
    },
    {
      icon: <Heart className="text-rose-400" size={32} />,
      title: 'Meaningful Products',
      description: 'Building applications that solve real problems and add value to users\' lives.',
    },
    {
      icon: <Lightbulb className="text-amber-400" size={32} />,
      title: 'Technology with Purpose',
      description: 'Using modern tech to create educational platforms and spiritual growth tools.',
    },
  ];

  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tighter mb-6">
              About <span className="text-gradient-accent">Me</span>
            </h2>
            <p className="text-xl text-slate-400 leading-relaxed mb-6">
              A passionate developer who builds Islamic tools, educational platforms, and productivity apps designed to help people learn, grow, and organize their spiritual and daily lives.
            </p>
            <p className="text-lg text-slate-500 leading-relaxed">
              I believe in writing clean code and creating meaningful products that stand the test of time. Nature inspires my creativity, and I try to bring that same sense of calm, structure, and beauty into my applications.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-[2rem] overflow-hidden aspect-[4/3] md:aspect-video lg:aspect-[4/3] border border-white/10 shadow-2xl group"
          >
            <div className="absolute inset-0 bg-sky-500/10 mix-blend-overlay z-10 transition-opacity duration-500 group-hover:opacity-0" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent opacity-80 z-10" />
            <img 
              src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80" 
              alt="Moody Mountains Nature" 
              className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15, 
                ease: [0.16, 1, 0.3, 1] 
              }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass-card p-8 rounded-3xl group"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:bg-white/10 group-hover:border-sky-500/30 transition-all duration-500">
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  {feature.icon}
                </motion.div>
              </div>
              <h3 className="text-2xl font-display font-semibold mb-4 text-white group-hover:text-sky-400 transition-colors">
                {feature.title}
              </h3>
              <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
