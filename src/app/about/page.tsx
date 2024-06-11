'use client'
import React, { useState } from "react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/tabs/tabs";
import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { RiArrowDropDownFill } from "react-icons/ri";
import { GoFileDirectoryFill } from "react-icons/go";
import About from "./about";

const page = () => {






  return (




    <div className="  flex h-full "  >
      <div className=" hidden sm:flex flex-col gap-6 sm:h-full  w-[6rem]   items-center">
        <Image src='devcode.svg' alt="imagen devcode" width={40} height={40} className="mb-5 mt-4" />
        <Image src='personalinfo.svg' alt="imagen personalinfo" width={40} height={40} className="mb-5" />
        <Image src='hobbiesicon.svg' alt="imagen hobbiesicon" width={40} height={40} />
      </div>
    <About/>


    </div >


  )
}

export default page
