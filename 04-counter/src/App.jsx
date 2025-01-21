import { useState } from "react";
import "./App.css";

function App() {
  // useState hook is a method who manage the state of any variable in the ui, if we change the varible value so it will change that variable value in ui everywhere.
  let [counter, setCounter] = useState(10); // here in [] => [variableName, function], and useState(25) here 25 is default value of that variable.

  const incriment = () => {
    // counter = counter + 1
    // setCounter(counter)
    if (counter <= 19) {
      setCounter(counter + 1);
    }
  };
  const decriment = () => {
    // counter = counter - 1
    // setCounter(counter)

    if (counter >= 1) {
      setCounter(counter - 1);
    }
  };

  // if we want increment more than one by line so it will work like this
  /* // we can do this directly like multiple time print setCounter(counter + 1) it will understand like same work so increment only one.
  const increment = () => {
    setCounter(prevCounter => prevCounter + 1) // here prevcounter id the previous value of counter, here we pass a function to do that in ().
    setCounter(prevCounter => prevCounter + 1 )
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
  }
  */

  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={incriment}>Incriment Value</button>
      <button onClick={decriment}>Decriment Value</button>
      <p>The Range is : 0-20</p>
      <p>Value is : {counter}</p>
    </>
  );
}

export default App;
