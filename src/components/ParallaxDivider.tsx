import { motion } from 'motion/react';

export default function ParallaxDivider() {
  return (
    <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      {/* Fixed Background for Parallax */}
      <div 
        className="absolute inset-0 bg-fixed bg-center bg-cover z-0"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80')" 
        }}
      />
      
      {/* Dark Overlays to blend with the theme */}
      <div className="absolute inset-0 bg-[#030303]/70 z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#030303] via-transparent to-[#030303] z-10" />
      <div className="absolute inset-0 bg-sky-900/10 mix-blend-overlay z-10" />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-8 tracking-tight leading-tight">
            "Look deep into nature, and then you will understand everything better."
          </h2>
          <p className="text-sky-400 font-medium tracking-[0.2em] uppercase text-sm">
            — Albert Einstein
          </p>
        </motion.div>
      </div>
    </section>
  );
}
