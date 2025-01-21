import { useState } from "react";
import "./App.css";

function App() {
  console.log("App rendered", Math.random());
  const [value, setValue] = useState({
    value: 0,
  });

  const clickMe = () => {
    setValue({
      value: 0,
    });
  }; // here the compoenet will be rerender because object is a non premitive data type so i will always take it as a new value because non-premitive data types passes the refference not the actual value.

  // so to be safe from this we need to set dependency in the values inside the object like in useeffecf etc.

  return (
    <>
      <h1>Main value: {value.value} </h1>
      <button onClick={clickMe}>Click Me</button>
    </>
  );
}

export default App;
