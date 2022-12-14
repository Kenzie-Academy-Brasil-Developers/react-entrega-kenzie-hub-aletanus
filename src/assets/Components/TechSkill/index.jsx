import React from 'react'
import trashLogo from "../../../assets/Trash-Delete-Icon.svg"
import editLogo from "../../../assets/Edit-Icon.png"

export const TechSkill = ({ className, tecnologyName, level, type, hidden, onClick }) => {
  
  return (

    <>

      <h3>{tecnologyName}</h3>

        <p hidden={hidden} >{level}</p>
        

          {/* <button className={className} type={type} hidden={hidden} onClick={onClick} >
            <figure>
              <img src={editLogo} alt="Edit" />
            </figure>
          </button>
    
          <button className={className} type={type} hidden={hidden} onClick={onClick} >
            <figure>
              <img src={trashLogo} alt="Trash" />
            </figure>
          </button> */}

    </>
    
  )
}