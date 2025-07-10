import { createContext, useContext, useEffect, useState } from "react";
import {
  getValidMoves,
  getValidMovesPreventingCheck,
  isBlackKingCheck,
  isWhiteKingCheck,
  movePiece,
} from "../utils";
/* eslint-disable react/prop-types */
const TwoBoardContext = createContext({
  board: [[]],
  selected: null,
  validMoveCells: [],
  initializeBoard: () => {},
  handlePieceClick: () => {},
  blackKilledPieces: [],
  whiteKilledPieces: [],
  moveHistory: [],
  sidebar: false,
  clickSidebar: () => {},
});

export const TwoBoardContextProvider = ({ children }) => {
  const [board, setBoard] = useState([[]]);
  const [selected, setSelected] = useState(null);
  const [validMoveCells, setValidMoveCells] = useState([]);
  const [turn, setTurn] = useState("white");
  const [blackKilledPieces, setBlackKilledPieces] = useState([]);
  const [whiteKilledPieces, setWhiteKilledPieces] = useState([]);
  const [moveHistory, setMoveHistory] = useState([]);
  const [sidebar, setSidebar] = useState(false);

  const getMoveName = (cell, from) => {
    return {
      move: `${cell.piece?.type.charAt(0).toUpperCase()}${String.fromCharCode(
        cell.col + 97
      )}${7 - cell.row + 1}`,
      from: from,
    };
  };

  const clickSidebar = () => {
    setSidebar((prev) => !prev);
  };
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

  const handlePlayerMove = (current_row, current_col) => {
    const validMove = validMoveCells.find(
      (move) => move.validRow === current_row && move.validCol === current_col
    );

    if (!validMove || !selected) return;

    let { board: updatedBoard, killedPiece } = movePiece(
      selected.row,
      selected.col,
      current_row,
      current_col,
      board
    );

    setMoveHistory((prev) => [
      ...prev,
      getMoveName(updatedBoard[current_row][current_col], "player"),
    ]);

    if (isWhiteKingCheck(updatedBoard)) {
      console.log("Invalid move, white king still in check");
      return;
    }

    if (killedPiece && turn === "white") {
      setBlackKilledPieces((prev) => [...prev, killedPiece]);
    } else if (killedPiece && turn === "black") {
      setWhiteKilledPieces((prev) => [...prev, killedPiece]);
    }
    setBoard(updatedBoard);
    setTurn((prev) => (prev === "black" ? "white" : "black"));
    setSelected(null);
    setValidMoveCells([]);
  };

  const handlePieceClick = (cell) => {
    if (selected?.row === cell.row && selected?.col === cell.col) {
      setSelected(null);
      setValidMoveCells([]);
      return;
    }

    const isInCheck =
      turn === "white" ? isWhiteKingCheck(board) : isBlackKingCheck(board);

    if (isInCheck) {
      if (
        validMoveCells.some(
          (move) => move.validRow === cell.row && move.validCol === cell.col
        )
      ) {
        handlePlayerMove(cell.row, cell.col);
      } else if (cell.piece && cell.piece.player === turn) {
        setSelected(cell);

        setValidMoveCells(getValidMovesPreventingCheck(board, cell));
      }
    } else {
      if (
        validMoveCells.some(
          (move) => move.validRow === cell.row && move.validCol === cell.col
        )
      ) {
        handlePlayerMove(cell.row, cell.col);
      } else if (cell.piece && cell.piece.player === turn) {
        setSelected(cell);
        setValidMoveCells(getValidMoves(board, cell));
      }
    }
  };

  useEffect(() => {
    initializeBoard(8, 8);
  }, []);

  return (
    <TwoBoardContext.Provider
      value={{
        board,
        handlePieceClick,
        selected,
        validMoveCells,
        turn,
        blackKilledPieces,
        whiteKilledPieces,
        moveHistory,
        clickSidebar,
        sidebar,
      }}
    >
      {children}
    </TwoBoardContext.Provider>
  );
};

export const useTwoBoardContext = () => useContext(TwoBoardContext);
