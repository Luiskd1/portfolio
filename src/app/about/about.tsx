import { Card } from "@nextui-org/react";
import { Globe, MessageSquareText, Scale, Zap } from "lucide-react";
import { SiJavascript, SiTypescript, SiHtml5, SiCss3, SiReact, SiNextdns, SiExpress, SiTailwindcss } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import Image from "next/image";



const About = () => {
    return (
        <div className="lg:flex w-full px-2 ">
            <div className="lg:flex lg:w-10/12 lg:h-full ml-10 pt-10">
                <div className="">
                    <h1 className="text-white">About me</h1>
                    <p>I&apos;m an electronic engineer with a passion for frontend programming. I specialize in using React and Next.js, and I&apos;m proficient in databases like MongoDB and Supabase.</p>
                    <div>
                        <div className="flex pt-10 ">
                            <div className="bg-[#12171F] flex items-center justify-center rounded-xl">
                                <div className="framer-4lu5f8 w-16 flex items-center justify-center" style={{ fill: "currentColor", color: "currentColor" }}>
                                    <Globe className="w-7 h-7" />
                                </div>
                            </div>
                            <div className="ml-6">
                                <h1 className="text-white">Full Web Development Expertise</h1>
                                <p>I specialize in crafting comprehensive web solutions, ranging from minimalist prototypes to fully-fledged, feature-rich websites. My expertise covers the entire spectrum of web development, ensuring that I can bring your vision to life, no matter the complexity.</p>
                            </div>
                        </div>
                        <div className="flex pt-10 ">
                            <div className="bg-[#12171F] flex items-center justify-center rounded-xl">
                                <div className="framer-4lu5f8 w-16 flex items-center justify-center" style={{ fill: "currentColor", color: "currentColor" }}>
                                    <Scale className="w-7 h-7" />
                                </div>
                            </div>
                            <div className="ml-6">
                                <h1 className="text-white">Full Stack Development</h1>
                                <p>I have expertise in frontend to backend development, DevOps, and scalable infrastructure.</p>
                            </div>
                        </div>
                        <div className="flex pt-10 ">
                            <div className="bg-[#12171F] flex items-center justify-center rounded-xl">
                                <div className="framer-4lu5f8 w-16 flex items-center justify-center" style={{ fill: "currentColor", color: "currentColor" }}>
                                    <Zap className="w-7 h-7" />
                                </div>
                            </div>
                            <div className="ml-6">
                                <h1 className="text-white">Business Model Innovation</h1>
                                <p>I help businesses innovate their models by leveraging my expertise in frontend development and strategic thinking.</p>
                            </div>
                        </div>
                        <div className="flex pt-10 ">
                            <div className="bg-[#12171F] flex items-center justify-center rounded-xl">
                                <div className="framer-4lu5f8 w-16 flex items-center justify-center" style={{ fill: "currentColor", color: "currentColor" }}>
                                    <MessageSquareText className="w-7 h-7" />
                                </div>
                            </div>
                            <div className="ml-6">
                                <h1 className="text-white">FinOps / Serverless / Cloud Native</h1>
                                <p>I&apos;m experienced in FinOps, serverless architecture, and cloud-native development, enabling businesses to optimize costs and scalability.</p>
                            </div>
                        </div>
                        <div className="pt-10  ">
                            <h1 className="text-white text-2xl">Areas of Specialization</h1>
                            <p className="pt-2">A set of unorthodox yet complimentary skills to create advantage</p>
                        </div>
                        <div className="pt-10  ">
                            <h1 className="text-white text-2xl">Strategy and Digital Transformation</h1>
                            <p className="pt-2">A set of unorthodox yet complimentary skills to create advantage</p>
                        </div>
                        <div className="pt-10  ">
                            <h1 className="text-white text-2xl">Cryptocurrency</h1>
                            <p className="pt-2">Deep knowledge of Blockchain and Cryptocurrency, have done speaking engagements and passed the ConsenSys Blockchain Developer Academy in 2018.</p>
                        </div>
                        <div className="pt-10  ">
                            <h1 className="text-white text-2xl">Growth Marketing</h1>
                            <p className="pt-2">I have a fascination with growth marketing, using technology, data and non-obvious approaches to getting customers and obtaining growth.
                            </p>
                        </div>

                    </div>
                </div>
            </div>

            
            <div className="  lg:w-2/12  lg:border-l-2 border-[#1E2D3D] lg:h-full   pt-10 px-3   ">
                <div className="pl-3 py-5 rounded-lg border border-[#1F2836]  bg-[#12171F]">
                    <h1 className="text-white">Languages</h1>
                    <div className="grid grid-cols-2 lg:grid-cols-1 2xl:grid-cols-2 gap-4 pt-4 ">
                        <div className="flex flex-col  justify-center text-center ">
                            <SiJavascript size={40} color="yellow" className="flex w-full justify-center" />
                            <p>JavaScript</p>
                        </div>
                        <div className="text-center">
                            <SiTypescript size={40} color="blue" className="flex w-full justify-center" />
                            <p>TypeScript</p>
                        </div>
                        <div className="text-center">
                            <SiHtml5 size={40} color="orange" className="flex w-full justify-center" />
                            <p>HTML5</p>
                        </div>
                        <div className="text-center">
                            <SiCss3 size={40} color="#2965f1" className="flex w-full justify-center" />
                            <p>CSS3</p>
                        </div>
                    </div>
                </div>
                <div className="pl-3 py-5 mt-4 rounded-lg border border-[#1F2836]  bg-[#12171F]">
                    <h1 className="text-white">Frameworks</h1>
                    <div className="grid grid-cols-2 lg:grid-cols-1 2xl:grid-cols-2 gap-4 pt-4 ">
                        <div className="flex flex-col  justify-center text-center ">
                            <SiReact size={40} color="#2965f1" className="flex w-full justify-center" />
                            <p>React</p>
                        </div>
                        <div className="text-center">
                            <RiNextjsFill  size={40} color="white" className="flex w-full justify-center"/>
                            <p>next.js</p>
                        </div>
                        <div className="text-center">
                            <SiExpress size={40} color="white" className="flex w-full justify-center" />
                            <p>Express</p>
                        </div>
                        <div className="text-center">
                            <SiTailwindcss size={40} color="#2965f1" className="flex w-full justify-center" />
                            <p>Tailwind CSS</p>
                        </div>
                    </div>
                </div>


            </div>
        </div>

    )
}

export default About
