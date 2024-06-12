'use client'
import { FolderClosed } from 'lucide-react';
import React, { useState } from 'react';
import { motion } from "framer-motion";
import BankApp from './bankApp';
import CrudApp from './crudapp/crudApp';


const Page = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };



  return (

    <div className=' w-full  lg:h-full lg:flex  '>

      <div className="flex w-full  flex-col gap-6     h-full border border-[#1E2D3D] lg:w-[28.5rem]   items-center ">
        <div className='border-b  border-b-[#1E2D3D] w-full h-[4rem] '>
          <h1 className='flex w-full h-full items-center justify-center  text-white text-2xl'>/Projects</h1>
        </div>

        <div className=' grid grid-cols-2   lg:flex  h-full   lg:flex-col gap-6'>
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
          {/* <button
            className={`group flex items-center gap-2 hover:text-white ${activeTab === 2 ? 'text-white' : ''}`}
            onClick={() => handleTabClick(2)}
          >
            <FolderClosed
              size={25}
              className={`${activeTab === 2 ? 'text-green-500' : 'text-[#8095AB]'} group-hover:text-green-500`}
            />
            Portfolio
          </button> */}
        </div>

      </div>

      <div className='w-full h-full pt-6'>
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
        {activeTab === 2 && <div>Content for Tab 3</div>}
      </div>
    </div>
  );
};

export default Page;
