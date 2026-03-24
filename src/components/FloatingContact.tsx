import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, X, MessageCircle } from 'lucide-react';
import { FacebookIcon, WhatsAppIcon, TelegramIcon } from './icons';

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const socialLinks = [
    {
      name: 'Facebook',
      icon: <FacebookIcon size={24} />,
      href: 'https://www.facebook.com/share/18CjyzG7bD/',
      color: 'bg-[#1877F2]',
      shadow: 'shadow-[0_6px_0_0_#0d47a1]',
      hoverShadow: 'hover:shadow-[0_3px_0_0_#0d47a1]',
    },
    {
      name: 'WhatsApp',
      icon: <WhatsAppIcon size={24} />,
      href: 'https://wa.me/8801943149343',
      color: 'bg-[#25D366]',
      shadow: 'shadow-[0_6px_0_0_#128c7e]',
      hoverShadow: 'hover:shadow-[0_3px_0_0_#128c7e]',
    },
    {
      name: 'Telegram',
      icon: <TelegramIcon size={24} />,
      href: 'https://t.me/saifulislamrifat55',
      color: 'bg-[#229ED9]',
      shadow: 'shadow-[0_6px_0_0_#0088cc]',
      hoverShadow: 'hover:shadow-[0_3px_0_0_#0088cc]',
    },
    {
      name: 'Gmail',
      icon: <Mail size={24} />,
      href: 'mailto:saifulislamrifat83@gmail.com',
      color: 'bg-[#EA4335]',
      shadow: 'shadow-[0_6px_0_0_#b31412]',
      hoverShadow: 'hover:shadow-[0_3px_0_0_#b31412]',
    },
  ];

  const menuVars = {
    initial: { opacity: 0, y: 20, scale: 0.8 },
    animate: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.05,
        staggerDirection: -1,
      }
    },
    exit: { 
      opacity: 0, 
      y: 20, 
      scale: 0.8,
      transition: {
        duration: 0.3,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.05,
        staggerDirection: 1,
      }
    }
  };

  const itemVars = {
    initial: { opacity: 0, y: 10, scale: 0.8 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: 10, scale: 0.8 }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="flex flex-col gap-4 items-end mb-2"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                variants={itemVars}
                whileHover={{ y: 3 }}
                whileTap={{ y: 6 }}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative flex items-center justify-center w-14 h-14 rounded-full text-white ${link.color} ${link.shadow} ${link.hoverShadow} transition-all duration-150 outline-none focus:outline-none [-webkit-tap-highlight-color:transparent]`}
                aria-label={link.name}
                title={link.name}
              >
                {link.icon}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={toggleMenu}
        className="flex items-center justify-center w-16 h-16 bg-white text-black rounded-full shadow-[0_8px_0_0_#d1d5db] hover:shadow-[0_4px_0_0_#d1d5db] hover:translate-y-[4px] active:shadow-none active:translate-y-[8px] transition-all duration-150 outline-none focus:outline-none [-webkit-tap-highlight-color:transparent]"
        aria-label="Contact Options"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={28} />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle size={28} />
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </div>
  );
}
