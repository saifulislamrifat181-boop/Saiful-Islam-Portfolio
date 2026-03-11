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
      icon: <FacebookIcon size={20} />,
      href: 'https://www.facebook.com/share/18CjyzG7bD/',
      color: 'bg-[#1877F2]',
      hoverColor: 'hover:bg-[#1877F2]/90',
    },
    {
      name: 'WhatsApp',
      icon: <WhatsAppIcon size={20} />,
      href: 'https://wa.me/8801943149343',
      color: 'bg-[#25D366]',
      hoverColor: 'hover:bg-[#25D366]/90',
    },
    {
      name: 'Telegram',
      icon: <TelegramIcon size={20} />,
      href: 'https://t.me/saifulislamrifat55',
      color: 'bg-[#229ED9]',
      hoverColor: 'hover:bg-[#229ED9]/90',
    },
    {
      name: 'Gmail',
      icon: <Mail size={20} />,
      href: 'mailto:saifulislamrifat83@gmail.com',
      color: 'bg-[#EA4335]',
      hoverColor: 'hover:bg-[#EA4335]/90',
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
            className="flex flex-col gap-3 items-end"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                variants={itemVars}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center w-12 h-12 rounded-full text-white shadow-lg hover:shadow-xl ${link.color} ${link.hoverColor} transition-all duration-300 outline-none focus:outline-none [-webkit-tap-highlight-color:transparent]`}
                aria-label={link.name}
                title={link.name}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={toggleMenu}
        className="flex items-center justify-center w-14 h-14 bg-white text-black rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-transform outline-none focus:outline-none [-webkit-tap-highlight-color:transparent]"
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
