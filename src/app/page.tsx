"use client"
import Image from "next/image";
import { useState } from "react"; // Importa useState
import ConsoleGame from "@/components/Chess/consoleGame";
import GameCulebra from "@/components/Chess/consoleGame";
import { motion } from "framer-motion"; // Importa motion desde framer-motion


export default function Home() {
  const [startGamesa, setStartGame] = useState(false); // Define startGame como una variable de estado

  return (
    <main className="flex text-lg mx-32 h-full items-center ">
      <div className="flex w-1/2 h-full text-white justify-center items-center">
        <div>
          <h2>Hi All. I am </h2>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-6xl text-white"
          >
            Luis Santana
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl text-[#4D5BCE]"
            variants={letterVariants}
          >
            {">"}Front-end developer
          </motion.h2>
        </div>
      </div>
      <div className="flex w-1/2 ">
        <div className="hidden sm:flex  snake-game w-full">
          <GameCulebra />
          <div className=" flex flex-col justify-center  w-full item-center ">
          <h1 className="text-white"> ussing arrow </h1>
          <Image src={"/buttonarrow.png"} alt="keyborad" height={200} width={350} className=""/>
          </div>
        </div>
      </div>
    </main>
  );
}

// Define las variantes para la animación letra por letra
const letterVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.05, // Define el retraso entre la aparición de cada letra
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.5,
    },
  },
};