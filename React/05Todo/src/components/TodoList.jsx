import { useDispatch } from "react-redux";
import { removeTodo, togglecomplete, savetodo } from "../reduxConfig/TodoSlice";
import { useState } from "react";

function TodoList({ todo }) {
  const id = todo.id;
  const [isReadOnly, setIsReadOnly] = useState(true);
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const dispatch = useDispatch();

  const generateRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div
      className={`p-4 rounded-lg transition-all duration-500 ${
        todo.completed
          ? "bg-green-500 text-white"
          : "bg-gray-800 text-indigo-400"
      }`}
    >
      <div className="flex items-center justify-between space-x-4">
        <input
          type="checkbox"
          checked={todo.completed}
          className="form-checkbox h-5 w-5 text-indigo-400 focus:ring-2 focus:ring-indigo-500"
          onChange={() => {
            dispatch(togglecomplete(id));
          }}
        />

        <input
          type="text"
          readOnly={isReadOnly}
          value={todoMsg}
          onChange={(e) => setTodoMsg(e.target.value)}
          className={`flex-1 p-2 text-lg font-semibold rounded-lg bg-gray-900 focus:outline-none ${
            isReadOnly ? "cursor-not-allowed" : "text-indigo-400"
          }`}
          style={{ color: isReadOnly ? "" : generateRandomColor() }}
        />

        <button
          className={`px-4 py-2 rounded-lg font-bold transition-transform duration-300 ${
            isReadOnly ? "bg-blue-500 hover:scale-105" : "hidden"
          }`}
          onClick={() => setIsReadOnly(false)}
        >
          Edit
        </button>

        <button
          className={`px-4 py-2 rounded-lg font-bold transition-transform duration-300 ${
            isReadOnly ? "hidden" : "bg-green-500 hover:scale-105"
          }`}
          onClick={() => {
            setIsReadOnly(true);
            dispatch(savetodo({ id, todoMsg }));
          }}
        >
          Save
        </button>

        <button
          className="px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600 font-bold text-white transition-transform duration-300 hover:scale-105"
          onClick={() => dispatch(removeTodo(id))}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default TodoList;
