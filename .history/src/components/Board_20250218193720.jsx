import { useEffect, useState } from "react";

const Board = () => {
  const [board, setBoard] = useState([[]]);

  useEffect(() => {
    initializeBoard(8, 8);
  }, []);

  const initializeBoard = (row, col) => {
    const backRow = [
      "hathi",
      "ghoda",
      "wazir",
      "queen",
      "king",
      "wazir",
      "ghoda",
      "hathi",
    ];
    let tempBoard = [];
    for (let i = 0; i < row; i++) {
      tempBoard[i] = [];
      for (let j = 0; j < col; j++) {
        let Piece = null;
        if (i == 0 || i == 7) {
          Piece = { type: backRow[j], player: i === 0 ? "black" : "white" };
        } else if (i == 1 || i == 6) {
          Piece = { type: "pyada", player: i === 1 ? "black" : "white" };
        }
        tempBoard[i][j] = {
          row: i,
          col: j,
          piece: Piece,
        };
      }
    }
    setBoard(tempBoard);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen p-4 sm:p-6 md:p-8">
      <div
        className="grid grid-cols-8 w-full max-w-[90vw] sm:max-w-[80vw] md:max-w-[60vw] lg:max-w-[40vw] min-w-[300px] aspect-square shadow-md items-center mx-auto my-auto"
        style={{
          transform: "rotateX(20deg)",
          perspective: "1500px",
          boxShadow: "8px 15px 30px 10px rgba(0,0,0,0.4)",
        }}
      >
        {board.map((row, rowIndex) =>
          row.map((cell, colIndex) => {
            const isDark = (rowIndex + colIndex) % 2 === 1;
            return (
              <div
                key={`${rowIndex}-${colIndex}`}
                className={`w-full h-full flex items-center justify-center aspect-square  transition-all duration-75 ease-in-out
              ${isDark ? "bg-[#f0d9b5]" : "bg-[#b58863]"}`}
              ></div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Board;
