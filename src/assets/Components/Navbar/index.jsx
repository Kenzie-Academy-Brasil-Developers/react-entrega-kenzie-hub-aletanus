import React from "react"
import logo from "../../../assets/Logo.svg"
import { StyledButton } from "../../../Styles/buttons-style"

export const Navbar = ({ onClick, buttonTitle, type, hidden }) => {
  
  return (

    <nav>

      <figure>
          <img src={logo} alt="Kenzie Hub logo" />
      </figure>
      <StyledButton className="gray-button" onClick={onClick} type={type} hidden={hidden} >{buttonTitle}</StyledButton>

    </nav>
    
  )
}