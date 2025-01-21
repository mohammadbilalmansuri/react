import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import {jsx as _jsx} from "react/jsx-runtime.js" // another way to create element witout React.createElement by replacing jsx but it has some issues we can see the inner working of this in react github.

// -----------------------------------------------------------------------------------------------------------
// Concepts from 03_customReact Folder

function MyApp() {
  return (
    <div>
      <h1>Custom APP</h1>
    </div>
  );
}

/* 
// If we pass this object in the render this will not work because we have declare the props of the reactElement object accosding to us but react render methhod has his own props.
const reactElement = {
  type: 'a',
  props: {
      href: 'https://google.com',
      target: '_blank',
  },
  children: 'Click me to visit google'
}
*/

/*
// now create same thing accoding to React and it will work
const reactElement = React.createElement( // autometically inject by babble-transpiler of react
  'a', // tagename
  { //props of element
    href: "https:google.com",
    target: "_blank"
  },
  "click me to visit google" // children (if we inject variable so that also comes here)
)
ReactDOM.createRoot(document.getElementById('root')).render(
  reactElement
)
*/

/*
const newElement = (
  <a href="https://google.com">Visit Google</a>
)

//this will work like this -
ReactDOM.createRoot(document.getElementById('root')).render(
    newElement
)
*/

// -----------------------------------------------------------------------------------------------------------

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <MyApp />
  </React.StrictMode>
);
