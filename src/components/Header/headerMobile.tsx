'use client'
import React from 'react'
import { MdMenu } from "react-icons/md";

import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const HeaderMobile = () => {


    const urlpath = [
        {
            name: "_Home",
            url: "/"
        },
        {
            name: "_About",
            url: "/about"
        },
        {
            name: "_Projects",
            url: "/projects"
        },
        {
            name: "_Contact",
            url: "/contact"
        },

    ];


    const pathname = usePathname()
    return (
        <div className="flex lg:hidden justify-between px-5 py-4">
          <h1 className='text-white text-2xl'>Luis Santana</h1>
          <Sheet key={"left"}>
            <SheetTrigger><MdMenu size={35} color='white' /></SheetTrigger>
            <SheetContent className="w-[300px] lg:w-[540px] border-[#1E2D3D] bg-[#04070B]">
              <SheetHeader>
                {urlpath.map((x, index) => (
                  <div className='flex flex-col pt-5 justify-start text-[#8095AB]' key={index}>
                      <SheetClose asChild>
                        <Link className={`w-full text-2xl text-start ${pathname === x.url ? 'text-white  border-b border-b-orange-600' : ''}`} href={x.url}>{x.name}</Link>
                      </SheetClose>
                  </div>
                ))}
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      )
}

export default HeaderMobile