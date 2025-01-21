import { useState } from "react";

function App() {
  const [color, setColor] = useState("black");

  return (
    <div
      className="w-full h-screen transition-all duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white p-3 rounded-xl">
          <button
            onClick={() => setColor("white")}
            className="capitalize outline-none px-4 py-2 rounded-xl shadow-lg"
            style={{ backgroundColor: "white" }}
          >
            white
          </button>
          <button
            onClick={() => setColor("red")}
            className="capitalize outline-none px-4 py-2 rounded-xl shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            red
          </button>
          <button
            onClick={() => setColor("green")}
            className="capitalize outline-none px-4 py-2 rounded-xl shadow-lg"
            style={{ backgroundColor: "green" }}
          >
            green
          </button>
          <button
            onClick={() => setColor("olive")}
            className="capitalize outline-none px-4 py-2 rounded-xl shadow-lg"
            style={{ backgroundColor: "olive" }}
          >
            olive
          </button>
          <button
            onClick={() => setColor("blue")}
            className="capitalize outline-none px-4 py-2 rounded-xl shadow-lg"
            style={{ backgroundColor: "blue" }}
          >
            blue
          </button>
          <button
            onClick={() => setColor("pink")}
            className="capitalize outline-none px-4 py-2 rounded-xl shadow-lg"
            style={{ backgroundColor: "pink" }}
          >
            pink
          </button>
          <button
            onClick={() => setColor("purple")}
            className="capitalize outline-none px-4 py-2 rounded-xl shadow-lg"
            style={{ backgroundColor: "purple" }}
          >
            purple
          </button>
          <button
            onClick={() => setColor("yellow")}
            className="capitalize outline-none px-4 py-2 rounded-xl shadow-lg"
            style={{ backgroundColor: "yellow" }}
          >
            yellow
          </button>
          <button
            onClick={() => setColor("brown")}
            className="capitalize outline-none px-4 py-2 rounded-xl shadow-lg"
            style={{ backgroundColor: "brown" }}
          >
            brown
          </button>
          <button
            onClick={() => setColor("gold")}
            className="capitalize outline-none px-4 py-2 rounded-xl shadow-lg"
            style={{ backgroundColor: "gold" }}
          >
            gold
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
