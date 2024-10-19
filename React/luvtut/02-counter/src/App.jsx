import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class='container'>
        <p>Your current count is : {count}</p>
        <button onClick={() => setCount((count) => count + 1)}>increment</button>
        <button onClick={() => setCount(0)}>reset</button>
        <button onClick={() => setCount((count) => count - 1)}>decrement</button>
      </div>
    </>
  )
}

export default App
