/* eslint-disable react/prop-types */
import BlackHathi from "../../public/images/pieces/black/rook.png";
import BlackGhoda from "../../public/images/pieces/black/knight.png";
import BlackWazir from "../../public/images/pieces/black/bishop.png";
import BlackQueen from "../../public/images/pieces/black/queen.png";
import BlackKing from "../../public/images/pieces/black/king.png";
import whiteHathi from "../../public/images/pieces/white/rook.png";
import whiteGhoda from "../../public/images/pieces/white/knight.png";
import whiteWazir from "../../public/images/pieces/white/bishop.png";
import whiteQueen from "../../public/images/pieces/white/queen.png";
import whiteKing from "../../public/images/pieces/white/king.png";

const Piece = ({ cell }) => {
  const { type, player } = cell.piece;
  const pieceImages = {
    hathi: { white: "/pieces/white_rook.png", black: "/pieces/black_rook.png" },
    ghoda: {
      white: "/pieces/white_knight.png",
      black: "/pieces/black_knight.png",
    },
    wazir: {
      white: "/pieces/white_bishop.png",
      black: "/pieces/black_bishop.png",
    },
    queen: {
      white: "/pieces/white_queen.png",
      black: "/pieces/black_queen.png",
    },
    king: { white: "/pieces/white_king.png", black: "/pieces/black_king.png" },
    pyada: { white: "/pieces/white_pawn.png", black: "/pieces/black_pawn.png" },
  };

  return (
    <div className="w-8 sm:w-8 md:w-14 h-8 sm:h-8 md:h-14 flex items-center justify-center">
      <img
        src={pieceImages[type][player]}
        alt={`${player} ${type}`}
        className="w-full h-full"
      />
    </div>
  );
};

export default Piece;
