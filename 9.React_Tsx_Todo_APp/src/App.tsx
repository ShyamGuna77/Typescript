import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { TodoProvider } from "./store/TodoContext";

function App() {


  return (
    <>

    <TodoProvider>
    
      <div className="p-4 m-8 flex items-center justify-center  bg-violet-100 rounded-lg shadow-lg">
        <h1 className="font-bold text-2xl text-pink-500">React Typescript Todo App</h1>
        <TodoList />
        <TodoForm />
      </div>
      </TodoProvider>
      
    </>
  );
}

export default App;
