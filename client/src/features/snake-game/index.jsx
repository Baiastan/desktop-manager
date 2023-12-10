import React, { useEffect, useState } from "react";

import "./style.css";

const SnakeGame = () => {
  const [snake, setSnake] = useState([{ x: 0, y: 0 }]);
  const [food, setFood] = useState({ x: 5, y: 8 });
  const [direction, setDirection] = useState("");
  const [gridSize, setGridSize] = useState(15);
  const [gameOver, setGameOver] = useState(false);

  const moveSnake = () => {
    let newSnake = [...snake];
    let head = { ...newSnake[0] };

    console.log(head);

    switch (direction) {
      case "RIGHT":
        head.x += 1;
        break;
      case "LEFT":
        head.x -= 1;
        break;
      case "DOWN":
        head.y += 1;
        break;
      case "UP":
        head.y -= 1;
        break;
      default:
        break;
    }

    newSnake.unshift(head);
    newSnake.pop();

    if (head.x >= gridSize || head.x < 0 || head.y >= gridSize || head.y < 0) {
      setGameOver(true);
    }

    setSnake(newSnake);
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      switch (e.keyCode) {
        case 37: // left arrow
          if (direction !== "RIGHT") {
            setDirection("LEFT");
          }
          break;
        case 38: // up arrow
          if (direction !== "DOWN") {
            setDirection("UP");
          }
          break;
        case 39: // right arrow
          if (direction !== "LEFT") {
            setDirection("RIGHT");
          }
          break;
        case 40: // down arrow
          if (direction !== "UP") {
            setDirection("DOWN");
          }
          break;
        default:
          break;
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    const gameInterval = setInterval(() => {
      if (!gameOver && direction !== "") moveSnake();
    }, 500);

    return () => {
      clearInterval(gameInterval);
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [snake, gameOver, direction]);

  const renderGrid = () => {
    let grid = [];

    //row
    for (let i = 0; i < gridSize; i++) {
      //col
      for (let j = 0; j < gridSize; j++) {
        let className = "grid-cell";
        if (snake.some((segment) => segment.x === j && segment.y === i)) {
          className = "grid-cell snake-cell";
        } else if (food.x === j && food.y === i) {
          className = "grid-cell food-cell";
        }

        grid.push(<div className={className} key={`${i}-${j}`}></div>);
      }
    }

    return <div className="grid">{grid}</div>;
  };

  return (
    <div>
      <h1>Welcome to Snake Game!</h1>
      {gameOver ? <div>Game Over</div> : <div className="game-container">{renderGrid()}</div>}
    </div>
  );
};

export default SnakeGame;
