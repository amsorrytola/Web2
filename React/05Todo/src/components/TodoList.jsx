import { useDispatch } from "react-redux"
import { removeTodo,togglecomplete,savetodo } from "../reduxConfig/TodoSlice"
import { useState } from "react";


function TodoList({todo}) {
    console.log(todo);
    const id = todo.id;
    const [isreadOnly,setisreadOnly] = useState(true);
    const [todomsg,setTodomsg] = useState(todo.todo);
    const dispatch = useDispatch();
    

    return (
      <>
        <div className={todo.completed ? 'bg-green-400':'bg-white'}>
            <input 
            type="checkbox" 
            onChange={(e)=>{
                dispatch(togglecomplete(id));
            }}/>

            <input 
            type="text" 
            readOnly={isreadOnly} 
            value={todomsg} 
            onChange={(e)=>{setTodomsg(e.target.value)}} />

            <button 
            className={isreadOnly ? 'bg-gray-500' : 'hidden'}
            onClick={()=>{
                setisreadOnly(false);
            }}>Edit</button>

            <button 
            className={isreadOnly ? 'hidden' : 'bg-gray-500'}
            onClick={()=>{
                setisreadOnly(true);
                dispatch(savetodo({id,todomsg}))
            }}>Save</button>

            <button
            onClick={()=>{
                dispatch(removeTodo(id))
            }}>Remove</button>


        </div>
        
    
      </>
    )
  }
  
  export default TodoList
  