'use client';
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import GameCulebra from "@/components/Chess/consoleGame";
import { motion } from "framer-motion"; // Importa motion desde framer-motion
import ParticlesSearch from "@/components/particule/particules";

export default function Home() {
  const [startGamesa, setStartGame] = useState(false); // Define startGame como una variable de estado

  return (
    <main className="flex flex-col lg:flex-row text-lg h-full items-center bg-transparent relative">
      <div className="absolute inset-0 z-0" style={{ opacity: 0.1 }}>
        {/* Aquí se coloca la imagen de fondo */}
        <Image src="/spark.gif" alt="Spark" layout="fill" objectFit="cover" />
      </div>
      <div className="flex pl-2 lg:pl-0 lg:w-1/2 h-full text-white justify-center items-center  relative z-10">
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
      <div className=" hidden w-full lg:w-1/2 h-full lg:flex justify-center items-center">
        <div className="hidden lg:flex snake-game w-full">
          <GameCulebra />
          <div className="flex flex-col justify-center items-center w-full">
            <h1 className="text-white"> using arrow </h1>
            <Image src={"/buttonarrow.png"} alt="keyboard" height={200} width={350} className="" />
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
