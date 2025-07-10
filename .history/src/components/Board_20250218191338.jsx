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
        let piece = null;
        if (row == 0 || row == 7) {
          piece = { type: backRow[j], player: row === 0 ? "black" : "white" };
        } else if (row == 1 && row == 6) {
          piece = { type: "pyada", player: row === 1 ? "black" : "white" };
        }
        tempBoard[i][j] = {
          row: i,
          col: j,
          piece: piece,
        };
      }
    }
    setBoard(tempBoard);
  };

  return <div>Board</div>;
};

export default Board;
