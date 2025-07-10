import { useBoardContext } from "../contexts/BoardContextProvider";
import { AiFillCloseCircle } from "react-icons/ai";
const Sidebar = () => {
  const { moveHistory, sidebar, clickSidebar } = useBoardContext();

  console.log(moveHistory);

  return (
    <div
      className={`fixed top-0 right-0 h-full overflow-y-auto w-64 bg-gray-800 text-white shadow-lg transition-all ease-in-out duration-800 z-[100] ${
        sidebar ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex">
        <span
          className=" absolute top-2 text-xl cursor-pointer"
          onClick={clickSidebar}
        >
          <AiFillCloseCircle size={28} color="red" />
        </span>
      </div>
      <h2 className="text-2xl mt-6  md:text-3xl font-bold ml-4 p-4 font-mono">
        Move History
      </h2>

      <ul className="p-4">
        {moveHistory.map((move, index) => (
          <li key={index} className=" py-2">
            {index + 1}. {move.move}
            <span> [{move.from}]</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
