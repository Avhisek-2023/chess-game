import icon from "/images/icon.jpg";
import landingbg from "/images/bg-landing.jpg";
import "../styles/Landing.css";
function Landing() {
  return (
    <>
      <div
        className={`flex flex-col items-center overflow-hidden h-screen justify-center  bg-cover text-white p-6`}
        style={{ background: url }}
      >
        <div className="backdrop-blur-xs p-5 rounded-lg shadow-lg text-center flex flex-col items-center justify-center">
          <img
            src={icon}
            alt="Chess Board"
            className="rounded-lg shadow-lg mb-6 border-4 border-white"
          />
          <h1 className="text-6xl font-extrabold mb-4 outlined-text">
            Master Chess
          </h1>
          <p className="text-lg text-gray-200 mb-6">
            Play with AI or challenge your friends!
          </p>
          <div className="flex space-x-4">
            <button className="cursor-pointer px-6 py-3 bg-[#10b981] hover:bg-[#059669] rounded-xl text-lg font-semibold transition transform hover:scale-105 shadow-md">
              Play With Computer
            </button>
            <button className="cursor-pointer px-6 py-3 bg-[#065f46] hover:bg-[#044e3e] rounded-xl text-lg font-semibold transition transform hover:scale-105 shadow-md">
              Play With Friends
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
