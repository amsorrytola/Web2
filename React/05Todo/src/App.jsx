import { useSelector } from "react-redux";
import Addtodo from "./components/Addtodo";
import TodoList from "./components/TodoList";

function App() {
  const todos = useSelector((state) => state.todos);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-8 px-4 space-y-8">
      <h1 className="text-4xl font-extrabold tracking-wider animate-pulse text-indigo-400">
        Todo App
      </h1>
      <Addtodo />
      <div className="w-full max-w-xl space-y-4">
        {todos.map((todo) => {
          return <TodoList key={todo.id} todo={todo} />;
        })}
      </div>
    </div>
  );
}

export default App;
