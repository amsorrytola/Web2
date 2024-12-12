import {createSlice , nanoid} from '@reduxjs/toolkit';

const initialState = {
    todos: [
        {
            id: 1,
            todo: "code",
            completed: false,
        }
    ]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action)=>{
            const todo = {
                id: nanoid(),
                todo: action.payload,
                completed: false,
            }
            state.todos.push(todo);
        },
        removeTodo: (state, action)=>{
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload)
        },
        togglecomplete: (state,action)=>{
            const todo = state.todos.find((todo) => todo.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
        savetodo: (state,action)=>{
            const todo = state.todos.find((todo)=> todo.id === action.payload.id);
            if (todo){
                todo.todo = action.payload.todo
            }
        }

    }
})

export const {addTodo, removeTodo, togglecomplete, savetodo} = todoSlice.actions
export default todoSlice.reducer