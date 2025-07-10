import { useBoardContext } from "../contexts/BoardContextProvider";
import { GiSplitCross } from "react-icons/gi";
const Sidebar = () => {
  const { moveHistory, sidebar, clickSidebar } = useBoardContext();

  return (
    <div
      className={`fixed top-0 right-0 h-full w-64 bg-gray-800 text-white shadow-lg transition-transform duration-300 z-100 ${
        sidebar ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex">
        <span
          className=" absolute top-2 left-[-15px] text-xl"
          onClick={clickSidebar}
        >
          <GiSplitCross />
        </span>

        <h2 className="text-lg font-bold p-4">Move History</h2>
      </div>

      <ul className="p-4">
        {moveHistory.map((move, index) => (
          <li key={index} className="border-b py-2">
            {index + 1}. {move}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
