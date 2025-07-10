import { createContext, useContext, useEffect, useState } from "react";
import { getValidMoves } from "../utils";
/* eslint-disable react/prop-types */
const BoardContext = createContext({
  board: [[]],
  selected: null,
  validMoveCells: [],
  initializeBoard: () => {},
  handlePieceClick: () => {},
});

export const BoardContextProvider = ({ children }) => {
  const [board, setBoard] = useState([[]]);
  const [selected, setSelected] = useState(null);
  const [validMoveCells, setValidMoveCells] = useState([]);

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

  const handleMove = (current_row, current_col) => {
    console.log(current_row, current_col);
  };

  const handlePieceClick = (cell) => {
    if (selected?.row === cell.row && selected?.col === cell.col) {
      setSelected(null);
      setValidMoveCells([]);
      return;
    }
    if (
      validMoveCells.some(
        (move) => move.validRow === cell.row && move.validCol === cell.col
      )
    ) {
      handleMove(cell.row, cell.col);
    } else if (cell.piece) {
      setSelected(cell);
      setValidMoveCells(getValidMoves(board, cell));
    }
  };

  useEffect(() => {
    initializeBoard(8, 8);
  }, []);

  return (
    <BoardContext.Provider
      value={{ board, handlePieceClick, selected, validMoveCells }}
    >
      {children}
    </BoardContext.Provider>
  );
};

export const useBoardContext = () => useContext(BoardContext);
