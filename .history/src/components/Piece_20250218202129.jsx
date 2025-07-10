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

const Piece = ({ cell, isVisible }) => {
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

  return ( isVisible ?
    <div className="w-8 sm:w-8 md:w-14 h-8 sm:h-8 md:h-14 flex items-center justify-center">
      <img
        src={pieceImages[cell.piece.type][cell.piece.player]}
        alt={""}
        className="w-full h-full"
      />
    </div>
  );
};

export default Piece;
