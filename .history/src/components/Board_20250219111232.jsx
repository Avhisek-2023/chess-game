import { useBoardContext } from "../contexts/BoardContextProvider.jsx";
import Piece from "./Piece";
import background from "/images/wooden-background_24972-623.avif";

const Board = () => {
  const { board, handlePieceClick, selected } = useBoardContext();
  console.log(board);

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
          transform: rotateX(20deg);
    perspective: 1500px;
    box-shadow: rgba(0, 0, 0, 0.4) 8px 15px 30px 10px;
    border: 3px solid #e2d7cd6b;
    border-radius: 6px;
        }}
      >
        {board.map((row, i) =>
          row.map((cell, j) => (
            <div
              key={j}
              className={`w-full h-full flex items-center justify-center aspect-square transition-all duration-75 ease-in-out
      ${(i + j) % 2 === 1 ? "bg-[#e2c089]" : "bg-[#b77c4c]"} ${
                selected?.row === i && selected?.col === j ? "addBg" : ""
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
    </div>
  );
};

export default Board;
