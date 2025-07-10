import { useBoardContext } from "../contexts/BoardContextProvider.jsx";
import Piece from "./Piece";
import background from "/images/wooden-background_24972-623.avif";
import bot from "/images/bot.gif";
import gamer from "/images/gamer.png";
import BlackHathi from "/images/pieces/black/rook.png";
import BlackGhoda from "/images/pieces/black/knight.png";
import BlackWazir from "/images/pieces/black/bishop.png";
import BlackQueen from "/images/pieces/black/queen.png";
import BlackKing from "/images/pieces/black/king.png";
import whiteHathi from "/images/pieces/white/rook.png";
import whiteGhoda from "/images/pieces/white/knight.png";
import whiteWazir from "/images/pieces/white/bishop.png";
import whiteQueen from "/images/pieces/white/queen.png";
import whiteKing from "/images/pieces/white/king.png";
import blackPyada from "/images/pieces/black/pawn.png";
import whitePyada from "/images/pieces/white/pawn.png";
const Board = () => {
  const {
    board,
    handlePieceClick,
    selected,
    validMoveCells,
    turn,
    blackKilledPieces,
    whiteKilledPieces,
  } = useBoardContext();
  const pieceImages = {
    hathi: { white: whiteHathi, black: BlackHathi },
    ghoda: {
      white: whiteGhoda,
      black: BlackGhoda,
    },
    wazir: {
      white: whiteWazir,
      black: BlackWazir,
    },
    queen: {
      white: whiteQueen,
      black: BlackQueen,
    },
    king: { white: whiteKing, black: BlackKing },
    pyada: { white: whitePyada, black: blackPyada },
  };

  return (
    <div
      className="flex flex-col items-center justify-center w-full min-h-screen p-4 sm:p-6 md:p-8 "
      style={{
        backgroundImage: `url('${background}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute flex gap-4 sm:gap-8 left-4 sm:left-10 top-10 sm:top-28">
        <div
          className={`player-icon ${turn === "black" ? "active" : "inactive"}`}
        >
          <img
            src={bot}
            alt="Player 1"
            className="w-12 sm:w-16 md:w-20 rounded-xl"
          />
        </div>
        <div className="flex gap-2">
          {whiteKilledPieces.map((piece, index) => (
            <div
              key={index}
              className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-gray-800 text-white rounded-full"
            >
              <img src={pieceImages[piece.type][piece.player]} alt="" />
            </div>
          ))}
        </div>
      </div>
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
        {board.map((row, i) =>
          row.map((cell, j) => (
            <div
              key={j}
              className={`w-full h-full flex items-center justify-center aspect-square transition-all duration-75 ease-in-out
      ${(i + j) % 2 === 1 ? "bg-[#e2c089]" : "bg-[#b77c4c]"} ${
                selected?.row === i && selected?.col === j ? "addBg" : ""
              } ${
                validMoveCells.some(
                  (move) => move.validRow === i && move.validCol === j
                )
                  ? "addBg1"
                  : ""
              }`}
            >
              <Piece
                cell={cell}
                isVisible={cell.piece ? true : false}
                handlePieceClick={handlePieceClick}
              />
            </div>
          ))
        )}
      </div>
      <div className="absolute flex gap-4 right-4 sm:right-10 bottom-10 sm:bottom-28 ">
        <div className="flex flex-wrap gap-2 md:max-w-[250px] ">
          {blackKilledPieces.map((piece, index) => (
            <div
              key={index}
              className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-white rounded-full"
            >
              <img
                src={pieceImages[piece.type][piece.player]}
                alt=""
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>

        <div
          className={`player-icon ${turn === "white" ? "active" : "inactive"}`}
        >
          <img src={gamer} alt="Player 1" className="w-12 sm:w-16 md:w-20" />
        </div>
      </div>
    </div>
  );
};

export default Board;
