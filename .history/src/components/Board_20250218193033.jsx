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
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-8 gap-0">
        {board.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className={`w-16 h-16 flex items-center justify-center border ${
                (rowIndex + colIndex) % 2 === 0 ? "bg-brown-600" : "bg-gray-300"
              }`}
            >
              {cell.piece ? (
                <span
                  className={`text-lg ${
                    cell.piece.player === "black" ? "text-black" : "text-white"
                  }`}
                >
                  {cell.piece.type}
                </span>
              ) : null}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Board;
