'use client'
import React, { useState } from "react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/tabs/tabs";
import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { RiArrowDropDownFill } from "react-icons/ri";
import { GoFileDirectoryFill } from "react-icons/go";
import About from "./about";
import { motion } from "framer-motion";


const page = () => {






  return (




    <motion.div
    animate={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: 20 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.8 }}
    className='w-full flex'
  >
      <div className=" hidden xl:flex flex-col gap-6 xl:h-full  w-[6rem]   items-center">
        <Image src='devcode.svg' alt="imagen devcode" width={40} height={40} className="mb-5 mt-4" />
        <Image src='personalinfo.svg' alt="imagen personalinfo" width={40} height={40} className="mb-5" />
        <Image src='hobbiesicon.svg' alt="imagen hobbiesicon" width={40} height={40} />
      </div>
    <About/>


    </motion.div>


  )
}

export default page
