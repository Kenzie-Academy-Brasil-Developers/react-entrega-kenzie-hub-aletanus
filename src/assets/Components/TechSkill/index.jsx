import React from 'react'
import logo from "../../../assets/Trash-Delete-Icon.svg"

export const TechSkill = ({ className, tecnologyName, level, type, hidden, onClick }) => {
  
  return (

    <>

      <h3>{tecnologyName}</h3>

      <p hidden={hidden} >{level}</p>

      <button className={className} type={type} hidden={hidden} onClick={onClick} >
        <figure>
          <img src={logo} alt="Trash" />
        </figure>
      </button>

    </>
    
  )
}