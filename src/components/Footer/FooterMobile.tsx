"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"


const FooterMobile = () => {
    const pathname = usePathname()
  return (
    <div className="lg:hidden flex w-full justify-between border h-12  border-[#1E2D3D]">
        
        <h1 className="flex justify-center items-center w-full">--- My Porfolio Luis Santana ---</h1>
        <Link className={pathname === '/contact' ? ' text-white size-5 w-48 h-full font-medium border border-[#1E2D3D] border-b-[#FEA55F]  flex justify-center items-center  px-8 hover:text-white  ' : "  size-5 w-48 h-full font-medium border border-[#1E2D3D]  flex justify-center items-center  px-8 hover:text-white"} href='/contact' > _Contact-me</Link>


    </div>
  )
}

export default FooterMobile
