import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router";
import { CountProvider } from "./context/count";


function App() {
  const [count,setcount] = useState(0);
  const add = ()=>{
    setcount(count+1)
  }
  const sub = ()=>{
    setcount(count-1)
  }
  const reset = ()=>{
    setcount(0)
  }

  

  return (
    <CountProvider value={{count, add, sub, reset}}>
  
    <Navbar/>
    <Outlet/>
    
    </CountProvider>
  )
}

export default App
