import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numbers, setNumbers] = useState(false);
  const [characters, setCharacters] = useState(false);
  const [password, setPassword] = useState("");
  const [copy, setCopy] = useState("Copy");

  // useCallback Hook
  const passwordGenerator = useCallback(() => {
    setCopy("Copy");
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numbers) str += "0123456789d";
    if (characters) str += "!@#$%&";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numbers, characters, setPassword]); // here setPassword is just for optimization not neccesary.

  // useEffect Hook
  useEffect(() => {
    passwordGenerator(); // we can also directly add the functionality of passwordGenerator here rathe than call the function.
  }, [length, numbers, characters, passwordGenerator]);

  // useRef Hook
  const passwordRef = useRef(null);

  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(1, 30); // it set the maximum select and copy range
    window.navigator.clipboard.writeText(password);
    setCopy("Copied");
  }, [password]);

  return (
    <div className="w-screen h-screen relative bg-slate-900 flex flex-col justify-center items-center gap-7 text-white">
      <h1 className="text-5xl font-bold">Password Generator</h1>
      <div className="">
        <input
          type="text"
          value={password}
          className="bg-white outline-none w-80 p-3 rounded-l-lg placeholder:text-slate-600 text-black"
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <button
          className="text-white rounded-r-lg p-3 bg-blue-600 hover:bg-green-600 transition-all duration-200"
          onClick={copyPassword}
        >
          {copy}
        </button>
      </div>
      <div className="flex items-center gap-2">
        <input
          type="range"
          min={6}
          max={30}
          value={length}
          className=""
          id="length"
          onChange={(e) => setLength(e.target.value)}
        />
        <label htmlFor="length" className="text-lg">
          Length: {length}
        </label>
      </div>
      <div className="flex items-center gap-5 mt-[-10px]">
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            value={numbers}
            id="numbers"
            defaultChecked={numbers}
            onChange={() => {
              setNumbers((prev) => !prev);
            }}
            className="w-4 h-4"
          />
          <label htmlFor="numbers" className="text-lg">
            Numbers
          </label>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            value={characters}
            id="characters"
            defaultChecked={characters}
            onChange={() => {
              setCharacters((prev) => !prev);
            }}
            className="w-4 h-4"
          />
          <label htmlFor="characters" className="text-lg">
            Special Characters
          </label>
        </div>
      </div>
      <button
        className="bg-blue-600 transition-all duration-200 hover:bg-green-600 text-white p-3 rounded-lg"
        onClick={passwordGenerator}
      >
        Regenerate
      </button>
    </div>
  );
}

export default App;
