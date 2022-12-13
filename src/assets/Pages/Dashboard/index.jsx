import React, { useState, useEffect } from 'react'
import { Navbar } from '../../Components/Navbar'
import { Header } from '../../Components/Header'
import { TechSkill } from '../../Components/TechSkill'
import { UserContext } from "../../../Context/userContext"
import { useContext } from "react" 
import { StyledPageTemplate } from '../../../Styles/page-template'

export const DashboardPage = ( ) => {

  const { toast, navigate, requestLoggedUserData, loggedUserData, loading } = useContext (UserContext)

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

  }

  return (

    <>

      {!loading ? ( <h1>...loading</h1>) : (
                  
        <StyledPageTemplate>

          <Navbar buttonTitle="Sair" type="" onClick={(even) => logout(even)} />
          <Header 
            username={`Olá, ${loggedUserData.username}!`} 
            pDescription={`${(loggedUserData.userCourseModule)}`} 
            hidden={true}
            id="h2"
            className="p"
          />
  
          <main>
  
            <Header  id="h2"className="p" username="Tecnologias" pDescription="+" type="button" onClick={(even) => addSkill(even)} />
                  
            <article>
              <section>
                <TechSkill tecnologyName={"Utilize o botão "+" para adicionar a primeira tecnologia à sua lista de competências."} type="button" hidden={true} />
              </section>
            </article>
  
          </main>
        </StyledPageTemplate>

      )}

    </>  
  )

}