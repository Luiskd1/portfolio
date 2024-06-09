"use client"
import React, { useEffect, useRef, useState } from 'react';
import { motion } from "framer-motion";

const GameCulebra = () => {
    const canvasRef = useRef(null);
    const scoreDisplayRef = useRef(null);
    const highestScoreDisplayRef = useRef(null);
    const gameOverRef = useRef(null);
    const [isGameStarted, setIsGameStarted] = useState(false);
    const [isGameOver, setIsGameOver] = useState(false);
    const [highestScore, setHighestScore] = useState(0);

    const cell = 20;  // Tamaño de cada celda
    const rows = 20;  // Número de filas
    const cols = 20;  // Número de columnas

    useEffect(() => {
        const storedHighestScore = localStorage.getItem('highestScore');
        if (storedHighestScore) {
            setHighestScore(parseInt(storedHighestScore));
        }
    }, []);

    useEffect(() => {
        if (!isGameStarted) return;

        const canvas = canvasRef.current;
        const scoreDisplay = scoreDisplayRef.current;
        const highestScoreDisplay = highestScoreDisplayRef.current;
        const gameOver = gameOverRef.current;
        const c = canvas.getContext('2d');

        canvas.height = rows * cell;  // Altura del canvas
        canvas.width = cols * cell;   // Ancho del canvas

        let dir = { x: 0, y: 0 };
        let snakeInitial = { x: rows * cell / 2, y: cols * cell / 2 };
        let tail = [];
        for (let i = 0; i < 3; i++) {
            tail.push({
                x: snakeInitial.x - i * cell,
                y: snakeInitial.y
            });
        }
        let food = { x: snakeInitial.x + 2 * cell, y: snakeInitial.y };
        let score = 0;
        let start = true;

        function play() {
            setTimeout(() => {
                if (tail[0].x < 0 || tail[0].x === canvas.width || tail[0].y < 0 || tail[0].y === canvas.height || check(tail[0].x, tail[0].y)) {
                    setIsGameOver(true);
                    setIsGameStarted(false);
                    
                    // Actualizar el highest score inmediatamente cuando el juego termina
                    if (score > highestScore) {
                        setHighestScore(score);
                        localStorage.setItem('highestScore', score);
                    }
                    highestScoreDisplay.innerHTML = `Highest score: ${Math.max(highestScore, score)}`;
                    return;
                }

                if (tail[0].x === food.x && tail[0].y === food.y) {
                    score++;
                    tail.push({
                        x: tail[tail.length - 1].x,
                        y: tail[tail.length - 1].y
                    });
                    while (inTail(food)) {
                        food = {
                            x: Math.floor(Math.random() * cols) * cell,
                            y: Math.floor(Math.random() * rows) * cell
                        };
                    }
                }

                if (!(dir.x === 0 && dir.y === 0)) {
                    for (let t = tail.length - 1; t > 0; t--) {
                        tail[t].x = tail[t - 1].x;
                        tail[t].y = tail[t - 1].y;
                        start = false;
                    }
                }

                tail[0].x += dir.x;
                tail[0].y += dir.y;

                // Limpiar el canvas y redibujar todo
                c.clearRect(0, 0, canvas.width, canvas.height);
                c.fillStyle = '#011627';
                c.fillRect(0, 0, canvas.width, canvas.height);

                c.fillStyle = '#B22222';
                c.fillRect(food.x + 1, food.y + 1, cell - 2, cell - 2);

                for (let t in tail) {
                    c.fillStyle = '#39FF14';  // Color negro para la serpiente
                    c.fillRect(tail[t].x + 1, tail[t].y + 1, cell - 2, cell - 2);
                }

                scoreDisplay.innerHTML = `Score: ${score}`;

                requestAnimationFrame(play);
            }, 1000 / 12);
        }

        requestAnimationFrame(play);

        function inTail(food) {
            for (let t in tail) {
                if (food.x === tail[t].x && food.y === tail[t].y) {
                    return true;
                }
            }
            return false;
        }

        function check(x, y) {
            for (let i = 2; i < tail.length; i++) {
                if (x === tail[i].x && y === tail[i].y) {
                    return true;
                }
            }
            return false;
        }

        function keyPressed(e) {
            switch (e.keyCode) {
                case 37:
                    if (!start && dir.x !== cell)
                        dir = { x: -cell, y: 0 };
                    break;
                case 38:
                    e.preventDefault();
                    if (dir.y !== cell)
                        dir = { x: 0, y: -cell };
                    break;
                case 39:
                    if (dir.x !== -cell)
                        dir = { x: cell, y: 0 };
                    break;
                case 40:
                    e.preventDefault();
                    if (dir.y !== -cell)
                        dir = { x: 0, y: cell };
                    break;
            }
        }

        document.addEventListener('keydown', keyPressed);

        return () => {
            document.removeEventListener('keydown', keyPressed);
        };
    }, [isGameStarted, highestScore]);

    const startGame = () => {
        setIsGameStarted(true);
        setIsGameOver(false);
    };

    const restartGame = () => {
        setIsGameStarted(true);
        setIsGameOver(false);
    };

    return (
        <div className='flex w-full justify-center item text-white'>
            <div className="wrapper">
                <h1 id="playSnake" className='flex justify-center'>Play Snake! (using arrows)</h1>
                <div className="game-container" style={{ position: 'relative' }}>
                    <motion.canvas
                        id="snakeGame"
                        ref={canvasRef}
                        style={{ border: '2px solid #003366' }}
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: isGameStarted ? 1 : 0.5, opacity: isGameStarted ? 1 : 0 }}
                        transition={{ duration: 1 }}
                    ></motion.canvas>
                    <h2 id="snakeGameScore" ref={scoreDisplayRef}>Score: 0</h2>
                    <h3 id="snakeGameHighestScore" ref={highestScoreDisplayRef}>Highest Score: {highestScore}</h3>
                    <div ref={gameOverRef} className="game-over">
                        {isGameOver && (
                            <div className="game-over-message">
                                <h2 className=''>Game Over!</h2>
                                <button onClick={restartGame}>Play Again</button>
                            </div>
                        )}
                    </div>
                </div>
                {!isGameStarted && !isGameOver && (
                    <div
                        className="start-game-button-container"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <button className="start-game-button" onClick={startGame}>
                            Start Game
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default GameCulebra;
