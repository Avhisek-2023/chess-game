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
import blackPyada from "../../public/images/pieces/black/pawn.png";
import whitePyada from "../../public/images/pieces/white/pawn.png";

const Piece = ({ cell }) => {
  const { type, player } = cell.piece;
  const pieceImages = {
    hathi: { white: whiteHathi, black: BlackHathi },
    ghoda: {
      white: whiteGhoda,
      black: BlackGhoda,
    },
    wazir: {
      white: BlackWazir,
      black: BlackWazir,
    },
    queen: {
      white: BlackQueen,
      black: BlackQueen,
    },
    king: { white: BlackKing, black: BlackKing },
    pyada: { white: blackPyada, black: blackPyada },
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
