import React from "react"
import useCount from "../../context/count"

function Contact() {
    const {reset} = useCount();
  

  return (
    <>
    <h1>Contact</h1>
    <button onClick={reset}>reset</button>
    </>
  )
}

export default Contact
