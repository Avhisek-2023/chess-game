import { createContext, useContext, useEffect, useState } from "react";
import {
  calculatePossibleMoves,
  getValidMoves,
  getValidMovesPreventingCheck,
  isBlackKingCheck,
  isWhiteKingCheck,
  movePiece,
} from "../utils";
/* eslint-disable react/prop-types */
const BoardContext = createContext({
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
  handleDrop: () => {},
  handleDragOver: () => {},
});

export const BoardContextProvider = ({ children }) => {
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

  const handleDrop = (e, targetRow, targetCol) => {
    e.preventDefault();
    const draggedCell = JSON.parse(e.dataTransfer.getData("cell"));

    if (!draggedCell) return;

    const pieceMoves = getValidMoves(board, draggedCell);
    if (
      !pieceMoves.some(
        (move) => move.validRow === targetRow && move.validCol === targetCol
      )
    ) {
      return;
    }

    processMove(targetRow, targetCol, draggedCell);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
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

  const handleComputerMove = () => {
    let possibleMoves = calculatePossibleMoves(board);

    if (isBlackKingCheck(board)) {
      possibleMoves = possibleMoves.filter((move) => {
        const { board: tempBoard } = movePiece(
          move.from.row,
          move.from.col,
          move.to.validRow,
          move.to.validCol,
          board
        );
        return !isBlackKingCheck(tempBoard);
      });

      if (possibleMoves.length === 0) {
        console.log("Black is checkmated! White wins!");
        return;
      }
    }

    if (possibleMoves.length === 0) {
      setTurn("white");
      return;
    }

    const currentMove =
      possibleMoves[Math.floor(Math.random() * possibleMoves.length)];
    let { board: updatedBoard, killedPiece } = movePiece(
      currentMove.from.row,
      currentMove.from.col,
      currentMove.to.validRow,
      currentMove.to.validCol,
      board
    );
    setMoveHistory((prev) => [
      ...prev,
      getMoveName(
        updatedBoard[currentMove.to.validRow][currentMove.to.validCol],
        "computer"
      ),
    ]);
    if (killedPiece) {
      setWhiteKilledPieces((prev) => [...prev, killedPiece]);
    }
    setBoard(updatedBoard);
    setTurn("white");
  };

  const handlePlayerMove = (current_row, current_col, draggedCell) => {
    console.log(draggedCell);
    if (!draggedCell) {
      const validMove = validMoveCells.find(
        (move) => move.validRow === current_row && move.validCol === current_col
      );

      if (!validMove || !selected) return;
    }

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

    if (killedPiece) {
      setBlackKilledPieces((prev) => [...prev, killedPiece]);
    }

    setBoard(updatedBoard);
    setTurn("black");
    setSelected(null);
    setValidMoveCells([]);
  };

  const processMove = (current_row, current_col, draggedCell) => {
    console.log("Here");
    if (turn === "black") return;
    handlePlayerMove(current_row, current_col, draggedCell);
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
        processMove(cell.row, cell.col);
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
        processMove(cell.row, cell.col);
      } else if (cell.piece && cell.piece.player === turn) {
        setSelected(cell);
        setValidMoveCells(getValidMoves(board, cell));
      }
    }
  };

  useEffect(() => {
    initializeBoard(8, 8);
  }, []);

  useEffect(() => {
    if (turn === "black") {
      setTimeout(handleComputerMove, 1000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [turn]);

  return (
    <BoardContext.Provider
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
        handleDragOver,
        handleDrop,
      }}
    >
      {children}
    </BoardContext.Provider>
  );
};

export const useBoardContext = () => useContext(BoardContext);
