import React from 'react'
import logo from "../../../assets/Logo.svg"

export const Navbar = ({ onClick, buttonTitle, type, hidden }) => {
  
  return (

    <nav>

      <figure>
          <img src={logo} alt="Kenzie Hub logo" />
      </figure>
      <button onClick={onClick} type={type} hidden={hidden} >{buttonTitle}</button>

    </nav>
    
  )
}