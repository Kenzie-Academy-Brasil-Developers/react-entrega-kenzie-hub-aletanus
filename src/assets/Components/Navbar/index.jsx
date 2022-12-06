import React from 'react'
import logo from "../../../assets/Logo.svg"

export const Navbar = ({ onClick, aTitle, type }) => {
  
  return (

    <nav>

      <figure>
          <img src={logo} alt="Kenzie Hub logo" />
      </figure>
      <a onClick={onClick} type={type} >{aTitle}</a>

    </nav>
    
  )
}