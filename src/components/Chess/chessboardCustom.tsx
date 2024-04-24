'use client'
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const GameContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(20, 5%);
  border: 1px solid #ccc; /* Añade un borde alrededor del tablero */
  min-width: 80%; /* Ajusta el ancho del tablero */
  min-height: 50vh; /* Ajusta la altura del tablero */
`;

const Cell = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => (props.isSnake ? 'green' : props.isFood ? 'transparent' : 'rgba(1, 22, 39, 0.84)')};
  background-image: ${(props) => (props.isFood ? 'url(greenaple.png)' : 'none')}; /* Reemplaza "path/to/your/image" con la ruta de tu imagen */
  background-size: cover; /* Ajusta el tamaño de la imagen para cubrir toda la celda */
  background-repeat: no-repeat; /* Evita que la imagen se repita */
  border-radius: ${(props) => (props.isSnake ? '50%' : '0')};
`;

const Game = () => {
    const [snake, setSnake] = useState([{ x: 10, y: 10 }]);
    const [food, setFood] = useState({ x: 5, y: 5 });
    const [direction, setDirection] = useState('RIGHT');
    const [gameOver, setGameOver] = useState(false);

    useEffect(() => {
        const handleKeyPress = (e) => {
            switch (e.key) {
                case 'ArrowUp':
                    setDirection('UP');
                    break;
                case 'ArrowDown':
                    setDirection('DOWN');
                    break;
                case 'ArrowLeft':
                    setDirection('LEFT');
                    break;
                case 'ArrowRight':
                    setDirection('RIGHT');
                    break;
                default:
                    break;
            }
        };

        document.addEventListener('keydown', handleKeyPress);

        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, []);

    useEffect(() => {
        const moveSnake = () => {
            const newSnake = [...snake];
            let newHead = { ...snake[0] };

            switch (direction) {
                case 'UP':
                    newHead.y -= 1;
                    break;
                case 'DOWN':
                    newHead.y += 1;
                    break;
                case 'LEFT':
                    newHead.x -= 1;
                    break;
                case 'RIGHT':
                    newHead.x += 1;
                    break;
                default:
                    break;
            }

            if (
                newHead.x < 0 ||
                newHead.x >= 20 ||
                newHead.y < 0 ||
                newHead.y >= 20 ||
                newSnake.some((segment) => segment.x === newHead.x && segment.y === newHead.y)
            ) {
                setGameOver(true);
                return;
            }

            newSnake.unshift(newHead);
            if (newHead.x === food.x && newHead.y === food.y) {
                setFood({ x: Math.floor(Math.random() * 20), y: Math.floor(Math.random() * 20) });
            } else {
                newSnake.pop();
            }

            setSnake(newSnake);
        };

        const interval = setInterval(moveSnake, 200);

        return () => clearInterval(interval);
    }, [snake, direction, food]);

    const renderGrid = () => {
        const grid = [];
      
        for (let y = 0; y < 20; y++) {
          for (let x = 0; x < 20; x++) {
            const isSnake = snake.some((segment) => segment.x === x && segment.y === y);
            const isFood = food.x === x && food.y === y;
            const isWall = x === 0 || x === 19 || y === 0 || y === 19;
      
            grid.push(<Cell key={`${x}-${y}`} isSnake={isSnake} isFood={isFood} isWall={isWall} />);
          }
        }
      
        return grid;
      };

    return (
        <div className='w-full h-full  '>
            <GameContainer>
                {gameOver ? (
                    <h2>Game Over!</h2>
                ) : (
                    <Grid>{renderGrid()}</Grid>
                )}
            </GameContainer>
        </div>
    );
};

export default Game;
