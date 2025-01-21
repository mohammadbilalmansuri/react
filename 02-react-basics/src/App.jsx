import Chai from "./Chai.jsx";
function App() {
  const username = "Bilal Mansuri";
  /* in h1 this is how to injat variables = this is called expression, this is an evaluated expression it means we can only write here final outcome it means we can not perform any if-else, loop etc. inside it but we can do opertions like comparition, arthmetic etc. */
  return (
    <>
      <h1>Chai Aur React With Vite | {username}</h1>
      <Chai />
    </>
  );
}

export default App;
