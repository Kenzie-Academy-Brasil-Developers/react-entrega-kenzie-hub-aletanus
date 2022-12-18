import React, { useState, useEffect } from "react"
import { Navbar } from "../../Components/Navbar"
import { Header } from "../../Components/Header"
import { TechSkill } from "../../Components/TechSkill"
import { UserContext } from "../../../Context/userContext"
import { TechContext } from "../../../Context/techContext"
import { useContext } from "react"
import { StyledPageTemplate } from "../../../Styles/page-template"
import { ModalCreateTecnology } from "./Modal"
import { ModalEditTecnology } from "./ModalEdit"

export const DashboardPage = () => {

  const { loggedUserData, logout, usersTechSkills } = useContext(UserContext);
  const { modal, setModal, modalEdit } = useContext(TechContext)

  return (

    <>

      <StyledPageTemplate>

        <Navbar buttonTitle="Sair" type="" onClick={(even) => logout(even)} />
        <Header
          username={`Olá, ${loggedUserData.name.toUpperCase().trim()}!`}
          pDescription={`${loggedUserData.course_module}`}
          hidden={true}
          id="h2"
          className="p"
        />

        <main>
          <Header
            id="h2"
            className="p"
            username="Tecnologias"
            buttonTitle="+"
            type="button"
            onClick={() => setModal(true)}
          />

          <section>
            <article>
              <ul>
                { !usersTechSkills.length ? (
                  <TechSkill
                    tecnologyName={`Clique no botão "${"+"}" e adicione a sua primeira tecnologia.`}
                    type="button"
                    hidden={true}
                  />
                ) : (
                  usersTechSkills.map((tech) => (
                    <TechSkill
                      tech={tech}
                      key={`${tech.id}`}
                      tecnologyName={`${tech.title}`}
                      level={`${tech.status}`}
                      type="button"
                    />
                  ))
                )}
              </ul>
            </article>
          </section>
        </main>

        { modal && (<ModalCreateTecnology/>) }

        { modalEdit && (<ModalEditTecnology/>) }

      </StyledPageTemplate>
      
    </>
  )
}