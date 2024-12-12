import React from "react"
import useCount from "../../context/count"

function Home() {
  const {add} = useCount();
  

  return (
    <>
    <h1>Home</h1>
    <button onClick={add}>+</button>
    </>
  )
}

export default Home
