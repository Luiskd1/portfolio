'use client'

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

const FooterPage = () => {
    const pathname = usePathname()
    return (
        <footer className="flex w-full border border-[#1E2D3D] h-12 space justify-between mt-auto ">
            <div className="flex">
                <h1 className="size-5 w-full h-full font-medium border border-[#1E2D3D]  flex justify-start pl-2 items-center mr">find me in:</h1>
                <div className="flex">
                    <Link className="flex border border-[#1E2D3D] w-16 justify-center items-center hover:border-b-2 hover:border-b-[#FEA55F] " href='/' >
                        <Image src='twitter.svg' alt="imagen twitter" width={30} height={30} />
                    </Link>
                    <Link className="flex border border-[#1E2D3D] w-16 justify-center items-center hover:border-b-2 hover:border-b-[#FEA55F]" href='/' >
                        <Image  src='facebook.svg' alt="imagen facebook" width={30} height={30} />
                    </Link>
                </div>
            </div>
            <Link className={pathname === '/contact' ? ' text-white size-5 w-48 h-full font-medium border border-[#1E2D3D] border-b-[#FEA55F]  flex justify-center items-center  px-8 hover:text-white  ' : "  size-5 w-48 h-full font-medium border border-[#1E2D3D]  flex justify-center items-center  px-8 hover:text-white"} href='/contact' > _Contact-me</Link>

        </footer>
    )
}

export default FooterPage
