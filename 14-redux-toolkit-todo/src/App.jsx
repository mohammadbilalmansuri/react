import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <h1 className="text-2xl font-bold">Todo with redux toolkit</h1>
      <div className="w-[600px] flex flex-col gap-5">
        <AddTodo />
        <Todos />
      </div>
    </>
  );
}

export default App;
