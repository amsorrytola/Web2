import { useSelector } from "react-redux"
import Addtodo from "./components/Addtodo"
import TodoList from "./components/TodoList"

function App() {
  const todos = useSelector(state => state.todos)

  console.log(todos)
  return (
    <>
    <Addtodo/>
    {todos.map((todo)=>{
      return <TodoList key={todo.id} todo={todo}/>
      })}
  
    </>
  )
}

export default App
