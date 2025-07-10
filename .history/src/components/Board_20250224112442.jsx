import { useBoardContext } from "../contexts/BoardContextProvider.jsx";
import Piece from "./Piece";
import background from "/images/wooden-background_24972-623.avif";
import gamer from "/images/gamer.png";
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

  return (
    <div
      className="flex flex-col items-center justify-center w-full min-h-screen p-4 sm:p-6 md:p-8 "
      style={{
        backgroundImage: `url('${background}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
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
      <div className="absolute flex gap-4 right-4 sm:right-10 bottom-10 sm:bottom-28 sm:gap-4">
        <div className="flex flex-wrap gap-2 md:max-w-[250px] ">
          {blackKilledPieces.map((piece, index) => (
            <div
              key={index}
              className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center  rounded-full"
            >
              <img
                src={pieceImages[piece.type][piece.player]}
                alt=""
                className="w-full h-full object-contain opacity-100"
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
