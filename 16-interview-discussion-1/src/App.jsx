import { useState } from "react";
import "./App.css";

// whenever anything change in the state of component the whole component will be rerendered again.
function App() {
  const [value, setValue] = useState(1);

  //const [multipliedValue, setMultipliedValue] = useState(1)
  let multipliedValue = value * 5; // we can directly do this without using state because if something changed in this variable the whole component will be rerendered again because this is using along with the value state which is changing with the same event.
  // we can also say something change in ui with state the whole component will be rerender.

  // thats why we use to make components for very small things that makes changes.

  const multiplybyfive = () => {
    //setMultipliedValue(value * 5)
    setValue(value + 1);
  };

  return (
    <>
      <h1>Main value: {value} </h1>
      <button onClick={multiplybyfive}>Click to multiply by 5</button>
      <h2>Multiplied value: {multipliedValue} </h2>
    </>
  );
}

export default App;
