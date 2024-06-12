'use client'

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { SiGithub, SiLinkedin } from "react-icons/si"
import AnimatedText from "./FooterParrafo"

const FooterPage = () => {
    const pathname = usePathname()
    return (
        <footer className=" hidden lg:flex w-full border border-[#1E2D3D] h-12  justify-between  ">
            <div className=" hidden lg:flex w-full">
                <h1 className="size-5  w-72 h-full font-medium border border-[#1E2D3D]  flex justify-start pl-2 items-center mr">find me in:</h1>
                <div className="flex">
                    <Link className="flex border border-[#1E2D3D] xl:w-16 justify-center items-center hover:border-b-2 hover:border-b-[#FEA55F] " href='https://github.com/Luiskd1' target="_blank">
                        <SiGithub size={30} />
                    </Link>
                    <Link className="flex border border-[#1E2D3D] xl:w-16 justify-center items-center hover:border-b-2 hover:border-b-[#FEA55F]" href='https://www.linkedin.com/in/luis-pablo-santana-sampayo-5847b860/' target="_blank">
                        <SiLinkedin size={30} className="icon-border" />
                    </Link>
                </div>
                <div className=" flex  w-full  ">

                    <AnimatedText />
                </div>
            </div>

                <Link className={pathname === '/contact' ? ' text-white size-5 w-48 h-full font-medium border border-[#1E2D3D] border-b-[#FEA55F]  flex justify-center items-center  px-8 hover:text-white  ' : "  size-5 w-48 h-full font-medium border border-[#1E2D3D]  flex justify-center items-center  px-8 hover:text-white"} href='/contact' > _Contact-me</Link>
        </footer>
    )
}

export default FooterPage
