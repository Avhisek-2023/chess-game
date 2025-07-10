const Player1 = () => {
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
