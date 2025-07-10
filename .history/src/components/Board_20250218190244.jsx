import { useEffect, useState } from "react";

const Board = () => {
  const [board, setBoard] = useState([[]]);

  useEffect(() => {
    initializeBoard(8, 8);
  }, []);

  const initializeBoard = (row, col) => {
    const firstRow = [];
    let tempBoard = [];
    for (let i = 0; i < row; i++) {
      tempBoard[i] = [];
      for (let j = 0; j < col; j++) {
        tempBoard[i][j] = {
          row_index: i,
          col_index: j,
          piece: (i + j) % 2 === 1 && (i < 3 ? "red" : i > 4 ? "black" : null),
          isKing: false,
        };
      }
    }
    setBoard(tempBoard);
  };

  return <div>Board</div>;
};

export default Board;
