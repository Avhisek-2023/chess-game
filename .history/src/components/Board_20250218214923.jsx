import { useBoardContext } from "../contexts/BoardContextProvider.jsx";
import Piece from "./Piece";

const Board = () => {
  const { board } = useBoardContext();
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen p-4 sm:p-6 md:p-8 bg-['b58863']">
      <div
        className="grid grid-cols-8 w-full max-w-[90vw] sm:max-w-[80vw] md:max-w-[60vw] lg:max-w-[40vw] min-w-[300px] aspect-square shadow-md items-center mx-auto my-auto"
        style={{
          transform: "rotateX(20deg)",
          perspective: "1500px",
          boxShadow: "8px 15px 30px 10px rgba(0,0,0,0.4)",
        }}
      >
        {board.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <div
              key={colIndex}
              className={`w-full h-full flex items-center justify-center aspect-square transition-all duration-75 ease-in-out
      ${(rowIndex + colIndex) % 2 === 1 ? "bg-[#f0d9b5]" : "bg-[#b58863]"}`}
            >
              <Piece cell={cell} isVisible={cell.piece ? true : false} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Board;
