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
import { useBoardContext } from "../contexts/BoardContextProvider";
const Player1 = () => {
  const { turn, whiteKilledPieces } = useBoardContext();
  return (
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
      <div className="flex flex-wrap gap-2 md:max-w-[250px] ">
        {whiteKilledPieces.map((piece, index) => (
          <div
            key={index}
            className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center  rounded-full"
          >
            <img
              src={pieceImages[piece.type][piece.player]}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Player1;
