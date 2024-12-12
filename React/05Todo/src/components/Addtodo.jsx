import {useDispatch} from 'react-redux'
import { addTodo } from '../reduxConfig/TodoSlice'
import { useState } from 'react'

function Addtodo() {
    const [insideinput,setinsideinput] = useState('')
    const dispatch = useDispatch();
    const addtodoonsubmit = (e) =>{
        e.preventDefault();
        dispatch(addTodo(insideinput));
    }

    return (
      <>
      <form onSubmit={addtodoonsubmit}>
        <input 
        type="text"
        value={insideinput} 
        onChange={(e)=>{setinsideinput(e.target.value)}} />
        <button type="submit">Add</button>
      </form>
      </>
    )
  }
  
  export default Addtodo
  