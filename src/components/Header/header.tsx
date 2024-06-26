'use client'
import { Divider } from "@nextui-org/divider"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion";
import { Sheet } from "lucide-react";
import { SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";


const HeaderPage = () => {

  const pathname = usePathname()

  return (
    <div>
      <div className="hidden lg:flex w-full border border-[#1E2D3D] h-12 space justify-between ">
        <div className="flex">
          <h1 className="size-5 xl:w-96 w-full h-full font-medium border border-[#1E2D3D]  flex justify-start px-12 items-center mr">Luis Santana</h1>
          <div className="flex">
            <Link className={pathname === '/' ? 'border-b-[#FEA55F] text-white size-5 w-32 xl:w-48 h-full font-medium border border-[#1E2D3D]  flex justify-center items-center  px-8 hover:text-white  ' : "  size-5 w-32 xl:w-48 h-full font-medium border border-[#1E2D3D]  flex justify-center items-center  px-8 hover:text-white"} href='/' >
              <motion.div className="underline" layoutId="underline" />_Hello
            </Link>
            <Link className={pathname === '/about' ? 'border-b-[#FEA55F] text-white size-5 w-32 xl:w-48 h-full font-medium border border-[#1E2D3D]  flex justify-center items-center  px-8 hover:text-white  ' : "  size-5 w-32 xl:w-48 h-full font-medium border border-[#1E2D3D]  flex justify-center items-center  px-8 hover:text-white"} href='/about' > _About-me</Link>
            <Link className={pathname === '/projects' ? 'border-b-[#FEA55F] text-white size-5 w-32 xl:w-48 h-full font-medium border border-[#1E2D3D]  flex justify-center items-center  px-8 hover:text-white  ' : "  size-5 w-32 xl:w-48 h-full font-medium border border-[#1E2D3D]  flex justify-center items-center  px-8 hover:text-white"} href='/projects' > _Projects</Link>
          </div>
        </div>
        <Link className={pathname === '/contact' ? ' text-white size-5 w-48 h-full font-medium border border-[#1E2D3D] border-b-[#FEA55F]  flex justify-center items-center  px-8 hover:text-white  ' : "  size-5 w-32 xl:w-48 h-full font-medium border border-[#1E2D3D]  flex justify-center items-center  px-8 hover:text-white"} href='/contact' > _Contact-me</Link>
      </div>


    </div>
  )
}

export default HeaderPage
