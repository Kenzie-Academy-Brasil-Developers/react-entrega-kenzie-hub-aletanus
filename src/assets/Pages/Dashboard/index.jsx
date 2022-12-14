import React, { useState, useEffect } from 'react'
import { Navbar } from '../../Components/Navbar'
import { Header } from '../../Components/Header'
import { TechSkill } from '../../Components/TechSkill'
import { UserContext } from "../../../Context/userContext"
import { TechContext } from '../../../Context/techContext'
import { useContext } from "react" 
import { StyledPageTemplate } from '../../../Styles/page-template'
import { ModalCreateTecnology } from './Modal'

export const DashboardPage = ( ) => {

  const { toast, navigate, requestLoggedUserData, loggedUserData, loading} = useContext (UserContext)
  const { registerUsersTechSkill, allUsersTechSkills, setAllUsersTechSkills} = useContext (TechContext)
  const [modalCreateTecnology, setModalCreateTecnology] = useState (false)
  
  requestLoggedUserData ()

  const logout = (even) => {

    even.preventDefault ()
    localStorage.removeItem("@USER.TOKEN")
    localStorage.removeItem("@USER.ID")
    setTimeout (() => {
      toast.success(`${(loggedUserData.username).toUpperCase()}, até logo!`)
    }, 100)
    setTimeout (() => {
      navigate ("/")
    }, 4000)
  }

  const addSkill = (even) => {
    even.preventDefault ()
    console.log ("Add a skill")
    setModalCreateTecnology (true)
  }

  return (

    <>

      {!loading ? ( <h1>...loading</h1>) : (
                  
        <StyledPageTemplate>

          {
            !modalCreateTecnology ? (<></>) : (<ModalCreateTecnology registerUsersTechSkill={registerUsersTechSkill} onClick={() => (setModalCreateTecnology (false))} />)
          }

          <Navbar buttonTitle="Sair" type="" onClick={(even) => logout(even)} />
          <Header 
            username={`Olá, ${loggedUserData.username}!`} 
            pDescription={`${(loggedUserData.userCourseModule)}`} 
            hidden={true}
            id="h2"
            className="p"
          />
  
          <main>
  
            <Header  id="h2"className="p" username="Tecnologias" buttonTitle="+" type="button" onClick={(even) => addSkill(even)} />
                  
            <article>
              <section>
                {
                  !allUsersTechSkills.length ? 
                  (<TechSkill tecnologyName={`Utilize o botão "${ "+" }"  para adicionar a sua primeira tecnologia.`} type="button" hidden={true} />) 
                  : (<TechSkill tecnologyName={`Tech" ${ "Xxx" }"`} level={`Level "${ "X" }"`} type="button"  />)
                }
                
              </section>
            </article>
  
          </main>

          
        </StyledPageTemplate>

      )}

    </>  
  )

}