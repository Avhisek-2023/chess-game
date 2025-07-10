import { useBoardContext } from "../contexts/BoardContextProvider";

const Player2 = () => {
  const { turn, blackKilledPieces } = useBoardContext();
  return (
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
  );
};

export default Player2;
