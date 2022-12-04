import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../../assets/Logo.svg"

export const Navbar = ({ to, alt, linkName, type, hidden }) => {
  
  return (

    <nav>

      <figure>
          <img src={logo} alt="Kenzie Hub logo" />
      </figure>
    
      <Link to={to} hidden={hidden}>{linkName}</Link>

    </nav>
    
  )
}