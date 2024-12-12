import { useDispatch } from "react-redux";
import { addTodo } from "../reduxConfig/TodoSlice";
import { useState } from "react";

function Addtodo() {
  const [insideInput, setInsideInput] = useState("");
  const dispatch = useDispatch();

  const addTodoOnSubmit = (e) => {
    e.preventDefault();
    if (!insideInput.trim()) return; // Prevent adding empty todos
    dispatch(addTodo(insideInput));
    setInsideInput("");
  };

  return (
    <form
      onSubmit={addTodoOnSubmit}
      className="flex items-center space-x-4 max-w-xl w-full"
    >
      <input
        type="text"
        value={insideInput}
        onChange={(e) => setInsideInput(e.target.value)}
        placeholder="Add a new todo..."
        className="flex-1 p-3 rounded-lg bg-gray-800 text-indigo-400 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      />
      <button
        type="submit"
        className="px-4 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-600 font-bold text-white transition-transform duration-300 hover:scale-105"
      >
        Add
      </button>
    </form>
  );
}

export default Addtodo;
