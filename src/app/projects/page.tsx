'use client'
import { FolderClosed } from 'lucide-react';
import React, { useState } from 'react';
import { motion } from "framer-motion";
import BankApp from './bankApp';
import CrudApp from './crudapp/crudApp';
import RentalApp from './rental-cars/rentalCars';
import WhatsappIAApp from './whatsapp-ia/whatsappIA';
import { useLanguage } from '@/contexts/LanguageContext';


const Page = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const { t } = useLanguage();

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };



  return (

    <div className='w-full lg:grid lg:grid-cols-[20rem_1fr]'>

      <div className="flex w-full flex-col border border-[#1E2D3D]">
        <div className='border-b border-b-[#1E2D3D] w-full h-[4rem] flex-shrink-0'>
          <h1 className='flex w-full h-full items-center justify-center text-white text-2xl'>/{t.projects.title}</h1>
        </div>

        <div className='grid grid-cols-2 lg:flex lg:flex-col gap-6 px-6 py-8'>
          <motion.button
            className={`group flex items-center gap-2 hover:text-white ${activeTab === 0 ? 'text-white' : ''}`}
            onClick={() => handleTabClick(0)}
            whileTap={{ scale: 0.9 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <FolderClosed
              size={25}
              className={`${activeTab === 0 ? 'text-red-500' : 'text-[#8095AB]'} group-hover:text-red-500`}
            />
            BankApp
          </motion.button>
          <motion.button
            className={`group flex items-center gap-2 hover:text-white ${activeTab === 1 ? 'text-white' : ''}`}
            onClick={() => handleTabClick(1)}
            whileTap={{ scale: 0.9 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <FolderClosed
              size={25}
              className={`${activeTab === 1 ? 'text-blue-500' : 'text-[#8095AB]'} group-hover:text-blue-500`}
            />
            CrudApp
          </motion.button>
          <motion.button
            className={`group flex items-center gap-2 hover:text-white ${activeTab === 2 ? 'text-white' : ''}`}
            onClick={() => handleTabClick(2)}
            whileTap={{ scale: 0.9 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <FolderClosed
              size={25}
              className={`${activeTab === 2 ? 'text-green-500' : 'text-[#8095AB]'} group-hover:text-green-500`}
            />
            Rental Cars
          </motion.button>
          <motion.button
            className={`group flex items-center gap-2 hover:text-white ${activeTab === 3 ? 'text-white' : ''}`}
            onClick={() => handleTabClick(3)}
            whileTap={{ scale: 0.9 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <FolderClosed
              size={25}
              className={`${activeTab === 3 ? 'text-purple-500' : 'text-[#8095AB]'} group-hover:text-purple-500`}
            />
            WhatsApp IA SaaS
          </motion.button>
        </div>

      </div>

      <div className='w-full pt-6 border-t border-b border-r border-[#1E2D3D]'>
        {activeTab === 0 && (
          <motion.div
            key={activeTab}
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
            className='w-full'
          >
            <BankApp />
          </motion.div>
        )}
        {activeTab === 1 && (
          <motion.div
            key={activeTab}
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
            className='w-full'
          >
            <CrudApp />
          </motion.div>
        )}
        {activeTab === 2 && (
          <motion.div
            key={activeTab}
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
            className='w-full'
          >
            <RentalApp/>
          </motion.div>
        )}
        {activeTab === 3 && (
          <motion.div
            key={activeTab}
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
            className='w-full'
          >
            <WhatsappIAApp/>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Page;
