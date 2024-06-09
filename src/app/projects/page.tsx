'use client'
import { FolderClosed } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';
import { IoArrowForwardSharp } from "react-icons/io5";
import BankApp from './bankApp';


const Page = () => {
  const [activeTab, setActiveTab] = useState<Number>(0);
  const [activeSidebarItem, setActiveSidebarItem] = useState<Number>(0);

  const handleTabClick = (index: Number) => {
    setActiveTab(index);
  };

  const handleSidebarItemClick = (index: Number) => {
    setActiveSidebarItem(index);
  };

  return (
    <div className='h-full flex '>

      {/* Sidebar */}
      <div className="flex flex-col gap-6 h-full border border-[#1E2D3D] w-[28.5rem]   items-center ">
        <div className='border border-t-transparent border-[#1E2D3D] w-full h-[4rem] '>
          <h1 className='flex w-full h-full items-center justify-center  text-white text-2xl'>//Projects</h1>
        </div>
        <button
          className={`group flex items-center gap-2 hover:text-white ${activeTab === 0 ? 'text-white' : ''}`}
          onClick={() => handleTabClick(0)}
        >
          <FolderClosed
            size={25}
            className={`${activeTab === 0 ? 'text-red-500' : 'text-[#8095AB]'} group-hover:text-red-500`}
          />
          BankApp 
        </button> 
        <button
          className={`group flex items-center gap-2 hover:text-white ${activeTab === 1 ? 'text-white' : ''}`}
          onClick={() => handleTabClick(1)}
        >
          <FolderClosed
            size={25}
            className={`${activeTab === 1 ? 'text-blue-500' : 'text-[#8095AB]'} group-hover:text-blue-500`}
          />
          CrudApp 
        </button> 
        <button
          className={`group flex items-center gap-2 hover:text-white ${activeTab === 2 ? 'text-white' : ''}`}
          onClick={() => handleTabClick(2)}
        >
          <FolderClosed
            size={25}
            className={`${activeTab === 2 ? 'text-green-500' : 'text-[#8095AB]'} group-hover:text-green-500`}
          />
          Portfolio 
        </button> 

      </div>

      {/* Content based on activeTab */}
      <div className='w-full  h-full pt-6'>
        {activeTab === 0 && 
        <div>
          <BankApp/>
        </div>
          }
        {activeTab === 1 && <div>Content for Tab 2</div>}
        {activeTab === 2 && <div>Content for Tab 3</div>}
      </div>
    </div>
  );
};

export default Page;
