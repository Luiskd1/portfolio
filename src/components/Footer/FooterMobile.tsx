"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useLanguage } from "@/contexts/LanguageContext"


const FooterMobile = () => {
    const pathname = usePathname()
    const { t } = useLanguage()
  return (
    <div className="lg:hidden flex w-full justify-between border h-12 border-[#1E2D3D]">
        
        <h1 className="flex justify-center items-center w-full text-sm text-[#8095AB]">
          © 2025 Luis Santana • Full Stack Dev
        </h1>
        <Link 
          className={pathname === '/contact' 
            ? 'text-white size-5 w-32 h-full font-medium border border-[#1E2D3D] border-b-[#FEA55F] flex justify-center items-center px-4 hover:text-white' 
            : 'size-5 w-32 h-full font-medium border border-[#1E2D3D] flex justify-center items-center px-4 hover:text-white'
          } 
          href='/contact'
        >
          {t.nav.contact}
        </Link>


    </div>
  )
}

export default FooterMobile
