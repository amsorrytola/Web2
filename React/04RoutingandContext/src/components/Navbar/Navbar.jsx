import React from "react"
import { NavLink, Link } from "react-router"
import Home from "../Home/Home"
import About from "../About/About"
import Contact from "../Contact/Contact"
import useCount from "../../context/count"


function Navbar() {
    const {count} = useCount();
  

  return (
    <>
    <nav>
    <h1>Navbar: {count}</h1>
    <div>
        <NavLink
            to=""
            className={({isActive})=>
                isActive ? "text-red-500" : "text-black"
            }>
                Home
        </NavLink>

        <NavLink
            to="/about/:tola"
            className={({isActive})=>
                isActive ? "text-red-500" : "text-black"
            }>
                About
        </NavLink>
        <Link 
            to="/contact">
                Contact

        </Link>

    </div>
    </nav>

    </>
  )
}

export default Navbar
