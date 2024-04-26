"use client"
import Image from "next/image";
import ChessboardCustom from "@/components/Chess/chessboardCustom";
import Game from "@/components/Chess/chessboardCustom";
import { useState } from "react"; // Importa useState

export default function Home() {
  const [startGamesa, setStartGame] = useState(false); // Define startGame como una variable de estado
  
  return (
    <main className="flex text-lg mx-32 h-full items-center " >
      <div className=" flex w-1/2 h-full  text-white  justify-center items-center">
        <div>
          <h2 >Hi All. I am </h2>
          <h1 className="text-6xl text-white">Luis Santana</h1>
          <h2 className="text-3xl text-[#4D5BCE]">{`>`}Front-end developer</h2>
        </div>
      </div>
      <div className="flex w-1/2 ">
        <div className="snake-game  w-full   ">
          <ChessboardCustom />
        </div>
      </div>
    </main>
  );
}
