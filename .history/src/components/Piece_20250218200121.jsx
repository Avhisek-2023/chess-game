/* eslint-disable react/prop-types */

const Piece = ({ cell }) => {
  return (
    <div
      className={`w-8 sm:w-8 md:w-14 h-8 sm:h-8 md:h-14 rounded-full shadow-md cursor-pointer flex items-center justify-center
          transition-opacity border-2`}
    ></div>
  );
};

export default Piece;
