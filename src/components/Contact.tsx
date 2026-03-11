import { motion } from 'motion/react';
import { Mail } from 'lucide-react';
import { FacebookIcon, WhatsAppIcon, TelegramIcon } from './icons';

export default function Contact() {
  return (
    <section id="contact" className="py-32 relative">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="glass-card p-12 md:p-20 rounded-[3rem] relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-sky-500/10 to-transparent opacity-50" />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter mb-6 text-white">
              Let's Build Something <br className="hidden md:block" />
              <span className="text-gradient-accent">Meaningful</span>
            </h2>
            <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Whether you have a project in mind or just want to say hi, my inbox is always open.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="mailto:saifulislamrifat83@gmail.com"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black rounded-full font-medium transition-transform hover:scale-105 active:scale-95 w-full sm:w-auto"
              >
                <Mail size={20} />
                Say Hello
              </a>
              
              <div className="flex items-center gap-4">
                <a
                  href="https://www.facebook.com/share/18CjyzG7bD/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white/5 border border-white/10 text-white rounded-full hover:bg-[#1877F2] hover:border-[#1877F2] hover:scale-110 transition-all"
                  aria-label="Facebook"
                >
                  <FacebookIcon size={24} />
                </a>
                <a
                  href="https://wa.me/8801943149343"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white/5 border border-white/10 text-white rounded-full hover:bg-[#25D366] hover:border-[#25D366] hover:scale-110 transition-all"
                  aria-label="WhatsApp"
                >
                  <WhatsAppIcon size={24} />
                </a>
                <a
                  href="https://t.me/saifulislamrifat55"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white/5 border border-white/10 text-white rounded-full hover:bg-[#229ED9] hover:border-[#229ED9] hover:scale-110 transition-all"
                  aria-label="Telegram"
                >
                  <TelegramIcon size={24} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
