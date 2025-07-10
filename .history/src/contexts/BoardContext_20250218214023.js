import { createContext, useContext, useEffect, useState } from "react";
/* eslint-disable react/prop-types */
const BoardContext = createContext({
  board: [[]],
  initializeBoard: () => {},
});

export const BoardContextProvider = ({ children }) => {
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
    <BoardContext.Provider value={{ board }}>{children}</BoardContext.Provider>
  );
};

export const useBoardContext = useContext(BoardContext);
