import React from "react"
import { useParams } from "react-router"
import useCount from "../../context/count";

function About() {
  const params = useParams();
  const {sub}=useCount();

  return (
    <>
    <h1>About {params.tola}</h1>
    <button onClick={sub}>-</button>
    </>
  )
}

export default About
