'use client'
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2 px-4 border-l border-[#1E2D3D] h-full">
      <motion.button
        className={`font-medium transition-colors ${
          language === 'en' ? 'text-white' : 'text-[#8095AB]'
        }`}
        onClick={() => setLanguage('en')}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        EN
      </motion.button>
      <span className="text-[#8095AB]">|</span>
      <motion.button
        className={`font-medium transition-colors ${
          language === 'es' ? 'text-white' : 'text-[#8095AB]'
        }`}
        onClick={() => setLanguage('es')}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        ES
      </motion.button>
    </div>
  );
};

export default LanguageToggle;

