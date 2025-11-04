'use client'
import React from 'react'
import { MdMenu } from "react-icons/md";
import { motion } from 'framer-motion';

import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLanguage } from '@/contexts/LanguageContext';
import { Languages } from 'lucide-react';

const HeaderMobile = () => {
    const { t, language, setLanguage } = useLanguage();
    const pathname = usePathname()

    const urlpath = [
        {
            name: t.nav.hello,
            url: "/"
        },
        {
            name: t.nav.about,
            url: "/about"
        },
        {
            name: t.nav.projects,
            url: "/projects"
        },
        {
            name: t.nav.contact,
            url: "/contact"
        },
    ];

    return (
        <div className="flex lg:hidden justify-between items-center px-5 py-4 border-b border-[#1E2D3D]">
          <h1 className='text-white text-2xl'>{t.nav.name}</h1>
          <div className="flex items-center gap-3">
            {/* Botón de idioma visible siempre */}
            <div className="flex items-center gap-2 px-3 py-1 rounded border border-[#1E2D3D] bg-[#12171F]">
              <Languages size={16} className="text-[#8095AB]" />
              <motion.button
                className={`text-sm font-medium transition-colors ${
                  language === 'en' ? 'text-white' : 'text-[#8095AB]'
                }`}
                onClick={() => setLanguage('en')}
                whileTap={{ scale: 0.95 }}
              >
                EN
              </motion.button>
              <span className="text-[#8095AB]">|</span>
              <motion.button
                className={`text-sm font-medium transition-colors ${
                  language === 'es' ? 'text-white' : 'text-[#8095AB]'
                }`}
                onClick={() => setLanguage('es')}
                whileTap={{ scale: 0.95 }}
              >
                ES
              </motion.button>
            </div>
            
            {/* Menú hamburguesa */}
            <Sheet key={"left"}>
              <SheetTrigger><MdMenu size={35} color='white' /></SheetTrigger>
              <SheetContent className="w-[300px] lg:w-[540px] border-[#1E2D3D] bg-[#04070B]">
                <SheetHeader>
                  <SheetTitle className="text-white text-left mb-4 pb-4 border-b border-[#1E2D3D]">
                    {language === 'en' ? 'Navigation' : 'Navegación'}
                  </SheetTitle>
                  
                  {urlpath.map((x, index) => (
                    <div className='flex flex-col pt-3 justify-start text-[#8095AB]' key={index}>
                        <SheetClose asChild>
                          <Link 
                            className={`w-full text-2xl text-start py-2 hover:text-white transition-colors ${
                              pathname === x.url ? 'text-white border-b-2 border-b-[#FEA55F]' : ''
                            }`} 
                            href={x.url}
                          >
                            {x.name}
                          </Link>
                        </SheetClose>
                    </div>
                  ))}
                  
                  {/* Separador */}
                  <div className="pt-6 mt-6 border-t border-[#1E2D3D]">
                    <p className="text-[#8095AB] text-sm mb-3">
                      {language === 'en' ? 'Change Language' : 'Cambiar Idioma'}
                    </p>
                    <div className="flex gap-3">
                      <motion.button
                        onClick={() => setLanguage('en')}
                        className={`flex-1 py-3 rounded border transition-all ${
                          language === 'en' 
                            ? 'bg-[#FEA55F] text-white border-[#FEA55F]' 
                            : 'bg-transparent text-[#8095AB] border-[#1E2D3D]'
                        }`}
                        whileTap={{ scale: 0.95 }}
                      >
                        English
                      </motion.button>
                      <motion.button
                        onClick={() => setLanguage('es')}
                        className={`flex-1 py-3 rounded border transition-all ${
                          language === 'es' 
                            ? 'bg-[#FEA55F] text-white border-[#FEA55F]' 
                            : 'bg-transparent text-[#8095AB] border-[#1E2D3D]'
                        }`}
                        whileTap={{ scale: 0.95 }}
                      >
                        Español
                      </motion.button>
                    </div>
                  </div>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      )
}

export default HeaderMobile