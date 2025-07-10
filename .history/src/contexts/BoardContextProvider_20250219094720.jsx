import { createContext, useContext, useEffect, useState } from "react";
/* eslint-disable react/prop-types */
const BoardContext = createContext({
  board: [[]],
  selectedCell: null,
  initializeBoard: () => {},
  handlePieceClick: () => {},
});

export const BoardContextProvider = ({ children }) => {
  const [board, setBoard] = useState([[]]);
  const [selected, setSelected] = useState();

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

  const handlePieceClick = (cell) => {
    console.log(cell);
  };

  useEffect(() => {
    initializeBoard(8, 8);
  }, []);

  return (
    <BoardContext.Provider value={{ board, handlePieceClick }}>
      {children}
    </BoardContext.Provider>
  );
};

export const useBoardContext = () => useContext(BoardContext);
