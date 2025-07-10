import { useEffect, useState } from "react";
import background from "/images/wooden-background_24972-623.avif";

const Board = () => {
  const [board, setBoard] = useState([[]]);

  const initializeBoard = (row, col) => {
    let tempBoard = [];
    for (let i = 0; i < row; i++) {
      tempBoard[i] = [];
      for (let j = 0; j < col; j++) {
        let Piece = null;
        if ((i == 3 && j == 3) || (i == 4 && j == 4)) {
          Piece = "black";
        } else if ((i == 3 && j == 4) || (i == 4 && j == 3)) {
          Piece = "white";
        }
        tempBoard[i][j] = {
          row: i,
          col: j,
          player: Piece,
        };
      }
    }
    setBoard(tempBoard);
  };

  useEffect(() => {
    initializeBoard(8, 8);
  }, []);

  return (
    <div
      className="flex flex-col items-center justify-center w-full min-h-screen p-4 sm:p-6 md:p-8 "
      style={{
        backgroundImage: `url('${background}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="grid grid-cols-8 w-full max-w-[90vw] sm:max-w-[80vw] md:max-w-[60vw] lg:max-w-[40vw] min-w-[300px] aspect-square shadow-md items-center mx-auto my-auto"
        style={{
          transform: "rotateX(20deg)",
          perspective: "1500px",
          boxShadow: "8px 15px 30px 10px rgba(0,0,0,0.4)",
          border: "3px solid #e2d7cd6b",
          borderRadius: "6px",
        }}
      >
        {board.map((row) =>
          row.map((cell, j) => (
            <div
              key={j}
              className={`w-full h-full flex items-center justify-center aspect-square transition-all duration-75 ease-in-out bg-green-500 border-2 border-slate-700
    `}
            ></div>
          ))
        )}
      </div>
    </div>
  );
};

export default Board;
