'use client'
import { Card } from "@nextui-org/react";
import { Globe, MessageSquareText, Scale, Zap } from "lucide-react";
import { 
    SiJavascript, SiTypescript, SiHtml5, SiCss3, SiReact, SiExpress, SiTailwindcss,
    SiPython, SiNodedotjs, SiGit, SiPostgresql, SiMongodb, SiDocker,
    SiNestjs, SiPrisma, SiRedis, SiSupabase, SiVercel, SiGithub
} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";



const About = () => {
    const { t, language } = useLanguage();
    
    return (
        <div className="lg:flex w-full px-2 ">
            <div className="lg:flex lg:w-9/12 lg:h-full ml-10 pt-10">
                <div className="">
                    <h1 className="text-white">{t.about.title}</h1>
                    <p>{t.about.intro}</p>
                    <div>
                        <div className="flex pt-10 ">
                            <div className="bg-[#12171F] flex items-center justify-center rounded-xl">
                                <div className="framer-4lu5f8 w-16 flex items-center justify-center" style={{ fill: "currentColor", color: "currentColor" }}>
                                    <Globe className="w-7 h-7" />
                                </div>
                            </div>
                            <div className="ml-6">
                                <h1 className="text-white">{t.about.expertise.web.title}</h1>
                                <p>{t.about.expertise.web.description}</p>
                            </div>
                        </div>
                        <div className="flex pt-10 ">
                            <div className="bg-[#12171F] flex items-center justify-center rounded-xl">
                                <div className="framer-4lu5f8 w-16 flex items-center justify-center" style={{ fill: "currentColor", color: "currentColor" }}>
                                    <Scale className="w-7 h-7" />
                                </div>
                            </div>
                            <div className="ml-6">
                                <h1 className="text-white">{t.about.expertise.fullstack.title}</h1>
                                <p>{t.about.expertise.fullstack.description}</p>
                            </div>
                        </div>
                        <div className="flex pt-10 ">
                            <div className="bg-[#12171F] flex items-center justify-center rounded-xl">
                                <div className="framer-4lu5f8 w-16 flex items-center justify-center" style={{ fill: "currentColor", color: "currentColor" }}>
                                    <Zap className="w-7 h-7" />
                                </div>
                            </div>
                            <div className="ml-6">
                                <h1 className="text-white">{t.about.expertise.innovation.title}</h1>
                                <p>{t.about.expertise.innovation.description}</p>
                            </div>
                        </div>
                        <div className="flex pt-10 ">
                            <div className="bg-[#12171F] flex items-center justify-center rounded-xl">
                                <div className="framer-4lu5f8 w-16 flex items-center justify-center" style={{ fill: "currentColor", color: "currentColor" }}>
                                    <MessageSquareText className="w-7 h-7" />
                                </div>
                            </div>
                            <div className="ml-6">
                                <h1 className="text-white">{t.about.expertise.cloud.title}</h1>
                                <p>{t.about.expertise.cloud.description}</p>
                            </div>
                        </div>
                        <div className="pt-10  ">
                            <h1 className="text-white text-2xl">{t.about.specialization.title}</h1>
                            <p className="pt-2">{t.about.specialization.subtitle}</p>
                        </div>
                        <div className="pt-10  ">
                            <h1 className="text-white text-2xl">{t.about.strategy.title}</h1>
                            <p className="pt-2">{t.about.strategy.subtitle}</p>
                        </div>
                        <div className="pt-10  ">
                            <h1 className="text-white text-2xl">{t.about.crypto.title}</h1>
                            <p className="pt-2">{t.about.crypto.description}</p>
                        </div>
                        <div className="pt-10  ">
                            <h1 className="text-white text-2xl">{t.about.marketing.title}</h1>
                            <p className="pt-2">{t.about.marketing.description}
                            </p>
                        </div>

                    </div>
                </div>
            </div>

            
            <div className="lg:w-3/12 lg:border-l-2 border-[#1E2D3D] lg:h-full pt-10 px-3 space-y-4">
                {/* Languages */}
                <div className="px-3 py-5 rounded-lg border border-[#1F2836] bg-[#12171F]">
                    <h1 className="text-white font-semibold mb-4">{t.about.languages}</h1>
                    <div className="grid grid-cols-2 xl:grid-cols-3 gap-3">
                        <div className="flex flex-col justify-center items-center p-2 hover:bg-[#1E2D3D] rounded transition-colors">
                            <SiJavascript size={35} color="#F7DF1E" />
                            <p className="text-xs mt-1">JavaScript</p>
                        </div>
                        <div className="flex flex-col justify-center items-center p-2 hover:bg-[#1E2D3D] rounded transition-colors">
                            <SiTypescript size={35} color="#3178C6" />
                            <p className="text-xs mt-1">TypeScript</p>
                        </div>
                        <div className="flex flex-col justify-center items-center p-2 hover:bg-[#1E2D3D] rounded transition-colors">
                            <SiPython size={35} color="#3776AB" />
                            <p className="text-xs mt-1">Python</p>
                        </div>
                        <div className="flex flex-col justify-center items-center p-2 hover:bg-[#1E2D3D] rounded transition-colors">
                            <SiHtml5 size={35} color="#E34F26" />
                            <p className="text-xs mt-1">HTML5</p>
                        </div>
                        <div className="flex flex-col justify-center items-center p-2 hover:bg-[#1E2D3D] rounded transition-colors">
                            <SiCss3 size={35} color="#1572B6" />
                            <p className="text-xs mt-1">CSS3</p>
                        </div>
                        <div className="flex flex-col justify-center items-center p-2 hover:bg-[#1E2D3D] rounded transition-colors">
                            <SiNodedotjs size={35} color="#339933" />
                            <p className="text-xs mt-1">Node.js</p>
                        </div>
                    </div>
                </div>

                {/* Frameworks */}
                <div className="px-3 py-5 rounded-lg border border-[#1F2836] bg-[#12171F]">
                    <h1 className="text-white font-semibold mb-4">{t.about.frameworks}</h1>
                    <div className="grid grid-cols-2 xl:grid-cols-3 gap-3">
                        <div className="flex flex-col justify-center items-center p-2 hover:bg-[#1E2D3D] rounded transition-colors">
                            <SiReact size={35} color="#61DAFB" />
                            <p className="text-xs mt-1">React</p>
                        </div>
                        <div className="flex flex-col justify-center items-center p-2 hover:bg-[#1E2D3D] rounded transition-colors">
                            <RiNextjsFill size={35} color="white" />
                            <p className="text-xs mt-1">Next.js</p>
                        </div>
                        <div className="flex flex-col justify-center items-center p-2 hover:bg-[#1E2D3D] rounded transition-colors">
                            <SiNestjs size={35} color="#E0234E" />
                            <p className="text-xs mt-1">NestJS</p>
                        </div>
                        <div className="flex flex-col justify-center items-center p-2 hover:bg-[#1E2D3D] rounded transition-colors">
                            <SiExpress size={35} color="white" />
                            <p className="text-xs mt-1">Express</p>
                        </div>
                        <div className="flex flex-col justify-center items-center p-2 hover:bg-[#1E2D3D] rounded transition-colors">
                            <SiTailwindcss size={35} color="#06B6D4" />
                            <p className="text-xs mt-1">Tailwind</p>
                        </div>
                    </div>
                </div>

                {/* Databases & Tools */}
                <div className="px-3 py-5 rounded-lg border border-[#1F2836] bg-[#12171F]">
                    <h1 className="text-white font-semibold mb-4">
                        {language === 'en' ? 'Databases & Tools' : 'Bases de Datos'}
                    </h1>
                    <div className="grid grid-cols-2 xl:grid-cols-3 gap-3">
                        <div className="flex flex-col justify-center items-center p-2 hover:bg-[#1E2D3D] rounded transition-colors">
                            <SiMongodb size={35} color="#47A248" />
                            <p className="text-xs mt-1">MongoDB</p>
                        </div>
                        <div className="flex flex-col justify-center items-center p-2 hover:bg-[#1E2D3D] rounded transition-colors">
                            <SiPostgresql size={35} color="#4169E1" />
                            <p className="text-xs mt-1">PostgreSQL</p>
                        </div>
                        <div className="flex flex-col justify-center items-center p-2 hover:bg-[#1E2D3D] rounded transition-colors">
                            <SiPrisma size={35} color="white" />
                            <p className="text-xs mt-1">Prisma</p>
                        </div>
                        <div className="flex flex-col justify-center items-center p-2 hover:bg-[#1E2D3D] rounded transition-colors">
                            <SiRedis size={35} color="#DC382D" />
                            <p className="text-xs mt-1">Redis</p>
                        </div>
                        <div className="flex flex-col justify-center items-center p-2 hover:bg-[#1E2D3D] rounded transition-colors">
                            <SiSupabase size={35} color="#3ECF8E" />
                            <p className="text-xs mt-1">Supabase</p>
                        </div>
                        <div className="flex flex-col justify-center items-center p-2 hover:bg-[#1E2D3D] rounded transition-colors">
                            <SiGit size={35} color="#F05032" />
                            <p className="text-xs mt-1">Git</p>
                        </div>
                    </div>
                </div>

                {/* Deployment */}
                <div className="px-3 py-5 rounded-lg border border-[#1F2836] bg-[#12171F]">
                    <h1 className="text-white font-semibold mb-4">
                        {language === 'en' ? 'Deployment' : 'Despliegue'}
                    </h1>
                    <div className="grid grid-cols-2 xl:grid-cols-3 gap-3">
                        <div className="flex flex-col justify-center items-center p-2 hover:bg-[#1E2D3D] rounded transition-colors">
                            <SiVercel size={35} color="white" />
                            <p className="text-xs mt-1">Vercel</p>
                        </div>
                        <div className="flex flex-col justify-center items-center p-2 hover:bg-[#1E2D3D] rounded transition-colors">
                            <SiGithub size={35} color="white" />
                            <p className="text-xs mt-1">GitHub</p>
                        </div>
                        <div className="flex flex-col justify-center items-center p-2 hover:bg-[#1E2D3D] rounded transition-colors">
                            <SiDocker size={35} color="#2496ED" />
                            <p className="text-xs mt-1">Docker</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default About
