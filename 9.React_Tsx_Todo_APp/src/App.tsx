import Todos from "./components/Todos"

function App() {


  return (
    <>
    
      <div className="p-4 m-8 flex items-center justify-center max-w-md mx-auto bg-violet-100 rounded-lg shadow-lg">
        <h1 className="font-bold text-2xl text-pink-500">React Typescript Todo App</h1>
        <Todos />
      </div>
    </>
  );
}

export default App
