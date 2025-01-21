import { useState } from "react";
import Card from "./components/Card";

function App() {
  /* // we can pass objects and arrays in the props values with the help of variable declaraion.
  let myObj = {
    username: "hitesh",
    age: 21
  }
  let newArr = [1, 2, 3]
  */

  return (
    <div className="w-full h-screen bg-neutral-900 text-white flex flex-col justify-center items-center">
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Tailwind test
      </h1>
      <div className="flex gap-5">
        <Card username="ChaiAurCode" btnText="Visit Channel" />
        <Card username="Bilal Mansuri" btnText="Visit Profile" />
      </div>
    </div>
  );
}

export default App;
