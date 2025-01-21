import { useRef } from "react";

export const usePrevious = (value, initialValue) => {
  const ref = useRef({ current: initialValue, previous: initialValue });

  if (ref.current.current !== value) {
    ref.current.previous = ref.current.current; // Update the previous value
    ref.current.current = value; // Update the current value
  }

  return ref.current.previous; // Return the previous value
};

// ----------------------------------------
// Use -

/* import React, { useState } from "react";
import { usePrevious } from "./usePrevious";

const Counter = () => {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count, 0); // Initial value for the previous state is 0

  return (
    <div>
      <p>Current Count: {count}</p>
      <p>Previous Count: {prevCount}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default Counter; */
